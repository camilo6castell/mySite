export const metadataContent_layout = {
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
}

export const navbarContent_navbar = {
  logo_day: "/logo/CC-logo_day.png",
  logo_night: "/logo/CC-logo_night.png",
  spawn_animation_duration: 2
}

export const heroContent_hero = {
  badge: "● Available",
  Title: "Camilo Castellanos",
  role: "Software developer",
  DescOne: "Happy since childhood. Motivated by technology and taking things apart and understanding them.",
  DescTwo: "Software developer with more than 3 years of experience in full-stack development and process automation.Expert in Java (Spring Boot, WebFlux), JavaScript - TypeScript (React, Node.js), and Python, with a mastery ofscalable architectures (Hexagonal, DDD) and DevOps practices (Docker, CI/CD, Kubernetes). Quick to learn newprogramming languages, frameworks, and tools, and passionate about creating efficient, secure, and maintainablesolutions, integrating automation and web development to optimize operations.",
  heroImage: "/images/home-photo.jpg",
}

export const projectsContent_projectList = {
  projects: [
    {
      title: 'CryptoMessage',
      summary: 'Aplicación de mensajería con cifrado RSA. Backend en Spring Boot, frontend en React + TS.',
      stack: ['React', 'TypeScript', 'Spring Boot', 'MySQL'],
      repo: 'https://github.com/camilo6castell/cryptomessage',
      demo: '#'
    },
    {
      title: 'Library Provider Backend',
      summary: 'Servicio para gestión de bibliotecas con Event Sourcing y DDD.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Kafka'],
      repo: 'https://github.com/camilo6castell/library-provider-backend',
      demo: '#'
    },
    {
      title: 'Fractal Edge Predictor',
      summary: 'Predicción de series temporales con modelos ARIMA y visualización.',
      stack: ['Python', 'pmdarima', 'Plotly'],
      repo: 'https://github.com/camilo6castell/FractalEdge',
      demo: '#'
    }
  ]
}

export const contactContent_contact = {
  name: 'Camilo Castellanos',
  role: 'Software, Web & Automation Developer',
  email: 'kml107@hotmail.com',
  location: 'Uelsen, Germany & Bogotá, Colombia',
  avatar:
    '/images/contact-photo.jpg', // cambia o pon tu imagen
  socials: [
    { label: 'Github', href: 'https://github.com/camilo6castell', color: ['#392031ff', '#8b2989ff'] },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/camilocastell/', color: ['#0077b5', '#00a0dc'] },
    { label: 'WhatsApp', href: 'https://wa.me/573223990733', color: ['#25D366', '#128C7E'] },
  ],
}
