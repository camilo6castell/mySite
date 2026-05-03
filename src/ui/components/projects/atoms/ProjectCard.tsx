'use client'
import styled from 'styled-components'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <Left>
        <h2>{project.title}</h2>
        <p className="summary">{project.summary}</p>

        {project.highlights && (
          <ul>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <Repos>
          {project.repos.map((repo, i) => (
            <RepoBlock key={i}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>

              <Tech>
                {repo.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </Tech>

              <Links>
                {repo.repo && (
                  <a href={repo.repo} target="_blank">
                    <FaGithub /> Code
                  </a>
                )}
                {repo.demo && (
                  <a href={repo.demo} target="_blank">
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
          <img src={project.preview} alt={project.title} />
        ) : (
          <CodePreview>
{`// preview
function secureMessage(msg, pubKey) {
  return encrypt(msg, pubKey)
}`}
          </CodePreview>
        )}
      </Right>
    </Card>
  )
}

const Card = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.borderCard};
  border-radius: 16px;
  padding: 2rem;

  backdrop-filter: blur(10px);

  @media (max-width: 900px) {
  grid-template-columns: 1fr;
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

  ul {
    padding-left: 1rem;
    color: var(--text);
  }
`

const Repos = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const RepoBlock = styled.div`
  flex: 1;
  min-width: 220px;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255,255,255,0.05);

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
  margin-top: 0.5rem;

  span {
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
  }
`

const Links = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 0.5rem;

  a {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 0.85rem;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 12px;
    object-fit: cover;
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