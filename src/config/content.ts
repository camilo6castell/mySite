import { cryptomessage } from "./projectsContent/cryptoMessage/cryptoMessage";
import { gymbot } from "./projectsContent/gymbot/gymbot";
import { ragAiMultiContext } from "./projectsContent/ragAiMultiContext/ragAiMultiContext";

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
  role: "Software developer",
  DescOne:
    "Happy since childhood. Motivated by technology and taking things apart and understanding them.",
  DescTwo:
    "I’m a software developer driven by a deep curiosity for how systems work and how they can be improved. I build full-stack applications using Java, Python, and JavaScript, with a strong focus on backend development, automation, and practical problem solving.\nI enjoy designing solutions that eliminate repetitive work and make processes more efficient — from workflow automation and browser bots to AI-assisted systems like RAG pipelines.",
  DescThree:
    "For me, programming is not just about writing code, but about understanding problems deeply and creating tools that have real impact.\nI’m particularly interested in scalable backend systems, clean architecture, and open-source technologies. I’m constantly learning, experimenting, and building — always looking for better ways to solve real-world problems through software.",
  heroImage: "/images/home-photo.jpg",
};

export const contactContent_contact = {
  name: "Camilo Castellanos",
  role: "Software, Web & Automation Developer",
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
  tracks: [
    {
      slug: "ai-llm",
      title: "AI & LLM",
      competencies: [
        "Agentic Systems",
        "AI Engineering",
        "Applied AI",
        "LLM Applications",
      ],
      pitch:
        "Diseño e implemento sistemas de IA aplicada de punta a punta: pipelines RAG locales, orquestación multi-modelo con LangGraph, embeddings y recuperación semántica, y arquitecturas donde el modelo de lenguaje es un componente controlado dentro de un sistema mayor — no una caja negra. Trabajo tanto con modelos locales (Ollama, Qwen) como con proveedores en la nube, priorizando privacidad, trazabilidad y control sobre el pipeline completo.",
      relatedProjectTitles: ["MyAssistant"],
    },
    {
      slug: "automation",
      title: "Automation",
      competencies: ["Workflow Automation", "Browser Automation"],
      pitch:
        "Construyo sistemas de automatización resilientes que operan sin supervisión: desde bots de navegador con recuperación ante fallos y anti-detección, hasta flujos de trabajo de bajo código en entornos empresariales. Mi enfoque prioriza la observabilidad y la tolerancia a fallos — cada automatización que diseño está pensada para fallar de forma controlada y recuperarse sola.",
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
      ],
      pitch:
        "Desarrollo aplicaciones completas de extremo a extremo: APIs seguras en Java/Spring Boot, SPAs en React con arquitecturas de estado bien pensadas, y una atención particular a la seguridad y la integridad de los datos. Me interesa especialmente el diseño zero-trust y la arquitectura limpia por encima de soluciones rápidas y desechables.",
      relatedProjectTitles: ["CryptoMessage"],
    },
  ],
};
