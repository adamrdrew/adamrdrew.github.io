---
title: AppleScript MCP
description: MCP server for macOS automation via AppleScript. Gives AI agents the ability to control any scriptable Mac application.
repo: https://github.com/adamrdrew/applescript-mcp
homepage: https://www.npmjs.com/package/applescript-mcp
status: active
tags: [mcp, macos, applescript, automation]
order: 4
---

AppleScript MCP exposes macOS automation capabilities to AI agents through the Model Context Protocol. Any scriptable application on macOS becomes accessible: Reminders, Calendar, Mail, Finder, Safari, and hundreds more.

The server includes a learning system that tracks execution history, discovers app capabilities, and provides smart suggestions based on past successes and failures. Scripts are analysed for safety before execution, with high-risk operations requiring explicit confirmation.

Install via npm:
```bash
npm install -g applescript-mcp
```
