"use client";

import styled from "styled-components";
import { montserrat, raleway } from "@/ui/styles/fonts";

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
      <Title>{track.title}</Title>
      <List>
        {track.competencies.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </List>
      <Cta>Ver detalle →</Cta>
    </Card>
  );
}

const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.6rem 1.5rem;
  border-radius: 16px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  box-shadow: 0 4px 16px ${({ theme }) => theme.shadowCard};
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  outline-offset: 4px;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    box-shadow: 0 10px 28px ${({ theme }) => theme.projectCard.hoverShadow};
  }
`;

const Title = styled.h3`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.muted};

  li {
    position: relative;
    padding-left: 1rem;
  }

  li::before {
    content: "–";
    position: absolute;
    left: 0;
    opacity: 0.6;
  }
`;

const Cta = styled.span`
  margin-top: auto;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.projectCard.link};
`;
