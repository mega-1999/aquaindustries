'use client';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Function to attempt play
    const startAudio = async () => {
      if (audioRef.current) {
        try {
          audioRef.current.volume = 0.5; // Set volume to 50% (polite)
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay blocked by browser. Waiting for interaction...");
          // If blocked, wait for the first user click anywhere
          const enableAudio = () => {
             if (audioRef.current) {
               audioRef.current.play();
               setIsPlaying(true);
               // Remove listener once played
               document.removeEventListener('click', enableAudio);
             }
          };
          document.addEventListener('click', enableAudio);
        }
      }
    };

    startAudio();
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-72 right-6 z-50">
      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef} 
        loop 
        src="/audio/background.mpeg"  // <--- PUT YOUR MUSIC FILE HERE
      />

      {/* Floating Toggle Button */}
      <button
        onClick={toggleAudio}
        className="
          flex items-center justify-center 
          w-12 h-12 
          bg-[#B31942] text-white 
          rounded-full shadow-lg border-2 border-white
          hover:bg-red-700 hover:scale-110 
          transition-all duration-300
          animate-fade-in
        "
      >
        {isPlaying ? (
          <div className="relative">
             <Volume2 className="w-5 h-5" />
             {/* Visual Wave Animation when playing */}
             <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
             </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
