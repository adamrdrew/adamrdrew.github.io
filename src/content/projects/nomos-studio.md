---
title: Nomos Studio
description: Visual map editor for Nomos Engine. Native macOS app in SwiftUI. Tile painting, entity placement, live preview.
repo: https://github.com/adamrdrew/nomos-studio
status: active
tags: [swift, swiftui, macos, game-tools, level-editor]
order: 6
---

Nomos Studio is the companion editor for Nomos Engine — a native macOS app for designing 2.5D raycasting maps. Built in SwiftUI, it provides a visual tile-based editor where you paint walls, place entities, and configure map properties.

Features:
- **Tile painting** — select wall textures and paint them onto the grid
- **Entity placement** — position sprites, spawn points, and triggers
- **Map properties** — configure dimensions, lighting, and metadata
- **Native macOS** — proper SwiftUI app with keyboard shortcuts, undo/redo, and file management

The editor outputs map data files that Nomos Engine loads at runtime. The two projects form a complete authoring-to-runtime pipeline for 2.5D games.
