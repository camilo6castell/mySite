import { useState, useEffect } from "react"

import { HeaderStyled } from "../../UI/styledComponents/StyledComponents";

function Header({ data }) {
    const [active, setActive] = useState("home");
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scroll > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const updateActiveLink = (value) => {
        setActive(value)
    }

    return (
        <HeaderStyled  data={data} className={scroll ? "header scrolled":"header"}>
            <a href="lol" className="logo">Portafolio</a>
            <nav className="navbar">
                <a href="#home" style={{"--i": "1"}} className={active === "home" ? "active": ""} onClick={() => updateActiveLink("home")}>Home</a>
                <a href="#skills" style={{"--i": "2"}} className={active === "skills" ? "active": ""} onClick={() => updateActiveLink("skills")}>Skills</a>
                <a href="#projects" style={{"--i": "3"}} className={active === "projects" ? "active": ""} onClick={() => updateActiveLink("projects")}>Projects</a>
            </nav>
        </HeaderStyled>
    )
}

export default Header