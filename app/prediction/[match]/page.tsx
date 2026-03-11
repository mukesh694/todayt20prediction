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
  
    return (
      <main className="max-w-6xl mx-auto p-10">
  
        <h1 className="text-4xl font-bold mb-6">
          {team1} vs {team2} Match Prediction
        </h1>
  
        <div className="bg-white shadow-lg rounded-lg p-6">
  
          <h2 className="text-2xl font-semibold mb-4">
            Win Probability
          </h2>
  
          <p>{team1}: 60%</p>
          <p>{team2}: 40%</p>
  
        </div>
  
      </main>
    );
  }