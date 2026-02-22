---
title: Pharaoh
description: Headless job runner for Ushabti. Watches a dispatch directory, runs the Scribe-Builder-Overseer loop via the Claude Agent SDK, and manages git branching and PRs automatically.
repo: https://github.com/adamrdrew/pharaoh
homepage: https://www.npmjs.com/package/@adamrdrew/pharaoh
status: active
tags: [typescript, agent-sdk, ushabti, automation]
order: 2
---

Pharaoh is the dispatch layer that turns Ushabti from a manual development framework into an autonomous software factory. It runs unattended — no terminal, no human in the loop.

The workflow is filesystem-based: drop a markdown file into the dispatch directory, and Pharaoh picks it up, creates a git branch, runs the full Ushabti phase cycle (Scribe plans, Builder implements, Overseer reviews), commits the result, pushes, and opens a pull request. When it finishes, it returns to idle and waits for the next job.

Key design decisions:
- **Filesystem IPC** — the filesystem is the API. Drop a file to dispatch, read a file for status. No HTTP server, no sockets.
- **One job at a time** — sequential processing with implicit queuing. Simplicity over concurrency.
- **Agent autonomy** — blocks `AskUserQuestion` via a hook. The agent must proceed with its best judgement.
- **Phase verification** — a lightweight second query confirms the Ushabti loop actually reached a terminal state, preventing false positives from early agent exits.
- **Git automation** — branch creation, commit, push, and PR are handled in TypeScript (zero agent tokens spent on git operations).

Install via npm:
```bash
npx @adamrdrew/pharaoh serve
```
