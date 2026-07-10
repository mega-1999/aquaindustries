"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  FolderKanban, Video, BookOpen, Leaf, Mail, FileText, 
  GraduationCap, MonitorPlay, Mic, Award, FileDigit, Accessibility, Play,
  SkipForward, SkipBack, PlayCircle
} from 'lucide-react';

const resourceColumns = [
  {
    links: [
      { name: 'PROJECTS', href: '/projects', highlight: true, icon: <FolderKanban className="w-4 h-4" /> },
      { name: 'VIDEOS', href: '/videos', icon: <Video className="w-4 h-4" /> },
      { name: 'CATALOGS', href: '/catalogs', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'GREENREPORTS', href: '/sustainability', icon: <Leaf className="w-4 h-4" /> },
      { name: 'NEWSLETTER', href: '/news', icon: <Mail className="w-4 h-4" /> },
      { name: 'OUTLINE', href: '/outline-specs', icon: <FileText className="w-4 h-4" /> },
    ]
  },
  {
    links: [
      { name: 'CONTINUING ED', href: '/education', highlight: true, icon: <GraduationCap className="w-4 h-4" /> },
      { name: 'WEBINARS', href: '/webinars', icon: <MonitorPlay className="w-4 h-4" /> },
      { name: 'DETAILED PODCAST', href: '/podcasts', italic: true, icon: <Mic className="w-4 h-4" /> },
      { name: 'CERTIFICATIONS', href: '/certs', icon: <Award className="w-4 h-4" /> },
      { name: 'DATA SHEETS', href: '/data-sheets', icon: <FileDigit className="w-4 h-4" /> },
      { name: 'ADA PRODUCTS', href: '/ada', icon: <Accessibility className="w-4 h-4" /> },
    ]
  }
];

const videoPlaylist = [
  "/video/video1.mp4",
  "/video/video2.mp4",
  "/video/video3.mp4",
  "/video/video4.mp4",
  "/video/video5.mp4",
];

export const ResourceDirectory = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.warn("Video autoplay prevented by browser:", error);
      });
    }
  }, [currentVideoIndex]);

  // Advance to next video, loop to start
  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  };

  // Go to previous video, loop to end
  const playPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videoPlaylist.length) % videoPlaylist.length);
  };

  return (
    <section className="w-full bg-[#0A3161] text-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-16">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT PANEL: HEADING + DIRECTORY (Spans 7 Columns) */}
          <div className="xl:col-span-7 flex flex-col justify-between space-y-10">
            
            {/* Title Block */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[#B31942] font-mono text-[10px] font-black uppercase tracking-[0.5em] mb-4">
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.95] uppercase">
                BEYOND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B31942] to-[#B31942]">
                  SPECIFICATIONS.
                </span>
              </h2>
              <p className="mt-4 text-white/80 font-medium leading-relaxed text-sm md:text-base">
                Access our master library of engineering reports, structural videos, and technical podcasts.
              </p>
            </div>

            {/* Frosted Glass Link Directory Box */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,74,173,0.3)] flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                {resourceColumns.map((col, idx) => (
                  <ul key={idx} className="space-y-4">
                    {col.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="group flex items-center gap-4 text-xs font-black tracking-widest text-white hover:text-[#B31942] transition-colors"
                        >
                          <div className="p-2 bg-white/10 border border-white/20 group-hover:bg-[#B31942]/20 group-hover:border-[#B31942] transition-all duration-300 shrink-0">
                            {link.icon}
                          </div>
                          
                          <span className={`uppercase truncate ${link.italic ? 'italic' : ''}`}>
                            {link.name}
                          </span>

                          {link.highlight && (
                            <span className="ml-auto text-[8px] font-mono font-bold bg-white text-[#0A3161] px-2 py-0.5 tracking-widest shadow-[0_0_10px_rgba(103,232,249,0.4)] animate-pulse shrink-0">
                              NEW_NODE
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: PLAYLIST VIDEO PLAYER (Spans 5 Columns) */}
          <div className="xl:col-span-5 w-full h-full min-h-[400px]">
            {/* FIXED: Removed ALL black. Now using a pure translucent glass layer (bg-white/5) over the deep blue background */}
            <div className="relative w-full h-full    overflow-hidden group  0">
              
              {/* Absolute Positioning Wrapper */}
              <div className="absolute inset-0 p-1.5">
                <video 
                  key={currentVideoIndex}
                  ref={videoRef}
                  autoPlay 
                  muted 
                  playsInline
                  onEnded={playNextVideo}
                  className="w-full h-full object-contain"
                >
                  <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
                </video>
              </div>

        

              {/* BOTTOM HUD: Playlist Tracker & Prev/Next Icons */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                
                {/* Playlist Counter - Replaced black with frosted white glass */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/20 shadow-sm">
                  <PlayCircle className="w-3 h-3 text-[#B31942]" />
                  <span className="font-mono text-[9px] tracking-widest text-white uppercase font-bold">
                    {currentVideoIndex + 1} / {videoPlaylist.length}
                  </span>
                </div>

                {/* Icon-only Navigation Buttons - Replaced black with frosted white glass */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={playPrevVideo}
                    className="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-[#B31942] backdrop-blur-md border border-white/20 hover:border-[#B31942] text-white hover:text-white transition-all duration-300 group/btn shadow-sm"
                    aria-label="Previous Video"
                  >
                    <SkipBack className="w-4 h-4 group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>

                  <button 
                    onClick={playNextVideo}
                    className="flex justify-center items-center w-10 h-10 bg-white/10 hover:bg-[#B31942] backdrop-blur-md border border-white/20 hover:border-[#B31942] text-white hover:text-white transition-all duration-300 group/btn shadow-sm"
                    aria-label="Next Video"
                  >
                    <SkipForward className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};