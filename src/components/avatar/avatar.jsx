import { StyledAvatar } from "../../UI/styledComponents/StyledComponents";

function Avatar({ data, mode }) {
    return(
        <StyledAvatar data={data} mode={mode}>
            <span></span>
            <span></span>
            <div className="image">
                <img src={data.photo} alt="caTEST" />
            </div>
        </StyledAvatar>
    )
}

export default Avatar;