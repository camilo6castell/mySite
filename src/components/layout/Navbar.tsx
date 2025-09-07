'use client'
import { memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaHome, FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useThemeContext } from '@/lib/providers'
import { navbarContent_navbar } from '../../app/config/content'
import { useInView } from '@/hooks/useInView'
import { FadeBox } from '@/styles/keyframes'
import { themeConfig } from '@/app/config/theme'

const Bar = styled(FadeBox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 60;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 2rem;
  background: transparent;
`
const Left = styled.div` display:flex; align-items:center; gap:12px; `
const Center = styled.div` flex:1; display:flex; align-items:center; justify-content:center; gap: 3rem;`
const Right = styled.div` display:flex; gap:10px; align-items:center; flex-wrap: wrap;`

const IconContainer = styled.a`
  display: flex;
  position:relative;   
  width: 2rem; 
  height: 2rem; 
  display:inline-flex; 
  align-items:center; 
  justify-content:center; 
`
const Layer = styled.div<{ $isDarkLayer: boolean; $isDark: boolean; }>`
  position: absolute;
    flex: 1;
  inset: 0;
  width:100%;
  height:100%;
  z-index: ${p => (p.$isDarkLayer ? 1 : 0)};
  opacity: ${p => (p.$isDarkLayer ? (p.$isDark ? 1 : 0) : (p.$isDark ? 0 : 1))};
  overflow:hidden;

  svg {
    fill: var(--text);
    width: 100%;
    height: 100%;
  }
`

const Social = styled(Link)`
  color: var(--text);
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  
  svg {
    fill: var(--text);
  }
`

const Toggle = styled.button`
  color: var(--text);
  font-size: 2rem;
  padding:6px 10px;
  background: transparent;
  cursor:pointer;
`

type IconTransitionProps = {
  day: React.ReactNode
  night: React.ReactNode
  isDark: boolean
  ariaLabel?: string
  href?: string
  iconSize?: string
}

/* Memo para evitar renders innecesarios */
const IconTransition = memo(function IconTransition({ day, night, isDark, ariaLabel, href = '#', iconSize }: IconTransitionProps) {

  return (
    <IconContainer aria-label={ariaLabel} href={href} style={iconSize ? { width: iconSize, height: iconSize } : {}}>
      <Layer $isDarkLayer={true} $isDark={isDark}>
        {day}
      </Layer>
      <Layer $isDarkLayer={false} $isDark={isDark}>
        {night}
      </Layer>
    </IconContainer>
  )
})

export default function Navbar() {
  const { ref, inView } = useInView(0.3)
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Bar $inView={inView} $direction='down' $duration={themeConfig.animation.general_duration} $delay={0.5} ref={ref} role="navigation" aria-label="Main navigation">

      <Left>
        <IconTransition
          ariaLabel="Ir al inicio"
          isDark={isDark}
          day={<Image src={navbarContent_navbar.logo_day} alt="logo day" fill style={{ objectFit: 'cover' }} />}
          night={<Image src={navbarContent_navbar.logo_night} alt="logo night" fill style={{ objectFit: 'cover' }} />}
          href="#home"
          iconSize={'2.6rem'}
        />
      </Left>

      <Center>

        <Social href="#home" rel="noreferrer">
          <FaHome /> Home
        </Social>
        <Social href="#projects" rel="noreferrer">
          <FaProjectDiagram /> Projects
        </Social>
        <Social href="#contact" rel="noreferrer">
          <IoMdContact /> Contact
        </Social>
      </Center>

      <Right>

        <Toggle onClick={toggleTheme} aria-label="Toggle dark mode">
          <IconTransition
            isDark={isDark}
            ariaLabel="Cambiar tema"
            day={<BsFillSunFill />}
            night={<BsMoonStarsFill />}
          />
        </Toggle>

      </Right>
    </Bar>
  )
}
