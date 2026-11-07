"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  PhoneCall,
  Plus,
  ShieldCheck,
  Sliders,
  Sparkles,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface OurNewInnovationsProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

interface Hotspot {
  id: number;
  x: string;
  y: string;
  title: string;
  badge: string;
  desc: string;
}

interface InnovationItem {
  id: string;
  catalogId: string;
  number: string;
  name: string;
  subtitle: string;
  categoryLabel: string;
  badge: string;
  spec: string;
  imageUrl: string;
  summary: string;
  standards: string;
  metallurgy: string;
  loadRating: string;
  coating: string;
  application: string;
  features: string[];
  hotspots: Hotspot[];
}

const INNOVATIONS: InnovationItem[] = [
  {
    id: "cleanout-box",
    catalogId: "cleanout-monument-boxes",
    number: "01",
    name: "Multi-Tier Cast Iron Cleanout & Monument Box",
    subtitle: "Modular Riser Assembly for Resurfacing Elevations",
    categoryLabel: "Valve & Monument Castings",
    badge: "PR Tooling",
    spec: "AASHTO H-20 Highway Proof",
    imageUrl: "/images/our-images/cleanout.png",
    summary:
      "Engineered with an authentic PR-branded modular riser assembly. Features a heavy concentric-ring drop-in cover, machined seating rim to prevent traffic chatter, and an adjustable stackable riser ring that allows road crews to elevate access points flush with new asphalt overlays without breaking subgrade concrete foundations.",
    standards: "ASTM A48 Class 35B • AASHTO M306 • AIS Certified",
    metallurgy: "ASTM A48 Class 35B High-Tensile Cast Iron",
    loadRating: "AASHTO H-20 / HS-20 (40,000+ LBS Wheel Load)",
    coating: "Heavy Industrial Bituminous Enamel per AWWA",
    application:
      "Municipal cleanout access, survey monuments, and underground gate valve inspection",
    features: [
      "Concentric circular non-slip tread rings prevent vehicle tire slippage in wet conditions",
      "Modular stackable riser ring accommodates roadway elevation adjustments during milling and paving",
      "Precision-machined 360° seat eliminates cover rocking and vehicular noise at highway speeds",
      "Deep lid recess frame prevents displacement or ejection under continuous heavy truck traffic",
    ],
    hotspots: [
      {
        id: 1,
        x: "50%",
        y: "14%",
        title: "Concentric Non-Slip Drop-In Lid",
        badge: "ASTM A48 Class 35B",
        desc: "Heavy circular cast lid featuring concentric tread rings and recessed lift pick holes for rapid municipal utility access.",
      },
      {
        id: 2,
        x: "50%",
        y: "32%",
        title: "Modular Elevation Riser Ring",
        badge: "Road Overlay Adjustment",
        desc: "Stackable intermediate ring enables grade height adjustments during street repaving without costly concrete reconstruction.",
      },
      {
        id: 3,
        x: "50%",
        y: "62%",
        title: "Flanged Base Enclosure",
        badge: "40,000+ LBS Proof Load",
        desc: "Heavy cast iron bell base anchors securely into subgrade gravel and concrete, distributing wheel traffic loads uniformly into soil.",
      },
      {
        id: 4,
        x: "68%",
        y: "28%",
        title: "Machined Internal Seating Rim",
        badge: "Anti-Chatter Seal",
        desc: "CNC-turned 360° horizontal bearing seat ensures silent, rattle-free performance under high-speed vehicular traffic.",
      },
    ],
  },
  {
    id: "warning-plate",
    catalogId: "detectable-warning-plates",
    number: "02",
    name: "Cast Iron Detectable Warning Plates",
    subtitle: "Heavy-Duty Truncated Dome ADA Armor for Pedestrian Curbs",
    categoryLabel: "Pedestrian & Roadway Safety",
    badge: "ADA Compliant",
    spec: "Snowplow Indestructible",
    imageUrl: "/images/our-images/warning-plate.png",
    summary:
      "Engineered from solid ASTM A48 Class 35B cast iron to permanently replace fragile plastic and polymer composite tactile warning tiles. Provides compliant truncated dome warning surfaces at curb ramps, pedestrian crosswalks, and transit platforms with zero cracking, peeling, or lifting during severe winter snowplow passes.",
    standards: "ADAAG Title III • PROWAG Section R305 • AASHTO M306",
    metallurgy: "ASTM A48 Class 35B Gray Iron (Natural Patina or E-Coat)",
    loadRating: "Exceeds 40,000 LBS Ultimate Load (AASHTO H-20 Proof)",
    coating:
      "Natural Weathering Iron Patina or High-Durability Blue Industrial Enamel",
    application:
      "Public right-of-way curb ramps, bus boarding islands, and rail platform safety edges",
    features: [
      "Precision-cast truncated dome matrix provides high-contrast tactile and audio feedback for visually impaired canes",
      "Solid cast iron body never delaminates, chips, or fractures under direct municipal steel snowplow strikes",
      "Integrated underside cleat anchors embed permanently into wet concrete during sidewalk construction",
      "Natural oxidized patina creates a permanent, maintenance-free slip-resistant protective barrier",
    ],
    hotspots: [
      {
        id: 1,
        x: "38%",
        y: "36%",
        title: "Compliant Truncated Dome Matrix",
        badge: '0.9" Base • 0.2" Height',
        desc: 'Federal ADAAG compliant truncated domes with 2.35" center-to-center inline spacing for instant cane detection.',
      },
      {
        id: 2,
        x: "65%",
        y: "48%",
        title: "Cast High-Traction Texture",
        badge: "Static Friction > 0.80",
        desc: "Micro-textured diamond surface matrix prevents pedestrian slip-and-fall incidents during wet and icy conditions.",
      },
      {
        id: 3,
        x: "18%",
        y: "72%",
        title: "Beveled Perimeter Transition Edge",
        badge: "Trip Hazard Elimination",
        desc: "Precision-tapered edges ensure flush alignment with surrounding brushed concrete sidewalk grades.",
      },
      {
        id: 4,
        x: "82%",
        y: "68%",
        title: "Monolithic Concrete Anchors",
        badge: "Cast Underside Cleats",
        desc: "Underside iron lug anchors lock into fresh wet concrete pour, preventing tile dislodgement or lifting over time.",
      },
    ],
  },
  {
    id: "trench-grates",
    catalogId: "trench-grates",
    number: "03",
    name: "Architectural Chevron Trench Grates",
    subtitle: "High-Inflow Interlocking Directional Linear Drainage Channels",
    categoryLabel: "Linear Trench Drainage",
    badge: "High-Inflow",
    spec: "AASHTO H-20 / Extra Heavy",
    imageUrl: "/images/our-images/trench-grates.png",
    summary:
      "Precision-cast cast iron trench grates featuring an architectural chevron directional bar profile. Designed for continuous linear drainage channels along commercial drive lanes, warehouse loading bays, fueling islands, and pedestrian plazas. Provides massive hydraulic stormwater intake while preventing bicycle tires from catching.",
    standards: "AASHTO M306 • ASTM A48 Class 35B • ADA Heel-Proof",
    metallurgy: "ASTM A48 Class 35B Gray Iron or ASTM A536 Ductile Iron",
    loadRating: "AASHTO H-20 / HS-20 Traffic Rated (Direct Wheel Loading)",
    coating: "Uncoated Raw Foundry Iron with Bituminous Dip Option",
    application:
      "Commercial apron drainage, highway runoff interceptors, transit bays, and industrial facilities",
    features: [
      "Directional chevron angle directs surface water into trench channel at high velocities with zero standing puddles",
      "Bicycle-safe and ADA compliant narrow slot spacing protects cyclists, wheelchairs, and pedestrian heels",
      "Modular interlocking tongue-and-groove end lugs ensure seamless straight runs without joint racking",
      "Heavy cast iron mass eliminates vibration and displacement under high-speed vehicular braking",
    ],
    hotspots: [
      {
        id: 1,
        x: "42%",
        y: "34%",
        title: "V-Angle Chevron Inflow Bars",
        badge: "High Hydraulic Velocity",
        desc: "Aerodynamic angled cast ribs channel surface stormwater rapidly into the drain trough while shedding floating debris.",
      },
      {
        id: 2,
        x: "58%",
        y: "48%",
        title: "Bicycle-Safe Slot Geometry",
        badge: "Bicycle & Heel Safe",
        desc: "Cross-patterned transverse ribs prevent bicycle tires from dropping into slots, meeting municipal safety ordinances.",
      },
      {
        id: 3,
        x: "15%",
        y: "50%",
        title: "Interlocking Modular End Lugs",
        badge: "Zero-Racking Joint",
        desc: "Precision-cast male/female alignment lugs connect adjacent grate sections into a continuous, rigid line.",
      },
      {
        id: 4,
        x: "82%",
        y: "55%",
        title: "Heavy Bearing Seat Flange",
        badge: "Silent Traffic Seating",
        desc: "Continuous flat bottom flange rests solidly in trench frame seats with bituminous vibration-dampening pads.",
      },
    ],
  },
  {
    id: "curb-inlet-riser",
    catalogId: "drainage-grates-curb-inlets",
    number: "04",
    name: "Heavy Cast Iron Curb Inlet Extension Riser",
    subtitle: "Precision Resurfacing Frame for Asphalt Milling Overlays",
    categoryLabel: "Stormwater Catch Basin Castings",
    badge: "PR Tooling",
    spec: "AASHTO H-20 Highway Rated",
    imageUrl: "/images/our-images/curb_inlet_riser_heavy_iron.png",
    summary:
      "Cast with authentic PR-branded foundry tooling, this heavy cast iron curb inlet extension riser allows municipal road crews and paving contractors to raise storm drain inlet frames flush with newly paved asphalt surfaces. Eliminates the dangerous dip in gutters and avoids the costly, multi-day process of breaking out concrete curb boxes.",
    standards: "ASTM A48 Class 35B • AASHTO M306 • State DOT Approved",
    metallurgy: "ASTM A48 Class 35B High-Strength Gray Cast Iron",
    loadRating: "AASHTO H-20 / HS-20 Highway Traffic (40,000+ LBS Wheel Load)",
    coating: "Heavy Industrial Bituminous Corrosion Barrier Enamel",
    application:
      "Municipal street repaving, asphalt overlay grade elevation, and gutter storm inlet adjustments",
    features: [
      "Precision-milled step-down seating lip matches standard state DOT curb inlet frames with zero play",
      "Heavy cast iron side walls withstand continuous gutter gutter-sweeper impacts and heavy snowplow strikes",
      "Integrated load-bearing base flange transfers wheel loads directly into existing concrete substructure",
      "Saves up to 80% labor compared to jackhammering and repouring monolithic concrete curb inlets",
    ],
    hotspots: [
      {
        id: 1,
        x: "50%",
        y: "22%",
        title: "Step-Down Seating Rim",
        badge: "DOT Frame Matched",
        desc: "Machined internal lip supports existing cast iron grate or curb box hood at the exact new asphalt wear elevation.",
      },
      {
        id: 2,
        x: "30%",
        y: "48%",
        title: "PR Foundry Tooling Markings",
        badge: "Authentic Foundry Cast",
        desc: "Authentic raised PR foundry identification permanently cast into the iron wall, verifying melt chemistry and tooling origin.",
      },
      {
        id: 3,
        x: "72%",
        y: "65%",
        title: "Heavy Load-Transfer Base Flange",
        badge: "AASHTO H-20 Proof",
        desc: "Wide bottom perimeter bearing surface distributes heavy highway wheel loads into existing concrete catch basin headers.",
      },
      {
        id: 4,
        x: "50%",
        y: "82%",
        title: "Corrosion-Resistant Bituminous Coat",
        badge: "Road Salt Barrier",
        desc: "AWWA compliant dipped asphaltic enamel seals cast iron against winter deicing salts, road brine, and acid runoff.",
      },
    ],
  },
];

