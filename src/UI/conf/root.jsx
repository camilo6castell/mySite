import mainConfig from "../../config";

const colors = mainConfig.theme

const root = () => 
    `:root {
        
        html {
            scroll-behavior: smooth;
            scroll-padding-top: 75px;
        }

        body {
            background-color: ${colors.backgroundColor};
            color: white;

            overflow-x: hidden;
            position: relative;
        }
  `

  export default root