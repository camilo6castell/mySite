// @ts-nocheck
'use client'
import { useState } from 'react'
import { contactContent_contact } from '@/app/config/content'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import SocialButton from '../components/contact/SocialButton'
import { FadeBox } from '@/styles/keyframes'
import { useInView } from '@/hooks/useInView'
import { themeConfig } from '@/app/config/theme'
import styled from 'styled-components'

/* ============================
   Estilos de ContactSection
   ============================ */

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  margin-top: 3rem;
`

export const Card = styled(FadeBox)`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 0 5px ${({ theme }) => theme.shadowCard};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Avatar = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0px 12px ${({ theme }) => theme.shadowCard};
  border: 1px solid rgba(255,255,255,0.04);
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const Name = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`

export const Meta = styled.p`
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.85;
`

export const Title = styled.h2`
  color: var(--text);
  margin: 0 0 1.5rem;
  text-align: left;
`

export const SubTitle = styled.h4`
  margin: 3rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 700;
  text-align: center;
  color: var(--text);
`

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
  flex-wrap: wrap;
`

export const SocialCard = styled.a`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  margin: 2rem 1rem;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 12px;
  background: ${({ theme }) => theme.projectCard.bg};
  border: 1px solid rgba(255,255,255,0.03);
  transition: border .5s ease;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.098);
  }
`

export const SocialLabel = styled.div`
  color: var(--text);
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-weight: 600;
  font-size: 1.2rem;
`

export const SocialSub = styled.span`
  color: var(--muted);
  font-size: 1rem;
  opacity: 0.7;
  font-weight: 500;
`


const ICONS: Record<string, JSX.Element> = {
  Github: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  WhatsApp: <FaWhatsapp />,
}

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView(0.3)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="content-surface" style={{ maxWidth: 1300, margin: '0 auto' }}>
      <FadeBox
        $inView={inView}
        $direction="right"
        $duration={themeConfig.animation.general_duration + 1}
        $delay={0}
        ref={ref}
      >
        <Title id="contact-heading">Contact</Title>
      </FadeBox>

      <Wrapper aria-labelledby="contact-heading">
        <Card
          $inView={inView}
          $direction="down"
          $duration={themeConfig.animation.general_duration + 1}
          $delay={0}
          ref={ref}
        >
          <Avatar src={contactContent_contact.avatar} alt={`${contactContent_contact.name} avatar`} />
          <Info>
            <Name>{contactContent_contact.name}</Name>
            <Meta>{contactContent_contact.role}</Meta>
            <Meta style={{ margin: '.5rem 0', fontSize: '1rem' }}>{contactContent_contact.location}</Meta>
          </Info>
        </Card>

        <FadeBox
          $inView={inView}
          $direction="right"
          $duration={themeConfig.animation.general_duration}
          $delay={themeConfig.animation.general_duration + 0.5}
          ref={ref}
        >
          <SubTitle>Find me on</SubTitle>
        </FadeBox>

        <Grid>
          {contactContent_contact.socials.map((s, index) => (
            <FadeBox
              key={s.label}
              $inView={inView}
              $direction="up"
              $duration={themeConfig.animation.general_duration}
              $delay={themeConfig.animation.general_duration + 1 + (index * 0.1)}
              ref={ref}
            >
              <SocialCard
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir ${s.label}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <SocialButton data={s} isSocialHovered={hoveredIndex === index}>
                  {ICONS[s.label]}
                </SocialButton>
                <div>
                  <SocialLabel>{s.label}</SocialLabel>
                  <SocialSub>{new URL(s.href).hostname.replace('www.', '')}</SocialSub>
                </div>
              </SocialCard>
            </FadeBox>
          ))}
        </Grid>
      </Wrapper>
    </div>
  )
}

export default ContactSection


