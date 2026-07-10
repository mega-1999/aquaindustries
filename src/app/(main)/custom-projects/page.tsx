import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Cog, UploadCloud } from 'lucide-react';
import Image from 'next/image';

export default function CustomProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero */}
      <div className="relative h-[300px] bg-[#0A3161] flex items-center justify-center overflow-hidden">
         {/* Optional: Add background image here like previous pages */}
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="relative z-10 text-center px-4">
            <Cog className="w-16 h-16 text-[#B31942] mx-auto mb-4 animate-spin-slow" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Custom Metal Projects</h1>
            <p className="text-[#0A3161]/40 mt-4 text-lg">No limits on metal selections. Tailored to your specs.</p>
         </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A3161] mb-4">
              If you can design it, <span className="text-[#B31942]">we can cast it.</span>
            </h2>
            <p className="text-[#0A3161]/80 mb-8 leading-relaxed">
              Our engineering team specializes in complex geometries, unique alloy compositions, and large-scale productions. Whether you need a prototype or a production run of 10,000 units, we have the infrastructure to deliver.
            </p>

            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#B31942]/5 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[#B31942] font-bold text-xl">1</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#0A3161]">Consultation</h3>
                        <p className="text-sm text-[#0A3161]/70">Review specs with our metallurgists.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#B31942]/5 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[#B31942] font-bold text-xl">2</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#0A3161]">Pattern Making</h3>
                        <p className="text-sm text-[#0A3161]/70">3D modeling and mold creation.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#B31942]/5 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[#B31942] font-bold text-xl">3</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#0A3161]">Casting & Finishing</h3>
                        <p className="text-sm text-[#0A3161]/70">Pouring, cooling, and CNC machining.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#0A3161]/5 p-8 rounded-2xl border border-[#0A3161]/10 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Start Your Custom Project</h3>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Project Description</label>
                    <Textarea placeholder="Describe dimensions, material requirements, and estimated quantity..." className="h-32" />
                </div>

                <div className="border-2 border-dashed border-[#0A3161]/20 rounded-lg p-6 text-center hover:bg-[#0A3161]/10 cursor-pointer transition-colors">
                    <UploadCloud className="w-8 h-8 text-[#0A3161]/60 mx-auto mb-2" />
                    <p className="text-sm text-[#0A3161]/70">Upload Blueprints / CAD Files</p>
                </div>

                <Button className="w-full bg-[#B31942] hover:bg-[#B31942] text-white py-6">
                    Submit Request
                </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
