import { Clock, Headset, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const chatBlogContent = [
  {
    icon: Clock,
    title: 'Instant Response Time',
    description: 'Address customer concerns in real time, reducing wait times and improving overall user satisfaction and retention.'
  },
  {
    icon: Headset,
    title: 'Personalized Support',
    description: 'Provide tailored solutions by connecting users directly with experts, ensuring each query is handled with care and precision, enhancing customer trust.'
  },
  {
    icon: MessageCircle,
    title: 'Seamless Integration',
    description: 'Our live chat integrates with METALSVERSE Foundriess CRM, ensuring all interactions are logged and easily accessible for future follow-up.'
  },
]

const ChatBlog = () => {
  return (
    // Outer container: Apply standard padding and max width
    <section className='w-full px-4 sm:px-6 lg:px-10 py-3'>

      {/* Grid Container: Stacks columns on mobile, uses a 2-column grid on medium screens and up */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center'>

        <div>
          {/* Main Heading and Subtitle */}
          <div className='mb-8'>
            <h2 className='text-[22px]   font-extrabold text-[#0A3161] leading-tight'>
              Live Chat: Resolve up to 80% of cases
            </h2>
            <p className='mt-3 text-sm text-[#0A3161]/80'>
              METALSVERSE Foundries’s Live Chat enables real-time support, allowing businesses to resolve up to 80% of inquiries instantly and efficiently.
            </p>
          </div>

          {/* Features List */}
          <div className='space-y-6'>
            {chatBlogContent.map((item, index) => (
              <div key={index} className='flex gap-4'>
                {/* Icon Container: Ensure icon is visible and properly sized */}
                <div className='shrink-0 pt-1'>
                  <item.icon size={24} className='h-6 w-6 text-[#B31942]' />
                </div>

                {/* Text Container */}
                <div>
                  <h3 className='text-[14px] font-bold text-[#0A3161]'>
                    {item.title}
                  </h3>
                  <p className='mt-1 text-sm text-[#0A3161]/70'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Image Column (Grid Item 2) */}
        <div className='order-first md:order-last'> {/* Place image first on mobile, last on desktop */}
          <div className="relative w-full aspect-video">
            <Image
              src={'/chatblog.jpeg'}
              alt='Live Chat Interface Demonstration'
              // Use 'fill' to make the image take up the full space of the parent container
              fill
              style={{ objectFit: 'contain' }}
              className='rounded-lg shadow-xl'
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatBlog