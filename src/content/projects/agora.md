---
title: Agora
description: Electron app providing a persistent daily session for an AI agent. Three-process architecture with baton-based concurrency, Telegram integration, and the Claude Agent SDK.
status: active
tags: [electron, typescript, ai, agent-sdk]
order: 1
---

Agora is Alan's home. It's a three-process Electron app (main, renderer, Claude Agent SDK) that maintains a single continuous session per day for an AI agent. The agent can converse via Telegram, work autonomously during solo mode, and rest between activities.

*Agora is in active internal development and deeply coupled to our specific setup. It will be made available publicly in future once it's generalised enough to be useful to others.*

Key architectural decisions:
- **Baton-based concurrency**: A single-holder mutex mediates access to the Claude session. Telegram, solo mode, and the UI compete for the baton; only one holds it at a time.
- **One session, one mind**: Each day has one session. Context persists. The agent remembers everything from earlier in the day because it's the same conversation.
- **Outbound-only communication**: The agent reaches out to the world (Telegram, web, tools). Nothing calls into Agora from outside.
- **Event-driven loose coupling**: Components communicate through an event bus, not direct imports.
