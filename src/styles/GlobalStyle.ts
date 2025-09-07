'use client'
import { createGlobalStyle } from 'styled-components'
import resetCSS from './ResetCss'
import { themeConfig } from '@/app/config/theme'
import { ThemeColors } from '@/app/config/theme'

const GlobalStyle = createGlobalStyle`
  ${resetCSS()}

  *, *::before, *::after {
    transition: all ${themeConfig.animation.general_duration}s ease-in-out;
  }

  :root{
    --bg: ${({ theme }) => theme.bg};
    --text: ${({ theme }) => theme.text};
    --text-night: ${themeConfig.colors.darkTheme.text};
    --muted: ${({ theme }) => theme.muted};
    --wave-color-a: ${({ theme }) => theme.waves.a.bg};
    --wave-color-b: ${({ theme }) => theme.waves.b.bg};
    --section-accent: transparent;
    --wave-top-a: ${({ theme }) => theme.waves.a.top};
    --wave-left-a: ${({ theme }) => theme.waves.a.left};
    --wave-width-a: ${({ theme }) => theme.waves.a.width};
    --wave-height-a: ${({ theme }) => theme.waves.a.height};
    --wave-blur-a: ${({ theme }) => theme.waves.a.blur};
    --wave-opacity-a: ${({ theme }) => theme.waves.a.opacity};
    --wave-top-b: ${({ theme }) => theme.waves.b.top};
    --wave-left-b: ${({ theme }) => theme.waves.b.left};
    --wave-width-b: ${({ theme }) => theme.waves.b.width};
    --wave-height-b: ${({ theme }) => theme.waves.b.height};
    --wave-blur-b: ${({ theme }) => theme.waves.b.blur};
    --wave-opacity-b: ${({ theme }) => theme.waves.b.opacity};
  }

  html, body, #__next { height:100%; }
  body {
    margin:0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto;
    background: var(--bg);
    transition: background ${themeConfig.animation.general_duration + 1}s ease, color 0.3s ease;
    color: var(--text);
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    overscroll-behavior: none;

  }

  #snap-container {
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  section {
    scroll-snap-align: start;
  }
  .content-surface { position: relative; z-index: 10; }

`

export default GlobalStyle
