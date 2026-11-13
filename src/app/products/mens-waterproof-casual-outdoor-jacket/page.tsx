"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Lock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  FileText,
  FileCheck2,
  Menu,
  Check,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Download,
  Info,
  Droplets,
  Layers,
  ThermometerSnowflake,
  Gauge,
  Award,
} from "lucide-react";
import { GlobalUtilityTicker } from "../../../components/navigation/GlobalUtilityTicker";
import { MainNavbar } from "../../../components/navigation/MainNavbar";
import { IndustrialFooter } from "../../../components/footer/IndustrialFooter";
import { ClientPortalModal } from "../../../components/modals/ClientPortalModal";
import { AccountRegistrationModal } from "../../../components/modals/AccountRegistrationModal";
import { YardSelectorModal } from "../../../components/modals/YardSelectorModal";
import { SuperAdminApprovalModal } from "../../../components/modals/SuperAdminApprovalModal";
import { DISTRIBUTION_YARDS } from "../../../data/waterworks-data";
import type { YardLocation } from "../../../types";

// Aqua Industries Flagship Product Data & Authentic Photography
const PRODUCT_DATA = {
  title: "Aqua Industries Municipal Water Sampling Station – ANSI/NSF 61 Potable Water Standard",
  modelSubtitle: "Dedicated Lead-Free Waterway for EPA Lead & Copper Rule (LCRR) Distribution Testing",
  salePrice: 1249.0,
  compareAtPrice: 1895.0,
  discountPercent: 34,
  savingsAmount: 646.0,
  sku: "AI-WSS-695-LCRR",
  rating: 5.0,
  reviewCount: 96,
  stockLeft: 14,
  deliveryWindow: "Immediate Dispatch from Melville, NY & Dallas, TX Hubs",
  complianceBadges: [
    "ANSI/NSF 61 & 372 Certified Lead-Free",
    "100% AIS / Buy America Compliant",
    "ASTM A536 Grade 65-45-12 Ductile Iron",
    "EPA Lead & Copper Rule Revision Approved",
  ],
  models: [
    {
      id: "model-695",
      name: "Model 695 – Standard Municipal Utility Base",
      specTag: "300 PSI Working • All-Climate Ductile Housing",
      colorHex: "#3087ff",
      image: "/images/our-images/Sampling Station H20.695.png",
      gallery: [
        "/images/our-images/Sampling Station H20.695.png",
        "/images/our-images/sampling-station.png",
        "/images/SAMPLING-STATION/Sampling station with base.png",
        "/images/SAMPLING-STATION/Sampling Station red Color.png",
      ],
      description:
        "Standard municipal water testing station with unthreaded NSF 61 certified lead-free brass sampling nozzle, padlock-ready protective hood, and 1\" subterranean watermain connection.",
    },
    {
      id: "model-696",
      name: "Model 696 – Heated & Insulated -20°F Frost Shield",
      specTag: "-20°F Thermal Core • Cold Climate Shield",
      colorHex: "#1d62c4",
      image: "/images/our-images/Sampling Station H20.696.png",
      gallery: [
        "/images/our-images/Sampling Station H20.696.png",
        "/images/our-images/Sampling Station H20.695.png",
        "/images/SAMPLING-STATION/Sampling station with base.png",
      ],
      description:
        "Cold-climate freeze-proof sampling station engineered with R-14 polyurethane thermal insulation retaining geothermal ground heat without requiring external electrical tracing.",
    },
    {
      id: "model-697",
      name: "Model 697 – Subterranean High-Deflection Mainline Feed",
      specTag: "High-Deflection Mechanical Joint Tap",
      colorHex: "#4f98ff",
      image: "/images/our-images/Sampling Station H20.697.png",
      gallery: [
        "/images/our-images/Sampling Station H20.697.png",
        "/images/our-images/Sampling Station H20.698.png",
        "/images/our-images/sampling-station.png",
      ],
      description:
        "Equipped with an integrated mechanical joint flexible elbow at the subterranean inlet, eliminating pipe stress from ground shifting and seismic settlement.",
    },
    {
      id: "model-698",
      name: "Model 698 – Dual-Port High-Volume Sampling Header",
      specTag: "Dual Sampling Ports • Emergency Flushing",
      colorHex: "#0e4eb8",
      image: "/images/our-images/Sampling Station H20.698.png",
      gallery: [
        "/images/our-images/Sampling Station H20.698.png",
        "/images/our-images/Sampling Station H20.695.png",
        "/images/SAMPLING-STATION/Sampling Station red Color.png",
      ],
      description:
        "High-capacity dual-outlet testing head allowing simultaneous coliform microbiological sampling and high-velocity line flushing without disconnecting sampling apparatus.",
    },
    {
      id: "model-red",
      name: "Model 695-RED – Safety High-Visibility Municipal Enclosure",
      specTag: "Safety Red Epoxy • High-Traffic Right-of-Way",
      colorHex: "#d9381e",
      image: "/images/SAMPLING-STATION/Sampling Station red Color.png",
      gallery: [
        "/images/SAMPLING-STATION/Sampling Station red Color.png",
        "/images/our-images/sampling-station.png",
        "/images/our-images/Sampling Station H20.695.png",
      ],
      description:
        "High-visibility UV-resistant safety red thermal powder coat, designated for rapid identification in DOT highway rights-of-way, airport aprons, and industrial parks.",
    },
  ],
  buryDepths: [
    { label: "3.0 FT Bury", trenchDepth: "36 Inches", weight: "128 LBS" },
    { label: "4.0 FT Bury", trenchDepth: "48 Inches", weight: "142 LBS" },
    { label: "5.0 FT Bury", trenchDepth: "60 Inches", weight: "156 LBS" },
    { label: "6.0 FT Bury", trenchDepth: "72 Inches", weight: "170 LBS" },
    { label: "7.0 FT Bury", trenchDepth: "84 Inches", weight: "185 LBS" },
    { label: "8.0 FT Bury", trenchDepth: "96 Inches", weight: "202 LBS" },
  ],
  engineeringTable: [
    { bury: '3.0 FT (36")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "128 LBS", standard: "NSF 61 / ASTM A536" },
    { bury: '4.0 FT (48")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "142 LBS", standard: "NSF 61 / ASTM A536" },
    { bury: '5.0 FT (60")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "156 LBS", standard: "NSF 61 / ASTM A536" },
    { bury: '6.0 FT (72")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "170 LBS", standard: "NSF 61 / ASTM A536" },
    { bury: '7.0 FT (84")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "185 LBS", standard: "NSF 61 / ASTM A536" },
    { bury: '8.0 FT (96")', inlet: '1" NPT (or MJ)', pressure: "300 PSI Working", flowRate: "35 GPM", weight: "202 LBS", standard: "NSF 61 / ASTM A536" },
  ],
  jobsiteGallery: [
    { img: "/images/our-images/Sampling Station H20.695.png", title: "Water Sampling Station", tag: "EPA Potable Main" },
    { img: "/images/our-images/curb-box-ultimate.png", title: "Bison H-20 Curb Box", tag: "Heavy Highway Proof" },
    { img: "/images/our-images/MJ_Fittings.jpeg", title: "Compact Ductile MJ Fittings", tag: "AWWA C153 350 PSI" },
    { img: "/images/our-images/trench-grates.png", title: "Chevron Trench Grates", tag: "AASHTO High-Inflow" },
    { img: "/images/our-images/curb_inlet_riser_heavy_iron.png", title: "Curb Inlet Extension Riser", tag: "DOT Resurfacing" },
    { img: "/images/our-images/cleanout.png", title: "Modular Cleanout Box", tag: "PR Foundry Tooling" },
  ],
};

export default function AquaSamplingStationProductPage() {
  const [selectedModel, setSelectedModel] = useState(PRODUCT_DATA.models[0]);
  const [selectedBury, setSelectedBury] = useState(PRODUCT_DATA.buryDepths[2]); // 5.0 FT default
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSubmittalModal, setShowSubmittalModal] = useState(false);
  const [rfqCount, setRfqCount] = useState(0);
  const [addedToast, setAddedToast] = useState(false);

  // Modal states for existing MainNavbar & IndustrialFooter
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [superAdminModalOpen, setSuperAdminModalOpen] = useState(false);
  const [yardModalOpen, setYardModalOpen] = useState(false);
  const [selectedYard, setSelectedYard] = useState<YardLocation>(DISTRIBUTION_YARDS[0]);

  const handleModelChange = (model: typeof PRODUCT_DATA.models[0]) => {
    setSelectedModel(model);
    setSelectedImageIndex(0);
  };

  const handleAddToRfq = () => {
    setRfqCount((c) => c + quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const currentGallery = selectedModel.gallery;

  return (
    <div className="min-h-screen bg-white text-[#3087ff] font-sans antialiased selection:bg-[#3087ff] selection:text-white">
      {/* Top Utility Ribbon */}
      <GlobalUtilityTicker
        onOpenYardModal={() => setYardModalOpen(true)}
        selectedYardCity={`${selectedYard.city}, ${selectedYard.state}`}
      />

      {/* Sticky Main Navigation Bar */}
      <MainNavbar
        onOpenLoginModal={() => setLoginModalOpen(true)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        onOpenYardModal={() => setYardModalOpen(true)}
        onOpenSuperAdminModal={() => setSuperAdminModalOpen(true)}
      />

      {/* Added to RFQ Toast Alert */}
      {addedToast && (
        <div className="fixed top-24 right-4 z-50 bg-[#3087ff] text-white px-5 py-3.5 rounded-none shadow-2xl flex items-center gap-3 border-2 border-white animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <div className="text-xs text-white">
            <p className="font-black uppercase tracking-wider">Item Added to Municipal RFQ Cart!</p>
            <p className="font-medium text-white/90">
              {selectedModel.name.split("–")[0]} &bull; {selectedBury.label} (Qty: {quantity})
            </p>
          </div>
        </div>
      )}

      {/* ========================================================
          3. MAIN PRODUCT SHOWCASE (Above The Fold Workbench)
      ======================================================== */}
      <main className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12">
        {/* Breadcrumb Path */}
        <nav aria-label="Breadcrumb" className="w-full text-xs text-[#3087ff] font-bold mb-6 flex items-center gap-2">
          <a href="/" className="hover:underline">Home</a>
          <span>/</span>
          <a href="/#catalog" className="hover:underline">Waterworks Catalog</a>
          <span>/</span>
          <span className="text-[#3087ff] font-black truncate max-w-xs sm:max-w-md">
            Municipal Water Sampling Station
          </span>
        </nav>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* ========================================================
              LEFT COLUMN: PRODUCT GALLERY (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnail rail (Left) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[600px] pb-2 md:pb-0 scrollbar-none shrink-0">
              {currentGallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-18 h-24 sm:w-22 sm:h-28 overflow-hidden border-2 cursor-pointer transition-all shrink-0 bg-white p-1 flex items-center justify-center ${
                    selectedImageIndex === idx
                      ? "border-[#3087ff] ring-4 ring-[#3087ff]/20 shadow-md"
                      : "border-gray-300 hover:border-[#3087ff] opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Product angle ${idx + 1}`}
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </button>
              ))}
            </div>

            {/* Main Stage Image Display */}
            <div className="relative flex-1 bg-white rounded-none overflow-hidden border-4 border-[#3087ff] shadow-2xl p-6 sm:p-10 flex flex-col items-center justify-center group min-h-[460px] sm:min-h-[540px]">
              {/* Top-left certification badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#3087ff] text-white text-xs font-black px-3 py-1 shadow-md uppercase tracking-wider border border-[#3087ff]">
                ANSI/NSF 61 CERTIFIED
              </div>

              {/* Top-right lead-free tag */}
              <div className="absolute top-4 right-4 z-10 bg-white text-[#3087ff] text-[11px] font-black px-3 py-1 shadow-xs flex items-center gap-1.5 border-2 border-[#3087ff]">
                <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
                <span>LEAD-FREE NSF 372</span>
              </div>

              <div className="w-full h-[340px] sm:h-[420px] flex items-center justify-center select-none">
                <img
                  src={currentGallery[selectedImageIndex] || currentGallery[0]}
                  alt={PRODUCT_DATA.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom spec ticker */}
              <div className="w-full flex items-center justify-between border-t-2 border-[#3087ff] pt-3 text-xs font-bold text-[#3087ff] mt-4">
                <span className="uppercase text-[11px] font-black">
                  {selectedModel.specTag}
                </span>
                <span className="font-mono text-[10px] bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff]">
                  Foundry Poured ASTM A536
                </span>
              </div>

              {/* Prev / Next Controls */}
              {currentGallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? currentGallery.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#3087ff] text-[#3087ff] hover:bg-[#3087ff] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
                    aria-label="Previous view"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === currentGallery.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-[#3087ff] text-[#3087ff] hover:bg-[#3087ff] hover:text-white flex items-center justify-center shadow-lg transition-all cursor-pointer"
                    aria-label="Next view"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: PRODUCT PURCHASE BOX (5 Cols)
          ======================================================== */}
          <div id="buy-now" className="lg:col-span-5 flex flex-col gap-5 text-[#3087ff]">
            {/* Category Eyebrow & Title */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#3087ff] text-white text-[11px] font-black uppercase tracking-wider border border-[#3087ff] mb-2 shadow-xs">
                <span>Flagship Waterworks Utility Series</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3087ff] leading-tight tracking-tight uppercase">
                {PRODUCT_DATA.title}
              </h1>
              <p className="text-xs sm:text-sm text-[#3087ff] font-medium mt-1 leading-relaxed">
                {PRODUCT_DATA.modelSubtitle}
              </p>
            </div>

            {/* Engineering Proof Ratings & Submittal Link */}
            <div className="flex items-center gap-3 text-xs border-y-2 border-[#3087ff] py-3">
              <div className="flex text-[#3087ff]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-[#3087ff]" />
                ))}
              </div>
              <span className="font-black text-[#3087ff]">5.0 Civil Engineering Score</span>
              <span className="text-[#3087ff]">&bull;</span>
              <a href="#engineering-specs" className="text-[#3087ff] underline hover:font-black font-bold">
                {PRODUCT_DATA.reviewCount} Municipal Approvals
              </a>
            </div>

            {/* Direct Contractor / Municipal Bidding Pricing */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-black text-[#3087ff] tracking-tight">
                ${PRODUCT_DATA.salePrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
              <span className="text-base text-[#3087ff]/60 line-through font-bold">
                ${PRODUCT_DATA.compareAtPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
              <span className="bg-[#3087ff] text-white text-xs font-black px-2.5 py-1 border border-[#3087ff] uppercase">
                Save ${PRODUCT_DATA.savingsAmount.toFixed(0)} (Municipal Direct)
              </span>
            </div>

            {/* Municipal Bid & Volume Rebate Banner */}
            <div className="bg-white border-2 border-[#3087ff] p-3 text-xs text-[#3087ff] shadow-sm">
              <span className="font-black flex items-center gap-1.5 text-[#3087ff] uppercase mb-1">
                <Award className="w-4 h-4 text-[#3087ff]" />
                Municipal Project Volume Schedule
              </span>
              <p className="font-medium text-[#3087ff] leading-relaxed">
                Order <strong>5+ units: 10% Contractor Rebate</strong> &bull; Order <strong>20+ units: Municipal Bid Pricing &amp; Custom Agency Tooling Stamping</strong>. Applied automatically at submittal.
              </p>
            </div>

            {/* Model / Configuration Swatch Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-[#3087ff] uppercase">
                  Select Model Configuration:
                </span>
                <span className="text-[11px] font-mono text-[#3087ff] font-bold">
                  SKU: {PRODUCT_DATA.sku}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PRODUCT_DATA.models.map((model) => {
                  const isSelected = selectedModel.id === model.id;
                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => handleModelChange(model)}
                      className={`p-2.5 text-left border-2 rounded-none transition-all cursor-pointer flex items-center gap-2.5 ${
                        isSelected
                          ? "bg-[#3087ff] text-white border-[#3087ff] shadow-md"
                          : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff] hover:text-white"
                      }`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-white shrink-0"
                        style={{ backgroundColor: model.colorHex }}
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase truncate">{model.name.split("–")[0]}</p>
                        <p className={`text-[10px] truncate ${isSelected ? "text-white/90" : "text-[#3087ff]/80"}`}>
                          {model.specTag}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trench Bury Depth Selector (Equivalent to Size Selection) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-[#3087ff] uppercase">
                  Trench Bury Depth: <span className="font-mono text-[#3087ff]">{selectedBury.label}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowSubmittalModal(true)}
                  className="text-xs font-black text-[#3087ff] underline hover:text-[#1d62c4] flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  Bury Schedule
                </button>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {PRODUCT_DATA.buryDepths.map((bury) => {
                  const isSelected = selectedBury.label === bury.label;
                  return (
                    <button
                      key={bury.label}
                      type="button"
                      onClick={() => setSelectedBury(bury)}
                      className={`h-11 border-2 text-xs font-black uppercase transition-all cursor-pointer flex flex-col items-center justify-center ${
                        isSelected
                          ? "bg-[#3087ff] text-white border-[#3087ff] shadow-md"
                          : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff] hover:text-white"
                      }`}
                    >
                      <span>{bury.label.split(" ")[0]}</span>
                      <span className="text-[9px] font-normal">{bury.label.split(" ")[1]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-1.5">
              <span className="text-xs font-black text-[#3087ff] uppercase">Order Quantity (Units)</span>
              <div className="flex items-center w-36 border-2 border-[#3087ff] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-10 flex items-center justify-center text-lg font-black text-[#3087ff] hover:bg-[#3087ff] hover:text-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-1 text-center font-black text-sm text-[#3087ff]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-10 flex items-center justify-center text-lg font-black text-[#3087ff] hover:bg-[#3087ff] hover:text-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Urgency / Stock Status Indicator */}
            <div className="flex items-center gap-2 text-xs font-black text-[#3087ff] pt-1">
              <span className="w-2.5 h-2.5 rounded-none bg-[#3087ff] animate-ping" />
              <span>{PRODUCT_DATA.stockLeft} Units Assembled In Stock &bull; Certified for Immediate Field Dispatch</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleAddToRfq}
                className="w-full h-13 bg-[#3087ff] text-white font-black uppercase tracking-wider text-sm hover:bg-[#1d62c4] transition-all shadow-md cursor-pointer border-2 border-[#3087ff] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-white" />
                <span>Add to Municipal RFQ Cart</span>
              </button>

              <button
                type="button"
                onClick={handleAddToRfq}
                className="w-full h-13 bg-white border-2 border-[#3087ff] text-[#3087ff] font-black uppercase tracking-wider text-sm hover:bg-[#3087ff] hover:text-white transition-all shadow-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Formal Contractor Price Quote</span>
              </button>

              <button
                type="button"
                onClick={() => setShowSubmittalModal(true)}
                className="w-full h-12 bg-white border-2 border-[#3087ff] text-[#3087ff] font-black text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-[#3087ff] hover:text-white"
              >
                <Download className="w-4 h-4" />
                <span>Download Submittal Sheet &amp; AutoCAD (.DWG)</span>
              </button>
            </div>

            {/* Logistics & Delivery Promise */}
            <div className="flex items-center gap-2.5 text-xs text-[#3087ff] bg-white p-3 border-2 border-[#3087ff] shadow-xs">
              <Truck className="w-4 h-4 text-[#3087ff] shrink-0" />
              <span>
                <strong>{PRODUCT_DATA.deliveryWindow}</strong> with certified MTR packet.
              </span>
            </div>

            {/* Quality Certifications Strip */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t-2 border-[#3087ff] text-center">
              <div className="flex flex-col items-center p-2.5 border-2 border-[#3087ff] bg-white">
                <ShieldCheck className="w-4 h-4 text-[#3087ff] mb-1" />
                <span className="text-[10px] font-black uppercase tracking-wider leading-tight">
                  ANSI/NSF 61 Potable
                </span>
              </div>
              <div className="flex flex-col items-center p-2.5 border-2 border-[#3087ff] bg-white">
                <Award className="w-4 h-4 text-[#3087ff] mb-1" />
                <span className="text-[10px] font-black uppercase tracking-wider leading-tight">
                  100% AIS Certified
                </span>
              </div>
              <div className="flex flex-col items-center p-2.5 border-2 border-[#3087ff] bg-white">
                <Gauge className="w-4 h-4 text-[#3087ff] mb-1" />
                <span className="text-[10px] font-black uppercase tracking-wider leading-tight">
                  300 PSI Working Max
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            4. EDITORIAL STORY BANNER (#3087ff Blue Card)
        ======================================================== */}
        <section className="w-full mt-16 sm:mt-24 bg-[#3087ff] text-white p-8 sm:p-12 xl:p-14 shadow-2xl border-4 border-[#3087ff] relative overflow-hidden">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest bg-white text-[#3087ff] px-3.5 py-1.5 border border-white inline-block shadow-sm">
                AMERICAN WATER INFRASTRUCTURE &bull; EPA LCRR MANDATE
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
                Why Municipal Water Authorities &amp; Civil Engineers Specify Aqua Industries Sampling Stations
              </h2>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium">
                Commercial fire hydrants, hose bibbs, and building taps harbor stagnant water and biofilm in threaded nozzles,
                frequently triggering false-positive coliform tests that result in unnecessary EPA boil-water advisories.
                Aqua Industries sampling stations provide an unthreaded, dedicated lead-free brass waterway directly tapped into
                the municipal watermain, delivering true representative water quality samples in any climate.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="border-2 border-white bg-white/10 backdrop-blur-xs p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white">0%</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">False Positives</span>
              </div>
              <div className="border-2 border-white bg-white/10 backdrop-blur-xs p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white">-20°F</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">Freeze Rating</span>
              </div>
              <div className="border-2 border-white bg-white/10 backdrop-blur-xs p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">AIS Compliant</span>
              </div>
              <div className="border-2 border-white bg-white/10 backdrop-blur-xs p-4 text-center">
                <span className="block text-2xl sm:text-3xl font-black text-white">300 PSI</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">Working Test</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. FRUSTRATION CALLOUT CARD (White with #3087ff Border)
        ======================================================== */}
        <section className="w-full mt-10 bg-white border-4 border-[#3087ff] p-6 sm:p-10 shadow-lg">
          <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-[#3087ff]">
            <h3 className="text-xl sm:text-2xl font-black text-[#3087ff] uppercase tracking-tight">
              Frustrated with False Contamination Readings &amp; Frozen Winter Taps?
            </h3>
            <span className="text-xs font-black uppercase bg-[#3087ff] text-white px-3 py-1 self-start md:self-auto border border-[#3087ff]">
              THE AQUA INDUSTRIES SOLUTION
            </span>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-[#3087ff]">
            <div className="space-y-2 border-l-4 border-[#3087ff] pl-3">
              <h4 className="font-black text-sm uppercase tracking-wide">
                1. False-Positive Bacterial Readings:
              </h4>
              <p className="text-xs sm:text-sm text-[#3087ff]/90 leading-relaxed font-medium">
                Standard fire hydrants and hose bibbs with aerators trap debris and organic biofilms in threads,
                causing false-positive coliform readings that require thousands of dollars in emergency lab re-testing.
              </p>
            </div>
            <div className="space-y-2 border-l-4 border-[#3087ff] pl-3">
              <h4 className="font-black text-sm uppercase tracking-wide">
                2. Subterranean Freeze-Ups:
              </h4>
              <p className="text-xs sm:text-sm text-[#3087ff]/90 leading-relaxed font-medium">
                Traditional utility risers lack heavy thermal cores, freezing solid during harsh winter storms and
                bursting underground pipes without warning.
              </p>
            </div>
            <div className="space-y-2 border-l-4 border-[#3087ff] pl-3">
              <h4 className="font-black text-sm uppercase tracking-wide">
                3. Tampering &amp; Water Contamination:
              </h4>
              <p className="text-xs sm:text-sm text-[#3087ff]/90 leading-relaxed font-medium">
                Unsecured water test points invite vandalism, cross-connection contamination, and unauthorized unmetered
                water theft from city mainlines.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. FEATURE DEEP DIVES (3 Detailed Feature Blocks)
        ======================================================== */}
        <section className="w-full mt-16 sm:mt-24 space-y-16">
          {/* Feature 01: Lead-Free Potable Waterway */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
                FEATURE 01 &bull; SANITARY WATERWAY
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#3087ff]">
                Lead-Free Smooth-Bore Potable Waterway
              </h3>
              <p className="text-sm text-[#3087ff] font-medium leading-relaxed">
                Treated with an unthreaded smooth-bore discharge nozzle that prevents laminar aeration and eliminates biofilm
                growth. Tapped directly into the subterranean municipal main, bypassing all private premise plumbing to deliver
                EPA-certified compliance readings.
              </p>
              <ul className="text-xs space-y-2 text-[#3087ff] font-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Zero thread crevices prevents bacteria colonization
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Meets strict EPA 40 CFR 141 &amp; NSF 61 potable purity
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Sanitary blow-off petcock purges standing water prior to testing
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 border-4 border-[#3087ff] p-6 sm:p-10 shadow-xl bg-white flex items-center justify-center">
              <img
                src="/images/our-images/sampling-station.png"
                alt="Sanitary Potable Waterway"
                className="max-h-[420px] object-contain filter drop-shadow-xl"
              />
            </div>
          </div>

          {/* Feature 02: Thermal Frost Core */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center lg:flex-row-reverse">
            <div className="lg:col-span-6 border-4 border-[#3087ff] p-6 sm:p-10 shadow-xl bg-white flex items-center justify-center lg:order-2">
              <img
                src="/images/SAMPLING-STATION/Sampling station with base.png"
                alt="Thermal Frost Core Enclosure"
                className="max-h-[420px] object-contain filter drop-shadow-xl"
              />
            </div>
            <div className="lg:col-span-6 space-y-4 lg:order-1">
              <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
                FEATURE 02 &bull; ALL-WEATHER CORE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#3087ff]">
                -20°F Thermal Core &amp; Subterranean Tap
              </h3>
              <p className="text-sm text-[#3087ff] font-medium leading-relaxed">
                High-density R-14 polyurethane thermal insulation encases the vertical riser pipe, capturing rising geothermal
                earth heat from below the regional frost line. Guarantees 24/7 water sampling readiness even during deep sub-zero
                polar vortex freezes without costly electric heat tracing.
              </p>
              <ul className="text-xs space-y-2 text-[#3087ff] font-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Operates reliably down to -20°F without electric heat
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Subterranean weep hole auto-drains waterway below frost depth
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Precision 1&quot; NPT or MJ flexible inlet adapts to any depth
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 03: Vandal-Proof Shroud */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
                FEATURE 03 &bull; SECURITY ENCLOSURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#3087ff]">
                Vandal-Proof Lockable Ductile Shroud
              </h3>
              <p className="text-sm text-[#3087ff] font-medium leading-relaxed">
                Poured from heavy ASTM A536 ductile iron, the protective outer housing features an integrated heavy-gauge padlock
                hasp that shields internal valves from vehicle wheel impacts, lawnmower strikes, and unauthorized municipal tampering.
              </p>
              <ul className="text-xs space-y-2 text-[#3087ff] font-black pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  ASTM A536 Grade 65-45-12 ductile iron housing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Padlock shroud guards against street vandalism and theft
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#3087ff]" />
                  Holiday-free fusion-bonded blue epoxy resists acidic soil
                </li>
              </ul>
            </div>
            <div className="lg:col-span-6 border-4 border-[#3087ff] p-6 sm:p-10 shadow-xl bg-white flex items-center justify-center">
              <img
                src="/images/our-images/Sampling Station H20.696.png"
                alt="Ductile Iron Protective Housing"
                className="max-h-[420px] object-contain filter drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* ========================================================
            7. MUNICIPAL APPLICATION PILLS
        ======================================================== */}
        <section className="w-full mt-14 py-8 border-y-2 border-[#3087ff] text-center">
          <p className="text-xs font-black uppercase tracking-widest text-[#3087ff] mb-4">
            APPROVED FOR MUNICIPAL &amp; INDUSTRIAL WATER DISTRIBUTION NETWORKS
          </p>
          <div className="w-full flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 bg-[#3087ff] text-white text-xs font-black uppercase tracking-wider border border-[#3087ff] shadow-sm">
              💧 EPA Lead &amp; Copper Rule (LCRR) Sampling
            </span>
            <span className="px-4 py-2 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-sm">
              🏙️ Municipal Potable Watermains
            </span>
            <span className="px-4 py-2 bg-[#3087ff] text-white text-xs font-black uppercase tracking-wider border border-[#3087ff] shadow-sm">
              🏥 Hospital &amp; School Dedicated Service Feeders
            </span>
            <span className="px-4 py-2 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-sm">
              🏭 Industrial Treatment &amp; Backflow Monitoring
            </span>
          </div>
        </section>

        {/* ========================================================
            8. ENGINEERING SPECIFICATIONS & BURY SCHEDULE TABLE
        ======================================================== */}
        <section id="engineering-specs" className="w-full mt-16 sm:mt-24">
          <div className="text-center w-full max-w-3xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
              FOUNDRY SPECIFICATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#3087ff] mt-2">
              Trench Bury Depth &amp; Dimension Schedule
            </h3>
            <p className="text-xs sm:text-sm text-[#3087ff] font-medium mt-1">
              Engineered for standard regional frost depths across North America. Custom bury lengths available upon request.
            </p>
          </div>

          <div className="w-full border-4 border-[#3087ff] shadow-xl overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#3087ff] text-white uppercase text-[11px] font-black tracking-wider border-b-2 border-white">
                    <th className="py-4 px-6">Bury Depth</th>
                    <th className="py-4 px-6">Inlet Connection</th>
                    <th className="py-4 px-6">Max Pressure</th>
                    <th className="py-4 px-6">Rated Flow</th>
                    <th className="py-4 px-6">Total Weight</th>
                    <th className="py-4 px-6">Standards</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-[#3087ff]/20 bg-white text-[#3087ff]">
                  {PRODUCT_DATA.engineeringTable.map((row, idx) => (
                    <tr
                      key={row.bury}
                      className={idx % 2 === 0 ? "bg-white hover:bg-blue-50/30 transition-colors" : "bg-blue-50/40 hover:bg-blue-50/60 transition-colors"}
                    >
                      <td className="py-3.5 px-6 font-black">{row.bury}</td>
                      <td className="py-3.5 px-6 font-medium">{row.inlet}</td>
                      <td className="py-3.5 px-6 font-bold">{row.pressure}</td>
                      <td className="py-3.5 px-6 font-medium">{row.flowRate}</td>
                      <td className="py-3.5 px-6 font-black">{row.weight}</td>
                      <td className="py-3.5 px-6 font-mono text-[11px] font-bold">{row.standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white border-t-2 border-[#3087ff] p-4 sm:p-5 text-xs text-[#3087ff] font-bold flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>
                💡 <strong>AIS Compliance Note:</strong> Every sampling station is poured in American foundries and furnished with certified Mill Test Reports (MTRs) and permanent heat numbers.
              </span>
              <button
                type="button"
                onClick={() => setShowSubmittalModal(true)}
                className="underline uppercase font-black cursor-pointer hover:text-[#1d62c4] shrink-0"
              >
                Download Submittal Packet (.PDF)
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. METALLURGY & MATERIAL STANDARDS BLOCK
        ======================================================== */}
        <section className="w-full mt-10 bg-white border-4 border-[#3087ff] p-6 sm:p-8 text-[#3087ff] shadow-md">
          <div className="w-full">
            <h4 className="text-base font-black uppercase tracking-wide mb-2">
              Metallurgy &amp; Corrosion Resistance Standards
            </h4>
            <p className="text-xs sm:text-sm text-[#3087ff] leading-relaxed mb-3 font-medium">
              <strong>Protective Enclosure:</strong> Heavy-wall ASTM A536 Grade 65-45-12 Ductile Iron with 65,000 PSI tensile strength and 12% elongation.
              <strong> Waterway Core:</strong> Lead-Free Cast Bronze per ASTM B584 (Alloy C89833 / UNS C89833) with zero lead content exceeding ANSI/NSF 372.
            </p>
            <p className="text-xs text-[#3087ff] leading-relaxed font-bold">
              <strong>Protective Finish:</strong> High-build electrostatic blue epoxy coating per AWWA C116 standards, holiday-free tested to resist acidic burial soils, ground moisture, and UV degradation.
            </p>
          </div>
        </section>

        {/* ========================================================
            10. VERIFIED WATER AUTHORITY TESTIMONIALS
        ======================================================== */}
        <section className="w-full mt-16 sm:mt-24">
          <div className="text-center w-full max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
              MUNICIPAL PROOF
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#3087ff] mt-2">
              Specified by Water Districts Across North America
            </h3>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border-4 border-[#3087ff] p-6 sm:p-8 shadow-md flex flex-col justify-between text-[#3087ff]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#3087ff]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#3087ff]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black uppercase bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff]">
                    Verified Municipal Spec
                  </span>
                </div>
                <p className="text-sm text-[#3087ff] leading-relaxed italic mb-4 font-medium">
                  &ldquo;We retrofitted 45 sampling points with Aqua Industries Model 695 stations for our EPA Lead and Copper monitoring program. False positive bacteria tests dropped to zero immediately, saving our utility hundreds of testing hours.&rdquo;
                </p>
              </div>
              <p className="text-xs font-black uppercase text-[#3087ff]">
                James K., Water Quality Superintendent &bull; Nassau County Water Authority, NY
              </p>
            </div>

            <div className="bg-white border-4 border-[#3087ff] p-6 sm:p-8 shadow-md flex flex-col justify-between text-[#3087ff]">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-[#3087ff]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#3087ff]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black uppercase bg-[#3087ff] text-white px-2 py-0.5 border border-[#3087ff]">
                    Verified Municipal Spec
                  </span>
                </div>
                <p className="text-sm text-[#3087ff] leading-relaxed italic mb-4 font-medium">
                  &ldquo;The Model 696 freeze-proof stations survived -18°F winter conditions without a single frozen line. The heavy ductile iron shroud takes severe weed-whacker and snowplow strikes without a scratch.&rdquo;
                </p>
              </div>
              <p className="text-xs font-black uppercase text-[#3087ff]">
                Robert M., Senior Civil Utilities Engineer &bull; Travis County Municipal District, TX
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            11. AUTHENTIC COMPANY INFRASTRUCTURE PRODUCT GALLERY
        ======================================================== */}
        <section className="w-full mt-16 sm:mt-24">
          <div className="text-center w-full max-w-3xl mx-auto mb-8">
            <span className="text-xs font-black uppercase tracking-widest bg-[#3087ff] text-white px-3 py-1 border border-[#3087ff]">
              FOUNDRY LINEUP
            </span>
            <h3 className="text-xl sm:text-3xl font-black uppercase text-[#3087ff] mt-2">
              Authentic Aqua Industries Infrastructure Line
            </h3>
            <p className="text-xs sm:text-sm text-[#3087ff] font-medium mt-1">
              American foundry castings engineered for municipal waterworks, highway drainage, and pipeline utility networks
            </p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PRODUCT_DATA.jobsiteGallery.map((item, idx) => (
              <div
                key={idx}
                className="border-2 border-[#3087ff] bg-white p-3 shadow-md flex flex-col justify-between hover:border-[#1d62c4] transition-all group"
              >
                <div className="aspect-square w-full flex items-center justify-center p-2 overflow-hidden mb-2">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase bg-[#3087ff] text-white px-1.5 py-0.5 inline-block mb-1">
                    {item.tag}
                  </span>
                  <p className="text-xs font-black text-[#3087ff] uppercase leading-tight line-clamp-1">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            12. HIGH-CONVERTING CLOSING BIDDING CTA BANNER
        ======================================================== */}
        <section className="w-full mt-16 sm:mt-24 bg-[#3087ff] text-white p-8 sm:p-14 text-center shadow-2xl border-4 border-[#3087ff] relative overflow-hidden">
          <div className="w-full max-w-4xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Specify Aqua Industries for Your Municipal Water Utility Project
            </h3>
            <p className="text-sm text-white/95 leading-relaxed font-medium">
              Submit your project drawings, takeoff quantities, or bid specifications directly to our engineering team for guaranteed project pricing and submittal verification.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#buy-now"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#3087ff] font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all shadow-xl hover:scale-105 cursor-pointer border-2 border-white"
              >
                Add to Municipal RFQ / Request Quote
              </a>
              <button
                type="button"
                onClick={() => setShowSubmittalModal(true)}
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-black text-sm uppercase tracking-wider hover:bg-white/10 transition-all border-2 border-white cursor-pointer"
              >
                Download Submittal Cut Sheet
              </button>
            </div>

            <p className="text-xs text-white/80 pt-3 font-bold uppercase tracking-wider">
              🛡️ 100% AIS Compliant &bull; 🚚 Melville &amp; Dallas Hub Stock &bull; 📋 Certified Foundry MTRs Included
            </p>
          </div>
        </section>
      </main>

      {/* ========================================================
          13. ORIGINAL INDUSTRIAL FOOTER & DIRECTORY
      ======================================================== */}
      <IndustrialFooter
        onOpenYardModal={() => setYardModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Integrated Modals */}
      <ClientPortalModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
      />

      <AccountRegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <SuperAdminApprovalModal
        isOpen={superAdminModalOpen}
        onClose={() => setSuperAdminModalOpen(false)}
        onOpenContractorLogin={() => {
          setSuperAdminModalOpen(false);
          setLoginModalOpen(true);
        }}
      />

      <YardSelectorModal
        isOpen={yardModalOpen}
        onClose={() => setYardModalOpen(false)}
        selectedYardId={selectedYard.id}
        onSelectYard={(yard) => setSelectedYard(yard)}
      />

      {/* ========================================================
          14. PERSISTENT MOBILE STICKY BOTTOM ACTION BAR
      ======================================================== */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t-4 border-[#3087ff] p-3 shadow-2xl z-40 flex items-center justify-between gap-3 text-[#3087ff]">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={currentGallery[0]}
            alt="Thumbnail"
            className="w-10 h-10 object-contain border-2 border-[#3087ff] p-0.5 shrink-0 bg-white"
          />
          <div className="min-w-0">
            <p className="text-xs font-black text-[#3087ff] truncate">
              ${PRODUCT_DATA.salePrice.toFixed(0)} USD
            </p>
            <p className="text-[10px] text-[#3087ff]/80 truncate font-bold">
              {selectedBury.label} &bull; {selectedModel.name.split("–")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleAddToRfq}
            className="h-10 px-3 bg-white border-2 border-[#3087ff] text-[#3087ff] text-xs font-black uppercase"
          >
            + RFQ
          </button>
          <a
            href="#buy-now"
            className="h-10 px-4 bg-[#3087ff] text-white text-xs font-black uppercase flex items-center justify-center border-2 border-[#3087ff]"
          >
            Order / Bid
          </a>
        </div>
      </div>

      {/* ========================================================
          15. ENGINEERING SUBMITTAL & CAD MODAL
      ======================================================== */}
      {showSubmittalModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white border-4 border-[#3087ff] max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto text-[#3087ff]">
            <div className="flex items-center justify-between border-b-2 border-[#3087ff] pb-3">
              <div>
                <h3 className="font-black text-lg text-[#3087ff] uppercase">
                  Submittal Specification &amp; CAD Package
                </h3>
                <p className="text-xs font-bold text-[#3087ff]/80">
                  {selectedModel.name}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSubmittalModal(false)}
                className="w-8 h-8 bg-[#3087ff] text-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-[#1d62c4]"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-[#3087ff] font-medium leading-relaxed">
              Certified engineering cut sheets ready for project engineer submittals. Includes certified dimension schematics, ASTM A536 chemical analysis, and NSF 61 potable compliance certificates.
            </p>

            <div className="space-y-2">
              <a
                href="/files/SUBMITTAL_AQUA_WSS_SERIES.PDF"
                download
                onClick={(e) => { e.preventDefault(); alert("Submittal PDF Generated: Aqua Industries WSS Series Specification Sheet."); }}
                className="w-full py-3 bg-[#3087ff] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#3087ff] hover:bg-[#1d62c4] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Engineering Submittal PDF</span>
              </a>

              <a
                href="/files/AQUA_WSS_CAD.DWG"
                download
                onClick={(e) => { e.preventDefault(); alert("AutoCAD Vector File Generated: AQUA_WSS_695.DWG"); }}
                className="w-full py-3 bg-white text-[#3087ff] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#3087ff] hover:bg-[#3087ff] hover:text-white transition-all cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Download AutoCAD Vector (.DWG)</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setShowSubmittalModal(false)}
              className="w-full py-2.5 bg-gray-100 text-[#3087ff] text-xs font-black uppercase hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
