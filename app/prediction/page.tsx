import SEO from "@/components/SEO";

export default function Prediction() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Today’s Match Predictions",
    "description": "Browse today’s IPL and T20 match predictions with win chances, Dream11 fantasy teams, and expert analysis.",
    "url": "https://todayt20prediction.vercel.app/prediction"
  };

  return (
    <main className="max-w-7xl mx-auto p-10">
      {/* General SEO for listing page */}
      <SEO
        title="Today’s Match Predictions | IPL & Dream11 Tips"
        description="Browse today’s IPL and T20 match predictions with win chances, Dream11 fantasy teams, and expert analysis."
        url="https://todayt20prediction.vercel.app/prediction"
        schema={schema}
      />

      <h1 className="text-3xl font-bold mb-6">
        Today&apos;s Match Predictions
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold">RCB vs MI</h2>
          <p>RCB Win Chance: 62%</p>
          <p>MI Win Chance: 38%</p>
        </div>
      </div>
    </main>
  );
}
