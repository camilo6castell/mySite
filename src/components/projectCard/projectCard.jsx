import { styled } from "styled-components";
import { StyledSimpleCard } from "../../UI/styledCards";

import { useContext } from "react";
import { DataContext } from "../../dataContext/data";

import Card from "../card/card";

function ProjectCard({ data }) {
    const dataC = useContext(DataContext);
    const tools = data.tools
    return (
        <StyledProjectCard data={data}>
            <img src={data.image} alt="" />
            <div className="portada">
                <span className="card-title"> {data.name} </span>
                <span className="card-type"> <i class='bx bxs-layout'></i> {data.type} </span>
                <p className="card-github"> <i class='bx bxl-github'></i> <a href={data.github}> Github</a> </p>
                <p className="card-deployment"> <i class='bx bxs-rocket'></i> <a href={data.deployment}>Deployment</a> </p>
                <p className="card-description">  {data.description} </p>
            </div>
            <div className="tools">
                {dataC.skills.map((skill, index) =>  tools.find(tool => tool === skill.name) ? <Card key={index} data={skill} /> : "")}            
            </div>
        </StyledProjectCard>
    )
}

const StyledProjectCard = styled(StyledSimpleCard)`
  && {
    display: flex;
    position: relative;
    flex: 0 0 auto;    
    width: 45vw;
    height: 60vh;
    z-index: -1;

    margin: 3vh 1vw;

    padding: 0;

    /* font-family: 'Lora', sans-serif; */
   
    box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);

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
        width:30vw;
        justify-content: space-evenly;

    }

        .card-title {
            flex: 1 1 auto;

            padding: 7vh 2vw 0;
            font-family: 'Borel', cursive;

            font-size: 3vw;
            color: #fff;
            font-weight: 600;
            pointer-events: none;
        }

        .card-type {
            flex: auto;
            padding-left: 2vw;
            background: linear-gradient(45deg, #ffee00,#ffffff, #ffee00, #ffffff);;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }

        .card-github {
            flex: auto;
            padding-left: 2vw;
            background: linear-gradient(45deg, #ff00c8,#ffffff, #ff00c8, #ffffff);;
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }

        .card-deployment {
            flex: auto;
            padding-left: 2vw;

            background: linear-gradient(45deg, #1cc6ff,#ffffff, #1cc6ff, #ffffff);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }

        .card-description {
            flex: auto;
            padding-left: 2vw;
        }

    .tools{
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

    .tools::before {
        inset: 0;
        content: "";
        position: absolute;

        border-radius: 3vw;

        /* opacity: .7; */

        background: linear-gradient(45deg, #eab1ff67, #fbdc6b5e);
        backdrop-filter: blur(16px);

        box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);
        z-index: -1;
    }

    .tool {
        /* width:5%; */
    }
`

export default ProjectCard;