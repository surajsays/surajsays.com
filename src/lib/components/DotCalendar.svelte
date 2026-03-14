<script>
  import { goto } from '$app/navigation';

  let { entries = [] } = $props();

  const monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];

  const today = new Date();
  let viewYear  = $state(today.getFullYear());
  let viewMonth = $state(today.getMonth());

  let entryMap = $derived(Object.fromEntries(entries.map(e => [e.date, e])));
  let daysInMonth = $derived(new Date(viewYear, viewMonth + 1, 0).getDate());
  let todayStr = $derived(`${today.getFullYear()}-${pad(today.getMonth()+1)}-${pad(today.getDate())}`);

  let days = $derived(Array.from({ length: daysInMonth }, (_, i) => {
    const d       = i + 1;
    const dateStr = `${viewYear}-${pad(viewMonth+1)}-${pad(d)}`;
    return {
      d,
      dateStr,
      entry:   entryMap[dateStr] || null,
      isToday: dateStr === todayStr,
    };
  }));

  function pad(n) { return String(n).padStart(2, '0'); }

  function prevMonth() {
    viewMonth--;
    if (viewMonth < 0) { viewMonth = 11; viewYear--; }
  }

  function nextMonth() {
    viewMonth++;
    if (viewMonth > 11) { viewMonth = 0; viewYear++; }
  }

  function handleDotClick(day) {
    if (day.entry) goto(`/log/${day.entry.slug}`);
  }

  let tooltip = $state({ visible: false, text: '', x: 0, y: 0 });

  function showTip(e, text) {
    const r = e.target.getBoundingClientRect();
    tooltip = { visible: true, text, x: r.left + r.width / 2, y: r.top - 8 };
  }

  function hideTip() {
    tooltip = { ...tooltip, visible: false };
  }
</script>

<div class="dot-cal">
  <div class="dot-cal-header">
    <button class="cal-arrow" onclick={prevMonth}>←</button>
    <span class="cal-month">{monthNames[viewMonth]} {viewYear}</span>
    <button class="cal-arrow" onclick={nextMonth}>→</button>
  </div>

  <div class="dot-cal-days">
    {#each days as day}
      <button
        class="day-dot"
        class:has-entry={day.entry}
        class:is-today={day.isToday}
        class:no-entry={!day.entry}
        disabled={!day.entry}
        onclick={() => handleDotClick(day)}
        onmouseenter={(e) => day.entry && showTip(e, day.entry.title)}
        onmouseleave={hideTip}
        aria-label={day.entry ? day.entry.title : `${day.d} — no entry`}
      >
        {day.d}
      </button>
    {/each}
  </div>

  <div class="dot-cal-legend">
    <span class="ld filled"></span><span>has entry</span>
    <span class="ld empty"></span><span>no entry</span>
    <span class="ld today-dot"></span><span>today</span>
  </div>
</div>

{#if tooltip.visible}
  <div class="float-tip" style="left:{tooltip.x}px; top:{tooltip.y}px">
    {tooltip.text}
  </div>
{/if}

<style>
  .dot-cal {
    background: var(--bg2, #13161e);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 1.1rem 1.4rem;
    margin-bottom: 2rem;
  }
  .dot-cal-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .cal-month {
    font-size: 11px;
    color: var(--muted);
    letter-spacing: 0.1em;
    flex: 1;
    text-align: center;
  }
  .cal-arrow {
    background: none;
    border: 1px solid var(--border);
    color: var(--muted);
    border-radius: 3px;
    width: 22px;
    height: 22px;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s;
    font-family: 'JetBrains Mono', monospace;
  }
  .cal-arrow:hover { border-color: var(--accent); color: var(--accent); }
  .dot-cal-days { display: flex; flex-wrap: wrap; gap: 6px; }
  .day-dot {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid var(--border);
    background: var(--bg3, #1a1d28);
    color: var(--muted);
    font-size: 9px;
    font-family: 'JetBrains Mono', monospace;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s, background 0.15s;
    flex-shrink: 0;
    padding: 0;
  }
  .day-dot.has-entry {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
    cursor: pointer;
    font-weight: 700;
  }
  .day-dot.has-entry:hover { transform: scale(1.25); background: #f5a855; }
  .day-dot.is-today { border-color: var(--accent2); color: var(--accent2); }
  .day-dot.is-today.has-entry { box-shadow: 0 0 0 2px var(--accent2); }
  .dot-cal-legend {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid var(--border);
    font-size: 10px;
    color: var(--muted);
  }
  .ld { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .ld.filled    { background: var(--accent); }
  .ld.empty     { background: var(--bg3, #1a1d28); border: 1px solid var(--border); }
  .ld.today-dot { background: transparent; border: 1px solid var(--accent2); }
  .float-tip {
    position: fixed;
    transform: translate(-50%, -100%);
    background: var(--bg3, #1a1d28);
    border: 1px solid var(--border);
    color: var(--text);
    font-size: 10px;
    font-family: 'JetBrains Mono', monospace;
    padding: 5px 9px;
    border-radius: 4px;
    pointer-events: none;
    z-index: 200;
  }
</style>
