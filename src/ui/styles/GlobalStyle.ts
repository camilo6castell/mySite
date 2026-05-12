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
  }

  #snap-container {
    height: 100%;
    width: 100%;    

    min-width: 480px;
    min-height: 930px;
    
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
    text-shadow: 0 2px 12px ${({ theme }) => theme.shadowColor};

    z-index: -10;
  }

  section {
    scroll-snap-align: start;
  }
  .content-surface { position: relative; z-index: 10; }

`;

export default GlobalStyle;
