import { createContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const values = {
    avatar: "https://pngimg.com/d/cat_PNG50514.png",
    info: {
      nombre: "Camilo Castellanos",
      role: "Web developer",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore similique ut. Assumenda expedita tenetur porro tempora pariatur minima eaque?",
    },
    social: [
      {
        name: "GitHub",
        icon: "bx bxl-linkedin-square",
        color: "",
        link: "https://www.linkedin.com/in/camilocastell/",
        animation: "slideBottom",
      }, 
      {
        name: "LinkedIn",
        icon: "bx bxl-github",
        color: "",
        link: "https://github.com/camilo6castell",
        animation: "slideTop",
      }
    ]
  }
  return (
    <DataContext.Provider value={ values }> { children } </DataContext.Provider>
  )
}