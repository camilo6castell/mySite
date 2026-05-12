import { cryptomessage } from "./projectsContent/cryptoMessage/cryptoMessage";
import { gymbot } from "./projectsContent/gymbot/gymbot";
import { libraryProvider } from "./projectsContent/libraryProvider/libraryProvider";
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
  projects: [cryptomessage, ragAiMultiContext, gymbot, libraryProvider],
};
