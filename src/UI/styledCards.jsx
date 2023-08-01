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
  padding: 4vh 0 0 0;
  display: flex;
  flex-direction: column;
}
`

export const StyledCinta = styled(StyledSimpleCard)`
& {
  padding: 1vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
`