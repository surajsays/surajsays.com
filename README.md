# surajsays.com

My personal site and dev journal -built in public, broken often,written honestly.

## Stack
 
- [SvelteKit](https://kit.svelte.dev/) — framework
- [mdsvex](https://mdsvex.pngwn.io/) — markdown support
- [Tailwind CSS](https://tailwindcss.com/) + Typography plugin — styling
- [@sveltejs/adapter-static](https://kit.svelte.dev/docs/adapter-static) — static site output
- Hosted on Hostinger shared hosting

## Structure
 
```
src/
├── content/
│   ├── blog/        # blog posts as .md files
│   └── log/         # daily dev logs as .md files
├── lib/
│   └── assets/      # favicon and static assets
└── routes/
    ├── +layout.svelte   # global navbar and layout
    ├── +layout.js       # prerender config
    ├── +page.svelte     # homepage
    ├── blog/
    │   ├── +page.svelte         # lists all blog posts
    │   └── [slug]/+page.svelte  # renders individual post
    ├── log/
    │   ├── +page.svelte         # lists all dev logs
    │   └── [slug]/+page.svelte  # renders individual log
    └── projects/
        └── +page.svelte         # projects page
```

## Development
 
```bash
# install dependencies
npm install
 
# start dev server
npm run dev
 
# build for production
npm run build
 
# preview production build
npm run preview
```



## Writing
 
Blog posts and logs live in `src/content/` as `.md` files with frontmatter:
 
```md
---
title: My First Post
date: 2026-03-14
tags: [svelte, learning]
---
 
Content goes here...
```

## Deploy
 
Build outputs to the `build/` folder. Upload contents to hosting  via FTP or File Manager.
