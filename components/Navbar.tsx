export default function Navbar(): JSX.Element {
    return (
      <nav className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">TodayT20Prediction</h1>
  
        <div className="space-x-6">
          <a href="/">Home</a>
          <a href="/prediction">Prediction</a>
          <a href="/dream11">Dream11</a>
          <a href="/teams">Teams</a>
          <a href="/news">News</a>
        </div>
      </nav>
    );
  }