'use client'
import styled from 'styled-components'
import { useRef } from 'react'
import ProjectCard from './atoms/ProjectCard'
import { projectsContent_projectList } from '@/config/content'

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  overflow: hidden;
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

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <Wrapper id="projects">
      <Track ref={trackRef}>
        {projectsContent_projectList.projects.map((project) => (
          <Slide key={project.title}>
            <ProjectCard project={project} />
          </Slide>
        ))}
      </Track>
    </Wrapper>
  )
}