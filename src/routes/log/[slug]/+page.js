const posts = import.meta.glob('../../../content/log/*.md', { eager: true });

export function entries() {
  return Object.keys(posts).map((path) => ({
    slug: path.split('/').pop().replace('.md', '')
  }));
}

export async function load({ params }) {
  const post = posts[`../../../content/log/${params.slug}.md`];

  if (!post) {
    throw new Error(`Post not found: ${params.slug}`);
  }

  return {
    title: post.metadata.title,
    date: post.metadata.date,
    content: post.default
  };
}
