'use client';

import '@google/model-viewer';

// ✅ 1. Define the Props Interface (This was missing)
interface ModelViewerProps {
  src: string;
}

const ModelViewer = ({ src }: ModelViewerProps) => {
  return (
    <div className="w-full h-full bg-[#0A3161]/10 rounded-lg overflow-hidden relative group">
      {/* ✅ 2. The @ts-ignore suppresses the 'intrinsic element' error 
         if your global types aren't being picked up yet.
      */}
      {/* @ts-ignore */}
      <model-viewer
        src={src}
        alt="3D Product Model"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        style={{ width: '100%', height: '100%' }}
      />
      
      <div className="absolute bottom-4 left-4 bg-[#0A3161]/80 text-white text-xs font-bold px-3 py-1.5 rounded-full pointer-events-none backdrop-blur-md">
        Interactive 3D View
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500">
         <div className="bg-[#0A3161]/20 px-4 py-2 rounded-lg text-white text-sm font-medium backdrop-blur-sm">
            Click & Drag to Rotate
         </div>
      </div>
    </div>
  );
};

export default ModelViewer;
