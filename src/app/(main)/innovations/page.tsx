
import { liveChatData } from "@/app/(main)/our-values/content";
import { FeatureBlockItem } from "@/app/components/FeatureBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Globe } from "lucide-react";
import Image from "next/image";
import HotProductVideos from "../category/HotProductVideos";
import { newInnovationData } from "@/lib/newsData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const allFeatureBlocks = [
  liveChatData[0],
];
const features = [
  {
    icon: Star,
    title: "Global Engineering Excellence",
    description:
      "Mega Foundries stands at the forefront of precision manufacturing, delivering high-strength metal solutions engineered to global standards. With decades of expertise, we combine advanced metallurgy, cutting-edge machining, and modern production systems to create products that power industries worldwide.",
  },
  {
    icon: Users,
    title: "Innovation-Driven Manufacturing",
    description:
      "Our commitment to continuous innovation is reflected in every process we execute. From automated foundry operations to AI-supported quality control, Mega Foundries integrates new-age technologies to ensure consistency, reliability, and unmatched performance across all product lines.",
  },
  {
    icon: Globe,
    title: "Worldwide Infrastructure & Partnerships",
    description:
      "With a globally connected network and strong partnerships across government, commercial, and industrial sectors, Mega Foundries delivers end-to-end foundry, fabrication, and engineering solutions. We supply, manufacture, and support our clients at scale, ensuring seamless delivery from raw material sourcing to final deployment.",
  },
];
const AboutSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 z-0 h-[225px] w-full">
        <Image
          src={'/assets/image14.jpeg'}
          alt="Industrial background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A3161]/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
          Innovations
        </h2>

        {/* === 3. CONTENT WRAPPER === */}
        <div className="relative z-10 container mx-auto px-4     text-center">
          <p className="text-[20px]   font-semibold uppercase tracking-widest text-[#B31942] mb-2">
            MEGA FOUNDRIES - FOR THE INDUSTRY
          </p>
          {/* MOBILE CARD EFFECT: Adds a white glass box on mobile only so text is readable */}
          <div className="inline-block md:inline w-full md:w-auto  md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-xl p-6 md:p-0 shadow-lg md:shadow-none border border-white/50 md:border-none">

            {/* HEADINGS */}
            <h1 className="text-gray-800   font-bold leading-tight tracking-tight mt-2">

              {/* Line 1 */}
              <span className="block text-[18px] md:text-[40px] whitespace-normal md:whitespace-nowrap">
                WHY LIMIT YOURSELF
              </span>


            </h1>

            {/* Quote */}
            <p className="text-[14px] md:text-[22px] text-[#B31942] font-medium italic mt-4 mb-6">
              ROLLS ROYCE FROM BRITIAN
            </p>


            {/* Bottom Text */}
            <p className="text-[11px] md:text-[18px] text-gray-800   mt-6 font-semibold uppercase tracking-wide">
              ROLEX FROM SWITZERLAND
            </p>
            <p className="text-[11px] md:text-[18px] text-gray-800   mt-6 font-semibold uppercase tracking-wide">
              ROLEX FROM THE BEST FROM OUR NETWORK OF ADVANCED PRICE ATVANTAGE PRODUCTS
            </p>
          </div>

        </div>
      </div>
      <HotProductVideos
        title={newInnovationData.title}
        videos={newInnovationData.videos}
      />
    </section>
  );
}



export default AboutSection

