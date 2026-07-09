import { allSeries } from "@/lib/seriesData";
import SeriesCard from "@/components/SeriesCard";
import Image from "next/image";

export default function CatalogPage() {
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
          Our Product Category
        </h2>
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#B31942] mb-2">
          JUST HIGHER STANDARDS
        </p>
        <h3 className="text-[25px] sm:text-4xl font-bold max-w-4xl mx-auto mb-16">
          Streamline your entire material procurement process with intelligent AI automation
        </h3>
      </div>
 

      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">

          {/* Company Header (Simulating the center block of the image) */}
          <div className="flex flex-col items-center justify-center mb-16 text-center space-y-4">
          </div>

          {/* The Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allSeries.map((series, index) => (
              <SeriesCard
                key={index}
                title={series.title}
                items={series.items}
              />
            ))}
          </div>

        </div>
      </div>
    </section>

  );
}
