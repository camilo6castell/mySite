const resetCSS = () => `
    /* 1. Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. Base del documento */
  html, body {
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background: #fff;
    color: #111;
  }

  /* 3. Imágenes y multimedia */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 4. Formularios */
  input, button, textarea, select {
    font: inherit;
  }

  /* 5. Listas sin estilos por defecto */
  ul, ol {
    list-style: none;
  }

  /* 6. Links sin subrayado por defecto */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 7. Botones */
  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  /* 8. Tablas */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default resetCSS;
