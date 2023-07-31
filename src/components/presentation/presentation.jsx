import { styled } from "styled-components";

// EFFECT TO TEXT THANKS TO Philip Zastrow

function Presentation({ data }) {
    return(
        <StyledPresentation>
            <h1>{data.name}</h1>
            <h3 className="nightsStyle">{data.role}</h3>
            <p>{data.description}</p>
        </StyledPresentation>
    )
}

const StyledPresentation = styled.div`
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

export default Presentation;
