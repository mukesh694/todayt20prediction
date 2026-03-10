import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <header className="bg-blue-800 text-white text-center py-6 text-3xl font-bold">
        Today T20 Prediction
      </header>

      <div className="max-w-6xl mx-auto p-8 space-y-10">

        {/* Live Matches */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🔥 Live Matches</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-5 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold">RCB vs MI</h3>
              <p>Status: Live</p>
            </div>

            <div className="border p-5 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold">CSK vs KKR</h3>
              <p>Status: Starting Soon</p>
            </div>

            <div className="border p-5 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-xl font-semibold">SRH vs DC</h3>
              <p>Status: Upcoming</p>
            </div>
          </div>
        </section>

        {/* Predictions */}
        <section>
          <h2 className="text-2xl font-bold mb-4">🏏 Today's Match Predictions</h2>

          <div className="border p-6 rounded-lg shadow-md bg-gray-50">
            <h3 className="text-xl font-semibold">RCB vs MI</h3>
            <p className="mt-2">RCB Win Probability: 62%</p>
            <p>MI Win Probability: 38%</p>
          </div>
        </section>

        {/* Match Analysis */}
        <section>
          <h2 className="text-2xl font-bold mb-4">📊 Match Analysis</h2>

          <div className="border p-6 rounded-lg shadow-md bg-gray-50">
            <p>Team comparison, pitch report, and player statistics.</p>
          </div>
        </section>

        {/* News */}
        <section>
          <h2 className="text-2xl font-bold mb-4">📰 Cricket News</h2>

          <div className="border p-6 rounded-lg shadow-md bg-gray-50">
            <p>Latest cricket news and updates.</p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        © 2026 TodayT20Prediction.com
      </footer>

    </main>
  );
}