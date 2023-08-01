import { styled } from "styled-components";
import { StyledSectionApp } from "../../UI/styledSectionApp";
import { StyledSimpleCard } from "../../UI/styledCards";

import { useContext } from "react";
import { DataContext } from "../../dataContext/data";

import Avatar from "../avatar/avatar";
import IconSocial from "../iconSocial/iconSocial";

function SectionOne() {
    const data = useContext(DataContext);
    const mode = data.theme
    return (
        <StyledSectionAppOne>
            <StyledSectionAvatar>
                <div className="title-container">
                    <div className="title">Camilo</div>
                    <div className="title aux">Castellanos</div>
                </div>
                <div className="avatar-container">
                    <Avatar data={data.info} mode={data.theme} />
                </div>
            </StyledSectionAvatar>
            <StyledSimpleCard>
                <span className="card-tag">Roles</span>
                <StyledSimpleCard>
                    <StyledCardRol>
                        <i className='bx bx-code-alt'></i>
                        <span>Web developer</span>
                    </StyledCardRol>
                    <StyledCardRol>
                        <i className='bx bx-code-curly'></i>
                        <span>Software developer</span>
                        </StyledCardRol>
                    <StyledCardRol>
                        <i className='bx bxs-brain'></i>
                        <span>Psychologist</span>
                    </StyledCardRol>
                </StyledSimpleCard>
            </StyledSimpleCard>
            <StyledSimpleCard>
                <span className="card-tag">Social Networks</span>
                <StyledCardSocial>
                    {data.social.map(data => 
                    <div className="social-container" key={data.name}>
                        <IconSocial key={data.name} data={data} mode={mode}/>
                    </div>
                    )}
                </StyledCardSocial>
            </StyledSimpleCard>

        </StyledSectionAppOne>
    )
}

const StyledSectionAppOne = styled(StyledSectionApp)`
  & {
    width: 20vw;
    justify-content: flex-start;
    z-index: 10;
  }
`;

// AVATAR

const StyledSectionAvatar = styled(StyledSimpleCard)` 

    & {
        flex: 0 0 auto;
    }
    .avatar-container {
        padding: 1vw 2vw;
    }

    .title-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1vw;
    }
    
        .title {
            
            font-family: 'Borel', cursive;

            font-size: 1.2vw;
            color: #fff;
            font-weight: 600;
            pointer-events: none;
        
            opacity: 0;
            animation: slideTop 1s ease forwards;
        }

        .aux {
            font-size: 1.2vw;
            margin-left: 2vw;
        }
`
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

    margin: .4vw 0;
    border-radius: .5vw;

    padding: .2vw;

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
`

// TARJETA SOCIAL CONTAINER

const StyledCardSocial = styled(StyledSimpleCard)`
    & {
        flex: 4 4 auto;
        display: flex;
        width: 100%;
        justify-content: center;
        flex-flow: row wrap;

     
    }

    .social-container {

        display: inline-flex;
        padding: .4vw;
    }
    
`

export default SectionOne;