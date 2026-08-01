import { createFileRoute } from "@tanstack/react-router";
import { Header, Gallery, Footer } from "./index";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Candid Wedding & Event Photography Gallery" },
      {
        name: "description",
        content: "View our portfolio of beautiful candid wedding photos, pre-wedding shoots, and highlights captured across Kerala, Bangalore, Chennai, and South India.",
      },
      { property: "og:title", content: "Candid Wedding & Event Photography Gallery" },
      {
        property: "og:description",
        content: "View our portfolio of beautiful candid wedding photos, pre-wedding shoots, and highlights captured across Kerala, Bangalore, Chennai, and South India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://thephotocrafters.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://thephotocrafters.in/gallery" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-6">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
