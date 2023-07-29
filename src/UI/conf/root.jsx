import mainConfig from "../../config";

const colors = mainConfig.theme

const root = () => 
    `
    :root {
    }
        
    html {
        scroll-behavior: smooth;
        // scroll-padding-top: 75px;
    }

    body {
        background-color: ${colors.backgroundColor};
        background-image: url(https://unsplash.com/photos/W_mfoOi1Elc/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjkwNDMwNjQ3fA&force=true);
        color: white;
        
        overflow-x: hidden;
        position: relative;
    }

    html, body, #root, .App {
        width: 100vw;
        height: 100vh;
    }

    .App {
        display: flex;
    }
  `

  export default root
