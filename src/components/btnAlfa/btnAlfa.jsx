import { StyledBtnAlfa } from "../../UI/styledComponents/StyledComponents";

function BtnAlfa({ data }) {
    return(
        <StyledBtnAlfa  href="#connect" data={data} onClick={() => console.log("conectado")}>Contrátame!</StyledBtnAlfa >
    )
}

export default BtnAlfa;