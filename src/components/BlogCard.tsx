import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[color:var(--olive)]/12 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail Container with fixed aspect ratio to prevent CLS */}
      <Link
        to="/blog/$postSlug"
        params={{ postSlug: post.slug }}
        className="block aspect-[3/2] w-full overflow-hidden bg-muted"
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        {/* Category & Read Time */}
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-[color:var(--olive)]">
          <span className="rounded-full bg-[color:var(--olive-tint)] px-3 py-1">
            {post.category}
          </span>
          <span className="text-foreground/50">{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-[color:var(--olive)]">
          <Link to="/blog/$postSlug" params={{ postSlug: post.slug }}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-6 border-t border-[color:var(--olive)]/10 pt-4">
          <Link
            to="/blog/$postSlug"
            params={{ postSlug: post.slug }}
            className="inline-flex items-center text-sm font-semibold text-[color:var(--olive)] transition-colors hover:text-[color:var(--olive-soft)]"
          >
            Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
