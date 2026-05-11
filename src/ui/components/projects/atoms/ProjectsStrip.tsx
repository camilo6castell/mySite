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
  width: 100%;
  height: 20%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    position: sticky;
    top: 2rem;

    z-index: 30;
    height: auto;
    display: block;
    overflow: visible;
    padding: 0.8rem 0;
    /* background: rgba(15, 15, 15, 0.55); */
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    position: static;

    height: auto;

    display: flex;
    align-items: center;

    gap: 0.75rem;

    overflow-x: auto;
    overflow-y: hidden;

    padding: 0 1rem;

    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
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

  transition:
    transform 0.4s ease,
    opacity 0.4s ease;

  @media (max-width: 900px) {
    position: static;

    transform: none;

    flex: 0 0 auto;

    opacity: 1;

    filter: none;

    font-size: 0.9rem;
    font-weight: 500;

    line-height: 1;

    padding: 0.85rem 1rem;

    border-radius: 999px;

    background: ${({ $active, theme }) =>
      $active ? theme.bgCard : "rgba(255,255,255,0.03)"};

    border: 1px solid
      ${({ $active, theme }) =>
        $active ? theme.borderCard : "rgba(255,255,255,0.08)"};

    color: ${({ $active }) => ($active ? "var(--text)" : "var(--muted)")};

    white-space: nowrap;
  }
`;
