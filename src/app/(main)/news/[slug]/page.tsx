import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { newsArticles } from '@/lib/newsData'; // <--- IMPORT HERE

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // Find the specific article from the shared data file
  const article = newsArticles.find((item) => item.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-4xl mx-auto">
         
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p className="text-xl font-medium mb-6 text-gray-900 border-l-4 border-[#B31942] pl-4">
            {article.excerpt}
          </p>
          <p>
            {/* Since we don't have full content in the array, we simulate it here */}
            Here is the full detailed content for <strong>{article.title}</strong>. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </article>
    </div>
  );
}