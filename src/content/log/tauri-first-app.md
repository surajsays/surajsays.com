---
title: Built my first Tauri app layout — cross platform Linux and Android
date: 2026-03-21
tags: [tauri, rust, android, linux]
---

Today I figured out how Tauri works and built the layout for my first cross platform application targeting Linux and Android.

## What is Tauri

Tauri is a framework for building desktop and mobile apps using web technologies for the UI and Rust for the backend. Think of it like Electron but way lighter — instead of bundling a whole Chromium browser, it uses the system's native webview.

This means:
- Much smaller bundle size than Electron
- Lower memory usage
- Rust backend for performance and safety
- Same codebase for Linux, Windows, macOS, Android, iOS

## How it works
```
your web UI (HTML/CSS/JS or any framework)
        ↓
Tauri wraps it in a native window
        ↓
communicates with Rust backend via commands
        ↓
Rust handles system level stuff
        ↓
ships as a native .deb, .apk, .exe etc
```

## The webview white flash problem

When a webview app starts, it shows a brief white screen before your UI loads — looks terrible especially on dark themed apps.

Fixed it by setting the background color of the webview window in `tauri.conf.json`:
```json
{
  "app": {
    "windows": [
      {
        "backgroundColor": [12, 14, 19, 255]
      }
    ]
  }
}
```

The array is `[R, G, B, A]` — matched it to my `--bg` color `#0c0e13` so the window starts dark immediately with no flash.

## What I learned

- Tauri uses system webview — no bundled browser like Electron
- Rust handles backend logic, web tech handles UI
- Android support is still maturing but works
- The webview flash fix is just setting background color early
