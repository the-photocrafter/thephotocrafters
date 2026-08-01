import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "../index";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Wedding Planning & Photography Blog | The Photocrafters" },
      {
        name: "description",
        content: "Get expert wedding planning tips, styling guides, and pre-wedding photoshoot advice to capture the perfect candid memories.",
      },
      { property: "og:title", content: "Wedding Planning & Photography Blog | The Photocrafters" },
      {
        property: "og:description",
        content: "Get expert wedding planning tips, styling guides, and pre-wedding photoshoot advice to capture the perfect candid memories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://thephotocrafters.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://thephotocrafters.in/blog" },
    ],
  }),
  component: BlogListingPage,
});

function BlogListingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--olive)]">
            Our Insights
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            The Photocrafters Blog
          </h1>
          <p className="mt-4 text-foreground/60">
            Stories, tips, and styling guides curated by our professional crew to help you prepare for a perfect celebration.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
