import { styled } from "styled-components";

import Avatar from "../avatar/avatar";
import Presentation from "../presentation/presentation";

import { useContext } from "react";
import { DataContext } from "../../dataContext/data.jsx";
import IconSocial from "../iconSocial/iconSocial";


function Header() {
    const data = useContext(DataContext);
    const mode = data.theme
    return (
        <StyledHeader  data={data} >
            <div className="title-container">
                <h1 className="title">Portafolio</h1>
            </div>
            <div className="presentation-container">
                <div className="avatar-container">
                    <Avatar data={data.info} mode={data.theme}/>
                </div>
                <div className="info-container">
                    <Presentation data={data.info}/>
                </div>
            </div>            
            <nav className="social-container">
                <div className="title-social-container">
                    <h1 className="title-social">Redes Sociales</h1>
                </div>
    
                <div className="box-social">
                    {
                        data.social.map((data) => <IconSocial key={data.name} data={data} mode={mode}/> )
                    }
                </div>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    & {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        width: 25%;
        height: 100vh;
        z-index: 1;

        /* background: red;    */

        /* transition: 1s ease-in-out; */
    }

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

    .title-container {
        display:flex;
        flex: 0 0 1%;
        padding: 1vw 1vw;
        top: 0;        
    }

        .title {
            display:flex;
            flex: auto;
            font-size: 2vw;
            color: #fff;
            font-weight: 600;
            pointer-events: none;

            opacity: 0;
            animation: slideTop 1s ease forwards;
        }
    
    .presentation-container{
        display: flex;
        flex: 0 0 10%;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        padding: 1vw;
    }

        .avatar-container {
            position: relative;
            display: flex;
            flex: auto;
            justify-content: center;
            align-items: center;
            width: 60%;

            margin:  1vw 0;
            padding: 0 1vh 1vh;
            
            flex: 0 5 10%;
        }
    
        .info-container {
            display: flex;
            flex: auto;

            flex: 0 5 40%;
        }

    .social-container {
        display: flex;
        flex: 0 0 10%;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

        .title-social-container {
            display:flex;
            flex: 0 0 1%;
            padding: 1vw 1vw;
            top: 0;

            width: 100%;

        }

            .title-social {
                display:flex;
                flex: auto;

                

                text-align: left;
                font-size: 2vw;
                color: #fff;
                font-weight: 600;
                pointer-events: none;

                opacity: 0;
                animation: slideTop 1s ease forwards;
            }

`

export default Header