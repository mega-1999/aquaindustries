"use client";

import {
  AlertCircle,
  Building,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  EyeOff,
  FileCheck2,
  Lock,
  Phone,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

export default function ProfilePage() {
  const { currentUser, pendingCount } = useAuth();

  const [activeTab, setActiveTab] = useState<"overview" | "commercial" | "bol">(
    "overview",
  );

  // BOL lookup state
  const [bolSearch, setBolSearch] = useState("");
  const [bolResult, setBolResult] = useState<string | null>(null);

  const handleTrackBol = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bolSearch.trim()) return;
    setBolResult(
      `BOL #${bolSearch.toUpperCase()} • 24 Tons AWWA C110 Ductile Iron Fittings • Dispatched from Melville, NY Yard on Trailer #TR-409 • Driver Contact: +1 (516) 252-1111 • Status: En Route (ETA: Today 02:30 PM EST)`,
    );
  };

  return (
    <DashboardLayout
      activePage="profile"
      title="Commercial Profile Dashboard"
      subtitle="Corporate Licensure, Wholesale Terms & Certified Mill Test Records"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        {currentUser && (
          <div className="space-y-6">
            {/* Navigation Tabs */}
            <div className="flex border-b-2 border-[#3087ff] bg-white px-2">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "overview"
                    ? "border-[#3087ff] bg-[#3087ff] text-white"
                    : "border-transparent text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                Profile Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("commercial")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "commercial"
                    ? "border-[#3087ff] bg-[#3087ff] text-white"
                    : "border-transparent text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                Commercial Privileges
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bol")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "bol"
                    ? "border-[#3087ff] bg-[#3087ff] text-white"
                    : "border-transparent text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                BOL Shipment &amp; MTRs
              </button>
            </div>

            {/* Tab 1: Profile Overview */}
            {activeTab === "overview" && (
              <div className="bg-white border-2 border-[#3087ff] p-6 sm:p-8 space-y-6 shadow-md">
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#3087ff] mb-4 pb-2 border-b border-[#3087ff]/20">
                    Corporate Identity &amp; Licensure
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Registered Entity
                      </span>
                      <strong className="text-sm font-black text-[#3087ff] block truncate">
                        {currentUser.companyName}
                      </strong>
                    </div>

                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Account Classification
                      </span>
                      <strong className="text-sm font-black text-[#3087ff] block">
                        {currentUser.accountType}
                      </strong>
                    </div>

                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Primary Authorized Contact
                      </span>
                      <strong className="text-sm font-black text-[#3087ff] block">
                        {currentUser.fullName}
                      </strong>
                    </div>

                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Direct Business Email
                      </span>
                      <strong className="text-sm font-mono font-bold text-[#3087ff] block truncate">
                        {currentUser.email}
                      </strong>
                    </div>

                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Dispatch Phone
                      </span>
                      <strong className="text-sm font-mono font-bold text-[#3087ff] block">
                        {currentUser.phone}
                      </strong>
                    </div>

                    <div className="p-3.5 bg-[#3087ff]/5 border border-[#3087ff]/30">
                      <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                        Federal Tax ID / License #
                      </span>
                      <strong className="text-sm font-mono font-bold text-[#3087ff] block">
                        {currentUser.taxIdOrLicense}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Compliance Vault */}
                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#3087ff] mb-4 pb-2 border-b border-[#3087ff]/20">
                    Compliance Certificates &amp; Tax Documents
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 border-2 border-emerald-600 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase text-emerald-800 block">
                          W-9 Taxpayer Identification
                        </span>
                        <span className="text-sm font-black text-emerald-950 flex items-center gap-1.5 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Verified on File</span>
                        </span>
                      </div>
                      <FileCheck2 className="w-8 h-8 text-emerald-600 shrink-0" />
                    </div>

                    <div className="p-4 bg-emerald-50 border-2 border-emerald-600 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase text-emerald-800 block">
                          State Resale Exemption Certificate
                        </span>
                        <span className="text-sm font-black text-emerald-950 flex items-center gap-1.5 mt-1">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Active Tax Exemption</span>
                        </span>
                      </div>
                      <FileCheck2 className="w-8 h-8 text-emerald-600 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* If Super-Admin */}
                {currentUser.role === "super-admin" && (
                  <div className="p-5 bg-[#3087ff] text-white border-2 border-[#3087ff] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-[#3087ff]" />
                        <h4 className="font-black text-base uppercase">
                          Super-Admin Master Approval Panel
                        </h4>
                      </div>
                      {pendingCount > 0 && (
                        <span className="px-3 py-1 bg-amber-400 text-[#3087ff] font-black text-xs uppercase">
                          {pendingCount} Pending Applications
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed">
                      You have master executive privileges. Review commercial
                      contractor registrations, inspect license credentials, and
                      approve or reject accounts.
                    </p>
                    <Link
                      href="/admin"
                      className="inline-block py-2.5 px-5 bg-white hover:bg-[#3087ff] text-[#3087ff] font-black text-xs uppercase tracking-wider transition-colors shadow-md"
                    >
                      Open Approvals Desk &rsaquo;
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Tab 2: Commercial Privileges */}
            {activeTab === "commercial" && (
              <div className="bg-white border-2 border-[#3087ff] p-6 sm:p-8 space-y-6 shadow-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-[#3087ff]/5 border-2 border-[#3087ff]">
                    <span className="text-xs font-black uppercase text-[#3087ff]/70 block">
                      Commercial Pricing Tier
                    </span>
                    <strong className="text-xl font-black text-[#3087ff] block mt-1">
                      Tier-1 Direct Contractor
                    </strong>
                    <p className="text-xs text-[#3087ff]/80 mt-2 leading-relaxed">
                      Wholesale direct discount (28% off list pricing) applied
                      automatically to all AWWA C110/C153 mechanical joint
                      fittings and wedge restraint assemblies.
                    </p>
                  </div>

                  <div className="p-5 bg-[#3087ff]/5 border-2 border-[#3087ff]">
                    <span className="text-xs font-black uppercase text-[#3087ff]/70 block">
                      Assigned Logistics Hub
                    </span>
                    <strong className="text-xl font-black text-[#3087ff] block mt-1 uppercase">
                      {currentUser.assignedYard.replace("-", " ")}
                    </strong>
                    <p className="text-xs text-[#3087ff]/80 mt-2 leading-relaxed">
                      Priority flatbed loading dock allocation, 24/7 emergency
                      watermain break dispatch, and will-call express pickup.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#3087ff]/20 border border-[#3087ff] space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#3087ff]" />
                    <span className="font-black text-sm uppercase text-[#3087ff]">
                      Commercial Net 30 Terms Active
                    </span>
                  </div>
                  <p className="text-xs text-[#3087ff] leading-relaxed">
                    Orders placed before 02:00 PM EST qualify for next-morning
                    flatbed jobsite delivery with boom crane unloading. Monthly
                    consolidated statements are sent directly to your email.
                  </p>
                </div>
              </div>
            )}

            {/* Tab 3: BOL Tracking & Certified MTRs */}
            {activeTab === "bol" && (
              <div className="bg-white border-2 border-[#3087ff] p-6 sm:p-8 space-y-6 shadow-md">
                <form
                  onSubmit={handleTrackBol}
                  className="p-5 bg-[#3087ff]/5 border-2 border-[#3087ff] space-y-3"
                >
                  <span className="font-black text-sm uppercase text-[#3087ff] block">
                    Live Flatbed Bill of Lading (BOL) Tracking
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. BOL-88410 or PO-2026-NY"
                      value={bolSearch}
                      onChange={(e) => setBolSearch(e.target.value)}
                      className="flex-1 bg-white border-2 border-[#3087ff] px-3.5 py-2.5 text-xs font-mono font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-[#3087ff] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Track Trailer
                    </button>
                  </div>
                  {bolResult && (
                    <div className="p-3.5 bg-emerald-50 border border-emerald-600 text-xs text-emerald-950 font-medium leading-relaxed">
                      {bolResult}
                    </div>
                  )}
                </form>

                <div className="p-5 bg-white border-2 border-[#3087ff] space-y-3">
                  <div className="flex items-center gap-2">
                    <Download className="w-5 h-5 text-[#3087ff]" />
                    <span className="font-black text-sm uppercase text-[#3087ff]">
                      Certified Mill Test Reports (MTR Vault)
                    </span>
                  </div>
                  <p className="text-xs text-[#3087ff]/90 leading-relaxed">
                    Physical and chemical certifications per ASTM A536 Grade
                    65-45-12 are archived digitally for every pour heat number.
                    Enter heat numbers stamped on fitting bells to download
                    signed submittal certificates.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
