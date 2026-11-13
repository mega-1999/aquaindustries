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
      product: PRODUCTS_CATALOG[0],
      label: "Samping Station",
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
      product: PRODUCTS_CATALOG[1],
      label: "bison curb box",
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
      product: PRODUCTS_CATALOG[0],
      label: "Water Works Tools",
      sublabel: "ANSI/NSF 61 Field Utility Standard",
      image: "/images/our-images/sampling-station.png",
      summary:
        "Municipal water quality sampling stations, valve operating keys, and field service utility equipment engineered for water mains.",
      specs: [
        "ASTM Certified Toughness",
        "Precision Machined Keys",
        "Field Ready Heavy Tooling",
      ],
      tag: "UTILITY TOOLS",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "cast-iron-downspout-spouts") ||
        PRODUCTS_CATALOG[1],
      label: "Downspouts & Monument Cleanouts",
      sublabel: "Heavy Cast Iron Facade & Grade Protection",
      image: "/images/our-images/cleanout.png",
      summary:
        "Heavy cast iron modular cleanouts, conductor boots, and monument boxes engineered with PR tooling and AASHTO H-20 proof load capacity.",
      specs: [
        "ASTM A48 Class 35B",
        "AASHTO H-20 Traffic Proof",
        "PR Modular Tooling",
      ],
      tag: "ARCHITECTURAL",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "catch-basin-traps") ||
        PRODUCTS_CATALOG[1],
      label: "Catch Basin Traps",
      sublabel: "Gas & Siphon Water Seal Hood",
      image: "/images/traps/traps.png",
      summary:
        "Cast iron gas and siphon water-seal traps stopping floatable debris, oils, and sewer gases in municipal storm catch basins.",
      specs: [
        "Siphon Gas Seal Barrier",
        "ASTM A48 Heavy Iron",
        "Cleanout Access Hood",
      ],
      tag: "STORMWATER SEAL",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "culvert-pipe-grates") ||
        PRODUCTS_CATALOG[9],
      label: "Pipe Grates",
      sublabel: "AASHTO H-20 Heavy Culvert Protection",
      image: "/images/pipe_GRATE/NON_SIFTING.15.png",
      summary:
        "Heavy-duty circular pipe grates, flared end hinged bar grates, and traversable ditch safety slope grates for stormwater.",
      specs: [
        '12" to 72" Diameter Range',
        "Hot-Dip Galvanized Bar",
        "Hinged Cleanout Access",
      ],
      tag: "SAFETY GRATE",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "drainage-grates-curb-inlets") ||
        PRODUCTS_CATALOG[4],
      label: "Water Works Castings",
      sublabel: "AASHTO M306 40,000 LB Proof Load",
      image: "/images/our-images/curb_inlet_riser_heavy_iron.png",
      summary:
        "Proof-tested roadway manhole frames, curb inlets, catch basin covers, and high-velocity stormwater directional grates.",
      specs: [
        "40,000 LB Proof Load",
        "High Hydraulic Inflow",
        "State DOT Approved",
      ],
      tag: "MUNICIPAL CASTING",
    },
    {
      product: PRODUCTS_CATALOG[3],
      label: "MJ Fittings",
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
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "threaded-ductile-iron-flanges") ||
        PRODUCTS_CATALOG[0],
      label: "Flanges",
      sublabel: "ANSI/AWWA C115 Class 125 & 250",
      image: "/images/products/Fabricator-Flanges.jpg",
      summary:
        "Precision-machined threaded ductile iron flanges, blind flanges, and drilled tapped reducing flanges for pump station piping.",
      specs: [
        "Class 125 & 250 Standard",
        "CNC Precision Threaded",
        "ASTM A536 Ductile Iron",
      ],
      tag: "PLANT PIPING",
    },
    {
      product:
        PRODUCTS_CATALOG.find(
          (p) => p.id === "mechanical-joint-follower-glands",
        ) || PRODUCTS_CATALOG[2],
      label: "Glands & Adapters",
      sublabel: "AWWA C111 High-Strength Swivel Hydrant Spool",
      image: "/images/fittings/swivel-solid-hydrant-adapter.png",
      summary:
        "High-strength ductile iron swivel hydrant adapters and mechanical joint fittings engineered for positive gasket sealing under high pressures.",
      specs: [
        "AWWA C153 & C111 Standard",
        "ASTM A536 Ductile Iron",
        "350 PSI Proof Rated",
      ],
      tag: "MJ ACCESSORY",
    },
    {
      product: PRODUCTS_CATALOG[2],
      label: "Valves & Restraints",
      sublabel: "Precision 360° Mechanical Joint Restraint Glands",
      image: "/images/fittings/swivel-glands.png",
      summary:
        "Ductile iron mechanical joint swivel restraint follower glands allowing 360 degrees of rotation for stress-free valve and hydrant alignment.",
      specs: [
        "AWWA C111 Standard",
        "350 PSI Continuous Rating",
        "Grade 65-45-12 Ductile",
      ],
      tag: "VALVES & RESTRAINT",
    },
    {
      product:
        PRODUCTS_CATALOG.find((p) => p.id === "detention-trash-racks") ||
        PRODUCTS_CATALOG[0],
      label: "Trash Racks",
      sublabel: "Anti-Vortex Basin Safety Risers",
      image: "/images/trash_racks/trash_rack_type_1.png",
      summary:
        "360-degree pyramidal anti-vortex trash racks and self-cleaning inclined screens for stormwater detention basin outlet risers.",
      specs: [
        "360° Anti-Vortex Design",
        "ASTM A123 Galvanized",
        "Self-Cleaning Bars",
      ],
      tag: "BASIN PROTECTION",
    },
    {
      product:
        PRODUCTS_CATALOG.find(
          (p) => p.id === "ornamental-architectural-castings",
        ) || PRODUCTS_CATALOG[8],
      label: "Marine Castings",
      sublabel: "Heavy Waterfront & Ornamental Castings",
      image: "/images/our-images/Ornamental_Castings.jpeg",
      summary:
        "Ductile iron mooring bollards, dock bitts, marine cleats, and custom heavy waterfront bulkhead iron infrastructure.",
      specs: [
        "ASTM A536 Heavy Marine",
        "High Tensile Bollards",
        "Corrosion Resistant Iron",
      ],
      tag: "MARINE & BULKHEAD",
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

        {/* Load More Button: Initially 8, Expands to All 13 */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="px-8 py-3.5 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white border-2 border-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-none transition-all shadow-xl flex items-center gap-2.5 cursor-pointer group"
          >
            <span>
              {showAll
                ? "Show Less (8 Products)"
                : "Load More Products (Show All 13)"}
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
