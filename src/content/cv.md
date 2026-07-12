# Camilo Andres Castellanos Herrera

**Software Automation Engineer · AI Developer · Backend Engineer · Intelligent Systems Developer**

[LinkedIn](https://linkedin.com/in/camilo-castellanos-ai-automation) · [GitHub](https://github.com/camilo6castell) · [Portfolio](https://camilo-castellanos.vercel.app/) · +57 322 399 0733 · camilo.castell.dev@gmail.com · Bogotá, Colombia

---

## Summary

Software Automation & AI Developer with 4+ years of experience building backend systems, intelligent automation solutions, AI-powered applications, and LLM-based workflows across enterprise and personal projects. Specialized in Python automation, Java/Spring Boot backend development, Retrieval-Augmented Generation (RAG), AI agents, workflow orchestration, browser automation, and local LLM deployment. Experienced designing resilient automation architectures, integrating REST APIs, developing secure backend systems, implementing semantic retrieval pipelines, and building AI-assisted solutions using vector embeddings and locally hosted language models.

---

## Technical Skills

- **Languages:** Python, Java, JavaScript, TypeScript, SQL, HTML5, CSS3
- **Backend:** Spring Boot, Spring WebFlux, Node.js, Express.js, Flask, FastAPI, REST APIs, JWT Authentication
- **Frontend:** React, Redux, Angular, Bootstrap, Styled Components, Vite
- **AI & Automation:** RAG, AI Agents, Agentic Workflows, LangGraph, n8n, Prompt Engineering, Semantic Search, Vector Embeddings, FAISS, Ollama, Qwen, Browser Automation, Playwright, Power Automate, Power Apps, Copilot Studio
- **Databases:** PostgreSQL, MySQL, MongoDB, Spring Data JPA, Hibernate
- **DevOps & Systems:** Docker, CI/CD, Linux, Git, GitHub, OCI, systemd, Bash, Distrobox
- **Security:** Spring Security, JWT (JJWT), AES-GCM, RSA-OAEP, BCrypt, SSH
- **Architecture:** Hexagonal Architecture, Domain-Driven Design, Event-Driven Architecture, Reactive Programming, Agile, Scrum, Kanban
- **Testing & Quality:** Automation Testing, Integration Testing, API Testing, mypy, Fault-Tolerant Systems, Root Cause Analysis
- **Enterprise Tools:** ServiceNow, Microsoft Teams, Slack

---

## Work Experience

### Adidas — Process Automation Developer Intern
*Bogotá, Colombia · January 2025 – June 2025*
Microsoft Power Automate, Power Apps, Microsoft Teams, ServiceNow

- Assumed production-level development responsibilities within the first 3 months, supporting the global eCAR (Enterprise Capital Authorization Request) platform.
- Redesigned the global notification system (Email + Teams, dynamic theming), reducing notification-related incidents by ~30%.
- Built internal automation workflows and low-code apps with Power Automate and Power Apps, cutting repetitive operational workload by ~35%.
- Participated in full SDLC across Dev/Test/Prod, helping maintain stable deployments.
- Provided bilingual (EN/ES) technical support for enterprise users across multiple regions.
- Adapted a European internal marketplace platform for LATAM operations (business logic and data structures for local compliance).
- Led technical requirement discussions with stakeholders from Brazil, Peru, Mexico and Argentina, contributing to executive presentations for LATAM tech leadership.
- Produced technical documentation and onboarding guides later adopted as team reference material.
- Worked within Agile international teams using Scrum and Kanban.

### Sofka Technologies — Junior Developer Training
*Remote · January 2024 – June 2024*
Java, Spring Boot, React, Angular, MySQL, MongoDB

- Selected for a competitive, paid full-stack training program after an intensive technical evaluation.
- Built full-stack applications under strict delivery timelines using Java, Spring Boot, Spring Security, JWT, React and Angular.
- Applied Hexagonal Architecture, DDD and Event-Driven Architecture with async/reactive paradigms.
- Designed persistence layers combining MySQL and MongoDB in decoupled architectures.
- Built scalable frontends with reusable service abstractions and modular components.

---

## Projects

### MyAssistant — Local Multi-Context RAG System
*2026 – Present · Python, LangGraph, FastAPI, FAISS, Ollama, Gemini, Qwen, BeautifulSoup*

- Fully local RAG platform indexing thousands of private documents across isolated FAISS vector spaces, exposed through a production-ready FastAPI layer.
- Adaptive LangGraph retrieval graph with confidence-based conditional routing: low-similarity queries are automatically reformulated before retrieval is retried.
- Multi-provider, provider-per-node architecture — local Qwen for generation, Gemini for reformulation and review — swappable via environment variables, no graph code changes required.
- Review node that checks generated answers against retrieved chunks for hallucinations and source attribution, with a bounded correction loop and silent fail-safe.
- End-to-end ingestion pipelines (PDF, HTML, TXT, web crawling), semantic chunking, and cosine-similarity retrieval using BAAI/bge-small-en-v1.5 embeddings.
- Dual-mode prompt orchestration: strict evidence-only (HARD) vs. interpretive multi-source synthesis (SOFT).

### Gymbot — Autonomous Automation System
*2025 – Present · Python, Playwright, Linux, systemd, Telegram Bot API, YAML, Loguru*

- Fully autonomous browser automation system managing recurring scheduling/booking workflows without manual intervention.
- OS-level automation lifecycle using Linux RTC wake alarms and custom systemd hooks — wakes the machine, runs the workflow, and returns it to suspend.
- Fault-tolerant recovery pipeline (retries, monitoring, screenshot capture, fallback strategies), raising completion rates from ~70% to 95%+.
- Anti-detection mechanisms: randomized interaction patterns, fingerprint masking, human-behavior simulation.
- Real-time remote intervention via the Telegram Bot API for failures or CAPTCHA events.
- Environment-driven YAML/.env configuration with centralized logging via Loguru.

### CryptoMessage — Secure Backend + Frontend Messaging Platform
*2025 – Present · Java 17, Spring Boot 3, Spring Security, JWT, Docker, MySQL, React 18, TypeScript 5, Web Crypto API*

- Privacy-first, end-to-end encrypted messaging platform implementing zero-trust principles; the server only ever stores ciphertext.
- Client-side cryptography via the Web Crypto API: RSA-OAEP (2048-bit) for key generation and per-recipient encryption, AES-GCM (256-bit) + PBKDF2 (65,536 iterations) for private-key protection.
- Private keys live only in module-scoped memory — never in localStorage or session storage — to mitigate XSS/data-leakage.
- Stateless authentication with Spring Security + JWT, scheduled data-retention workflows enforcing irreversible deletion policies.
- React Router v6 guard pipeline with async JWT validation and passphrase-driven key derivation on session restore.
- Documented REST API (OpenAPI/Swagger), Dockerized multi-environment deployment via Spring Profiles.

### Library Provider — Reactive Event-Sourced Backend + Angular Frontend
*2025 · Java 21, Spring Boot 3, Spring WebFlux, MongoDB Atlas, Angular 17, DDD*

- Reactive REST API for library catalog and quotation management using Spring WebFlux and a custom event store (Event Sourcing) for auditable, replayable domain state.
- Modular Gradle multi-module structure separating domain, application and infrastructure layers.
- Angular 17 SPA with RxJS-driven reactive state, lazy loading, route guards and the Facade pattern.

---

## Education

- **SENA**, Bogotá, Colombia — Software Analysis and Development Technologist *(March 2023 – May 2026)*
- **Oracle** — Oracle Cloud Infrastructure (OCI) Foundations Associate *(August 2023)*
- **National University of Colombia**, Bogotá, Colombia — Psychology *(February 2014 – May 2019)*

---

## Core Competencies

AI Engineering · Applied AI · LLM Applications · Agentic Systems · Workflow Automation · Backend Development · Enterprise Software Development · Browser Automation · RAG Pipelines · API Integrations · Production Systems · Software Architecture

---

## Languages

- Spanish — Native
- English — B2 (Professional Working Proficiency)
