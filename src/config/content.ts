export const metadataContent_layout = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),

  title: "Camilo's portfolio",
  description: "Made to show my work",

  openGraph: {
    title: "Camilo's portfolio",
    description: "Explore my projects and experience",
    url: "https://miportfolio.com",
    siteName: "Camilo's portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export const navbarContent_navbar = {
  logo_day: "/logo/CC-logo_day.png",
  logo_night: "/logo/CC-logo_night.png",
  spawn_animation_duration: 2,
};

export const heroContent_hero = {
  badge: "● Available",
  Title: "Camilo Castellanos",
  role: "Software developer",
  DescOne:
    "Happy since childhood. Motivated by technology and taking things apart and understanding them.",
  DescTwo:
    "I’m a software developer driven by a deep curiosity for how systems work and how they can be improved. I build full-stack applications using Java, Python, and JavaScript, with a strong focus on backend development, automation, and practical problem solving.\nI enjoy designing solutions that eliminate repetitive work and make processes more efficient — from workflow automation and browser bots to AI-assisted systems like RAG pipelines.",
  DescThree:
    "For me, programming is not just about writing code, but about understanding problems deeply and creating tools that have real impact.\nI’m particularly interested in scalable backend systems, clean architecture, and open-source technologies. I’m constantly learning, experimenting, and building — always looking for better ways to solve real-world problems through software.",
  heroImage: "/images/home-photo.jpg",
};

export const projectsContent_projectLists = {
  projects: [
    {
      title: "This portfolio :)",
      summary:
        "Portfolio to show a little about me and my projects. Made in Next.js with React + TS and Styled-components con modelos ARIMA y visualización.",
      repo: "https://github.com/camilo6castell/mySite",
      demo: "",
    },
    {
      title: "CryptoMessage - Frontend",
      summary: "Messaging app with RSA encryption in React + TS.",
      repo: "https://github.com/camilo6castell/cryptomessage-client",
      demo: "cryptomessage-client.vercel.app",
    },
    {
      title: "Bingo Gran Buda - Frontend",
      summary:
        "Bingo game frontend made in Next.js with React and styled components",
      repo: "https://github.com/camilo6castell/elBingoGranBuda-Frontend",
      demo: "https://el-bingo-gran-buda-frontend.vercel.app",
    },
    {
      title: "Bingo Gran Buda - Backend",
      summary:
        "Bingo game backend made in Express.js with Node.js and MongoDB with Mongoose",
      repo: "https://github.com/camilo6castell/elBingoGranBuda-Backend",
      demo: "",
    },
    {
      title: "Library provider - Frontend",
      summary:
        "Library provider frontend project built with enterprise architecture, Angular with TypeScript and RXJS",
      repo: "https://github.com/camilo6castell/library-provider-frontend",
      demo: "https://library-provider-frontend.netlify.app",
    },
    {
      title: "Library provider - Backend",
      summary:
        "A library provider project built with hexagonal architecture, event sourcing, DDD, Springboot, and MongoDB.",
      repo: "https://github.com/camilo6castell/library-provider-backend",
      demo: "",
    },
    {
      title: "WaterQualityApp - Desktop application",
      summary:
        "Application in Java, using OOP and using SQLite and Java Swing. Its purpose is to perform internal processing and display it to the user via a graphical interface.",
      repo: "https://github.com/camilo6castell/water-quality-app",
      demo: "",
    },
    {
      title: "Gevora - Fullstack (Flask)",
      summary:
        "Gevora is a hotel management system web application developed using Python and the Flask library. It covers both frontend and backend, utilizing MySQL as the relational database, and is deployed on PythonAnywhere.",
      repo: "https://github.com/camilo6castell/Gevora",
      demo: "http://r4d3o.pythonanywhere.com/",
    },
    {
      title: "Instaya - Frontend",
      summary:
        "Frontend application for managing package delivery services by email. It's built in JavaScript with Node, React, and Vite.",
      repo: "https://github.com/camilo6castell/Instaya-frontend",
      demo: "https://instaya-frontend-cacastellanosh-unaleduco.vercel.app/",
    },
    {
      title: "Instaya - Backend",
      summary:
        "Backend application for managing package delivery services by email. It's built in Node.js with the help of Express and MongoDB as a non-relational database.",
      repo: "https://github.com/camilo6castell/Instaya-backend",
      demo: "",
    },
    {
      title: "health-api",
      summary:
        "API for centralized medical records management system.It is developed in Node, with the help of Express, MongoDB, Mongoose, BCrypt, Morgan, NodeMailer.",
      repo: "https://github.com/camilo6castell/health-api",
      demo: "",
    },
  ],
};

