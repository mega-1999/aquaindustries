'use client';
import InfiniteLiveFeed from './InfiniteLiveFeed'; // Import your feed component
import React from 'react';

const AdPlaceholder = ({ side }: { side: 'Left' | 'Right' }) => (
  <div className="w-[160px] h-[600px] bg-neutral-800 border border-neutral-700 rounded-lg flex flex-col items-center justify-center text-gray-500 text-xs gap-2 sticky top-24">
    <span className="font-bold tracking-widest text-gray-600">ADVERTISEMENT</span>
    <div className="w-full h-full bg-neutral-900/50 flex items-center justify-center">
      {/* Replace this with your Google AdSense / Vimeo Ad Code */}
      {side} Sidebar Ad
    </div>
  </div>
);

export default function LiveStreamLayout() {
  return (
    <div className="min-h-screen bg-[#0A3161] text-white">
      
      {/* MAIN CONTAINER */}
      <div className="container mx-auto px-4 py-8 flex justify-center gap-6">

        {/* === LEFT AD COLUMN (Hidden on Mobile/Tablet) === */}
        {/* 'hidden xl:block' means it ONLY loads on very large screens */}
        <aside className="hidden xl:block w-[160px] shrink-0">
          <AdPlaceholder side="Left" />
        </aside>

        {/* === CENTER CONTENT (Expands to fill space) === */}
        <main className="flex-1 max-w-5xl min-w-0">
            {/* Header */}
            <div className="mb-8 border-b border-neutral-800 pb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Global Factory Live Stream</h1>
                <p className="text-gray-400">Watch real-time operations from our verified partners.</p>
            </div>

            {/* YOUR INFINITE FEED COMPONENT */}
            <InfiniteLiveFeed />
            
            {/* Example of more content below to demonstrate scrolling */}
            <div className="mt-12 space-y-4">
               <div className="h-64 bg-neutral-900 rounded-xl border border-neutral-800 p-6">
                  <h3 className="font-bold text-lg mb-2">Factory Analytics</h3>
                  <div className="h-40 bg-neutral-800/50 rounded animate-pulse"></div>
               </div>
               <div className="h-64 bg-neutral-900 rounded-xl border border-neutral-800 p-6">
                  <h3 className="font-bold text-lg mb-2">Production Output</h3>
                  <div className="h-40 bg-neutral-800/50 rounded animate-pulse"></div>
               </div>
            </div>
        </main>

        {/* === RIGHT AD COLUMN (Hidden on Mobile/Tablet) === */}
        <aside className="hidden xl:block w-[160px] shrink-0">
          <AdPlaceholder side="Right" />
        </aside>

      </div>
    </div>
  );
}
