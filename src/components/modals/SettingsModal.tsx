"use client";

import {
  AlertCircle,
  Bell,
  CheckCircle2,
  KeyRound,
  Lock,
  MapPin,
  RefreshCw,
  Save,
  Settings,
  Shield,
  Truck,
  User,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProfile?: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  onOpenProfile,
}) => {
  const { currentUser, updatePassword, resetPassword, updateUserProfile } =
    useAuth();

  // Active sub-tab in Settings
  const [activeSection, setActiveSection] = useState<
    "security" | "notifications" | "company"
  >("security");

  // Notifications
  const [bolSmsAlerts, setBolSmsAlerts] = useState(true);
  const [mtrEmailAlerts, setMtrEmailAlerts] = useState(true);
  const [quoteUpdates, setQuoteUpdates] = useState(false);

  // Profile preferences
  const [fullName, setFullName] = useState(currentUser?.fullName || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [preferredYard, setPreferredYard] = useState(
    currentUser?.assignedYard || "new-york-hub",
  );

  // Password fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Feedback states
  const [passwordStatus, setPasswordStatus] = useState<{
    success?: boolean;
    message: string;
  } | null>(null);
  const [profileStatus, setProfileStatus] = useState<{
    success?: boolean;
    message: string;
  } | null>(null);
  const [resetGeneratedPass, setResetGeneratedPass] = useState<string | null>(
    null,
  );

  if (!isOpen || !currentUser) return null;

  // Handle Password Change
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordStatus(null);
    setResetGeneratedPass(null);

    if (newPassword !== confirmPassword) {
      setPasswordStatus({
        success: false,
        message: "New password and confirmation do not match.",
      });
      return;
    }

    const res = updatePassword(currentPassword, newPassword);
    setPasswordStatus(res);

    if (res.success) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  // Handle Instant Password Reset
  const handleInstantReset = () => {
    setPasswordStatus(null);
    const res = resetPassword();
    if (res.success && res.tempPass) {
      setResetGeneratedPass(res.tempPass);
      setPasswordStatus({
        success: true,
        message:
          "Temporary secure password generated and applied to this account.",
      });
    } else {
      setPasswordStatus({
        success: false,
        message: res.message,
      });
    }
  };

  // Handle Profile Details Update
  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileStatus(null);

    const res = updateUserProfile({
      fullName,
      phone,
      assignedYard: preferredYard,
    });

    setProfileStatus(res);
    setTimeout(() => {
      setProfileStatus(null);
    }, 4000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0082FC]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white border-4 border-[#0082FC] rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#5FD4FD]/20 transition-colors cursor-pointer"
          aria-label="Close Settings Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-5 pb-4 border-b-2 border-[#5FD4FD]/40">
          <div className="w-12 h-12 bg-[#0082FC] text-white border-2 border-[#5FD4FD] flex items-center justify-center shrink-0">
            <Settings className="w-6 h-6 text-[#5FD4FD]" />
          </div>
          <div>
            <h2
              id="settings-modal-title"
              className="text-xl sm:text-2xl font-black text-[#0082FC] uppercase tracking-tight"
            >
              Account Settings
            </h2>
            <p className="text-xs sm:text-sm text-[#0082FC]/90 font-medium mt-0.5">
              Password Security, Dispatch Preferences &amp; Profile Information
            </p>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="flex border-b-2 border-[#0082FC] mb-5">
          <button
            type="button"
            onClick={() => setActiveSection("security")}
            className={`py-2 px-3 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === "security"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Password &amp; Security</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("company")}
            className={`py-2 px-3 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === "company"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Contact &amp; Hub</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("notifications")}
            className={`py-2 px-3 text-xs font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeSection === "notifications"
                ? "border-[#0082FC] bg-[#0082FC] text-white"
                : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Alerts</span>
          </button>
        </div>

        {/* SECTION 1: PASSWORD & SECURITY (CHANGE, RESET, RECOVERY) */}
        {activeSection === "security" && (
          <div className="space-y-4">
            {passwordStatus && (
              <div
                className={`p-3 border-2 text-xs font-bold flex items-center gap-2 ${
                  passwordStatus.success
                    ? "bg-emerald-50 border-emerald-600 text-emerald-950"
                    : "bg-rose-50 border-rose-500 text-rose-900"
                }`}
              >
                {passwordStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
                <span>{passwordStatus.message}</span>
              </div>
            )}

            {/* Generated Temporary Password Notice */}
            {resetGeneratedPass && (
              <div className="p-3 bg-amber-50 border-2 border-amber-500 text-amber-950 space-y-1">
                <span className="text-[10px] font-black uppercase text-amber-900 block">
                  New Temporary Master Password:
                </span>
                <div className="text-base font-mono font-black tracking-wider text-[#0082FC] select-all bg-white px-2 py-1 border border-amber-400">
                  {resetGeneratedPass}
                </div>
                <span className="text-[11px] text-amber-900 block">
                  Please copy this key immediately or update it below.
                </span>
              </div>
            )}

            {/* Change Password Form */}
            <form onSubmit={handlePasswordSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-black uppercase text-[#0082FC] mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#0082FC] absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full bg-white border-2 border-[#0082FC] pl-9 pr-3 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-black uppercase text-[#0082FC] mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Min 6 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-[#0082FC] mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Re-type new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-none shadow-md"
                >
                  Update Password
                </button>

                {/* Instant Password Reset Button */}
                <button
                  type="button"
                  onClick={handleInstantReset}
                  className="px-3 py-2 bg-white hover:bg-amber-50 text-amber-900 border-2 border-amber-500 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-none flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-amber-700" />
                  <span>Reset Password</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* SECTION 2: CONTACT & LOGISTICS HUB */}
        {activeSection === "company" && (
          <form onSubmit={handleProfileSave} className="space-y-4">
            {profileStatus && (
              <div
                className={`p-3 border-2 text-xs font-bold flex items-center gap-2 ${
                  profileStatus.success
                    ? "bg-emerald-50 border-emerald-600 text-emerald-950"
                    : "bg-rose-50 border-rose-500 text-rose-900"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{profileStatus.message}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black uppercase text-[#0082FC] mb-1">
                  Primary Contact Full Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-[#0082FC] mb-1">
                  Dispatch Phone Number
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 font-mono font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase text-[#0082FC] mb-1">
                Primary Assigned Logistics Hub
              </label>
              <select
                value={preferredYard}
                onChange={(e) => setPreferredYard(e.target.value)}
                className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
              >
                <option value="new-york-hub">
                  Melville, NY Foundry Yard (Global Master Hub)
                </option>
                <option value="houston-yard">
                  Houston, TX Rail-Served Depot
                </option>
                <option value="atlanta-depot">
                  Atlanta, GA Southeast Transit Center
                </option>
                <option value="chicago-yard">
                  Chicago, IL Midwest Staging Facility
                </option>
              </select>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors cursor-pointer rounded-none shadow-md flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" />
                <span>Save Contact Details</span>
              </button>
            </div>
          </form>
        )}

        {/* SECTION 3: NOTIFICATION ALERTS */}
        {activeSection === "notifications" && (
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-start gap-2.5 cursor-pointer p-2.5 bg-[#0082FC]/5 border border-[#0082FC]">
                <input
                  type="checkbox"
                  checked={bolSmsAlerts}
                  onChange={(e) => setBolSmsAlerts(e.target.checked)}
                  className="mt-0.5 rounded-none accent-[#0082FC] w-4 h-4"
                />
                <span className="text-xs font-bold text-[#0082FC]">
                  SMS Trailer Staging Alerts{" "}
                  <span className="block font-normal text-[11px] text-[#0082FC]/80 mt-0.5">
                    Receive instant texts when flatbed loads depart the foundry
                    gate.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer p-2.5 bg-[#0082FC]/5 border border-[#0082FC]">
                <input
                  type="checkbox"
                  checked={mtrEmailAlerts}
                  onChange={(e) => setMtrEmailAlerts(e.target.checked)}
                  className="mt-0.5 rounded-none accent-[#0082FC] w-4 h-4"
                />
                <span className="text-xs font-bold text-[#0082FC]">
                  Automated Certified MTR Submittals{" "}
                  <span className="block font-normal text-[11px] text-[#0082FC]/80 mt-0.5">
                    Attach certified mill test reports automatically to digital
                    bills of lading.
                  </span>
                </span>
              </label>

              <label className="flex items-start gap-2.5 cursor-pointer p-2.5 bg-[#0082FC]/5 border border-[#0082FC]">
                <input
                  type="checkbox"
                  checked={quoteUpdates}
                  onChange={(e) => setQuoteUpdates(e.target.checked)}
                  className="mt-0.5 rounded-none accent-[#0082FC] w-4 h-4"
                />
                <span className="text-xs font-bold text-[#0082FC]">
                  Direct Wholesale Quotation Updates{" "}
                  <span className="block font-normal text-[11px] text-[#0082FC]/80 mt-0.5">
                    Receive price-lock notifications 48 hours prior to scrap
                    iron index adjustments.
                  </span>
                </span>
              </label>
            </div>

            <div className="p-3 bg-emerald-50 border border-emerald-600 text-xs text-emerald-950 font-medium">
              Preferences are auto-saved to your secure browser session.
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-4 mt-6 border-t-2 border-[#5FD4FD]/40 flex items-center justify-between gap-3">
          {onOpenProfile && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenProfile();
              }}
              className="text-xs font-bold text-[#0082FC] underline hover:text-[#5FD4FD] cursor-pointer"
            >
              &lsaquo; Back to Profile Dashboard
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="ml-auto px-5 py-2 bg-white text-[#0082FC] border-2 border-[#0082FC] hover:bg-[#5FD4FD]/20 font-bold text-xs uppercase cursor-pointer rounded-none"
          >
            Close Settings
          </button>
        </div>
      </div>
    </div>
  );
};
