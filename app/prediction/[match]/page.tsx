import SEO from "@/components/SEO";

type PageProps = {
  params?: {
    match?: string;
  };
};

export default function MatchPrediction({ params }: PageProps) {
  const slug = params?.match ?? "";
  const teams = slug.split("-vs-");

  const team1 = teams[0] ? teams[0].toUpperCase() : "TEAM A";
  const team2 = teams[1] ? teams[1].toUpperCase() : "TEAM B";

  // Example schema for SportsEvent
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    "name": `${team1} vs ${team2} T20`,
    "sport": "Cricket",
    "startDate": "2026-03-12T19:30:00+05:30", // replace with actual match date
    "location": {
      "@type": "Place",
      "name": "M. Chinnaswamy Stadium, Bengaluru" // replace dynamically if available
    },
    "competitor": [
      { "@type": "SportsTeam", "name": team1 },
      { "@type": "SportsTeam", "name": team2 }
    ]
  };

  return (
    <main className="max-w-6xl mx-auto p-10">
      {/* Inject SEO metadata + schema */}
      <SEO
        title={`${team1} vs ${team2} Prediction | Dream11 Tips`}
        description={`Detailed prediction for ${team1} vs ${team2} with win chances, Dream11 fantasy tips, pitch report, and player stats.`}
        url={`https://todayt20prediction.vercel.app/prediction/${slug}`}
        schema={schema}
      />

      <h1 className="text-4xl font-bold mb-6">
        {team1} vs {team2} Match Prediction
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Win Probability</h2>
        <p>{team1}: 60%</p>
        <p>{team2}: 40%</p>
      </div>
    </main>
  );
}
