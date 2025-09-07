import { styled } from "styled-components";
import { ContactSocial } from "@/types/content";

export default function SocialButton({ data, children, isSocialHovered }: { data: ContactSocial; children?: React.ReactNode; isSocialHovered: boolean }) {
  return (
    <StyledIconSocial
      data={data}
      rel="noreferrer"
      className={isSocialHovered ? 'hovered' : ''}
    >
      {children}
    </StyledIconSocial>
  );
}

const StyledIconSocial = styled.span<{ data: ContactSocial }>`
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      ${({ data }) => data.color[0]},
      ${({ data }) => data.color[1]}
    );
    border-radius: 50%;
    z-index: -1;
    transition: 0.5s ease;
  }

  &.hovered::before {
    filter: blur(5px);
  }

  && {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;

    aspect-ratio: 1 / 1;
    background: linear-gradient(
      45deg,
      ${({ data }) => data.color[0]},
      ${({ data }) => data.color[1]}
    );
    border-radius: 50%;

    width: 3vw;
    font-size: 1.7vw;
    text-decoration: none;
    z-index: 1;
    opacity: 1;
    
    svg {
      fill: var(--text);
    }
  }

  &&.hovered {
    svg {
      fill: var(--text-night);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--bg);
    border-radius: 50%;
    transform: scale(0.88);
    z-index: -1;
    transition: 0.5s ease;
  }

  &.hovered::after {
    transform: scale(0);
  }
  i {
    transform: translateY(0.1vw);
  }

  @media only screen and (max-width: 768px) {
    && {
      width: 10vw;
      font-size: 6vw;
    }
  }
`;

