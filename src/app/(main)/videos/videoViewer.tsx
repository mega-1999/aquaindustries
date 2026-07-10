'use client';

import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Required for 3D
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
    Save, ChevronLeft, UploadCloud,
    FileText, Box, Trash2
} from 'lucide-react';
import Link from 'next/link'; 
import { createProduct, CreateProductRequest } from '@/lib/api';
import Image from 'next/image';

// --- DYNAMIC IMPORT (CRITICAL FOR 3D) ---
const ModelViewer = dynamic(() => import('./ModelViewer'), {
    ssr: false, // Disables server rendering for this component
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0A3161]/5 text-[#0A3161]/60">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A3161] mb-2"></div>
            <span className="text-xs">Loading 3D Engine...</span>
        </div>
    )
});

// Helper for UUIDs
function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (+c / 4)).toString(16)
    );
}

export default function NewProductPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // === MEDIA STATE ===
    const [mediaPreview, setMediaPreview] = useState<string | null>(null);
    const [mediaType, setMediaType] = useState<'IMAGE' | 'VIDEO' | 'MODEL'>('IMAGE');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    // === FILE HANDLER ===
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            // Create a local URL for preview
            const objectUrl = URL.createObjectURL(file);
            setMediaPreview(objectUrl);

            // Detect 3D Model
            if (file.name.toLowerCase().endsWith('.glb') || file.name.toLowerCase().endsWith('.gltf')) {
                setMediaType('MODEL');
            }
            // Detect Video
            else if (file.type.startsWith('video/')) {
                setMediaType('VIDEO');
            }
            // Default to Image
            else {
                setMediaType('IMAGE');
            }
        }
    };

    const handleRemoveMedia = () => {
        setMediaPreview(null);
        setSelectedFile(null);
        setMediaType('IMAGE');
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const onSubmit = async (data: CreateProductRequest) => {
        setIsSubmitting(true);
        try {
            console.log("Would upload file:", selectedFile?.name);
            alert(`Success! Ready to upload: ${selectedFile?.name}`);
            // Here you would call your API to upload the file to S3/Azure

            // Mock payload structure
            const payload = { ...data, id: uuidv4() };
            await createProduct(payload);

        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A3161]/5 pb-20">
            {/* Header */}
            <div className="bg-white border-b border-[#0A3161]/10 sticky top-0 z-30 px-6 py-4 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/private/member/products" className="p-2 hover:bg-[#0A3161]/10 rounded-full text-[#0A3161]/70">
                        <ChevronLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-xl font-bold text-[#0A3161]">Add New Product</h1>
                </div>
                <button onClick={handleSubmit(onSubmit)} className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-[#B31942] rounded-lg hover:bg-[#B31942]">
                    <Save className="w-4 h-4" /> Save
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-8">
                <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Basic Info */}
                        <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
                            <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-[#0A3161]/60" /> Basic Info
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium">Product Name</label>
                                    <input {...register("productName")} className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. 1 FT Leaching Galley" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">SKU</label>
                                    <input {...register("sku")} className="w-full px-4 py-2 border rounded-lg" />
                                </div>
                            </div>
                        </section>

                        {/* === MEDIA UPLOAD AREA === */}
                        <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
                            <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                                <UploadCloud className="w-5 h-5 text-[#0A3161]/60" /> Product Media
                            </h2>

                            <div className="space-y-4">
                                {mediaPreview ? (
                                    <div className="relative w-full h-[400px] bg-[#0A3161]/10 rounded-lg border border-[#0A3161]/10 overflow-hidden group">

                                        {/* A. 3D VIEWER */}
                                        {mediaType === 'MODEL' ? (
                                            <ModelViewer src={mediaPreview} />
                                        ) : mediaType === 'VIDEO' ? (
                                            /* B. VIDEO VIEWER */
                                            <video src={mediaPreview} className="w-full h-full object-contain" controls />
                                        ) : (
                                            /* C. IMAGE VIEWER */
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <Image width={1200} height={600} src={mediaPreview} alt="Preview" className="w-full h-full object-contain" />
                                        )}

                                        {/* Trash Button */}
                                        <button
                                            type="button"
                                            onClick={handleRemoveMedia}
                                            className="absolute top-2 right-2 p-2 bg-[#B31942] text-white rounded-full hover:bg-[#B31942] z-10 shadow-lg"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => fileInputRef.current?.click()}
                                        className="border-2 border-dashed border-[#0A3161]/20 rounded-xl h-64 flex flex-col items-center justify-center text-center bg-[#0A3161]/5 hover:bg-[#0A3161]/10 transition-colors cursor-pointer group"
                                    >
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                            <Box className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-lg text-[#0A3161] font-semibold">Upload Media</p>
                                        <p className="text-sm text-[#0A3161]/70 mt-1">
                                            Drag & drop images, videos, or <span className="font-bold text-blue-600">.GLB 3D Files</span>
                                        </p>
                                    </div>
                                )}

                                {/* HIDDEN INPUT accepting .glb */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileSelect}
                                    className="hidden"
                                    accept="image/*,video/*,.glb,.gltf"
                                />
                            </div>
                        </section>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="space-y-6">
                        <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
                            <h2 className="text-lg font-bold mb-4">Pricing</h2>
                            <input type="number" {...register("pricing.unitPrice")} className="w-full border px-4 py-2 rounded-lg" placeholder="0.00" />
                        </section>
                    </div>
                </form>
            </div>
        </div>
    );
}
