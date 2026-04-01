# HomeMind

<p align="center">
  <img src="build/icon.png" alt="HomeMind logo" width="180" />
</p>

Your personal AI, running at home. HomeMind is a desktop app that lets you chat with large language models entirely on your own machine — no cloud, no data leaving your device.

Built with Electron, React, TypeScript, and [Ollama](https://ollama.com).

## Features

- **100% local** — your conversations never leave your machine
- **Chat** with any Ollama-compatible model using a clean, streaming interface
- **Model manager** — browse, download, and delete models from a built-in registry (Llama, Gemma, Phi, Qwen, Mistral, DeepSeek, and more)
- **Configurable** — set a system prompt, adjust temperature, and configure context window size per session
- **Bundled Ollama** — ships with the Ollama binary; no separate install needed

## Requirements

- Windows (macOS/Linux builds available but not primary target)
- ~4 GB free disk space for a small model (e.g. Llama 3.2 1B = 1.3 GB)
- 8 GB RAM recommended; 16 GB+ for larger models

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up Ollama

Download the bundled Ollama binary for your platform:

```bash
# Windows
pnpm run setup:ollama:win

# macOS
pnpm run setup:ollama:mac
```

### 3. Run in development

```bash
pnpm dev
```

The app will launch with hot reload enabled. The Ollama server starts automatically in the background.

## Building

```bash
# Type-check + build (all platforms)
pnpm build

# Package a Windows installer
pnpm run build:win

# Package a macOS app
pnpm run build:mac

# Package a Linux app
pnpm run build:linux

# Build without packaging (for local testing)
pnpm run build:unpack
```

## Project Structure

```
src/
  main/           # Electron main process
    index.ts          # App entry, IPC handlers
    ollama-client.ts  # Ollama HTTP API client
    ollama-process.ts # Manages the bundled Ollama binary
  preload/        # Secure bridge between main and renderer
  renderer/       # React UI
    screens/
      Chat.tsx        # Streaming chat interface
      Models.tsx      # Model browser and downloader
      Settings.tsx    # System prompt, temperature, context size
resources/
  win32/          # Platform Ollama binaries (added by setup script)
  darwin/
```

## License

MIT — see [LICENSE](LICENSE) for details. Third-party notices are in [NOTICES](NOTICES).

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) with the following extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
