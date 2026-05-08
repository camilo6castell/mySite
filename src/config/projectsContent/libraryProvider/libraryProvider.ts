import { libraryProviderCode } from "./libraryProviderCode";

export const libraryProvider = {
  title: "Library Provider",
  isFeatured: true,
  summary:
    "Reactive library management platform built on Hexagonal Architecture, Domain-Driven Design, and a fully custom Event Sourcing implementation. The server never stores entity state directly — every change is persisted as an immutable domain event and the aggregate is reconstituted by replaying its event stream.",

  code: {
    language: "java",
    content: libraryProviderCode,
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
};
