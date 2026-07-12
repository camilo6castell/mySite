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
import { heroContent_hero } from "@/config/content";

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
              {heroContent_hero.badge && (
                <MiniStatus>
                  <StatusDot />
                  {heroContent_hero.badge}
                </MiniStatus>
              )}
            </LeftColumn>

            <Info>
              <Name>{contactContent_contact.name}</Name>

              <Role>{contactContent_contact.role}</Role>

              <Location>{contactContent_contact.location}</Location>

              <Bio>
                Backend and full-stack software engineer focused on scalable
                systems, secure architectures, modern web applications, and
                AI-powered solutions.
              </Bio>

              <CTAGroup>
                <PrimaryCTA href={`mailto:${contactContent_contact.email}`}>
                  Email me
                </PrimaryCTA>

                <SecondaryCTA href="/cv">View CV</SecondaryCTA>
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
  width: fit-content;
  max-width: 1300px;
  margin: 0 auto;
  padding: 7rem 1.5rem 5rem;

  @media (max-width: 900px) {
    padding: 5rem 1rem 4rem;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 4rem 0.9rem 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 1.5rem;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.05em;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const Card = styled(FadeBox)`
  position: relative;
  isolation: isolate;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 10px 40px ${({ theme }) => theme.shadowCard};
  border-radius: 28px;
  padding: 2.5rem;
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
    padding: 1.6rem;
    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Avatar = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 40px ${({ theme }) => theme.shadowCard};

  @media (max-width: 900px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const MiniStatus = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--muted);
  font-size: 0.8rem;
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
  min-width: 0;
`;

const Name = styled.h3`
  margin: 0;
  font-size: clamp(2rem, 7vw, 4rem);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.06em;
  max-width: 700px;
  word-break: break-word;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Role = styled.p`
  margin-top: 0.8rem;
  color: ${({ theme }) => theme.text};
  font-size: 1.05rem;
  opacity: 0.92;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Location = styled.p`
  margin-top: 0.35rem;
  color: ${({ theme }) => theme.muted};
  opacity: 0.72;
  font-size: 0.88rem;
  line-height: 1.5;
`;

const Bio = styled.p`
  margin-top: 1.4rem;
  color: ${({ theme }) => theme.muted};
  line-height: 1.75;
  max-width: 580px;
  font-size: 0.96rem;

  @media (max-width: 480px) {
    font-size: 0.92rem;
    line-height: 1.65;
  }
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1.8rem;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PrimaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.3rem;
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

  @media (max-width: 480px) {
    flex: 1;
  }
`;

const SecondaryCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.3rem;
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

  @media (max-width: 480px) {
    flex: 1;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubTitle = styled.h4`
  margin: 0;
  color: var(--text);
  font-size: 0.95rem;
  opacity: 0.9;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 18px;
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
  min-width: 0;
`;

const SocialLabel = styled.span`
  color: var(--text);
  font-weight: 700;
  font-size: 0.98rem;
`;

const SocialSub = styled.span`
  color: var(--muted);
  font-size: 0.84rem;
  margin-top: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
