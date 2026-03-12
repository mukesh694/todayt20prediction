import SEO from "@/components/SEO";

export default function Dream11() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Dream11 Team Today | Fantasy Cricket Tips",
    "author": { "@type": "Organization", "name": "TodayT20Prediction" },
    "publisher": { "@type": "Organization", "name": "TodayT20Prediction" },
    "datePublished": "2026-03-12",
    "description": "Build your winning Dream11 fantasy team with expert tips, player stats, and match analysis."
  };

  return (
    <main className="p-10">
      {/* Inject SEO metadata + schema */}
      <SEO
        title="Dream11 Team Today | Fantasy Cricket Tips"
        description="Build your winning Dream11 fantasy team with expert tips, player stats, and match analysis."
        url="https://todayt20prediction.vercel.app/dream11"
        schema={schema}
      />

      <h1 className="text-3xl font-bold mb-6">
        Dream11 Team Prediction
      </h1>

      <div className="bg-white shadow p-6 rounded-lg">
        <p>Captain: Virat Kohli</p>
        <p>Vice Captain: Rohit Sharma</p>
      </div>
    </main>
  );
}
