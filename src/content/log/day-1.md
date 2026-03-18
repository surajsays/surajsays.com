---
title: Day 1 - Setting up SvelteKit
date: 2026-03-14
tags: [svelte, setup]
---

Today I set up my SvelteKit project with mdsvex and Tailwind CSS.

```rust
fn main(){
  println!("hello from Arch");
}

```
```javascript
const posts = ['svelte', 'rust', 'arch'];

posts.forEach((post, index) => {
  console.log(`${index + 1}: ${post}`);
});

const doubled = posts.map(p => p.toUpperCase());
```
```svelte
<script>
  let count = $state(0);

  function increment() {
    count++;
  }
</script>

<button onclick={increment}>
  clicked {count} times
</button>
```
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
```bash

[suraj@archlinux suraj.says]$ pwd
/home/suraj/Documents/svelte/suraj.says
  [suraj@archlinux suraj.says]$ tree src/
src/
├── app.html
├── content
│   ├── blog
│   │   └── first-post.md
│   └── log
│       ├── day-1.md
│       └── svelte-routing-fix.md
├── lib
│   ├── assets
│   │   └── favicon.svg
│   ├── components
│   │   └── DotCalendar.svelte
│   └── index.js
└── routes
    ├── blog
    │   ├── +page.js
    │   ├── +page.svelte
    │   └── [slug]
    │       ├── +page.js
    │       └── +page.svelte
    ├── layout.css
    ├── +layout.js
    ├── +layout.svelte
    ├── log
    │   ├── +page.js
    │   ├── +page.svelte
    │   └── [slug]
    │       ├── +page.js
    │       └── +page.svelte
    ├── +page.svelte
    └── projects
        └── +page.svelte

13 directories, 20 files
[suraj@archlinux suraj.says]$ 

```
