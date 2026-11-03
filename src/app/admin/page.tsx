"use client";

import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Droplets,
  ExternalLink,
  FileCheck2,
  Lock,
  LogOut,
  Mail,
  MapPin,
  Phone,
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
import React, { useState } from "react";
import { IndustrialFooter } from "../../components/footer/IndustrialFooter";
import { useAuth } from "../../context/AuthContext";
import type { UserAccount } from "../../types/auth";

export default function SuperAdminPage() {
  const {
    currentUser,
    allUsers,
    pendingCount,
    approveUser,
    rejectUser,
    deleteUser,
    logout,
    quickLoginAsAdmin,
    login,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<
    "pending" | "approved" | "rejected" | "all"
  >("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [rejectingUserId, setRejectingUserId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");

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
      const q = searchQuery.toLowerCase();
      return (
        u.companyName.toLowerCase().includes(q) ||
        u.fullName.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.taxIdOrLicense.toLowerCase().includes(q)
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
    <div className="min-h-screen flex flex-col bg-white text-[#0082FC] font-sans">
      {/* Clean Executive Top Bar (No duplicate marketing navbar) */}
      <header className="bg-white border-b-2 border-[#0082FC] shadow-sm py-3 px-4 sm:px-6 lg:px-8 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            title="Return to Aqua Industries Home"
          >
            <div className="w-9 h-9 bg-[#0082FC] text-white border border-[#5FD4FD] flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-[#0082FC] text-base tracking-tight leading-none block">
                Aqua <span className="text-[#5FD4FD]">Industries</span>
              </span>
              <span className="text-[10px] text-[#0082FC]/75 font-bold uppercase tracking-wider block">
                Executive Super-Admin Portal
              </span>
            </div>
          </Link>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isSuperAdmin && (
              <span className="px-2.5 py-1 bg-amber-400 text-[#0082FC] font-black text-xs uppercase hidden sm:inline-block">
                Level 1 Clearance
              </span>
            )}

            {currentUser && (
              <button
                type="button"
                onClick={logout}
                className="px-3 py-1.5 bg-white hover:bg-rose-50 text-rose-700 border border-rose-500 text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Sign Out of Admin Session"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-600" />
                <span>Logout</span>
              </button>
            )}

            <Link
              href="/"
              className="px-3.5 py-1.5 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 shadow-xs"
            >
              <span>Main Site</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="bg-[#0082FC] text-white p-6 sm:p-8 border-b-4 border-[#5FD4FD] shadow-xl relative overflow-hidden mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
                  <span>Executive Headquarters Portal</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  Super-Admin Contractor Approval Desk
                </h1>
                <p className="text-xs sm:text-sm text-white/90 max-w-2xl leading-relaxed">
                  Every commercial contractor, supply house, and municipal
                  utility account must be manually reviewed and approved before
                  wholesale pricing, MTR records, and submittal packages are
                  accessible.
                </p>
              </div>

              {/* Status and Action Card */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                {!isSuperAdmin ? (
                  <button
                    type="button"
                    onClick={quickLoginAsAdmin}
                    className="px-5 py-3 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    Authorize As Super-Admin
                  </button>
                ) : (
                  <div className="bg-white/10 p-3 border border-[#5FD4FD] text-xs text-white flex items-center gap-3">
                    <div>
                      <span className="block font-black uppercase text-[#5FD4FD]">
                        Active Admin Session
                      </span>
                      <span className="font-mono">{currentUser.email}</span>
                    </div>
                    <button
                      type="button"
                      onClick={logout}
                      className="px-3 py-1.5 bg-white text-[#0082FC] font-bold text-xs uppercase hover:bg-rose-100 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
                <Link
                  href="/"
                  className="px-4 py-3 bg-[#0082FC] text-white hover:bg-white hover:text-[#0082FC] border-2 border-white font-bold text-xs uppercase transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Feedback Toast */}
          {feedbackMessage && (
            <div className="mb-6 p-4 bg-[#0082FC] text-white text-xs sm:text-sm font-bold border-2 border-[#5FD4FD] shadow-md flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#5FD4FD] shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
              <button
                type="button"
                onClick={() => setFeedbackMessage(null)}
                className="text-white hover:text-[#5FD4FD] font-black uppercase text-xs"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Stats Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-white border-2 border-[#0082FC] shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                Total Registrations
              </span>
              <strong className="text-2xl font-black text-[#0082FC]">
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
                  Rejected Applications
                </span>
                <XCircle className="w-4 h-4 text-rose-600" />
              </div>
              <strong className="text-2xl font-black text-rose-700">
                {rejectedCount}
              </strong>
            </div>
          </div>

          {/* Search & Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
            <div className="flex bg-[#0082FC]/10 border-2 border-[#0082FC] p-1 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("pending")}
                className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "pending"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/30"
                }`}
              >
                <span>Pending Approvals</span>
                {pendingCount > 0 && (
                  <span className="w-5 h-5 bg-amber-400 text-[#0082FC] rounded-none text-[10px] font-black flex items-center justify-center">
                    {pendingCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("approved")}
                className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                  activeTab === "approved"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/30"
                }`}
              >
                Approved ({approvedCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("rejected")}
                className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                  activeTab === "rejected"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/30"
                }`}
              >
                Rejected ({rejectedCount})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`py-2 px-4 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/30"
                }`}
              >
                All Users ({allUsers.length})
              </button>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#0082FC] absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search company, contact, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-[#0082FC] pl-9 pr-3 py-2 text-xs text-[#0082FC] font-bold placeholder-[#0082FC]/50 focus:outline-none"
              />
            </div>
          </div>

          {/* User Cards Grid */}
          <div className="space-y-4">
            {filteredUsers.length === 0 ? (
              <div className="p-12 text-center border-2 border-[#0082FC] bg-white text-[#0082FC]">
                <Users className="w-12 h-12 text-[#5FD4FD] mx-auto mb-3" />
                <h3 className="font-black text-base uppercase">
                  No Registrations in this View
                </h3>
                <p className="text-xs text-[#0082FC]/80 mt-1">
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
                    className={`border-2 p-5 transition-all shadow-sm ${
                      isPending
                        ? "bg-amber-50/60 border-amber-500"
                        : isRejected
                          ? "bg-rose-50/40 border-rose-400"
                          : "bg-white border-[#0082FC]"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base sm:text-lg font-black text-[#0082FC] uppercase">
                            {user.companyName}
                          </h3>

                          {isUserAdmin && (
                            <span className="px-2.5 py-0.5 bg-[#0082FC] text-white text-xs font-black uppercase">
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

                          <span className="text-xs font-bold text-[#0082FC] bg-white border border-[#0082FC] px-2 py-0.5">
                            {user.accountType}
                          </span>
                        </div>

                        {/* Metadata Rows */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#0082FC]">
                          <div className="flex items-center gap-1.5">
                            <UserCheck className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                            <span>
                              Contact: <strong>{user.fullName}</strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                            <span>
                              Email:{" "}
                              <strong className="font-mono">
                                {user.email}
                              </strong>
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                            <span>
                              Phone: <strong>{user.phone}</strong>
                            </span>
                          </div>
                        </div>

                        {/* Compliance & Audit Line */}
                        <div className="flex flex-wrap items-center gap-3 text-xs text-[#0082FC]/80 pt-1">
                          <span>
                            Tax ID / License:{" "}
                            <strong className="font-mono text-[#0082FC]">
                              {user.taxIdOrLicense}
                            </strong>
                          </span>
                          <span>&bull;</span>
                          <span>
                            Primary Yard:{" "}
                            <strong className="uppercase text-[#0082FC]">
                              {user.assignedYard.replace("-", " ")}
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
                        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#0082FC]/20">
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
                            className="p-2.5 text-[#0082FC]/60 hover:text-rose-700 hover:bg-rose-100 transition-colors"
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
                            className="text-[#0082FC] hover:underline"
                          >
                            Cancel
                          </button>
                        </div>
                        <input
                          type="text"
                          value={rejectReason}
                          onChange={(e) => setRejectReason(e.target.value)}
                          placeholder="e.g. Unverified tax ID / Missing state contractor license"
                          className="w-full bg-white border border-rose-400 p-2.5 text-xs text-[#0082FC] font-semibold focus:outline-none"
                        />
                        <div className="flex justify-end gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => setRejectingUserId(null)}
                            className="px-3 py-1.5 text-xs font-bold text-[#0082FC] border border-[#0082FC]"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConfirmReject(user.id)}
                            className="px-4 py-1.5 text-xs font-black bg-rose-600 hover:bg-rose-700 text-white uppercase shadow-sm"
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
        </div>
      </main>

      <IndustrialFooter
        onOpenYardModal={() => {}}
        onOpenLoginModal={() => {}}
      />
    </div>
  );
}
