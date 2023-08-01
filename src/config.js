import backgroundImage from "./assets/background/background.jpg";

import aboutMe from "../src/assets/aboutCard/aboutMe.jpg";
import myPortfolio from "../src/assets/projectCard/myPortfolio.jpg";

const mainConfig = {
  info: {
    photo: "https://pngimg.com/d/cat_PNG50514.png",
    name: "Camilo Castellanos",
    role: "Web developer and psychologist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore similique ut. Assumenda expedita tenetur porro tempora pariatur minima eaque?",
    avatar: ["rgb(204, 204, 204)", "rgb(251, 253, 144)"],
  },
  about: [
    {
      image: aboutMe,
      title: "My self",
      description:
        "Estoy tremendamente agradecido por la familia a la que pertenezco, ella le dan sentido a todo.",
    },
    {
      image: aboutMe,
      title: "My self",
      description:
        "Estoy tremendamente agradecido por la familia a la que pertenezco, ella le dan sentido a todo.",
    },
    {
      image: aboutMe,
      title: "My self",
      description:
        "Estoy tremendamente agradecido por la familia a la que pertenezco, ella le dan sentido a todo.",
    },
  ],
  theme: {
    backgroundColor: "rgb(8, 0, 0)",
    interfaceColor: [
      "rgb(153, 105, 3)",
      "rgb(255, 255, 255)",
      "rgb(255, 219, 58)",
    ],
    backgroundImage: backgroundImage,
  },
  social: [
    {
      name: "GitHub",
      icon: "bx bxl-github",
      link: "https://github.com/camilo6castell",
      animation: "slideTop",
      color: ["rgb(255, 28, 179)", "rgb(190, 190, 190)"],
    },
    {
      name: "LinkedIn",
      icon: "bx bxl-linkedin-square",
      link: "https://www.linkedin.com/in/camilocastell/",
      animation: "slideBottom",
      color: ["rgb(58, 173, 250)", "rgb(190, 190, 190)"],
    },
    {
      name: "Whatsapp",
      icon: "bx bxl-whatsapp",
      link: " https://wa.me/573223990733",
      animation: "slideTop",
      color: ["rgb(106, 252, 66)", "rgb(190, 190, 190)"],
    },
    {
      name: "Facebook",
      icon: "bx bxl-facebook",
      link: "https://www.facebook.com/XXYYXXYYXXYYXXYY/",
      animation: "slideTop",
      color: ["rgb(6, 53, 184)", "rgb(190, 190, 190)"],
    },
    {
      name: "Instagram",
      icon: "bx bxl-instagram-alt",
      link: "https://www.instagram.com/dmente.acida/",
      animation: "slideTop",
      color: ["rgb(252, 61, 192)", "rgb(190, 190, 190)"],
    },
  ],
  skills: [
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146374&root=2415/PNG/512/&file=react_original_logo_icon_146374.png",
      name: "React",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=130900&root=2108/PNG/512/&file=javascript_icon_130900.png",
      name: "JavaScript",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146412&root=2415/PNG/512/&file=nodejs_original_wordmark_logo_icon_146412.png",
      name: "Node.Js",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146528&root=2415/PNG/512/&file=express_original_wordmark_logo_icon_146528.png",
      name: "Express.Js",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=130142&root=2107/PNG/512/&file=file_type_styled_icon_130142.png",
      name: "Styled components",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146510&root=2415/PNG/512/&file=git_original_wordmark_logo_icon_146510.png",
      name: "Git",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=168886&root=2699/PNG/512/&file=python_logo_icon_168886.png",
      name: "Python",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=50797&root=512/PNG/512/&file=prog-flask_icon-icons.com_50797.png",
      name: "Flask",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146433&root=2415/PNG/512/&file=linux_original_logo_icon_146433.png",
      name: "Linux",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146576&root=2415/PNG/512/&file=css_original_wordmark_logo_icon_146576.png",
      name: "CSS3",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146478&root=2415/PNG/512/&file=html_original_wordmark_logo_icon_146478.png",
      name: "HTML5",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146459&root=2415/PNG/512/&file=java_original_wordmark_logo_icon_146459.png",
      name: "Java",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146425&root=2415/PNG/512/&file=mongodb_original_wordmark_logo_icon_146425.png",
      name: "MongoDB",
    },
    {
      icon: "https://avatars.githubusercontent.com/u/7552965?s=160&v=4",
      name: "Mongoose",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146417&root=2415/PNG/512/&file=mysql_original_wordmark_logo_icon_146417.png",
      name: "MySQL",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=158716&root=2622/PNG/512/&file=brand_scrum_icon_158716.png",
      name: "SCRUM",
    },
    {
      icon: "https://icon-icons.com/downloadimage.php?id=146557&root=2415/PNG/512/&file=docker_original_wordmark_logo_icon_146557.png",
      name: "Docker",
    },
  ],
  projects: [
    {
      type: "Frontend",
      name: "My portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum odio distinctio soluta eius commodi dolore repudiandae reiciendis odit. Fugit doloribus dolores similique debitis unde non sapiente consequuntur harum totam, autem voluptates! Mollitia, dolores maxime architecto blanditiis",
      image: myPortfolio,
      github: "https://github.com/camilo6castell",
      deployment: "https://github.com/camilo6castell",
      tools: [
        "React",
        "Node.Js",
        "JavaScript",
        "Linux",
        "SCRUM",
        "CSS3",
        "HTML5",
        "Git",
        "Styled components",
      ],
    },
    {
      type: "FrontEnd",
      name: "Instaya Frontend",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/Instaya-frontend",
      deployment:
        "https://instaya-frontend-cacastellanosh-unaleduco.vercel.app/",
      tools: [
        "React",
        "Node.Js",
        "JavaScript",
        "Linux",
        "SCRUM",
        "CSS3",
        "HTML5",
        "Git",
      ],
    },
    {
      type: "Backend",
      name: "Instaya Backend",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/Instaya-backend",
      deployment: "https://instaya-backend.onrender.com/",
      tools: [
        "Docker",
        "JavaScript",
        "Node.Js, Express.Js, MongoDB, Mongoose",
        "Git",
        "Linux",
      ],
    },
    {
      type: "Fullstack",
      name: "Gevora",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/Gevora",
      deployment: "http://r4d3o.pythonanywhere.com/",
      tools: [
        "Pyhton",
        "Flask",
        "MySQL",
        "Linux",
        "SCRUM",
        "CSS3",
        "HTML5",
        "Git",
      ],
    },
    {
      type: "Software",
      name: "WaterQualityApp",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/WaterQualityApp",
      deployment:
        "El código de esta aplicación puede ejecutarse en cualquier dispositivo que corra la maquina virtual de Java.",
      tools: ["Java", "Git", "Linux"],
    },
    {
      type: "Backend",
      name: "Health-api",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/health-api",
      deployment: "https://health-api-wuip.onrender.com/",
      tools: [
        "Node.Js",
        "JavaScript",
        "Express.Js",
        "MongoDB",
        "Mongoose",
        "Git",
        "Linux",
      ],
    },
    {
      type: "Frontend",
      name: "Encrypt-Decrypt-application",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/Encrypt-Decrypt-application",
      deployment:
        "https://camilo6castell.github.io/Encrypt-Decrypt-application/",
      tools: ["JavaScript", "Linux", "SCRUM", "CSS3", "HTML5", "Git", "Linux"],
    },
    {
      type: "Frontend",
      name: "RutineSch",
      description: "",
      image: "",
      github: "https://github.com/camilo6castell/RutineSch",
      deployment: "https://camilo6castell.github.io/RutineSch/",
      tools: ["JavaScript", "Linux", "CSS3", "HTML5", "Git"],
    },
  ],
};

export default mainConfig;

<i class="bx bxl-facebook"></i>;
