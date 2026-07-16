import { ragAiMultiContextCode } from "./ragAiMultiContextCode";

export const ragAiMultiContext = {
  title: "MyAssistant",
  isFeatured: true,
  summary:
    "Fully local, privacy-first RAG (Retrieval-Augmented Generation) system with multi-context semantic memory. Built from scratch without LangChain or any RAG framework — every stage of the pipeline is explicit and controlled: chunking, embedding, FAISS indexing, multi-query expansion, cosine re-ranking, prompt construction, and local LLM inference via Ollama.",

  preview: "",

  code: {
    language: "python",
    content: ragAiMultiContextCode,
  },

  highlights: [
    "Built from scratch — no LangChain, no RAG framework, every pipeline stage is explicit and tunable",
    "Multi-query expansion: a single question generates 3 semantically diverse queries in interpretive mode",
    "Custom re-ranking: candidates scored against all query embeddings, ranked by average cosine similarity",
    "Dual query mode — rigorous (temp 0.2, strict citation rules) vs interpretive (temp 0.7, conceptual synthesis)",
    "Fully local and private — FAISS + Ollama, no API keys, no cloud, no telemetry",
    "Multi-context isolation: each knowledge domain has its own independent FAISS index, embeddings, and metadata",
    "Three ingestion modes: local files (PDF/HTML/TXT), single URL, and full domain web crawler",
  ],

  repos: [
    {
      name: "RAG System",
      description:
        "Local RAG pipeline with multi-query expansion, FAISS vector search, cosine re-ranking, and Ollama LLM inference. Supports multi-context semantic isolation and three ingestion modes: local documents, single URL, and domain crawling.",
      tech: [
        "Python 3.11",
        "FAISS",
        "FlagEmbedding (BGE)",
        "Ollama",
        "NumPy",
        "pypdf",
        "BeautifulSoup4",
        "readability-lxml",
      ],
      repo: "https://github.com/camilo6castell/my-assistant",
      demo: "https://my-assistant-rag.vercel.app/",
    },
  ],
};
