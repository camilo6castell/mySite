import { cryptomessage } from "./projects/cryptoMessage/cryptoMessage";
import { gymbot } from "./projects/gymbot/gymbot";
import { ragAiMultiContext } from "./projects/ragAiMultiContext/ragAiMultiContext";

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
  badge: "Open to opportunities",
  Title: "Camilo Castellanos",
  roles: [
    "Software Automation Engineer",
    "AI Developer",
    "Full Stack Engineer",
  ],
  DescOne: "Automating the routine, so humans can shine.",
  DescTwo:
    "I'm a backend and automation engineer driven by a simple purpose: eliminate friction. I enjoy digging into complex workflows and finding creative ways to reduce manual effort, improve reliability, and streamline business processes. My sweet spot sits at the intersection of solid backend engineering, intelligent automation, and large language models.",
  DescThree:
    "With a background in Psychology that evolved naturally into software development, I see automation not just as a technical fix, but a human one — my goal isn't to replace judgment, it's to enhance it. I'm currently looking for new challenges where I can combine backend engineering, automation, and AI to build products or optimize internal systems with real, measurable impact.",
  heroImage: "/images/home-photo.jpg",
};

export const contactContent_contact = {
  name: "Camilo Castellanos",
  role: "Software Automation Engineer · AI & Backend Developer",
  email: "kml107@hotmail.com",
  location: "Uelsen, Germany & Bogotá, Colombia",
  avatar: "/images/contact-photo.jpg",
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
  projects: [cryptomessage, ragAiMultiContext, gymbot],
};

/* ============================
   TRACKS (roles / competency groupings)
   Each track maps competencies from the CV to the projects that prove them.
   `relatedProjectTitles` must match a `title` in projectsContent_projectList.projects.
============================ */
export const tracksContent_tracks = {
  sectionHeading: "¿Qué puedo resolver por ti?",
  tracks: [
    {
      slug: "ai-llm",
      title: "AI & LLM",
      competencies: [
        "Agentic Systems",
        "AI Engineering",
        "Applied AI",
        "LLM Applications",
        "RAG Pipelines",
        "Prompt Engineering",
      ],
      pitch:
        "Diseño e implemento sistemas de IA aplicada de punta a punta: pipelines RAG locales, orquestación multi-modelo con LangGraph, embeddings y recuperación semántica, y arquitecturas donde el modelo de lenguaje es un componente controlado dentro de un sistema mayor — no una caja negra. Trabajo tanto con modelos locales (Ollama, Qwen) como con proveedores en la nube, priorizando privacidad, trazabilidad y control sobre el pipeline completo.",
      relatedProjectTitles: ["MyAssistant"],
    },
    {
      slug: "automation",
      title: "Automation",
      competencies: [
        "Workflow Automation",
        "Browser Automation",
        "Production Systems",
        "Fault-Tolerant Systems",
      ],
      pitch:
        "Construyo sistemas de automatización resilientes que operan sin supervisión: desde bots de navegador con recuperación ante fallos y anti-detección, hasta flujos de trabajo de bajo código en entornos empresariales (Power Automate, Power Apps). Mi enfoque prioriza la observabilidad y la tolerancia a fallos — cada automatización que diseño está pensada para fallar de forma controlada y recuperarse sola.",
      relatedProjectTitles: ["Gymbot"],
    },
    {
      slug: "fullstack",
      title: "Fullstack Development",
      competencies: [
        "Backend Development",
        "Frontend Development",
        "Enterprise Software Development",
        "API Integrations",
        "Software Architecture",
      ],
      pitch:
        "Desarrollo aplicaciones completas de extremo a extremo: APIs seguras en Java/Spring Boot, SPAs en React con arquitecturas de estado bien pensadas, y una atención particular a la seguridad y la integridad de los datos. Me interesa especialmente el diseño zero-trust y la arquitectura limpia (Hexagonal, DDD) por encima de soluciones rápidas y desechables.",
      relatedProjectTitles: ["CryptoMessage"],
    },
  ],
};
