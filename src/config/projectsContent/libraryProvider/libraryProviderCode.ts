export const libraryProviderCode = `
// ── Event Sourcing: aggregate reconstitution from event stream ──────────────
//
// The User aggregate root is NEVER loaded from a state table.
// It is rebuilt by replaying every DomainEvent linked to its ID,
// each one mutating the in-memory state through UserBehavior.

public class User extends AggregateRoot<UserId> {

  public Email     email;
  public Password  password;
  public EntryDate entryDate;

  // Reconstitution constructor — infrastructure only, no business logic
  private User(UserId userId) {
    super(userId);
    subscribe(new UserBehavior(this)); // registers event → state handlers
  }

  // Replay entry point called by the use case
  public static User from(String userId, List<DomainEvent> history) {
    User user = new User(UserId.of(userId));
    history.forEach(user::applyEvent);   // mutates state, does NOT append
    return user;
  }
}

// ── Write path: how state change is produced and persisted ──────────────────
//
// The use case reconstitutes the aggregate, calls a domain method,
// then persists only the new uncommitted events — not the full entity.

public class SaveAndQuoteTextUseCase
    extends UseCaseForCommandMono<SaveAndQuoteTextCommand> {

  @Override
  public Mono<DomainEvent> apply(Mono<SaveAndQuoteTextCommand> commandMono) {
    return commandMono.flatMap(command ->

      // Step 1 — replay user's event history into the aggregate
      userRepository
        .getEventsByAggregateRootId(command.getUserId().value())
        .collect(Collectors.toList())
        .flatMap(events -> {

          User user = User.from(command.getUserId().value(), events);

          // Step 2 — execute domain logic: pricing rules, discount tiers
          user.quoteText(
            textCreated.getTitle(),
            textCreated.getInitialPrice(),
            TextTypeEnum.valueOf(textCreated.getTextType()),
            user.entryDate.value()   // drives seniority discount (12% / 17%)
          );

          // Step 3 — persist only the new uncommitted DomainEvents
          return Flux.fromIterable(user.getUncommittedChanges())
            .flatMap(userRepository::saveEvent)
            .last();
        })
    );
  }
}

// ── Domain integrity: Value Objects enforce invariants at construction ───────

public class Password implements IValueObject<String> {
  public Password(String password) {
    if (password.length() < 8 || password.length() > 64)
      throw new IllegalArgumentException("Password must be 8–64 characters");
    if (!containsUpperCase(password))
      throw new IllegalArgumentException("Requires at least one uppercase letter");
    if (!containsDigit(password))
      throw new IllegalArgumentException("Requires at least one digit");
    if (!containsSpecialCharacter(password))
      throw new IllegalArgumentException("Requires at least one special character");
    this.password = password;
  }
}
    `;
