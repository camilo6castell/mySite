"use client";

import styled, { css } from "styled-components";
import { montserrat, raleway } from "@/ui/styles/fonts";
import { FaArrowRight } from "react-icons/fa";

type Track = {
  slug: string;
  title: string;
  competencies: string[];
  pitch: string;
  relatedProjectTitles: string[];
};

const MAX_VISIBLE_CHIPS = 4;

export default function RoleCard({
  track,
  onOpen,
}: {
  track: Track;
  onOpen: () => void;
}) {
  const visibleCompetencies = track.competencies.slice(0, MAX_VISIBLE_CHIPS);
  const extraCount = track.competencies.length - visibleCompetencies.length;
  const relatedCount = track.relatedProjectTitles.length;

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen();
      }}
      aria-label={`See details of ${track.title}`}
    >
      <Accent />

      <Header>
        <Title>{track.title}</Title>
        {track.pitch && <Pitch>{track.pitch}</Pitch>}
      </Header>

      <Chips>
        {visibleCompetencies.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
        {extraCount > 0 && <Chip $muted>+{extraCount}</Chip>}
      </Chips>

      <Footer>
        {relatedCount > 0 && (
          <Meta>
            {relatedCount} related project{relatedCount > 1 ? "s" : ""}
          </Meta>
        )}
        <Cta>
          See details <FaArrowRight />
        </Cta>
      </Footer>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  position: relative;
  cursor: pointer;
  gap: 1.2rem;
  padding: 1.9rem 1.6rem 1.5rem;
  border-radius: 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  box-shadow: 0 4px 16px var(--shadow-card);
  overflow: hidden;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  outline-offset: 4px;

  &:hover,
  &:focus-visible {
    transform: translateY(-5px);
    box-shadow: 0 14px 32px var(--project-card-hover-shadow);
    border-color: var(--badge-suggestion-bg);
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
    var(--badge-suggestion-bg),
    var(--badge-suggestion-text)
  );
  opacity: 0.85;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Title = styled.h3`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  text-shadow: 0 2px 12px var(--shadow-color);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const Pitch = styled.p`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  text-shadow: 0 2px 12px var(--shadow-color);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text);
  opacity: 0.72;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Chip = styled.span<{ $muted?: boolean }>`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  text-shadow: 0 2px 12px var(--shadow-color);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.5px;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  white-space: nowrap;
  background: var(--badge-bullets-bg);
  color: var(--badge-bullets-text);
  border: var(--badge-bullets-border);

  ${({ $muted }) =>
    $muted &&
    css`
      opacity: 0.65;
    `}
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderCard};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`;

const Meta = styled.span`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  text-shadow: 0 2px 12px var(--shadow-color);
  font-size: 0.78rem;
  color: var(--text);
  opacity: 0.6;
  white-space: nowrap;
`;

const Cta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  text-shadow: 0 2px 12px var(--shadow-color);
  font-size: 0.85rem;
  font-weight: 700;
  color: ${({ theme }) => theme.projectCard.link};
  white-space: nowrap;

  svg {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
  }
`;
