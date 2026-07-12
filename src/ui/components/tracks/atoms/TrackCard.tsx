"use client";

import styled from "styled-components";
import { montserrat, raleway } from "@/ui/styles/fonts";
import { FaArrowRight } from "react-icons/fa";

type Track = {
  slug: string;
  title: string;
  competencies: string[];
  pitch: string;
  relatedProjectTitles: string[];
};

export default function TrackCard({
  track,
  onOpen,
}: {
  track: Track;
  onOpen: () => void;
}) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen();
      }}
      aria-label={`Ver detalle de ${track.title}`}
    >
      <Accent />
      <Title>{track.title}</Title>

      <Chips>
        {track.competencies.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </Chips>

      <Cta>
        Ver detalle <FaArrowRight />
      </Cta>
    </Card>
  );
}

const Card = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 1.8rem 1.6rem 1.5rem;
  border-radius: 18px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 4px 16px ${({ theme }) => theme.shadowCard};
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  outline-offset: 4px;

  &:hover,
  &:focus-visible {
    transform: translateY(-5px);
    box-shadow: 0 14px 32px ${({ theme }) => theme.projectCard.hoverShadow};
    border-color: ${({ theme }) => theme.projectCard.link};
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(3px);
  }
`;

const Accent = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.projectCard.link},
    ${({ theme }) => theme.badge.text}
  );
  opacity: 0.85;
`;

const Title = styled.h3`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.span`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};
  white-space: nowrap;
`;

const Cta = styled.span`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.projectCard.link};

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }
`;
