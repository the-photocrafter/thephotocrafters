import { createFileRoute } from "@tanstack/react-router";
import { Header, Packages, Builder, Footer } from "./index";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Custom Wedding & Event Photography Packages" },
      {
        name: "description",
        content: "Explore customizable wedding and candid event photography packages. Calculate custom pricing for photographers, albums, and cinematic highlight videos.",
      },
      { property: "og:title", content: "Custom Wedding & Event Photography Packages" },
      {
        property: "og:description",
        content: "Explore customizable wedding and candid event photography packages. Calculate custom pricing for photographers, albums, and cinematic highlight videos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://thephotocrafters.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://thephotocrafters.in/packages" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-6">
        <Packages />
        <Builder />
      </main>
      <Footer />
    </div>
  );
}
