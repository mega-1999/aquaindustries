'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Save, ChevronLeft, FileText, Box, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { createProduct, CreateProductRequest } from '@/lib/api';
import Image from 'next/image';

// --- DYNAMIC IMPORT FOR 3D VIEWER ---
const ModelViewer = dynamic(() => import('./ModelViewer'), { 
  ssr: false,
  loading: () => <div className="h-full flex items-center justify-center bg-[#0A3161]/10 text-xs">Loading 3D Engine...</div>
});

// --- 10 MEGA FOUNDRIES CASTING ASSETS (No Precast) ---
const ASSET_LIBRARY = [
  {
    id: '1',
    name: 'Heavy Duty Manhole Cover & Frame',
    type: 'MODEL',
    url: '/gib files/1 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image1.jpeg'
  },
  {
    id: '2',
    name: 'Ductile Iron Gully Grating (Fe 50007)',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image2.jpeg'
  },
  {
    id: '3',
    name: 'Heavy Traffic Airport Grating - 90 Ton',
    type: 'MODEL',
    url: '/gib files/3 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image3.jpeg'
  },
  {
    id: '4',
    name: 'Industrial Cast Iron Oil & Grease Separator',
    type: 'MODEL',
    url: '/gib files/1250 monogrease trap.glb', 
    thumbnail: '/assets/image4.jpg'
  },
  {
    id: '5',
    name: 'Ductile Iron Electrical Junction Box Cover',
    type: 'MODEL',
    url: '/gib files/d bix.glb', 
    thumbnail: '/assets/image5.jpeg'
  },
  {
    id: '6',
    name: 'Cast Iron Multi-Flanged Slurry Valve Body',
    type: 'MODEL',
    url: '/gib files/1250 monogrease trap.glb', 
    thumbnail: '/assets/image6.jpg'
  },
  {
    id: '7',
    name: 'Surface Linear Drainage Casting Segment',
    type: 'MODEL',
    url: '/gib files/3 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image7.jpeg'
  },
  {
    id: '8',
    name: 'Articulated Telecom Inspection Chamber Hatch',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image8.jpg'
  },
  {
    id: '9',
    name: 'High-Pressure 90° Flanged Elbow Fitting',
    type: 'MODEL',
    url: '/gib files/1 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image9.jpeg'
  },
  {
    id: '10',
    name: 'Ductile Iron Tree Grate Protection Ring',
    type: 'MODEL',
    url: '/gib files/2 FT LEACHING GALLEY .glb', 
    thumbnail: '/assets/image10.jpeg'
  }
];

// Helper for UUIDs
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (+c / 4)).toString(16)
  );
}

export default function ProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // === SELECTION STATE ===
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'IMAGE' | 'VIDEO' | 'MODEL'>('IMAGE');

  const { register, handleSubmit, watch, setValue } = useForm<CreateProductRequest>({
    defaultValues: {
      status: 'DRAFT',
      pricing: { currency: 'USD', unitOfMeasure: 'EA', unitPrice: 0 },
      availability: { inStock: true, stockQuantity: 0, leadTimeDays: 7 },
      dimensions: { dimensionUnit: 'IN', weightUnit: 'LB', length: 0, width: 0, height: 0, weight: 0 },
      documents: [] 
    }
  });

  const productName = watch('productName');
  useEffect(() => {
    if (productName) {
      const slug = productName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      setValue('productSlug', slug);
    }
  }, [productName, setValue]);

  // === HANDLER: SELECT ASSET FROM LIST ===
  const handleSelectAsset = (asset: typeof ASSET_LIBRARY[0]) => {
    setSelectedAssetId(asset.id);
    setPreviewUrl(asset.url);
    setMediaType('MODEL'); // Force 3D mode
  };

  const onSubmit = async (data: CreateProductRequest) => {
    setIsSubmitting(true);
    try {
        if (!previewUrl) {
            alert("Please select a 3D model first!");
            setIsSubmitting(false);
            return;
        }

        console.log("Selected Model URL:", previewUrl);
        
        // Construct Payload with the selected URL
        const payload = { 
            ...data, 
            id: uuidv4(),
            documents: [{
                url: previewUrl,
                type: 'MODEL',
                isPrimary: true,
                title: data.productName
            }]
        };

        // await createProduct(payload);
        alert(`Success! Product created with model: ${previewUrl}`);
        
    } catch (error) {
        console.error(error);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A3161]/5 pb-4">
      {/* === 3D ASSET SELECTION === */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
        <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
          <Box className="w-5 h-5 text-[#0A3161]/60" /> Select 3D Casting Model
        </h2> 

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           
           {/* 1. PREVIEW WINDOW (The 360 Viewer) */}
           <div className="h-[300px] bg-[#0A3161]/10 rounded-xl overflow-hidden border border-[#0A3161]/10 relative">
              {previewUrl && mediaType === 'MODEL' ? (
                 <ModelViewer src={previewUrl} />
              ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center text-[#0A3161]/60">
                    <Box className="w-10 h-10 mb-2 opacity-50" />
                    <span className="text-sm">Select a casting model from the list</span>
                 </div>
              )}
           </div>

           {/* 2. ASSET LIST (The Foundry Data) */}
           <div className="flex flex-col gap-3 h-[300px] overflow-y-auto pr-2">
              {ASSET_LIBRARY.map((asset) => (
                 <div 
                   key={asset.id}
                   onClick={() => handleSelectAsset(asset)}
                   className={`
                     flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all
                     ${selectedAssetId === asset.id 
                       ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' 
                       : 'border-[#0A3161]/10 hover:border-[#0A3161]/20 hover:bg-[#0A3161]/5'
                     }
                   `}
                 >
                    {/* Thumbnail */}
                    <div className="w-12 h-12 bg-[#0A3161]/10 rounded-md overflow-hidden flex-shrink-0">
                       <Image width={1200} height={600} src={asset.thumbnail} alt={asset.name} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                       <p className="text-sm font-bold text-[#0A3161]">{asset.name}</p>
                       <p className="text-xs text-[#0A3161]/70">{asset.type} • FOUNDRY CASTING</p>
                    </div>

                    {/* Checkmark */}
                    {selectedAssetId === asset.id && (
                       <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    )}
                 </div>
              ))}
           </div>

        </div>
      </section>
    </div>
  );
}