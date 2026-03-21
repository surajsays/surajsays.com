<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { theme } from '$lib/theme.js';
  import AmbientGlow from '$lib/components/AmbientGlow.svelte';
	let { children } = $props();
	let menuOpen = $state(false);

	const links = [
		{ href: '/', label: '~/home' },
		{ href: '/log', label: '~/log' },
		{ href: '/projects', label: '~/projects' },
		{ href: '/blog', label: '~/blog' },
	];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b "
     style="background: var(--nav-bg); border-color: var(--border);">

 <div class="flex items-center px-6 py-4">

    <a href="/" class="font-bold text-base no-underline shrink-0" style="color: var(--text);">
      <span style="color: var(--accent)">❯</span> suraj<span style="color: var(--accent)">says</span>
    </a>

    <div class="hidden md:flex gap-1 ml-auto">
      {#each links as link}
        <a href={link.href}
           class="text-xs px-3 py-1 transition-colors nav-link"
           class:active={$page.url.pathname === link.href}>
          {link.label}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-2 ml-auto md:ml-4">
      <ThemeToggle />
      <button class="md:hidden text-xl px-2 py-1 rounded"
              style="color: var(--muted); background: none; border: none; cursor: pointer;"
              onclick={() => menuOpen = !menuOpen}>
        {menuOpen ? '✕' : '☰'}
      </button>
    </div>

</div>
  <!-- Mobile dropdown -->
  {#if menuOpen}
    <div class="md:hidden flex flex-col px-6 pb-4 gap-1">
      {#each links as link}
        <a href={link.href}
           class="text-xs px-3 py-2 transition-colors nav-link"
           class:active={$page.url.pathname === link.href}
           onclick={() => menuOpen = false}>
          {link.label}
        </a>
      {/each}
    </div>
  {/if}

</nav>

{#if $theme === 'dark'}
<AmbientGlow />
{/if}
<main class="prose mx-auto px-4 pt-8 pb-0 mt-20"
      class:prose-invert={$theme === 'dark'}>
  {@render children()}
</main>
 <footer class="border-t mt-8 py-3 px-6 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4"
        style="border-color: var(--border); color: var(--muted);">

  <span>built with <a href="https://svelte.dev" target="_blank" style="color: var(--accent);">svelte</a> — open source on <a href="https://github.com/surajsays/suraj.says" target="_blank" style="color: var(--accent);">github</a></span>

<div class="flex gap-4">
  <a href="https://github.com/surajsays" target="_blank" class="footer-link">
    <i class="fa-brands fa-github"></i> ~/github
  </a>
  <a href="https://instagram.com/io.suraj" target="_blank" class="footer-link">
    <i class="fa-brands fa-instagram"></i> ~/instagram
  </a>
</div>
</footer>
