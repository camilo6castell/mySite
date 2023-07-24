import { AStyled } from "../../UI/styledComponents/StyledComponents";

function IconSocial({ data, mode }) {
    return(
        <AStyled href={data.link} data={data} mode={mode} target="_blank" rel="noreferrer"><i className={data.icon} alt={data.name}></i></AStyled >
    )
}
export default IconSocial;