'use client'
import styled from 'styled-components'

const Wrap = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  padding: 2rem;
  box-sizing: border-box;
`

export default function Section({ children, id }: { children: React.ReactNode, id?: string }) {
    return (
        <Wrap id={id}>
            {children}
        </Wrap>
    )
}
