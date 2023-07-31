import { styled } from "styled-components";

import SectionOne from "./components/sectionOne/sectionOne";
import SectionTwo from "./components/sectionTwo/sectionTwo";
import SectionThree from "./components/sectionThree/sectionThree";

function App() {
  return (
    <StyledApp className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  & {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    align-items: stretch;
  }
`;

export default App;
