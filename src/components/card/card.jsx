import { StyledCard } from "../../UI/styledComponents/StyledComponents";

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

export default Card;
