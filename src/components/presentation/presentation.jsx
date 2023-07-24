import { DivPStyled } from "../../UI/styledComponents/StyledComponents";

function Presentation({ data }) {
    return(
        <DivPStyled>
            <h1>{data.name}</h1>
            <h3>{data.role}</h3>
            <p>{data.description}</p>
        </DivPStyled>
    )
}

export default Presentation;