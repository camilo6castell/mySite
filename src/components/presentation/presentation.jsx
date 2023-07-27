import { StyledPresentation } from "../../UI/styledComponents/StyledComponents";

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

export default Presentation;