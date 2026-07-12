import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const heroSection = () => {
    return (
        <div className="relative z-10 container mx-auto px-4 text-center">

            <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
                Get In Touch With Us
            </h2>
            <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#B31942] mb-2">
                Metalverse  Industries | the best industry services
            </p>
            <div className="relative z-10 container mx-auto px-4 text-center">

                <h1 className="text-[30px] lg:text-[40px] font-bold leading-tight tracking-tight">
                    The World's Largest and Advanced <br />
                    Consortium of
                    <span className="block mt-2 text-[#B31942] uppercase tracking-wide drop-shadow-lg">
                        Foundries, Forge Shops & Fabricators
                    </span>
                    <span className="block mt-2 text-2xl  md:text-4xl font-light ">
                        Under One Universe
                    </span>
                </h1>

                {/* Tagline */}
                <p className="text-xl text-[#B31942] md:text-[22px] font-medium   italic">
                    "Think Fast and Succeed Faster"
                </p>

                <div className="flex flex-col py-5 sm:flex-row items-center justify-center gap-4 mt-8">
                    <Button className="bg-[#B31942] hover:bg-[#B31942] text-white px-10 py-7 text-xl rounded-md font-bold shadow-[0_0_20px_rgba(204,34,33,0.4)] transition-all transform hover:scale-105">
                        Explore Capabilities
                    </Button>
                    <Button variant="outline" className="px-10 text-[#B31942] border-2 border-[#B31942] py-7 text-xl  hover:bg-white/10 backdrop-blur-sm">
                        Succeed With Us <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
            <p className="text-[18px] text-[#0A3161] max-w-4xl mx-auto mb-16">Engage with dedicated experts
            </p>
        </div>
    )
}

export default heroSection

