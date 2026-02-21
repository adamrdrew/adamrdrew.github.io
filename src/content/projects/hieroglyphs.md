---
title: Hieroglyphs
description: macOS-native project management for indie developers. Filesystem-based, plain text markdown with YAML frontmatter. AI-first by design.
repo: https://github.com/adamrdrew/hieroglyphs
status: active
tags: [swift, swiftui, macos, project-management]
order: 2
---

Hieroglyphs is a macOS-native project management tool built with SwiftUI. Every project and card is a plain markdown file with YAML frontmatter. No databases, no hidden state. The filesystem is the source of truth.

This means your projects are:
- **Version-controlled** — git-friendly by default
- **AI-accessible** — any agent that can read and write files can manage your projects
- **Editor-agnostic** — edit cards in VS Code, Vim, or Hieroglyphs itself
- **Transparent** — nothing is hidden, everything is human-readable

Hieroglyphs watches the filesystem with FSEvents and reflects external changes within 500ms. It's designed for workflows where humans and AI agents collaborate on the same project data simultaneously.

Install via Homebrew:
```bash
brew tap adamrdrew/hieroglyphs
brew install --cask hieroglyphs
```
