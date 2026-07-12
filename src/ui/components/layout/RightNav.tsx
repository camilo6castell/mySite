'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styled, { css } from 'styled-components'
import { pulse } from '@/ui/styles/keyframes'
import { themeConfig } from '@/config/theme'

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

const Dot = styled.button<{ $active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 999px;

  border: 2px solid ${({ theme }) => theme.rightNavDotsColor};
  background: ${({ $active, theme }) =>
    $active ? theme.rightNavDotsColor : 'transparent'};

  cursor: pointer;

  transition: 
    transform 200ms ease,
    background 300ms ease,
    border-color 300ms ease;

  &:hover {
    transform: scale(1.08);
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      animation: ${pulse(theme.rightNavDotsColor)} 1.6s infinite;
    `}
`

const SECTIONS = Object.keys(themeConfig.sectionColors)

export default function RightNav() {
  const pathname = usePathname()
  const isScrollRoute = pathname === '/'
  const [active, setActive] = useState<string>(SECTIONS[0])

  useEffect(() => {
    if (!isScrollRoute) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute('id') || ''
            setActive(id)

            // opcional: mantener accent global
            const color =
              themeConfig.sectionColors[
                id as keyof typeof themeConfig.sectionColors
              ] || 'transparent'

            document.documentElement.style.setProperty(
              '--section-accent',
              color
            )
          }
        })
      },
      { threshold: 0.6 }
    )

    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isScrollRoute])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // The dots represent scroll-snap sections of the single-page flow ('/').
  // On other routes (like /cv, a separate full view) they'd show stale
  // state from whatever section was active before navigating away, which
  // reads as "I'm still on Home" — so we just don't render them there.
  if (!isScrollRoute) return null

  return (
    <Container aria-hidden>
      {SECTIONS.map(s => (
        <Dot
          key={s}
          onClick={() => handleClick(s)}
          $active={active === s}
          aria-label={s}
          aria-pressed={active === s}
        />
      ))}
    </Container>
  )
}