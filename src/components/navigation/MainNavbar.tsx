"use client";

import {
  ArrowRight,
  Calculator,
  ChevronDown,
  Clock,
  FileText,
  Layers,
  Lock,
  Menu,
  Settings,
  Shield,
  ShieldCheck,
  Truck,
  User,
  UserCheck,
  Wrench,
  X,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

interface MainNavbarProps {
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
  onOpenYardModal: () => void;
  onOpenSuperAdminModal?: () => void;
  onSelectProductCategory?: (category: string) => void;
}

export const MainNavbar: React.FC<MainNavbarProps> = ({
  onOpenLoginModal,
  onOpenRegisterModal,
  onOpenYardModal,
  onOpenSuperAdminModal,
  onSelectProductCategory,
}) => {
  const { currentUser, pendingCount } = useAuth();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const isSuperAdmin =
    currentUser?.role === "super-admin" ||
    currentUser?.email?.toLowerCase().includes("admin@");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string, categoryFilter?: string) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    if (categoryFilter && onSelectProductCategory) {
      onSelectProductCategory(categoryFilter);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled
          ? "bg-white shadow-md border-b-2 border-[#3087ff] py-2"
          : "bg-white border-b-2 border-[#3087ff]/20 py-2.5 sm:py-3"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-h-[3.75rem] sm:min-h-[4.25rem] lg:min-h-[5rem]">
          {/* Mobile Left: Menu Hamburger (< xl) */}
          <div className="flex items-center xl:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#3087ff] hover:bg-[#3087ff]/20 rounded-none border-2 border-[#3087ff] focus:outline-none focus:ring-2 focus:ring-[#3087ff] cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* 1. ALL MENU ON LEFT (Desktop >= xl) */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 text-xs 2xl:text-sm font-bold text-[#3087ff]"
          >
            {/* 1. Waterworks Fittings Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("fittings")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 rounded-none transition-colors whitespace-nowrap ${activeMenu === "fittings"
                    ? "text-white bg-[#3087ff]"
                    : "text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                <span className="whitespace-nowrap">Fittings</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "fittings"
                      ? "rotate-180 text-white"
                      : "text-[#3087ff]"
                    }`}
                />
              </button>

              {activeMenu === "fittings" && (
                <div className="absolute top-full left-0 w-[min(620px,calc(100vw-2.5rem))] pt-2 z-50">
                  <div className="bg-white border-2 border-[#3087ff] rounded-none shadow-2xl p-4 text-[#3087ff]">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-8 grid grid-cols-2 gap-2.5">
                        <a
                          href="#product-matrix"
                          onClick={() =>
                            handleNavClick("#product-matrix", "fittings")
                          }
                          className="p-3 rounded-none hover:bg-[#3087ff] hover:text-white border border-[#3087ff] transition-all group block text-[#3087ff]"
                        >
                          <div className="font-extrabold text-sm mb-1 group-hover:text-[#3087ff] leading-tight">
                            C153 Compact MJ Fittings
                          </div>
                          <p className="text-xs sm:text-[13px] leading-relaxed group-hover:text-white font-medium">
                            2&quot; to 64&quot; MJ bends, tees, and reducers.
                            350 PSI rated.
                          </p>
                        </a>

                        <a
                          href="#product-matrix"
                          onClick={() =>
                            handleNavClick("#product-matrix", "fittings")
                          }
                          className="p-3 rounded-none hover:bg-[#3087ff] hover:text-white border border-[#3087ff] transition-all group block text-[#3087ff]"
                        >
                          <div className="font-extrabold text-sm mb-1 group-hover:text-[#3087ff] leading-tight">
                            C110 Full Body MJ Fittings
                          </div>
                          <p className="text-xs sm:text-[13px] leading-relaxed group-hover:text-white font-medium">
                            Heavy full-body branch tees &amp; crosses for
                            high-surge mains.
                          </p>
                        </a>

                        <a
                          href="#product-matrix"
                          onClick={() =>
                            handleNavClick("#product-matrix", "fittings")
                          }
                          className="p-3 rounded-none hover:bg-[#3087ff] hover:text-white border border-[#3087ff] transition-all group block text-[#3087ff]"
                        >
                          <div className="font-extrabold text-sm mb-1 group-hover:text-[#3087ff] leading-tight">
                            C110 Flange Fittings
                          </div>
                          <p className="text-xs sm:text-[13px] leading-relaxed group-hover:text-white font-medium">
                            Class 125 &amp; 250 flanged spools &amp; reducers
                            for pump stations.
                          </p>
                        </a>

                        <a
                          href="#product-matrix"
                          onClick={() =>
                            handleNavClick("#product-matrix", "fittings")
                          }
                          className="p-3 rounded-none hover:bg-[#3087ff] hover:text-white border border-[#3087ff] transition-all group block text-[#3087ff]"
                        >
                          <div className="font-extrabold text-sm mb-1 group-hover:text-[#3087ff] leading-tight">
                            C153 Push-On Fittings
                          </div>
                          <p className="text-xs sm:text-[13px] leading-relaxed group-hover:text-white font-medium">
                            Tyton-compatible socket fittings for rapid trench
                            assembly.
                          </p>
                        </a>
                      </div>

                      <div className="col-span-4 bg-[#3087ff] text-white border-2 border-[#3087ff] rounded-none p-4 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#3087ff] px-2 py-0.5 rounded-none whitespace-nowrap">
                            Foundry Certified
                          </span>
                          <h4 className="font-extrabold text-white text-sm sm:text-base mt-2.5 mb-1">
                            Grade 65-45-12
                          </h4>
                          <p className="text-xs text-white/95 leading-relaxed font-medium">
                            Certified ductile iron proof-tested to 500 PSI
                            hydrostatic pressure.
                          </p>
                        </div>
                        <a
                          href="#product-matrix"
                          onClick={() =>
                            handleNavClick("#product-matrix", "fittings")
                          }
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3087ff] hover:text-white mt-3 whitespace-nowrap"
                        >
                          <span>All Fittings</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Restraints Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("restraints")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 rounded-none transition-colors whitespace-nowrap ${activeMenu === "restraints"
                    ? "text-white bg-[#3087ff]"
                    : "text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                <span className="whitespace-nowrap">Restraints</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "restraints"
                      ? "rotate-180 text-white"
                      : "text-[#3087ff]"
                    }`}
                />
              </button>

              {activeMenu === "restraints" && (
                <div className="absolute top-full left-0 w-80 max-w-[calc(100vw-2rem)] pt-2 z-50">
                  <div className="bg-white border-2 border-[#3087ff] rounded-none shadow-2xl p-3 text-[#3087ff]">
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        ULTRA PVC Restraints
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Highest certified pressure rating for C900 PVC.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Series 3000 Wedge-Action Glands
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        For Ductile Iron &amp; PVC with auto-torque screws.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Series 1500 &amp; 1900 Harnesses
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Bell harness tie-rods for existing push-on joints.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Series 2100 Split MJ Restraints
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Two-piece retrofit restraint for live or existing lines.
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Municipal Castings */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("castings")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 rounded-none transition-colors whitespace-nowrap ${activeMenu === "castings"
                    ? "text-white bg-[#3087ff]"
                    : "text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                <span className="whitespace-nowrap">Castings</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "castings"
                      ? "rotate-180 text-white"
                      : "text-[#3087ff]"
                    }`}
                />
              </button>

              {activeMenu === "castings" && (
                <div className="absolute top-full left-0 w-80 max-w-[calc(100vw-2rem)] pt-2 z-50">
                  <div className="bg-white border-2 border-[#3087ff] rounded-none shadow-2xl p-3 text-[#3087ff]">
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "municipal-castings")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        AASHTO M306 Manhole Covers
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        40,000 lb proof-load machined heavy traffic lids.
                      </div>
                    </a>
                    <a
                      href="#trash-racks"
                      onClick={() => handleNavClick("#trash-racks")}
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group bg-[#3087ff]/10 border-l-2 border-[#3087ff]"
                    >
                      <div className="font-extrabold text-sm leading-tight flex items-center justify-between">
                        <span>Trash Racks</span>
                        <span className="text-[9px] bg-[#3087ff] group-hover:bg-white text-white group-hover:text-[#3087ff] px-1.5 py-0.2 font-mono font-black">
                          FEATURED
                        </span>
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        360° pyramidal anti-vortex risers &amp; inclined
                        self-cleaning screens.
                      </div>
                    </a>
                    <a
                      href="#pipe-grates"
                      onClick={() => handleNavClick("#pipe-grates")}
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group border-l-2 border-[#3087ff] pl-3"
                    >
                      <div className="font-extrabold text-sm leading-tight flex items-center justify-between">
                        <span>Pipe Grates</span>
                        <span className="text-[9px] bg-[#3087ff] group-hover:bg-white text-white group-hover:text-[#3087ff] px-1.5 py-0.2 font-mono font-black">
                          SIMULATOR
                        </span>
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Hinged cleanout end grates &amp; 4:1 highway traversable
                        safety slopes.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "municipal-castings")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Drainage Grates &amp; Curb Inlets
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Highway vane grates and bicycle-safe catch basin hoods.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "municipal-castings")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Trench Grates &amp; Warning Plates
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        ADA heel-proof grates &amp; truncated dome tiles.
                      </div>
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "valve-meter-boxes")
                      }
                      className="block p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <div className="font-extrabold text-sm leading-tight">
                        Valve &amp; Meter Service Boxes
                      </div>
                      <div className="text-xs text-[#3087ff] group-hover:text-white mt-1 font-medium leading-relaxed">
                        Screw &amp; slip adjustable boxes &amp; extension rings.
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Engineering & Submittal Tools */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMenu("tools")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 px-2.5 2xl:px-3 py-2 rounded-none transition-colors whitespace-nowrap ${activeMenu === "tools"
                    ? "text-white bg-[#3087ff]"
                    : "text-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                <span className="whitespace-nowrap">Tools</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "tools"
                      ? "rotate-180 text-white"
                      : "text-[#3087ff]"
                    }`}
                />
              </button>

              {activeMenu === "tools" && (
                <div className="absolute top-full right-0 w-80 max-w-[calc(100vw-2rem)] pt-2 z-50">
                  <div className="bg-white border-2 border-[#3087ff] rounded-none shadow-2xl p-3 text-[#3087ff]">
                    <a
                      href="#thrust-calculator"
                      onClick={() => handleNavClick("#thrust-calculator")}
                      className="flex items-start gap-2.5 p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <Calculator className="w-4 h-4 text-[#3087ff] group-hover:text-white shrink-0 mt-0.5" />
                      <div>
                        <div className="font-extrabold text-sm mb-0.5 leading-tight flex items-center gap-1.5">
                          <span>Thrust Calculator</span>
                          <span className="px-2 py-0.5 rounded-none bg-[#3087ff] text-white text-xs font-bold whitespace-nowrap">
                            Live
                          </span>
                        </div>
                        <div className="text-xs text-[#3087ff] group-hover:text-white font-medium leading-relaxed">
                          Calculate restrained footage per AWWA C600.
                        </div>
                      </div>
                    </a>

                    <a
                      href="#quote-form"
                      onClick={() => handleNavClick("#quote-form")}
                      className="flex items-start gap-2.5 p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-[#3087ff] group-hover:text-white shrink-0 mt-0.5" />
                      <div>
                        <div className="font-extrabold text-sm mb-0.5 leading-tight">
                          Submittal Package Builder
                        </div>
                        <div className="text-xs text-[#3087ff] group-hover:text-white font-medium leading-relaxed">
                          Compile cut sheets, MTR records, and DWGs.
                        </div>
                      </div>
                    </a>

                    <a
                      href="#quality-standards"
                      onClick={() => handleNavClick("#quality-standards")}
                      className="flex items-start gap-2.5 p-2.5 rounded-none hover:bg-[#3087ff] hover:text-white transition-colors group"
                    >
                      <Shield className="w-4 h-4 text-[#3087ff] group-hover:text-white shrink-0 mt-0.5" />
                      <div>
                        <div className="font-extrabold text-sm mb-0.5 leading-tight">
                          Linings &amp; Coating Specs
                        </div>
                        <div className="text-xs text-[#3087ff] group-hover:text-white font-medium leading-relaxed">
                          AWWA C104 cement &amp; C116 fusion epoxy.
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 5. About Aqua Industries (Foundry) */}
            <a
              href="/#foundry-walkthrough"
              onClick={() => handleNavClick("/#foundry-walkthrough")}
              className="px-2 2xl:px-3 py-2 rounded-none text-[#3087ff] hover:bg-[#3087ff]/20 transition-colors whitespace-nowrap font-bold"
            >
              Foundry
            </a>
          </nav>

          {/* 2. THEN LOGO: Large Aqua Industries Brand Logo */}
          <div className="flex items-center justify-center shrink-0 px-2 sm:px-4">
            <a
              href="/"
              className="flex items-center justify-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3087ff] rounded-none p-1"
              title="Aqua Industries"
            >
              <img
                src="/images/AI_Waterdrop.png"
                alt="Aqua Industries"
                className="h-14 sm:h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-200 shrink-0 filter drop-shadow-xs"
              />
            </a>
          </div>

          {/* 3. THEN OTHER THINGS: Desktop Right Header Actions (>= xl) */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">

            {currentUser ? (
              /* User Session Menu */
              <div className="flex items-center gap-1.5">
                <div
                  className="relative"
                  onMouseEnter={() => setActiveMenu("user-menu")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setActiveMenu(
                        activeMenu === "user-menu" ? null : "user-menu",
                      );
                    }}
                    className={`inline-flex items-center gap-2 px-3 py-2 text-xs 2xl:text-sm font-black transition-all whitespace-nowrap border-2 rounded-none shadow-xs cursor-pointer ${activeMenu === "user-menu"
                        ? "bg-[#3087ff] text-white border-[#3087ff]"
                        : "bg-white text-[#3087ff] hover:bg-[#3087ff]/20 border-[#3087ff]"
                      }`}
                    aria-label="User Account Menu"
                  >
                    <div className="w-5 h-5 bg-[#3087ff] text-white flex items-center justify-center text-[10px] font-black border border-[#3087ff]">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate max-w-[130px]">
                      {currentUser.fullName.split(" ")[0]}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "user-menu" ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {activeMenu === "user-menu" && (
                    <div className="absolute top-full right-0 w-60 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="bg-white border-2 border-[#3087ff] shadow-2xl p-1.5 text-[#3087ff] rounded-none">
                        {/* User Identity Mini Chip */}
                        <div className="px-3 py-2 border-b border-[#3087ff]/20 mb-1 bg-[#3087ff]/15">
                          <div className="font-black text-xs text-[#3087ff] truncate">
                            {currentUser.fullName}
                          </div>
                          <div className="text-[10px] text-[#3087ff]/80 font-bold uppercase truncate">
                            {currentUser.companyName}
                          </div>
                        </div>

                        {/* 1. Profile Dashboard Link (Direct navigation to Dashboard with Sidebar) */}
                        <Link
                          href="/profile"
                          onClick={() => {
                            setActiveMenu(null);
                          }}
                          className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 hover:bg-[#3087ff] hover:text-white transition-colors font-bold text-xs uppercase tracking-wider group cursor-pointer rounded-none"
                        >
                          <User className="w-4 h-4 text-[#3087ff] group-hover:text-white shrink-0" />
                          <span>Profile Dashboard</span>
                        </Link>

                        {/* 2. Account Settings Link */}
                        <Link
                          href="/settings"
                          onClick={() => {
                            setActiveMenu(null);
                          }}
                          className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 hover:bg-[#3087ff] hover:text-white transition-colors font-bold text-xs uppercase tracking-wider group cursor-pointer rounded-none"
                        >
                          <Settings className="w-4 h-4 text-[#3087ff] group-hover:text-white shrink-0" />
                          <span>Account Settings</span>
                        </Link>

                        {/* 3. Approvals Desk Link (If Super Admin) */}
                        {isSuperAdmin && (
                          <Link
                            href="/admin"
                            onClick={() => {
                              setActiveMenu(null);
                            }}
                            className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 hover:bg-amber-500 hover:text-white transition-colors font-bold text-xs uppercase tracking-wider group cursor-pointer rounded-none bg-amber-50 text-amber-800 border-t border-amber-200"
                          >
                            <ShieldCheck className="w-4 h-4 text-amber-600 group-hover:text-white shrink-0" />
                            <div className="flex items-center justify-between flex-1">
                              <span>Approvals Desk</span>
                              {pendingCount > 0 && (
                                <span className="bg-amber-500 group-hover:bg-white text-white group-hover:text-amber-800 text-[10px] font-black px-1.5 py-0.5">
                                  {pendingCount}
                                </span>
                              )}
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* If Not Logged In: Client Portal Button */
              <button
                type="button"
                onClick={onOpenLoginModal}
                className="inline-flex items-center gap-1.5 px-3 2xl:px-3.5 py-2 text-xs 2xl:text-sm font-bold transition-all whitespace-nowrap border-2 border-[#3087ff] bg-white text-[#3087ff] hover:bg-[#3087ff]/20 rounded-none shadow-xs cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Client Portal</span>
              </button>
            )}

            {/* Primary CTA: Request a Job Quote */}
            <a
              href="#quote-form"
              className="inline-flex items-center gap-1.5 px-4 2xl:px-5 py-2 text-xs 2xl:text-sm font-extrabold text-white bg-[#3087ff] hover:bg-[#3087ff] hover:text-white border-2 border-[#3087ff] rounded-none shadow-md shadow-[#3087ff]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Request Quote</span>
            </a>

            {/* Yards - Last Right */}
            <button
              type="button"
              onClick={onOpenYardModal}
              className="inline-flex items-center gap-1.5 px-3 2xl:px-3.5 py-2 text-xs 2xl:text-sm font-bold transition-all whitespace-nowrap border-2 border-[#3087ff] bg-white text-[#3087ff] hover:bg-[#3087ff]/20 rounded-none shadow-xs cursor-pointer"
            >
              <Truck className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Yards</span>
            </button>
          </div>

          {/* Mobile & Tablet (< xl) Action Buttons & Hamburger */}
          <div className="flex items-center gap-2 xl:hidden shrink-0">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold text-white bg-[#3087ff] hover:bg-[#3087ff] hover:text-white rounded-none shadow-sm whitespace-nowrap border border-[#3087ff]"
            >
              <span>Quote</span>
            </a>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-50 flex justify-end">
          {/* Blue Tinted Backdrop (NO BLACK) */}
          <button
            type="button"
            className="fixed inset-0 bg-[#3087ff]/80 backdrop-blur-xs transition-opacity w-full h-full border-0 cursor-default"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Backdrop"
          />

          {/* Drawer Slide Panel */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto border-l-2 border-[#3087ff]">
            <div className="space-y-4">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#3087ff]/20">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center shrink-0"
                  title="Aqua Industries"
                >
                  <img
                    src="/images/AI_Waterdrop.png"
                    alt="Aqua Industries"
                    className="h-10 w-auto object-contain shrink-0"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-none text-[#3087ff] hover:bg-[#3087ff]/20"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Waterworks Fittings Accordion */}
              <div className="border-b border-[#3087ff]/20 pb-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === "fittings" ? null : "fittings",
                    )
                  }
                  className="w-full flex items-center justify-between text-sm font-bold text-[#3087ff] py-2"
                >
                  <span className="whitespace-nowrap">Waterworks Fittings</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3087ff] transition-transform ${mobileAccordion === "fittings"
                        ? "rotate-180 text-[#3087ff]"
                        : ""
                      }`}
                  />
                </button>
                {mobileAccordion === "fittings" && (
                  <div className="mt-1 space-y-1.5 pl-3 pb-2 text-sm text-[#3087ff]">
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "fittings")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • C153 Compact MJ Fittings
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "fittings")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • C110 Full Body MJ Fittings
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "fittings")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • C110 Flange Fittings
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "fittings")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • C153 Push-On Fittings
                    </a>
                  </div>
                )}
              </div>

              {/* Restraints Accordion */}
              <div className="border-b border-[#3087ff]/20 pb-2">
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === "restraints" ? null : "restraints",
                    )
                  }
                  className="w-full flex items-center justify-between text-sm sm:text-base font-bold text-[#3087ff] py-2"
                >
                  <span className="whitespace-nowrap">Joint Restraints</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#3087ff] transition-transform ${mobileAccordion === "restraints"
                        ? "rotate-180 text-[#3087ff]"
                        : ""
                      }`}
                  />
                </button>
                {mobileAccordion === "restraints" && (
                  <div className="mt-1 space-y-1.5 pl-3 pb-2 text-sm text-[#3087ff]">
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • ULTRA PVC Restraints
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • Series 3000 Wedge-Action Restraint Glands
                    </a>
                    <a
                      href="#product-matrix"
                      onClick={() =>
                        handleNavClick("#product-matrix", "restraints")
                      }
                      className="block py-1 hover:text-[#3087ff] whitespace-nowrap font-medium"
                    >
                      • Series 1500 &amp; 1900 Harnesses
                    </a>
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <a
                href="#thrust-calculator"
                onClick={() => handleNavClick("#thrust-calculator")}
                className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#3087ff] py-2.5 border-b border-[#3087ff]/20"
              >
                <Calculator className="w-4 h-4 text-[#3087ff] shrink-0" />
                <span className="whitespace-nowrap">Thrust Calculator</span>
              </a>

              <a
                href="/#foundry-walkthrough"
                onClick={() => handleNavClick("/#foundry-walkthrough")}
                className="block text-sm sm:text-base font-bold text-[#3087ff] py-2.5 border-b border-[#3087ff]/20 whitespace-nowrap"
              >
                Foundry &amp; Yard Walkthrough
              </a>

              <a
                href="#quality-standards"
                onClick={() => handleNavClick("#quality-standards")}
                className="block text-sm sm:text-base font-bold text-[#3087ff] py-2.5 border-b border-[#3087ff]/20 whitespace-nowrap"
              >
                Quality Standards &amp; MTRs
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenYardModal();
                }}
                className="w-full flex items-center justify-between text-sm sm:text-base font-bold text-[#3087ff] py-2.5 border-b border-[#3087ff]/20"
              >
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <Truck className="w-4 h-4 text-[#3087ff] shrink-0" />
                  <span>Stocking Yard Finder</span>
                </span>
                <span className="text-xs bg-[#3087ff]/20 text-[#3087ff] px-2 py-0.5 rounded-none font-bold border border-[#3087ff] whitespace-nowrap">
                  4 Hubs
                </span>
              </button>
            </div>

            {/* Mobile Footer Buttons */}
            <div className="pt-6 space-y-3">
              <a
                href="#quote-form"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-4 bg-[#3087ff] text-white font-extrabold rounded-none text-center shadow-md block whitespace-nowrap text-sm sm:text-base border-2 border-[#3087ff]"
              >
                Request a Job Quote
              </a>

              {currentUser ? (
                /* Mobile Logged-in Select Options: Profile, Settings */
                <div className="space-y-2 pt-2 border-t-2 border-[#3087ff]/20">
                  <div className="px-3 py-2 bg-[#3087ff]/15 border border-[#3087ff] mb-2">
                    <span className="text-[10px] font-black uppercase text-[#3087ff]/70 block">
                      Signed In
                    </span>
                    <strong className="text-xs text-[#3087ff] block truncate">
                      {currentUser.fullName} ({currentUser.companyName})
                    </strong>
                  </div>

                  <Link
                    href="/profile"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 px-3 bg-[#3087ff] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-none cursor-pointer"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile Dashboard</span>
                  </Link>

                  <Link
                    href="/settings"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 px-3 bg-white text-[#3087ff] border-2 border-[#3087ff] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-none cursor-pointer"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Account Settings</span>
                  </Link>

                  {isSuperAdmin && (
                    <Link
                      href="/admin"
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-2.5 px-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-none cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Approvals Desk ({pendingCount})</span>
                    </Link>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLoginModal();
                    }}
                    className="py-3 px-3 bg-white text-[#3087ff] font-bold rounded-none text-center text-xs sm:text-sm whitespace-nowrap border-2 border-[#3087ff]"
                  >
                    Client Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenRegisterModal();
                    }}
                    className="py-3 px-3 bg-[#3087ff]/20 text-[#3087ff] font-bold rounded-none text-center text-xs sm:text-sm whitespace-nowrap border-2 border-[#3087ff]"
                  >
                    Register Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
