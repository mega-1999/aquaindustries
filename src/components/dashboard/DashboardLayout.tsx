"use client";

import {
  ArrowLeft,
  Building,
  CheckCircle2,
  Droplets,
  ExternalLink,
  Globe,
  KeyRound,
  Lock,
  LogOut,
  Menu,
  Settings,
  Shield,
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
  const { currentUser, pendingCount, logout } = useAuth();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col lg:flex-row text-[#0082FC]">
      {/* Mobile Top Header (Small screens only) */}
      <div className="lg:hidden bg-[#0082FC] text-white px-4 py-3 flex items-center justify-between border-b-2 border-[#5FD4FD] sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white text-[#0082FC] border border-[#5FD4FD] flex items-center justify-center shrink-0">
            <Droplets className="w-5 h-5 text-[#0082FC]" />
          </div>
          <span className="font-black text-sm uppercase tracking-tight">
            Aqua <span className="text-[#5FD4FD]">Industries</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {currentUser && (
            <button
              type="button"
              onClick={logout}
              className="p-1.5 bg-rose-600 text-white border border-white text-xs font-bold"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}

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
            <div className="w-10 h-10 bg-[#0082FC] text-white border-2 border-[#5FD4FD] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6 text-white" />
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

            {currentUser && (
              <button
                type="button"
                onClick={logout}
                className="px-3 py-1.5 bg-white hover:bg-rose-50 text-rose-700 border border-rose-500 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Logout"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-600" />
                <span>Logout</span>
              </button>
            )}
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
