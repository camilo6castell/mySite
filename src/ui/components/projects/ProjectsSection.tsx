'use client'

import styled from 'styled-components'
import { useRef, useState, useEffect } from 'react'
import ProjectCard from './atoms/ProjectCard'
import { projectsContent_projectList } from '@/config/content'
import { FadeBox } from '@/ui/styles/keyframes'
import { useInView } from '@/hooks/useInView'
import { themeConfig } from '@/config/theme'
import ProjectsStrip from './atoms/ProjectsStrip'

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { ref, inView } = useInView(0.3)

  const projects = projectsContent_projectList.projects

  const goTo = (index: number) => {
    if (!trackRef.current) return
    const width = trackRef.current.clientWidth

    trackRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',      
    })

    trackRef.current.style.setProperty('transition', 'all 2s ease') 

    setActiveIndex(index)
  }

  const next = () => {
    if (activeIndex < projects.length - 1) goTo(activeIndex + 1)
  }

  const prev = () => {
    if (activeIndex > 0) goTo(activeIndex - 1)
  }

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex])

  // sync con scroll manual
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth)
      setActiveIndex(index)
    }

    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Wrapper id="projects">

      {/* STRIP desacoplado */}
      <ProjectsStrip
        projects={projects}
        activeIndex={activeIndex}
        onSelect={goTo}
        inView={inView}
        ref={ref}
      />

      {/* CAROUSEL */}
      <CarouselWrapper>
        <Arrow onClick={prev} $side="left">‹</Arrow>

        <Track ref={trackRef}>
          {projects.map((project) => (
            <Slide key={project.title}>
              <FadeBoxForProjectsSection
                $inView={inView}
                $direction="fade"
                $duration={themeConfig.animation.general_duration}
                $delay={0}
              >
                <ProjectCard project={project} />
              </FadeBoxForProjectsSection>
            </Slide>
          ))}
        </Track>

        <Arrow onClick={next} $side="right">›</Arrow>
      </CarouselWrapper>
    </Wrapper>
  )
}

/* ================= STYLES ================= */

const Wrapper = styled.section`
  height: 100dvh;
  width: 100%;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const CarouselWrapper = styled.div`
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
`

const Track = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Slide = styled.div`
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Arrow = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 20px' : 'right: 20px')};
  transform: translateY(-50%);
  font-size: 3rem;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  z-index: 10;
  opacity: 0.6;

  /* transition: opacity 0.2s ease, transform 0.2s ease; */

  &:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }
`

const FadeBoxForProjectsSection = styled(FadeBox)`
  display: flex;
  width: 100%;
  height: 100%;
`