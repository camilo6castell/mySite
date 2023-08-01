import { styled } from "styled-components";

function Card({ data }) {   
    console.log(data) 
    return (
        <StyledCard >
            <div className="img-container">
                <img className="img" src={data.icon} alt={`Ícono de ${data.name}`} />
            </div>

                <span className="tag">
                    {data.name}
                </span>

        </StyledCard>
    )
}

const StyledCard = styled.div`

    && {
        display: flex;
        flex-direction: column;
        flex: auto;
        justify-content: space-around;
        align-items: center;

        width: 4vw;
        height: fit-content;

        /* background: red; */

        text-align: center;

    }

    .img-container {
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        height: 4vw;
        width: 4vw;
        padding: 0;
        margin-bottom: 1vh;
    }

    .img {
        position: absolute;
        object-fit: cover;
        height: 4vw;
        width: 4vw;

        z-index: 1;
    }

    .tag {
        width: 100%;
        flex: auto;
        font-size: .8vw;

        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        color: black;
        text-shadow: 0 0 .2vw #e7e7e790;
    }
`

export default Card;
