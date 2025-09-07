'use client'
import styled from 'styled-components'
import { FadeBox } from '@/styles/keyframes'
import { useInView } from '@/hooks/useInView'
import { themeConfig } from '@/app/config/theme'
import { heroContent_hero } from '@/app/config/content'


const Inner = styled.div`
  display: flex;              
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  gap: 1rem;
`

const HeroSection = styled.div<{ $portion: number, $isColumn?: boolean }>`
  display: flex;
  flex-direction: ${({ $isColumn = false }) => $isColumn ? 'column' : 'row'};
  align-items: ${({ $isColumn = false }) => $isColumn ? 'flex-start' : 'stretch'}; /* stretch para que hijos llenen la altura */
  justify-content: center;
  flex: ${({ $portion }) => $portion};
  width: 100%;
`

const Badge = styled(FadeBox)`
  display:inline-flex;
  gap:12px;
  align-items:center;
  padding:8px 12px;
  border-radius:999px;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};
  width: fit-content;
`

const Title = styled(FadeBox)`
  font-size: 3rem;
  font-weight: 700;
  margin-top: 1.2rem;
  line-height: 1;
  color: var(--text);
`

const Role = styled(FadeBox)`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0.4rem;
  word-spacing: 0.25rem;
  color: var(--text);
`

const Desc = styled(FadeBox)`
  margin-top: 1rem;
  color: var(--muted);
  font-size: 1.05rem;
`

const HeroImage = styled(FadeBox)`
  flex: 1;                    /* ocupa el espacio disponible */
  margin: 0 3rem;
  border-radius: 12px;
  overflow: hidden;           /* para que el border-radius funcione con background-image o <Image> */
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
  background-image: url(${heroContent_hero.heroImage});
  background-size: cover;
  background-position: center;
  z-index: 1000;
  width: 100%;
  height: ${({ theme }) => theme.heroImage.height};     /* asegura que no colapse a 0px */
`

export default function Hero() {
  const { ref, inView } = useInView(0.3)
  return (
    <Inner className="content-surface">

      <HeroSection $portion={2} >

        <HeroSection $portion={1} $isColumn={true} style={{ gap: '0.5rem' }}>
          <Badge $inView={inView} $direction='down' $duration={themeConfig.animation.general_duration + 1} $delay={1} ref={ref}>
            {heroContent_hero.badge}
          </Badge>
          <Title $inView={inView} $direction='fade' $duration={themeConfig.animation.general_duration + 1} $delay={0} ref={ref}>
            {heroContent_hero.Title}
          </Title>
          <Role $inView={inView} $direction='fade' $duration={themeConfig.animation.general_duration + 1} $delay={0.5} ref={ref}>
            {heroContent_hero.role}
          </Role>
        </HeroSection>

        <HeroSection $portion={1} $isColumn={false}>
          <HeroImage $inView={inView} $direction='left' $duration={themeConfig.animation.general_duration + 1} $delay={0} ref={ref} />
        </HeroSection>

      </HeroSection>

      <HeroSection $portion={1} $isColumn={true} >
        <Desc $inView={inView} $direction='up' $duration={themeConfig.animation.general_duration + 1} $delay={1} ref={ref} style={{ width: '100%', fontStyle: 'italic', textAlign: 'center' }}>
          {heroContent_hero.DescOne}
        </Desc>
        <Desc $inView={inView} $direction='up' $duration={themeConfig.animation.general_duration + 1} $delay={1.5} ref={ref}>
          {heroContent_hero.DescTwo}
        </Desc>
      </HeroSection>

    </Inner>
  )
}
