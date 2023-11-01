import { styled } from "styled-components";

import { StyledSimpleCard } from "./UI/styledCards";
import { StyledCarrete, StyledCinta } from "./UI/styledCards";

import { useContext, useState, useEffect } from "react";
import { DataContext } from "./dataContext/data";

import IconSocial from "./components/iconSocial/iconSocial";
import Avatar from "./components/avatar/avatar";
import { Resume } from "./components/resume/resume";

import avatarCard from "./assets/card/avatarCard.png";

// import AboutCard from "../aboutCard/aboutCard";
import ProjectCard from "./components/projectCard/projectCard";

function App() {
  const [showResume, setShowResume] = useState(false);
  const [displayR, setDisplayR] = useState(["hidden", "disappear"]);
  const [scrolled, setScrolled] = useState(false);

  const data = useContext(DataContext);
  const mode = data.theme;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        console.log(window.scrollY);
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    if (showResume) {
      setDisplayR(["visible", "appear"]);
    } else {
      setDisplayR(["hidden", "disappear"]);
    }
  }, [showResume]);
  return (
    <StyledApp className="App">
      <div className={scrolled ? "nav-container scrolled" : "nav-container"}>
        <StyledWelcomeCard>
          <div className="rol-container">
            <StyledCardRol>
              <i className="bx bx-code-alt"></i>
              <span>Web developer</span>
            </StyledCardRol>
            <StyledCardRol>
              <i className="bx bx-code-curly"></i>
              <span>Software developer</span>
            </StyledCardRol>
            <StyledCardRol>
              <i className="bx bxs-brain"></i>
              <span>Psychologist</span>
            </StyledCardRol>
          </div>

          <div
            className="resume-container"
            onClick={() => setShowResume(!showResume)}
          >
            <span className="see-resume">See my resume</span>
            <Resume
              showResume={displayR}
              onClick={() => setShowResume(!showResume)}
            />
          </div>

          <div className="nav-social">
            <StyledCardSocial>
              {data.social.map((data) => (
                <div className="social-container" key={data.name}>
                  <IconSocial key={data.name} data={data} mode={mode} />
                </div>
              ))}
            </StyledCardSocial>
          </div>
        </StyledWelcomeCard>
      </div>

      <div className="main-container">
        <StyledSectionAvatar>
          <div className="title-container">
            <div className="title">Camilo</div>
            <div className="title aux">Castellanos</div>
          </div>
          <div className="avatar-container">
            <Avatar data={data.info} mode={data.theme} />
          </div>
        </StyledSectionAvatar>

        <StyledCarrete>
          <div className="big-card-tag">Projects</div>
          <StyledCinta>
            {data.projects.map((data) => (
              <ProjectCard key={data.name} data={data} />
            ))}
          </StyledCinta>
        </StyledCarrete>
      </div>

      {/* <StyledCarrete>
        <div className="big-card-tag">About me</div>
        <StyledCinta>
          {data.about.map((data, index) => (
            <AboutCard key={index} data={data} />
          ))}
        </StyledCinta>
      </StyledCarrete> */}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;

    overflow: hidden;
    width: 100vw;
    height: 100vh;

    scroll-behavior: smooth;
    overflow-y: hidden;
  }

  .main-container {
    display: flex;
    justify-content: space-evenly;

    align-items: center;

    width: 100%;
    height: 100%;

    /* background: yellow; */
  }

  .nav-container {
    position: sticky;
    top: 0;
    left: 0;

    width: 100vw;
    height: fit-content;

    transition: all 0.5s ease-in-out 0.2s;
    z-index: 9999;
  }

  .scrolled {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.7);
  }

  @media only screen and (max-width: 768px) {
    && {
      overflow: visible;
      height: fit-content;
    }
    .main-container {
      flex-direction: column;
      height: fit-content;
    }
  }
`;

const StyledWelcomeCard = styled(StyledSimpleCard)`
  & {
    z-index: 2000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: fit-content;
    width: 100%;
    padding: 0.5vw;
    border-radius: 0;

    transition: all 1s ease-in-out 0.2s;

    animation: 3s linear 1s both appear;
  }

  .rol-container {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-social {
    display: flex;
  }

  .resume-container {
    font-size: 1.3rem;
    color: #fff;
    font-weight: 600;

    align-items: center;

    margin: 0.4vw 1rem;
    border-radius: 0.5vw;

    padding: 0.2vw;

    animation: 1s ease 0s forwards appear;
  }

  .see-resume {
    animation: 3.5s ease 0s infinite lights;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    & {
      flex-direction: column;
      padding: 1rem;
    }

    .rol-container {
      margin-bottom: 1rem;
    }

    .resume-container {
      padding: 0 1rem 1rem;
    }
  }
`;

// TARJETA DE ROL INDIVIDUAL

const StyledCardRol = styled(StyledSimpleCard)`
  && {
    /* background: black; */

    display: flex;
    justify-content: stretch;
    position: relative;
    font-size: 1vw;
    color: #fff;
    font-weight: 600;

    align-items: center;

    margin: 0.4vw 1rem;
    border-radius: 0.5vw;

    padding: 0.2vw;

    animation: 1s ease 0s forwards appear;

    /* background: #b5b5b529;
    box-shadow: inset 0px 0px 4px 2px #b5b5b53d; */
  }
  /* 
    &&:hover {
        animation: lights 2s ease-in-out;
    } */

  i {
    width: 3vw;
    font-size: 1.5vw;
  }

  @media only screen and (max-width: 768px) {
    && {
      font-size: 2.5vw;
    }
    i {
      width: 4vw;
      font-size: 4vw;
    }
  }
`;

// TARJETA SOCIAL CONTAINER

const StyledCardSocial = styled(StyledSimpleCard)`
  & {
    flex: 4 4 auto;
    display: flex;
    width: 20%;
    justify-content: flex-end;
    flex-flow: row wrap;

    margin: 0;
    padding: 0;
  }

  .social-container {
    display: inline-flex;
    padding: 0.4vw;
  }
`;

// AVATAR

const StyledSectionAvatar = styled(StyledSimpleCard)`
  & {
    /* animation: infinite 3s ease floatImage; */
    /*     background: black; */
  }

  &&::before {
    inset: 0;
    content: "";
    position: absolute;

    border-radius: 2rem;
    /* opacity: 0.5; */
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.7);

    background-image: url(${avatarCard});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(1px);
    z-index: -1;

    animation: 3s linear 1s both appear;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2vw 1vw 0;
  }

  .title {
    font-family: "Borel", cursive;
    text-shadow: 1px 1px 2px black;

    font-size: 2vw;
    color: #fff;
    font-weight: 600;
    pointer-events: none;

    opacity: 0;
    animation: 1s ease 0s forwards slideTop;
  }

  .avatar-container {
    padding: 1vw 2vw;
    z-index: 5;
    opacity: 1;
  }

  .aux {
    font-size: 2vw;
    margin-left: 2vw;
  }

  @media only screen and (max-width: 768px) {
    & {
      display: flex;
      justify-content: space-around;
      align-items: center;

      z-index: 1000;

      width: 80%;
      height: fit-content;

      margin: 4rem;
    }

    .title {
      font-size: 1.5rem;
    }

    .avatar-container {
      width: 8rem;
    }
  }
`;

export default App;
