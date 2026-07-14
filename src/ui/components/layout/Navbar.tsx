"use client";
import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaHome, FaLayerGroup, FaFileAlt } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useThemeContext } from "@/lib/providers";
import { navbarContent_navbar } from "../../../config/content";
import { useInView } from "@/hooks/useInView";
import { FadeBox } from "@/ui/styles/keyframes";
import { themeConfig } from "@/config/theme";

const Bar = styled(FadeBox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: transparent;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 900px) {
    gap: 1.4rem;
  }
  @media (max-width: 560px) {
    gap: 1.1rem;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const Divider = styled.span`
  width: 1px;
  height: 1.4rem;
  background: var(--muted);
  opacity: 0.5;

  @media (max-width: 560px) {
    height: 1.1rem;
  }
`;

const NavLabel = styled.span`
  color: var(--text);
  @media (max-width: 560px) {
    display: none;
  }
`;

const IconContainer = styled.a`
  display: flex;
  position: relative;
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const Layer = styled.div<{ $isDarkLayer: boolean; $isDark: boolean }>`
  position: absolute;
  flex: 1;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: ${(p) => (p.$isDarkLayer ? 1 : 0)};
  opacity: ${(p) => (p.$isDarkLayer ? (p.$isDark ? 1 : 0) : p.$isDark ? 0 : 1)};
  overflow: hidden;

  svg {
    fill: var(--text);
    width: 100%;
    height: 100%;
  }
`;

const Social = styled(Link)<{ $active?: boolean }>`
  color: var(--text);
  font-weight: 700;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  opacity: ${({ $active }) => ($active ? 1 : 0.7)};

  svg {
    fill: var(--text);
  }

  &:hover {
    opacity: 1;
  }
`;

const CVSocial = styled(Social)`
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border-card);
  background: var(--bg-card);
`;

const Toggle = styled.button`
  color: var(--text);
  font-size: 2rem;
  padding: 6px 10px;
  background: transparent;
  cursor: pointer;
`;

type IconTransitionProps = {
  day: React.ReactNode;
  night: React.ReactNode;
  isDark: boolean;
  ariaLabel?: string;
  href?: string;
  iconSize?: string;
};

/* Memo para evitar renders innecesarios */
const IconTransition = memo(function IconTransition({
  day,
  night,
  isDark,
  ariaLabel,
  href = "#",
  iconSize,
}: IconTransitionProps) {
  return (
    <IconContainer
      aria-label={ariaLabel}
      href={href}
      style={iconSize ? { width: iconSize, height: iconSize } : {}}
    >
      <Layer $isDarkLayer={true} $isDark={isDark}>
        {day}
      </Layer>
      <Layer $isDarkLayer={false} $isDark={isDark}>
        {night}
      </Layer>
    </IconContainer>
  );
});

export default function Navbar() {
  const { ref, inView } = useInView(0.3);
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";
  const pathname = usePathname();

  const [isCv, setIsCv] = useState(pathname === "/cv");

  useEffect(() => {
    setIsCv(pathname === "/cv");
  }, [pathname]);

  return (
    <Bar
      $inView={inView}
      $direction="down"
      $duration={themeConfig.animation.general_duration}
      $delay={0.5}
      ref={ref}
      role="navigation"
      aria-label="Main navigation"
      style={isCv ? { display: "none" } : {}}
    >
      <Left>
        <IconTransition
          ariaLabel="Ir al inicio"
          isDark={isDark}
          day={
            <Image
              src={navbarContent_navbar.logo_day}
              sizes="16px"
              alt="logo day"
              fill
              style={{ objectFit: "cover" }}
            />
          }
          night={
            <Image
              src={navbarContent_navbar.logo_night}
              sizes="16px"
              alt="logo night"
              fill
              style={{ objectFit: "cover" }}
            />
          }
          href="/"
          iconSize={"2.1rem"}
        />
      </Left>

      <Center>
        <Social href="#home" rel="noreferrer" $active aria-label="Home">
          <FaHome /> <NavLabel>Home</NavLabel>
        </Social>
        <Social href="#tracks" rel="noreferrer" $active aria-label="Roles">
          <FaLayerGroup /> <NavLabel>Roles</NavLabel>
        </Social>
        <Social href="#contact" rel="noreferrer" $active aria-label="Contact">
          <IoMdContact /> <NavLabel>Contact</NavLabel>
        </Social>

        <Divider />

        <CVSocial href="/cv" rel="noreferrer" $active={isCv} aria-label="CV">
          <FaFileAlt /> <NavLabel>CV</NavLabel>
        </CVSocial>
      </Center>

      <Right>
        <Toggle onClick={toggleTheme} aria-label="Toggle dark mode">
          <IconTransition
            isDark={isDark}
            ariaLabel="Cambiar tema"
            day={<BsFillSunFill />}
            night={<BsMoonStarsFill />}
          />
        </Toggle>
      </Right>
    </Bar>
  );
}
