import { styled } from "styled-components";

function Card({ data }) {    
    return (
        <StyledCard >
            <div className="card-img">
                        <img src={data.icon} alt={`Ícono de ${data.name}`} className="img"/>
            </div>
            <div className="tag-container">
                <span className="tag">
                    {data.name}
                </span>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.div`

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

export default Card;
