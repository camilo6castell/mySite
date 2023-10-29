const root = () =>
  `
    :root {
        font-family: 'Roboto', sans-serif;
    }
        
    html {
        scroll-behavior: smooth;
        // scroll-padding-top: 75px;
    }

    body {
        // background: linear-gradient(217deg, rgba(255, 88, 88, 0.8), rgb(157, 0, 0) 70.71%),
        //     linear-gradient(127deg, rgb(255, 255, 255), rgb(87, 0, 0) 70.71%),
        //     linear-gradient(336deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.8) 70.71%);
        // background-size: 100vw 100vh;

        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	      background-size: 400% 400%;
	      animation: gradient 15s ease infinite;
	      height: 100vh;
        
        
        color: white;
        
        overflow-x: hidden;
        position: relative;
    }

    html, body, #root, .App {
        width: 100vw;
        height: 100vh;
    }
  `;

export default root;
