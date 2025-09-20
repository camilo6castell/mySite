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
      title: 'This portfolio :)',
      summary: 'Portfolio to show a little about me and my projects. Made in Next.js with React + TS and Styled-components con modelos ARIMA y visualización.',
      repo: 'https://github.com/camilo6castell/mySite',
      demo: ''
    },
    {
      title: 'CryptoMessage - Frontend',
      summary: 'Messaging app with RSA encryption in React + TS.',
      repo: 'https://github.com/camilo6castell/cryptomessage-client',
      demo: 'cryptomessage-client.vercel.app'
    },
    {
      title: 'Bingo Gran Buda - Frontend',
      summary: 'Bingo game frontend made in Next.js with React and styled components',
      repo: 'https://github.com/camilo6castell/elBingoGranBuda-Frontend',
      demo: 'https://el-bingo-gran-buda-frontend.vercel.app'
    },
    {
      title: 'Bingo Gran Buda - Backend',
      summary: 'Bingo game backend made in Express.js with Node.js and MongoDB with Mongoose',
      repo: 'https://github.com/camilo6castell/elBingoGranBuda-Backend',
      demo: ''
    },
    {
      title: 'Library provider - Frontend',
      summary: 'Library provider frontend project built with enterprise architecture, Angular with TypeScript and RXJS',
      repo: 'https://github.com/camilo6castell/library-provider-frontend',
      demo: 'https://library-provider-frontend.netlify.app'
    },
    {
      title: 'Library provider - Backend',
      summary: 'A library provider project built with hexagonal architecture, event sourcing, DDD, Springboot, and MongoDB.',
      repo: 'https://github.com/camilo6castell/library-provider-backend',
      demo: ''
    },
    {
      title: 'WaterQualityApp - Desktop application',
      summary: 'Application in Java, using OOP and using SQLite and Java Swing. Its purpose is to perform internal processing and display it to the user via a graphical interface.',
      repo: 'https://github.com/camilo6castell/water-quality-app',
      demo: ''
    },
    {
      title: 'Gevora - Fullstack (Flask)',
      summary: 'Gevora is a hotel management system web application developed using Python and the Flask library. It covers both frontend and backend, utilizing MySQL as the relational database, and is deployed on PythonAnywhere.',
      repo: 'https://github.com/camilo6castell/Gevora',
      demo: 'http://r4d3o.pythonanywhere.com/'
    },
    {
      title: 'Instaya - Frontend',
      summary: "Frontend application for managing package delivery services by email. It's built in JavaScript with Node, React, and Vite.",
      repo: 'https://github.com/camilo6castell/Instaya-frontend',
      demo: 'https://instaya-frontend-cacastellanosh-unaleduco.vercel.app/'
    },
    {
      title: 'Instaya - Backend',
      summary: "Backend application for managing package delivery services by email. It's built in Node.js with the help of Express and MongoDB as a non-relational database.",
      repo: 'https://github.com/camilo6castell/Instaya-backend',
      demo: ''
    },
    {
      title: 'health-api',
      summary: "API for centralized medical records management system.It is developed in Node, with the help of Express, MongoDB, Mongoose, BCrypt, Morgan, NodeMailer.",
      repo: 'https://github.com/camilo6castell/health-api',
      demo: ''
    },
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
