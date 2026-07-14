"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { ephesis, montserrat, raleway } from "@/ui/styles/fonts";

type Repo = {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

type Project = {
  title: string;
  summary: string;
  repos: Repo[];
};

type Track = {
  slug: string;
  title: string;
  competencies: string[];
  pitch: string;
  relatedProjectTitles: string[];
};

export default function RoleModal({
  track,
  projects,
  onClose,
}: {
  track: Track;
  projects: Project[];
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    // #snap-container (not body) is the real scrollable element, and it has
    // a backdrop-filter which creates a new containing block for fixed-position
    // descendants — that's why this modal must be portaled to <body> AND why
    // we lock scroll on this element specifically, not on body.
    const scrollEl = document.getElementById("snap-container");
    const prevOverflow = scrollEl?.style.overflow;
    if (scrollEl) scrollEl.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      if (scrollEl) scrollEl.style.overflow = prevOverflow ?? "";
    };
  }, [onClose]);

  const relatedProjects = projects.filter((p) =>
    track.relatedProjectTitles.includes(p.title),
  );

  if (!mounted) return null;

  return createPortal(
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={track.title}
    >
      <Panel>
        <CloseButton onClick={onClose} aria-label="Cerrar">
          <FaTimes />
        </CloseButton>

        <Title>{track.title}</Title>

        <Competencies>
          {track.competencies.map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </Competencies>

        <Pitch>{track.pitch}</Pitch>

        <Divider />

        <ProjectsHeading>Related projects</ProjectsHeading>

        <ProjectList>
          {relatedProjects.map((project) => (
            <ProjectBlock key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.summary}</p>

              {project.repos.map((repo) => (
                <RepoRow key={repo.name}>
                  <RepoHead>
                    <span>{repo.name}</span>
                    <RepoLinks>
                      {repo.repo && (
                        <a href={repo.repo} target="_blank" rel="noreferrer">
                          <FaGithub /> Repo
                        </a>
                      )}
                      {repo.demo && (
                        <a href={repo.demo} target="_blank" rel="noreferrer">
                          <FaExternalLinkAlt /> Demo
                        </a>
                      )}
                    </RepoLinks>
                  </RepoHead>
                  <TechTags>
                    {repo.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </TechTags>
                </RepoRow>
              ))}
            </ProjectBlock>
          ))}
        </ProjectList>
      </Panel>
    </Overlay>,
    document.body,
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
`;

const Panel = styled.div`
  position: relative;
  width: 100%;
  max-width: 780px;
  max-height: 90vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.borderCard};
  border-radius: 20px;
  padding: 3rem 2.2rem 2.2rem;
  box-shadow: 0 20px 60px ${({ theme }) => theme.shadowCard};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  border: none;
  font-size: 1.3rem;
  color: var(--text);
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-family: ${raleway.style.fontFamily}, serif;
  font-size: 2.6rem;
  color: var(--text);
  margin: 0 0 0.8rem;
`;

const Competencies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.3rem;
`;

const Chip = styled.span`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: var(--badge-bullets-bg);
  color: var(--badge-bullets-text);
  border: var(--badge-bullets-border);
`;

const Pitch = styled.p`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text);
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.borderCard};
  margin: 1.6rem 0;
`;

const ProjectsHeading = styled.h3`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 1.1rem;
  color: var(--text);
  margin-bottom: 1rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectBlock = styled.div`
  h4 {
    font-family: ${raleway.style.fontFamily}, sans-serif;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.projectCard.title};
    margin: 0 0 0.4rem;
  }

  p {
    font-family: ${montserrat.style.fontFamily}, sans-serif;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.projectCard.summary};
    margin: 0 0 0.8rem;
  }
`;

const RepoRow = styled.div`
  padding: 0.9rem 1rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  margin-bottom: 0.7rem;
`;

const RepoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  color: var(--text);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const RepoLinks = styled.div`
  display: flex;
  gap: 0.9rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.projectCard.link};

    &:hover {
      color: ${({ theme }) => theme.projectCard.linkHover};
    }
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.projectCard.tech};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.borderCard};
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
`;
