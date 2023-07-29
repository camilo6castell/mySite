import { styled } from "styled-components";

export const StyledHeader = styled.header`
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

export const StyledAvatar = styled.div`
&& {
    position: relative;

    background: yellowgreen;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    flex: auto;
    justify-content: center;
    align-items: center;

    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite alternate forwards;

    transition: all 2s;
    transform: translate(0, -7px);
    
    animation-delay: 2.1s, 3.1s;
}
    &::after {
        content: "";
        position: absolute;

        width: 100%;
        transform: scale(0.97);
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: ${({mode}) => mode.backgroundColor};
    }

    span {
        flex: auto;
        position: absolute;
        width: 100%;
        aspect-ratio: 1 / 1;
        background: linear-gradient(${({data}) => data.avatar[0]}, ${({data}) => data.avatar[1]}, ${({data}) => data.avatar[0]}, ${({data}) => data.avatar[1]});
        border-radius: 50%;

        animation: circleRotate 5s linear infinite;
    }

        span:nth-child(1) {
            filter: blur(10px);
        }

    .image {
        display: flex;
        flex: auto;
        position: relative;
        width: 100%;
        aspect-ratio: 1 / 1;
        transform: scale(0.97);
        /* background: red; development*/
        border-radius: 50%;
        z-index: 1;
        overflow: hidden;
    }

        .image img {
            flex: auto;
            position: absolute;
            top: 1vw;
            left: 80%;
            transform: translateX(-50%);
            max-width: 100%;
            object-fit: cover;
        }
`

export const StyledPresentation = styled.div`
    & {
       display: flex;
       flex-direction: column;
       flex: auto;
       /* align-items: center; */
       justify-content: flex-start;
       padding: 1vw;
       
    }

        h1 {
            flex: 0 0 5%;

            font-size: 1.7vw;
            font-weight: 700;
            line-height: 1.2;

            opacity: 0;
            animation: slideRight 1s ease forwards;
            animation-delay: .7s;
        }

        h3 {
            flex: 0 0 5%;
            font-size: 1.5vw;
            font-weight: 700;

            opacity: 0;
            animation: slideLeft 1s ease forwards, lights 2s linear infinite;
            animation-delay: .7s, 1.1s;
        }

        p {
            flex: 0 0 90%;
            font-size: 1.3vw;
            line-height: 1.5;
            padding: 1vw 0 1vw;

            opacity: 0;
            animation: slideLeft 1s ease forwards;
            animation-delay: 1.3s;
            flex: auto;
        }
`

export const StyledIconSocial = styled.a`
        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, ${({ data }) => data.color[0]}, ${({ data }) => data.color[1]});
            border-radius: 50%;
            z-index: -1;
            transition: .5s ease;
        }
    
        &:hover::before {
            filter:blur(5px);
        }
  
    && {
        flex: 1 1 10%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, ${({ data }) => data.color[0]}, ${({ data }) => data.color[1]});
        border-radius: 50%;
        font-size: 20px;
        color: white;
        text-decoration: none;
        margin: 20px 0;
        z-index: 1;
        opacity: 0;
        animation: ${({ data }) => data.animation} 1s ease forwards;
        animation-delay: 2.1s;
    }
  
        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: ${({ mode }) => mode.backgroundColor};
            border-radius: 50%;
            transform: scale(.88);
            z-index: -1;
            transition: .5s ease;
        }
    
        &:hover::after {
            transform: scale(0);
        }
`

export const StyledSkills = styled.section`
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
`

export const StyledCard = styled.div`

    & {
        flex: 1 1 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        margin: .5vw;
        z-index: 2;

        /* background: red; */
        }

            .card-img::before {
                inset: 0;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(45deg, rgb(153, 105, 3), rgb(255, 255, 255), rgb(255, 219, 58));
                z-index: 2;
                border-radius: 50%;
                background-size: 200%;
                background-position: 0 0;
                filter: blur(3px);

                transition: .5s ease;

                animation: circleRotate 2s ease-in-out reverse infinite;
            }

            .card-img:hover::before {
                background-position: 100% 0;
                
                
            }

            .card-img {
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                width: fit-content;
                height: fit-content;


                padding: 1vw;
                border-radius: 50%;
            
                z-index: 3;

                opacity: 0;
                animation: appear 1s ease forwards;
                animation-delay: 1.8s;
            }

            .card-img::after {
                inset: 0;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(45deg, rgb(153, 105, 3), rgb(255, 255, 255), rgb(255, 219, 58));
                transform: scale(0.9);
                background-position: 0 0;
                background-size: 150%;
                filter: blur(4px);

                z-index: 2;
                border-radius: 50%;
                transition: .5s ease;
                
                
            }

            .card-img:hover::after {
                background-position: 100% 0;
                
            }

        img{
            position: relative;
            opacity: 1;
            overflow: hidden;
            width: 3vw;
            aspect-ratio: 1 / 1;
            /* box-shadow: 0px 0px 15px -5px black; */
            z-index: 10;
            object-fit: cover;
        }

        .tag-container {
            display: hidden;
            /* opacity: 0;
            animation: 2s ease-in-out 4s forwards  appear; */
        }

        .tag {
            display:block;
            font-size: 1rem;
            color: #f5f5f5;
            text-shadow: 0px 0px 10px #ffc935;
            font-weight: 600;
            letter-spacing: 1px;
            text-align: center;

            padding: .5rem;
            margin: auto;
            font-weight: 300;
            
            animation: 2s ease-in-out 0s infinite normal forwards lights;
            display: none;
        }

`

export const StyledPorjects = styled.div`
    & {
        display: flex;
        flex: 1 1 80%;
        flex-direction: column;
        justify-content: flex-start;

        width: 100%;

        background: #01018b;
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



