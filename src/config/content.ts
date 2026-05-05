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
  DescTwo: "I’m a software developer driven by a deep curiosity for how systems work and how they can be improved. I build full-stack applications using Java, Python, and JavaScript, with a strong focus on backend development, automation, and practical problem solving.\nI enjoy designing solutions that eliminate repetitive work and make processes more efficient — from workflow automation and browser bots to AI-assisted systems like RAG pipelines.",
  DescThree: "For me, programming is not just about writing code, but about understanding problems deeply and creating tools that have real impact.\nI’m particularly interested in scalable backend systems, clean architecture, and open-source technologies. I’m constantly learning, experimenting, and building — always looking for better ways to solve real-world problems through software.",
  heroImage: "/images/home-photo.jpg",
}

export const projectsContent_projectLists = {
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

export const projectsContent_projectList = {
  projects: [
    {
      title: "CryptoMessage",
      isFeatured: true,
      summary: "End-to-end encrypted messaging platform built with a privacy-first architecture. The server never has access to plaintext messages, enforcing true client-side encryption.",
      preview: "/images/repos/cryptomessage.png",
      code: {
              language: 'javascript',
              content: `
    // Client-side encryption-decryption functions used:
    export const encrypt = async (publicKey: CryptoKey, data: string) => {
      const encoded = new TextEncoder().encode(data);

      const encrypted = await crypto.subtle.encrypt(
        { name: 'RSA-OAEP' },
        publicKey,
        encoded
      );

      return arrayBufferToBase64(encrypted);
    };

    export const decrypt = async (privateKey: CryptoKey, encrypted: string) => {
      const buffer = base64ToArrayBuffer(encrypted);

      const decrypted = await crypto.subtle.decrypt(
        { name: 'RSA-OAEP' },
        privateKey,
        buffer
      );

      return new TextDecoder().decode(decrypted);
    };

              `
            },
      highlights: [
        "Stateless REST API secured with JWT authentication",
        "Client-side RSA encryption using per-recipient ciphertext model",
        "Server acts strictly as a relay — zero plaintext visibility",
        "Layered architecture with Spring Boot and strict domain boundaries",
        "Secure key lifecycle: encrypted private key + bcrypt passphrase"
      ],

      repos: [
        {
          name: "Backend (Spring Boot)",
          description:
            "Stateless API handling authentication, chats and encrypted message exchange. Built with Spring Security, JWT and MariaDB.",
          tech: [
            "Java 17",
            "Spring Boot",
            "Spring Security",
            "JWT",
            "MariaDB",
            "Docker",
            "BouncyCastle"
          ],
          repo: "https://cryptomessage-client.vercel.app/login",
          demo: "" 
        },
        {
          name: "Frontend (React)",
          description:
            "Client application responsible for key generation, encryption/decryption and secure communication with the backend API.",
          tech: [
            "React",
            "TypeScript",
            "Web Crypto API",
            "Styled Components",
            "Vite"
          ],
          repo: "https://github.com/your-username/cryptomessage-frontend",
          demo: "https://cryptomessage-client.vercel.app/login"
        }
      ]
    },

    {
      title: "Gymbot",
      isFeatured: false,
      summary:
        "AI-powered workout assistant that generates personalized training routines based on user goals, progress tracking and adaptive feedback.",

      preview: "/previews/gymbot.png",

      highlights: [
        "Dynamic workout generation based on user profile and goals",
        "Progress tracking with adaptive difficulty adjustments",
        "REST API with modular service design",
        "Lightweight AI logic for recommendations",
        "Clean UI focused on usability and quick interaction"
      ],

      repos: [
        {
          name: "Fullstack App",
          description:
            "Single repository containing backend services and frontend UI for managing workouts, tracking progress and generating routines.",
          tech: [
            "Node.js",
            "Express",
            "React",
            "MongoDB",
            "TailwindCSS"
          ],
          repo: "https://github.com/your-username/gymbot",
          demo: "https://gymbot-demo.vercel.app"
        }
      ]
    },
  
  ]
}