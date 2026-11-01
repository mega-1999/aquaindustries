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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0082FC]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#0082FC] rounded-none max-w-3xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#5FD4FD]/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#5FD4FD]/30">
          <div className="w-10 h-10 rounded-none bg-white text-[#0082FC] border-2 border-[#5FD4FD] flex items-center justify-center shrink-0">
            <Truck className="w-5 h-5 text-[#0082FC]" />
          </div>
          <div>
            <h3
              id="yard-modal-title"
              className="text-lg font-bold text-[#0082FC] whitespace-nowrap"
            >
              Aqua Industries Stocking Yards &amp; Rail Terminals
            </h3>
            <p className="text-xs text-[#0082FC] font-medium">
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
                className={`p-5 rounded-none border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#0082FC] shadow-sm"
                    : "bg-white border-[#5FD4FD] hover:bg-[#5FD4FD]/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0082FC] uppercase tracking-wider">
                      {yard.city}, {yard.state}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-none bg-white text-[#0082FC] border border-[#5FD4FD] whitespace-nowrap">
                      {yard.stockStatus}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0082FC] mb-1">
                    {yard.name}
                  </h4>
                  <p className="text-xs text-[#0082FC] mb-3">{yard.address}</p>

                  {/* Stock Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] bg-white p-3 rounded-none border-2 border-[#5FD4FD] mb-3 shadow-xs">
                    <div>
                      <span className="text-[#0082FC] block">
                        FITTINGS IN STOCK:
                      </span>
                      <span className="text-[#0082FC] font-bold">
                        {yard.inventoryFittingsTons} Tons
                      </span>
                    </div>
                    <div>
                      <span className="text-[#0082FC] block">RESTRAINTS:</span>
                      <span className="text-[#0082FC] font-bold">
                        {yard.inventoryRestraintsUnits.toLocaleString()} Units
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#0082FC] space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                      <span>{yard.coverageRadius}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                      <span>{yard.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Yard Select Button */}
                <div className="mt-4 pt-3 border-t-2 border-[#5FD4FD]/30">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectYard(yard);
                      onClose();
                    }}
                    className={`w-full py-2 px-3 rounded-none text-xs font-bold transition-colors whitespace-nowrap border-2 ${
                      isSelected
                        ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                        : "bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] border-[#5FD4FD]"
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
        <div className="mt-6 pt-4 border-t-2 border-[#5FD4FD]/30 text-xs text-[#0082FC] text-center font-medium">
          Flatbed trucks depart all stocking hubs Monday through Friday at 06:00
          CST. Jobsite offloading remains the customer’s responsibility.
        </div>
      </div>
    </div>
  );
};
