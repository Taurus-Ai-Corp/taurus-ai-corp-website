import Link from "next/link";

import { getAllPosts } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FooterSection } from "@/components/layout/sections/footer";
import SectionHeader from "@/components/layout/section-header";

export const metadata = {
  title: "Insights",
  description:
    "Expert perspectives on quantum-safe security, enterprise automation, regulatory compliance, and the future of financial infrastructure."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <main className="container py-16 lg:py-24">
        <SectionHeader
          subTitle="Insights"
          title="Industry Insights & Thought Leadership"
          description="Expert perspectives on quantum-safe security, enterprise automation, regulatory compliance, and the future of financial infrastructure."
        />
        <div className="mx-auto grid max-w-(--breakpoint-lg) gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group">
              <Card className="bg-muted h-full transition-colors group-hover:border-primary">
                <CardHeader>
                  <div className="mono-label text-primary mb-2 text-xs">
                    {post.published}
                    {post.readingTime ? ` · ${post.readingTime}` : null}
                  </div>
                  <CardTitle className="text-xl leading-snug">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <FooterSection />
    </>
  );
}
