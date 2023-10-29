/* import aboutMe from "../src/assets/aboutCard/aboutMe.jpg";
 */
import myPortfolio from "../src/assets/projectCard/myPortfolio.jpg";
import instaya from "../src/assets/projectCard/instaya.jpg";
import instayaBackend from "../src/assets/projectCard/instayaBackend.jpg";
import gevora from "../src/assets/projectCard/gevora.jpg";
import waterQualityApp from "../src/assets/projectCard/waterQualityApp.jpg";
import healthApi from "../src/assets/projectCard/healthApi.jpg";
import encryptDecryptapplication from "../src/assets/projectCard/encryptDecryptapplication.jpg";
import rutineSch from "../src/assets/projectCard/rutineSch.jpg";

const mainConfig = {
  info: {
    photo: "https://pngimg.com/d/cat_PNG50514.png",
    name: "Camilo Castellanos",
    role: "Web developer and psychologist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore similique ut. Assumenda expedita tenetur porro tempora pariatur minima eaque?",
    avatar: ["rgb(204, 204, 204)", "rgb(251, 253, 144)"],
  },
  theme: {
    backgroundColor: "rgb(8, 0, 0)",
    interfaceColor: [
      "rgb(153, 105, 3)",
      "rgb(255, 255, 255)",
      "rgb(255, 219, 58)",
    ],
  },
  /*   about: [
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
  ], */
  social: [
    {
      name: "GitHub",
      icon: "bx bxl-github",
      link: "https://github.com/camilo6castell",
      animation: "slideRight",
      color: ["rgb(255, 28, 179)", "rgb(190, 190, 190)"],
    },
    {
      name: "LinkedIn",
      icon: "bx bxl-linkedin-square",
      link: "https://www.linkedin.com/in/camilocastell/",
      animation: "slideTop",
      color: ["rgb(58, 173, 250)", "rgb(190, 190, 190)"],
    },
    {
      name: "Whatsapp",
      icon: "bx bxl-whatsapp",
      link: " https://wa.me/573223990733",
      animation: "slideBottom",
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
      animation: "slideLeft",
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
        "The app you see right now is my portfolio. It is made with the help of React and the tools you see on this card on the right side. Its goal is to show the work I can do, as well as my contact information.",
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
      description:
        "Frontend application made in React for a courier company. It has user registration, packages, tracking. In addition to the encryption measures necessary for users, it has a connection to a non-relational database. The tools used are on the right side of this card.",
      image: instaya,
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
      description:
        "Backend application made in Node.js with the help of express and the tools shown on the right for a courier company. This application has decryptors and security measures for user records. In addition, it queries the mongoDB database for data persistence.",
      image: instayaBackend,
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
      description:
        "Full stack application made in Python with the help of Flask. It is an application for the administration of a hotel with the ability to make reservations and rate the stay, in addition to being able to make comments on the rooms. It incorporates different levels of users for administration. Gevora uses MySQL as a database.",
      image: gevora,
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
      description:
        "Application made in Java for the classification of water quality in different places in Colombia. I used object-oriented programming as the main foundation for the construction of this software, so the use of classes was recurring. This application can be run on any device that can run the Java virtual machine. This application uses MySQL as a database.",
      image: waterQualityApp,
      github: "https://github.com/camilo6castell/WaterQualityApp",
      deployment:
        "El código de esta aplicación puede ejecutarse en cualquier dispositivo que corra la maquina virtual de Java.",
      tools: ["Java", "Git", "Linux"],
    },
    {
      type: "Backend",
      name: "Health-api",
      description:
        "Backend application made in Node.JS with the help of Express.JS for the administration of hospitals, doctors, patients and medical records of a health system. This application connects to MongoDB as a database and does the corresponding validations for each user when they register in the system.",
      image: healthApi,
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
      description:
        "Application made as part of an encryption and decryption exercise as part of my training in creating web applications. This application is made in html5 css3 and javascript, for the background I use a canvas to achieve the drawing effect.",
      image: encryptDecryptapplication,
      github: "https://github.com/camilo6castell/Encrypt-Decrypt-application",
      deployment:
        "https://camilo6castell.github.io/Encrypt-Decrypt-application/",
      tools: ["JavaScript", "Linux", "SCRUM", "CSS3", "HTML5", "Git", "Linux"],
    },
    {
      type: "Frontend",
      name: "RutineSch",
      description:
        "Application made to help my mom with her gym routine in html5 and css3 :)",
      image: rutineSch,
      github: "https://github.com/camilo6castell/RutineSch",
      deployment: "https://camilo6castell.github.io/RutineSch/",
      tools: ["JavaScript", "Linux", "CSS3", "HTML5", "Git"],
    },
  ],
};

export default mainConfig;
