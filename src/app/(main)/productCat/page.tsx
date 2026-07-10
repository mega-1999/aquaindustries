import React from 'react';
import {
  Heart,
  MessageSquare,
  Check,
  ChevronRight,
  ShieldCheck,
  Factory
} from 'lucide-react';

// Shadcn UI Imports (Adjust paths if yours are different)
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

// --- Helper Component for Status ---
const StatusText = ({ status }: { status: string }) => {
  if (status === "In Stock") {
    return <span className="text-green-600 text-xs font-medium flex items-center gap-1"><Check size={14} /> In Stock</span>;
  }
  if (status === "By Order") {
    return <span className="text-[#B31942] text-xs font-medium flex items-center gap-1"><Check size={14} /> By Order</span>;
  }
  return null;
};

// --- 1. The "Top Ranking" Card (Shadcn Implementation) ---
const FeaturedCard = ({ product }: { product: any }) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="font-normal text-xs text-muted-foreground bg-[#0A3161]/10 hover:bg-[#0A3161]/10">
            {product.category}
          </Badge>
          <StatusText status={product.status} />
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-grow">
        {/* Main Image */}
        <div className="aspect-[4/3] bg-muted rounded-md mb-3 overflow-hidden border">
          <Image src={product.image} fill alt={product.title} className="w-full h-full object-cover" />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-16 h-12 bg-muted border rounded overflow-hidden cursor-pointer hover:ring-1 hover:ring-red-500">
              <Image src={product.image} fill alt="thumb" className="w-full h-full object-cover opacity-80" />
            </div>
          ))}
        </div>

        {/* Title & Price */}
        <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>
        <div className="text-[#B31942] font-bold text-lg mb-4">
          ${product.price.toLocaleString()} <span className="text-muted-foreground text-sm font-normal">/ {product.unit}</span>
        </div>

        {/* Footer Info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer">
            <span className="font-semibold">{product.brand}</span>
            <ChevronRight size={14} />
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1"><Factory size={14} className="text-foreground" /> Manufacturer</div>
            <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-blue-600" /> Verified</div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="outline" className="flex-1 text-[#B31942] border-red-200 hover:bg-[#B31942]/5 hover:text-[#B31942]">
          Get Quote
        </Button>
        <Button variant="outline" size="icon" className="text-muted-foreground hover:bg-[#0A3161]/5">
          <MessageSquare size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

// --- 2. The "New Arrivals" Card (Shadcn Implementation) ---
const StandardCard = ({ product }: { product: any }) => {
  return (
    <Card className="hover:shadow-md transition-shadow relative overflow-hidden h-full flex flex-col">
      {/* Configured Ribbon */}
      {product.isConfigured && (
        <div className="absolute top-0 right-0 z-10">
          <div className="bg-[#B31942] text-primary-foreground text-[10px] px-2 py-1 rounded-bl-lg font-bold shadow-sm">
            Configured
          </div>
        </div>
      )}

      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="font-normal text-xs text-muted-foreground bg-[#0A3161]/10">
            {product.category}
          </Badge>
          <div className="pr-6"> {/* Padding right to avoid overlap with ribbon */}
            <StatusText status={product.status} />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-2 flex-grow">
        {/* Favorite Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-12 left-2 h-8 w-8 bg-background/80 hover:bg-background text-[#B31942] rounded-full shadow-sm z-10"
        >
          <Heart size={16} />
        </Button>

        {/* Image */}
        <div className="aspect-square bg-muted rounded-md mb-3 overflow-hidden border">
          <Image src={product.image} fill alt={product.title} className="w-full h-full object-cover" />
        </div>

        {/* Title */}
        <h3 className="font-medium text-sm mb-2 line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        {/* Price */}
        {product.price ? (
          <div className="text-[#B31942] font-bold text-lg mb-3">
            ${product.price.toLocaleString()} <span className="text-muted-foreground text-sm font-normal">/ {product.unit}</span>
          </div>
        ) : (
          <div className="h-7 mb-3"></div>
        )}

        {/* <Separator className="my-2" /> */}

        {/* Meta Table */}
        <div className="space-y-1 text-xs pt-1">
          {Object.entries(product.meta).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-muted-foreground">{key}:</span>
              <span className="font-medium text-foreground truncate max-w-[120px] text-right">
                {value as React.ReactNode}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 gap-2">
        <Button variant="outline" className="flex-1 text-[#B31942] border-red-200 hover:bg-[#B31942]/5 hover:text-[#B31942]">
          Get Quote
        </Button>
        <Button variant="outline" size="icon" className="text-[#B31942] border-red-100 hover:bg-[#B31942]/5">
          <MessageSquare size={18} />
        </Button>
      </CardFooter>
    </Card>
  );
};

// --- Main Page Layout ---
export default function MarketplacePage() {

  // Mock Data
  const featuredProduct = {
    id: 1,
    title: "Low Voltage Main Distribution Board (MDB) Panels for Industrial Use",
    category: "Electrical & Power Systems",
    price: 25000,
    unit: "sets",
    status: "In Stock",
    brand: "Iteco",
    image: "/api/placeholder/400/300"
  };

  const newArrivals = [
    {
      id: 2,
      title: "Factory Direct Transparent Powder Coatings For Rubber & Plastic",
      category: "Specialty Chemicals",
      price: 450,
      unit: "Tons",
      status: "In Stock",
      isConfigured: false,
      image: "/api/placeholder/300/300",
      meta: { "Brand": "FusionChem Solutions", "Condition": "Brand New" }
    },
    {
      id: 3,
      title: "10kw 50kw Low Rpm Permanent Magnet Generator, Wind Turbine",
      category: "Wind Energy",
      price: null,
      unit: "",
      status: "By Order",
      isConfigured: true,
      image: "/api/placeholder/300/300",
      meta: { "Manufacturer": "Acciona", "Model Number": "MOLPW-750" }
    },
    {
      id: 4,
      title: "High Efficiency Mono Crystalline Solar Panels 450W",
      category: "Solar Energy",
      price: 120,
      unit: "piece",
      status: "In Stock",
      isConfigured: false,
      image: "/api/placeholder/300/300",
      meta: { "Brand": "SunTech", "Power": "450W" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A3161]/5/50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-foreground text-center mb-10 tracking-tight">
          Explore Opportunities to Grow Your Business
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Section 1: Top Ranking (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">Top ranking</h2>
            <FeaturedCard product={featuredProduct} />
          </div>

          {/* Section 2: New Arrivals (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h2 className="text-xl font-semibold tracking-tight">New arrivals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivals.map((product) => (
                <StandardCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}