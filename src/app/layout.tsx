import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Aqua Industries | Ductile Iron Waterworks Fittings & Civil Infrastructure",
  description:
    "American manufacturer of AWWA C153 & C110 ductile iron waterworks fittings, wedge-action joint restraints, municipal castings, and civil drainage components.",
  keywords: [
    "Aqua Industries",
    "waterworks fittings",
    "ductile iron fittings",
    "AWWA C153",
    "AWWA C110",
    "joint restraint systems",
    "municipal castings",
    "manhole frames",
    "pipe saddles",
    "NSF 61 certified fittings",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#0082fc] font-sans selection:bg-[#5fd4fd] selection:text-[#0082fc]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
