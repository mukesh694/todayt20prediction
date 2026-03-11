import Link from "next/link";
import { JSX } from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">
          TodayT20Prediction
        </h1>

        <div className="flex gap-6 text-lg">

          <Link href="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link href="/prediction" className="hover:text-yellow-300">
            Prediction
          </Link>

          <Link href="/dream11" className="hover:text-yellow-300">
            Dream11
          </Link>

          <Link href="/teams" className="hover:text-yellow-300">
            Teams
          </Link>

          <Link href="/news" className="hover:text-yellow-300">
            News
          </Link>

        </div>
      </div>
    </nav>
  );
}