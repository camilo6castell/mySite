'use client'

import styled from 'styled-components'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaJava
} from 'react-icons/fa'
import {
  SiTypescript,
  SiSpringboot,
  SiMongodb,
  SiMariadb,
  SiDocker
} from 'react-icons/si'

/* ================= TYPES ================= */

type Repo = {
  name: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
}

type Project = {
  title: string
  summary: string
  highlights?: string[]
  preview?: string
  repos: Repo[]
}

/* ================= ICON MAP ================= */

const techIcons: Record<string, any> = {
  React: FaReact,
  TypeScript: SiTypescript,
  Node: FaNodeJs,
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  MongoDB: SiMongodb,
  MariaDB: SiMariadb,
  Docker: SiDocker,
}

/* ================= COMPONENT ================= */

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Left>
        <Header>
          <h2>{project.title}</h2>
          <Badge>Featured</Badge>
        </Header>

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
                  const Icon = techIcons[t]
                  return (
                    <span key={t}>
                      {Icon && <Icon />}
                      {t}
                    </span>
                  )
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
        {project.preview ? (
          <Preview>
            <img src={project.preview} alt={project.title} />
            <Overlay>View Project</Overlay>
          </Preview>
        ) : (
          <CodePreview>
{`// encryption example
function encrypt(msg, pubKey) {
  return secure(msg, pubKey)
}`}
          </CodePreview>
        )}
      </Right>
    </Card>
  )
}

/* ================= STYLES ================= */

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;

  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  border-radius: 20px;
  padding: 2rem;

  backdrop-filter: blur(12px);

  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 40px ${({ theme }) => theme.shadowColor};
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2rem;
  }

  .summary {
    color: var(--muted);
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};
`

const Highlights = styled.ul`
  padding-left: 1rem;
  color: var(--text);

  li {
    margin-bottom: 0.3rem;
    opacity: 0.9;
  }
`

const Repos = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const RepoBlock = styled.div`
  flex: 1;
  min-width: 240px;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  h4 {
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--muted);
  }
`

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 0.6rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
  }

  svg {
    font-size: 0.8rem;
  }
`

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.6rem;

  a {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 0.85rem;
    text-decoration: none;
    color: var(--text);

    &:hover {
      opacity: 0.7;
    }
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Preview = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Preview}:hover & {
    opacity: 1;
  }
`

const CodePreview = styled.pre`
  width: 100%;
  height: 100%;
  background: #0d1117;
  color: #58a6ff;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.85rem;
`