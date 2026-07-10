import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft } from "lucide-react";
import { materialsData } from "@/lib/materialsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MaterialPage({ params }: PageProps) {

  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const data = materialsData[slug];

  if (!data) {
    return notFound();
  }

  const Icon = data.icon;

  return (
    <div className="min-h-screen bg-white">

      <div className="relative h-[400px] w-full">
        <Image
          src={data.image || "/assets/image11.jpg"}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A3161]/70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="bg-[#B31942] p-3 rounded-full mb-4">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-[30px]   font-bold text-white mb-4">{data.title}</h1>
          <p className="text-gray-200 text-xl max-w-2xl">{data.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/materials" className="inline-flex items-center text-[#0A3161]/70 hover:text-[#B31942] mb-8 transition-colors text-xl">
          <ChevronLeft className="w-3 h-3 mr-1" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-[#0A3161] mb-6 border-b pb-2">Key Properties</h2>
            <ul className="space-y-4">
              {data.properties.map((prop: string, i: number) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-3 h-3 text-[#B31942] mr-3 shrink-0" />
                  <span className="text-[#0A3161] text-sm">{prop}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0A3161]/5 p-8 rounded-2xl border border-[#0A3161]/10">
            <h2 className="text-2xl font-bold  text-xl text-[#0A3161] mb-6">Common Applications</h2>
            <div className="flex flex-wrap gap-3">
              {data.applications.map((app: string, i: number) => (
                <span key={i} className="bg-white px-4  text-sm py-2 rounded-full border border-[#0A3161]/10 text-[#0A3161] shadow-sm">
                  {app}
                </span>
              ))}
            </div>
            <div className="mt-10 p-6 text-xl bg-[#B31942]/5 rounded-xl border border-[#B31942]/10">
              <h3 className="font-bold text-[#0A3161] mb-2">Need a custom ?</h3>
              <Link href="/custom-projects">
                <Button className="w-full  text-xl bg-[#B31942] hover:bg-[#B31942] text-white mt-4">
                  Request Quote for {data.title}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}