"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import ProjectCard from "./atoms/ProjectCard";
import { projectsContent_projectList } from "@/config/content";
import { FadeBox } from "@/ui/styles/keyframes";
import { useInView } from "@/hooks/useInView";
import { themeConfig } from "@/config/theme";
import ProjectsStrip from "./atoms/ProjectsStrip";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView(0.3);

  const projects = projectsContent_projectList.projects;

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  const next = () => {
    if (activeIndex < projects.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <Wrapper id="projects">
      <ProjectsStrip
        projects={projects}
        activeIndex={activeIndex}
        onSelect={goTo}
        inView={inView}
        ref={ref}
      />

      <CarouselWrapper
        $inView={inView}
        $direction="up"
        $duration={themeConfig.animation.general_duration}
        $delay={1}
        ref={ref}
      >
        <Arrow onClick={prev} $side="left">
          ‹
        </Arrow>

        <SlidesContainer>
          {projects.map((project, i) => (
            <Slide key={project.title} $active={i === activeIndex}>
              <FadeBoxForProjectsSection
                $inView={i === activeIndex && inView}
                $direction="fade"
                $duration={1}
                $delay={0.1}
              >
                <ProjectCard project={project} />
              </FadeBoxForProjectsSection>
            </Slide>
          ))}
        </SlidesContainer>

        <Arrow onClick={next} $side="right">
          ›
        </Arrow>
      </CarouselWrapper>
    </Wrapper>
  );
}

/* ================= STYLES ================= */

const Wrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: auto;
    padding-top: 5.5rem;
    padding-bottom: 4rem;

    justify-content: flex-start;
  }
`;

const CarouselWrapper = styled(FadeBox)`
  height: 80%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: auto;
    align-items: stretch;
    overflow: visible;
  }
`;

/* ⭐ contenedor sin scroll */
const SlidesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 900px) {
    min-height: 100%;
  }
`;

/* ⭐ crossfade */
const Slide = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};

  transition: opacity 0.6s ease;

  @media (max-width: 900px) {
    position: relative;
    inset: auto;

    display: ${({ $active }) => ($active ? "flex" : "none")};

    opacity: 1;
    pointer-events: auto;
  }
`;

const Arrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 20px" : "right: 20px")};
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  z-index: 10;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const FadeBoxForProjectsSection = styled(FadeBox)`
  display: flex;
  width: 100%;
  height: 100%;
`;
