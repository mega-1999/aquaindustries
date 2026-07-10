
import { liveChatData } from "@/app/(main)/our-values/content";
import { FeatureBlockItem } from "@/app/components/FeatureBlock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, Globe } from "lucide-react";
import Image from "next/image";
const allFeatureBlocks = [
  liveChatData[0],
];
const features = [
  {
    icon: Star,
    title: "Global Engineering Excellence",
    description:
      "METALSVERSE Foundries stands at the forefront of precision manufacturing, delivering high-strength metal solutions engineered to global standards. With decades of expertise, we combine advanced metallurgy, cutting-edge machining, and modern production systems to create products that power industries worldwide.",
  },
  {
    icon: Users,
    title: "Innovation-Driven Manufacturing",
    description:
      "Our commitment to continuous innovation is reflected in every process we execute. From automated foundry operations to AI-supported quality control, METALSVERSE Foundries integrates new-age technologies to ensure consistency, reliability, and unmatched performance across all product lines.",
  },
  {
    icon: Globe,
    title: "Worldwide Infrastructure & Partnerships",
    description:
      "With a globally connected network and strong partnerships across government, commercial, and industrial sectors, METALSVERSE Foundries delivers end-to-end foundry, fabrication, and engineering solutions. We supply, manufacture, and support our clients at scale, ensuring seamless delivery from raw material sourcing to final deployment.",
  },
];
const AboutSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">
      <div className="absolute inset-0 z-0 h-[225px] w-full">
        <Image
          src={'/assets/image13.jpg'}
          alt="Industrial background image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A3161]/60"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
          Ventures
        </h2>
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#B31942] mb-2">
          METALSVERSE FOUNDRIES - FOR THE INDUSTRY
        </p>
        <h3 className="text-[25px] sm:text-4xl font-bold max-w-4xl mx-auto mb-16">
          Streamline your entire material procurement process with intelligent AI automation
        </h3>
      </div>
      <div className="relative z-10  mx-auto px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 border-[#0A3161]/10 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/95"
            >
              <CardHeader className="flex flex-col items-center pt-10 pb-4">
                <div className="w-12 h-12 rounded-full border-2 border-red-300 bg-[#B31942]/5 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-[#B31942]" />
                </div>
                <CardTitle className="text-[20px] font-semibold text-[#0A3161]">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center px-6 pb-10">
                <p className="text-sm text-justify text-[#0A3161]/80 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {liveChatData.map((block, index) => (
        <FeatureBlockItem
          key={block.id}
          data={block}
          imageOnLeft={index % 2 !== 0}
        />
      ))}
    </section>
  );
}



export default AboutSection

