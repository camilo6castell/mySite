'use client'
import styled from 'styled-components'
import { waves } from '@/styles/keyframes'
import { themeConfig } from '@/app/config/theme'

const Wrap = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`

const Wave = styled.div`
  position: absolute;
  transform-origin: center;
  mix-blend-mode: screen;
  &.a { 
    animation: ${waves.floatA} ${themeConfig.animation.waves_duration.a}s ease-in-out infinite;
    top: var(--wave-top-a);
    left: var(--wave-left-a);
    width: var(--wave-width-a);
    height: var(--wave-height-a);
    background: radial-gradient(circle at 20% 20%, var(--wave-color-a), transparent 25%),
                radial-gradient(circle at 80% 80%, var(--wave-color-b), transparent 25%);
    filter: blur(var(--wave-blur-a));
    opacity: var(--wave-opacity-a);
  }
  &.b { 
    animation: ${waves.floatB} ${themeConfig.animation.waves_duration.b}s ease-in-out infinite;
    top: var(--wave-top-b);
    left: var(--wave-left-b);
    width: var(--wave-width-b);
    height: var(--wave-height-b);
    background: radial-gradient(circle at 20% 20%, var(--wave-color-a), transparent 25%),
                radial-gradient(circle at 80% 80%, var(--wave-color-b), transparent 25%);
    filter: blur(var(--wave-blur-b));
    opacity: var(--wave-opacity-b);
    }
`

const ColorOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  transition: background-color 600ms ease, opacity 600ms ease;
  background-color: var(--section-accent, transparent);
  opacity: 0.14;
  mix-blend-mode: screen;
`

export default function BackgroundWaves() {
  return (
    <Wrap aria-hidden>
      <Wave className="a" />
      <Wave className="b" />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <ColorOverlay />
    </Wrap>
  )
}
