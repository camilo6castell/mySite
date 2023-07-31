import { styled } from "styled-components";

export const StyledSimpleCard = styled.div`
& {
  position: relative;
  z-index: 0;

  height: fit-content;

  padding: 1vw;
  border-radius: 3vw;
  height: fit-content;

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

`;

export const StyledCard = styled(StyledSimpleCard)`
& {
  transition: all 1s ease-in-out 0.2s;
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.98);
  height: fit-content;
  margin: 1vw 0;
}

&::before {
  inset: 0;
  position: absolute;
  content: "";
  z-index: -1;

  border-radius: 3vw;
  backdrop-filter: blur(4vw);
  /* background: green; */
  padding: 2vw;
}

/* &:hover {
  transform: scale(0.998);
  box-shadow: 0px 0px 12px -3px rgba(0, 0, 0, 0.98);
} */
`;