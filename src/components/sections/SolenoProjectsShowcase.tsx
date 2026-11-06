"use client";

import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileCheck2,
  FileText,
  Filter,
  Layers,
  MapPin,
  PhoneCall,
  Play,
  Plus,
  Ruler,
  Search,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { PRODUCTS_CATALOG } from "../../data/waterworks-data";
import type { ProductItem } from "../../types";
import { InfiniteWaterBackground } from "../common/InfiniteWaterBackground";

export interface ProjectCase {
  id: string;
  title: string;
  agencyLocation: string;
  sectorTag: string;
  sectorId: string;
  imageUrl: string;
  diameterSpec: string;
  pressureTest: string;
  materialsSupplied: string;
  freightTimeline: string;
  summary: string;
  challengeSolved: string;
  specs: {
    standard: string;
    metallurgy: string;
    coating: string;
    quantity: string;
  };
  product: ProductItem;
}

export const PROJECTS_DATA: ProjectCase[] = [
  {
    id: "great-lakes-transmission",
    title: "36-Inch Water Transmission Main Interconnect",
    agencyLocation:
      "Great Lakes Regional Water Authority • Ohio / Michigan Corridor",
    sectorTag: "POTABLE WATER TRANSMISSION",
    sectorId: "potable",
    imageUrl: "/images/our-images/MJ_Fittings.jpeg",
    diameterSpec: '36" Ductile Iron (Class 350)',
    pressureTest: "300 PSI Hydro-Tested (24-Hr Hold)",
    materialsSupplied:
      "AWWA C110 MJ Bends, Tees, and Series 3000 Wedge Restraints",
    freightTimeline: "Delivered via 14 Flatbeds in 5 Staged Jobsite Drops",
    summary:
      "A 6.2-mile high-capacity drinking water interconnection supplying two suburban township networks with redundancy against supply outages.",
    challengeSolved:
      "High groundwater tables and soft clay soils required rigorous restrained joint calculation. Over 1,200 linear feet of mechanical joint restraint prevented thrust block displacement under 300 PSI hydro-testing.",
    specs: {
      standard: "AWWA C153 & C110 / C111",
      metallurgy: "ASTM A536 Grade 65-45-12 Ductile Iron",
      coating: "Double-Thick Cement Mortar per AWWA C104",
      quantity: '1,200 LF Restrained Fittings + 36" Tees',
    },
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
  {
    id: "highway-culvert-drainage",
    title: "Interstate 95 Corridor Stormwater & Culvert Reconstruction",
    agencyLocation: "State DOT Infrastructure Program • Mid-Atlantic Corridor",
    sectorTag: "HIGHWAY DRAINAGE",
    sectorId: "highway",
    imageUrl: "/images/our-images/trench-grates.png",
    diameterSpec: '24" to 48" Drainage Systems',
    pressureTest: "AASHTO M306 Proof-Load (40,000 LB)",
    materialsSupplied:
      "Heavy-Duty Highway Manhole Frames, Vane Grates & Curb Inlets",
    freightTimeline: "Next-Day Direct Yard Dispatch from Baltimore Hub",
    summary:
      "Upgrading critical interstate stormwater drainage across a 12-mile widening corridor to eliminate recurring highway hydroplaning during heavy rainfall.",
    challengeSolved:
      "Heavy traffic flow required zero downtime and guaranteed cast iron structural load performance. Supplied 380 AASHTO M306 machined frames with noise-dampening seals that passed on-site axle proof load inspections on day one.",
    specs: {
      standard: "AASHTO M306 / ASTM A48 Class 35B",
      metallurgy: "Heavy Gray & Ductile Iron Castings",
      coating: "Bituminous Asphaltic Shop Dip",
      quantity: "380 Machined Frame & Grate Assemblies",
    },
    product: PRODUCTS_CATALOG[5] || PRODUCTS_CATALOG[1],
  },
  {
    id: "treatment-facility-header",
    title: "Metropolitan Water Reclamation Facility High-Pressure Header",
    agencyLocation: "Metropolitan Sewerage District • Midwest Facility",
    sectorTag: "WASTEWATER TREATMENT",
    sectorId: "treatment",
    imageUrl: "/images/products/Fabricator-Flanges.jpg",
    diameterSpec: '16" to 30" Flanged Piping',
    pressureTest: "250 PSI Flange Hydro-Checked",
    materialsSupplied:
      "AWWA C115 Flanged Spools with Ceramic Epoxy Interior Lining",
    freightTimeline: "Shop Fabricated and Shipped to Jobsite in 8 Days",
    summary:
      "Complete replacement of aging pump discharge manifolds and wall sleeve penetrations in an active 85 MGD wastewater treatment facility.",
    challengeSolved:
      "Corrosive sewer gases and tight equipment room clearances required custom wall pipes with integral puddle flanges and 40-mil ceramic epoxy linings, delivered with pre-matched bolt hole orientations.",
    specs: {
      standard: "AWWA C115 Flanged / AWWA C110",
      metallurgy: "Ductile Iron Class 53 Wall Thickness",
      coating: "40-Mil High-Build Ceramic Epoxy Lining",
      quantity: "64 Fabricated Spools & Puddle Flanges",
    },
    product: PRODUCTS_CATALOG[10] || PRODUCTS_CATALOG[0],
  },
  {
    id: "texas-mud-distribution",
    title: "Municipal Utility District 44 Distribution Feeder Grid",
    agencyLocation: "County Municipal Utility District • Greater Houston, TX",
    sectorTag: "POTABLE WATER TRANSMISSION",
    sectorId: "potable",
    imageUrl: "/images/our-images/MJ_Fittings.jpeg",
    diameterSpec: '6" to 16" Distribution Loops',
    pressureTest: "250 PSI Hydro-Tested",
    materialsSupplied:
      "C153 Compact MJ Fittings, Gate Valves & Ultra PVC Restraints",
    freightTimeline: "Direct Yard Dispatch via 18 Flatbed Drops Over 3 Months",
    summary:
      "Installation of complete master-planned municipal watermain infrastructure serving 2,400 new residential and commercial connections.",
    challengeSolved:
      "Strict Buy America / AIS provisions and rapid housing build-out schedules. Maintained a dedicated inventory reserve at our Dallas-Fort Worth yard, ensuring no contractor downtime across 90 days of continuous trenching.",
    specs: {
      standard: "AWWA C153 Compact Mechanical Joint",
      metallurgy: "ASTM A536 Grade 65-45-12 (AIS Compliant)",
      coating: "Standard Cement Mortar with Seal Coat",
      quantity: "1,850 Metric Tons of Ductile MJ Fittings",
    },
    product: PRODUCTS_CATALOG[3] || PRODUCTS_CATALOG[0],
  },
  {
    id: "suffolk-water-sampling",
    title: "Sub-Zero Municipal Watermain Sampling Station Program",
    agencyLocation: "Suffolk County Water Authority • Long Island, NY Corridor",
    sectorTag: "CURB & METER ACCESS",
    sectorId: "access",
    imageUrl: "/images/our-images/sampling-station.png",
    diameterSpec: '1" NPT Mainline Inlet • 3/4" Smooth Bibb',
    pressureTest: "300 PSI Hydrostatic Proof Tested",
    materialsSupplied: "Thermal Freeze-Proof Municipal Water Sampling Stations",
    freightTimeline: "Next-Day Direct Foundry Staging from Melville, NY Hub",
    summary:
      "Deploying 120 dedicated municipal sampling stations across public utility easements to comply with updated EPA Lead & Copper Rule mandates.",
    challengeSolved:
      "Severe winter freeze cycles regularly froze standard hose bibbs. Aqua Industries' R-14 polyurethane insulated thermal core and automatic drain valve allowed continuous winter bacteriological draws down to -20°F without electric heat tracing.",
    specs: {
      standard: "ANSI/NSF 61 & 372 Certified Lead-Free",
      metallurgy: "ASTM A536 Ductile Shell & Cast Brass Core",
      coating: "High-Visibility UV Protective Thermal Coat",
      quantity: "120 Freeze-Proof Sampling Stations",
    },
    product: PRODUCTS_CATALOG[0],
  },
  {
    id: "downtown-arterial-curb-box",
    title: "Downtown Arterial Roadway Rehabilitation & Shut-Off Access",
    agencyLocation:
      "Department of Transportation & Municipal Water • Northeast Metro",
    sectorTag: "CURB & METER ACCESS",
    sectorId: "access",
    imageUrl: "/images/our-images/curb-box-ultimate.png",
    diameterSpec: '2-1/2" & 3" Shaft Diameters',
    pressureTest: "AASHTO H-20 Heavy Traffic Proof Load",
    materialsSupplied: "The Century Curb Service Boxes & Cast Iron Valve Boxes",
    freightTimeline: "Staged Deliveries Matching Paving Machine Progress",
    summary:
      "Replacing 450 compromised service shut-off boxes ahead of full asphalt milling and resurfacing on high-traffic downtown transit avenues.",
    challengeSolved:
      "Heavy bus and delivery truck traffic crushed traditional substandard boxes. The Century's heavy AASHTO H-20 casting absorbed vertical street traffic loads and subgrade settling, preventing pavement fractures and valve stem shearing.",
    specs: {
      standard: "ASTM A48 Class 35B / AASHTO H-20",
      metallurgy: "Centennial Heavy-Wall Gray Iron",
      coating: "Heavy Asphaltic Bituminous Dip",
      quantity: "450 Curb Service Boxes",
    },
    product: PRODUCTS_CATALOG[1],
  },
];

const SECTOR_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "potable", label: "Potable Water Transmission" },
  { id: "highway", label: "Highway & Civil Stormwater" },
  { id: "treatment", label: "Wastewater Treatment" },
  { id: "access", label: "Curb & Meter Service Access" },
];

interface SolenoProjectsShowcaseProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export const SolenoProjectsShowcase: React.FC<SolenoProjectsShowcaseProps> = ({
  onAddToRfq,
  onPreviewSubmittal,
}) => {
  const [selectedSector, setSelectedSector] = useState("all");
  const [activeProjectModal, setActiveProjectModal] =
    useState<ProjectCase | null>(null);

  const featuredProject = PROJECTS_DATA[0];

  const filteredProjects =
    selectedSector === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.sectorId === selectedSector);

  return (
    <section
      id="projects-showcase"
      aria-label="Municipal Infrastructure Projects and Case Studies"
      className="relative w-full border-t-4 border-[#3087ff]"
    >
      {/* ========================================================
          1. SOLENO NEWS_HERO PATTERN: FEATURED PROJECT SPOTLIGHT
      ======================================================== */}
      <article
        aria-label="Featured Waterworks Project Spotlight"
        className="bg-[#3087ff] text-white py-14 sm:py-20 border-b-4 border-[#3087ff] relative overflow-hidden"
      >
        {/* Infinite Seamless Looping Water Background Animation */}
        <InfiniteWaterBackground opacity="opacity-25" />

        {/* Background Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Soleno news_hero_content Typography */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#3087ff] text-xs font-bold uppercase tracking-wider rounded-none shadow-md border-2 border-[#3087ff]">
                <Building2 className="w-3.5 h-3.5 text-[#3087ff] shrink-0" />
                <span>Case Studies &bull; Our Infrastructure Projects</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-[1.02]">
                {featuredProject.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#3087ff]">
                <span className="bg-white/10 px-2.5 py-1 border border-[#3087ff]/60 text-white uppercase">
                  {featuredProject.sectorTag}
                </span>
                <span>&bull;</span>
                <span className="text-white/95">
                  {featuredProject.agencyLocation}
                </span>
              </div>

              <p className="text-sm sm:text-base text-white/95 font-normal leading-relaxed max-w-2xl">
                {featuredProject.summary} {featuredProject.challengeSolved}
              </p>

              {/* Key Technical Metric Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/10 border border-[#3087ff]/50 rounded-none">
                  <span className="text-[10px] text-[#3087ff] uppercase font-bold block">
                    Diameter Spec
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white">
                    {featuredProject.diameterSpec}
                  </span>
                </div>

                <div className="p-3 bg-white/10 border border-[#3087ff]/50 rounded-none">
                  <span className="text-[10px] text-[#3087ff] uppercase font-bold block">
                    Hydrostatic Test
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white">
                    {featuredProject.pressureTest}
                  </span>
                </div>

                <div className="p-3 bg-white/10 border border-[#3087ff]/50 rounded-none col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#3087ff] uppercase font-bold block">
                    Delivery Method
                  </span>
                  <span className="text-xs sm:text-sm font-black text-white">
                    14 Flatbed Drops
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(featuredProject)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-black text-xs sm:text-sm uppercase tracking-wider rounded-none shadow-xl transition-all cursor-pointer"
                >
                  <span>View Complete Project Study</span>
                  <ArrowRight className="w-4 h-4 text-[#3087ff]" />
                </button>
              </div>
            </div>

            {/* Right Column: Soleno news_hero_img Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white border-4 border-[#3087ff] p-6 sm:p-8 shadow-2xl text-[#3087ff] group">
                <div className="flex items-center justify-between border-b border-[#3087ff]/20 pb-3 mb-4 text-xs font-bold">
                  <span className="uppercase tracking-widest text-[#3087ff]">
                    Project Record ID
                  </span>
                  <span className="bg-[#3087ff]/20 px-2 py-0.5 border border-[#3087ff]">
                    AWWA C153 / C110
                  </span>
                </div>

                <div className="h-64 sm:h-72 w-full flex items-center justify-center p-4 overflow-hidden relative">
                  <img
                    src={featuredProject.imageUrl}
                    alt={featuredProject.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-[#3087ff]/20 flex items-center justify-between text-xs font-bold">
                  <span className="text-[#3087ff]">
                    ASTM A536 Grade 65-45-12
                  </span>
                  <span className="text-[#3087ff]">100% AIS Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ========================================================
          2. SOLENO CAT_FILTER PATTERN: CATEGORY SECTOR FILTER BAR
      ======================================================== */}
      <div className="bg-white border-b-2 border-[#3087ff] shadow-sm py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-black uppercase text-[#3087ff] whitespace-nowrap">
            <Filter className="w-4 h-4 text-[#3087ff]" />
            <span>Filter by Sector:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar pb-1 sm:pb-0">
            {SECTOR_FILTERS.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setSelectedSector(tab.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none transition-all whitespace-nowrap border-2 cursor-pointer ${selectedSector === tab.id
                  ? "bg-[#3087ff] text-white border-[#3087ff] shadow-xs"
                  : "bg-white text-[#3087ff] border-[#3087ff] hover:bg-[#3087ff]/20"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-[#3087ff]/80 hidden md:block whitespace-nowrap">
            Showing {filteredProjects.length} Infrastructure Projects
          </div>
        </div>
      </div>

      {/* ========================================================
          3. SOLENO NEWS_LIST PATTERN: PROJECTS 3-COLUMN GRID
      ======================================================== */}
      <div className="py-16 sm:py-20 bg-white text-[#3087ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border-4 border-[#3087ff] rounded-none overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-[#3087ff] transition-all duration-300 group hover:-translate-y-1.5 text-[#3087ff]"
              >
                {/* Card Image Container: Soleno post_img */}
                <div className="relative w-full h-56 bg-white border-b-2 border-[#3087ff] p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Sector Tag Ribbon */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 bg-[#3087ff] text-white text-[10px] font-black uppercase tracking-wider border border-[#3087ff]">
                      {project.sectorTag}
                    </span>
                  </div>
                </div>

                {/* Card Content Container: Soleno post_card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#3087ff]/75 mb-2 truncate">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-[#3087ff]" />
                      <span className="truncate">{project.agencyLocation}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-black text-lg uppercase tracking-tight text-[#3087ff] leading-snug mb-2 group-hover:text-[#3087ff]">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#3087ff]/90 font-normal leading-relaxed mb-4 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Technical Parameter Ledger */}
                    <div className="space-y-1.5 border-t border-[#3087ff]/20 pt-3 mb-5 text-xs font-bold">
                      <div className="flex justify-between">
                        <span className="text-[#3087ff]/75 font-normal">
                          Spec:
                        </span>
                        <span className="text-[#3087ff] uppercase">
                          {project.diameterSpec}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#3087ff]/75 font-normal">
                          Pressure:
                        </span>
                        <span className="text-[#3087ff] uppercase">
                          {project.pressureTest}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#3087ff]/75 font-normal">
                          Transit:
                        </span>
                        <span className="text-[#3087ff] truncate max-w-[180px]">
                          {project.freightTimeline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2 border-t-2 border-[#3087ff]/20">
                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(project)}
                      className="w-full py-2.5 px-3 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white font-black text-xs uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border border-[#3087ff]"
                    >
                      <span>View Project Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          4. DETAILED PROJECT CASE STUDY MODAL
      ======================================================== */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            className="fixed inset-0 bg-[#3087ff]/85 backdrop-blur-sm cursor-default w-full h-full border-0"
            onClick={() => setActiveProjectModal(null)}
            aria-label="Close Project Study Modal"
          />

          <div className="relative w-full max-w-3xl bg-white border-4 border-[#3087ff] shadow-2xl z-10 text-[#3087ff] p-6 sm:p-8 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#3087ff] pb-4 mb-5">
              <div>
                <span className="text-xs font-black uppercase bg-[#3087ff]/30 px-2.5 py-0.5 border border-[#3087ff] text-[#3087ff] block mb-1 w-max">
                  {activeProjectModal.sectorTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-[#3087ff] leading-tight">
                  {activeProjectModal.title}
                </h3>
                <span className="text-xs font-bold text-[#3087ff]/80">
                  {activeProjectModal.agencyLocation}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 text-[#3087ff] hover:bg-[#3087ff]/20 border border-[#3087ff] cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-6">
              <div className="md:col-span-5 h-60 bg-white border-2 border-[#3087ff] p-4 flex items-center justify-center">
                <img
                  src={activeProjectModal.imageUrl}
                  alt={activeProjectModal.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
              </div>

              <div className="md:col-span-7 space-y-3">
                <h4 className="font-black text-sm uppercase text-[#3087ff]">
                  Engineering Challenge &amp; Solution
                </h4>
                <p className="text-xs sm:text-sm text-[#3087ff]/90 leading-relaxed font-normal">
                  {activeProjectModal.challengeSolved}
                </p>

                <div className="bg-[#3087ff]/15 border border-[#3087ff] p-3 space-y-1.5 text-xs font-bold text-[#3087ff]">
                  <div>
                    <span className="text-[#3087ff]/75 font-normal">
                      Standard:{" "}
                    </span>
                    <span>{activeProjectModal.specs.standard}</span>
                  </div>
                  <div>
                    <span className="text-[#3087ff]/75 font-normal">
                      Metallurgy:{" "}
                    </span>
                    <span>{activeProjectModal.specs.metallurgy}</span>
                  </div>
                  <div>
                    <span className="text-[#3087ff]/75 font-normal">
                      Quantity:{" "}
                    </span>
                    <span>{activeProjectModal.specs.quantity}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="pt-4 border-t-2 border-[#3087ff] flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onAddToRfq(activeProjectModal.product);
                  setActiveProjectModal(null);
                }}
                className="flex-1 py-3 px-4 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-white font-black text-xs uppercase tracking-wider text-center border-2 border-[#3087ff] transition-all cursor-pointer"
              >
                + Add Project Materials to RFQ
              </button>

              <button
                type="button"
                onClick={() => {
                  onPreviewSubmittal(activeProjectModal.product);
                  setActiveProjectModal(null);
                }}
                className="flex-1 py-3 px-4 bg-white hover:bg-[#3087ff] text-[#3087ff] hover:text-white font-black text-xs uppercase tracking-wider text-center border-2 border-[#3087ff] transition-all cursor-pointer"
              >
                Download Submittal PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
