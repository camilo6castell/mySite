"use client";

import { useEffect } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { ephesis, raleway, montserrat } from "@/ui/styles/fonts";

export default function CVView({ markdown }: { markdown: string }) {
  useEffect(() => {
    // #snap-container is shared across routes (the root layout persists),
    // so it can retain whatever scrollTop it had on '/' — reset it here or
    // this view can render mid-scroll and look like it "opened inside Home".
    const scrollEl = document.getElementById("snap-container");
    if (scrollEl)
      scrollEl.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <Wrapper className="content-surface">
      <TopBar>
        <BackLink href="/">
          <FaArrowLeft /> Volver al portafolio
        </BackLink>
        <DownloadLink href="/cv/camilo-castellanos-cv.pdf" download>
          <FaDownload /> Descargar PDF
        </DownloadLink>
      </TopBar>

      <Sheet>
        <MarkdownBox>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </MarkdownBox>
      </Sheet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;

  @media (max-width: 900px) {
    padding: 5.5rem 1rem 3rem;
  }
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const linkBase = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

const BackLink = styled(Link)`
  ${linkBase}
  color: var(--text);
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const DownloadLink = styled.a`
  ${linkBase}
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.badge.bg};
  color: ${({ theme }) => theme.badge.text};
  border: ${({ theme }) => theme.badge.border};

  &:hover {
    filter: brightness(1.05);
  }
`;

const Sheet = styled.div`
  background: ${({ theme }) => theme.paper.bg};
  border: 1px solid ${({ theme }) => theme.paper.border};
  border-radius: 14px;
  box-shadow:
    0 1px 2px ${({ theme }) => theme.paper.shadow},
    0 18px 40px ${({ theme }) => theme.paper.shadow};
  padding: 3rem 3rem 3.5rem;

  @media (max-width: 900px) {
    padding: 2rem 1.5rem 2.5rem;
    border-radius: 10px;
  }
`;

const MarkdownBox = styled.div`
  color: var(--text);
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  line-height: 1.7;

  h1 {
    font-family: ${ephesis.style.fontFamily}, serif;
    font-size: 3rem;
    margin-bottom: 0.3rem;
  }

  h2 {
    font-family: ${raleway.style.fontFamily}, sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 2.2rem 0 1rem;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderCard};
  }

  h3 {
    font-family: ${raleway.style.fontFamily}, sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 1.5rem 0 0.3rem;
  }

  em {
    color: ${({ theme }) => theme.muted};
    font-style: normal;
    font-size: 0.9rem;
  }

  p {
    margin: 0.6rem 0;
  }

  ul {
    margin: 0.6rem 0 1rem 1.2rem;
    padding: 0;
  }

  li {
    margin-bottom: 0.35rem;
  }

  a {
    color: ${({ theme }) => theme.projectCard.link};

    &:hover {
      color: ${({ theme }) => theme.projectCard.linkHover};
    }
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.borderCard};
    margin: 1.8rem 0;
  }

  strong {
    color: var(--text);
  }
`;
