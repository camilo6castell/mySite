'use client'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { themeConfig } from '@/app/config/theme'
import { pulse } from '@/styles/keyframes'

const Container = styled.aside`
  position: fixed;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`

const Dot = styled.button<{ $active?: boolean; $color?: string }>`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  border: 2px solid ${p => p.$color || 'rgba(255,255,255,0.7)'};
  background: ${p =>
    p.$active ? p.$color : 'transparent'};
  cursor: pointer;
  transition: transform 200ms ease, background 300ms ease;

  &:hover { transform: scale(1.08); }

  ${p =>
    p.$active &&
    p.$color &&
    css`
      animation: ${pulse(p.$color)} 1.6s infinite;
    `}
`

const SECTIONS = Object.keys(themeConfig.sectionColors)

export default function RightNav() {
  const [active, setActive] = useState<string>(SECTIONS[0])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute('id') || ''
          setActive(id)

          const color = themeConfig.sectionColors[id as keyof typeof themeConfig.sectionColors] || 'transparent'
          document.documentElement.style.setProperty('--section-accent', color)
        }
      })
    }, { threshold: 0.6 })

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container aria-hidden>
      {SECTIONS.map(s => (
        <Dot
          key={s}
          onClick={() => handleClick(s)}
          $active={active === s}
          $color={themeConfig.sectionColors[s as keyof typeof themeConfig.sectionColors]}
          aria-label={s}
          aria-pressed={active === s}
        />
      ))}
    </Container>
  )
}
