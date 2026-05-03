'use client'
import styled from 'styled-components'
import { waves } from '@/ui/styles/keyframes'
import { themeConfig } from '@/config/theme'

const Wrap = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  width: 100dvw;
  height: 100dvh;
  transition: width 0s ease;

    .background-video {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    filter: ${({ theme }) => theme.bgVideoFilter};
    will-change: transform;

    }
`

export default function BackgroundWaves() {
  return (
    <Wrap aria-hidden>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="background-video"
      >
        <source src="/backgrounds/mysite_background.webm" type="video/webm" />
        Tu navegador no soporta videos integrados.
      </video>
    </Wrap>
  )
}
