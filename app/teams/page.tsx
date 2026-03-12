import SEO from "@/components/SEO";

export default function Teams() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    "name": "IPL Teams",
    "sport": "Cricket",
    "url": "https://todayt20prediction.vercel.app/teams",
    "member": [
      { "@type": "SportsTeam", "name": "Royal Challengers Bangalore" },
      { "@type": "SportsTeam", "name": "Mumbai Indians" },
      { "@type": "SportsTeam", "name": "Chennai Super Kings" },
      { "@type": "SportsTeam", "name": "Kolkata Knight Riders" }
    ]
  };

  return (
    <main className="p-10">
      {/* Inject SEO metadata + schema */}
      <SEO
        title="IPL Teams | Squads & Player Profiles"
        description="Explore IPL cricket teams including Royal Challengers Bangalore, Mumbai Indians, Chennai Super Kings, and Kolkata Knight Riders with squad details and player profiles."
        url="https://todayt20prediction.vercel.app/teams"
        schema={schema}
      />

      <h1 className="text-3xl font-bold mb-6">
        IPL Teams
      </h1>

      <ul className="space-y-2">
        <li>Royal Challengers Bangalore</li>
        <li>Mumbai Indians</li>
        <li>Chennai Super Kings</li>
        <li>Kolkata Knight Riders</li>
      </ul>
    </main>
  );
}
