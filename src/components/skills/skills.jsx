import { useContext } from 'react';
import { DataContext } from '../../dataContext/data';

import { styled } from "styled-components";

import Card from "../card/card"
import CardProject from '../projects/cardProject';

function Skills() {
    const data = useContext(DataContext)
    return (
        <StyledSkills>
            <div className="skills-container">
                <h1 className="title">
                    Skills
                </h1>
                <div className="icons-container">
                    {data.skills.map( (skill) => <Card key={skill.name} data={skill}/>)}
                </div>
            </div>
            <div className="projects-container">
                <h1 className="title">
                    Projects
                </h1>
                <div className="pills-container">
                    { data.projects.map( project => 
                        <div className="pills">
                            <span> {project.type} </span>
                            <span> {project.name} </span>
                        </div>
                    )}
                </div>

            </div>
          
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
        &&::before {
            inset: 0;
            content: "";
            position: absolute;
            top: 0;
            left: 0;

            height: 100vh;
            z-index: 0;
            opacity: 1;
            backdrop-filter: blur(20px);       
        }

    & {
        position: relative;
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: flex-start;

        width: 100%;
        height: 100vh;
        z-index: 1;

        /* background: red;    */

        /* transition: 1s ease-in-out; */
    }

        .skills-container {
            display:flex;
            flex-direction: column;
            justify-content: flex-start;

            height: fit-content;
            
            flex: 0 0 auto;
            
            top: 0;
            padding: 1vw 1vw;

            
            
            /* background: red;
            z-index: 1000; */
        }

            .title {
                display:flex;
                flex: auto;
                font-size: 2vw;
                color: #fff;
                font-weight: 600;
                pointer-events: none;
                flex: 0 0 auto;

                opacity: 0;
                animation: slideTop 1s ease forwards;
            }

            /* .info {
                flex: 0 0 90%;
                font-size: 1.3vw;
                padding: 1vw;

                opacity: 0;
                animation: slideLeft 1s ease forwards;
                animation-delay: 1.3s;
                flex: auto;
            } */

            .icons-container {
                display: flex;
                
                position: relative;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-start;

                border-radius: 2% 2% 2% 2%;
                
                width: 100%;
                height: fit-content;
                
                padding: 1vw;
                

                background: #490101;
                z-index: 1;
            }

                .icons-container::before {
                    inset: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: "";
                    z-index: 0;
                    opacity: 0.7;
                    background-color: linear-gradient(45deg, rgb(153, 105, 3), rgb(255, 255, 255), rgb(255, 219, 58));
                    backdrop-filter: blur(90px);
                }
        
        .projects-container {
            display: flex;
            flex: 1 1 80%;
            flex-direction: column;
            justify-content: flex-start;

            width: 100%;

            background: #01018b;
        }

            /* .title {
                display:flex;
                flex: auto;
                font-size: 2vw;
                color: #fff;
                font-weight: 600;
                pointer-events: none;
                flex: 0 0 auto;

                opacity: 0;
                animation: slideTop 1s ease forwards;
            } */

            .pills-container {
                display: flex;
                
            }

                .pills {
                    display: flex;
                    flex: 1 1 auto;
                    position: relative;
                    justify-content: center;
                    align-items: center;
                
                    height: fit-content;
                    
                    background: #ffffff;

                    font-size: 19px;
                    color: white;
                    text-shadow: 0px 0px 10px black;
                    font-weight: 600;
                    letter-spacing: 1px;
                    z-index: 1;

                    opacity: 0;
                    animation: slideTop 1s ease forwards;
                    animation-delay: 1.8s;
                }

                .pills::before {
                    inset: 0;
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(45deg, red, orange, green);
                    z-index: -1;
                    border-radius: 40px;
                    background-size: 200%;
                    background-position: 0 0;
                    filter: blur(5px);
                    transition: .5s ease;
                }

                .pills:hover::before {
                    background-position: 100% 0;
                }
                
                .pills::after {
                    inset: 0;
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: linear-gradient(45deg, red, orange, green);
                    background-position: 0 0;
                    background-size: 200%;
                    z-index: -1;
                    border-radius: 40px;
                    transition: .5s ease;
                }

                .pills:hover::after {
                    background-position: 100% 0;
                }
`

export default Skills;