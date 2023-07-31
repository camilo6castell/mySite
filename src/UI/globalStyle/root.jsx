import mainConfig from "../../config";
import background from "../../assets/background/background.jpg"

const colors = mainConfig.theme

const root = () => 
    `
    :root {
        font-family: 'Lora', serif;
    }
        
    html {
        scroll-behavior: smooth;
        // scroll-padding-top: 75px;
    }

    body {
        background-color: ${colors.backgroundColor};
        background-image: url(${background});
        background-size: 100vh 100vw;
        color: white;
        
        overflow-x: hidden;
        position: relative;
    }

    html, body, #root, .App {
        width: 100vw;
        height: 100vh;
    }

  `

  export default root
