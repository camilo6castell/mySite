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
  isFeatured?: boolean
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
          {project.isFeatured && <Badge>Featured</Badge> }
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
            <Overlay> </Overlay>
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
  padding: 0 8rem 3rem;
  width: 100%;
  min-width: 950px;
  height: 100%;  
  display: flex;
  overflow: hidden;
  gap: 3rem;

  /* @media (max-width: 900px) {
    grid-template-columns: 1fr;
    height: auto;
  } */

  @media (min-width: 1340px) {
    & {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
    }
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  li {
    color: var(--text); 
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
  margin-top: 1rem;
  min-width: 240px;
  max-width: 385px;;
  padding: 1rem;
  border-radius: 14px;
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};

  h4 {
    margin-bottom: 0.3rem;
    color: var(--text); 
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
  padding-top: 1rem;
  margin-top: 0.6rem;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.75rem;
    padding: 5px 9px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    color: var(--text); 
  }

  svg {
    fill: var(--text); 
    font-size: 0.8rem;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 1rem;
  margin-top: 0.6rem;

  a {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 0.85rem;
    text-decoration: none;
    color: var(--text); 

    svg {
      fill: var(--text);
    }

    &:hover {
      opacity: 0.7;
    }
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1340px) {
    & {
      display: none;
    }
  }
`

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 70%;
  border-radius: 16px;
  overflow: hidden;


  opacity: 0.8;
  box-shadow: 2px 10px 10px ${({ theme }) => theme.shadowCardHighContrast};
  
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