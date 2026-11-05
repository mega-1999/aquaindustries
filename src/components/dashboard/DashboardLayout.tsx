"use client";

import {
  AlertCircle,
  ArrowLeft,
  Building,
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  Globe,
  KeyRound,
  Lock,
  LogOut,
  Menu,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Truck,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface DashboardLayoutProps {
  activePage: "profile" | "settings" | "admin";
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  activePage,
  title,
  subtitle,
  children,
}) => {
  const { currentUser, pendingCount, isInitialized, login, logout } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Authentication gate form state
  const [gateEmail, setGateEmail] = useState("");
  const [gatePassword, setGatePassword] = useState("");
  const [showGatePassword, setShowGatePassword] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);

  const handleGateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setGateError(null);
    const res = login(gateEmail, gatePassword);
    if (!res.success) {
      setGateError(res.message);
    }
  };

  // 1. Initializing state
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-[#0082FC]">
        <div className="h-16 px-3 bg-white border-2 border-[#5FD4FD] flex items-center justify-center shadow-lg animate-pulse mb-4">
          <img
            src="/images/AI_Waterdrop.png"
            alt="Aqua Industries"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#0082FC]">
          Verifying Commercial Credentials...
        </div>
      </div>
    );
  }

  // 2. Unauthenticated Gate: User NOT logged in
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col text-[#0082FC]">
        {/* Top Header */}
        <header className="bg-[#0082FC] text-white px-6 py-4 border-b-4 border-[#5FD4FD] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 px-1.5 bg-white border border-[#5FD4FD] flex items-center justify-center">
              <img
                src="/images/AI_Waterdrop.png"
                alt="Aqua Industries"
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="font-black text-sm uppercase tracking-tight">
              Aqua <span className="text-[#5FD4FD]">Industries</span>
            </span>
          </Link>
          <Link
            href="/"
            className="px-3.5 py-1.5 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors"
          >
            &larr; Return to Catalog
          </Link>
        </header>

        {/* Center Auth Gate Card */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-md w-full bg-white border-4 border-[#0082FC] shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 border-2 border-amber-500 mx-auto flex items-center justify-center">
                <Lock className="w-7 h-7 text-amber-600" />
              </div>
              <div className="inline-block px-2.5 py-0.5 bg-amber-500 text-white text-[10px] font-black uppercase tracking-wider">
                Restricted Workspace
              </div>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC]">
                Sign In Required
              </h2>
              <p className="text-xs text-[#0082FC]/80 font-medium leading-relaxed">
                You must be logged in with an authorized account to access{" "}
                <strong>{title}</strong>.
              </p>
            </div>

            {gateError && (
              <div className="p-3.5 bg-rose-50 border-2 border-rose-500 text-rose-900 text-xs font-bold flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{gateError}</span>
              </div>
            )}

            <form onSubmit={handleGateLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0082FC] uppercase mb-1">
                  Business Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={gateEmail}
                  onChange={(e) => setGateEmail(e.target.value)}
                  className="w-full bg-white border-2 border-[#0082FC] px-3 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0082FC] uppercase mb-1">
                  Account Password
                </label>
                <div className="relative">
                  <input
                    type={showGatePassword ? "text" : "password"}
                    required
                    placeholder="••••••••••••"
                    value={gatePassword}
                    onChange={(e) => setGatePassword(e.target.value)}
                    className="w-full bg-white border-2 border-[#0082FC] pl-3 pr-10 py-2 text-xs font-bold text-[#0082FC] focus:outline-none focus:border-[#5FD4FD]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowGatePassword(!showGatePassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#0082FC] hover:text-[#5FD4FD] transition-colors cursor-pointer"
                    title={showGatePassword ? "Hide password" : "Show password"}
                    aria-label={
                      showGatePassword ? "Hide password" : "Show password"
                    }
                  >
                    {showGatePassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
              >
                Sign In to Unlock Dashboard
              </button>
            </form>

            <div className="pt-4 border-t border-[#0082FC]/20 text-center space-y-2">
              <span className="text-xs text-[#0082FC]/80 block">
                Need an approved commercial waterworks account?
              </span>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/#quote-form"
                  className="text-xs font-black uppercase text-[#0082FC] hover:underline"
                >
                  Register Account &rsaquo;
                </Link>
                <span className="text-[#0082FC]/30">•</span>
                <Link
                  href="/"
                  className="text-xs font-bold text-[#0082FC]/80 hover:underline"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Super-Admin Gate: Non-admin trying to access /admin
  const isSuperAdmin =
    currentUser.role === "super-admin" ||
    currentUser.email?.toLowerCase().includes("admin@");

  if (activePage === "admin" && !isSuperAdmin) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col text-[#0082FC]">
        <header className="bg-[#0082FC] text-white px-6 py-4 border-b-4 border-[#5FD4FD] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 px-1.5 bg-white border border-[#5FD4FD] flex items-center justify-center">
              <img
                src="/images/AI_Waterdrop.png"
                alt="Aqua Industries"
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="font-black text-sm uppercase tracking-tight">
              Aqua <span className="text-[#5FD4FD]">Industries</span>
            </span>
          </Link>
          <Link
            href="/profile"
            className="px-3.5 py-1.5 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors"
          >
            My Profile Dashboard &rsaquo;
          </Link>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="max-w-md w-full bg-white border-4 border-rose-600 shadow-2xl p-6 sm:p-8 space-y-6 text-center">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 border-2 border-rose-600 mx-auto flex items-center justify-center">
              <ShieldAlert className="w-7 h-7 text-rose-600" />
            </div>
            <div className="inline-block px-2.5 py-0.5 bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider">
              Access Denied • 403 Forbidden
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-rose-950">
              Super-Admin Clearance Required
            </h2>
            <p className="text-xs text-rose-900/80 font-medium leading-relaxed">
              Your account (<strong>{currentUser.email}</strong>) is
              authenticated with <strong>{currentUser.accountType}</strong> tier
              privileges. The Approvals Desk is strictly restricted to
              authorized Super-Admin executive officers.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/profile"
                className="w-full py-2.5 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] font-black text-xs uppercase tracking-wider transition-colors"
              >
                Return to My Profile Dashboard &rsaquo;
              </Link>
              <Link
                href="/"
                className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-[#0082FC] border border-[#0082FC] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Return to Public Catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row text-[#0082FC]">
      {/* Mobile Top Header (Small screens only) */}
      <div className="lg:hidden bg-[#0082FC] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#5FD4FD] sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 px-1 bg-white border border-[#5FD4FD] flex items-center justify-center shrink-0">
            <img
              src="/images/AI_Fevicon.png"
              alt="Aqua Industries"
              className="h-6 w-auto object-contain"
            />
          </div>
          <span className="font-black text-sm uppercase tracking-tight">
            Aqua <span className="text-[#5FD4FD]">Industries</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-1.5 bg-white text-[#0082FC] border border-[#5FD4FD]"
            aria-label="Toggle Sidebar Menu"
          >
            {mobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* ========================================================
          LEFT SIDEBAR (Fixed Desktop & Collapsible Mobile)
      ======================================================== */}
      <aside
        className={`w-full lg:w-72 xl:w-80 bg-white border-r-4 border-[#0082FC] shrink-0 flex flex-col justify-between z-40 transition-all duration-200 ${
          mobileSidebarOpen
            ? "block fixed inset-0 z-50 overflow-y-auto lg:relative lg:inset-auto"
            : "hidden lg:flex lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto"
        }`}
      >
        <div className="p-5 sm:p-6 space-y-6">
          {/* Mobile Close Button */}
          <div className="flex lg:hidden items-center justify-between pb-3 border-b border-[#0082FC]/20">
            <span className="text-xs font-black uppercase text-[#0082FC]">
              Navigation Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1 text-[#0082FC] hover:bg-[#5FD4FD]/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Logo & Waterworks Title */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            title="Return to Aqua Industries Home"
          >
            <div className="h-10 px-1.5 bg-white border-2 border-[#5FD4FD] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/images/AI_Waterdrop.png"
                alt="Aqua Industries"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div>
              <div className="font-extrabold text-[#0082FC] text-lg tracking-tight leading-none">
                Aqua <span className="text-[#5FD4FD]">Industries</span>
              </div>
              <span className="text-[10px] text-[#0082FC]/80 font-bold uppercase tracking-wider block mt-0.5">
                Waterworks Portal Desk
              </span>
            </div>
          </Link>

          {/* User Profile Identity Card in Sidebar */}
          {currentUser ? (
            <div className="p-4 bg-[#0082FC]/5 border-2 border-[#0082FC] space-y-2.5">
              <div className="flex items-center justify-between gap-1">
                <span
                  className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-wider ${
                    currentUser.role === "super-admin"
                      ? "bg-[#0082FC] text-white"
                      : currentUser.status === "APPROVED"
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-500 text-white"
                  }`}
                >
                  {currentUser.role === "super-admin"
                    ? "SUPER-ADMIN EXECUTIVE"
                    : currentUser.status === "APPROVED"
                      ? "VERIFIED CONTRACTOR"
                      : "PENDING APPROVAL"}
                </span>

                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div>
                <h4 className="font-black text-sm text-[#0082FC] uppercase tracking-tight leading-snug truncate">
                  {currentUser.companyName}
                </h4>
                <div className="text-[11px] text-[#0082FC]/90 font-medium truncate mt-0.5">
                  Primary Contact: <strong>{currentUser.fullName}</strong>
                </div>
                <div className="text-[10px] font-mono text-[#0082FC]/75 truncate">
                  {currentUser.email}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-amber-50 border border-amber-500 text-amber-950 text-xs font-medium">
              Not currently signed in. Please authenticate below.
            </div>
          )}

          {/* Sidebar Navigation Options */}
          <nav
            className="space-y-1.5"
            aria-label="Dashboard Sidebar Navigation"
          >
            <span className="text-[10px] font-black uppercase tracking-wider text-[#0082FC]/60 px-2 block mb-2">
              Account Management
            </span>

            {/* Option 1: Profile Dashboard */}
            <Link
              href="/profile"
              onClick={() => setMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                activePage === "profile"
                  ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                  : "bg-white text-[#0082FC] border-[#0082FC]/30 hover:border-[#0082FC] hover:bg-[#5FD4FD]/20"
              }`}
            >
              <User
                className={`w-4 h-4 shrink-0 ${
                  activePage === "profile" ? "text-[#5FD4FD]" : "text-[#0082FC]"
                }`}
              />
              <span className="flex-1">Profile Dashboard</span>
            </Link>

            {/* Option 2: Account Settings */}
            <Link
              href="/settings"
              onClick={() => setMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                activePage === "settings"
                  ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                  : "bg-white text-[#0082FC] border-[#0082FC]/30 hover:border-[#0082FC] hover:bg-[#5FD4FD]/20"
              }`}
            >
              <Settings
                className={`w-4 h-4 shrink-0 ${
                  activePage === "settings"
                    ? "text-[#5FD4FD]"
                    : "text-[#0082FC]"
                }`}
              />
              <span className="flex-1">Account Settings</span>
            </Link>

            {/* Option 3: Super-Admin Contractor Approvals (if Super-Admin) */}
            {currentUser?.role === "super-admin" && (
              <Link
                href="/admin"
                onClick={() => setMobileSidebarOpen(false)}
                className={`flex items-center justify-between gap-2 px-3 py-2.5 text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                  activePage === "admin"
                    ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                    : "bg-amber-50 text-[#0082FC] border-amber-400 hover:bg-amber-100"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="truncate">Approvals Desk</span>
                </div>
                {pendingCount > 0 && (
                  <span className="px-1.5 py-0.2 bg-amber-500 text-white text-[10px] font-black shrink-0">
                    {pendingCount}
                  </span>
                )}
              </Link>
            )}

            <div className="pt-3 border-t border-[#0082FC]/20 my-2" />

            <span className="text-[10px] font-black uppercase tracking-wider text-[#0082FC]/60 px-2 block mb-2">
              Catalog &amp; Site
            </span>

            {/* Return to Main Site */}
            <Link
              href="/"
              onClick={() => setMobileSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-[#0082FC] border border-[#0082FC]/30 hover:bg-[#5FD4FD]/20 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#0082FC] shrink-0" />
              <span>Return to Main Site</span>
            </Link>

            <Link
              href="/projects"
              onClick={() => setMobileSidebarOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold uppercase tracking-wider bg-white text-[#0082FC] border border-[#0082FC]/30 hover:bg-[#5FD4FD]/20 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#0082FC] shrink-0" />
              <span>View Case Studies</span>
            </Link>
          </nav>
        </div>

        {/* ========================================================
            SIDEBAR FOOTER: LOGOUT BUTTON WITH PROMINENT LOGOUT ICON
        ======================================================== */}
        <div className="p-4 sm:p-5 border-t-2 border-[#0082FC]/30 bg-slate-50 space-y-2">
          {currentUser ? (
            <button
              type="button"
              onClick={() => {
                setMobileSidebarOpen(false);
                logout();
              }}
              className="w-full py-2.5 px-3 bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-500 text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <LogOut className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Logout / Sign Out</span>
            </button>
          ) : (
            <Link
              href="/"
              className="w-full py-2.5 px-3 bg-[#0082FC] text-white text-xs font-black uppercase tracking-wider text-center block"
            >
              Sign In to Account
            </Link>
          )}

          <div className="text-[10px] text-center text-[#0082FC]/60 uppercase font-mono">
            Aqua Industries Waterworks v1.0
          </div>
        </div>
      </aside>

      {/* ========================================================
          RIGHT MAIN CONTENT AREA
      ======================================================== */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Content Bar */}
        <header className="bg-white border-b-2 border-[#0082FC] px-6 sm:px-8 py-4 flex items-center justify-between gap-4 shadow-xs">
          <div>
            <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#0082FC]/80 font-medium mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/"
              className="px-3.5 py-1.5 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] border border-[#0082FC] text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>Aqua Catalog</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </header>

        {/* Content Children */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
