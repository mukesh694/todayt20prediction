export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">

      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-8">

        {/* Top Teams */}
        <div>
          <h3 className="font-bold mb-4">TOP TEAMS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>India</li>
            <li>Australia</li>
            <li>England</li>
            <li>New Zealand</li>
            <li>South Africa</li>
          </ul>
        </div>

        {/* Top Players */}
        <div>
          <h3 className="font-bold mb-4">TOP PLAYERS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Virat Kohli</li>
            <li>Rohit Sharma</li>
            <li>Babar Azam</li>
            <li>Shubman Gill</li>
            <li>Kane Williamson</li>
          </ul>
        </div>

        {/* Top Series */}
        <div>
          <h3 className="font-bold mb-4">TOP SERIES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Indian Premier League</li>
            <li>Big Bash League</li>
            <li>PSL</li>
            <li>CPL</li>
            <li>T20 Blast</li>
          </ul>
        </div>

        {/* More */}
        <div>
          <h3 className="font-bold mb-4">MORE</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Cricket News</li>
            <li>Match Predictions</li>
            <li>Dream11 Teams</li>
            <li>Pitch Reports</li>
            <li>Player Stats</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">

        <p>© 2026 TodayT20Prediction.com</p>

      </div>

    </footer>
  );
}