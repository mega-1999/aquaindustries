import Image from "next/image"
import {
  ArrowRight,
  Settings,
  Zap,
  Hammer,
  Anchor,
  Droplets,
  Cuboid,
  Sun,
  Flame,
  Building,
  Bolt,
  Shield,
  Wrench,
  Cog
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// 1. Your Local Images
const myImages = [
  "/assets/image10.jpeg",
  "/assets/image1.jpeg",
  "/assets/image18.jpeg",
  "/assets/image9.jpeg",
  "/assets/image11.jpg",
  "/assets/image14.jpeg",
  "/assets/image16.jpg",
]

// 2. Data Flattened 
const products = [
  {
    id: "irrigation_products",
    title: "NEW NEXT GENERATION DESIGNER MANHOLE COVER",
    category: "Irrigation",
    brand: "TechnoML",
    price: "View Catalog",
    isHero: true,
    icon: Zap,
    image: "/assets/image10.jpeg",
    video: "/video/custom solutions/5900-E CN tower Brick.478.mp4" // <--- Add your video path here
  },
  { id: "earth_moving", title: "Bucket Teeth & Excavator Adaptors", category: "Earth Moving", brand: "HeavyDuty", price: "$450.00", icon: Zap },
  { id: "cathodic", title: "Zinc & Aluminium Sacrificial Anodes", category: "Protection", brand: "MarineSafe", price: "$120.00", icon: Settings },
  // { id: "precast", title: "Precast Concrete Molds & Road Barriers", category: "Infrastructure", brand: "InfraBuild", price: "Custom", icon: Cuboid },
  { id: "mining", title: "Crusher Parts & Screen Panels", category: "Mining", brand: "RockCrush", price: "$2,100", icon: Sun },
  { id: "metals", title: "Ductile Iron & Stainless Steel Castings", category: "Alloys", brand: "Foundry", price: "RFQ", icon: Droplets },
  { id: "paving", title: "Adjustable Paving Risers & Pedestals", category: "Construction", brand: "LevelUp", price: "$15.00", icon: Cog },
  { id: "water_works", title: "Mechanical Joint Fittings & Valves", category: "Water Works", brand: "FlowControl", price: "$89.00", icon: Droplets },
  { id: "fabrication", title: "Custom Structural Metal Fabrication", category: "Services", brand: "TechnoFab", price: "Custom", icon: Wrench },
  { id: "marine", title: "Bronze Propellers & Marine Hulls", category: "Marine", brand: "Nautical", price: "$3,500", icon: Anchor },
  { id: "oil_gas", title: "High-Pressure Valve Components", category: "Oil & Gas", brand: "PetroParts", price: "RFQ", icon: Flame },
  { id: "construction", title: "Scaffolding & Infrastructure Parts", category: "Construction", brand: "BuildSafe", price: "RFQ", icon: Building },
  { id: "utility", title: "Power Transmission Hardware", category: "Utility", brand: "GridTech", price: "$200.00", icon: Bolt },
  { id: "utility", title: "Power Transmission Hardware", category: "Utility", brand: "GridTech", price: "$200.00", icon: Bolt },
  { id: "utility", title: "Power Transmission Hardware", category: "Utility", brand: "GridTech", price: "$200.00", icon: Bolt },
  { id: "defence", title: "Aerospace & Defence Grade Castings", category: "Defence", brand: "AeroCast", price: "Restricted", icon: Shield },
  { id: "custom", title: "Bespoke OEM Manufacturing", category: "Manufacturing", brand: "TechnoML", price: "Contact", icon: Hammer },
  { id: "snow", title: "Industrial Snow Plough Attachments", category: "Equipment", brand: "WinterOps", price: "$1,200", icon: Cog },
]

export function MegaStories() {
  const heroProduct = products[0]
  const gridProducts = products.slice(1) // Items 2-16

  return (
    <section className="w-full px-4 md:px-8 py-12 bg-white">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-[#B31942] uppercase border-l-4 border-black pl-4">
          Casting zone
        </h2>
        <Button variant="outline" className="hidden sm:flex group border-black text-[#0A3161] hover:bg-zinc-100">
          View All Categories <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      {/* === INDUSTRIAL BOOKSHELF CONTAINER === */}
      {/* 1. The Outer Frame (Simulates the Shelf Unit) */}
      <div className="border-[6px] border-zinc-800 bg-zinc-50 shadow-2xl relative">

        {/* 2. The Horizontal Header (Requested by Client) */}
        <div className="w-full bg-zinc-800 text-white py-4 px-6 mb-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest">
              VOLUMES 1 - 16
            </h2>
            <span className="text-zinc-400  text-sm hidden md:block">
              SERIES: FOUNDRY_2025 // SPECS
            </span>
          </div>
        </div>

        {/* 3. The Grid Content (Sitting 'inside' the shelf) */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* === HERO PRODUCT (Volume 1) === */}
            <div className="md:col-span-2 md:row-span-2 h-full min-h-[400px]">
              <Card className="h-full w-full p-20 overflow-hidden group border-2 border-gray-100 shadow-sm relative rounded-none bg-white cursor-pointer flex flex-col items-center justify-center">

                {/* === VIDEO CONTAINER (Reduced Size) === */}
                {/* w-[85%] h-[55%] makes it smaller than the card, leaving white space */}
                <div className="relative w-full h-full shadow-lg overflow-hidden z-0 mb-16"> 
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={heroProduct.video || "/video/NEW NEXT GENERATION DESIGNER MANHOLE COVER.mp4"} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>

                {/* Content Wrapper */}
                <div className="absolute bottom-0 left-0 pt-8 z-20 w-full bg-white/90 backdrop-blur-sm border-t border-gray-100">
                  <div className="flex justify-between items-start">
                    <Badge className="mb-2 bg-transparent border border-[#B31942] text-[#B31942] hover:bg-[#B31942] hover:text-white rounded-none px-2 py-0.5">
                      TOP SELLER
                    </Badge>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black leading-tight text-[#B31942] mb-2 uppercase tracking-tight">
                    {heroProduct.title}
                  </h3>
                  
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-2">
                     <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Volume 01
                     </span>
                     {/* The Red Accent Color */}
                     <span className="  font-black text-xl">
                        {heroProduct.price}
                     </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* === GRID ITEMS (Volumes 2-16) === */}
            {gridProducts.map((product, index) => {
              // Cycle images
              const imageIndex = (index + 1) % myImages.length
              const imageSrc = myImages[imageIndex]
              const Icon = product.icon

              return (
                <Card key={product.id} className="group flex flex-col overflow-hidden border-2 border-zinc-200 hover:border-zinc-800 shadow-none hover:shadow-xl transition-all h-[320px] rounded-none">
                  <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={imageSrc}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-0 left-0 p-2 w-full flex justify-between">
                      {/* Volume Number Badge */}
                      <Badge className="bg-zinc-900 text-white rounded-none  text-xs">
                        VOL. {String(index + 2).padStart(2, '0')}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="flex-1 p-4 flex flex-col justify-between bg-white">
                    <div>
                      <h4 className="font-bold text-sm md:text-base leading-snug line-clamp-2 text-[#B31942] group-hover:text-orange-600 transition-colors uppercase ">
                        {product.title}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-3 pt-3 border-t border-zinc-100">
                      <span className="font-medium text-[#0A3161] flex items-center gap-1">
                        <Icon className="h-3 w-3" /> {product.brand}
                      </span>
                      <span className="font-bold text-[#0A3161] bg-zinc-100 px-2 py-1">
                        {product.price}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 4. The Bottom Shelf Lip (Visual Anchor) */}
        <div className="h-4 bg-zinc-800 w-full border-t border-zinc-600"></div>
      </div>

      <div className="mt-12 text-center pb-8">
        <Button size="lg" className="bg-zinc-900 text-white hover:bg-zinc-700 min-w-[200px] rounded-none">
          Download Full Spec Sheet
        </Button>
      </div>
    </section>
  )
}
