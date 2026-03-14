<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/stores';

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

<nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b"
     style="background: rgba(10,10,10,0.85); border-color: var(--border);">

  <div class="flex items-center gap-8 px-6 py-4">

    <a href="/" class="font-bold text-base no-underline shrink-0" style="color: var(--text);">
      <span style="color: var(--accent)">❯</span> suraj<span style="color: var(--accent)">says</span>
    </a>

    <!-- Desktop links -->
    <div class="hidden md:flex gap-1 ml-auto">
      {#each links as link}
        <a href={link.href}
           class="text-xs px-3 py-1 transition-colors nav-link"
           class:active={$page.url.pathname === link.href}>
          {link.label}
        </a>
      {/each}
    </div>

    <!-- Hamburger -->
    <button class="md:hidden ml-auto text-xl px-3 py-1 rounded"
            style="color: var(--muted); background: none; border: none; cursor: pointer;"
            onclick={() => menuOpen = !menuOpen}>
      {menuOpen ? '✕' : '☰'}
    </button>

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

<main class="prose prose-invert mx-auto px-4 py-8 mt-20">
  {@render children()}
</main>
