"use client";

import {
  AlertCircle,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileCheck2,
  FileText,
  Lock,
  Mail,
  MapPin,
  Phone,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
  X,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import type { UserAccount } from "../../types/auth";

interface RfqItemRecord {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  deliveryLocation: string;
  targetDeliveryDate: string;
  taxExempt: boolean;
  notes?: string;
  itemsCount: number;
  createdAt: string;
}

export default function SuperAdminPage() {
  const {
    currentUser,
    allUsers,
    pendingCount,
    approveUser,
    rejectUser,
    deleteUser,
    resetToDefaultUsers,
    logout,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<
    "pending" | "approved" | "rejected" | "all" | "quotes"
  >("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [rejectingUserId, setRejectingUserId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [rfqRequests, setRfqRequests] = useState<RfqItemRecord[]>([]);

  // Load RFQ Quote Requests from localStorage or populate initial samples
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aqua_industries_rfq_requests_v1");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRfqRequests(parsed);
          return;
        }
      }

      const initialRfq: RfqItemRecord[] = [
        {
          id: "RFQ-948102",
          companyName: "Empire State Waterworks LLC",
          contactName: "Michael Chang",
          email: "m.chang@empirewaterworks.com",
          phone: "+1 (516) 555-0144",
          projectType: "Potable Water Transmission",
          deliveryLocation: "Hempstead, Long Island, NY",
          targetDeliveryDate: "Within 7 Days",
          taxExempt: true,
          notes:
            "Need 24 Tons AWWA C110 Ductile Iron MJ Bends & Tees with certified MTRs for municipal tie-in.",
          itemsCount: 4,
          createdAt: "2026-03-02T14:20:00Z",
        },
        {
          id: "RFQ-552091",
          companyName: "Bayou Utility Contracting",
          contactName: "David Bergeron",
          email: "takeoffs@bayouutility.com",
          phone: "+1 (504) 555-8832",
          projectType: "Civil Stormwater Drainage",
          deliveryLocation: "New Orleans, LA",
          targetDeliveryDate: "Within 14 Days",
          taxExempt: false,
          notes:
            "Quote 36-inch MJ mechanical joint sleeves and wedge restraint harnesses for storm pump station tie-in.",
          itemsCount: 2,
          createdAt: "2026-03-03T09:15:00Z",
        },
      ];
      localStorage.setItem(
        "aqua_industries_rfq_requests_v1",
        JSON.stringify(initialRfq),
      );
      setRfqRequests(initialRfq);
    } catch (e) {
      console.warn("Failed to load RFQ requests:", e);
    }
  }, []);

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3500);
  };

  const isSuperAdmin = currentUser?.role === "super-admin";

  const filteredUsers = allUsers.filter((u) => {
    if (activeTab === "pending" && u.status !== "PENDING_APPROVAL")
      return false;
    if (activeTab === "approved" && u.status !== "APPROVED") return false;
    if (activeTab === "rejected" && u.status !== "REJECTED") return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        (u.companyName || "").toLowerCase().includes(q) ||
        (u.fullName || "").toLowerCase().includes(q) ||
        (u.email || "").toLowerCase().includes(q) ||
        (u.taxIdOrLicense || "").toLowerCase().includes(q) ||
        (u.accountType || "").toLowerCase().includes(q) ||
        (u.assignedYard || "").toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredRfq = rfqRequests.filter((rfq) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        rfq.companyName.toLowerCase().includes(q) ||
        rfq.contactName.toLowerCase().includes(q) ||
        rfq.email.toLowerCase().includes(q) ||
        rfq.deliveryLocation.toLowerCase().includes(q) ||
        rfq.id.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleApprove = (user: UserAccount) => {
    approveUser(user.id);
    showFeedback(
      `Approved ${user.companyName} (${user.email}). They can now log in immediately.`,
    );
  };

  const handleConfirmReject = (userId: string) => {
    rejectUser(
      userId,
      rejectReason || "Incomplete documentation or unverified tax ID.",
    );
    setRejectingUserId(null);
    setRejectReason("");
    showFeedback("Account has been marked as Rejected.");
  };

  const approvedCount = allUsers.filter(
    (u) => u.status === "APPROVED" && u.role !== "super-admin",
  ).length;
  const rejectedCount = allUsers.filter((u) => u.status === "REJECTED").length;

  return (
    <DashboardLayout
      activePage="admin"
      title="Super-Admin Contractor Approval Desk"
      subtitle="Manual review and verification of commercial waterworks accounts"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="bg-[#3087ff] text-white p-6 sm:p-8 border-b-4 border-[#3087ff] shadow-xl relative overflow-hidden mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
                <span>Executive Headquarters Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                Commercial Wholesaler Licensure Verification
              </h2>
              <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                Every commercial contractor, supply house, and municipal utility
                account must be manually reviewed and approved before wholesale
                pricing, MTR records, and submittal packages are accessible.
              </p>
            </div>

            {/* Clearance Level Status Card & Sync Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="bg-white/10 p-3 border border-[#3087ff] text-xs text-white flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#3087ff]" />
                <div>
                  <span className="font-bold block uppercase tracking-wider text-[11px]">
                    Master Clearance Level 1
                  </span>
                  <span className="text-white/80 font-mono text-[10px]">
                    {currentUser?.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  resetToDefaultUsers();
                  showFeedback(
                    "All demo contractor applications reloaded and synchronized!",
                  );
                }}
                className="px-3.5 py-3 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-black text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 shadow-md shrink-0"
                title="Reload initial demo applications including Mega Foundries"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Demo Requests</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Toast */}
        {feedbackMessage && (
          <div className="mb-6 p-4 bg-[#3087ff] text-white text-xs sm:text-sm font-bold border-2 border-[#3087ff] shadow-md flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#3087ff] shrink-0" />
              <span>{feedbackMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setFeedbackMessage(null)}
              className="text-white hover:text-[#3087ff] font-black uppercase text-xs cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Stats Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="p-4 bg-white border-2 border-[#3087ff] shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3087ff]/70 block">
              Total Registrations
            </span>
            <strong className="text-2xl font-black text-[#3087ff]">
              {allUsers.length}
            </strong>
          </div>

          <div className="p-4 bg-amber-50 border-2 border-amber-500 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                Pending Approvals
              </span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <strong className="text-2xl font-black text-amber-700">
              {pendingCount}
            </strong>
          </div>

          <div className="p-4 bg-emerald-50 border-2 border-emerald-600 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                Approved Active
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <strong className="text-2xl font-black text-emerald-700">
              {approvedCount}
            </strong>
          </div>

          <div className="p-4 bg-rose-50 border-2 border-rose-500 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">
                Rejected
              </span>
              <XCircle className="w-4 h-4 text-rose-600" />
            </div>
            <strong className="text-2xl font-black text-rose-700">
              {rejectedCount}
            </strong>
          </div>

          <div className="p-4 bg-[#3087ff]/10 border-2 border-[#3087ff] shadow-sm col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3087ff] block">
                Quote Takeoffs
              </span>
              <FileText className="w-4 h-4 text-[#3087ff]" />
            </div>
            <strong className="text-2xl font-black text-[#3087ff]">
              {rfqRequests.length}
            </strong>
          </div>
        </div>

        {/* Search & Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap bg-[#3087ff]/10 border-2 border-[#3087ff] p-1 gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("pending")}
              className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center gap-1.5 ${activeTab === "pending"
                  ? "bg-[#3087ff] text-white shadow-xs"
                  : "text-[#3087ff] hover:bg-[#3087ff]/30"
                }`}
            >
              <span>Pending Approvals</span>
              {pendingCount > 0 && (
                <span className="w-5 h-5 bg-amber-400 text-[#3087ff] rounded-none text-[10px] font-black flex items-center justify-center">
                  {pendingCount}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("approved")}
              className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${activeTab === "approved"
                  ? "bg-[#3087ff] text-white shadow-xs"
                  : "text-[#3087ff] hover:bg-[#3087ff]/30"
                }`}
            >
              Approved ({approvedCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("rejected")}
              className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${activeTab === "rejected"
                  ? "bg-[#3087ff] text-white shadow-xs"
                  : "text-[#3087ff] hover:bg-[#3087ff]/30"
                }`}
            >
              Rejected ({rejectedCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${activeTab === "all"
                  ? "bg-[#3087ff] text-white shadow-xs"
                  : "text-[#3087ff] hover:bg-[#3087ff]/30"
                }`}
            >
              All Users ({allUsers.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("quotes")}
              className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center gap-1.5 ${activeTab === "quotes"
                  ? "bg-[#3087ff] text-white shadow-xs"
                  : "text-[#3087ff] hover:bg-[#3087ff]/30"
                }`}
            >
              <span>Quote Requests</span>
              <span className="w-5 h-5 bg-[#3087ff] text-white rounded-none text-[10px] font-black flex items-center justify-center">
                {rfqRequests.length}
              </span>
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#3087ff] absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search company, contact, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs text-[#3087ff] font-bold placeholder-[#3087ff]/50 focus:outline-none focus:border-[#3087ff]"
            />
          </div>
        </div>

        {/* Tab Content: RFQ Quotes View */}
        {activeTab === "quotes" ? (
          <div className="space-y-4">
            {filteredRfq.length === 0 ? (
              <div className="p-12 text-center border-2 border-[#3087ff] bg-white text-[#3087ff]">
                <FileText className="w-12 h-12 text-[#3087ff] mx-auto mb-3" />
                <h3 className="font-black text-base uppercase">
                  No Commercial Quote Requests Found
                </h3>
                <p className="text-xs text-[#3087ff]/80 mt-1">
                  Quote requests submitted through the quote builder will appear
                  here.
                </p>
              </div>
            ) : (
              filteredRfq.map((rfq) => (
                <div
                  key={rfq.id}
                  className="border-2 border-[#3087ff] bg-white p-5 shadow-sm space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#3087ff]/20">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-[#3087ff] text-white text-[10px] font-mono font-bold">
                          {rfq.id}
                        </span>
                        <h3 className="text-base font-black text-[#3087ff] uppercase">
                          {rfq.companyName}
                        </h3>
                        {rfq.taxExempt && (
                          <span className="px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-black uppercase">
                            Tax Exempt Certificate
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[#3087ff]/80 mt-1">
                        Primary Estimator: <strong>{rfq.contactName}</strong>{" "}
                        &bull; <span className="font-mono">{rfq.email}</span>{" "}
                        &bull; {rfq.phone}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase text-[#3087ff]/70 block">
                        Received Date
                      </span>
                      <strong className="text-xs font-mono text-[#3087ff]">
                        {new Date(rfq.createdAt).toLocaleDateString()}
                      </strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#3087ff]">
                    <div className="p-2.5 bg-[#3087ff]/5 border border-[#3087ff]/20">
                      <span className="text-[10px] font-bold uppercase text-[#3087ff]/70 block">
                        Project Sector
                      </span>
                      <strong>{rfq.projectType}</strong>
                    </div>
                    <div className="p-2.5 bg-[#3087ff]/5 border border-[#3087ff]/20">
                      <span className="text-[10px] font-bold uppercase text-[#3087ff]/70 block">
                        Jobsite Destination
                      </span>
                      <strong>{rfq.deliveryLocation}</strong>
                    </div>
                    <div className="p-2.5 bg-[#3087ff]/5 border border-[#3087ff]/20">
                      <span className="text-[10px] font-bold uppercase text-[#3087ff]/70 block">
                        Target Delivery
                      </span>
                      <strong>{rfq.targetDeliveryDate}</strong>
                    </div>
                  </div>

                  {rfq.notes && (
                    <div className="p-3 bg-slate-50 border border-slate-300 text-xs text-[#3087ff]">
                      <strong className="block text-[10px] uppercase font-bold text-[#3087ff]/70 mb-1">
                        Takeoff &amp; Specification Notes:
                      </strong>
                      <p className="leading-relaxed">{rfq.notes}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          /* Tab Content: Contractor Applications View */
          <div className="space-y-4">
            {filteredUsers.length === 0 ? (
              <div className="p-12 text-center border-2 border-[#3087ff] bg-white text-[#3087ff]">
                <Users className="w-12 h-12 text-[#3087ff] mx-auto mb-3" />
                <h3 className="font-black text-base uppercase">
                  No Registrations in this View
                </h3>
                <p className="text-xs text-[#3087ff]/80 mt-1">
                  Try switching tabs or resetting the search filter.
                </p>
              </div>
            ) : (
              filteredUsers.map((user) => {
                const isUserAdmin = user.role === "super-admin";
                const isPending = user.status === "PENDING_APPROVAL";
                const isApproved = user.status === "APPROVED";
                const isRejected = user.status === "REJECTED";

                return (
                  <div
                    key={user.id}
                    className={`border-2 p-5 transition-all shadow-sm ${isPending
                        ? "bg-amber-50/60 border-amber-500"
                        : isRejected
                          ? "bg-rose-50/40 border-rose-400"
                          : "bg-white border-[#3087ff]"
                      }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base sm:text-lg font-black text-[#3087ff] uppercase">
                            {user.companyName}
                          </h3>

                          {isUserAdmin && (
                            <span className="px-2.5 py-0.5 bg-[#3087ff] text-white text-xs font-black uppercase">
                              Super-Admin
                            </span>
                          )}

                          {isPending && (
                            <span className="px-2.5 py-0.5 bg-amber-500 text-white text-xs font-black uppercase flex items-center gap-1 shadow-xs">
                              <Clock className="w-3.5 h-3.5" />
                              Pending Approval
                            </span>
                          )}

                          {isApproved && !isUserAdmin && (
                            <span className="px-2.5 py-0.5 bg-emerald-600 text-white text-xs font-black uppercase flex items-center gap-1 shadow-xs">
                              <Check className="w-3.5 h-3.5" />
                              Approved Account
                            </span>
                          )}

                          {isRejected && (
                            <span className="px-2.5 py-0.5 bg-rose-600 text-white text-xs font-black uppercase flex items-center gap-1 shadow-xs">
                              <X className="w-3.5 h-3.5" />
                              Rejected
                            </span>
                          )}

                          <span className="text-xs font-bold text-[#3087ff] bg-white border border-[#3087ff] px-2 py-0.5">
                            {user.accountType}
                          </span>
                        </div>

                        {/* Metadata Rows */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#3087ff]">
                          <div className="flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                            <span>
                              Contact: <strong>{user.fullName}</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                            <span>
                              Email:{" "}
                              <strong className="font-mono">
                                {user.email}
                              </strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                            <span>
                              Phone: <strong>{user.phone}</strong>
                            </span>
                          </div>
                        </div>

                        {/* Compliance & Audit Line */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#3087ff]/80 pt-1">
                          <span>
                            Tax ID / License:{" "}
                            <strong className="font-mono text-[#3087ff]">
                              {user.taxIdOrLicense}
                            </strong>
                          </span>
                          <span>&bull;</span>
                          <span>
                            Primary Yard:{" "}
                            <strong className="uppercase text-[#3087ff]">
                              {(user.assignedYard || "").replace("-", " ")}
                            </strong>
                          </span>
                          <span>&bull;</span>
                          <span>
                            W-9 Form:{" "}
                            <strong
                              className={
                                user.w9Uploaded
                                  ? "text-emerald-700"
                                  : "text-amber-700"
                              }
                            >
                              {user.w9Uploaded
                                ? "Verified Upload ✓"
                                : "Missing / Pending"}
                            </strong>
                          </span>
                          <span>&bull;</span>
                          <span>
                            Registered:{" "}
                            <strong>
                              {new Date(user.createdAt).toLocaleDateString()}
                            </strong>
                          </span>
                        </div>

                        {user.rejectionReason && (
                          <div className="text-xs text-rose-700 font-bold bg-white p-2 border border-rose-300">
                            Rejection Reason: {user.rejectionReason}
                          </div>
                        )}
                      </div>

                      {/* Action Triggers */}
                      {!isUserAdmin && (
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#3087ff]/20">
                          {!isApproved && (
                            <button
                              type="button"
                              onClick={() => handleApprove(user)}
                              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-none shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                              <Check className="w-4 h-4" />
                              <span>Authorize Access</span>
                            </button>
                          )}

                          {!isRejected && (
                            <button
                              type="button"
                              onClick={() => setRejectingUserId(user.id)}
                              className="px-4 py-2.5 bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-600 font-black text-xs uppercase tracking-wider rounded-none transition-colors cursor-pointer flex items-center gap-1.5"
                            >
                              <X className="w-4 h-4" />
                              <span>Reject</span>
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => {
                              if (
                                confirm(
                                  `Permanently remove ${user.companyName}?`,
                                )
                              ) {
                                deleteUser(user.id);
                                showFeedback(`Removed ${user.companyName}.`);
                              }
                            }}
                            className="p-2.5 text-[#3087ff]/60 hover:text-rose-700 hover:bg-rose-100 transition-colors cursor-pointer"
                            title="Delete User Record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Reject Dialog */}
                    {rejectingUserId === user.id && (
                      <div className="mt-4 p-4 bg-white border-2 border-rose-600 space-y-2">
                        <div className="flex items-center justify-between text-xs font-black text-rose-700 uppercase">
                          <span>
                            Enter Rejection Reason for {user.companyName}:
                          </span>
                          <button
                            type="button"
                            onClick={() => setRejectingUserId(null)}
                            className="text-[#3087ff] hover:underline cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                        <input
                          type="text"
                          value={rejectReason}
                          onChange={(e) => setRejectReason(e.target.value)}
                          placeholder="e.g. Unverified tax ID / Missing state contractor license"
                          className="w-full bg-white border border-rose-400 p-2.5 text-xs text-[#3087ff] font-semibold focus:outline-none"
                        />
                        <div className="flex justify-end gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setRejectingUserId(null)}
                            className="px-3 py-1.5 text-xs font-bold text-[#3087ff] border border-[#3087ff] cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConfirmReject(user.id)}
                            className="px-4 py-1.5 text-xs font-black bg-rose-600 hover:bg-rose-700 text-white uppercase shadow-sm cursor-pointer"
                          >
                            Confirm Rejection
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
