<div class="max-w-2xl mx-auto py-20 px-6">

  <!-- Badge -->
  <div class="inline-flex items-center gap-2 text-xs px-3 py-1 mb-8 border rounded-sm font-mono"
       style="border-color: var(--border); color: var(--muted); background: var(--surface2);">
    <span class="inline-block w-2 h-2 rounded-full" style="background: var(--accent2);"></span>
    # currently learning svelte
  </div>

  <!-- Heading -->
  <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6"
      style="font-family: 'Fraunces', serif; color: var(--text);">
    Hey, I'm <span style="color: var(--accent);font-family: 'Inconsolata';">Suraj.</span><br>
    I break things &amp;<br>
    write about it.
  </h1>

  <!-- Bio -->
  <p class="text-sm mb-8 font-mono leading-relaxed" style="color: var(--muted);">
    Developer from India. I use Arch btw.<br>
    This site is my dev journal — raw notes on what I'm learning,<br>
    mistakes I make, and things I figure out.
  </p>

  <!-- Tags -->
  <div class="flex gap-2 mb-12 flex-wrap">
    <span class="hero-tag">India</span>
    <span class="hero-tag">Building in public</span>
    <span class="hero-tag arch-tag">Arch Linux</span>
  </div>

  <!-- Terminal -->
  <div class="terminal">
    <div class="terminal-bar">
      <span class="dot r"></span>
      <span class="dot y"></span>
      <span class="dot g"></span>
      <span class="title">suraj@archlinux ~</span>
    </div>
    <div class="terminal-body">
      <div class="line">
        <span class="ps1">suraj@arch</span>
        <span style="color: var(--muted)"> ~$ </span>
        <span class="cmd">whoami</span>
      </div>
      <div class="out">a developer who learns by doing (and breaking)</div>

      <div class="line">
        <span class="ps1">suraj@arch</span>
        <span style="color: var(--muted)"> ~$ </span>
        <span class="cmd">cat current_focus.txt</span>
      </div>
      <div class="out hi">- learning svelte from scratch</div>
      <div class="out">- building surajsays.com (this site)</div>
      <div class="out">- writing about it publicly</div>

      <div class="line">
        <span class="ps1">suraj@arch</span>
        <span style="color: var(--muted)"> ~$ </span>
        <span class="cursor"></span>
      </div>
    </div>
  </div>

</div>
