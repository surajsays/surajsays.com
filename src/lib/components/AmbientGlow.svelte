<script>
  import { theme } from '$lib/theme.js';
</script>

<div class="ambient-glow" class:light={$theme === 'light'}></div>

<style>
 /* dark theme — lavender and violet */
  .ambient-glow {
    position: fixed;
    top: -200px;
    left: -200px;
    width: 1500px;
    height: 1500px;
    z-index: 0;
    pointer-events: none;
    border-radius: 50%;
    animation: fadeIn 1.5s ease forwards, drift 8s ease-in-out infinite;
    opacity: 0;

    background: radial-gradient(
      circle,
      rgba(180, 100, 255, 0.18) 0%,
      rgba(140, 80, 255, 0.12) 25%,
      rgba(100, 60, 200, 0.08) 50%,
      transparent 70%
    );
  }
  /* light theme — holi colors! */
  .ambient-glow.light {
    background: radial-gradient(
      circle,
      rgba(255, 80, 120, 0.15) 0%,
      rgba(255, 180, 0, 0.12) 25%,
      rgba(80, 200, 120, 0.10) 50%,
      rgba(100, 120, 255, 0.08) 65%,
      transparent 75%
    );
    width: 800px;
    height: 800px;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to   { opacity: 1; transform: scale(1); }
  }

  @keyframes drift {
    0%   { transform: translate(0px, 0px) scale(1); }
    33%  { transform: translate(30px, -20px) scale(1.05); }
    66%  { transform: translate(-20px, 30px) scale(0.95); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
</style>
