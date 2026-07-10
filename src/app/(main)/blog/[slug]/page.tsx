import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { blogPosts } from '@/lib/newsData';
 
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
 
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-20">
       
      <div className="bg-[#0A3161] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <Link href="/blog" className="inline-flex items-center text-sm text-[#0A3161]/60 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-[#0A3161]/40">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" /> {post.author}
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {post.date}
                </div>
            </div>
        </div>
      </div>
 
      <article className="max-w-4xl mx-auto px-4 -mt-12 relative z-10">
          
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
 
        <div className="prose prose-lg max-w-none text-[#0A3161] leading-relaxed">
          <p className="text-xl font-medium text-[#0A3161] mb-8 border-l-4 border-[#B31942] pl-6 italic">
            {post.excerpt}
          </p>
          
          <p className="mb-6">
            Here is where the full content of the blog post would go. In a real application, 
            this would likely be rich text or markdown content fetched from a database.
          </p>
          
          <h2 className="text-2xl font-bold text-[#0A3161] mt-10 mb-4">Key Takeaways for Foundries</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Integrating these systems can lead to a 
            <span className="font-bold text-[#B31942]"> 20% increase in efficiency</span>.
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Improved safety standards for workers.</li>
            <li>Real-time data analytics for furnace temperatures.</li>
            <li>Reduction in material waste.</li>
          </ul>

          <p>
            For more information on how METALSVERSE Foundries is implementing these changes, 
            contact our engineering department or subscribe to our newsletter.
          </p>
        </div>

        {/* Share / Footer of Article */}
        <div className="mt-12 pt-8 border-t border-[#0A3161]/10 flex justify-between items-center">
            <p className="text-sm text-[#0A3161]/70">Tags: Foundry, Innovation, Manufacturing</p>
            <button className="flex items-center gap-2 text-sm font-bold text-[#B31942] hover:text-[#B31942]">
                <Share2 className="w-4 h-4" /> Share Article
            </button>
        </div>

      </article>
    </div>
  );
}