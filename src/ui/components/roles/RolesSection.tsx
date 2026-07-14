"use client";

import { useState } from "react";
import styled from "styled-components";
import Section from "../layout/Section";
import { GenericContainer } from "../layout/GenericContainer";
import TrackCard from "./atoms/RoleCard";
import TrackModal from "./atoms/RoleModal";
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

        <Grid>
          {tracks.map((track, i) => (
            <FadeBox
              key={track.slug}
              $inView={inView}
              $direction="up"
              $duration={themeConfig.animation.general_duration}
              $delay={0.2 + i * 0.15}
            >
              <TrackCard track={track} onOpen={() => setOpenSlug(track.slug)} />
            </FadeBox>
          ))}
        </Grid>
      </Inner>

      {openTrack && (
        <TrackModal
          track={openTrack}
          projects={projects}
          onClose={() => setOpenSlug(null)}
        />
      )}
    </Section>
  );
}

const Inner = styled(GenericContainer)`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 900px) {
    padding: 1rem;
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
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
