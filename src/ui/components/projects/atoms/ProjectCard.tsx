"use client";

import styled from "styled-components";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiTypescript,
  SiSpringboot,
  SiMongodb,
  SiMariadb,
  SiDocker,
} from "react-icons/si";
import StyledSyntaxHighlighter from "./StyledSyntaxHighlighter";

/* ================= TYPES ================= */

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
  isFeatured?: boolean;
  highlights?: string[];
  preview?: string;
  code?: {
    content: string;
    language?: string;
  };
  repos: Repo[];
};

/* ================= ICON MAP ================= */

const techIcons: Record<string, any> = {
  React: FaReact,
  TypeScript: SiTypescript,
  Node: FaNodeJs,
  Java: FaJava,
  "Spring Boot": SiSpringboot,
  MongoDB: SiMongodb,
  MariaDB: SiMariadb,
  Docker: SiDocker,
};

/* ================= COMPONENT ================= */

export default function ProjectCard({ project }: { project: Project }) {
  const hasPreview = !!project.preview;
  const hasCode = !!project.code;
  return (
    <Card>
      <Left>
        <Header>{project.isFeatured && <Badge>Featured</Badge>}</Header>

        <p className="summary">{project.summary}</p>

        {project.highlights && (
          <Highlights>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </Highlights>
        )}

        <Repos>
          {project.repos.map((repo, i) => (
            <RepoBlock key={i}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>

              <Tech>
                {repo.tech.map((t) => {
                  const Icon = techIcons[t];
                  return (
                    <span key={t}>
                      {Icon && <Icon />}
                      {t}
                    </span>
                  );
                })}
              </Tech>

              <Links>
                {repo.repo && (
                  <a href={repo.repo} target="_blank" rel="noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {repo.demo && (
                  <a href={repo.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </Links>
            </RepoBlock>
          ))}
        </Repos>
      </Left>

      <Right>
        {hasPreview || hasCode ? (
          <PreviewContainer>
            {/* IMAGE */}
            {hasPreview && (
              <ImageLayer className="image">
                <img src={project.preview!} alt={project.title} />
              </ImageLayer>
            )}

            {/* CODE */}
            {hasCode && (
              <CodeLayer
                className="code"
                $visible={!hasPreview} // 👈 importante
              >
                <StyledSyntaxHighlighter
                  language={project.code!.language || "javascript"}
                >
                  {project.code!.content}
                </StyledSyntaxHighlighter>
              </CodeLayer>
            )}
          </PreviewContainer>
        ) : (
          <EmptyState>No preview available</EmptyState>
        )}
      </Right>
    </Card>
  );
}

/* ================= STYLES ================= */

const Card = styled.div`
  padding: 0 5rem 0rem;
  width: 100%;
  max-width: 1700px;
  height: 100%;
  display: flex;
  overflow: hidden;
  gap: 3rem;

  @media (min-width: 1340px) {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;

    height: auto;

    padding: 1.5rem 1.25rem 3rem;

    gap: 1.5rem;

    overflow: visible;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  .summary {
    color: var(--muted);
  }

  @media (max-width: 900px) {
    gap: 1.5rem;

    .summary {
      font-size: 0.95rem;
      line-height: 1.7;
      font-size: 0.8rem;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};
`;

const Highlights = styled.ul`
  padding-left: 1rem;

  li {
    color: var(--text);
    margin-bottom: 0.3rem;
    opacity: 0.9;
    font-size: 0.8rem;
  }
`;

const Repos = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: row;
  }
`;

const RepoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;

  min-width: 0;
  max-width: 100%;

  padding: 1rem;

  border-radius: 14px;

  background: ${({ theme }) => theme.bgCard};

  border: 1px solid ${({ theme }) => theme.borderCard};

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--muted);
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding-top: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    font-size: 0.7rem;
  }

  svg {
    font-size: 0.8rem;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 1rem;

  a {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 0.85rem;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 900px) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1340px) {
    display: none;
  }
`;

/* ===== PREVIEW SYSTEM ===== */

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 2px 10px 10px ${({ theme }) => theme.shadowCardHighContrast};

  &:hover .image {
    opacity: 0;
  }

  &:hover .code {
    opacity: 1;
  }

  @media (max-width: 900px) {
    height: 320px;

    &:hover .image {
      opacity: 1;
    }

    &:hover .code {
      opacity: 0;
    }
  }
`;

const ImageLayer = styled.div`
  position: absolute;
  inset: 0;
  transition: opacity 0.4s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CodeLayer = styled.div<{ $visible?: boolean }>`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: stretch;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.4s ease;

  background: ${({ theme }) => theme.bgCard};

  pre {
    width: 100%;
    margin: 0 !important;
    padding: 1.5rem !important;
    overflow: auto;
  }
`;

const EmptyState = styled.div`
  opacity: 0.5;
  font-style: italic;
`;
