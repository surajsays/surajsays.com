const posts = import.meta.glob('../../content/blog/*.md', { eager: true });

export function load() {
  const allPosts = Object.entries(posts).map(([path, post]) => ({
    slug: path.split('/').pop().replace('.md', ''),
    title: post.metadata.title,
    date: post.metadata.date,
  })).sort((a, b) => new Date(b.date) - new Date(a.date));

  return { posts: allPosts };
}
