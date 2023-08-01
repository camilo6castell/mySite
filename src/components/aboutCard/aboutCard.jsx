import { styled } from "styled-components";

import { StyledSimpleCard } from "../../UI/styledCards";

function AboutCard({ data }) {
    return (
        <StyledAboutCard data={data}>
            <span className="card-title">
                {data.title}
            </span>
            <span className="card-description">
                {data.description}
            </span>
        </StyledAboutCard>
    )
}

const StyledAboutCard = styled(StyledSimpleCard)`
  & {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;

    width: 30vw;
    height: 40vh;
    margin: 3vh 1vw;
    padding: 0;
    
    box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);
 

    background-image: url(${({data}) => data.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    transition: all 1s ease-in-out 0.2s;

    z-index: -1;
    }
    .card-title {

        padding: 7vh 4vw 4vh;
        font-family: 'Borel', cursive;

        font-size: 3vw;
        color: #fff;
        font-weight: 600;
        pointer-events: none;
    }

    .card-description {
        padding: 4vh 3vw;
        flex: auto;

        border-radius: 4vw 4vw 3vw 3vw / 3.5vw 3.5vw 3vw 3vw;

        backdrop-filter: blur(10px) brightness(50%) invert(20%);
        box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);
    }
`

export default AboutCard;