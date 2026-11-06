"use client";

import { MapPin, PhoneCall, Truck, X } from "lucide-react";
import type React from "react";
import { DISTRIBUTION_YARDS } from "../../data/waterworks-data";
import type { YardLocation } from "../../types";

interface YardSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedYardId: string;
  onSelectYard: (yard: YardLocation) => void;
}

export const YardSelectorModal: React.FC<YardSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedYardId,
  onSelectYard,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="yard-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3087ff]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#3087ff] rounded-none max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#3087ff] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#3087ff] hover:bg-[#3087ff]/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#3087ff]/30">
          <div className="w-12 h-12 rounded-none bg-white text-[#3087ff] border-2 border-[#3087ff] flex items-center justify-center shrink-0">
            <Truck className="w-6 h-6 text-[#3087ff]" />
          </div>
          <div>
            <h3
              id="yard-modal-title"
              className="text-xl sm:text-2xl font-black text-[#3087ff] whitespace-nowrap"
            >
              Aqua Industries Stocking Yards &amp; Rail Terminals
            </h3>
            <p className="text-xs sm:text-sm text-[#3087ff] font-medium mt-0.5">
              Select Your Designated Regional Hub for Accurate Jobsite Freight
            </p>
          </div>
        </div>

        {/* 4 Regional Yard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DISTRIBUTION_YARDS.map((yard) => {
            const isSelected = selectedYardId === yard.id;
            return (
              <div
                key={yard.id}
                className={`p-5 rounded-none border-2 transition-all flex flex-col justify-between ${isSelected
                    ? "bg-white border-[#3087ff] shadow-sm"
                    : "bg-white border-[#3087ff] hover:bg-[#3087ff]/10"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-extrabold text-[#3087ff] uppercase tracking-wider">
                      {yard.city}, {yard.state}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-none bg-white text-[#3087ff] border border-[#3087ff] whitespace-nowrap">
                      {yard.stockStatus}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-black text-[#3087ff] mb-1">
                    {yard.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3087ff] mb-3">
                    {yard.address}
                  </p>

                  {/* Stock Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm bg-white p-3.5 rounded-none border-2 border-[#3087ff] mb-3 shadow-xs">
                    <div>
                      <span className="text-[#3087ff] text-xs font-bold block">
                        FITTINGS IN STOCK:
                      </span>
                      <span className="text-[#3087ff] text-sm sm:text-base font-extrabold">
                        {yard.inventoryFittingsTons} Tons
                      </span>
                    </div>
                    <div>
                      <span className="text-[#3087ff] text-xs font-bold block">
                        RESTRAINTS:
                      </span>
                      <span className="text-[#3087ff] text-sm sm:text-base font-extrabold">
                        {yard.inventoryRestraintsUnits.toLocaleString()} Units
                      </span>
                    </div>
                  </div>

                  <div className="text-xs sm:text-sm text-[#3087ff] space-y-1.5 font-medium">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#3087ff] shrink-0" />
                      <span>{yard.coverageRadius}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-[#3087ff] shrink-0" />
                      <span>{yard.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Yard Select Button */}
                <div className="mt-4 pt-3 border-t-2 border-[#3087ff]/30">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectYard(yard);
                      onClose();
                    }}
                    className={`w-full py-2.5 px-4 rounded-none text-xs sm:text-sm font-extrabold transition-colors whitespace-nowrap border-2 ${isSelected
                        ? "bg-[#3087ff] text-white border-[#3087ff] shadow-sm"
                        : "bg-white hover:bg-[#3087ff]/20 text-[#3087ff] border-[#3087ff]"
                      }`}
                  >
                    {isSelected
                      ? "✓ Active Primary Hub"
                      : "Set as Primary Shipping Yard"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t-2 border-[#3087ff]/30 text-xs sm:text-sm text-[#3087ff] text-center font-medium leading-relaxed">
          Flatbed trucks depart all stocking hubs Monday through Friday at 06:00
          CST. Jobsite offloading remains the customer’s responsibility.
        </div>
      </div>
    </div>
  );
};
