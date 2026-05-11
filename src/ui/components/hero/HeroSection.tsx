"use client";
import styled from "styled-components";
import { FadeBox } from "@/ui/styles/keyframes";
import { useInView } from "@/hooks/useInView";
import { themeConfig } from "@/config/theme";
import { heroContent_hero } from "@/config/content";
import { raleway, montserrat, ephesis } from "@/ui/styles/fonts";
import Section from "../layout/Section";
import { GenericContainer } from "../layout/GenericContainer";

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem;

  max-width: 1000px;
  gap: 1rem;
`;

const HeroBox = styled(GenericContainer)<{
  $portion: number;
  $isColumn?: boolean;
}>`
  flex-direction: ${({ $isColumn = false }) => ($isColumn ? "column" : "row")};
  align-items: ${({ $isColumn = false }) =>
    $isColumn
      ? "flex-start"
      : "stretch"}; /* stretch para que hijos llenen la altura */
  flex: ${({ $portion }) => $portion};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Badge = styled(FadeBox)`
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};
  width: fit-content;
`;

const Title = styled(FadeBox)`
  font-size: 4.1rem;
  font-family: ${ephesis.style.fontFamily}, serif;
  font-weight: 700;
  flex-wrap: wrap;
  line-height: 1;
  color: var(--text);

  @media (max-width: 900px) {
    font-size: 3rem;
    width: 100%;
    text-align: center;
  }
`;

const Role = styled(FadeBox)`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: 0.7rem;
  word-spacing: 0.25rem;
  color: var(--text);

  @media (max-width: 900px) {
    font-size: 1.2rem;
    letter-spacing: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;

const Desc = styled(FadeBox)`
  margin-top: 1rem;
  color: var(--text);
  font-size: 1.2rem;
  font-family: ${montserrat.style.fontFamily}, sans-serif;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }
`;

const HeroImage = styled(FadeBox)`
  flex: 1; /* ocupa el espacio disponible */
  margin: 0 3rem;
  border-radius: 12px;
  overflow: hidden; /* para que el border-radius funcione con background-image o <Image> */
  box-shadow: 0 4px 12px ${({ theme }) => theme.shadowColor};
  background-image: url(${heroContent_hero.heroImage});
  background-size: cover;
  background-position: center;
  z-index: 1000;
  width: 100%;
  height: ${({ theme }) =>
    theme.heroImage.height}; /* asegura que no colapse a 0px */
`;

export default function HeroSection({ id }: { id: string }) {
  const { ref, inView } = useInView(0.3);
  return (
    <Section id={id}>
      <Inner className="content-surface">
        {/* <Badge
          $inView={inView}
          $direction="down"
          $duration={themeConfig.animation.general_duration + 1}
          $delay={1}
          ref={ref}
        >
          {heroContent_hero.badge}
        </Badge> */}

        <HeroBox $portion={2}>
          <HeroBox $portion={1} $isColumn={true} style={{ gap: "0.5rem" }}>
            <Title
              $inView={inView}
              $direction="fade"
              $duration={themeConfig.animation.general_duration + 1}
              $delay={0}
              ref={ref}
            >
              {heroContent_hero.Title}
            </Title>
            <Role
              $inView={inView}
              $direction="fade"
              $duration={themeConfig.animation.general_duration + 1}
              $delay={0.5}
              ref={ref}
            >
              {heroContent_hero.role}
            </Role>
          </HeroBox>

          <HeroBox $portion={1} $isColumn={false}>
            <HeroImage
              $inView={inView}
              $direction="left"
              $duration={themeConfig.animation.general_duration + 1}
              $delay={0}
              ref={ref}
            />
          </HeroBox>
        </HeroBox>

        <HeroBox $portion={1} $isColumn={true}>
          <Desc
            $inView={inView}
            $direction="up"
            $duration={themeConfig.animation.general_duration + 1}
            $delay={1}
            ref={ref}
            style={{ width: "100%", fontStyle: "italic", textAlign: "center" }}
          >
            {heroContent_hero.DescOne}
          </Desc>
          <Desc
            $inView={inView}
            $direction="up"
            $duration={themeConfig.animation.general_duration + 1}
            $delay={1.5}
            ref={ref}
          >
            {heroContent_hero.DescTwo}
          </Desc>
          <Desc
            $inView={inView}
            $direction="up"
            $duration={themeConfig.animation.general_duration + 1}
            $delay={2}
            ref={ref}
          >
            {heroContent_hero.DescThree}
          </Desc>
        </HeroBox>
      </Inner>
    </Section>
  );
}
