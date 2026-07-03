import fs from "fs";
import path from "path";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  author: string;
  published: string;
  readingTime: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostMeta {
  html: string;
}

function parsePost(slug: string, raw: string): BlogPost {
  const lines = raw.split("\n");
  let title = slug;
  let author = "Taurus AI Research Team";
  let published = "";
  let readingTime = "";
  let bodyStart = 0;

  for (let i = 0; i < Math.min(lines.length, 12); i++) {
    const line = lines[i].trim();
    if (line.startsWith("# ")) {
      title = line.slice(2).trim();
      bodyStart = i + 1;
    } else if (line.startsWith("**Author:**")) {
      author = line.replace("**Author:**", "").trim();
      bodyStart = i + 1;
    } else if (line.startsWith("**Published:**")) {
      published = line.replace("**Published:**", "").trim();
      bodyStart = i + 1;
    } else if (line.startsWith("**Reading Time:**")) {
      readingTime = line.replace("**Reading Time:**", "").trim();
      bodyStart = i + 1;
    }
  }

  const body = lines.slice(bodyStart).join("\n").trim();
  const firstParagraph = body.split("\n\n").find((p) => p.trim() && !p.trim().startsWith("#"));
  const excerpt = (firstParagraph ?? "").replace(/\s+/g, " ").slice(0, 220).trim() + "…";
  const html = marked.parse(body, { async: false }) as string;

  return { slug, title, author, published, readingTime, excerpt, html };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePost(f.replace(/\.md$/, ""), fs.readFileSync(path.join(BLOG_DIR, f), "utf8")))
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
