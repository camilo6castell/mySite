import { styled } from "styled-components";
import { StyledSectionApp } from "../../UI/styledSectionApp";

function SectionTwo(){
    return(
        <StyledSectionAppTwo>

        </StyledSectionAppTwo>
    )
}

const StyledSectionAppTwo = styled(StyledSectionApp)`
  & {
    width: 50vw;
    flex: 3 3 auto;
    filter: brightness(80%)
    /* backdrop-filter: blur(50px); */
  }
`;

export default SectionTwo;