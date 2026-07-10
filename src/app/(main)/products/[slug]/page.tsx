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
            <div className="bg-[#0A3161]/5 border-b border-[#0A3161]/10">
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center text-sm text-[#0A3161]/70">
                        <Link href="/" className="hover:text-[#B31942]">Home</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <Link href="/category" className="hover:text-[#B31942]">Category</Link>
                        <ChevronRight className="w-4 h-4 mx-2" />
                        <span className="text-[#0A3161] font-medium">{product.title}</span>
                    </div>
                </div>
            </div>

            {/* === PRODUCT HERO === */}
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: Image */}
                    <div className="relative aspect-[4/3] w-full bg-[#0A3161]/10 rounded-2xl overflow-hidden border border-[#0A3161]/10">
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
                        <h1 className="text-4xl font-bold text-[#0A3161] mt-2 mb-6">
                            {product.title}
                        </h1>
                        <p className="text-[#0A3161]/80 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Key Features */}
                        <div className="mb-8">
                            <h3 className="font-bold text-[#0A3161] mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-[#B31942]" /> Key Features
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {product.features?.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-[#0A3161]/80">
                                        <CheckCircle2 className="w-4 h-4 text-[#B31942] mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-[#B31942] hover:bg-[#B31942] text-white px-8 py-6 text-lg">
                                Request Quote
                            </Button>
                            <Button variant="outline" className="px-8 py-6 text-lg border-[#0A3161]/20">
                                <FileText className="w-4 h-4 mr-2" /> Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="bg-[#0A3161]/5 rounded-2xl p-8 border border-[#0A3161]/10">
                    <h2 className="text-2xl font-bold text-[#0A3161] mb-6">Technical Specifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                        {product.specifications?.map((spec: any, index: number) => (
                            <div key={index} className="flex justify-between py-3 border-b border-[#0A3161]/10">
                                <span className="font-medium text-[#0A3161]/70">{spec.label}</span>
                                <span className="font-bold text-[#0A3161]">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}