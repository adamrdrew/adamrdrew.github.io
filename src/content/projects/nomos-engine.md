---
title: Nomos Engine
description: A 2.5D raycasting game engine in the spirit of Wolfenstein 3D and DOOM. Built in C with SDL2. Tile-based maps, textured walls, sprite rendering.
repo: https://github.com/adamrdrew/nomos-engine
status: active
tags: [c, sdl2, game-engine, raycasting]
order: 5
---

Nomos Engine is a 2.5D raycasting engine — the same rendering technique behind Wolfenstein 3D and the original DOOM. Written in C with SDL2 for cross-platform graphics.

The engine renders a 3D perspective view from a 2D tile map using raycasting: one ray per screen column, intersecting a grid of walls to calculate distance and projection height. It's not true 3D — there's no looking up or down, no rooms above rooms — but the effect is convincing and fast.

Current capabilities:
- **Raycasting renderer** with textured walls and floor/ceiling
- **Tile-based maps** loaded from data files
- **Sprite rendering** for objects and entities
- **Collision detection** against the tile grid
- **Smooth movement and rotation** with configurable speed

Nomos Engine is the runtime half of a two-project system. Nomos Studio provides the visual map editor.
