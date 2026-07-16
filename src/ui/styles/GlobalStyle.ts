"use client";
import { createGlobalStyle } from "styled-components";
import resetCSS from "./ResetCss";
import { themeConfig } from "@/config/theme";
import { inter } from "./fonts";

const GlobalStyle = createGlobalStyle`
  ${resetCSS()}

  *, *::before, *::after {
    font-family: ${inter.style.fontFamily}, ui-sans-serif, system-ui, -apple-system, 'Segoe UI';
    transition: all ${themeConfig.animation.general_duration}s ease-in-out;
  }

  :root{
    --bg: ${({ theme }) => theme.bg};
    --text: ${({ theme }) => theme.text};
    --text-night: ${themeConfig.colors.darkTheme.text};
    --muted: ${({ theme }) => theme.muted};
    --section-accent: transparent;
    --shadow-color: ${({ theme }) => theme.shadowColor};
    --bg-card: ${({ theme }) => theme.bgCard};
    --border-card: ${({ theme }) => theme.borderCard};
    --shadow-card: ${({ theme }) => theme.shadowCard};
    --shadow-card-high-contrast: ${({ theme }) => theme.shadowCardHighContrast};
    --project-card-hover-shadow: ${({ theme }) => theme.projectCard.hoverShadow};
    --project-card-link: ${({ theme }) => theme.projectCard.link};

    --badge-suggestion-bg: ${({ theme }) => theme.badges.suggestion.bg};
    --badge-suggestion-text: ${({ theme }) => theme.badges.suggestion.text};
    --badge-suggestion-border: ${({ theme }) => theme.badges.suggestion.border};

    --badge-available-bg: ${({ theme }) => theme.badges.available.bg};
    --badge-available-text: ${({ theme }) => theme.badges.available.text};
    --badge-available-border: ${({ theme }) => theme.badges.available.border};

    --badge-bullets-bg: ${({ theme }) => theme.badges.bullets.bg};
    --badge-bullets-text: ${({ theme }) => theme.badges.bullets.text};
    --badge-bullets-border: ${({ theme }) => theme.badges.bullets.border};

  }

  #snap-container {
    height: 100dvh;
    width: 100dvw;

    /* background: var(--bg); */
    backdrop-filter: blur(10px);

    color: var(--text);

    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    -webkit-overflow-scrolling: touch;
    text-rendering: optimizeLegibility;
    text-shadow: 0 2px 12px var(--shadow-color);

    z-index: 1;

    /* position: fixed; */
  }

  section {
    scroll-snap-align: start;
  }
  .content-surface { position: relative; z-index: 10; }

`;

export default GlobalStyle;
