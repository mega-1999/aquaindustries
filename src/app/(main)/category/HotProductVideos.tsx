'use client';

import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';

// 1. Import the Library & Video Plugin
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export interface VideoItem {
  id: number;
  title: string;
  videoUrl: string;
}

interface HotProductVideosProps {
  title: string;
  videos?: VideoItem[];
  videoUrl?: string;
  videoName?: string;
}

export default function HotProductVideos({ title, videos, videoUrl, videoName }: HotProductVideosProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // 1. Normalize data
  const videoList: VideoItem[] = videos && videos.length > 0
    ? videos
    : videoUrl
      ? [{ id: 1, title: videoName || "Product Video", videoUrl: videoUrl }]
      : [];

  if (videoList.length === 0) return null;

  // 2. Prepare Lightbox Slides (Unique items only)
  const slides = videoList.map(v => ({
    type: "video" as const,
    width: 1280,
    height: 720,
    sources: [
      {
        src: v.videoUrl,
        type: "video/mp4"
      }
    ]
  }));

  // 3. Create the Loop List: Duplicate the list enough times to fill the screen for smooth scrolling
  // We combine the list with itself to create the seamless loop effect
  const loopList = [...videoList, ...videoList, ...videoList, ...videoList];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play().catch(() => { });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 mx-auto">

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">
          {title}
        </h2>

        {/* MARQUEE CONTAINER 
            group/marquee allows us to pause the animation when hovering over this specific area
        */}
        <div className="relative w-full overflow-hidden group/marquee">
          
          {/* SCROLLING TRACK */}
          {/* We use inline style for animation to ensure it works without Tailwind config changes */}
          <div 
            className="flex gap-4 w-max animate-infinite-scroll group-hover/marquee:paused"
            style={{
                // Ensure the animation is seamless. Speed can be adjusted by changing '40s'
                animation: `infinite-scroll ${videoList.length * 5}s linear infinite` 
            }}
          >
            {loopList.map((video, idx) => (
              <div
                // Use a combination of ID and index to ensure unique keys in the loop
                key={`${video.id}-${idx}`} 
                className="min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  // Important: Use modulo (%) to map the clicked duplicate back to the original index
                  setIndex(idx % videoList.length);
                  setOpen(true);
                }}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-200 bg-[#0A3161] mb-3 shadow-sm hover:shadow-md transition-all">
                  <video
                    src={video.videoUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-[#0A3161]/40 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:bg-red-600/80 group-hover:border-red-600 transition-colors">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* ACTUAL LIGHTBOX COMPONENT */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Video]}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .9)" },
            icon: { color: "white" }
          }}
          video={{
            autoPlay: true,
            controls: true,
          }}
        />

        {/* Custom Styles for the Animation */}
        <style jsx>{`
          @keyframes infinite-scroll {
            from {
              transform: translateX(0);
            }
            to {
              /* Move by -25% because we quadrupled the list (4 sets). 
                 Moving 1 set length (-25%) creates the seamless loop. */
              transform: translateX(-25%);
            }
          }
          
          .animate-infinite-scroll {
            /* This class is applied via the style tag above, but we define the pause here just in case */
          }
          
          /* Utility to pause on hover */
          .group\\/marquee:hover .animate-infinite-scroll {
            animation-play-state: paused !important;
          }
        `}</style>

      </div>
    </section>
  );
}
