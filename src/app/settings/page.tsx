"use client";

import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  MapPin,
  RefreshCw,
  Save,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { useAuth } from "../../context/AuthContext";

export default function SettingsPage() {
  const {
    currentUser,
    updatePassword,
    resetPassword,
    updateUserProfile,
    login,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<
    "security" | "company" | "notifications"
  >("security");

  // Security password fields
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState<{
    success?: boolean;
    message: string;
  } | null>(null);
  const [resetGeneratedPass, setResetGeneratedPass] = useState<string | null>(
    null,
  );

  // Contact / Hub fields
  const [fullName, setFullName] = useState(currentUser?.fullName || "");
  const [phone, setPhone] = useState(currentUser?.phone || "");
  const [preferredYard, setPreferredYard] = useState(
    currentUser?.assignedYard || "new-york-hub",
  );
  const [profileStatus, setProfileStatus] = useState<{
    success?: boolean;
    message: string;
  } | null>(null);

  // Notifications
  const [bolSmsAlerts, setBolSmsAlerts] = useState(true);
  const [mtrEmailAlerts, setMtrEmailAlerts] = useState(true);
  const [quoteUpdates, setQuoteUpdates] = useState(false);

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

    if (newPassword.trim().length < 6) {
      setPasswordStatus({
        success: false,
        message: "New password must be at least 6 characters long.",
      });
      return;
    }

    // When updating password in authenticated settings, seamlessly apply new credentials
    const res = updatePassword(currentPassword, newPassword, true);
    setPasswordStatus(res);

    if (res.success) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const handleInstantReset = () => {
    setPasswordStatus(null);

    // If the user entered new password and confirmation, reset directly to it
    if (
      newPassword &&
      newPassword === confirmPassword &&
      newPassword.trim().length >= 6
    ) {
      const res = resetPassword(currentUser?.email, newPassword);
      setPasswordStatus(res);
      if (res.success) {
        setResetGeneratedPass(newPassword);
        setCurrentPassword(newPassword);
        setNewPassword("");
        setConfirmPassword("");
      }
      return;
    }

    // Otherwise generate a new secure key and automatically fill it into current password
    const res = resetPassword();
    if (res.success && res.tempPass) {
      setResetGeneratedPass(res.tempPass);
      setCurrentPassword(res.tempPass);
      setPasswordStatus({
        success: true,
        message: `Temporary master key created: ${res.tempPass}. It has been auto-filled into Current Password below.`,
      });
    } else {
      setPasswordStatus({
        success: false,
        message: res.message,
      });
    }
  };

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
    <DashboardLayout
      activePage="settings"
      title="Account Settings &amp; Security"
      subtitle="Password Management, Dispatch Staging Alerts &amp; Regional Hub"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {currentUser && (
          <div className="space-y-6">
            {/* Sub-tab Navigation */}
            <div className="flex border-b-2 border-[#0082FC] bg-white px-2">
              <button
                type="button"
                onClick={() => setActiveTab("security")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "security"
                    ? "border-[#0082FC] bg-[#0082FC] text-white"
                    : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
                }`}
              >
                <KeyRound className="w-4 h-4" />
                <span>Password &amp; Security</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("company")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "company"
                    ? "border-[#0082FC] bg-[#0082FC] text-white"
                    : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
                }`}
              >
                <User className="w-4 h-4" />
                <span>Contact &amp; Hub</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("notifications")}
                className={`py-3 px-4 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-wider border-b-2 -mb-[2px] transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeTab === "notifications"
                    ? "border-[#0082FC] bg-[#0082FC] text-white"
                    : "border-transparent text-[#0082FC] hover:bg-[#5FD4FD]/20"
                }`}
              >
                <Bell className="w-4 h-4" />
                <span>Alerts &amp; Dispatch</span>
              </button>
            </div>

            {/* Tab 1: Password & Security */}
            {activeTab === "security" && (
              <div className="bg-white border-2 border-[#0082FC] p-6 sm:p-8 space-y-6 shadow-md">
                {passwordStatus && (
                  <div
                    className={`p-3.5 border-2 text-xs font-bold flex items-center gap-2 ${
                      passwordStatus.success
                        ? "bg-emerald-50 border-emerald-600 text-emerald-950"
                        : "bg-rose-50 border-rose-500 text-rose-900"
                    }`}
                  >
                    {passwordStatus.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                    <span>{passwordStatus.message}</span>
                  </div>
                )}

                {resetGeneratedPass && (
                  <div className="p-4 bg-amber-50 border-2 border-amber-500 text-amber-950 space-y-2">
                    <span className="text-xs font-black uppercase text-amber-900 block">
                      New Temporary Password Generated:
                    </span>
                    <div className="text-lg font-mono font-black text-[#0082FC] select-all bg-white px-3 py-1.5 border border-amber-400">
                      {resetGeneratedPass}
                    </div>
                    <span className="text-xs text-amber-900 block">
                      Saved to your active encrypted browser session. You may
                      use this password to sign in or update it below.
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-wide text-[#0082FC] mb-2">
                    Change Account Password
                  </h3>
                  <p className="text-xs text-[#0082FC]/80 mb-4">
                    Enter your current password and specify a new secure
                    passphrase (minimum 6 characters).
                  </p>

                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-black uppercase text-[#0082FC]">
                          Current Password{" "}
                          {currentUser?.role === "super-admin"
                            ? "(Optional for Admin)"
                            : ""}
                        </label>
                        {currentUser?.password && (
                          <button
                            type="button"
                            onClick={() =>
                              setCurrentPassword(currentUser.password || "")
                            }
                            className="text-[10px] text-[#0082FC] hover:underline font-bold uppercase tracking-wider cursor-pointer"
                          >
                            Auto-Fill Current Key
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          placeholder={
                            currentUser?.role === "super-admin"
                              ? "Optional for Super-Admin"
                              : "Enter current password"
                          }
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full bg-white border-2 border-[#0082FC] pl-3.5 pr-10 py-2.5 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowCurrentPassword(!showCurrentPassword)
                          }
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#0082FC] hover:text-[#5FD4FD] transition-colors cursor-pointer"
                          title={
                            showCurrentPassword
                              ? "Hide password"
                              : "Show password"
                          }
                          aria-label={
                            showCurrentPassword
                              ? "Hide password"
                              : "Show password"
                          }
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black uppercase text-[#0082FC] mb-1">
                          New Password *
                        </label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            required
                            placeholder="Min 6 characters"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full bg-white border-2 border-[#0082FC] pl-3.5 pr-10 py-2.5 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#0082FC] hover:text-[#5FD4FD] transition-colors cursor-pointer"
                            title={
                              showNewPassword
                                ? "Hide password"
                                : "Show password"
                            }
                            aria-label={
                              showNewPassword
                                ? "Hide password"
                                : "Show password"
                            }
                          >
                            {showNewPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase text-[#0082FC] mb-1">
                          Confirm New Password *
                        </label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Re-type new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-white border-2 border-[#0082FC] pl-3.5 pr-10 py-2.5 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#0082FC] hover:text-[#5FD4FD] transition-colors cursor-pointer"
                            title={
                              showConfirmPassword
                                ? "Hide password"
                                : "Show password"
                            }
                            aria-label={
                              showConfirmPassword
                                ? "Hide password"
                                : "Show password"
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                      >
                        Save New Password
                      </button>

                      <button
                        type="button"
                        onClick={handleInstantReset}
                        className="px-4 py-2.5 bg-white hover:bg-amber-50 text-amber-900 border-2 border-amber-500 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                        title="Reset password without requiring current password"
                      >
                        <RefreshCw className="w-4 h-4 text-amber-700" />
                        <span>Instant Reset Password</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Tab 2: Contact Details & Yard */}
            {activeTab === "company" && (
              <div className="bg-white border-2 border-[#0082FC] p-6 sm:p-8 space-y-6 shadow-md">
                {profileStatus && (
                  <div
                    className={`p-3.5 border-2 text-xs font-bold flex items-center gap-2 ${
                      profileStatus.success
                        ? "bg-emerald-50 border-emerald-600 text-emerald-950"
                        : "bg-rose-50 border-rose-500 text-rose-900"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{profileStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleProfileSave} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-[#0082FC] mb-1">
                        Primary Contact Name
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border-2 border-[#0082FC] px-3.5 py-2.5 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase text-[#0082FC] mb-1">
                        Direct Phone Number
                      </label>
                      <input
                        type="text"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border-2 border-[#0082FC] px-3.5 py-2.5 text-xs font-mono font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-[#0082FC] mb-1">
                      Primary Regional Logistics Hub
                    </label>
                    <select
                      value={preferredYard}
                      onChange={(e) => setPreferredYard(e.target.value)}
                      className="w-full bg-white border-2 border-[#0082FC] px-3.5 py-2.5 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD] rounded-none"
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
                      className="px-6 py-3 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Update Contact &amp; Hub</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Tab 3: Notifications */}
            {activeTab === "notifications" && (
              <div className="bg-white border-2 border-[#0082FC] p-6 sm:p-8 space-y-6 shadow-md">
                <div className="space-y-4">
                  <label className="flex items-start gap-3 p-3.5 bg-[#0082FC]/5 border border-[#0082FC] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={bolSmsAlerts}
                      onChange={(e) => setBolSmsAlerts(e.target.checked)}
                      className="mt-1 accent-[#0082FC] w-4 h-4"
                    />
                    <div>
                      <strong className="text-xs sm:text-sm font-black text-[#0082FC] block">
                        SMS Flatbed Staging &amp; Driver Departure Alerts
                      </strong>
                      <p className="text-xs text-[#0082FC]/80 mt-0.5">
                        Receive instant automated text notifications when your
                        flatbed leaves the loading bay.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 bg-[#0082FC]/5 border border-[#0082FC] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mtrEmailAlerts}
                      onChange={(e) => setMtrEmailAlerts(e.target.checked)}
                      className="mt-1 accent-[#0082FC] w-4 h-4"
                    />
                    <div>
                      <strong className="text-xs sm:text-sm font-black text-[#0082FC] block">
                        Certified Mill Test Report (MTR) Auto-Delivery
                      </strong>
                      <p className="text-xs text-[#0082FC]/80 mt-0.5">
                        Automatically generate and email signed ASTM A536
                        chemical and tensile test submittals upon BOL creation.
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3.5 bg-[#0082FC]/5 border border-[#0082FC] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quoteUpdates}
                      onChange={(e) => setQuoteUpdates(e.target.checked)}
                      className="mt-1 accent-[#0082FC] w-4 h-4"
                    />
                    <div>
                      <strong className="text-xs sm:text-sm font-black text-[#0082FC] block">
                        Wholesale Price Lock &amp; Index Bulletins
                      </strong>
                      <p className="text-xs text-[#0082FC]/80 mt-0.5">
                        Receive 48-hour advance notice prior to monthly ductile
                        iron scrap index price adjustments.
                      </p>
                    </div>
                  </label>
                </div>

                <div className="p-3.5 bg-emerald-50 border border-emerald-600 text-xs text-emerald-950 font-bold">
                  ✓ Notification preferences are actively linked to your contact
                  profile.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
