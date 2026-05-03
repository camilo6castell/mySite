'use client'

import styled from 'styled-components'
import { useRef, useEffect, useState } from 'react'
import ProjectCard from './atoms/ProjectCard'
import { projectsContent_projectList } from '@/config/content'

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`

const Track = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  overflow-x: auto;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

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
  padding: 2rem;
`

const Indicators = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  background: ${({ $active, theme }) =>
    $active ? theme.rightNavDotsColor : 'rgba(255,255,255,0.2)'};

  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const [currentIndex, setCurrentIndex] = useState(0)

  const total = projectsContent_projectList.projects.length

  /* ================= AUTOPLAY ================= */

  const startAutoPlay = () => {
    stopAutoPlay()

    intervalRef.current = setInterval(() => {
      if (!trackRef.current) return

      const nextIndex = (currentIndex + 1) % total
      scrollToIndex(nextIndex)
    }, 5000)
  }

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  /* ================= SCROLL ================= */

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return

    const width = trackRef.current.clientWidth

    trackRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    })

    setCurrentIndex(index)
  }

  /* ================= TRACK SCROLL ================= */

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const handleScroll = () => {
      const width = el.clientWidth
      const index = Math.round(el.scrollLeft / width)
      setCurrentIndex(index)
    }

    el.addEventListener('scroll', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* ================= INIT ================= */

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [currentIndex])

  /* ================= RENDER ================= */

  return (
    <Wrapper
      id="projects"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <Track ref={trackRef}>
        {projectsContent_projectList.projects.map((project) => (
          <Slide key={project.title}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Track>

      {/* Indicators */}
      <Indicators>
        {Array.from({ length: total }).map((_, i) => (
          <Dot
            key={i}
            $active={i === currentIndex}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </Indicators>
    </Wrapper>
  )
}