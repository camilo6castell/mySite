import { cryptoMessageCode } from "./cryptoMessageCode";

export const cryptomessage = {
  title: "CryptoMessage",
  isFeatured: true,
  summary:
    "Privacy-first end-to-end encrypted messaging platform where all cryptographic operations happen exclusively in the browser. Implements per-recipient encryption, secure private key handling, and a zero-trust server architecture.",

  preview: "/images/repos/cryptomessage.png",

  code: {
    language: "typescript",
    content: cryptoMessageCode,
  },

  highlights: [
    "End-to-end encryption enforced entirely on the client using Web Crypto API",
    "Per-recipient ciphertext model (each message encrypted for every participant)",
    "Private key encrypted with AES-GCM using PBKDF2-derived passphrase",
    "Keys live only in memory and never stored in localStorage or sent in plaintext",
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
      repo: "https://github.com/camilo6castell/cryptomessage-server",
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
      repo: "https://github.com/camilo6castell/cryptomessage-client",
      demo: "https://cryptomessage-client.vercel.app/login",
    },
  ],
};
