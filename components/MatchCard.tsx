import Link from "next/link";

type MatchCardProps = {
  team1: string;
  team2: string;
  time: string;
  probability1: number;
  probability2: number;
};

export default function MatchCard({
  team1,
  team2,
  time,
  probability1,
  probability2,
}: MatchCardProps) {

  const slug = `${team1.toLowerCase()}-vs-${team2.toLowerCase()}`;

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">

      <h3 className="text-xl font-bold mb-2">
        {team1} vs {team2}
      </h3>

      <p className="text-gray-600 mb-2">
        Match Time: {time}
      </p>

      <p>{team1} Win Probability: {probability1}%</p>
      <p>{team2} Win Probability: {probability2}%</p>

      <Link href={`/prediction/${slug}`}>
        <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          View Prediction
        </button>
      </Link>

    </div>
  );
}