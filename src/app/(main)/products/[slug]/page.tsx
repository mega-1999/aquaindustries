import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronRight, FileText, Settings } from 'lucide-react';
import { getProductBySlug } from '@/lib/productsData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const product = getProductBySlug(resolvedParams.slug);
    console.log('product.image', product?.image);
    if (!product) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-white pb-20">

            {/* === BREADCRUMB === */}
            <div className="bg-gray-50 border-b border-gray-100">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#B31942]">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/category" className="hover:text-[#B31942]">Category</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-gray-900 font-medium">{product.title}</span>
                    </div>
                </div>
            </div>

            {/* === PRODUCT HERO === */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: Image */}
                    <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                        {/* Fallback to a placeholder if image path is broken */}
                        <Image
                            src={product.image || '/assets/placeholder.jpg'}
                            alt={product.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* RIGHT: Info */}
                    <div>
                        <span className="text-[#B31942] font-bold uppercase tracking-wider text-sm">
                            {product.category}
                        </span>
                        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                            {product.title}
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-8">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-[#B31942]" /> Key Features
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.features?.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                        <CheckCircle2 className="w-4 h-4 text-[#B31942] mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-[#B31942] hover:bg-red-700 text-white px-8 py-6 text-lg">
                                Request Quote
                            </Button>
                            <Button variant="outline" className="px-8 py-6 text-lg border-gray-300">
                                <FileText className="w-4 h-4 mr-2" /> Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                        {product.specifications?.map((spec: any, index: number) => (
                            <div key={index} className="flex justify-between py-3 border-b border-gray-200">
                                <span className="font-medium text-gray-500">{spec.label}</span>
                                <span className="font-bold text-gray-900">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}