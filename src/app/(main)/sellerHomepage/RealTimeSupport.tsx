'use client';

import React from 'react';
import { MessageSquareText } from 'lucide-react';

export default function RealTimeSupport() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* === LEFT COLUMN: 24/7 SUPPORT === */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#B31942]">
              24/7 real-time support.
            </h2>

            <p className="text-[#B31942] font-medium text-xl">
              We're here for you — anytime, every day.
            </p>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Mega Foundries, production doesn't sleep. Whether you need help setting up
                your foundry profile, resolving a technical query, or understanding alloy index pricing — our team is
                available 24/7 to assist you.
              </p>
              <p>
                You can reach us via live chat, email, or direct engineering support requests — and get fast,
                reliable help whenever you need it.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <h4 className="text-[#B31942] font-bold text-lg">Why it matters:</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>- No downtime — get help whenever your shift is running</li>
                <li>- Fast resolution for technical casting queries</li>
                <li>- Personalized support for foundries of all capacities</li>
                <li>- Dedicated account managers for verified partners</li>
              </ul>
            </div>
          </div>

          {/* === RIGHT COLUMN: LIVE CHAT === */}
          <div className="space-y-6">

            {/* Header with Icon */}
            <div className="flex items-start gap-4 mb-2">
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <MessageSquareText className="w-8 h-8 text-gray-800" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-gray-900 font-medium text-lg">Online Chat</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#B31942] mt-1">
                  Live Chat Now
                </h2>
              </div>
            </div>

            <p className="text-[#B31942] font-medium text-lg">
              Connect instantly with buyers — no delays, no barriers.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Mega Foundries' built-in Live Chat lets you communicate directly with
              potential procurement officers in real time. Whether it's answering specification
              questions, negotiating tonnage rates, or sharing CAD files — you're
              always just a message away.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              You can reach us via live chat, email, or direct engineering support requests — and get fast,
              reliable help whenever you need it.
            </p>

            <div className="pt-6 space-y-4">
              <h4 className="text-[#B31942] font-bold text-lg">Key features:</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>- Real-time messaging between foundry and OEM buyer</li>
                <li>- Share blueprints, certifications, and heat charts instantly</li>
                <li>- Faster RFQ conversion and stronger partner trust</li>
                <li>- Full chat history for audit trails and clarity</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
