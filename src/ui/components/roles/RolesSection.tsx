"use client";

import { useState } from "react";
import styled from "styled-components";
import Section from "../layout/Section";
import { GenericContainer } from "../layout/GenericContainer";
import RoleCard from "./atoms/RoleCard";
import RoleModal from "./atoms/RoleModal";
import RoleAccordionItem from "./atoms/RoleAccordionItem";
import {
  tracksContent_tracks,
  projectsContent_projectList,
} from "@/config/content";
import { FadeBox } from "@/ui/styles/keyframes";
import { useInView } from "@/hooks/useInView";
import { themeConfig } from "@/config/theme";
import { raleway } from "@/ui/styles/fonts";

export default function TracksSection({ id }: { id: string }) {
  const { ref, inView } = useInView(0.3);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const tracks = tracksContent_tracks.tracks;
  const projects = projectsContent_projectList.projects;
  const openTrack = tracks.find((t) => t.slug === openSlug) ?? null;

  return (
    <Section id={id}>
      <Inner className="content-surface">
        <Heading
          $inView={inView}
          $direction="up"
          $duration={themeConfig.animation.general_duration}
          $delay={0}
          ref={ref}
        >
          {tracksContent_tracks.sectionHeading}
        </Heading>

        <DesktopGrid>
          {tracks.map((track, i) => (
            <FadeBox
              key={track.slug}
              $inView={inView}
              $direction="up"
              $duration={themeConfig.animation.general_duration}
              $delay={0.2 + i * 0.15}
            >
              <RoleCard track={track} onOpen={() => setOpenSlug(track.slug)} />
            </FadeBox>
          ))}
        </DesktopGrid>

        <MobileAccordion>
          {tracks.map((track) => (
            <RoleAccordionItem
              key={track.slug}
              track={track}
              projects={projects}
              isOpen={expandedSlug === track.slug}
              onToggle={() =>
                setExpandedSlug((prev) =>
                  prev === track.slug ? null : track.slug,
                )
              }
            />
          ))}
        </MobileAccordion>
      </Inner>

      {openTrack && (
        <RoleModal
          track={openTrack}
          projects={projects}
          onClose={() => setOpenSlug(null)}
        />
      )}
    </Section>
  );
}

const Inner = styled(GenericContainer)`
  max-width: 1400px;
  margin: auto;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 900px) {
    padding: 1.2rem 0;
    display: flex;
    flex-direction: column;
  }
`;

const Heading = styled(FadeBox)`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text);
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.4rem;
    padding: 0 1.2rem;
  }
`;

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileAccordion = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 1.2rem;
  }
`;
