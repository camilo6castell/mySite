"use client";

import styled from "styled-components";
import { contactContent_contact, heroContent_hero } from "@/config/content";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FadeBox } from "@/ui/styles/keyframes";
import { useInView } from "@/hooks/useInView";
import { themeConfig } from "@/config/theme";
import Section from "../layout/Section";

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

const ContactSection = ({ id }: { id: string }) => {
  const { ref, inView } = useInView(0.3);

  return (
    <Section id={id}>
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

            <Divider />

            <Info>
              <Name>{contactContent_contact.name}</Name>

              <Role>{contactContent_contact.role}</Role>

              <Location>{contactContent_contact.location}</Location>

              <Bio>
                Backend and automation engineer driven by a simple purpose:
                eliminate friction through solid backend engineering,
                intelligent automation, and large language models.
              </Bio>

              <ButtonRow>
                <ContactButton href={`mailto:${contactContent_contact.email}`}>
                  <FaEnvelope /> Email me
                </ContactButton>
                {contactContent_contact.socials.map((s) => (
                  <ContactButton
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ICONS[s.label]} {s.label}
                  </ContactButton>
                ))}
              </ButtonRow>
            </Info>
          </Top>
        </Card>
      </Wrapper>
    </Section>
  );
};

export default ContactSection;

/* ============================
   STYLES
============================ */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  color: var(--text);
  margin-bottom: 2rem;
  font-size: clamp(1rem, 3vw, 2.5rem);
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
  border: 1px solid ${({ theme }) => theme.borderCard};
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
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  color: var(--muted);
  font-size: 0.8rem;
  font-weight: 600;
`;

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--badge-available-text);
  box-shadow: 0 0 12px var(--badge-available-text);
`;

const Divider = styled.div`
  width: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.borderCard};

  @media (max-width: 900px) {
    width: 100%;
    height: 1px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Name = styled.h3`
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 5vw, 3rem);
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

const ButtonRow = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-top: 1.8rem;
  flex-wrap: wrap;
`;

const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  color: var(--text);
  font-weight: 600;
  font-size: 0.92rem;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.projectCard.link};
    background: ${({ theme }) => theme.bg};
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 0.35rem);
    justify-content: center;
  }
`;
