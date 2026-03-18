---
title: Added syntax highlighting with Shiki
date: 2026-03-18
tags: [svelte, shiki, rust]
---

Today I added syntax highlighting to my SvelteKit blog using Shiki.

## What is Shiki

Shiki was created by Pine Wu from the VS Code team and later maintained by Anthony Fu.
It uses the same TextMate grammar engine as VS Code — so code on your site looks
exactly like it does in your editor.

The best part — it runs at build time, not in the browser. Colors are baked into
the HTML so no extra JavaScript is needed on the client.

## Setup

Installed shiki and configured it in `svelte.config.js` with mdsvex:
```javascript
const highlighter = await createHighlighter({
  themes: ['one-dark-pro'],
  langs: ['javascript', 'typescript', 'rust', 'bash', 'css', 'html', 'svelte', 'json', 'apache']
});
```

## Project structure at this point
```bash
src/
├── app.html
├── content
│   ├── blog
│   │   └── first-post.md
│   └── log
│       ├── day-1.md
│       └── svelte-routing-fix.md
├── lib
│   ├── assets
│   │   └── favicon.svg
│   ├── components
│   │   └── DotCalendar.svelte
│   └── index.js
└── routes
    ├── blog
    │   ├── +page.js
    │   ├── +page.svelte
    │   └── [slug]
    │       ├── +page.js
    │       └── +page.svelte
    ├── layout.css
    ├── +layout.js
    ├── +layout.svelte
    ├── log
    │   ├── +page.js
    │   ├── +page.svelte
    │   └── [slug]
    │       ├── +page.js
    │       └── +page.svelte
    ├── +page.svelte
    └── projects
        └── +page.svelte
```

## Rust example — loop and match

Testing the highlighter with a Rust snippet:
```rust
fn main() {
    let languages = vec!["svelte", "rust", "javascript"];

    for lang in &languages {
        match lang {
            &"rust" => println!("🦀 {} — systems language", lang),
            &"svelte" => println!("🧡 {} — web framework", lang),
            _ => println!("📝 {} — scripting", lang),
        }
    }
}
```

## What I learned

- Shiki runs at build time — zero runtime cost
- Uses same engine as VS Code
- Works perfectly with mdsvex and SvelteKit static builds
- Add new languages to the `langs` array in config as needed
