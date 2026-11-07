"use client";

import { ArrowDown, Check, CheckCircle2, FileText, Layers, Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";

interface SolenoFlagshipProductsProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const SolenoFlagshipProducts: React.FC<SolenoFlagshipProductsProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [showAll, setShowAll] = useState<boolean>(false);

  // Match the genuine flagship products from the catalog with their exact photographs
  const flagshipItems = [
    {
      product: PRODUCTS_CATALOG[0], // Municipal Water Sampling Station (id: water-sampling-station)
      label: "Municipal Sampling Station",
      sublabel: "ANSI/NSF 61 Sanitary Potable Compliance",
      image: "/images/our-images/sampling-station.png",
      summary:
        "Dedicated non-contaminated water testing point for EPA Lead & Copper Rule compliance with freeze-proof thermal core and padlock shroud.",
      specs: [
        '1" NPT Mainline Inlet',
        "300 PSI Working Pressure",
        "-20°F Thermal Frost Jacket",
      ],
      tag: "EPA COMPLIANCE",
    },
    {
      product: PRODUCTS_CATALOG[3], // C153 Compact MJ Fittings (id: c153-compact-mj-fittings)
      label: "C153 Compact MJ Fittings",
      sublabel: "AWWA C153 & C110 Ductile Iron",
      image: "/images/our-images/MJ_Fittings.jpeg",
      summary:
        "High-strength ASTM A536 Grade 65-45-12 compact mechanical joint fittings. 350 PSI rated with double cement mortar lining per AWWA C104.",
      specs: [
        '2" to 64" Diameter Range',
        "350 PSI Working Pressure",
        "NSF/ANSI 61 Lead-Free Certified",
      ],
      tag: "CORE DISTRIBUTION",
    },
    {
      product: PRODUCTS_CATALOG[1], // The Century Curb Box (id: century-curb-box)
      label: "Bison Curb Box",
      sublabel: "AASHTO H-20 Heavy Highway Traffic",
      image: "/images/our-images/curb-box-ultimate.png",
      summary:
        "The century-tested municipal standard. Authentic PR-branded foundry tooling, heavy Class 35B casting, and vandal-proof pentagon locking.",
      specs: [
        "AASHTO H-20 40,000 LB Proof",
        "ASTM A48 Class 35B Iron",
        "Brass Pentagon Lock Plug",
      ],
      tag: "HIGHWAY TRAFFIC",
    },
    {
      product: PRODUCTS_CATALOG[2], // Series 3000 Cam Restraint (id: series-3000-wedge-restraint)
      label: "Series 3000 Cam Restraint",
      sublabel: "Concrete-Free Mechanical Joint Restraint",
      image: "/images/products/Joint-Restraints.jpg",
      summary:
        "Eliminates concrete thrust blocks. Heat-treated ductile iron cam wedges bite radially into pipe proportionally to pressure surges.",
      specs: [
        "UL Listed & FM Approved",
        "350 PSI Continuous Rating",
        "Breakaway Torque-Head Bolts",
      ],
      tag: "JOINT RESTRAINT",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "drainage-grates-curb-inlets") ||
        PRODUCTS_CATALOG[4],
      label: "Drainage Grates & Inlets",
      sublabel: "AASHTO M306 Highway Catch Basins",
      image: "/images/our-images/curb_inlet_riser_heavy_iron.png",
      summary:
        "High-inflow storm sewer castings engineered with directional vane bars that capture storm runoff along curbs while preventing bicycle trapping.",
      specs: [
        "40,000 LB Proof Load",
        "High Hydraulic Capacity",
        "DOT State Highway Approved",
      ],
      tag: "STORMWATER DRAIN",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "trench-grates") ||
        PRODUCTS_CATALOG[5],
      label: "Architectural Trench Grates",
      sublabel: "High-Inflow Chevron Linear Channels",
      image: "/images/our-images/trench-grates.png",
      summary:
        "Heavy modular cast iron trench grates designed for continuous linear drainage channels along airport taxiways, loading docks, and plazas.",
      specs: [
        '8" to 24" Width Modules',
        "ADA Heel-Proof Slots",
        "Interlocking Tongue & Groove",
      ],
      tag: "LINEAR TRENCH",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "detectable-warning-plates") ||
        PRODUCTS_CATALOG[6],
      label: "Detectable Warning Plates",
      sublabel: "Solid Cast Iron ADA Tactile Armor",
      image: "/images/our-images/warning-plate.png",
      summary:
        "Cast iron truncated dome tactile warning tiles with monolithic underside concrete anchors. Snowplow indestructible, never fractures or lifts.",
      specs: [
        "ADAAG Section R305",
        "Snowplow Indestructible",
        "Wet-Set Concrete Cleats",
      ],
      tag: "ADA COMPLIANCE",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "cleanout-monument-boxes") ||
        PRODUCTS_CATALOG[7],
      label: "Cleanout & Monument Boxes",
      sublabel: "Heavy Traffic Subgrade Access",
      image: "/images/our-images/cleanout.png",
      summary:
        "Heavy duty cast iron cleanout and monument boxes engineered for sanitary sewer cleanout and protecting municipal land survey monuments.",
      specs: [
        "AASHTO H-20 Highway Rated",
        "Machined 360° Seating Rim",
        "Stackable Modular Risers",
      ],
      tag: "MUNICIPAL ACCESS",
    },
    {
      product:
        PRODUCTS_CATALOG.find(
          (p) => p.id === "ornamental-architectural-castings",
        ) || PRODUCTS_CATALOG[8],
      label: "Ornamental Tree Grates",
      sublabel: "Architectural Downtown Streetscape",
      image: "/images/our-images/Ornamental_Castings.jpeg",
      summary:
        "Decorative municipal tree grates and custom architectural streetscape castings meeting city streetscape aesthetics and ADA pedestrian mandates.",
      specs: [
        '36" to 72" Round & Square',
        "Expanding Tree Center",
        "ADA Narrow Heel-Proof",
      ],
      tag: "STREETSCAPE",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "culvert-pipe-grates") ||
        PRODUCTS_CATALOG[9],
      label: "Culvert Safety Pipe Grates",
      sublabel: "Debris & Trash Defense Armor",
      image: "/images/pipe_GRATE/NON_SIFTING.15.png",
      summary:
        "Heavy welded steel bar culvert pipe safety grates. Bars watercraft, debris, and wildlife from entering while maximizing stormwater discharge.",
      specs: [
        '12" to 72" Culvert Sizes',
        "Hot-Dip Galvanized Bar",
        "AIS Buy America Ready",
      ],
      tag: "SAFETY GRATE",
    },
  ];

  const handleAdd = (product: ProductItem) => {
    onAddToRfq(product);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 2500);
  };

  return (
    <section
      aria-label="Flagship Engineered Waterworks Products"
      className="py-14 sm:py-20 bg-[#3087ff] text-white border-t-4 border-[#3087ff] border-b-4 border-[#3087ff] relative overflow-hidden"
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-md border-2 border-[#3087ff]">
            <Layers className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
            <span>Engineered Waterworks Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.05] mb-3">
            Our Flagship Products
          </h2>

          <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed">
            Manufactured and proof-tested to exceed AWWA, ASTM, and AASHTO
            specifications. Certified Mill Test Reports (MTRs) and traceable
            heat numbers provided with every shipment from our Melville, NY
            foundry and stocking logistics hubs.
          </p>
        </div>

        {/* 4-Column Compact Flagship Card Grid (Initially 8, Expands to All 10) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {(showAll ? flagshipItems : flagshipItems.slice(0, 8)).map((item) => {
            const isAdded = addedIds[item.product.id];
            return (
              <div
                key={item.product.id}
                className="bg-white border-4 border-[#3087ff] rounded-none p-4 sm:p-5 flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 group hover:-translate-y-1 relative text-[#3087ff] h-full min-w-0 overflow-hidden"
              >
                <div>
                  {/* Top Category Tag */}
                  <div className="flex items-center justify-between mb-3 border-b-2 border-[#3087ff] pb-2.5 min-h-[28px]">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-white text-[#3087ff] px-2.5 py-0.5 border border-[#3087ff]">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-bold text-[#3087ff] uppercase">
                      In Stock
                    </span>
                  </div>

                  {/* Centered Compact Image */}
                  <div className="relative w-full h-36 sm:h-40 flex items-center justify-center p-3 overflow-hidden my-1 bg-gradient-to-b from-[#3087ff] to-transparent border border-[#3087ff]">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Block */}
                  <h3 className="text-base font-black uppercase tracking-tight text-[#3087ff] leading-snug line-clamp-1 mt-3 mb-0.5">
                    {item.label}
                  </h3>

                  <p className="text-[11px] font-bold text-[#3087ff] uppercase tracking-wider mb-2 truncate">
                    {item.sublabel}
                  </p>

                  <p className="text-xs text-[#3087ff] font-normal leading-relaxed line-clamp-2 mb-3 min-h-[34px]">
                    {item.summary}
                  </p>

                  {/* Technical Chip Specs */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.specs.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#3087ff] border border-[#3087ff] px-2 py-0.5 rounded-none max-w-full"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#3087ff] shrink-0" />
                        <span className="truncate">{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* 100% Contained Single-Line Flex Action Buttons */}
                <div className="w-full flex items-center gap-2 pt-3 border-t-2 border-[#3087ff] mt-auto">
                  <button
                    type="button"
                    onClick={() => handleAdd(item.product)}
                    className={`flex-1 min-w-0 py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 ${isAdded
                      ? "bg-[#3087ff] text-white border-[#3087ff]"
                      : "bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white border-[#3087ff] shadow-sm"
                      }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                        <span className="truncate">Added to Quote</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 stroke-[2.5] shrink-0" />
                        <span className="truncate">Add to Quote</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onPreviewSubmittal(item.product)}
                    title="Download Cut Sheet PDF"
                    className="w-10 h-10 shrink-0 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white rounded-none border-2 border-[#3087ff] transition-all flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    <FileText className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button: Initially 8, Expands to All 10 */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3.5 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white border-2 border-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-none transition-all shadow-xl flex items-center gap-2.5 cursor-pointer group"
          >
            <span>
              {showAll
                ? "Show Less (8 Products)"
                : "Load More Products (Show All 10)"}
            </span>
            <ArrowDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
