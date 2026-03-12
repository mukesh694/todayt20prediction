import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Today T20 Prediction | IPL Match Prediction & Dream11 Team",
    template: "%s | TodayT20Prediction",
  },
  description:
    "Get today's IPL and T20 match predictions, Dream11 team predictions, pitch reports, player stats and cricket analysis for all major matches.",
  keywords: [
    "today match prediction",
    "IPL match prediction",
    "Dream11 team prediction",
    "cricket prediction",
    "today cricket match prediction",
    "IPL prediction today",
    "T20 match prediction",
    "fantasy cricket prediction",
  ],
  metadataBase: new URL("https://todayt20prediction.vercel.app"),
  icons: {
    icon: "/cricket.png",
  },
  openGraph: {
    title: "Today T20 Prediction | IPL Match Prediction",
    description:
      "Daily IPL and T20 match predictions with Dream11 teams, pitch reports and cricket analysis.",
    url: "https://todayt20prediction.vercel.app",
    siteName: "TodayT20Prediction",
    images: [
      {
        url: "/cricket.png",
        width: 1200,
        height: 630,
        alt: "Today T20 Match Predictions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Today T20 Prediction | IPL Match Prediction",
    description: "Daily IPL match predictions and Dream11 fantasy teams.",
    images: ["/cricket.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Canonical tag */}
        <link
          rel="canonical"
          href="https://todayt20prediction.vercel.app"
        />

        {/* JSON-LD Schema for homepage */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "TodayT20Prediction",
            "url": "https://todayt20prediction.vercel.app",
            "description":
              "Get today's IPL and T20 match predictions, Dream11 team predictions, pitch reports, player stats and cricket analysis for all major matches.",
            "publisher": {
              "@type": "Organization",
              "name": "TodayT20Prediction",
              "logo": {
                "@type": "ImageObject",
                "url": "https://todayt20prediction.vercel.app/cricket.png",
              },
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target":
                "https://todayt20prediction.vercel.app/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
