<script>
	const posts = import.meta.glob('../../content/log/*.md', { eager: true });

	const allPosts = Object.entries(posts).map(([path, post]) => ({
		slug: path.split('/').pop().replace('.md', ''),
		title: post.metadata.title,
		date: post.metadata.date,
	})).sort((a, b) => new Date(b.date) - new Date(a.date));
</script>

<h1>Log</h1>

{#each allPosts as post}
	<div>
		<a href="/log/{post.slug}">{post.title}</a>
		<span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
	</div>
{/each}
