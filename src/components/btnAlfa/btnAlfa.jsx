import { BStyled } from "../../UI/styledComponents/StyledComponents";

function BtnAlfa({ data }) {
    return(
        <BStyled href="#connect" data={data} onClick={() => console.log("conectado")}>Contrátame!</BStyled>
    )
}

export default BtnAlfa;