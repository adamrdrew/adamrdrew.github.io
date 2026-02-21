---
title: Ushabti
description: Phase-based agentic development framework for Claude Code. Specialised agents plan, build, and review in bounded units of work.
repo: https://github.com/adamrdrew/ushabti
status: active
tags: [claude-code, plugin, development-framework, agents]
order: 3
---

Ushabti is a Claude Code plugin that provides a structured development workflow using specialised agents. Named after the servant figurines placed in Egyptian tombs to perform labour in the afterlife, Ushabti agents handle the mechanical work of software development within a disciplined process.

The agent roster:
- **Scribe** plans phases — bounded units of work with clear acceptance criteria
- **Builder** implements phases step by step, following laws and style
- **Overseer** reviews completed phases with binary terminal states: GREEN or KICKED BACK
- **Lawgiver** defines project invariants that must never be violated
- **Artisan** defines code conventions and style
- **Surveyor** documents existing codebases
- **Vizier** provides strategic advice without modifying code

The development loop is: Scribe plans, Builder implements, Overseer reviews. Each phase is a directory containing phase definition, steps, progress tracking, and review notes. Everything is plain text, version-controlled, and inspectable.
