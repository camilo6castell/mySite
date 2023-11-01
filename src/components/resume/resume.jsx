import styled from "styled-components";

export function Resume(showResume) {
  return (
    <ResumeStyled showResume={showResume}>
      <iframe
        src="https://drive.google.com/file/d/1Ru9mvbS1DWETmO5L_ZFFL0H_Hw_i3umA/preview"
        width="95%"
        height="80%"
        allow="autoplay"
        title="Camilo Castellanos CV"
      ></iframe>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    visibility: ${({ showResume }) => showResume.showResume[0]};
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    transition: all ease-in-out 1s;
    animation: 0.5s ease-in-out 0s forwards
      ${({ showResume }) => showResume.showResume[1]};

    cursor: pointer;
  }

  iframe {
    border-radius: 1.5rem;
    z-index: 9999;
  }

  @media only screen and (max-width: 768px) {
    && {
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;
      background-color: black;
      z-index: 9998;
    }
    iframe {
      width: 100%;
      padding-top: 20%;
    }
  }
`;
