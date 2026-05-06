"use client";

import styled from "styled-components";
import { forwardRef } from "react";
import { FadeBox } from "@/ui/styles/keyframes";
import { themeConfig } from "@/config/theme";
import { raleway, montserrat, ephesis } from "../../../styles/fonts";

type Project = {
  title: string;
};

type Props = {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
  inView: boolean;
};

const ProjectsStrip = forwardRef<HTMLDivElement, Props>(
  ({ projects, activeIndex, onSelect, inView }, ref) => {
    return (
      <Wrapper
        ref={ref}
        $inView={inView}
        $direction="down"
        $duration={themeConfig.animation.general_duration}
        $delay={0.3}
      >
        <Track>
          {projects.map((p, i) => {
            const offset = i - activeIndex;

            return (
              <Item
                key={p.title}
                $offset={offset}
                $active={i === activeIndex}
                onClick={() => onSelect(i)}
              >
                {p.title}
              </Item>
            );
          })}
        </Track>
      </Wrapper>
    );
  },
);

ProjectsStrip.displayName = "ProjectsStrip";

export default ProjectsStrip;

/* ================= STYLES ================= */

const Wrapper = styled(FadeBox)`
  height: 20%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Item = styled.div<{
  $offset: number;
  $active: boolean;
}>`
  font-family: ${montserrat.style.fontFamily}, serif;
  position: absolute;
  bottom: 0;
  left: 50%;

  transform: ${({ $offset }) =>
    `translate(-50%, -50%) translateX(${$offset * 400}px) scale(${$offset === 0 ? 1 : 0.75})`};

  opacity: ${({ $offset }) =>
    Math.abs($offset) > 2 ? 0 : 1 - Math.abs($offset) * 0.3};

  filter: ${({ $offset }) => ($offset === 0 ? "none" : "blur(1px)")};

  font-size: ${({ $active }) => ($active ? "3rem" : "2rem")};
  font-weight: ${({ $active }) => ($active ? 600 : 300)};
  color: var(--text);

  cursor: pointer;
  white-space: nowrap;
`;
