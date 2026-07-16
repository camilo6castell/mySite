"use client";

import styled from "styled-components";
import { FaChevronDown, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { montserrat, raleway } from "@/ui/styles/fonts";

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

export default function RoleAccordionItem({
  track,
  projects,
  isOpen,
  onToggle,
}: {
  track: Track;
  projects: Project[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const relatedProjects = projects.filter((p) =>
    track.relatedProjectTitles.includes(p.title),
  );

  return (
    <Item $isOpen={isOpen}>
      <Header
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-panel-${track.slug}`}
      >
        <HeaderText>
          <Title>{track.title}</Title>
          <Competencies>
            {track.competencies.slice(0, 3).map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </Competencies>
        </HeaderText>
        <Chevron $isOpen={isOpen}>
          <FaChevronDown />
        </Chevron>
      </Header>

      <Panel id={`accordion-panel-${track.slug}`} $isOpen={isOpen}>
        <PanelInner>
          <Pitch>{track.pitch}</Pitch>

          {relatedProjects.length > 0 && (
            <>
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
                          <RepoName>{repo.name}</RepoName>
                          <RepoLinks>
                            {repo.repo && (
                              <a
                                href={repo.repo}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub /> Repo
                              </a>
                            )}
                            {repo.demo && (
                              <a
                                href={repo.demo}
                                target="_blank"
                                rel="noreferrer"
                              >
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
            </>
          )}
        </PanelInner>
      </Panel>
    </Item>
  );
}

const Item = styled.div<{ $isOpen: boolean }>`
  border-radius: 16px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid
    ${({ $isOpen, theme }) =>
      $isOpen ? "var(--badge-suggestion-bg)" : theme.borderCard};
  overflow: hidden;
  flex-shrink: 0;
  transition: border-color 0.2s ease;
`;

const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  padding: 1rem 1.1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
`;

const Title = styled.h3`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
`;

const Competencies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Chip = styled.span`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: var(--badge-bullets-bg);
  color: var(--badge-bullets-text);
  border: var(--badge-bullets-border);
  white-space: nowrap;
`;

const Chevron = styled.span<{ $isOpen: boolean }>`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--text);
  opacity: 0.6;
  transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
  transition: transform 0.25s ease;
`;

/* Truco de animación sin JS: 0fr -> 1fr anima "auto height" de forma nativa */
const Panel = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${({ $isOpen }) => ($isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;
`;

const PanelInner = styled.div`
  overflow: hidden;
  padding: 0 1.1rem;
`;

const Pitch = styled.p`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--text);
  opacity: 0.8;
  margin: 0 0 1rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.borderCard};
  margin: 0 0 1rem;
`;

const ProjectsHeading = styled.h4`
  font-family: ${raleway.style.fontFamily}, sans-serif;
  font-size: 0.85rem;
  color: var(--text);
  opacity: 0.7;
  margin: 0 0 0.8rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding-bottom: 1.2rem;
`;

const ProjectBlock = styled.div`
  h4 {
    font-family: ${raleway.style.fontFamily}, sans-serif;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.projectCard.title};
    margin: 0 0 0.3rem;
  }

  p {
    font-family: ${montserrat.style.fontFamily}, sans-serif;
    font-size: 0.82rem;
    color: ${({ theme }) => theme.projectCard.summary};
    margin: 0 0 0.6rem;
  }
`;

const RepoRow = styled.div`
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.borderCard};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const RepoHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  gap: 0.5rem;
`;

const RepoName = styled.span`
  font-weight: 600;
  color: var(--text);
`;

const RepoLinks = styled.div`
  display: flex;
  gap: 0.7rem;
  flex-shrink: 0;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.72rem;
    color: ${({ theme }) => theme.projectCard.link};
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  font-size: 0.68rem;
  letter-spacing: 0.5px;
  color: var(--badge-available-text);
  background: var(--badge-available-bg);
  border: var(--badge-available-border);
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
`;
