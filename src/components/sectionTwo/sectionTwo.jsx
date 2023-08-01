import { styled } from "styled-components";
import { StyledSectionApp } from "../../UI/styledSectionApp";
import { StyledSimpleCard } from "../../UI/styledCards";
import { StyledCarrete, StyledCinta } from "../../UI/styledCards"

import { useContext } from "react";
import { DataContext } from "../../dataContext/data";

import welcomeCard from "../../assets/card/welcomeCard.jpg"

import AboutCard from "../aboutCard/aboutCard";
import ProjectCard from "../projectCard/projectCard";

function SectionTwo(){
  const data = useContext(DataContext);
    return(
      <StyledSectionAppTwo>

        <StyledSimpleCard>
          <StyledWelcomeCard />
        </StyledSimpleCard>

        <StyledCarrete>
          <div className="big-card-tag">About me</div>
          <StyledCinta>
            {data.about.map((data, index) => <AboutCard key={index} data={data}/>)}
          </StyledCinta>
        </StyledCarrete>
        
        <StyledCarrete>
          <div className="big-card-tag">Projects</div>
          <StyledCinta>
            {data.projects.map(data => <ProjectCard key={data.name} data={data}/>)}
          </StyledCinta>
        </StyledCarrete>
        
      </StyledSectionAppTwo>
    )
}

const StyledSectionAppTwo = styled(StyledSectionApp)`
  & {
    overflow: auto;
    width: 50vw;
    flex: 3 3 auto;
    backdrop-filter: blur(50px) brightness(60%);

    scroll-behavior: smooth;
    overflow-y: auto;
    /* backdrop-filter: blur(50px); */
  }
`;

// IMAGEN DE BIENVENIDA

const StyledWelcomeCard = styled(StyledSimpleCard)`
    & {
      height: 26vh;
      width: 100%;

      background-image: url(${welcomeCard});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      /* border: 1vw solid #b5b5b529; */
      box-shadow: 0px 0px 12px 3px #000000;
      transition: all 1s ease-in-out 0.2s;
    }
`

export default SectionTwo;
