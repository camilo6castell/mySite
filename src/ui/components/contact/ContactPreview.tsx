"use client";

import { useState } from "react";
import styled from "styled-components";

import { contactContent_contact } from "@/config/content";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { FadeBox } from "@/ui/styles/keyframes";
import { useInView } from "@/hooks/useInView";
import { themeConfig } from "@/config/theme";

import SocialButton from "./atoms/SocialButton";
import { ContactSocial } from "@/types/content";

/* ============================
   ICONS
============================ */

const ICONS: Record<string, React.ReactNode> = {
  Github: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  WhatsApp: <FaWhatsapp />,
};

/* ============================
   COMPONENT
============================ */

const ContactSection: React.FC = () => {
  const { ref, inView } = useInView(0.3);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container id="contact">
      <FadeBox
        $inView={inView}
        $direction="right"
        $duration={themeConfig.animation.general_duration}
        $delay={0}
        ref={ref}
      >
        <Title>Let&apos;s connect</Title>
      </FadeBox>

      <Wrapper aria-labelledby="contact-heading">
        <Card
          $inView={inView}
          $direction="up"
          $duration={themeConfig.animation.general_duration + 0.3}
          $delay={0.2}
          ref={ref}
        >
          <Top>
            <LeftColumn>
              <Avatar
                src={contactContent_contact.avatar}
                alt={`${contactContent_contact.name} avatar`}
              />

              <MiniStatus>
                <StatusDot />
                Open to opportunities
              </MiniStatus>
            </LeftColumn>

            <Info>
              <Name>{contactContent_contact.name}</Name>

              <Role>{contactContent_contact.role}</Role>

              <Location>{contactContent_contact.location}</Location>

              <Bio>
                Backend and full-stack software engineer focused on scalable
                systems, secure architectures, modern web applications, and
                AI-powered solutions. Passionate about building performant,
                production-ready software with strong attention to developer
                experience and system design.
              </Bio>

              <CTAGroup>
                <PrimaryCTA href={`mailto:${contactContent_contact.email}`}>
                  Email me
                </PrimaryCTA>

                <SecondaryCTA
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </SecondaryCTA>
              </CTAGroup>
            </Info>
          </Top>
        </Card>

        <SocialsWrapper>
          <FadeBox
            $inView={inView}
            $direction="up"
            $duration={themeConfig.animation.general_duration}
            $delay={0.6}
            ref={ref}
          >
            <SubTitle>Find me online</SubTitle>
          </FadeBox>

          <Grid>
            {contactContent_contact.socials.map((s, index) => (
              <FadeBox
                key={s.label}
                $inView={inView}
                $direction="up"
                $duration={themeConfig.animation.general_duration}
                $delay={0.8 + index * 0.1}
                ref={ref}
              >
                <SocialCard
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${s.label}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <SocialIconWrapper>
                    <SocialButton
                      data={s as ContactSocial}
                      isSocialHovered={hoveredIndex === index}
                    >
                      {ICONS[s.label]}
                    </SocialButton>
                  </SocialIconWrapper>

                  <SocialInfo>
                    <SocialLabel>{s.label}</SocialLabel>

                    <SocialSub>
                      {new URL(s.href).hostname.replace("www.", "")}
                    </SocialSub>
                  </SocialInfo>
                </SocialCard>
              </FadeBox>
            ))}
          </Grid>
        </SocialsWrapper>
      </Wrapper>
    </Container>
  );
};

export default ContactSection;

/* ============================
   STYLES
============================ */

const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 8rem 2rem;

  @media (max-width: 900px) {
    padding: 6rem 1.2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 2rem;
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

const Card = styled(FadeBox)`
  position: relative;
  isolation: isolate;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 10px 40px ${({ theme }) => theme.shadowCard};
  border-radius: 32px;
  padding: 3.5rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.05),
      transparent 40%
    );

    z-index: -1;
  }

  @media (max-width: 900px) {
    padding: 2rem;
    border-radius: 24px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  flex-shrink: 0;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 40px ${({ theme }) => theme.shadowCard};

  @media (max-width: 900px) {
    width: 160px;
    height: 160px;
  }
`;

const MiniStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
  font-size: 0.85rem;
  font-weight: 600;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 12px #4ade80;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;

const Name = styled.h3`
  margin: 0;

  font-size: clamp(2.5rem, 5vw, 4rem);

  line-height: 0.92;

  font-weight: 800;

  letter-spacing: -0.06em;

  max-width: 700px;
`;

const Role = styled.p`
  margin-top: 1rem;
  color: var(--text);
  font-size: 1.15rem;
  opacity: 0.92;
  font-weight: 500;
`;

const Location = styled.p`
  margin-top: 0.45rem;
  color: var(--muted);
  opacity: 0.72;
  font-size: 0.92rem;
`;

const Bio = styled.p`
  margin-top: 2rem;
  color: var(--muted);
  line-height: 1.9;
  max-width: 580px;
  font-size: 1rem;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.4rem;
  flex-wrap: wrap;
`;

const PrimaryCTA = styled.a`
  display: inline-flex;

  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  background: var(--text);
  color: var(--bg);
  font-weight: 700;

  transition:
    transform 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);

  transition:
    border 0.25s ease,
    transform 0.25s ease,
    background 0.25s ease;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.22);
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-2px);
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SubTitle = styled.h4`
  margin: 0;
  color: var(--text);
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid rgba(255, 255, 255, 0.05);

  transition:
    transform 0.25s ease,
    border 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SocialIconWrapper = styled.div`
  flex-shrink: 0;
`;

const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialLabel = styled.span`
  color: var(--text);
  font-weight: 700;
  font-size: 1rem;
`;

const SocialSub = styled.span`
  color: var(--muted);
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;
