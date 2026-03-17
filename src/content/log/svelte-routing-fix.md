---
title: Fixed routing on Hostinger static hosting
date: 2026-03-16
tags: [svelte, hosting, fix]
---

Deployed my SvelteKit static site to Hostinger today and hit two problems.

## The Problem

After uploading the build, visiting `/blog` gave a **403 Forbidden** and `/log/day-1` gave a **500 Internal Server Error**. Homepage worked fine.

## Why It Happened

SvelteKit by default generates files like `blog.html` at the root of the build folder. Hostinger sees a `/blog` folder exists and tries to list it — which is forbidden. The slug pages had the same issue.

## The Fix

Added `trailingSlash = 'always'` to `src/routes/+layout.js`:
```js
export const prerender = true;
export const trailingSlash = 'always';
```

This makes SvelteKit generate `blog/index.html` instead of `blog.html` — so Hostinger finds the correct file for every route.

Also simplified `.htaccess` in `static/` to just:
```apache
Options -Indexes
RewriteEngine On
RewriteBase /
```

After rebuilding and re-uploading — everything works perfectly. 

## What I Learned

Static site hosting needs files in the right structure. `trailingSlash = 'always'` is the correct setting for shared hosting like Hostinger.
