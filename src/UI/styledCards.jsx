import { styled } from "styled-components";

export const StyledSimpleCard = styled.div`
  & {
    position: relative;
    z-index: 0;

    height: fit-content;

    padding: 1vw;
    border-radius: 3vw;
    height: fit-content;

    transition: all 1s ease-in-out 0.2s;

    /* background: green; */
  }
  .card-tag {
    /* padding-left: 3vw; */
    color: #ffffff4f;
    font-size: 1.2vw;
    font-weight: 500;
    pointer-events: none;
    z-index: 0;
  }

  .big-card-tag {
    text-align: center;
    margin: 0 0 2rem;
    /* padding-left: 3vw; */
    display: block;
    color: aliceblue;
    font-size: 1.5vw;
    font-weight: 600;
    pointer-events: none;
    z-index: 0;
  }
`;

export const StyledCarrete = styled(StyledSimpleCard)`
  & {
    /* background: black; */
    padding: 4vh 0 0 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    width: 65vw;
    height: 90vh;

    animation: 3s linear 1s both appear;
  }

  @media only screen and (max-width: 768px) {
    & {
      width: 95vw;
      height: fit-content;
      padding: 0;
    }

    .big-card-tag {
      font-size: 1.5rem;
      margin: 0 0 2rem;
    }
  }
`;

export const StyledCinta = styled(StyledSimpleCard)`
  & {
    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 0;
    margin-bottom: 2rem;

    overflow: auto;
  }

  @media only screen and (max-width: 768px) {
    & {
      height: fit-content;
    }
  }
`;
