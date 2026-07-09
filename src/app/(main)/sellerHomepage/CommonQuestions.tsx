'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What tools are available for foundries on Mega Portal?",
    answer: "Sellers have access to a full suite of industrial tools including the Product Calculator, Dynamic Pricing Engine for raw material indexing, and a Smart RFQ Manager to handle technical blueprints."
  },
  {
    id: 2,
    question: "How do I access production analytics?",
    answer: "Go to 'Seller Tools' and select 'Analytics' to view inquiry trends, casting demand heatmaps, and your profile's performance metrics against global benchmarks."
  },
  {
    id: 3,
    question: "Can I set up tier-based pricing for alloys?",
    answer: "Yes. Our Pricing Engine allows you to set volume-based discounts (e.g., pricing per metric ton) and adjust costs dynamically based on LME (London Metal Exchange) rates."
  },
  {
    id: 4,
    question: "How do I manage multiple RFQs efficiently?",
    answer: "The RFQ Dashboard centralizes all incoming requests. You can filter by alloy type, weight, or delivery deadline, and use templates to submit quotes 70% faster."
  },
  {
    id: 5,
    question: "Is there a way to automate responses to standard queries?",
    answer: "Yes. You can set up 'Smart Auto-Replies' for common questions regarding certifications (ISO/AS9100), lead times, and shipping terms."
  }
];

export default function CommonQuestions() {
  // State to track which FAQ is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Defaulting 2nd item open like image, or use null

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
        
        {/* === HEADER === */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Common <span className="text-[#B31942]">Questions</span>
          </h2>
        </div>

        {/* === FAQ LIST === */}
        <div className="flex flex-col space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="w-full">
                
                {/* Question Bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`
                    w-full flex items-center justify-between p-5 text-left transition-all duration-200
                    bg-gray-50 hover:bg-gray-100
                    border-l-[6px] ${isOpen ? 'border-[#B31942]' : 'border-[#B31942]'} 
                    /* Note: The image shows red border for all items, even closed ones */
                  `}
                >
                  <span className="text-lg font-medium text-gray-800">
                    <span className="font-bold text-gray-900 mr-2">Q:</span> 
                    {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {/* Answer Area (Expandable) */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-5 pl-8 bg-white text-gray-600 text-base leading-relaxed border-l-[6px] border-transparent">
                    <span className="font-bold text-gray-900 mr-2">A:</span> 
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
