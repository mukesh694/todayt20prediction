import MatchCard from "@/components/MatchCard";
import { getMatches } from "@/lib/cricketApi";

export default async function Home() {

  const matches = await getMatches();

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

          {matches?.slice(0,3).map((match:any) => (

            <MatchCard
              key={match.id}
              team1={match.teams[0]}
              team2={match.teams[1]}
              time={match.status}
              probability1={55}
              probability2={45}
            />

          ))}

        </div>
      </section>


      {/* Predictions */}

      <section>
        <h2 className="text-2xl font-bold mb-4">
          🏏 Today&apos;s Predictions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {matches?.slice(3,5).map((match:any) => (

            <MatchCard
              key={match.id}
              team1={match.teams[0]}
              team2={match.teams[1]}
              time={match.dateTimeGMT}
              probability1={60}
              probability2={40}
            />

          ))}

        </div>

      </section>

    </main>
  );
}