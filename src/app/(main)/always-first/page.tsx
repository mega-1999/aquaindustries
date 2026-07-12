
import { liveChatData } from "@/app/(main)/our-values/content";
import { FeatureBlockItem } from "@/app/components/FeatureBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Globe } from "lucide-react";
import Image from "next/image";
import Testimonials from "./Testimonials";
 
const AboutSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 z-0 h-[225px] w-full">
        <Image
          src={'/assets/image17.jpg'}
          alt="Industrial background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A3161]/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
          Our Products
        </h2>
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#B31942] mb-2">
          Metalverse  Industries - Products
        </p>
      </div>
      <Testimonials />
    </section>
  );
}



export default AboutSection

