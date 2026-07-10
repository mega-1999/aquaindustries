 
import Image from "next/image";
// Combine all blocks into a single array
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { title } from "process";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// 1. Define the Interface
interface OfficeCardProps {
  title: string;
  flagSrc: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  mapSrc: string;
}

// 2. Apply the Interface to the component
const OfficeCard = ({
  title,
  flagSrc,
  description,
  address,
  phone,
  email,
  mapSrc
}: OfficeCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-8 flex flex-col items-center text-center border-t-4 border-transparent hover:border-[#B31942] transition-all duration-300 relative mt-8">
      {/* Circular Flag Container overlapping top border */}
      <div className="absolute -top-8 p-1 bg-white rounded-full shadow-sm">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#0A3161]/10 relative">
          {/* Replace src with actual flag image assets */}
          <Image width={1200} height={600} src={flagSrc} alt={`${title} flag`} className="w-full h-full object-cover" />
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-[#0A3161] mt-8 mb-4">{title}</h3>
      <p className="text-[#0A3161]/70 text-sm mb-8 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>

      <div className="w-full space-y-4 text-left mb-8 text-[#0A3161]/80 text-sm">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#0A3161]/60 mt-0.5 shrink-0" />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[#0A3161]/60 shrink-0" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[#0A3161]/60 shrink-0" />
          <span>{email}</span>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-48 bg-[#0A3161]/10 rounded-lg overflow-hidden">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${title} Map`}
        ></iframe>
      </div>
    </div>
  );
};


// Main Contact Us Page Component
const ContactUs = () => {
  // Data for the offices
  // Data for the Canada office
  const canadaData = {
    title: "Canada Office",
    flagSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/320px-Flag_of_Canada_%28Pantone%29.svg.png",
    description: "We are dedicated to providing excellent service. Contact us anytime; we look forward to assisting you",
    address: "18 King St E Ste 1400, Toronto, ON M5C IC4, CANADA",
    phone: "705 710 5505",
    email: "info@megafoundries.com",
    // Google Map Embed for Toronto
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.8097336271!2d-79.54286569827758!3d43.71840371276628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1652901234567!5m2!1sen!2sus"
  };

  // Data for the USA office
  const usaData = {
    title: "USA Office",
    flagSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    description: "We are dedicated to providing excellent service. Contact us anytime; we look forward to assisting you",
    address: "105 MAXES ROAD Melville, NY 11737 USA",
    phone: "307 788 7700",
    email: "info@megafoundries.com",
    // Google Map Embed for New York
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d-74.11976389064203!3d40.69766374869555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1652901987654!5m2!1sen!2sus"
  };


  return (
    <section className="relative w-full py-16 sm:py-24 bg-white">


      <div className="absolute inset-0 z-0 h-[225px] w-full">
        <Image
          src={'/assets/image16.jpg'}
          alt="Contact Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0A3161]/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">

        <h2 className="text-[40px] pb-12 font-extrabold tracking-tight text-white mb-8">
          Get In Touch With Us
        </h2>
        <p className="text-[20px] py-5 font-semibold uppercase tracking-widest text-[#B31942] mb-2">
          MEGA FOUNDRIES | the best industry services
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

          {/* CTA Buttons */}
          <div className="flex flex-col py-5 sm:flex-row items-center justify-center gap-4 mt-8">
            <Button className="bg-[#B31942] hover:bg-[#B31942] text-white px-10 py-7 text-xl rounded-md font-bold shadow-[0_0_20px_rgba(204,34,33,0.4)] transition-all transform hover:scale-105">
              Explore Capabilities
            </Button>
            <Button variant="outline" className="px-10 text-[#B31942] border-2 border-[#B31942] py-7 text-xl  hover:bg-white/10 backdrop-blur-sm">
              Succeed With Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
        <p className="text-[18px] text-[#0A3161] max-w-4xl mx-auto mb-16">
          Engage with dedicated experts
        </p>
      </div>
      <div className="bg-[#0A3161]/5 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section 1: Office Locations Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-24">
            <OfficeCard {...canadaData} />
            <OfficeCard {...usaData} />
          </div>
          {/* Section 2: Form Header Text */}
          <div className="text-center mb-12">
            <h4 className="text-[#B31942] font-bold uppercase tracking-wider mb-3">
              MEGA FOUNDRIES | SEND US A MESSAGE
            </h4>
            <p className="text-[#0A3161]/70">
              The next-generation platform for industrial trade.
            </p>
          </div>
          {/* Section 3: Contact Form Container */}
          <div className="bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-3xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* Left Side Text Content (takes 2/5 columns on large screens) */}
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl md:text-4xl text-[#0A3161]">
                  Send Your Inquiry. <span className="font-bold block mt-2">We Will Respond Shortly.</span>
                </h2>
                <p className="text-[#0A3161]/70 leading-relaxed">
                  We are committed to exceeding your expectations. Feel free to send us your questions or suggestions—we are here to listen and assist.
                </p>
              </div>

              {/* Right Side Form (takes 3/5 columns on large screens) */}
              <div className="lg:col-span-3">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="bg-[#0A3161]/5 border-[#0A3161]/10"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="bg-[#0A3161]/5 border-[#0A3161]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="bg-[#0A3161]/5 border-[#0A3161]/10 "
                    />
                  </div>

                  <div>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      className="min-h-[150px] bg-[#0A3161]/5 border-[#0A3161]/10  resize-none"
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button
                      type="submit"
                      variant="outline"
                      className="h-auto py-2 px-4 border border-[#B31942] text-[#B31942] hover:bg-[#B31942]/5 hover:text-[#B31942] font-semibold text-base transition-all duration-300"
                    >
                      Submit Request!
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactUs

