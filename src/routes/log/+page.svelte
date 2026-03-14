<script>
  import DotCalendar from '$lib/components/DotCalendar.svelte';
  let { data } = $props();

  const entries = data.posts.map(p => ({
    date: p.date.split('T')[0],
    slug: p.slug,
    title: p.title
  }));
</script>

<h1>Log</h1>

<DotCalendar {entries} />

{#each data.posts as post}
  <div>
    <a href="/log/{post.slug}">{post.title}</a>
    <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
  </div>
{/each}
