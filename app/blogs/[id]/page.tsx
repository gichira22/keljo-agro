// app/blogs/[id]/page.tsx
import SingleBlog from '../SingleBlog';

interface PageProps {
  params: {
    id: string;
  };
}

export default function SingleBlogPage({ params }: PageProps) {
  return <SingleBlog params={params} />;
}

// Generate static paths
export async function generateStaticParams() {
  const { blogPosts } = await import('../BlogData');
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}