<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/theme.js';

  onMount(() => {
    // apply saved theme on load
    applyTheme($theme);
  });

  function applyTheme(t) {
    if (t === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }

  function toggleTheme() {
    theme.update(t => {
      const next = t === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
      return next;
    });
  }
</script>

<!-- replace the button with this -->
<button onclick={toggleTheme} class="theme-btn">
  {#if $theme === 'dark'}
    <i class="fa-solid fa-sun"></i>
  {:else}
    <i class="fa-solid fa-moon"></i>
  {/if}
</button>
<style>
  .theme-btn {
    background: none;
      padding: 0.3rem 0.6rem;
    cursor: pointer;
    font-size: 0.9rem;
    color: var(--muted);
    transition: border-color 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
  }

  .theme-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
</style>
