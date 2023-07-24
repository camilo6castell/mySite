import { DivStyled } from "../../UI/styledComponents/StyledComponents";

function Avatar({ data, mode }) {
    return(
        <DivStyled data={data} mode={mode} className="myimg-circle">
            <span></span>
            <span></span>
            <div className="image">
                <img src={data.photo} alt="caTEST" />
            </div>
        </DivStyled>
    )
}

export default Avatar;