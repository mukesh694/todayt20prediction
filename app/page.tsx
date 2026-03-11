import MatchCard from "@/components/MatchCard";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-10 space-y-10">

      <h1 className="text-4xl font-bold text-center">
        Today T20 Match Predictions
      </h1>

      {/* Live Matches */}

      <section>
        <h2 className="text-2xl font-bold mb-4">
          🔥 Live Matches
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <MatchCard
            team1="RCB"
            team2="MI"
            time="Live Now"
            probability1={62}
            probability2={38}
          />

          <MatchCard
            team1="CSK"
            team2="KKR"
            time="Starting Soon"
            probability1={55}
            probability2={45}
          />

          <MatchCard
            team1="SRH"
            team2="DC"
            time="Upcoming"
            probability1={51}
            probability2={49}
          />

        </div>
      </section>

      {/* Predictions */}

      <section>
        <h2 className="text-2xl font-bold mb-4">
          🏏 Today&apos;s Predictions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <MatchCard
            team1="RCB"
            team2="MI"
            time="Today 7:30 PM"
            probability1={62}
            probability2={38}
          />

          <MatchCard
            team1="CSK"
            team2="KKR"
            time="Today 3:30 PM"
            probability1={55}
            probability2={45}
          />

        </div>

      </section>

    </main>
  );
}