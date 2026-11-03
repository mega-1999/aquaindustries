"use client";

import {
  AlertCircle,
  Building,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck2,
  Lock,
  LogOut,
  Mail,
  Package,
  PhoneCall,
  Search,
  ShieldAlert,
  ShieldCheck,
  Truck,
  UserCheck,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegisterModal?: () => void;
  onOpenSuperAdminModal?: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({
  isOpen,
  onClose,
  onOpenRegisterModal,
  onOpenSuperAdminModal,
}) => {
  const { currentUser, login, logout, quickLoginAsAdmin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bolNumber, setBolNumber] = useState("");
  const [bolResult, setBolResult] = useState<string | null>(null);

  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [pendingUserAttempt, setPendingUserAttempt] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setPendingUserAttempt(false);

    const res = login(email, password);

    if (res.success && res.user) {
      setAuthSuccess(`Welcome, ${res.user.fullName}! Account Verified.`);
    } else {
      setAuthError(res.message);
      if (res.user?.status === "PENDING_APPROVAL") {
        setPendingUserAttempt(true);
      }
    }
  };

  const handleFillDemo = (demoEmail: string, demoPass: string) => {
    setEmail(demoEmail);
    setPassword(demoPass);
    setAuthError(null);
    setPendingUserAttempt(false);
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0082FC]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white border-4 border-[#0082FC] rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#5FD4FD]/20 transition-colors cursor-pointer"
          aria-label="Close Portal Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#5FD4FD]/40">
          <div className="w-12 h-12 bg-[#0082FC] text-white border-2 border-[#5FD4FD] flex items-center justify-center shrink-0">
            <Lock className="w-6 h-6 text-[#5FD4FD]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3
                id="portal-modal-title"
                className="text-xl sm:text-2xl font-black text-[#0082FC] uppercase tracking-tight"
              >
                Aqua Industries Client Portal
              </h3>
              {currentUser?.role === "super-admin" && (
                <span className="px-2 py-0.5 bg-[#0082FC] text-white text-[10px] font-black uppercase">
                  Super-Admin Active
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium mt-0.5">
              Wholesale Pricing, Certified MTR Archive &amp; Order Tracking
            </p>
          </div>
        </div>

        {/* ========================================================
            IF ALREADY LOGGED IN: SHOW DASHBOARD VIEW
        ======================================================== */}
        {currentUser ? (
          <div className="space-y-5 animate-in fade-in duration-150">
            {/* Active User Card */}
            <div className="p-4 bg-emerald-50 border-2 border-emerald-600 shadow-xs">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-200 px-2 py-0.5">
                      {currentUser.role === "super-admin"
                        ? "Super-Admin Access"
                        : "Authorized Contractor"}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-900">
                      Status: {currentUser.status}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-emerald-950 uppercase">
                    {currentUser.companyName}
                  </h4>
                  <div className="text-xs text-emerald-900 font-medium">
                    Signed in as <strong>{currentUser.fullName}</strong> (
                    {currentUser.email})
                  </div>
                </div>

                <button
                  type="button"
                  onClick={logout}
                  className="px-3 py-1.5 bg-white text-rose-700 border-2 border-rose-500 hover:bg-rose-50 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* If Super-Admin, show Super-Admin Approval Button */}
            {currentUser.role === "super-admin" ? (
              <div className="p-4 bg-[#0082FC] text-white border-2 border-[#5FD4FD] space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#5FD4FD]" />
                  <h5 className="font-black text-sm uppercase">
                    Super-Admin Approval Controls
                  </h5>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  You are logged in with master authorization. Review new
                  contractor registrations, verify licenses, and approve or
                  decline wholesale access.
                </p>
                <div className="flex gap-2">
                  {onOpenSuperAdminModal && (
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenSuperAdminModal();
                      }}
                      className="w-full py-2.5 px-4 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer text-center"
                    >
                      Open Contractor Approval Panel &rsaquo;
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Contractor Portal Tools */
              <div className="space-y-3">
                <h5 className="text-xs font-black uppercase tracking-wider text-[#0082FC]">
                  Contractor Resources &amp; Active Jobs
                </h5>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white border-2 border-[#0082FC] shadow-xs">
                    <span className="text-[10px] text-[#0082FC]/70 uppercase font-bold block">
                      Assigned Logistics Hub
                    </span>
                    <strong className="font-black uppercase text-[#0082FC]">
                      {currentUser.assignedYard.replace("-", " ")}
                    </strong>
                  </div>
                  <div className="p-3 bg-white border-2 border-[#0082FC] shadow-xs">
                    <span className="text-[10px] text-[#0082FC]/70 uppercase font-bold block">
                      Verified Tax ID / License
                    </span>
                    <strong className="font-mono font-bold text-[#0082FC]">
                      {currentUser.taxIdOrLicense}
                    </strong>
                  </div>
                </div>

                {/* BOL Tracking Widget */}
                <div className="p-3.5 bg-white border-2 border-[#5FD4FD] space-y-2">
                  <span className="text-xs font-bold uppercase text-[#0082FC] flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#0082FC]" />
                    <span>Quick Flatbed BOL Shipment Lookup</span>
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="e.g. BOL-88410"
                      value={bolNumber}
                      onChange={(e) => setBolNumber(e.target.value)}
                      className="flex-1 bg-white border border-[#0082FC] px-2.5 py-1.5 text-xs font-mono font-bold focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleBolLookup}
                      className="px-3 py-1.5 bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] text-xs font-black uppercase cursor-pointer"
                    >
                      Track
                    </button>
                  </div>
                  {bolResult && (
                    <div className="p-2 bg-[#5FD4FD]/20 border border-[#0082FC] text-[11px] text-[#0082FC] leading-snug">
                      {bolResult}
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-white text-[#0082FC] border-2 border-[#0082FC] font-bold text-xs uppercase hover:bg-[#5FD4FD]/20"
              >
                Close Portal
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
              LOGIN FORM (EMAIL + PASSWORD)
          ======================================================== */
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {/* Alerts */}
            {authSuccess && (
              <div className="p-3 bg-emerald-50 border-2 border-emerald-600 text-emerald-900 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{authSuccess}</span>
              </div>
            )}

            {authError && (
              <div
                className={`p-3.5 border-2 text-xs font-medium space-y-2 leading-relaxed ${
                  pendingUserAttempt
                    ? "bg-amber-50 border-amber-500 text-amber-950"
                    : "bg-rose-50 border-rose-500 text-rose-900"
                }`}
              >
                <div className="flex items-start gap-2">
                  {pendingUserAttempt ? (
                    <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <span className="font-bold">{authError}</span>
                </div>

                {/* If the account is pending, offer instant test Super-Admin switcher */}
                {pendingUserAttempt && onOpenSuperAdminModal && (
                  <div className="pt-2 border-t border-amber-300 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-amber-900">
                      Want to test approval workflow right now?
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenSuperAdminModal();
                      }}
                      className="px-2.5 py-1 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-[10px] uppercase tracking-wider rounded-none shrink-0 cursor-pointer"
                    >
                      Open Admin Panel to Approve &rsaquo;
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Quick Demo Credentials Bar */}
            <div className="bg-[#0082FC]/10 p-2.5 border border-[#0082FC] text-xs">
              <span className="font-bold text-[#0082FC] block mb-1 text-[11px] uppercase tracking-wider">
                Quick Test Autofill Accounts:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    handleFillDemo("admin@aquaindustries.com", "Admin123!")
                  }
                  className="px-2 py-1 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border border-[#0082FC] text-[10px] font-bold uppercase transition-colors"
                >
                  Super-Admin
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleFillDemo(
                      "contractor@northeastwater.com",
                      "Contractor123!",
                    )
                  }
                  className="px-2 py-1 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border border-[#0082FC] text-[10px] font-bold uppercase transition-colors"
                >
                  Approved Contractor
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleFillDemo(
                      "pipeline@gulfcoastutility.com",
                      "Utility123!",
                    )
                  }
                  className="px-2 py-1 bg-amber-100 hover:bg-amber-500 text-amber-900 hover:text-white border border-amber-500 text-[10px] font-bold uppercase transition-colors"
                >
                  Pending Contractor
                </button>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-bold text-[#0082FC] uppercase mb-1"
              >
                Business Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#0082FC] absolute left-3 top-3" />
                <input
                  id="login-email"
                  type="email"
                  required
                  placeholder="contractor@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-2 border-[#0082FC] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="login-password"
                  className="block text-xs font-bold text-[#0082FC] uppercase"
                >
                  Account Password *
                </label>
                <a
                  href="tel:+15162521111"
                  className="text-[11px] text-[#0082FC] hover:underline font-semibold"
                >
                  Need password reset?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#0082FC] absolute left-3 top-3" />
                <input
                  id="login-password"
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border-2 border-[#0082FC] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs sm:text-sm uppercase tracking-wider rounded-none shadow-md transition-all cursor-pointer"
              >
                Sign In to Commercial Portal
              </button>
            </div>

            {/* Register Option */}
            <div className="pt-3 border-t-2 border-[#5FD4FD]/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#0082FC]">
              <span className="font-medium">
                Don&apos;t have an approved account yet?
              </span>
              {onOpenRegisterModal && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenRegisterModal();
                  }}
                  className="font-black text-[#0082FC] hover:text-[#5FD4FD] underline uppercase cursor-pointer"
                >
                  Register Commercial Account &rsaquo;
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
