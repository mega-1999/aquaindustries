import { CheckCircle, Clock, Headset, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const cosmoBlogContent = [
  {
    icon: CheckCircle,
    title: 'Lead Management',
    description: 'Easily organize, track, and nurture leads for better conversions and growth.'
  },  
  {
    icon: CheckCircle,
    title: 'Automated Workflows',
    description: 'Save time with automatic processes that streamline sales and customer engagement.'
  },
  {
    icon: CheckCircle,
    title: 'Real-Time Insights',
    description: 'Make data-driven decisions with instant access to customer interactions and analytics'
  },
]

const CosmoBlog = () => {
  return (
    <section className='w-full px-4 sm:px-6 lg:px-10 py-3'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>

        <div className=' '>
          <div className="relative w-full aspect-video">
            <Image
              src={'/cosmoBlog.jpg'}
              alt='Live Chat Interface Demonstration'
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg shadow-xl'
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className='order-first md:order-last'>
          <div className='mb-8'>
            <h2 className='text-[22px] font-extrabold text-[#0A3161] leading-tight'>
              What is METALSVERSE Foundries CRM?
            </h2>
            <p className='mt-3 text-sm'>
              METALSVERSE Foundries's CRM is a custom-built solution designed to simplify and enhance business interactions. Tailored for B2B companies in the energy, power generation, oil & gas, and water management sectors, our CRM empowers you to efficiently manage leads, track customer engagement, and build stronger relationships. With intuitive features like real-time analytics, automated workflows, and seamless integration into our platform, businesses can streamline their sales cycles and maximize growth. METALSVERSE Foundries CRM ensures that every client interaction is organized, insightful, and actionable, allowing you to stay ahead in today's competitive market.
            </p>
          </div>

          <div className='space-y-6'>
            {cosmoBlogContent.map((item, index) => (
              <div key={index} className='flex gap-4'>
                <div className='shrink-0 pt-1'>
                  <item.icon size={24} className='h-4 w-4 text-[#B31942]' />
                </div>

                <div>
                  <h3 className='text-sm font-bold text-[#0A3161]'>
                    {item.title}
                  </h3>
                  <p className='mt-1 text-sm '>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default CosmoBlog
