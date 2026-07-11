'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Search, Signal } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

// === SAMPLE DATA: In real app, fetch this from your DB ===
// You need a database table with: id, factory_name, location, thumbnail_url, vimeo_id
const sampleStreams = [
  { id: 1, name: "METALSVERSE Forge USA - Plant A", location: "Texas, USA", thumbnail: "/assets/factory1.jpg", vimeoId: "76979871" }, // Sample Vimeo ID
  { id: 2, name: "METALSVERSE Casting India", location: "Gujarat, India", thumbnail: "/assets/factory2.jpg", vimeoId: "76979871" },
  { id: 3, name: "MWA Unit 4", location: "Ontario, Canada", thumbnail: "/assets/factory3.jpg", vimeoId: "76979871" },
  { id: 4, name: "Precision Molds UK", location: "London, UK", thumbnail: "/assets/factory4.jpg", vimeoId: "76979871" },
  { id: 5, name: "Euro Fabricators", location: "Berlin, Germany", thumbnail: "/assets/factory5.jpg", vimeoId: "76979871" },
  { id: 6, name: "Asian Steel Works", location: "Tokyo, Japan", thumbnail: "/assets/factory6.jpg", vimeoId: "76979871" },
];

export default function LiveFactoryFeed() {
  const [selectedStream, setSelectedStream] = useState<typeof sampleStreams[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter logic
  const filteredStreams = sampleStreams.filter(stream =>
    stream.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stream.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full py-12 bg-[#0A3161] text-white">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
              <Signal className="text-[#B31942] animate-pulse" />
              Global Live Operations
            </h2>
            <p className="text-[#0A3161]/60 mt-2">
              Real-time monitoring of 50,000+ active manufacturing units.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A3161]/60" />
            <input
              type="text"
              placeholder="Search by Factory or Country..."
              className="w-full pl-10 pr-4 py-2 bg-[#0A3161] border border-[#0A3161]/50 rounded-full focus:border-[#B31942] focus:outline-none text-sm transition-colors"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* FACTORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStreams.map((stream) => (
            <div
              key={stream.id}
              className="group relative bg-[#0A3161] rounded-xl overflow-hidden cursor-pointer border border-[#0A3161]/50 hover:border-[#B31942] transition-all hover:-translate-y-1"
              onClick={() => setSelectedStream(stream)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 w-full bg-[#0A3161]">
                {/* Replace src with real images */}
                <div className="absolute inset-0 bg-[#0A3161] flex items-center justify-center text-[#0A3161]/80">
                  {/* Placeholder if image missing */}
                  <span className="text-xs">Thumbnail: {stream.name}</span>
                </div>
                {/* <Image src={stream.thumbnail} alt={stream.name} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" /> */}

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#B31942] text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-lg">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A3161]/40">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <Play className="w-5 h-5 text-white fill-current" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-sm truncate">{stream.name}</h3>
                <p className="text-xs text-[#0A3161]/60 mt-1 flex items-center gap-1">
                  📍 {stream.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* VIDEO MODAL (Dialog) */}
        <Dialog open={!!selectedStream} onOpenChange={() => setSelectedStream(null)}>
          <DialogContent className="bg-[#0A3161] border-[#0A3161] text-white max-w-4xl p-0 overflow-hidden">
            <DialogHeader className="p-4 absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-[#0A3161]/80 to-transparent">
              <DialogTitle className="text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-[#B31942] rounded-full animate-pulse" />
                {selectedStream?.name}
              </DialogTitle>
            </DialogHeader>

            <div className="aspect-video w-full bg-[#0A3161] relative">
              {selectedStream && (
                <iframe
                  src={`https://player.vimeo.com/video/${selectedStream.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedStream.name}
                ></iframe>
              )}
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
