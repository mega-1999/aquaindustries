"use client";

import { Building, CheckCircle2, Lock, Truck, X } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"contractor" | "supplyhouse">(
    "contractor",
  );
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [bolNumber, setBolNumber] = useState("");
  const [bolResult, setBolResult] = useState<string | null>(null);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      onClose();
    }, 2000);
  };

  const handleBolLookup = () => {
    if (!bolNumber.trim()) return;
    setBolResult(
      `BOL #${bolNumber.toUpperCase()} — Loaded on flatbed trailer at New York Foundry (Melville, NY). En route to jobsite. ETA: Tomorrow 08:00 AM EST. Driver Contact: +1 (516) 252-1111.`,
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0082FC]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#0082FC] rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative">
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
          <div className="w-12 h-12 rounded-none bg-white text-[#0082FC] border-2 border-[#5FD4FD] flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6 text-[#0082FC]" />
          </div>
          <div>
            <h3
              id="portal-modal-title"
              className="text-xl font-black text-[#0082FC] whitespace-nowrap"
            >
              Aqua Industries Client Portal
            </h3>
            <p className="text-xs sm:text-sm text-[#0082FC] font-medium mt-0.5">
              Contractor &amp; Supply House Partner Sign-In
            </p>
          </div>
        </div>

        {/* Tab Selection (Single-line whitespace-nowrap) */}
        <div className="flex rounded-none bg-white p-1 border-2 border-[#5FD4FD] mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("contractor")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-extrabold rounded-none transition-all whitespace-nowrap ${
              activeTab === "contractor"
                ? "bg-[#0082FC] text-white shadow-sm"
                : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
            }`}
          >
            Contractor Login
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("supplyhouse")}
            className={`flex-1 py-2.5 text-xs sm:text-sm font-extrabold rounded-none transition-all whitespace-nowrap ${
              activeTab === "supplyhouse"
                ? "bg-[#0082FC] text-white shadow-sm"
                : "text-[#0082FC] hover:bg-[#5FD4FD]/20"
            }`}
          >
            Supply House Partner
          </button>
        </div>

        {loginSuccess ? (
          <div className="py-8 text-center flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#5FD4FD] mb-3" />
            <h4 className="text-lg font-black text-[#0082FC]">
              Account Verified
            </h4>
            <p className="text-sm text-[#0082FC] mt-1">
              Opening contractor orders, pricing sheets, and MTR archive...
            </p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="portal-account-input"
                className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5"
              >
                {activeTab === "contractor"
                  ? "Contractor Account ID or Business Email"
                  : "Supply House Partner ID or Corporate Email"}
              </label>
              <div className="relative">
                <Building className="w-5 h-5 text-[#0082FC] absolute left-3 top-3.5" />
                <input
                  id="portal-account-input"
                  type="text"
                  required
                  placeholder={
                    activeTab === "contractor"
                      ? "e.g. estimator@civilpiping.com"
                      : "e.g. DIST-88201 or name@supplyhouse.com"
                  }
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-3 text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="portal-password-input"
                className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-[#0082FC] absolute left-3 top-3.5" />
                <input
                  id="portal-password-input"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-3 text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm pt-1">
              <label className="flex items-center gap-2 text-[#0082FC] cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded-none border-[#5FD4FD] text-[#0082FC] focus:ring-[#0082FC] accent-[#0082FC]"
                />
                <span className="whitespace-nowrap font-medium">
                  Remember terminal session
                </span>
              </label>
              <a
                href="#"
                className="text-[#0082FC] hover:underline whitespace-nowrap font-bold"
              >
                Forgot password?
              </a>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold rounded-none text-sm sm:text-base border-2 border-[#0082FC] shadow-md transition-all whitespace-nowrap"
              >
                Sign In to Corporate Account
              </button>
            </div>
          </form>
        )}

        {/* BOL Order Tracking Quick Lookup */}
        <div className="mt-6 pt-5 border-t-2 border-[#5FD4FD]/30">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0082FC] mb-2 flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#0082FC]" />
            <span>Fast BOL (Bill of Lading) Shipment Lookup</span>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter BOL # (e.g. AQUA-9941)"
              value={bolNumber}
              onChange={(e) => setBolNumber(e.target.value)}
              className="flex-1 bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-2.5 text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
            />
            <button
              type="button"
              onClick={handleBolLookup}
              className="px-4 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white border-2 border-[#0082FC] font-extrabold text-xs sm:text-sm rounded-none transition-colors whitespace-nowrap"
            >
              Track Order / BOL Lookup
            </button>
          </div>

          {bolResult && (
            <div className="mt-3 p-3.5 bg-white border-2 border-[#5FD4FD] rounded-none text-xs sm:text-sm text-[#0082FC] leading-relaxed">
              <span className="text-[#0082FC] font-bold block mb-1">
                ✓ Active Shipment Status:
              </span>
              {bolResult}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
