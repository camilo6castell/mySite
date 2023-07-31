import { styled } from "styled-components";
import { StyledSectionApp } from "../../UI/styledSectionApp";

function SectionThree() {
    return(
        <StyledSectionAppThree>

        </StyledSectionAppThree>
    )
}

const StyledSectionAppThree = styled(StyledSectionApp)`
  & {
    width: 15vw;
    flex: 1 1 auto;
  }
`;

export default SectionThree;
