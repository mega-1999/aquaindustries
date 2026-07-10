import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import { Toaster } from '@/components/ui/sonner';
import FixedQuoteBtn from './components/FixedQuoteBtn';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 1. Add Metadata (Title & Description)
export const metadata: Metadata = {
  title: "Mega Foundry | B2B Manufacturing Portal",
  description: "The complete platform for foundries, forgers, and fabricators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         {/* Optional: Add custom favicon links here if needed */}
         <link rel="icon" type="image/png" href="/apple-touch-icon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A3161]/5 text-white`}>
        
        {/* Render the Page Content */}
        <FixedQuoteBtn />
        {children}
        {/* ✅ 2. Add Toaster so popups work across the app */}
        <Toaster />
        
      </body>
    </html>
  );
}