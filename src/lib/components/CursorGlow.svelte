<script>
  import { onMount } from 'svelte';
  import{theme} from '$lib/theme';

  // stores mouse position — updates reactively on every move
  let mouseX = $state(0);
  let mouseY = $state(0);

  // visible controls whether glow shows at all
  // starts false so no glow until mouse enters page
  let visible = $state(false);

  onMount(() => {
    // update position on every mouse move
    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      visible = true; // show glow once mouse is detected
    }

    // hide glow when mouse leaves the browser window
    function handleMouseLeave() {
      visible = false;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // cleanup when component is destroyed
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  });
</script>


<!-- 
  this div is the glow effect itself
  it's a fixed position element that covers the whole page
  pointer-events: none means it doesn't block clicks
  opacity changes based on visible state
-->
{#if $theme === 'dark'}
{#if visible}
  <div
    class="glow"
    style="--x:{mouseX}px; --y:{mouseY}px;"
    >
  </div>
  
{/if}
{/if}

<style>
  .glow {
    /* fixed means it stays on screen even when scrolling */
    position: fixed;

    /* cover the entire screen */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    /* sits above background but below content */
    z-index:- 1;

    /* don't block mouse clicks or hover events */
    pointer-events: none;

    /* the gradient follows --x and --y CSS variables
       which we set from mouseX and mouseY in Svelte */
    background: radial-gradient(
      20px circle at var(--x) var(--y),
      rgba(36, 246, 253, 0.8),
      transparent 80%
    );

    /* smooth fade in */
    transition: opacity 0.3s ease;
  }
</style>
