import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllPosts, getPost } from "@/lib/blog";
import { FooterSection } from "@/components/layout/sections/footer";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // post.html is compiled at build time from first-party markdown in
  // content/blog/ (static export — no user-supplied content can reach it).
  const articleHtml = { __html: post.html };

  return (
    <>
      <main className="container py-16 lg:py-24">
        <article className="mx-auto max-w-(--breakpoint-md)">
          <div className="mono-label text-primary mb-4 text-xs">
            <Link href="/blog" className="hover:underline">
              {"/// Insights"}
            </Link>
            {post.published ? ` — ${post.published}` : null}
            {post.readingTime ? ` · ${post.readingTime}` : null}
          </div>
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">{post.title}</h1>
          <p className="text-muted-foreground mb-10 text-sm">{post.author}</p>
          <div className="article" dangerouslySetInnerHTML={articleHtml} />
        </article>
      </main>
      <FooterSection />
    </>
  );
}
