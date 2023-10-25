import { styled } from "styled-components";

import { StyledSimpleCard } from "./UI/styledCards";
import { StyledCarrete, StyledCinta } from "./UI/styledCards";

import { useContext } from "react";
import { DataContext } from "./dataContext/data";

import IconSocial from "./components/iconSocial/iconSocial";
import welcomeCard from "./assets/card/welcomeCard.jpg";
import Avatar from "./components/avatar/avatar";

import avatarCard from "./assets/card/avatarCard.png";

// import AboutCard from "../aboutCard/aboutCard";
import ProjectCard from "./components/projectCard/projectCard";

function App() {
  const data = useContext(DataContext);
  const mode = data.theme;
  return (
    <StyledApp className="App">
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
    /* align-items: center; */
    align-items: stretch;

    overflow: hidden;
    width: 100vw;
    height: 100vh;
    flex: 1 1 auto;
    backdrop-filter: blur(50px) brightness(35%);

    scroll-behavior: smooth;
    overflow-y: hidden;
    /* backdrop-filter: blur(50px); */
  }

  .main-container {
    display: flex;
    justify-content: space-evenly;

    align-items: center;

    width: 100%;
    height: 100%;

    /* background: yellow; */
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
    position: relative;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    height: fit-content;
    width: 100%;
    padding: 0.5vw;
    border-radius: 0;

    background-image: url(${welcomeCard});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    /* border: 1vw solid #b5b5b529; */
    box-shadow: 0px 0px 12px 3px #000000;
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

  @media only screen and (max-width: 768px) {
    & {
      flex-direction: column;
      padding: 1rem;
    }

    .rol-container {
      margin-bottom: 1rem;
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

    animation: appear 1s ease forwards;

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
    /*     background: black; */
  }

  &&::before {
    inset: 0;
    content: "";
    position: absolute;

    border-radius: 2rem;
    /* opacity: 0.5; */
    box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);

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
    animation: slideTop 1s ease forwards;
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
