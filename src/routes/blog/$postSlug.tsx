import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";
import { Header, Footer } from "../index";
import { blogPosts } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$postSlug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.postSlug);
    if (!post) {
      throw new Response("Post Not Found", { status: 404 });
    }
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData || !loaderData.post) {
      return {
        meta: [{ title: "Article Not Found | The Photocrafters Blog" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | The Photocrafters` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | The Photocrafters` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: `https://thephotocrafters.in${post.image}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: `${post.title} | The Photocrafters` },
        { name: "twitter:description", content: post.excerpt },
      ],
      links: [
        { rel: "canonical", href: `https://thephotocrafters.in/blog/${post.slug}` },
      ],
    };
  },
  component: BlogPostPage,
});

function formatText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={index} className="mt-8 font-display text-xl md:text-2xl font-semibold text-foreground">
          {trimmed.replace("### ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={index} className="mt-10 font-display text-2xl md:text-3xl font-semibold text-foreground">
          {trimmed.replace("## ", "")}
        </h2>
      );
    }
    if (trimmed.startsWith("1. ") || trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").map((item) => {
        const text = item.replace(/^(?:\d+\.|\*|-)\s+/, "");
        return formatText(text);
      });
      const isOrdered = trimmed.startsWith("1. ");
      const ListTag = isOrdered ? "ol" : "ul";
      const listClass = isOrdered 
        ? "list-decimal pl-6 mt-4 space-y-2.5 text-foreground/80" 
        : "list-disc pl-6 mt-4 space-y-2.5 text-foreground/80";

      return (
        <ListTag key={index} className={listClass}>
          {items.map((itemText, i) => (
            <li key={i} className="text-sm md:text-base leading-relaxed">
              {itemText}
            </li>
          ))}
        </ListTag>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote key={index} className="my-6 border-l-4 border-[color:var(--olive)] bg-[color:var(--olive-tint)]/50 py-3 pl-4 pr-3 italic rounded-r-xl text-foreground/85">
          {formatText(trimmed.replace(/^>\s+/, ""))}
        </blockquote>
      );
    }
    return (
      <p key={index} className="mt-4 text-sm md:text-base leading-relaxed text-foreground/70">
        {formatText(trimmed)}
      </p>
    );
  });
}

function BlogPostPage() {
  const { post } = useLoaderData({ from: "/blog/$postSlug" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        {/* Back to Blog */}
        <Link
          to="/blog"
          className="inline-flex items-center text-sm font-semibold text-[color:var(--olive)] transition-colors hover:text-[color:var(--olive-soft)]"
        >
          ← Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mt-8">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--olive)]">
            <span className="rounded-full bg-[color:var(--olive-tint)] px-3 py-1">
              {post.category}
            </span>
            <span className="text-foreground/40">•</span>
            <span className="text-foreground/50">{post.readTime}</span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-[color:var(--olive)]/10 pb-8 text-sm text-foreground/60">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </header>

        {/* Cover Image */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-muted aspect-[16:9] w-full">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Article Content */}
        <article className="mt-8 prose prose-slate max-w-none">
          {renderMarkdown(post.content)}
        </article>
      </main>
      <Footer />
    </div>
  );
}
