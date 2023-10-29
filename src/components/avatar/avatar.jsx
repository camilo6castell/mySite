import { styled } from "styled-components";

function Avatar({ data, mode }) {
  return (
    <StyledAvatar data={data} mode={mode}>
      <span></span>
      <span></span>
      <div className="image">
        <img src={data.photo} alt="caTEST" />
      </div>
    </StyledAvatar>
  );
}

const StyledAvatar = styled.div`
  && {
    position: relative;

    background: black;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    display: flex;
    flex: auto;
    justify-content: center;
    align-items: center;

    opacity: 0;
    animation: 0.7s ease 0.1s forwards zoomIn;

    transition: all 2s;
    transform: translate(0, -7px);

    mix-blend-mode: hard-light;
  }
  &::after {
    content: "";
    position: absolute;

    width: 100%;
    transform: scale(0.9);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: ${({ mode }) => mode.backgroundColor};
  }

  span {
    flex: auto;
    position: absolute;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: linear-gradient(
      ${({ data }) => data.avatar[0]},
      ${({ data }) => data.avatar[1]},
      ${({ data }) => data.avatar[0]},
      ${({ data }) => data.avatar[1]}
    );
    border-radius: 50%;

    opacity: 0.8;

    animation: circleRotate 5s linear infinite;
  }

  span:nth-child(1) {
    filter: blur(0.3vw);
  }

  .image {
    display: flex;
    flex: auto;
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    transform: scale(0.9);
    /* background: red;  */
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
  }

  .image img {
    flex: auto;
    position: absolute;
    top: 1vw;
    left: 80%;
    transform: translateX(-50%);
    max-width: 100%;
    object-fit: cover;
    animation: 1s ease 0s forwards appear;
  }
`;

export default Avatar;
