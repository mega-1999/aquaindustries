import React from 'react';
import { BadgeCheck, Handshake, Package, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface FeatureItemProps {
  icon: React.ElementType; // This handles the Lucide components (e.g., BadgeCheck)
  title: string;
  description: string;
}

const FeatureItem = ({ icon: Icon, title, description }: FeatureItemProps) => (<div className="flex flex-col items-start gap-3">
  <div className="p-0">
    <Icon className="w-10 h-10 text-[#B31942]" strokeWidth={2} />
  </div>
  <div className="space-y-2">
    <h3 className="text-xl font-bold text-[#0A3161]">{title}</h3>
    <p className="text-[#0A3161]/80 leading-relaxed text-base">
      {description}
    </p>
  </div>
</div>
);

export default function App() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Connect with Verified Buyers",
      description: "Engage only with authenticated, serious buyers. We filter out the noise so you focus on real opportunities."
    },
    {
      icon: Handshake,
      title: "Personal Support",
      description: "Get a dedicated partner to guide you through the platform. We're here to help you succeed—every step of the way."
    },
    {
      icon: Package,
      title: "Free Listing",
      description: "Upload your products at no cost. Create and preview your listings—no payment needed."
    },
    {
      icon: Globe,
      title: "Reach Buyers Globally",
      description: "Gain exposure to thousands of industrial buyers worldwide. Your machines get discovered by the right audience, everywhere."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center font-sans">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
        <div className="text-center">
          <h2 className="text-3xl pb-8 md:text-4xl font-bold text-[#0A3161]">
            Start Selling Smarter with Metalverse  Industries?
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start">

          {/* Left Column: Image */}
          <div className="lg:col-span-1">
            <Image
              width={1200}
              height={600}
              src="/assets/image11.jpg"
              alt="Two business professionals shaking hands in an industrial factory setting"
              className="w-full h-full object-cover rounded-4xl shadow-xl"
            />
          </div>

          {/* Right Column: Features */}
          <div className="lg:col-span-2 flex flex-col justify-between items-center h-full space-y-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex justify-start md:justify-end pt-4">
              <Button variant="destructive" size="lg" className="text-base px-8 py-6 font-semibold bg-[#B31942] hover:bg-[#B31942]">
              <Link href={'/sellerHomepage'}>Join As Supplier</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
