import { styled } from "styled-components";

export const StyledSectionApp = styled.div`
  & {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    height: 100vh;

    padding: 1vw;

    overflow: hidden;

    backdrop-filter: blur(50px);

    /* background: red;    */

    /* transition: 1s ease-in-out; */

    box-shadow: inset 0px 0px 4px 1px #00000032;
    border: .1vw solid #00000029;

  }

  /* &&::before {
    inset: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    height: 100vh;
    z-index: 0;
    opacity: 1;
    backdrop-filter: blur(50px);
  } */
`;
