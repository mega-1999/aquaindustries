'use client';

import React, { useState, useRef } from 'react';
import { Plus, X, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// --- TYPES ---
type MediaType = 'IMAGE' | 'VIDEO';

interface Story {
  id: string;
  vendorName: string;
  vendorAvatar: string;
  mediaUrl: string;
  mediaType: MediaType;
  isViewed: boolean;
}

// --- DATA ---
const INITIAL_STORIES: Story[] = [
  // {
  //   id: '1',
  //   vendorName: 'Mega Foundries – Precast Systems',
  //   vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
  //   mediaUrl: '/video/4. MJ x FE 11.25 Degree.968.mp4',
  //   mediaType: 'VIDEO',
  //   isViewed: false,
  // },
  {
    id: '2',
    vendorName: 'Mega Foundries – Manufacturing',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/5. MJ x FE 180 Degree.969.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '3',
    vendorName: 'Mega Foundries – Infrastructure',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image3.jpeg',
    mediaType: 'IMAGE',
    isViewed: true,
  },
  {
    id: '4',
    vendorName: 'Mega Foundries – Installation',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/Fire Dumper Mega.470.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '5',
    vendorName: 'Mega Foundries – Plant Operations',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER MANHOLE COVER.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '6',
    vendorName: 'Mega Foundries – Structural Elements',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image6.jpg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  // {
  //   id: '7',
  //   vendorName: 'Mega Foundries – Precast Panels',
  //   vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
  //   mediaUrl: '/assets/image7.jpeg',
  //   mediaType: 'IMAGE',
  //   isViewed: false,
  // },
  {
    id: '8',
    vendorName: 'Mega Foundries – Heavy Lifting',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER MANHOLE COVER.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '9',
    vendorName: 'Mega Foundries – Plant Automation',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image9.jpeg',
    mediaType: 'IMAGE',
    isViewed: true,
  },
  {
    id: '10',
    vendorName: 'Mega Foundries – Quality Control',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image10.jpeg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  {
    id: '11',
    vendorName: 'Mega Foundries – Site Execution',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER MANHOLE COVER.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '12',
    vendorName: 'Mega Foundries – Infrastructure Projects',
    vendorAvatar: '/assets/marine_castings/marine_castings2.jpeg',
    mediaUrl: '/assets/image12.jpg',
    mediaType: 'IMAGE',
    isViewed: false,
  }, 
  // {
  //   id: '13',
  //   vendorName: 'Mega Foundries – Precast Beams & Columns',
  //   vendorAvatar: '/assets/image5.jpeg',
  //   mediaUrl: '/assets/image13.jpg',
  //   mediaType: 'IMAGE',
  //   isViewed: false,
  // },
  {
    id: '14',
    vendorName: 'Mega Foundries – Mold Fabrication',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/assets/image14.jpeg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  {
    id: '15',
    vendorName: 'Mega Foundries – Yard Storage & Handling',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/assets/image15.jpeg',
    mediaType: 'IMAGE',
    isViewed: true,
  },
  {
    id: '16',
    vendorName: 'Mega Foundries – Crane Operations',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/video/NEW NEXT GENERATION DESIGNER MANHOLE COVER.mp4',
    mediaType: 'VIDEO',
    isViewed: false,
  },
  {
    id: '17',
    vendorName: 'Mega Foundries – Batch Plant Operations',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/assets/image17.jpg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  {
    id: '18',
    vendorName: 'Mega Foundries – On-Site Assembly',
    vendorAvatar: '/assets/image5.jpeg',
    mediaUrl: '/assets/image18.jpeg',
    mediaType: 'IMAGE',
    isViewed: false,
  },
  // {
  //   id: '19',
  //   vendorName: 'Mega Foundries – Finished Precast Structures',
  //   vendorAvatar: '/assets/image5.jpeg',
  //   mediaUrl: '/assets/image19.jpeg',
  //   mediaType: 'IMAGE',
  //   isViewed: false,
  // },

];

export default function FactoryStories() {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll Handler
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll by roughly 2 cards width
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    // 1. OUTER WRAPPER: Ensures full width of the parent container
    <div className="w-full bg-white py-6 border-b border-[#0A3161]/10 relative group">

      {/* 2. SCROLL CONTAINER: 
          - w-full: Takes full width
          - overflow-x-auto: Scrolls if content overflows
          - flex-nowrap: Forces items to stay in a single row
          - px-4: Adds padding to the sides so first/last items aren't flush
      */}
      <div
        ref={scrollContainerRef}
        className="flex w-full overflow-x-auto gap-2 px-4 md:px-8 no-scrollbar scroll-smooth"
      >

        {/* === 1. CREATE STORY CARD === */}
        {/* flex-none: Prevents shrinking. Fixed width/height ensuring consistent look */}
        <div
          onClick={() => setIsUploading(true)}
          className="flex-none w-28 h-48 md:w-32 md:h-56 relative rounded-xl overflow-hidden cursor-pointer shadow-sm border border-[#0A3161]/10 group/create hover:bg-[#0A3161]/5 transition-colors"
        >
          {/* Top Half (User Image) */}
          <div className="h-[65%] w-full bg-[#0A3161]/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              width={1200}
              height={600}
              src="/assets/marine_castings/marine_castings2.jpeg"
              alt="Me"
              className="w-full h-full object-cover group-hover/create:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Bottom Half (Action) */}
          <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-white flex flex-col items-center justify-end pb-3">
            <span className="text-xs font-bold text-[#0A3161] text-center px-1">Create Story</span>
          </div>

          {/* Floating Plus Button */}
          <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B31942] rounded-full p-1 border-4 border-white shadow-sm">
            <Plus className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* === 2. STORY CARDS === */}
        {stories.map((story, index) => (
          <div
            key={story.id}
            onClick={() => setActiveStoryIndex(index)}
            // flex-none is CRITICAL here. It ensures cards don't squish to fit the screen.
            // They maintain their width, forcing the container to scroll.
            className="flex-none w-28 h-48 md:w-32 md:h-56 relative rounded-xl overflow-hidden cursor-pointer shadow-sm group/story hover:opacity-95 transition-opacity"
          >
            {/* Background Media */}
            {story.mediaType === 'VIDEO' ? (
              <video src={story.mediaUrl} className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-500" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <Image width={1200} height={600} src={story.mediaUrl} alt={story.vendorName} className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-500" />
            )}

            {/* Dark Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A3161]/10 via-transparent to-[#0A3161]/70 pointer-events-none" />

            {/* Avatar Badge (Top Left) */}
            <div className={`
                absolute top-2 left-2 rounded-full border-4 border-[#B31942] p-[2px] bg-[#B31942]
                ${story.isViewed ? 'border-slate-300 bg-slate-300' : ''}
                shadow-md
            `}>
              <Avatar className="w-8 h-8 md:w-9 md:h-9 border-2 border-white">
                <AvatarImage src={story.vendorAvatar} />
                <AvatarFallback>VN</AvatarFallback>
              </Avatar>
            </div>

            {/* Name Label (Bottom Left) */}
            <div className="absolute bottom-2 left-2 right-2">
              <p className="text-white font-semibold text-[11px] md:text-xs leading-tight line-clamp-2 drop-shadow-md">
                {story.vendorName}
              </p>
            </div>
          </div>
        ))}

        {/* Spacer at the end for smooth scrolling */}
        <div className="w-2 flex-none" />
      </div>

      {/* === 3. SCROLL BUTTON (Floating Right) === */}
      {/* Only visible on hover and desktop */}
      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 hidden md:group-hover:block">
        <button
          onClick={scrollRight}
          className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-[#0A3161]/10 hover:bg-white transition-colors text-[#0A3161]"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* --- 4. FULL SCREEN VIEWER --- */}
      {activeStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}

      {/* --- 5. UPLOAD MODAL --- */}
      {isUploading && (
        <UploadStoryModal onClose={() => setIsUploading(false)} />
      )}

    </div>
  );
}

// ==========================================
// SUB-COMPONENT: STORY VIEWER (Overlay)
// ==========================================
function StoryViewer({ stories, initialIndex, onClose }: { stories: Story[], initialIndex: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentStory = stories[currentIndex];

  const handleNext = () => {
    if (currentIndex < stories.length - 1) setCurrentIndex(prev => prev + 1);
    else onClose();
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A3161]/95 flex items-center justify-center">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-[#0A3161]/40 z-50 p-2 bg-[#0A3161]/20 rounded-full backdrop-blur-md">
        <X className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="relative h-full w-full md:max-w-md bg-[#0A3161] md:rounded-xl overflow-hidden md:h-[90vh] md:border md:border-[#0A3161] shadow-2xl">

        {/* Progress & Header */}
        <div className="absolute top-0 left-0 right-0 p-4 z-20 bg-gradient-to-b from-[#0A3161]/80 to-transparent">
          {/* Progress Bars */}
          <div className="flex gap-1 mb-3">
            {stories.map((_, idx) => (
              <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div className={`h-full bg-white transition-all duration-300 ${idx <= currentIndex ? 'w-full' : 'w-0'}`} />
              </div>
            ))}
          </div>
          {/* Vendor Info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-9 h-9 border border-white/50">
              <AvatarImage src={currentStory.vendorAvatar} />
              <AvatarFallback>VN</AvatarFallback>
            </Avatar>
            <span className="text-white font-bold text-sm drop-shadow-md">{currentStory.vendorName}</span>
          </div>
        </div>

        {/* Media */}
        <div className="h-full w-full flex items-center justify-center bg-[#0A3161]">
          {currentStory.mediaType === 'VIDEO' ? (
            <video src={currentStory.mediaUrl} className="w-full h-full object-contain" autoPlay playsInline />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <Image width={1200} height={600} src={currentStory.mediaUrl} alt="Story" className="w-full h-full object-contain" />
          )}
        </div>

        {/* Navigation Zones */}
        <div className="absolute inset-y-0 left-0 w-1/3 z-10 cursor-pointer" onClick={handlePrev} />
        <div className="absolute inset-y-0 right-0 w-1/3 z-10 cursor-pointer" onClick={handleNext} />

        {/* Desktop Nav Arrows (Visual Only) */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 pointer-events-none">
          {currentIndex > 0 && <div className="bg-white/10 p-2 rounded-full backdrop-blur-md"><ChevronLeft className="text-white w-6 h-6" /></div>}
          <div className="flex-1" />
          {currentIndex < stories.length - 1 && <div className="bg-white/10 p-2 rounded-full backdrop-blur-md"><ChevronRight className="text-white w-6 h-6" /></div>}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: UPLOAD MODAL
// ==========================================
function UploadStoryModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0A3161]/60 flex items-center justify-center backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h3 className="font-bold text-xl text-[#0A3161] mb-4">Add to Story</h3>
        <div className="h-48 bg-[#0A3161]/5 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-white/60 hover:bg-[#0A3161]/10 hover:border-blue-400 transition-colors cursor-pointer">
          <div className="bg-white p-3 rounded-full mb-3 shadow-sm">
            <Plus className="w-6 h-6 text-blue-600" />
          </div>
          <span className="font-medium">Upload Photo/Video</span>
          <span className="text-xs mt-1 text-[#0A3161]/60">Drag & drop or click</span>
        </div>
        <div className="flex gap-3 mt-6">
          <Button variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Share</Button>
        </div>
      </div>
    </div>
  );
}
