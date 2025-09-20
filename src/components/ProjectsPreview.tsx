'use client'
import styled from 'styled-components'
import { projectsContent_projectList } from '@/app/config/content'
import { useRef, useState, useEffect, useCallback } from 'react'
import { FadeBox } from '@/styles/keyframes'
import { useInView } from '@/hooks/useInView'
import { themeConfig } from '@/app/config/theme'
import { FaExternalLinkAlt } from "react-icons/fa";

// --- Styled components ---
const OuterWrapper = styled(FadeBox)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`

const CarouselWrapper = styled(FadeBox)`
  position: relative;
  overflow: hidden;
  flex: 1;
  max-width: 1100px;
`

const Track = styled.div`
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

const Slide = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;
  scroll-snap-align: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.article`
  display: flex;
  height: fit-content;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 0 5px ${({ theme }) => theme.shadowCard};
  transition: box-shadow 0.5s ease, background 3s ease, transform 0.3s ease;
  h3 {
    color: var(--text);
    font-size: 1.25rem;
    padding-bottom: .3rem;
  }
  p {
    color: var(--muted);
    padding-left: .3rem;
  }  
  div {
    display: flex;
    justify-content: space-between;
    margin-top: .5rem;
    padding-left: .3rem;
    a {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
    color: var(--link);
   }
    .repo-link {
      color: #d44cbe;
      svg {
        fill: #d44cbe;
      }
    }
    .deployment-link {
      color: #4ca2d4;
      svg {
        fill: #4ca2d4;
      }
    }
  }  
  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.projectCard.hoverShadow};
    transform: scale(1.02);
  }
`

const Arrow = styled.button<{ $hidden?: boolean; $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: -3rem;' : 'right: -3rem;')}
  transform: translateY(-50%);
  background: none;
  color: var(--text);
  border: none;
  cursor: pointer;
  font-size: 4rem;
  line-height: 1;
  transition: opacity 0.4s ease, box-shadow 0.3s ease;
  z-index: 5;

  opacity: 1;
  pointer-events: auto;

  ${({ $hidden }) =>
    $hidden &&
    `
    opacity: 0;
    pointer-events: none;
  `}

  &:hover {
    box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
  }
`

// --- Helpers ---
const chunkArray = <T,>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

// --- Component ---
export default function ProjectsPreview() {
  const { ref, inView } = useInView(0.3)
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const slides = chunkArray(projectsContent_projectList.projects, 9)

  const updateArrows = useCallback(() => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setAtStart(scrollLeft === 0)
    setAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth)
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows)
    window.addEventListener('resize', updateArrows)
    return () => {
      el.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [updateArrows])

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return
    const width = trackRef.current.clientWidth
    trackRef.current.scrollBy({
      left: dir === 'left' ? -width : width,
      behavior: 'smooth',
    })
  }

  return (
    <div className="content-surface" style={{ maxWidth: 1300, margin: '0 auto' }}>
      <FadeBox
        $inView={inView}
        $direction="right"
        $duration={themeConfig.animation.general_duration}
        $delay={0}
        ref={ref}
      >
        <h2 style={{ color: 'var(--text)' }}>Projects</h2>
      </FadeBox>

      <OuterWrapper
        $inView={inView}
        $direction="fade"
        $duration={themeConfig.animation.general_duration}
        $delay={0}
        ref={ref}
      >
        <Arrow onClick={() => scroll('left')} $hidden={atStart} $side="left">
          ‹
        </Arrow>

        <CarouselWrapper
          $inView={inView}
          $direction="fade"
          $duration={themeConfig.animation.general_duration}
          $delay={0.3}
        >
          <Track ref={trackRef}>
            {slides.map((page, idx) => (
              <Slide key={idx}>
                {page.map((p) => (
                  <Card key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.summary}</p>
                    <div >
                      {p.repo && (
                        <a className="repo-link" href={p.repo} target="_blank" rel="noreferrer">
                          Repo <FaExternalLinkAlt />
                        </a>
                      )}
                      {p.demo != '' && (
                        <a className="deployment-link" href={p.demo} target="_blank" rel="noreferrer">
                          Deployment <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </Card>
                ))}
              </Slide>
            ))}
          </Track>
        </CarouselWrapper>

        <Arrow onClick={() => scroll('right')} $hidden={atEnd} $side="right">
          ›
        </Arrow>
      </OuterWrapper>
    </div>
  )
}
