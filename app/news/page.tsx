import SEO from "@/components/SEO";

export default function News() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Latest Cricket News | T20 Updates & Highlights",
    "datePublished": "2026-03-12",
    "publisher": {
      "@type": "Organization",
      "name": "TodayT20Prediction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://todayt20prediction.vercel.app/cricket.png"
      }
    },
    "description": "Read the latest cricket news, match previews, and updates from T20 leagues worldwide."
  };

  return (
    <main className="p-10">
      {/* Inject SEO metadata + schema */}
      <SEO
        title="Latest Cricket News | T20 Updates & Highlights"
        description="Read the latest cricket news, match previews, and updates from T20 leagues worldwide."
        url="https://todayt20prediction.vercel.app/news"
        schema={schema}
      />

      <h1 className="text-3xl font-bold mb-6">
        Cricket News
      </h1>

      <p>Latest match previews and updates.</p>
    </main>
  );
}
