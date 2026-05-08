export const ragAiMultiContextCode = `
# ── Multi-query expansion + FAISS search + custom re-ranking ─────────────────
#
# In interpretive mode, a single question expands into 3 semantically
# diverse queries before any vector search. This broadens the candidate
# pool to capture chunks that are conceptually adjacent but not
# lexically close to the original question.
 
def build_search_query(question: str) -> List[str]:
    if not INTERPRETIVE_MODE:
        return [question]
 
    history_text = "".join(
        f"{t['user']} {t['assistant']} "
        for t in CHAT_MEMORY[-MAX_TURNS:]
    )
    return [
        history_text + question,                           # contextualized by memory
        f"Explica conceptualmente: {question}",            # conceptual framing
        f"Principio general relacionado con: {question}",  # principle-level framing
    ]
 
 
def search(question: str) -> Tuple[List[int], float]:
    queries = build_search_query(question)
 
    TOP_K_INITIAL = 25 if INTERPRETIVE_MODE else 15
    TOP_K_FINAL   =  7 if INTERPRETIVE_MODE else  5
 
    # ── Step 1: collect candidate pool across all expanded queries ──────────
    all_candidate_indices: set[int] = set()
    query_embeddings: list[np.ndarray] = []
 
    for q in queries:
        emb = model.encode([q])
        emb = np.array(emb).astype("float32")
        faiss.normalize_L2(emb)                 # L2 norm → cosine similarity
        query_embeddings.append(emb[0])
 
        _, indices = INDEX.search(emb, TOP_K_INITIAL)
        all_candidate_indices.update(int(i) for i in indices[0] if i != -1)
 
    # ── Step 2: re-rank candidates by average cosine score ──────────────────
    #
    # Each candidate chunk is scored against EVERY query embedding.
    # Chunks that score well across all expanded queries rank higher —
    # penalizes narrow matches and rewards broad semantic relevance.
    scores = []
    for idx in all_candidate_indices:
        chunk_vector = CHUNK_VECTORS[idx]        # pre-loaded from vectors.npy
        avg_score = sum(
            float(np.dot(q_emb, chunk_vector))
            for q_emb in query_embeddings
        ) / len(query_embeddings)
        scores.append((idx, avg_score))
 
    top = sorted(scores, key=lambda x: x[1], reverse=True)[:TOP_K_FINAL]
 
    top_indices = [idx for idx, _ in top]
    confidence  = sum(s for _, s in top) / len(top) if top else 0.0
 
    return top_indices, confidence
 
 
# ── Dual-mode prompt: LLM behavior constrained by hardcoded rules ────────────
#
# Temperature and prompt rules shift together based on the active mode.
# In rigorous mode, the LLM is instructed to use a mandatory verbatim
# phrase when the answer is not in the documents — no paraphrasing allowed.
 
def build_prompt(context_chunks: List[str], question: str) -> str:
    if INTERPRETIVE_MODE:
        rules = """
RULES (INTERPRETIVE MODE):
- You MAY connect ideas across different fragments.
- You MAY abstract general principles if the text supports it.
- Always indicate which sources you are drawing from.
- NEVER use external knowledge."""
    else:
        rules = """
RULES (RIGOROUS MODE):
1. If the answer appears explicitly → cite source and page.
2. If it can be inferred → state "No exact match found." then explain.
3. If it cannot be answered → respond EXACTLY:
   "No está en los documentos proporcionados, ni se puede inferir de ellos."
Do not invent. Do not use external knowledge."""
 
    temperature = 0.7 if INTERPRETIVE_MODE else 0.2   # also set on the Ollama call
 
    context_text = "\\n\\n---\\n\\n".join(context_chunks)
    return f"""You are an assistant that answers EXCLUSIVELY from provided context.
 
{rules}
 
CONTEXT:
{context_text}
 
QUESTION:
{question}
 
ANSWER:"""
    `;
