<script>
	let { data } = $props();
</script>

<h1>Log</h1>

{#each data.posts as post}
	<div>
		<a href="/log/{post.slug}">{post.title}</a>
		<span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
	</div>
{/each}
