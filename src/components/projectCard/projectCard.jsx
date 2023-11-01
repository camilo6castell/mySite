import { styled } from "styled-components";
import { StyledSimpleCard } from "../../UI/styledCards";

import { useContext } from "react";
import { DataContext } from "../../dataContext/data";

import Card from "../card/card";

function ProjectCard({ data }) {
  const dataC = useContext(DataContext);
  const tools = data.tools;
  return (
    <StyledProjectCard data={data}>
      <img src={data.image} alt="backgroundImage" />
      <div className="portada">
        <span className="card-title"> {data.name} </span>
        <div className="card-specs">
          <span className="card-type">
            <i className="bx bxs-layout"></i> {data.type}
          </span>
          <p className="card-github">
            <i className="bx bxl-github"></i>
            <a href={data.github} target="_blank" rel="noreferrer">
              Github
            </a>
          </p>
          <p className="card-deployment">
            <i className="bx bxs-rocket"></i>
            <a href={data.deployment} target="_blank" rel="noreferrer">
              Deployment
            </a>
          </p>
        </div>
        <p className="card-description"> {data.description} </p>
      </div>
      <div className="tools">
        {dataC.skills.map((skill, index) =>
          tools.find((tool) => tool === skill.name) ? (
            <Card key={index} data={skill} />
          ) : (
            ""
          )
        )}
      </div>
    </StyledProjectCard>
  );
}

const StyledProjectCard = styled(StyledSimpleCard)`
  && {
    display: flex;
    position: relative;
    flex: 0 0 auto;
    width: 80%;
    height: 50vh;
    z-index: -1;

    margin: 3vh 1vw;

    padding: 0;

    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.6);

    transition: all 1s ease-in-out 0.2s;

    overflow: hidden;
  }

  img {
    flex: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* filter: blur(20px); */
    z-index: -1;
  }

  .portada {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    width: 30vw;
    justify-content: space-evenly;
  }

  .card-title {
    text-shadow: 1px 1px 2px black;
    padding: 3vh 2vw 0;
    // font-family: "Borel", cursive;

    font-size: 2.5vw;
    color: #fff;
    font-weight: 600;
    pointer-events: none;
  }

  .card-specs {
    display: flex;
    font-size: 1.4vw;
  }

  .card-type {
    flex: auto;
    padding-left: 2vw;
    background: linear-gradient(45deg, #ffee00, #ffd65a, #ffee00, #b98b01);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: 3.5s ease 0s infinite lights;
  }

  .card-github {
    flex: auto;
    padding-left: 2vw;
    background: linear-gradient(45deg, #ff00c8, #7b0000, #ff00c8, #7b0000);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: 3.5s ease 0s infinite lights;
  }

  .card-deployment {
    flex: auto;
    padding-left: 2vw;

    background: linear-gradient(45deg, #1cc6ff, #0f6c14, #1cc6ff, #0f6c14);
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: 3.5s ease 0s infinite lights;
  }

  .card-description {
    font-size: 1.3vw;
    height: fit-content;
    padding-left: 2vw;
    text-shadow: 2px 2px 3px black;
  }

  .tools {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-evenly;
    align-items: center;

    width: 15vw;
    height: 100%;
    padding: 1vh 1vw;
    z-index: 0;
    /* flex: auto; */
  }

  .tool {
    /* width:5%; */
  }

  @media only screen and (max-width: 768px) {
    && {
      flex-direction: column;
      height: fit-content;
      width: 95%;
    }

    .portada {
      width: 100%;
    }

    .card-title {
      font-size: 2rem;
      padding-bottom: 1rem;
    }

    .card-specs {
      font-size: 1rem;
      padding-bottom: 1rem;
    }

    .card-description {
      font-size: 1rem;
      padding: 0 1rem;
    }

    .tools {
      justify-content: space-around;
      padding: 1rem;
      width: 100%;
    }
  }
`;

export default ProjectCard;
