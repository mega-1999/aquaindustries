import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import CategoryProductLinks from '../CategoryProductLinks';
import HotProductVideos from '../HotProductVideos';
import IndustryNews from '../../news/IndustryNews';
import { hotProductsData } from '@/lib/newsData';
import { menuData } from '@/lib/menuData2';

export interface Category {
  name: string;
  slug: string;
  image: string;
  description: string;
  items: string[];
  videoUrl?: string; 
}

function getMainCategory(slug: string) {
  return Object.values(menuData).find((cat) => cat.id === slug);
}

function getSubCategory(slug: string) {
  for (const key in menuData) {
    const mainCat = menuData[key as keyof typeof menuData];
    const subCat = mainCat.categories.find((c) => c.slug === slug);

    if (subCat) {
      return {
        type: 'subcategory',
        title: subCat.name,
        description: subCat.description,
        parent: mainCat.label,
        parentId: mainCat.id,
        items: subCat.items,
        image: subCat.image,
        // FIX 1: Cast to 'any' to bypass the error here
        videoUrl: (subCat as any).videoUrl,
      };
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. CHECK IF IT IS A MAIN CATEGORY PAGE
  const mainCategory = getMainCategory(slug);

  if (mainCategory) {
    return (
      <div className="min-h-screen bg-white w-full px-4 sm:px-6 lg:px-10 py-3">
        {/* Banner Section */}
        <div className="relative h-[300px] w-full">
          <Image
            src={mainCategory.bannerImage}
            alt={mainCategory.label}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A3161]/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{mainCategory.label}</h1>
            <div className="flex items-center text-white/80 text-sm font-medium">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/category/list" className="hover:text-white">Categories</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{mainCategory.label}</span>
            </div>
          </div>
        </div>

        <div className='text-center pt-4'>
           <h2 className='text-xl font-bold'>We are the nucleus of the metal world...</h2>
           <p className='text-sm pt-4 '>Elastic energy description...</p>
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mainCategory.categories.map((sub, index) => (
              <Link href={`/category/${sub.slug}`} key={index} className="group block h-full">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={sub.image || '/assets/placeholder.jpg'}
                      alt={sub.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0A3161]/0 group-hover:bg-[#0A3161]/10 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#B31942] transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-4">
                      {sub.description}
                    </p>
                    <span className="text-[#B31942] text-xs font-bold uppercase tracking-wider mt-auto">
                      View Products &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 2. CHECK IF IT IS A SUB-CATEGORY PAGE
  const subCategoryData = getSubCategory(slug);

  if (subCategoryData) {
    // New logic to find parent for videos
    const parentCategory = Object.values(menuData).find(cat => cat.id === subCategoryData.parentId);
    
    const allRelatedVideos = parentCategory 
      ? parentCategory.categories
          // FIX 2: Cast 'cat' to any here to check for videoUrl
          .filter(cat => (cat as any).videoUrl) 
          .map((cat, index) => ({
            id: index,
            title: cat.name,
            // FIX 3: Cast 'cat' to any here to access videoUrl
            videoUrl: (cat as any).videoUrl 
          }))
      : []; 

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button & Title */}
          <div className="mb-8">
            <Link href={`/category/${subCategoryData.parentId}`} className="inline-flex items-center text-sm text-gray-500 hover:text-[#B31942] mb-4">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to {subCategoryData.parent}
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {subCategoryData.title}
            </h1>
            <p className="text-gray-500 mt-2 max-w-3xl text-lg">{subCategoryData.description}</p>
          </div>

          {/* Product Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subCategoryData.items && subCategoryData.items.length > 0 ? (
              subCategoryData.items.map((item, index) => (
                <Link
                  key={index}
                  href={`/products/${item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}`}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#B31942] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className='flex justify-evenly'>
                    <div>
                      <div className="w-12 h-12 bg-red-50 rounded-lg mb-4 text-[#B31942]">
                        <ChevronRight />
                      </div>
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#B31942] mb-2">
                        {item}
                      </h3>
                    </div>
                    <Image
                      src={subCategoryData.image}
                      alt={subCategoryData.title}
                      height={100} width={100}
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-4 flex items-center font-medium">
                    View Specs &rarr;
                  </p>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No specific products listed under this category yet.</p>
                <Link href="/contact" className="text-[#B31942] font-bold mt-2 inline-block">Contact us for custom requirements &rarr;</Link>
              </div>
            )}
          </div>

          <CategoryProductLinks items={subCategoryData.items} />
          
          <HotProductVideos
            title={hotProductsData.title}
            videos={allRelatedVideos} 
          />
          
          <IndustryNews />
        </div>
      </div>
    );
  }

  return notFound();
}