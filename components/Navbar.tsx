import Link from "next/link";
import { JSX } from "react";

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">TodayT20Prediction</h1>

      <div className="space-x-6">

        <Link href="/">Home</Link>
        <Link href="/prediction">Prediction</Link>
        <Link href="/dream11">Dream11</Link>
        <Link href="/teams">Teams</Link>
        <Link href="/news">News</Link>

      </div>

    </nav>
  );
}