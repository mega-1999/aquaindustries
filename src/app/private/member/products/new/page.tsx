'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  Save, X, ChevronLeft, UploadCloud,
  DollarSign, Package, Ruler, FileText
} from 'lucide-react';
import Link from 'next/link';
import { createProduct, CreateProductRequest } from '@/lib/api';

export default function NewProductPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form with default values matching the schema structure
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<CreateProductRequest>({
    defaultValues: {
      status: 'DRAFT',
      pricing: { currency: 'USD', unitOfMeasure: 'EA', unitPrice: 0 },
      availability: { inStock: true, stockQuantity: 0, leadTimeDays: 7 },
      dimensions: { dimensionUnit: 'IN', weightUnit: 'LB', length: 0, width: 0, height: 0, weight: 0 },
      documents: [] // We will manually handle adding one image url
    }
  });

  // Watch product name to auto-generate slug
  const productName = watch('productName');

  // Helper: Auto-generate slug
  React.useEffect(() => {
    if (productName) {
      const slug = productName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      setValue('productSlug', slug);
    }
  }, [productName, setValue]);

  // ... inside NewProductPage component ...
  // Helper to generate a random UUID for testing
  function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> (+c / 4)).toString(16)
    );
  }
  const onSubmit = async (data: CreateProductRequest) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Generate a new ID for the product itself (if API requires it)
      const newProductId = uuidv4();

      const payload: CreateProductRequest = {
        ...data,

        // === FIX: USE VALID UUIDS ===
        // The server likely tries to parse these strings as GUIDs
        id: newProductId,
        tenantId: "MEGAFOUNDRY",

        // Vendor Info (Use real UUIDs)
        vendorId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Replace with a REAL vendor ID from your database if possible
        vendorName: "Metalverse Vendor",
        vendorSlug: "mega-vendor",

        // Category Info
        categoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Use a valid UUID
        categoryName: "General Parts",
        categorySlug: "general-parts",

        // Subcategory Info
        subcategoryId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Use a valid UUID
        subcategoryName: "Standard",
        subcategorySlug: "standard",

        // ============================

        pricing: {
          ...data.pricing,
          unitPrice: Number(data.pricing.unitPrice),
          salePrice: Number(data.pricing.salePrice || 0),
        },
        availability: {
          ...data.availability,
          stockQuantity: Number(data.availability?.stockQuantity),
          leadTimeDays: Number(data.availability?.leadTimeDays),
          inStock: Boolean(data.availability?.inStock ?? false),
        },
        // Ensure dimensions is not null/undefined if server expects it
        dimensions: data.dimensions ? {
          ...data.dimensions,
          length: Number(data.dimensions.length || 0),
          width: Number(data.dimensions.width || 0),
          height: Number(data.dimensions.height || 0),
          weight: Number(data.dimensions.weight || 0),
        } : {
          length: 0, width: 0, height: 0, weight: 0,
          dimensionUnit: 'IN', weightUnit: 'LB'
        },

        documents: [],
        tags: [] // Ensure tags array exists
      };

      console.log("🚀 Sending Payload:", JSON.stringify(payload, null, 2));

      await createProduct(payload);

      router.push('/private/member/products');
    } catch (err: any) {
      console.error("Submission Error:", err);
      setError(err.message || "Something went wrong creating the product.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#0A3161]/5 pb-20">

      {/* === TOP BAR === */}
      <div className="bg-white border-b border-[#0A3161]/10 sticky top-0 z-30 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/private/member/products" className="p-2 hover:bg-[#0A3161]/10 rounded-full text-white/70">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-bold text-[#0A3161]">Add New Product</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/private/member/products" className="px-4 py-2 text-sm font-medium text-[#0A3161] bg-white border border-[#0A3161]/20 rounded-lg hover:bg-[#0A3161]/5">
            Cancel
          </Link>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 text-sm font-medium text-white bg-[#B31942] rounded-lg hover:bg-[#B31942] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : (
              <>
                <Save className="w-4 h-4" /> Save Product
              </>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">

        {error && (
          <div className="mb-6 p-4 bg-[#B31942]/5 border border-red-200 text-[#B31942] rounded-lg flex items-center gap-2">
            <X className="w-5 h-5" />
            {error}
          </div>
        )}

        <form className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* === LEFT COLUMN (2/3) === */}
          <div className="lg:col-span-2 space-y-6">

            {/* 1. BASIC INFO */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
              <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0A3161]/60" /> Basic Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Product Name *</label>
                  <input
                    {...register("productName", { required: true })}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                    placeholder="e.g. Industrial Steel Valve"
                  />
                  {errors.productName && <span className="text-xs text-[#B31942]">Name is required</span>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0A3161] mb-1">SKU *</label>
                    <input
                      {...register("sku", { required: true })}
                      className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                      placeholder="INV-001"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0A3161] mb-1">Slug (Auto)</label>
                    <input
                      {...register("productSlug")}
                      readOnly
                      className="w-full px-4 py-2 bg-[#0A3161]/5 border border-[#0A3161]/20 rounded-lg text-white/70 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Description</label>
                  <textarea
                    {...register("shortDescription")}
                    rows={4}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                    placeholder="Brief summary of the product..."
                  />
                </div>
              </div>
            </section>

            {/* 2. PRICING */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
              <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[#0A3161]/60" /> Pricing
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Unit Price ($) *</label>
                  <input
                    type="number" step="0.01"
                    {...register("pricing.unitPrice", { required: true, min: 0 })}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Sale Price ($)</label>
                  <input
                    type="number" step="0.01"
                    {...register("pricing.salePrice")}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Currency</label>
                  <select
                    {...register("pricing.currency")}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg bg-white"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
              </div>
            </section>

            {/* 3. MEDIA (Placeholder for URL) */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
              <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-[#0A3161]/60" /> Media
              </h2>
              <div className="border-2 border-dashed border-[#0A3161]/20 rounded-xl p-8 text-center bg-[#0A3161]/5">
                <p className="text-sm text-[#0A3161]/70 mb-2">Image Upload not fully implemented yet.</p>
                <p className="text-xs text-[#0A3161]/60">For now, images are handled via external URLs.</p>
              </div>
            </section>

          </div>

          {/* === RIGHT COLUMN (1/3) === */}
          <div className="space-y-6">

            {/* 4. STATUS & INVENTORY */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
              <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#0A3161]/60" /> Inventory
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Status</label>
                  <select
                    {...register("status")}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg bg-white"
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="ARCHIVED">Archived</option>
                  </select>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#0A3161]/10">
                  <label className="text-sm font-medium text-[#0A3161]">In Stock?</label>
                  <input
                    type="checkbox"
                    {...register("availability.inStock")}
                    className="w-5 h-5 text-[#B31942] rounded focus:ring-[#B31942]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Quantity</label>
                  <input
                    type="number"
                    {...register("availability.stockQuantity")}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#0A3161] mb-1">Lead Time (Days)</label>
                  <input
                    type="number"
                    {...register("availability.leadTimeDays")}
                    className="w-full px-4 py-2 border border-[#0A3161]/20 rounded-lg focus:ring-2 focus:ring-[#B31942] outline-none"
                  />
                </div>
              </div>
            </section>

            {/* 5. DIMENSIONS */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-[#0A3161]/10">
              <h2 className="text-lg font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-[#0A3161]/60" /> Shipping Specs
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="text-xs font-bold text-[#0A3161]/70 uppercase">Weight (LB)</label>
                  <input
                    type="number" step="0.1"
                    {...register("dimensions.weight")}
                    className="w-full mt-1 px-3 py-1.5 border border-[#0A3161]/20 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0A3161]/70 uppercase">Length (IN)</label>
                  <input
                    type="number" step="0.1"
                    {...register("dimensions.length")}
                    className="w-full mt-1 px-3 py-1.5 border border-[#0A3161]/20 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0A3161]/70 uppercase">Width (IN)</label>
                  <input
                    type="number" step="0.1"
                    {...register("dimensions.width")}
                    className="w-full mt-1 px-3 py-1.5 border border-[#0A3161]/20 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-[#0A3161]/70 uppercase">Height (IN)</label>
                  <input
                    type="number" step="0.1"
                    {...register("dimensions.height")}
                    className="w-full mt-1 px-3 py-1.5 border border-[#0A3161]/20 rounded text-sm"
                  />
                </div>
              </div>
            </section>

          </div>
        </form>
      </div>
    </div>
  );
}