export const contactContent_contact = {
  name: "Camilo Castellanos",
  role: "Software, Web & Automation Developer",
  email: "kml107@hotmail.com",
  location: "Uelsen, Germany & Bogotá, Colombia",
  avatar: "/images/contact-photo.jpg", // cambia o pon tu imagen
  socials: [
    {
      label: "Github",
      href: "https://github.com/camilo6castell",
      color: ["#392031ff", "#8b2989ff"],
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/camilocastell/",
      color: ["#0077b5", "#00a0dc"],
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/573223990733",
      color: ["#25D366", "#128C7E"],
    },
  ],
};

export const projectsContent_projectList = {
  projects: [
    {
      title: "CryptoMessage",
      isFeatured: true,
      summary:
        "Privacy-first end-to-end encrypted messaging platform where all cryptographic operations happen exclusively in the browser. Implements per-recipient encryption, secure private key handling, and a zero-trust server architecture.",

      preview: "/images/repos/cryptomessage.png",

      code: {
        language: "typescript",
        content: `
// Per-recipient encryption before sending a message
export const sendSecureMessage = async (
  chatId: number,
  message: string,
  myPublicKey: CryptoKey,
  recipientPublicKey: CryptoKey,
  myId: number,
  recipientId: number
) => {

  // Encrypt message separately for each participant
  const encryptedForMe = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    myPublicKey,
    new TextEncoder().encode(message)
  );

  const encryptedForRecipient = await crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    recipientPublicKey,
    new TextEncoder().encode(message)
  );

  // Send map<userId, ciphertext>
  return await fetch('/api/v1/messages', {
    method: 'POST',
    body: JSON.stringify({
      chatId,
      contentByUser: {
        [myId]: bufferToBase64(encryptedForMe),
        [recipientId]: bufferToBase64(encryptedForRecipient)
      }
    })
  });
};
    `,
      },

      highlights: [
        "End-to-end encryption enforced entirely on the client using Web Crypto API",
        "Per-recipient ciphertext model (each message encrypted for every participant)",
        "Private key encrypted with AES-GCM using PBKDF2-derived passphrase",
        "Keys live only in memory — never stored in localStorage or sent in plaintext",
        "Stateless backend acting strictly as a ciphertext relay (zero-knowledge server)",
        "JWT-based authentication with secure key lifecycle and session rehydration",
      ],

      repos: [
        {
          name: "Backend (Spring Boot)",
          description:
            "Stateless REST API handling authentication, chats and encrypted message routing. Enforces domain-level access control and stores only ciphertext.",
          tech: [
            "Java 17",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "MariaDB",
            "Docker",
            "BouncyCastle",
          ],
          repo: "https://github.com/your-username/cryptomessage-backend",
          demo: "",
        },
        {
          name: "Frontend (React)",
          description:
            "Client-side application responsible for key generation, encryption/decryption and secure communication using the Web Crypto API.",
          tech: [
            "React",
            "TypeScript",
            "Web Crypto API",
            "Styled Components",
            "Vite",
          ],
          repo: "https://github.com/your-username/cryptomessage-frontend",
          demo: "https://cryptomessage-client.vercel.app/login",
        },
      ],
    },

    {
      title: "AI RAG MultiContexto",
      isFeatured: true,
      summary:
        "Modular Retrieval-Augmented Generation system that builds isolated semantic memory per domain. Designed to enable controlled, scalable knowledge retrieval with full ownership over embeddings and vector search.",

      code: {
        language: "python",
        content: `
# Query pipeline (simplified)

def query(context, text, top_k=5):
    index = load_faiss_index(context)
    metadata = load_metadata(context)

    query_embedding = embed(text)
    query_embedding = normalize(query_embedding)

    distances, indices = index.search(query_embedding, top_k)

    results = []
    for i in indices[0]:
        results.append(metadata[i]["chunk"])

    return results
    `,
      },

      highlights: [
        "Multi-context vector store architecture with full domain isolation",
        "Custom ingestion pipeline for PDF, HTML, TXT and web content",
        "Semantic search powered by FAISS with cosine similarity",
        "Chunking strategy with overlap for improved retrieval quality",
        "Web crawler for automated domain-specific knowledge ingestion",
        "Fully self-hosted RAG pipeline with no external dependencies",
      ],

      repos: [
        {
          name: "Core System",
          description:
            "End-to-end RAG pipeline including ingestion, web crawling, embedding generation and semantic retrieval using FAISS.",
          tech: [
            "Python 3.11",
            "FAISS",
            "NumPy",
            "BeautifulSoup",
            "Readability",
            "PyPDF",
            "FlagEmbedding",
          ],
          repo: "https://github.com/your-username/ai-rag-multicontexto",
          demo: "",
        },
      ],
    },

    {
      title: "Gymbot",
      isFeatured: true,
      summary:
        "Autonomous gym reservation bot with OS-level power management, human-like interaction simulation and Telegram-based remote recovery. Designed to run fully unattended on Linux systems.",

      code: {
        language: "python",
        content: `
#Example code for a Telegram-assisted recovery system
def with_recovery(
    action_fn: Callable,
    page: Page,
    action_name: str = "acción",
    max_retries: int | None = 3,
    auto_refresh_limit: int = 2,
) -> Any:
    retry_count = 0
    auto_refreshes = 0

    while True:
        try:
            return action_fn()

        except CaptchaDetectedError:
            logger.warning(f"🔒 → CAPTCHA en '{action_name}', solicitando ayuda...")
            action = wait_for_user_action(
                f"🔒 → CAPTCHA detectado en: {action_name}\nResuélvelo y responde.",
                timeout=600,
                retry_count=retry_count,
            )
            retry_count, auto_refreshes = _handle_user_action(
                action, page, action_name, retry_count, auto_refreshes
            )

        except Exception as e:
            logger.error(f"❌ → Error en '{action_name}': {e}")

            if max_retries is not None and retry_count >= max_retries:
                raise RuntimeError(
                    f"❌ → '{action_name}' falló tras {retry_count} intentos."
                )

            if auto_refreshes < auto_refresh_limit:
                auto_refreshes += 1
                retry_count += 1
                logger.info(
                    f"🔄 → Auto-refresh {auto_refreshes}/{auto_refresh_limit} para '{action_name}'..."
                )
                page.reload()
                page.wait_for_load_state("networkidle")
                continue

            action = wait_for_user_action(
                f"❌ → Error en: {action_name}\nfalló: {e}\n(después de {auto_refresh_limit} auto-refreshes)",
                timeout=600,
                retry_count=retry_count,
            )
            retry_count, auto_refreshes = _handle_user_action(
                action, page, action_name, retry_count, auto_refreshes
            )

#Section of code where the function responsible for sending notifications via 
#Telegram is called and waits for a response from the user to continue.

def wait_for_user_action(error_description, timeout=600, retry_count=0) -> str:
    full_msg = (
        f"❌ → {error_description}."
        "\n"
        "\n"
        "\tResponde"
        "\n"
        "0️⃣\tResume\n"
        "1️⃣\tRefresh & Retry"
        "\n"
        "\n"
        f"Intento #{retry_count}."
    )
    notify(full_msg)

    last_update_id = _get_last_update_id()  # ← ver abajo
    start = time.time()

    while time.time() - start < timeout:
        updates = getUpdates()
        for update in updates.get("result", []):
            update_id = update["update_id"]
            if update_id <= last_update_id:
                continue
            last_update_id = update_id

            text = update.get("message", {}).get("text", "").strip()
            if text == "0":
                notify("▶️ → Resuming...")
                return "resume"
            if text == "1":
                notify("🔄 → Refreshing and retrying...")
                return "refresh"

        time.sleep(5)

    notify("❌ → Timeout de recovery alcanzado. El bot se detendrá.")
    return "abort"


def _handle_user_action(
    action: str, page: Page, action_name: str, retry_count: int, auto_refreshes: int
) -> tuple[int, int]:
    """Ejecuta la acción del usuario y retorna (retry_count, auto_refreshes) actualizados."""
    if action == "resume":
        return retry_count + 1, 0
    elif action == "refresh":
        page.reload()
        page.wait_for_load_state("networkidle")
        return retry_count + 1, 0
    elif action == "abort":
        raise RuntimeError(f"❌ → Bot abortado durante '{action_name}'.")
    return retry_count, auto_refreshes
    `,
      },

      highlights: [
        "Fully autonomous execution with Linux RTC wakealarm and system suspend cycles",
        "Human-like interaction simulation to avoid bot detection (mouse, typing, delays)",
        "Layered recovery system with Telegram-based remote intervention",
        "Uses real Chromium profile with stealth browser fingerprinting",
        "Schedule-driven execution with YAML configuration and timezone handling",
      ],

      repos: [
        {
          name: "Automation System",
          description:
            "Python-based automation system integrating Playwright, systemd timers, RTC wake alarms and Telegram for fully autonomous gym class reservations.",
          tech: [
            "Python",
            "Playwright",
            "systemd",
            "Linux",
            "Telegram API",
            "PyYAML",
            "Loguru",
          ],
          repo: "https://github.com/camilo6castell/gym-bot",
          demo: "",
        },
      ],
    },

    // ─── Paste this object inside the projects[] array ───────────────────────────

    {
      title: "Library Provider",
      isFeatured: true,
      summary:
        "Reactive library management platform built on Hexagonal Architecture, Domain-Driven Design, and a fully custom Event Sourcing implementation. The server never stores entity state directly — every change is persisted as an immutable domain event and the aggregate is reconstituted by replaying its event stream.",

      code: {
        language: "java",
        content: `
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
    `,
      },

      highlights: [
        "Custom Event Sourcing implementation: state is never stored — aggregates are reconstituted by replaying domain events",
        "Hexagonal Architecture enforced at the Gradle module level: :model has zero external dependencies",
        "DDD tactical patterns built from scratch: AggregateRoot, DomainEvent, Entity, Value Objects, Commands",
        "Reactive non-blocking API with Spring WebFlux (Project Reactor) and functional RouterFunction",
        "Tiered pricing engine with demand multipliers, wholesale/retail modifiers, and seniority-based discounts",
        "Angular 17 SPA with custom BehaviorSubject state layer, Facade pattern, and lazy-loaded feature modules",
      ],

      repos: [
        {
          name: "Backend (Spring Boot + WebFlux)",
          description:
            "Reactive REST API structured as a Gradle multi-module project. Implements a custom Event Sourcing engine with MongoDB Atlas as the event store, DDD aggregates, and Spring WebFlux functional routing.",
          tech: [
            "Java 17",
            "Spring Boot",
            "Spring WebFlux",
            "Project Reactor",
            "MongoDB Atlas",
            "Gradle (multi-module)",
            "Docker",
            "DDD",
            "Event Sourcing",
          ],
          repo: "https://github.com/camilo6castell/library-provider-backend",
          demo: "",
        },
        {
          name: "Frontend (Angular 17)",
          description:
            "SPA with lazy-loaded public/private modules, functional route guards, a custom BehaviorSubject-based state layer, and the Facade pattern to decouple containers from business logic.",
          tech: [
            "Angular 17",
            "TypeScript",
            "RxJS",
            "Angular Router",
            "Angular Forms",
            "Karma + Jasmine",
          ],
          repo: "https://github.com/camilo6castell/library-provider-frontend",
          demo: "",
        },
      ],
    },
  ],
};
