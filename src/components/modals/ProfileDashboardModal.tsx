"use client";

import {
  AlertCircle,
  Building,
  CheckCircle2,
  Clock,
  Download,
  FileCheck2,
  Globe,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  User,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface ProfileDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings?: () => void;
  onOpenSuperAdmin?: () => void;
}

export const ProfileDashboardModal: React.FC<ProfileDashboardModalProps> = ({
  isOpen,
  onClose,
  onOpenSettings,
  onOpenSuperAdmin,
}) => {
  const { currentUser, pendingCount, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<"overview" | "commercial" | "bol">(
    "overview",
  );
  const [bolSearch, setBolSearch] = useState("");
  const [bolResult, setBolResult] = useState<string | null>(null);

  if (!isOpen || !currentUser) return null;

  const handleTrackBol = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bolSearch.trim()) return;
    setBolResult(
      `BOL #${bolSearch.toUpperCase()} • 24 Tons AWWA C110 Ductile Iron Fittings • Dispatched from Melville, NY Yard on Trailer #TR-409 • Driver Contact: +1 (516) 252-1111 • Status: En Route (ETA: Today 02:30 PM EST)`,
    );
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-dashboard-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0082FC]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white border-4 border-[#0082FC] rounded-none max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#0565d6]/20 transition-colors cursor-pointer"
          aria-label="Close Profile Dashboard"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-3.5 mb-6 pb-4 border-b-2 border-[#0565d6]/40">
          <div className="w-12 h-12 bg-[#0082FC] text-white border-2 border-[#0565d6] flex items-center justify-center shrink-0">
            {currentUser.role === "super-admin" ? (
              <ShieldCheck className="w-6 h-6 text-[#0565d6]" />
            ) : (
              <User className="w-6 h-6 text-[#0565d6]" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2
                id="profile-dashboard-title"
                className="text-xl sm:text-2xl font-black text-[#0082FC] uppercase tracking-tight"
              >
                Account Profile Dashboard
              </h2>
              <span
                className={`px-2 py-0.5 text-[10px] font-black uppercase tracking-wider ${currentUser.role === "super-admin"
                    ? "bg-[#0082FC] text-white"
                    : currentUser.status === "APPROVED"
                      ? "bg-emerald-600 text-white"
                      : "bg-amber-500 text-white"
                  }`}
              >
                {currentUser.role === "super-admin"
                  ? "Super-Admin Executive"
                  : `Status: ${currentUser.status}`}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium mt-0.5 truncate">
              {currentUser.companyName} &bull; Primary Contact:{" "}
              {currentUser.fullName}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-2 border-[#0082FC] mb-5">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`py-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "overview"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#0565d6]/20"
              }`}
          >
            Profile Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("commercial")}
            className={`py-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "commercial"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#0565d6]/20"
              }`}
          >
            Commercial Privileges
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bol")}
            className={`py-2 px-3 sm:px-4 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer ${activeTab === "bol"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#0565d6]/20"
              }`}
          >
            BOL Tracking &amp; MTRs
          </button>
        </div>

        {/* Tab 1: Profile Overview */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            {/* Identity Card */}
            <div className="p-4 bg-[#0082FC]/5 border-2 border-[#0082FC]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Commercial Entity
                  </span>
                  <span className="font-extrabold text-sm text-[#0082FC] block truncate">
                    {currentUser.companyName}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Account Type &amp; Role
                  </span>
                  <span className="font-extrabold text-sm text-[#0082FC] block">
                    {currentUser.accountType} ({currentUser.role.toUpperCase()})
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Primary Authorized Contact
                  </span>
                  <span className="font-bold text-xs text-[#0082FC] block">
                    {currentUser.fullName}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Business Email
                  </span>
                  <span className="font-mono font-bold text-xs text-[#0082FC] block truncate">
                    {currentUser.email}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Direct Phone / Dispatch
                  </span>
                  <span className="font-mono font-bold text-xs text-[#0082FC] block">
                    {currentUser.phone}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                    Federal Tax ID / State License
                  </span>
                  <span className="font-mono font-bold text-xs text-[#0082FC] block">
                    {currentUser.taxIdOrLicense}
                  </span>
                </div>
              </div>
            </div>

            {/* Compliance & Document Vault */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-emerald-50 border border-emerald-600 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-800 block">
                    W-9 Taxpayer Certificate
                  </span>
                  <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified on File</span>
                  </span>
                </div>
                <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-600 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-800 block">
                    State Resale Exemption
                  </span>
                  <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Active Exemption</span>
                  </span>
                </div>
                <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0" />
              </div>
            </div>

            {/* Super-Admin Action Box (If Super Admin) */}
            {currentUser.role === "super-admin" && (
              <div className="p-4 bg-[#0082FC] text-white border-2 border-[#0565d6] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#0565d6]" />
                    <span className="font-black text-xs sm:text-sm uppercase tracking-wide">
                      Super-Admin Master Approval Panel
                    </span>
                  </div>
                  {pendingCount > 0 && (
                    <span className="px-2 py-0.5 bg-amber-400 text-[#0082FC] font-black text-xs uppercase">
                      {pendingCount} Pending Approvals
                    </span>
                  )}
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  You have master authorization to approve, reject, or audit
                  commercial contractors, utility partners, and municipal supply
                  houses.
                </p>
                {onOpenSuperAdmin && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenSuperAdmin();
                    }}
                    className="w-full py-2.5 px-3 bg-white hover:bg-[#0565d6] text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Open Super-Admin Contractor Approvals Desk &rsaquo;
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Commercial Privileges */}
        {activeTab === "commercial" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-white border-2 border-[#0082FC]">
                <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                  Wholesale Pricing Tier
                </span>
                <span className="font-black text-base text-[#0082FC] block mt-1">
                  Tier-1 Direct Contractor
                </span>
                <p className="text-[11px] text-[#0082FC]/80 mt-1">
                  28% wholesale discount applied automatically on all AWWA
                  fittings and wedge restraints.
                </p>
              </div>

              <div className="p-3.5 bg-white border-2 border-[#0082FC]">
                <span className="text-[10px] font-black uppercase text-[#0082FC]/70 block">
                  Assigned Logistics Hub
                </span>
                <span className="font-black text-base text-[#0082FC] block mt-1 uppercase">
                  {currentUser.assignedYard.replace("-", " ")}
                </span>
                <p className="text-[11px] text-[#0082FC]/80 mt-1">
                  Priority flatbed trailer allocation and same-day will-call
                  loading dock access.
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#0565d6]/20 border border-[#0082FC] space-y-2">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0082FC]" />
                <span className="font-extrabold text-xs uppercase tracking-wider text-[#0082FC]">
                  Dispatch Terms &amp; Net 30 Credit
                </span>
              </div>
              <p className="text-xs text-[#0082FC] leading-relaxed">
                Orders placed before 02:00 PM EST qualify for next-morning
                flatbed jobsite delivery with boom crane unloading. Standard
                commercial billing terms are active.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: BOL Tracking & Certified MTRs */}
        {activeTab === "bol" && (
          <div className="space-y-4">
            <form
              onSubmit={handleTrackBol}
              className="p-4 bg-white border-2 border-[#0082FC] space-y-3"
            >
              <span className="font-black text-xs uppercase text-[#0082FC] block">
                Quick Flatbed BOL Shipment Lookup
              </span>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. BOL-88410 or PO-2026-NY"
                  value={bolSearch}
                  onChange={(e) => setBolSearch(e.target.value)}
                  className="flex-1 bg-white border-2 border-[#0082FC] px-3 py-2 text-xs font-mono font-bold text-[#0082FC] focus:outline-none focus:border-[#0565d6]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0082FC] hover:bg-[#0565d6] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Track Trailer
                </button>
              </div>
              {bolResult && (
                <div className="p-3 bg-emerald-50 border border-emerald-600 text-xs text-emerald-950 font-medium leading-relaxed">
                  {bolResult}
                </div>
              )}
            </form>

            <div className="p-4 bg-[#0082FC]/5 border border-[#0082FC] space-y-2">
              <span className="font-black text-xs uppercase text-[#0082FC] flex items-center gap-2">
                <Download className="w-4 h-4 text-[#0082FC]" />
                <span>Certified Mill Test Reports (MTR Vault)</span>
              </span>
              <p className="text-xs text-[#0082FC]/90 leading-relaxed">
                Every shipment includes digital chemical &amp; physical
                certification per ASTM A536 Grade 65-45-12. Need historical
                records? Call New York Foundry dispatch at +1 (516) 252-1111.
              </p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-5 mt-6 border-t-2 border-[#0565d6]/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {onOpenSettings && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSettings();
                }}
                className="px-3.5 py-2 bg-white hover:bg-[#0565d6]/20 text-[#0082FC] border-2 border-[#0082FC] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Account Settings</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                onClose();
                logout();
              }}
              className="px-3.5 py-2 bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-500 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#0082FC] hover:bg-[#0565d6] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