export const OurNewInnovations: React.FC<OurNewInnovationsProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"photo" | "blueprint">("photo");
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const currentItem = INNOVATIONS[selectedIndex];
  const activeSpotData = currentItem.hotspots.find(
    (h) => h.id === activeHotspot,
  );

  const findCatalogProduct = (item: InnovationItem): ProductItem => {
    const found = PRODUCTS_CATALOG.find((p) => p.id === item.catalogId);
    if (found) return found;
    return {
      id: item.catalogId,
      name: item.name,
      category: "municipal-castings",
      categoryLabel: item.categoryLabel,
      standard: "ASTM A48",
      pressureRating: item.loadRating,
      jointType: "Gravity Flow Drop-In",
      diameterRange: item.spec,
      material: item.metallurgy,
      coating: item.coating,
      description: item.summary,
      cadFile: `AQUA_${item.id.toUpperCase().replace(/-/g, "_")}.DWG`,
      submittalFile: `SUBMITTAL_${item.id.toUpperCase().replace(/-/g, "_")}.PDF`,
      specs: {
        tensileStrength: "35,000 PSI Minimum (ASTM A48 Class 35B)",
        yieldStrength: "Not Applicable for Gray Iron Casting",
        elongation: "Nil (Rigid High-Compression Iron)",
        wallThicknessClass: "Heavy-Wall Highway Pattern",
        standardBoltCount: "Drop-In Seating / Cleated Anchor",
        torqueSpec: "Flush Roadway Seating",
      },
      keyFeatures: item.features,
      imageUrl: item.imageUrl,
      aisCompliant: true,
      buyAmericaReady: true,
    };
  };

  const handleAdd = (item: InnovationItem) => {
    const product = findCatalogProduct(item);
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 2200);
  };

  return (
    <section
      id="our-new-innovations"
      aria-label="3rd Showcase: Our New Innovations"
      className="py-14 sm:py-20 bg-[#3087ff] text-white border-b-4 border-[#3087ff] relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            TOP SECTION HEADER
        ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8 border-b-2 border-white/20 pb-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#3087ff]">
              <Sparkles className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
              <span>3rd Product Showcase &bull; Authentic Foundry Tooling</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-2">
              OUR NEW <span className="">INNOVATIONS</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
              Four specialized, high-tensile iron castings engineered for
              municipal cleanouts, ADA truncated-dome sidewalk armor,
              high-inflow chevron trench channels, and asphalt resurfacing
              elevation risers. Tested to AASHTO H-20 proof loads.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-end">
            <div className="px-3.5 py-2 bg-white/10 border-2 border-white/30 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm shadow-sm whitespace-nowrap">
              <Sliders className="w-4 h-4 text-[#3087ff]" />
              <span>CAD Hotspot Inspector</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            1. HORIZONTAL 4-ITEM SELECTOR BAR (NO SCROLLBAR, Grid)
        ======================================================== */}
        <div className="w-full mb-6 bg-white/10 p-1.5 border-2 border-[#3087ff] backdrop-blur-md grid grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2">
          {INNOVATIONS.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedIndex(idx);
                  setActiveHotspot(null);
                }}
                className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-3 text-center transition-all rounded-none cursor-pointer border-2 whitespace-nowrap flex-nowrap shrink-0 flex items-center justify-center gap-1.5 sm:gap-2 ${isSelected
                    ? "bg-white text-[#3087ff] border-white shadow-lg"
                    : "bg-transparent text-white border-transparent hover:bg-white/10 hover:border-white/30"
                  }`}
              >
                <span
                  className={`text-[10px] font-black uppercase px-1.5 py-0.5 shrink-0 ${isSelected
                      ? "bg-[#3087ff] text-white"
                      : "bg-white/20 text-white"
                    }`}
                >
                  {item.number}
                </span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider truncate">
                  {item.name
                    .replace("Cast Iron ", "")
                    .replace("Multi-Tier ", "")}
                </span>
                <span
                  className={`text-[9px] font-bold uppercase px-1.5 py-0.5 hidden md:inline-block shrink-0 ${isSelected
                      ? "bg-white text-[#3087ff]"
                      : "bg-white/10 text-[#3087ff]"
                    }`}
                >
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            2. UNIFIED HORIZONTAL INNOVATION HEADER RIBBON
        ======================================================== */}
        <div className="mb-6 p-4 sm:p-5 bg-white/10 border-2 border-[#3087ff] backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#3087ff] text-white px-2 py-0.5">
                Innovation #{currentItem.number}
              </span>
              <span className="text-[11px] font-bold text-white/90 uppercase tracking-wide">
                {currentItem.categoryLabel}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white tracking-tight leading-tight">
              {currentItem.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-3xl leading-relaxed">
              {currentItem.summary}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start md:self-center">
            <span className="px-3 py-1.5 bg-white text-[#3087ff] text-xs font-black uppercase tracking-wider border-2 border-[#3087ff] shadow-sm">
              {currentItem.badge}
            </span>
            <span className="px-3 py-1.5 bg-[#3087ff] text-white text-xs font-black uppercase tracking-wider border-2 border-[#3087ff]">
              {currentItem.spec}
            </span>
          </div>
        </div>

        {/* ========================================================
            3. HORIZONTALLY BALANCED 2-COLUMN ENGINEERING LABORATORY
        ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT COLUMN: Visual & Hotspot Inspector (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full bg-white border-4 border-[#3087ff] p-5 sm:p-6 shadow-2xl relative text-[#3087ff]">
            {/* Top Bar inside Left Card: View Mode Switcher */}
            <div className="flex items-center justify-between gap-2 border-2 border-[#3087ff] p-1 bg-[#3087ff] mb-4">
              <button
                type="button"
                onClick={() => setViewMode("photo")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer text-center ${viewMode === "photo"
                    ? "bg-white text-[#3087ff] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                Real Casting Photograph
              </button>

              <button
                type="button"
                onClick={() => setViewMode("blueprint")}
                className={`flex-1 py-1.5 px-3 text-xs font-black uppercase tracking-wider transition-all rounded-none cursor-pointer flex items-center justify-center gap-1.5 ${viewMode === "blueprint"
                    ? "bg-white text-[#3087ff] shadow-sm"
                    : "text-white hover:bg-white/10"
                  }`}
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Structural CAD Blueprint</span>
              </button>
            </div>

            {/* Floating Upper Detail Popup (Absolute Overlay - Zero Layout Displacement) */}
            {activeHotspot !== null && activeSpotData && (
              <div className="absolute inset-x-4 sm:inset-x-6 top-16 z-30 bg-[#3087ff] border-2 border-[#3087ff] p-4 text-left shadow-2xl text-white backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-white text-[#3087ff] flex items-center justify-center font-black text-xs shadow-sm">
                      {activeHotspot}
                    </span>
                    <span className="font-black text-xs sm:text-sm uppercase tracking-tight text-white">
                      {activeSpotData.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-[#3087ff] text-white font-black px-2 py-0.5 whitespace-nowrap shadow-xs">
                      {activeSpotData.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveHotspot(null)}
                      className="w-6 h-6 bg-white/20 hover:bg-white text-white hover:text-[#3087ff] flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                      title="Close Popup"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-white/95 font-medium mb-2.5">
                  {activeSpotData.desc}
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-2 text-[10px] text-[#3087ff] font-bold uppercase">
                  <span>Feature Point {activeHotspot} of 4</span>
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(null)}
                    className="underline hover:text-white cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            {/* Display Area: Photo or Blueprint */}
            <div className="relative w-full flex-1 min-h-[300px] sm:min-h-[340px] flex items-center justify-center p-2 overflow-hidden">
              {viewMode === "photo" ? (
                <>
                  <img
                    src={currentItem.imageUrl}
                    alt={currentItem.name}
                    className="max-h-[290px] sm:max-h-[320px] max-w-full object-contain filter drop-shadow-xl transition-transform duration-300 hover:scale-105"
                  />

                  {/* Interactive Hotspot Inspection Pins */}
                  {currentItem.hotspots.map((spot) => (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() =>
                        setActiveHotspot(
                          activeHotspot === spot.id ? null : spot.id,
                        )
                      }
                      style={{ left: spot.x, top: spot.y }}
                      className={`absolute z-30 w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-none border-2 flex items-center justify-center font-black text-xs shadow-xl transition-all hover:scale-125 cursor-pointer ${activeHotspot === spot.id
                          ? "bg-[#3087ff] text-white border-white scale-125 ring-4 ring-[#3087ff]"
                          : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff] hover:text-white"
                        }`}
                      title={spot.title}
                      aria-label={spot.title}
                    >
                      <span>{spot.id}</span>
                    </button>
                  ))}
                </>
              ) : (
                /* Structural CAD Blueprint Schematic View */
                <div className="w-full flex flex-col items-center justify-between h-[300px] relative p-2">
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 320 220"
                      className="w-full h-full max-h-[220px]"
                      fill="none"
                      aria-label="Structural Engineering Schematic"
                    >
                      <rect
                        x="40"
                        y="40"
                        width="240"
                        height="140"
                        stroke="#3087ff"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        fill="#3087ff"
                        fillOpacity="0.05"
                      />
                      <circle
                        cx="160"
                        cy="110"
                        r="60"
                        stroke="#3087ff"
                        strokeWidth="1.5"
                        strokeDasharray="6 3"
                      />
                      <circle
                        cx="160"
                        cy="110"
                        r="35"
                        stroke="#3087ff"
                        strokeWidth="2"
                      />
                      <line
                        x1="160"
                        y1="10"
                        x2="160"
                        y2="50"
                        stroke="#3087ff"
                        strokeWidth="3"
                      />
                      <line
                        x1="80"
                        y1="10"
                        x2="80"
                        y2="50"
                        stroke="#3087ff"
                        strokeWidth="2"
                      />
                      <line
                        x1="240"
                        y1="10"
                        x2="240"
                        y2="50"
                        stroke="#3087ff"
                        strokeWidth="2"
                      />
                      <text
                        x="160"
                        y="115"
                        textAnchor="middle"
                        fill="#3087ff"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        40,000 LB LOAD PATH
                      </text>
                      <text
                        x="160"
                        y="170"
                        textAnchor="middle"
                        fill="#3087ff"
                        fontSize="9"
                        fontWeight="bold"
                      >
                        AASHTO H-20 VERIFIED
                      </text>
                    </svg>
                  </div>

                  <div className="w-full flex items-center justify-between border-t border-[#3087ff] pt-2 text-xs font-bold text-[#3087ff]">
                    <span>Metallurgy: {currentItem.metallurgy}</span>
                    <span className="bg-white px-2 py-0.5 border border-[#3087ff]">
                      AASHTO M306 Proof
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Strip of Left Card */}
            <div className="w-full mt-3 pt-3 border-t border-[#3087ff] flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#3087ff]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#3087ff]" />
                ASTM A48 Class 35B Heavy Casting
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3087ff]" />
                AASHTO H-20 Highway Proof
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Specifications & Action Suite (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full gap-4">
            {/* Key Engineering Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentItem.features.map((feat) => (
                <div
                  key={feat}
                  className="p-3 bg-white/10 border border-[#3087ff] flex items-start gap-2 shadow-xs backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3087ff] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-white/95 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Technical Submittal Matrix */}
            <div className="border-2 border-[#3087ff] bg-white/10 shadow-md backdrop-blur-sm flex-1 flex flex-col justify-between">
              <div className="px-4 py-2 bg-white text-[#3087ff] flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Engineering Submittal Specifications
                </span>
                <span className="text-xs font-semibold text-[#3087ff]">
                  {currentItem.standards.split("•")[0]}
                </span>
              </div>
              <div className="p-3.5 space-y-2 text-xs sm:text-sm text-white">
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80 font-normal">Metallurgy:</span>
                  <span className="text-white font-bold uppercase text-right">
                    {currentItem.metallurgy}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80 font-normal">
                    Traffic Load Proof:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentItem.loadRating}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80 font-normal">
                    Applicable Standards:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentItem.standards}
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-1.5">
                  <span className="text-white/80 font-normal">
                    Surface Protection:
                  </span>
                  <span className="text-white font-bold text-right">
                    {currentItem.coating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80 font-normal">
                    Domestic Compliance:
                  </span>
                  <span className="text-[#3087ff] font-bold text-right">
                    100% AIS / Buy America Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTAs aligned with bottom of left card */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="button"
                onClick={() => handleAdd(currentItem)}
                className="flex-1 px-5 py-3.5 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-bold text-xs sm:text-sm rounded-none shadow-md transition-all whitespace-nowrap text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                {addedIds[currentItem.id] ? (
                  <>
                    <Check className="w-4 h-4 text-[#3087ff] stroke-[3]" />
                    <span>Added to RFQ Quote</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-[#3087ff] stroke-[2.5]" />
                    <span>+ Add {currentItem.name.split(" ")[0]} to Quote</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() =>
                  onPreviewSubmittal(findCatalogProduct(currentItem))
                }
                className="flex-1 px-5 py-3.5 bg-[#3087ff] hover:bg-white text-white hover:text-[#3087ff] font-bold text-xs sm:text-sm rounded-none border-2 border-[#3087ff] transition-all whitespace-nowrap text-center inline-flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 text-[#3087ff] group-hover:text-[#3087ff]" />
                <span>Download Submittal PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators & Direct Hotline */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white font-normal">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#3087ff]" />
              <span>Full ASTM A48 / A536 Foundry Melt Traceability</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#3087ff]" />
              <span>AASHTO H-20 &amp; M306 Highway Proof-Tested</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 bg-[#3087ff]" />
              <span>Immediate Staging from Melville, NY &amp; FL Hubs</span>
            </div>
          </div>

          <a
            href="tel:+15162521111"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-[#3087ff] transition-colors whitespace-nowrap bg-white/10 px-3.5 py-1.5 border border-[#3087ff]"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#3087ff]" />
            <span>Foundry Dispatch: +1 (516) 252-1111</span>
          </a>
        </div>
      </div>
    </section>
  );
};
