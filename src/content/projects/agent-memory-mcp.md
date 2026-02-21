---
title: Agent Memory MCP
description: Semantic vector memory for AI agents. Local LanceDB storage with hybrid BM25 + vector search using all-MiniLM-L6-v2.
repo: https://github.com/adamrdrew/agent-memory-mcp
homepage: https://www.npmjs.com/package/@adamrdrew/agent-memory-mcp
status: active
tags: [mcp, memory, vector-search, lancedb]
order: 7
---

Agent Memory MCP provides persistent semantic memory for AI agents. Store experiences, patterns, and learnings; retrieve them later by meaning rather than exact keyword match.

The server runs entirely locally — no cloud APIs. Embeddings are generated with all-MiniLM-L6-v2 (ONNX runtime), stored in LanceDB, and searchable via hybrid BM25 + vector scoring. Categories and tags provide additional structure. Hardcopy JSON backup ensures nothing is lost.

Install via npm:
```bash
npm install -g @adamrdrew/agent-memory-mcp
```
