import { StyledIconSocial } from "../../UI/styledComponents/StyledComponents";

function IconSocial({ data, mode }) {
    return(
        <StyledIconSocial href={data.link} data={data} mode={mode} target="_blank" rel="noreferrer"><i className={data.icon} alt={data.name}></i></StyledIconSocial >
    )
}
export default IconSocial;