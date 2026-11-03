"use client";

import {
  AlertCircle,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  FileCheck2,
  Filter,
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
import type React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import type { AccountStatus, UserAccount } from "../../types/auth";

interface SuperAdminApprovalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContractorLogin?: (email: string) => void;
}

export const SuperAdminApprovalModal: React.FC<
  SuperAdminApprovalModalProps
> = ({ isOpen, onClose, onOpenContractorLogin }) => {
  const {
    currentUser,
    allUsers,
    pendingCount,
    approveUser,
    rejectUser,
    deleteUser,
    logout,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("pending");
  const [searchQuery, setSearchQuery] = useState("");
  const [rejectingUserId, setRejectingUserId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  if (!currentUser || currentUser.role !== "super-admin") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="superadmin-restricted-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0082FC]/80 backdrop-blur-sm"
      >
        <div className="bg-white border-4 border-[#0082FC] rounded-none max-w-md w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] text-center space-y-4">
          <div className="w-14 h-14 bg-[#0082FC] text-white border-2 border-[#5FD4FD] flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7 text-[#5FD4FD]" />
          </div>
          <h3
            id="superadmin-restricted-title"
            className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0082FC]"
          >
            Super-Admin Access Restricted
          </h3>
          <p className="text-xs text-[#0082FC]/80 leading-relaxed">
            The Contractor Approval Desk is strictly restricted to authorized
            Aqua Industries Super-Administrators. Only master administrators
            have permission to review, approve, or reject contractor
            registrations.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  const showFeedback = (msg: string) => {
    setFeedbackMessage(msg);
    setTimeout(() => setFeedbackMessage(null), 3000);
  };

  const filteredUsers = allUsers.filter((u) => {
    // Tab filter
    if (activeTab === "pending" && u.status !== "PENDING_APPROVAL")
      return false;
    if (activeTab === "approved" && u.status !== "APPROVED") return false;
    if (activeTab === "rejected" && u.status !== "REJECTED") return false;

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchCompany = u.companyName.toLowerCase().includes(q);
      const matchName = u.fullName.toLowerCase().includes(q);
      const matchEmail = u.email.toLowerCase().includes(q);
      const matchTax = u.taxIdOrLicense.toLowerCase().includes(q);
      return matchCompany || matchName || matchEmail || matchTax;
    }
    return true;
  });

  const handleApprove = (user: UserAccount) => {
    approveUser(user.id);
    showFeedback(
      `Approved account for ${user.companyName} (${user.email}). They can now log in immediately.`,
    );
  };

  const handleConfirmReject = (userId: string) => {
    rejectUser(
      userId,
      rejectReason || "Incomplete documentation or unverified tax ID.",
    );
    setRejectingUserId(null);
    setRejectReason("");
    showFeedback("Account status updated to Rejected.");
  };

  const approvedCount = allUsers.filter(
    (u) => u.status === "APPROVED" && u.role !== "super-admin",
  ).length;
  const rejectedCount = allUsers.filter((u) => u.status === "REJECTED").length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="super-admin-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0082FC]/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="bg-white border-4 border-[#0082FC] rounded-none max-w-5xl w-full p-4 sm:p-6 lg:p-8 shadow-2xl text-[#0082FC] relative my-auto max-h-[92vh] flex flex-col justify-between overflow-hidden">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] transition-colors rounded-none cursor-pointer z-10"
          aria-label="Close Admin Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* ========================================================
              ADMIN MODAL HEADER
          ======================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0082FC] mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0082FC] text-white flex items-center justify-center border-2 border-[#5FD4FD] shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#5FD4FD]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    id="super-admin-modal-title"
                    className="text-xl sm:text-2xl font-black text-[#0082FC] uppercase tracking-tight"
                  >
                    Super-Admin Approval Panel
                  </h3>
                  <span className="px-2 py-0.5 bg-[#0082FC] text-white text-[10px] font-black uppercase tracking-wider">
                    HQ Melville Control
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium mt-0.5">
                  Review, approve, and authorize commercial contractor accounts
                  for portal and MTR access.
                </p>
              </div>
            </div>

            {/* Admin identity badge */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-right hidden sm:block">
                <strong className="block text-[#0082FC] font-black">
                  {currentUser?.fullName || "Super-Admin"}
                </strong>
                <span className="text-[11px] text-[#0082FC]/75 font-mono">
                  {currentUser?.email || "admin@aquaindustries.com"}
                </span>
              </span>
            </div>
          </div>

          {/* Feedback Toast */}
          {feedbackMessage && (
            <div className="mb-4 p-3 bg-[#0082FC] text-white text-xs font-bold border-2 border-[#5FD4FD] shadow-md flex items-center justify-between animate-in fade-in slide-in-from-top-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                <span>{feedbackMessage}</span>
              </div>
              <button
                type="button"
                onClick={() => setFeedbackMessage(null)}
                className="text-white hover:text-[#5FD4FD] font-black uppercase text-[10px]"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* ========================================================
              METRIC STATS OVERVIEW
          ======================================================== */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
            <div className="p-3 bg-white border-2 border-[#0082FC] shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                Total Registrations
              </span>
              <strong className="text-xl font-black text-[#0082FC]">
                {allUsers.length}
              </strong>
            </div>

            <div className="p-3 bg-amber-50 border-2 border-amber-500 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  Pending Approval
                </span>
                <Clock className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <strong className="text-xl font-black text-amber-700">
                {pendingCount}
              </strong>
            </div>

            <div className="p-3 bg-emerald-50 border-2 border-emerald-600 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Approved Active
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <strong className="text-xl font-black text-emerald-700">
                {approvedCount}
              </strong>
            </div>

            <div className="p-3 bg-rose-50 border-2 border-rose-500 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">
                  Rejected / Inactive
                </span>
                <XCircle className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <strong className="text-xl font-black text-rose-700">
                {rejectedCount}
              </strong>
            </div>
          </div>

          {/* ========================================================
              SEARCH & FILTER TABS
          ======================================================== */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4">
            {/* Filter Tabs */}
            <div className="flex bg-[#0082FC]/10 border-2 border-[#0082FC] p-1 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("pending")}
                className={`py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center gap-1.5 ${
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
                className={`py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
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
                className={`py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
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
                className={`py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#0082FC] text-white shadow-xs"
                    : "text-[#0082FC] hover:bg-[#5FD4FD]/30"
                }`}
              >
                All ({allUsers.length})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#0082FC] absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                placeholder="Search contractor, email, tax ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border-2 border-[#0082FC] pl-9 pr-3 py-1.5 text-xs text-[#0082FC] font-bold placeholder-[#0082FC]/50 focus:outline-none focus:border-[#5FD4FD]"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            SCROLLABLE USERS LIST / TABLE
        ======================================================== */}
        <div className="flex-1 overflow-y-auto max-h-[50vh] border-2 border-[#0082FC] divide-y-2 divide-[#0082FC]/20 mb-4 bg-white">
          {filteredUsers.length === 0 ? (
            <div className="p-8 text-center text-[#0082FC]">
              <Users className="w-10 h-10 text-[#5FD4FD] mx-auto mb-2" />
              <p className="font-black text-sm uppercase">
                No registrations match the selected filter.
              </p>
              <p className="text-xs text-[#0082FC]/80 mt-1">
                {activeTab === "pending"
                  ? "All commercial account submissions are currently processed."
                  : "Try clearing search or selecting a different tab."}
              </p>
            </div>
          ) : (
            filteredUsers.map((user) => {
              const isSuperAdmin = user.role === "super-admin";
              const isPending = user.status === "PENDING_APPROVAL";
              const isApproved = user.status === "APPROVED";
              const isRejected = user.status === "REJECTED";

              return (
                <div
                  key={user.id}
                  className={`p-4 transition-colors ${
                    isPending
                      ? "bg-amber-50/50 hover:bg-amber-50"
                      : isRejected
                        ? "bg-rose-50/30 hover:bg-rose-50/60"
                        : "hover:bg-[#5FD4FD]/10"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* User & Company Details */}
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-black text-[#0082FC] uppercase tracking-tight">
                          {user.companyName}
                        </h4>

                        {/* Status Badge */}
                        {isSuperAdmin && (
                          <span className="px-2 py-0.5 bg-[#0082FC] text-white text-[10px] font-black uppercase">
                            Super-Admin
                          </span>
                        )}

                        {isPending && (
                          <span className="px-2 py-0.5 bg-amber-500 text-white text-[10px] font-black uppercase flex items-center gap-1 shadow-xs">
                            <Clock className="w-3 h-3" />
                            Pending Approval
                          </span>
                        )}

                        {isApproved && !isSuperAdmin && (
                          <span className="px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-black uppercase flex items-center gap-1 shadow-xs">
                            <Check className="w-3 h-3" />
                            Approved
                          </span>
                        )}

                        {isRejected && (
                          <span className="px-2 py-0.5 bg-rose-600 text-white text-[10px] font-black uppercase flex items-center gap-1 shadow-xs">
                            <X className="w-3 h-3" />
                            Rejected
                          </span>
                        )}

                        <span className="text-[11px] font-bold text-[#0082FC] bg-white border border-[#0082FC] px-1.5 py-0.2">
                          {user.accountType}
                        </span>
                      </div>

                      {/* Contact metadata */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 text-xs text-[#0082FC]/90">
                        <div className="flex items-center gap-1.5 truncate">
                          <UserCheck className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                          <span>
                            Contact: <strong>{user.fullName}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <Mail className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                          <span>
                            Email:{" "}
                            <strong className="font-mono">{user.email}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 truncate">
                          <Phone className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                          <span>
                            Phone: <strong>{user.phone}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Additional Compliance Specs */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#0082FC]/80 pt-1">
                        <span>
                          Tax ID / Lic:{" "}
                          <strong className="font-mono text-[#0082FC]">
                            {user.taxIdOrLicense}
                          </strong>
                        </span>
                        <span>&bull;</span>
                        <span>
                          Hub:{" "}
                          <strong className="uppercase text-[#0082FC]">
                            {user.assignedYard.replace("-", " ")}
                          </strong>
                        </span>
                        <span>&bull;</span>
                        <span>
                          W-9:{" "}
                          <strong
                            className={
                              user.w9Uploaded
                                ? "text-emerald-700"
                                : "text-amber-700"
                            }
                          >
                            {user.w9Uploaded ? "Verified ✓" : "Pending"}
                          </strong>
                        </span>
                        <span>&bull;</span>
                        <span>
                          Registered:{" "}
                          <strong>
                            {new Date(user.createdAt).toLocaleDateString()}
                          </strong>
                        </span>
                        {user.rejectionReason && (
                          <span className="text-rose-700 font-bold block sm:inline">
                            &bull; Reason: {user.rejectionReason}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {!isSuperAdmin && (
                      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-[#0082FC]/20">
                        {/* Approve Button */}
                        {!isApproved && (
                          <button
                            type="button"
                            onClick={() => handleApprove(user)}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-none shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Approve</span>
                          </button>
                        )}

                        {/* Reject Button Trigger */}
                        {!isRejected && (
                          <button
                            type="button"
                            onClick={() => setRejectingUserId(user.id)}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-600 font-black text-xs uppercase tracking-wider rounded-none transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <X className="w-3.5 h-3.5" />
                            <span>Reject</span>
                          </button>
                        )}

                        {/* Test Login Button (if approved) */}
                        {isApproved && onOpenContractorLogin && (
                          <button
                            type="button"
                            onClick={() => onOpenContractorLogin(user.email)}
                            className="inline-flex items-center justify-center gap-1 px-2.5 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-bold text-xs uppercase tracking-wider rounded-none transition-colors cursor-pointer"
                            title="Test logging in as this approved contractor"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Test Login</span>
                          </button>
                        )}

                        {/* Delete User */}
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              confirm(`Permanently remove ${user.companyName}?`)
                            ) {
                              deleteUser(user.id);
                              showFeedback(`Removed ${user.companyName}.`);
                            }
                          }}
                          className="p-2 text-[#0082FC]/60 hover:text-rose-700 hover:bg-rose-100/50 transition-colors cursor-pointer"
                          title="Delete Record"
                          aria-label="Delete user record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Reject Prompt Drawer */}
                  {rejectingUserId === user.id && (
                    <div className="mt-3 p-3 bg-white border-2 border-rose-600 space-y-2 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between text-xs font-black text-rose-700 uppercase">
                        <span>
                          Provide Rejection Reason for {user.companyName}:
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
                        placeholder="e.g. Unverified state contractor license / Missing W-9"
                        className="w-full bg-white border border-rose-400 p-2 text-xs text-[#0082FC] font-semibold focus:outline-none"
                      />
                      <div className="flex justify-end gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setRejectingUserId(null)}
                          className="px-3 py-1.5 text-xs font-bold text-[#0082FC] border border-[#0082FC] hover:bg-[#0082FC]/10"
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

        {/* ========================================================
            MODAL FOOTER ACTIONS
        ======================================================== */}
        <div className="pt-3 border-t-2 border-[#0082FC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#0082FC] font-bold">
            <span className="w-2.5 h-2.5 bg-emerald-500 inline-block"></span>
            <span>
              Real-time local state synchronized. Only APPROVED accounts can
              access portal.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-white hover:bg-[#0082FC]/10 text-[#0082FC] border-2 border-[#0082FC] font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              Close Panel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
