"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Copy,
  Download,
  FileCheck2,
  FileText,
  Filter,
  Layers,
  Plus,
  ShieldCheck,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

export interface DrainageSubvariant {
  id: string;
  catNumber: string;
  name: string;
  tag: string;
  sizeLabel: string;
  pipeFit: string;
  dimensions: {
    height: string;
    width: string;
    depth: string;
    weightLbs: number;
    flowArea: string;
  };
  material: string;
  coating: string;
  cleanoutType: string;
  trafficRating: string;
  standards: string;
  description: string;
  blueprintType: "trap" | "pipe-grate" | "trash-rack" | "spout";
}

export interface DrainageCategory {
  id: "catch-basin-traps" | "pipe-grates" | "trash-racks" | "spouts-boots";
  title: string;
  shortName: string;
  badge: string;
  cadFile: string;
  submittalFile: string;
  tagline: string;
  description: string;
  standards: string;
  subvariants: DrainageSubvariant[];
}

export const DRAINAGE_CATEGORIES: DrainageCategory[] = [
  {
    id: "catch-basin-traps",
    title: "Cast Iron Catch Basin Traps",
    shortName: "Catch Basin Traps",
    badge: "Gas & Siphon Traps",
    cadFile: "AQUA_CB_TRAPS.DWG",
    submittalFile: "SUBMITTAL_CATCH_BASIN_TRAPS.PDF",
    tagline:
      "Municipal Gas, Siphon & Oil Baffle Traps with Integral Cleanout Plugs",
    description:
      "Heavy cast iron water-seal and baffle traps mounted over catch basin outlet pipes. Traps floatable urban trash, petroleum sheen, and sewer gases inside municipal catch basins before stormwater enters downstream conveyance lines.",
    standards: "ASTM A48 Class 35B • ASTM A536 • AASHTO M306 Highway Proof",
    subvariants: [
      {
        id: "cbt-08",
        catNumber: "Cat. CBT-08",
        name: '8" Catch Basin Trap with Cleanout Plug',
        tag: '8" PIPE OUTLET',
        sizeLabel: '8" Nominal Outlet',
        pipeFit: '6" to 8" RCP / CMP / PVC Outlets',
        dimensions: {
          height: '14.50"',
          width: '12.00"',
          depth: '8.25"',
          weightLbs: 65,
          flowArea: "48.2 sq in (100% full bore)",
        },
        material: "ASTM A48 Class 35B Heavy Cast Iron",
        coating: "Asphaltic Dip per AWWA C104 / High-Build Bituminous Primer",
        cleanoutType: '3" NPT Brass Cleanout Screw Plug with Raised Square Nut',
        trafficRating: "AASHTO H-20 Heavy Highway Traffic Proof",
        standards: "ASTM A48 Class 35B • AASHTO M306 • AIS Certified",
        description:
          'Compact cast iron catch basin gas and siphon hood designed for 8" storm sewer outlet pipes. Features an integrated downward water-dip siphon skirt and an easy-access cleanout plug for maintenance rodding.',
        blueprintType: "trap",
      },
      {
        id: "cbt-12",
        catNumber: "Cat. CBT-12",
        name: '12" Standard Municipal Catch Basin Trap',
        tag: '12" MUNICIPAL STANDARD',
        sizeLabel: '12" Nominal Outlet',
        pipeFit: '10" to 12" Storm Sewer Pipes',
        dimensions: {
          height: '19.75"',
          width: '16.50"',
          depth: '11.50"',
          weightLbs: 115,
          flowArea: "110.8 sq in (Full Hydraulic Invert)",
        },
        material: "ASTM A48 Class 35B High-Tensile Iron",
        coating: "Heavy Asphalt Dip or Optional Hot-Dip Galvanized",
        cleanoutType:
          '4" Quick-Turn Bronze Siphon Cap with Stainless Retaining Chain',
        trafficRating: "AASHTO HS-20 & HS-25 Highway Proof",
        standards: "State DOT Approved • ASTM A48 • Buy America Ready",
        description:
          'High-capacity municipal stormwater gas hood engineered for 12" storm laterals. Keeps floatable street plastics, bottles, and floating oils trapped in the sump basin while discharging pristine subsurface storm flows.',
        blueprintType: "trap",
      },
      {
        id: "cbt-18",
        catNumber: "Cat. CBT-18",
        name: '18" Highway Inflow Catch Basin Hood',
        tag: '18" HIGH-FLOW INFLOW',
        sizeLabel: '18" Nominal Outlet',
        pipeFit: '15" to 18" RCP / Corrugated HDPE',
        dimensions: {
          height: '26.00"',
          width: '23.00"',
          depth: '15.50"',
          weightLbs: 185,
          flowArea: "248.5 sq in (High Velocity)",
        },
        material: "ASTM A536 Grade 65-45-12 Ductile Iron",
        coating: "High-Build Bituminous Marine Grade Enamel",
        cleanoutType:
          '6" Bolted Cast Iron Cleanout Port with SBR Neoprene Seal',
        trafficRating: "AASHTO HS-25 Airport & Highway Heavy Duty",
        standards: "AASHTO M306 • ASTM A536 • 100% Domestic Melt",
        description:
          "Heavy ductile iron anti-debris trap built for highway culvert basins and high-volume interchange storm structures. Dual mounting anchor ears bolt securely to round or square precast catch basin walls.",
        blueprintType: "trap",
      },
      {
        id: "cbt-24",
        catNumber: "Cat. CBT-24",
        name: '24" Heavy Municipal Siphon Trap',
        tag: '24" DEEP INVERT STORM HOOD',
        sizeLabel: '24" Nominal Outlet',
        pipeFit: '20" to 24" Main Line Culverts',
        dimensions: {
          height: '34.00"',
          width: '30.50"',
          depth: '20.00"',
          weightLbs: 290,
          flowArea: "441.2 sq in (Ultra High Volume)",
        },
        material: "ASTM A536 Ductile Iron / ASTM A48 Gray Iron",
        coating: "Double-Dip Asphaltic Protective Enamel",
        cleanoutType: '8" Manhole Rodding Port with Stainless T-Handle Latch',
        trafficRating: "FAA High Airport Taxiway / AASHTO HS-25",
        standards: "AASHTO M306 • ASTM A536 • USACE Heavy Spec",
        description:
          'Extra-large siphon trap hood engineered for 24" storm trunk lines. Equipped with internal vortex dampening baffles to minimize hydraulic turbulence while providing maximum debris holding capacity.',
        blueprintType: "trap",
      },
    ],
  },
  {
    id: "pipe-grates",
    title: "Culvert Pipe Grates & Safety Bar Grates",
    shortName: "Pipe Grates",
    badge: "Culvert Safety Grates",
    cadFile: "AQUA_PIPE_GRATES.DWG",
    submittalFile: "SUBMITTAL_CULVERT_PIPE_GRATES.PDF",
    tagline:
      "End-of-Pipe Safety Bar Grates for RCP, CMP, and Flared End Sections",
    description:
      "Heavy-duty galvanized bar grates and traversable safety pipe grates designed for circular and flared culvert ends. Prevents unauthorized entry, eliminates large animal and debris blockages, and provides highway roadside slope traversability.",
    standards:
      "ASTM A123 Hot-Dip Galvanized • AASHTO Roadside Safety • ASTM A36 / A536",
    subvariants: [
      {
        id: "pg-fes-18",
        catNumber: "Cat. PG-FES-18",
        name: '18" Flared End Section (FES) Bar Grate',
        tag: '18" FES HINGED GRATE',
        sizeLabel: '18" Flared End Pipe',
        pipeFit: '18" Concrete or Metal Flared End Sections',
        dimensions: {
          height: '24.00"',
          width: '28.00"',
          depth: '4.50"',
          weightLbs: 48,
          flowArea: "88% Clear Hydraulic Opening",
        },
        material: 'ASTM A36 Structural Carbon Steel Bars (1/2" x 2" Flat)',
        coating: "Hot-Dip Galvanized per ASTM A123 (3.9 mil minimum)",
        cleanoutType: "Heavy Top Hinge Pin with Tamper-Resistant Padlock Hasp",
        trafficRating: "State DOT Standard Roadside Drainage",
        standards: "ASTM A123 • AASHTO M180 • DOT Standard 604",
        description:
          'Hinged bar grate manufactured to clamp directly to standard 18" precast concrete flared end sections. Top hinges allow the grate to be swung upward for debris cleaning and maintenance rodding.',
        blueprintType: "pipe-grate",
      },
      {
        id: "pg-rnd-24",
        catNumber: "Cat. PG-RND-24",
        name: '24" Round Culvert Safety Bar Grate',
        tag: '24" CIRCULAR PIPE INSERT',
        sizeLabel: '24" Round Culvert',
        pipeFit: '24" RCP, CMP & Corrugated HDPE Pipes',
        dimensions: {
          height: '24.00" Dia',
          width: '24.00" Dia',
          depth: '8.00" Collar',
          weightLbs: 72,
          flowArea: '86% Clear Area (3" Bar Spacing)',
        },
        material: 'Heavy 5/8" Round Solid Steel Bars with Welded Outer Ring',
        coating: "Hot-Dip Galvanized per ASTM A123 or Black Bituminous",
        cleanoutType: "Internal Wedge-Lock Compression Fasteners",
        trafficRating: "AASHTO H-20 Wheel Load Rated",
        standards: "ASTM A123 • ASTM A36 • AASHTO Roadside Design",
        description:
          'Circular pipe end grate featuring 3" on-center round safety bars welded to an expandable retention collar. Easily slips into the bell or spigot of 24" storm culverts and locks rigidly in place.',
        blueprintType: "pipe-grate",
      },
      {
        id: "pg-slp-36",
        catNumber: "Cat. PG-SLP-36",
        name: '36" Highway Traversable Safety Slope Grate',
        tag: '36" 4:1 TRAVERSABLE SLOPE',
        sizeLabel: '36" Safety Sloped Culvert',
        pipeFit: '36" Highway Ditch Crossings (4:1 & 6:1 Slopes)',
        dimensions: {
          height: '42.00"',
          width: '52.00"',
          depth: '12.00"',
          weightLbs: 145,
          flowArea: "84% Clear Flow Area",
        },
        material: "Heavy-Gauge Structural Steel Tubing & Solid Cross-Bars",
        coating: "Hot-Dip Galvanized per ASTM A123",
        cleanoutType: "Removable Center Bar Section for Sediment Bucket Entry",
        trafficRating: "AASHTO Safety Clear Zone Traversable (4:1 / 6:1)",
        standards: "AASHTO Highway Safety Manual • DOT Cross-Drain Standard",
        description:
          "Traversable roadway safety pipe grate engineered to highway cross-drain specifications. Allows vehicles accidentally running off the road to safely traverse ditch culverts without hazardous wheel-trap drops.",
        blueprintType: "pipe-grate",
      },
      {
        id: "pg-ind-48",
        catNumber: "Cat. PG-IND-48",
        name: '48" Heavy Industrial Pipe Intake Grate',
        tag: '48" HEAVY INTAKE SCREEN',
        sizeLabel: '48" Large Diameter Culvert',
        pipeFit: '42" to 48" Reinforced Concrete Pipe Outfalls',
        dimensions: {
          height: '50.00"',
          width: '50.00"',
          depth: '10.00"',
          weightLbs: 230,
          flowArea: "85% Clear Hydraulic Intake",
        },
        material: '3/4" Solid High-Strength Round Bars & 3" Channel Frame',
        coating: "ASTM A123 Hot-Dip Galvanized or 304 Stainless",
        cleanoutType: "Dual Counterweighted Swing-Up Access Gates",
        trafficRating: "Heavy Industrial Floodwater & Hydraulic Surge",
        standards: "USACE Civil Works • ASTM A123 • AIS Compliant",
        description:
          'Industrial-grade 48" outfall safety grate designed to stop heavy logs, tree branches, and urban detritus. Includes dual counter-weighted hinged service doors for backhoe and excavator maintenance access.',
        blueprintType: "pipe-grate",
      },
    ],
  },
  {
    id: "trash-racks",
    title: "Stormwater Detention Basin Trash Racks",
    shortName: "Trash Racks",
    badge: "Detention Basin BMP",
    cadFile: "AQUA_TRASH_RACKS.DWG",
    submittalFile: "SUBMITTAL_DETENTION_TRASH_RACKS.PDF",
    tagline:
      "Anti-Vortex Baffles, Pyramid Screens & Riser Bar Grates for Stormwater Structures",
    description:
      "Engineered debris protection racks for retention/detention pond riser structures, dam spillways, and stormwater outlet control boxes. Prevents vortex swirl cavitation and protects bottom water-quality orifices from leaves, sticks, and debris.",
    standards:
      "ASTM A123 Hot-Dip Galvanized • ASTM A536 • USACE Stormwater BMP Criteria",
    subvariants: [
      {
        id: "tr-vort-36",
        catNumber: "Cat. TR-VORT-36",
        name: '36" Pyramidal Anti-Vortex Trash Rack',
        tag: '36" ANTI-VORTEX DOME',
        sizeLabel: '36" Riser Opening',
        pipeFit: '36" Precast Concrete Catch Basins & Risers',
        dimensions: {
          height: '18.00"',
          width: '38.00" Sq',
          depth: '38.00" Sq',
          weightLbs: 160,
          flowArea: "320% of Pipe Area (Non-Clogging)",
        },
        material: "ASTM A36 Heavy Structural Angle & Flat Bar",
        coating: "Hot-Dip Galvanized per ASTM A123 (minimum 4.0 mil)",
        cleanoutType: "Removable Anti-Vortex Apex Cap",
        trafficRating: "Stormwater Retention Basin Hydraulic Surge Proof",
        standards: "State Water Quality BMP • USACE TR-55 Hydraulic Manual",
        description:
          "Four-sided pyramid anti-vortex trash rack that sits atop stormwater riser structures. Its unique pyramidal slope sheds floating debris automatically while vertical vortex-breaking vanes prevent high-velocity whirlpool suction.",
        blueprintType: "trash-rack",
      },
      {
        id: "tr-inc-48",
        catNumber: "Cat. TR-INC-48",
        name: '48" Inclined Bar Screen Trash Rack',
        tag: '48" 3:1 INCLINED SCREEN',
        sizeLabel: '48" Spillway Channel',
        pipeFit: '48" Wide Rectangular Orifice / Weir Inlets',
        dimensions: {
          height: '36.00"',
          width: '48.00"',
          depth: '36.00" (at 45° angle)',
          weightLbs: 210,
          flowArea: "290% of Orifice Flow Area",
        },
        material: '1/2" x 2" Solid Structural Steel Flow-Tapered Bars',
        coating: "ASTM A123 Hot-Dip Galvanized / 304 Stainless Optional",
        cleanoutType: "Hand-Rake Tapered Deck for Swift Maintenance",
        trafficRating: "Municipal Detention Facility Heavy Inflow",
        standards: "EPA Stormwater Phase II BMP • ASTM A123 • Buy America",
        description:
          "Inclined bar screen set at a 45-degree angle to the approaching water current. Floating branches and leaves rise up the screen as water levels rise, preserving full open hydraulic area through the lower slots.",
        blueprintType: "trash-rack",
      },
      {
        id: "tr-orf-18",
        catNumber: "Cat. TR-ORF-18",
        name: '18" Low-Flow Orifice Debris Cage',
        tag: '18" WATER QUALITY CAGE',
        sizeLabel: '18" Orifice Plate',
        pipeFit: '2" to 12" Bottom Orifice Holes',
        dimensions: {
          height: '18.00"',
          width: '18.00"',
          depth: '14.00"',
          weightLbs: 85,
          flowArea: "450% of Bottom Orifice Area",
        },
        material: "304 Stainless Steel Perforated Screen & Galvanized Frame",
        coating: "Type 304 Stainless Steel Passivated & Galv Base Plate",
        cleanoutType: "Quick-Release Cam-Latch Inspection Dome",
        trafficRating: "Water Quality Extended Detention Protection",
        standards: "BMP Design Manual • ASTM A240 • 100% Domestic",
        description:
          'Protective debris enclosure designed to prevent mulch, plastic bags, and sediment from clogging small bottom drawdown orifices (2" to 12") in extended detention water quality ponds.',
        blueprintType: "trash-rack",
      },
      {
        id: "tr-weir-72",
        catNumber: "Cat. TR-WEIR-72",
        name: '72" Modular Weir Overflow Bar Rack',
        tag: '72" HIGH-CAPACITY WEIR',
        sizeLabel: '72" Broad-Crested Weir',
        pipeFit: '60" to 72" Riser Crests & Box Inlets',
        dimensions: {
          height: '24.00"',
          width: '72.00"',
          depth: '16.00"',
          weightLbs: 340,
          flowArea: "350% Effective Intake Capacity",
        },
        material: 'Heavy 5/8" Round Bar Grid with 4" Tubular Support Posts',
        coating: "Hot-Dip Galvanized per ASTM A123",
        cleanoutType: 'Independent 36" Modular Service Panels',
        trafficRating: "Major Municipal Dam & Flood Control Structures",
        standards: "USACE Standards • AASHTO • NRCS Pond Standard 378",
        description:
          "Modular multi-section weir overflow rack designed for broad-crested concrete spillways. Interlocking sections allow any perimeter length to be covered with high-impact debris protection.",
        blueprintType: "trash-rack",
      },
    ],
  },
  {
    id: "spouts-boots",
    title: "Cast Iron Downspout Boots & Scuppers",
    shortName: "Downspout Spouts",
    badge: "Architectural & Bridge",
    cadFile: "AQUA_DOWNSPOUT_BOOTS.DWG",
    submittalFile: "SUBMITTAL_DOWNSPOUT_SPOUTS.PDF",
    tagline:
      "Cast Iron Downspout Boots, Bridge Deck Scuppers & Parapet Overflow Spouts",
    description:
      "Heavy-duty cast iron conductor boots and parapet/bridge scuppers. Protects building facades, grade-level sidewalks, and highway bridges from high-velocity stormwater splash, vehicular impact, and soil erosion.",
    standards:
      "ASTM A48 Class 35B Heavy Gray Iron • ASME A112.6.4 • MasterSpec 077100",
    subvariants: [
      {
        id: "ds-off-46",
        catNumber: "Cat. DS-OFF-46",
        name: '4"x6" Offset Cast Iron Downspout Boot',
        tag: '4"x6" OFFSET WALL-HUGGING',
        sizeLabel: '4"x6" Rectangular Downspout',
        pipeFit: '4"x6" Leader to 6" Round Hub / PVC Storm Sewer',
        dimensions: {
          height: '36.00"',
          width: '8.50"',
          depth: '7.25" (2.5" wall offset)',
          weightLbs: 55,
          flowArea: "24.0 sq in (Full Conductor Flow)",
        },
        material: 'ASTM A48 Class 35B Heavy Cast Iron (minimum 3/8" wall)',
        coating: "Shop-Applied Anti-Corrosive Rust-Inhibitive Red Oxide Primer",
        cleanoutType:
          "Flush Brass Counter-Sunk Cleanout Plug with Neoprene Gasket",
        trafficRating: "Commercial Grade Pedestrian & Vehicular Impact Proof",
        standards: "ASTM A48 • ASME A112.6.4 • MasterSpec Section 077100",
        description:
          'Offset cast iron downspout boot designed to receive architectural 4"x6" sheet metal roof downspouts. The built-in 2.5" rear offset aligns flush with exterior brick foundations and discharges smoothly into underground storm pipe.',
        blueprintType: "spout",
      },
      {
        id: "ds-str-44",
        catNumber: "Cat. DS-STR-44",
        name: '4"x4" Straight Cast Iron Downspout Boot',
        tag: '4"x4" STRAIGHT IMPACT BOOT',
        sizeLabel: '4"x4" Conductor Leader',
        pipeFit: '4"x4" Sheet Metal to 4" Round Cast Iron Hub',
        dimensions: {
          height: '30.00"',
          width: '7.00"',
          depth: '6.50"',
          weightLbs: 42,
          flowArea: "16.0 sq in (Zero Backpressure)",
        },
        material: "ASTM A48 Heavy-Duty High-Tensile Cast Iron",
        coating: "Standard Shop Primer or Optional Black Powder Coat",
        cleanoutType: "Heavy Front-Access Cleanout Door with Stainless Screws",
        trafficRating: "High-Traffic School & Loading Dock Impact Rated",
        standards: "ASTM A48 Class 35B • AIS Compliant",
        description:
          "Rugged straight downspout transition boot providing indestructible protection against schoolyard lawnmowers, delivery hand-trucks, and vehicle bumpers. Built with integral wall mounting tabs for secure anchoring.",
        blueprintType: "spout",
      },
      {
        id: "sp-brg-08",
        catNumber: "Cat. SP-BRG-08",
        name: '8" Highway Bridge Deck Scupper Spout',
        tag: '8" BRIDGE DECK NOZZLE',
        sizeLabel: '8" Bridge Drain Spout',
        pipeFit: '8" Cast Iron or Steel Bridge Downspouts',
        dimensions: {
          height: '16.00"',
          width: '12.00"',
          depth: '14.50" (45° Deflector Nozzle)',
          weightLbs: 78,
          flowArea: "50.2 sq in (AASHTO High-Speed Deck Drainage)",
        },
        material: "ASTM A536 Ductile Iron or ASTM A48 Class 35B Gray Iron",
        coating: "Hot-Dip Galvanized or Asphaltic Coating per State DOT Spec",
        cleanoutType: "Full Diameter Downward Cleanout Throat",
        trafficRating: "AASHTO HS-25 Highway Bridge Proof",
        standards: "AASHTO Bridge Specifications • State DOT Standard Drawing",
        description:
          "Heavy-duty highway bridge drainage spout engineered to direct high-velocity deck runoff away from bridge piers and substructure concrete, preventing salt and de-icing chemical erosion.",
        blueprintType: "spout",
      },
      {
        id: "sp-par-12",
        catNumber: "Cat. SP-PAR-12",
        name: '12" Parapet Wall Cast Iron Overflow Scupper',
        tag: '12" PARAPET SCUPPER',
        sizeLabel: '12" Parapet Wall Opening',
        pipeFit: '12" Wide Parapet Wall Thru-Sleeve',
        dimensions: {
          height: '8.00"',
          width: '16.00" Flange',
          depth: '18.00" Wall Sleeve with 4" Drip Lip',
          weightLbs: 64,
          flowArea: "72.0 sq in (Emergency Roof Overflow)",
        },
        material: "ASTM A48 Class 35B Cast Iron",
        coating: "Corrosion-Resistant Bituminous Coating or Hot-Dip Galvanized",
        cleanoutType: "Open-Throat Visual Overflow Window",
        trafficRating: "Roof Drainage & Emergency Secondary Overflow",
        standards: "International Plumbing Code (IPC) • ASME A112.6.4",
        description:
          "Heavy cast iron parapet wall scupper with an extended anti-drip spout. Installed through exterior roof parapet walls to safely discharge emergency stormwater overflow away from the building envelope.",
        blueprintType: "spout",
      },
    ],
  },
];

interface DrainageSpecialtiesSectionProps {
  onAddToRfq?: (product: ProductItem) => void;
  onPreviewSubmittal?: (product: ProductItem) => void;
}

export const DrainageSpecialtiesSection: React.FC<
  DrainageSpecialtiesSectionProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const [activeSubvariantId, setActiveSubvariantId] =
    useState<string>("cbt-08");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [specSheetOpen, setSpecSheetOpen] = useState(false);

  // Active Category & Subvariant
  const activeCategory = DRAINAGE_CATEGORIES.find(
    (c) => c.id === selectedCategoryId,
  );

  const activeSubvariant =
    activeCategory?.subvariants.find((s) => s.id === activeSubvariantId) ||
    activeCategory?.subvariants[0] ||
    null;

  const handleOpenCategory = (
    catId: DrainageCategory["id"],
    subvariantId?: string,
  ) => {
    setSelectedCategoryId(catId);
    const cat = DRAINAGE_CATEGORIES.find((c) => c.id === catId);
    if (cat) {
      setActiveSubvariantId(subvariantId || cat.subvariants[0].id);
    }
  };

  const handleBackToAllCategories = () => {
    setSelectedCategoryId(null);
  };

  const handleAddSubvariantToQuote = (
    subvariant: DrainageSubvariant,
    cat: DrainageCategory,
  ) => {
    setAddedIds((prev) => ({ ...prev, [subvariant.id]: true }));

    const syntheticProduct: ProductItem = {
      id: subvariant.id,
      name: `${subvariant.name} (${subvariant.catNumber})`,
      category: "municipal-castings",
      categoryLabel: cat.title,
      standard: "ASTM A48",
      pressureRating: subvariant.trafficRating,
      jointType: "Gravity Flow Drop-In",
      diameterRange: subvariant.sizeLabel,
      material: subvariant.material,
      coating: subvariant.coating,
      description: subvariant.description,
      cadFile: cat.cadFile,
      submittalFile: cat.submittalFile,
      specs: {
        tensileStrength: subvariant.material,
        yieldStrength: subvariant.trafficRating,
        elongation: subvariant.dimensions.flowArea,
        wallThicknessClass: subvariant.pipeFit,
        standardBoltCount: subvariant.cleanoutType,
        torqueSpec: subvariant.standards,
      },
      keyFeatures: [
        `Flow Capacity: ${subvariant.dimensions.flowArea}`,
        `Weight: ${subvariant.dimensions.weightLbs} lbs • Fit: ${subvariant.pipeFit}`,
        `Cleanout: ${subvariant.cleanoutType}`,
        `Standards: ${subvariant.standards}`,
      ],
      imageUrl:
        cat.id === "catch-basin-traps"
          ? "/images/products/Drainage-Grates-Curb-Inlets-Feature.jpg"
          : cat.id === "pipe-grates"
            ? "/images/products/Trench-Grates.jpg"
            : cat.id === "trash-racks"
              ? "/images/our-images/trench-grates.png"
              : "/images/products/Cleanout-Monument-Box.jpg",
      aisCompliant: true,
      buyAmericaReady: true,
    };

    if (onAddToRfq) {
      onAddToRfq(syntheticProduct);
    }
  };

  const handlePreviewSubmittal = (
    subvariant: DrainageSubvariant,
    cat: DrainageCategory,
  ) => {
    const syntheticProduct: ProductItem = {
      id: subvariant.id,
      name: `${subvariant.name} (${subvariant.catNumber})`,
      category: "municipal-castings",
      categoryLabel: cat.title,
      standard: "ASTM A48",
      pressureRating: subvariant.trafficRating,
      jointType: "Gravity Flow Drop-In",
      diameterRange: subvariant.sizeLabel,
      material: subvariant.material,
      coating: subvariant.coating,
      description: subvariant.description,
      cadFile: cat.cadFile,
      submittalFile: cat.submittalFile,
      specs: {
        tensileStrength: subvariant.material,
        yieldStrength: subvariant.trafficRating,
        elongation: subvariant.dimensions.flowArea,
        wallThicknessClass: subvariant.pipeFit,
        standardBoltCount: subvariant.cleanoutType,
        torqueSpec: subvariant.standards,
      },
      keyFeatures: [
        `Flow Capacity: ${subvariant.dimensions.flowArea}`,
        `Weight: ${subvariant.dimensions.weightLbs} lbs • Fit: ${subvariant.pipeFit}`,
        `Cleanout: ${subvariant.cleanoutType}`,
        `Standards: ${subvariant.standards}`,
      ],
      imageUrl:
        cat.id === "catch-basin-traps"
          ? "/images/products/Drainage-Grates-Curb-Inlets-Feature.jpg"
          : cat.id === "pipe-grates"
            ? "/images/products/Trench-Grates.jpg"
            : cat.id === "trash-racks"
              ? "/images/our-images/trench-grates.png"
              : "/images/products/Cleanout-Monument-Box.jpg",
      aisCompliant: true,
      buyAmericaReady: true,
    };

    if (onPreviewSubmittal) {
      onPreviewSubmittal(syntheticProduct);
    }
  };

  const handleCopySpecs = (sub: DrainageSubvariant) => {
    const text = `AQUA INDUSTRIES DRAINAGE SPECIFICATION
Item: ${sub.name} (${sub.catNumber})
Fit / Range: ${sub.pipeFit}
Flow Area: ${sub.dimensions.flowArea}
Weight: ${sub.dimensions.weightLbs} lbs (H: ${sub.dimensions.height}, W: ${sub.dimensions.width}, D: ${sub.dimensions.depth})
Material: ${sub.material}
Coating: ${sub.coating}
Cleanout: ${sub.cleanoutType}
Rating: ${sub.trafficRating}
Standards: ${sub.standards}
100% Domestic Melt & Manufactured (AIS / Buy America Compliant)`;

    navigator.clipboard.writeText(text);
    setCopiedId(sub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="drainage-specialties"
      aria-label="Drainage Specialties: Catch Basin Traps, Pipe Grates, Trash Racks & Spouts"
      className="py-14 sm:py-20 bg-[#0082FC] text-white border-b-4 border-[#0082FC] relative overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#5FD4FD12_1px,transparent_1px),linear-gradient(to_bottom,#5FD4FD12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-black uppercase tracking-widest border border-white mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
            <span>AASHTO M306 • ASTM A48 / A536 • 100% DOMESTIC AIS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight text-white mb-3">
            Catch Basin Traps • Pipe Grates • Trash Racks • Spouts
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
            Engineering-grade municipal cast iron stormwater specialties, safety
            culvert grates, detention anti-vortex trash racks, and architectural
            cast iron downspout spouts. Built to DOT, USACE, and municipal
            waterworks specifications.
          </p>

          {/* Quick Specifications Toggle */}
          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={() => setSpecSheetOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#5FD4FD] text-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none border-2 border-white transition-all shadow-md cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>
                {specSheetOpen
                  ? "Hide Metallurgy & Hydraulic Sheet"
                  : "View Certified Standards & Metallurgy Sheet"}
              </span>
            </button>
          </div>
        </div>

        {/* Certified Metallurgy & Standards Sheet (Collapsible) */}
        {specSheetOpen && (
          <div className="mb-10 bg-white text-[#0082FC] border-4 border-[#5FD4FD] p-6 sm:p-8 shadow-2xl relative animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-[#0082FC] pb-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC]">
                  Official Foundry Technical Standard
                </span>
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0082FC] mt-1">
                  Drainage Castings & Fabricated Grates General Specification
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSpecSheetOpen(false)}
                className="px-3 py-1.5 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase border border-[#0082FC] cursor-pointer"
              >
                Close Sheet &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]">
                <span className="font-black uppercase text-[11px] text-[#0082FC] block mb-1">
                  Gray Iron Metallurgy
                </span>
                <p className="text-[12px] text-[#0082FC]/90">
                  ASTM A48 Class 35B Heavy Cast Iron, 35,000 PSI minimum tensile
                  strength, sound structure free of blowholes and porosity.
                </p>
              </div>
              <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]">
                <span className="font-black uppercase text-[11px] text-[#0082FC] block mb-1">
                  Ductile Iron Metallurgy
                </span>
                <p className="text-[12px] text-[#0082FC]/90">
                  ASTM A536 Grade 65-45-12, 65,000 PSI tensile, 45,000 PSI
                  yield, 12% elongation for heavy vehicular and airport impact
                  resilience.
                </p>
              </div>
              <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]">
                <span className="font-black uppercase text-[11px] text-[#0082FC] block mb-1">
                  Galvanizing Standard
                </span>
                <p className="text-[12px] text-[#0082FC]/90">
                  Hot-dip galvanized per ASTM A123 after fabrication, 3.9 mil
                  minimum zinc coating thickness for 50+ year corrosive soil
                  life.
                </p>
              </div>
              <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]">
                <span className="font-black uppercase text-[11px] text-[#0082FC] block mb-1">
                  AASHTO Traffic Proof
                </span>
                <p className="text-[12px] text-[#0082FC]/90">
                  Proof load tested to 40,000 lbs wheel load per AASHTO M306
                  §5.1 for heavy highway and highway ditch safety cross-drains.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 1: CLEAN FRONT VIEW (SHOWING 4 CATEGORIES ONLY) */}
        {!selectedCategoryId ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {DRAINAGE_CATEGORIES.map((cat) => {
              return (
                <div
                  key={cat.id}
                  className="bg-white border-4 border-[#5FD4FD] p-5 sm:p-6 flex flex-col justify-between shadow-2xl hover:border-white transition-all duration-300 text-[#0082FC] relative group hover:-translate-y-1"
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3 border-b-2 border-[#0082FC]/15 pb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-[#0082FC] text-white px-2 py-0.5 border border-[#0082FC]">
                        {cat.badge}
                      </span>
                      <span className="text-[10px] font-bold text-[#0082FC]/80 font-mono">
                        {cat.subvariants.length} SUBVARIANTS
                      </span>
                    </div>

                    {/* Category Blueprint Preview Vector */}
                    <div className="h-44 bg-[#5FD4FD]/10 border-2 border-[#5FD4FD] p-3 flex items-center justify-center mb-4 relative overflow-hidden group-hover:bg-[#5FD4FD]/20 transition-colors">
                      <DrainageBlueprintThumbnail type={cat.id} />
                      <span className="absolute bottom-1 right-2 text-[9px] font-mono font-black text-[#0082FC]/70 uppercase">
                        CAD SPEC READY
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0082FC] leading-tight mb-1">
                      {cat.title}
                    </h3>

                    <p className="text-[11px] font-bold text-[#0082FC]/80 uppercase tracking-wider mb-2">
                      {cat.tagline}
                    </p>

                    <p className="text-xs text-[#0082FC]/90 font-medium leading-relaxed mb-4 line-clamp-3">
                      {cat.description}
                    </p>

                    {/* Subvariant Angle / Model Preview Pills */}
                    <div className="border-t border-[#0082FC]/15 pt-3 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#0082FC]/70 block mb-1.5">
                        Available Sizes / Models:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cat.subvariants.map((sub) => (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleOpenCategory(cat.id, sub.id)}
                            className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#5FD4FD]/20 hover:bg-[#0082FC] hover:text-white text-[#0082FC] border border-[#5FD4FD] transition-colors cursor-pointer"
                          >
                            {sub.tag.split(" ")[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Main Action Button */}
                  <button
                    type="button"
                    onClick={() => handleOpenCategory(cat.id)}
                    className="w-full py-3 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase tracking-wider border-2 border-[#0082FC] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-auto"
                  >
                    <span>Explore {cat.shortName}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              );
            })}
          </div>
        ) : activeCategory && activeSubvariant ? (
          /* VIEW 2: DEDICATED CATEGORY & SUBVARIANT DRILLDOWN VIEW */
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Top Navigation Bar: Back Button & Category Details */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white text-[#0082FC] border-4 border-[#5FD4FD] p-4 shadow-xl">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleBackToAllCategories}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none transition-all cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                  <span>&larr; Back to All Categories</span>
                </button>

                <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-[#5FD4FD]/15 border border-[#5FD4FD] text-[11px] font-black uppercase text-[#0082FC]">
                  <Compass className="w-3.5 h-3.5 text-[#0082FC]" />
                  <span>Category: {activeCategory.title}</span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2 py-0.5 border border-[#0082FC]">
                  {activeCategory.badge}
                </span>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0082FC] mt-0.5">
                  {activeCategory.title}
                </h3>
              </div>
            </div>

            {/* Subvariant Option Selector Bar (Click Subvariant to View ONLY that Spec) */}
            <div className="bg-white text-[#0082FC] border-2 border-[#5FD4FD] p-3 sm:p-4 rounded-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                <div className="text-xs font-black uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
                  <Filter className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                  <span>Select Size / Model Variant:</span>
                </div>
                <span className="text-[10px] font-bold text-[#0082FC]/70 uppercase tracking-wider">
                  {activeCategory.subvariants.length} Subvariants Available
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeCategory.subvariants.map((sub) => {
                  const isActive = activeSubvariant.id === sub.id;
                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => setActiveSubvariantId(sub.id)}
                      className={`px-3 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:border-[#0082FC] hover:bg-[#5FD4FD]/10"
                      }`}
                    >
                      {isActive && (
                        <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                      )}
                      <span>
                        {sub.name.split(" ")[0]} {sub.tag.split(" ")[0]}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-1 py-0.2 border ${
                          isActive
                            ? "bg-white/20 border-white text-white"
                            : "bg-[#5FD4FD]/15 border-[#5FD4FD] text-[#0082FC]"
                        }`}
                      >
                        {sub.catNumber}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dedicated Active Subvariant Showcase Panel */}
            <div className="bg-white text-[#0082FC] border-4 border-[#0082FC] p-6 sm:p-8 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Technical SVG Blueprint Diagram */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full h-64 sm:h-72 flex items-center justify-center p-4 bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border-2 border-[#5FD4FD]">
                    <DrainageBlueprintIllustration
                      type={activeSubvariant.blueprintType}
                      tag={activeSubvariant.tag}
                      dimensions={activeSubvariant.dimensions}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between w-full text-xs font-bold text-[#0082FC]">
                    <span className="bg-[#0082FC] text-white px-2.5 py-0.5 border border-[#0082FC] uppercase text-[10px]">
                      {activeSubvariant.catNumber}
                    </span>
                    <span className="text-[11px] font-mono">
                      Weight: {activeSubvariant.dimensions.weightLbs} lbs
                    </span>
                  </div>

                  {/* CAD & BIM Downloads */}
                  <div className="w-full grid grid-cols-2 gap-2 mt-3">
                    <button
                      type="button"
                      onClick={() =>
                        handlePreviewSubmittal(activeSubvariant, activeCategory)
                      }
                      className="px-2.5 py-1.5 bg-[#5FD4FD]/15 hover:bg-[#0082FC] text-[#0082FC] hover:text-white border border-[#5FD4FD] text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 shrink-0" />
                      <span>CAD (.DWG)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        handlePreviewSubmittal(activeSubvariant, activeCategory)
                      }
                      className="px-2.5 py-1.5 bg-[#5FD4FD]/15 hover:bg-[#0082FC] text-[#0082FC] hover:text-white border border-[#5FD4FD] text-[10px] font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>Cut Sheet (.PDF)</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Specification Details & Commercial Actions */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-[#0082FC] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                        {activeSubvariant.tag}
                      </span>
                      <span className="bg-[#5FD4FD]/20 border border-[#0082FC] text-[#0082FC] px-2 py-0.5 text-[10px] font-black uppercase tracking-wider">
                        {activeSubvariant.sizeLabel}
                      </span>
                      <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                        {activeSubvariant.trafficRating.split(" ")[0]} CLASS
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC] leading-snug mb-1">
                      {activeSubvariant.name}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#0082FC]/90 font-medium leading-relaxed mb-4">
                      {activeSubvariant.description}
                    </p>

                    {/* Technical Specifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs border-y-2 border-[#0082FC]/20 py-3 mb-4">
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Pipe Fit & Diameter:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.pipeFit}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Hydraulic Flow Area:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.dimensions.flowArea}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Metallurgy Standard:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.material}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Protective Coating:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.coating}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Cleanout / Rodding Port:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.cleanoutType}
                        </span>
                      </div>
                      <div>
                        <span className="font-bold text-[#0082FC]/70 uppercase text-[10px] block">
                          Compliance & Proof Load:
                        </span>
                        <span className="font-black text-[#0082FC]">
                          {activeSubvariant.standards}
                        </span>
                      </div>
                    </div>

                    {/* Dimensional Specs Table */}
                    <div className="bg-[#5FD4FD]/10 border border-[#5FD4FD] p-2.5 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-[#0082FC]">
                      <span>Height: {activeSubvariant.dimensions.height}</span>
                      <span>Width: {activeSubvariant.dimensions.width}</span>
                      <span>Depth: {activeSubvariant.dimensions.depth}</span>
                      <span className="text-[#0082FC]">
                        Net Weight: {activeSubvariant.dimensions.weightLbs} lbs
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleAddSubvariantToQuote(
                          activeSubvariant,
                          activeCategory,
                        )
                      }
                      className={`flex-1 py-3 px-4 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        addedIds[activeSubvariant.id]
                          ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                          : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC]"
                      }`}
                    >
                      {addedIds[activeSubvariant.id] ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>Added to RFQ Quote</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                          <span>Add to Project RFQ</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handlePreviewSubmittal(activeSubvariant, activeCategory)
                      }
                      className="py-3 px-4 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Official Submittal PDF</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopySpecs(activeSubvariant)}
                      title="Copy engineering specifications"
                      className="py-3 px-3 bg-[#5FD4FD]/20 hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#5FD4FD] text-xs font-black uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      {copiedId === activeSubvariant.id ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3] text-[#0082FC]" />
                          <span className="text-[11px]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 shrink-0" />
                          <span className="text-[11px]">Copy Specs</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Dimensional Matrix Table */}
              <div className="mt-8 pt-6 border-t-2 border-[#0082FC]">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0082FC] mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0082FC]" />
                  <span>
                    Full {activeCategory.shortName} Dimensional & Schedule
                    Matrix
                  </span>
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0082FC] text-white uppercase text-[10px] tracking-wider font-black">
                        <th className="p-2 border border-[#0082FC]">Cat #</th>
                        <th className="p-2 border border-[#0082FC]">
                          Model / Size
                        </th>
                        <th className="p-2 border border-[#0082FC]">
                          Pipe Fit
                        </th>
                        <th className="p-2 border border-[#0082FC]">Height</th>
                        <th className="p-2 border border-[#0082FC]">Width</th>
                        <th className="p-2 border border-[#0082FC]">
                          Hydraulic Area
                        </th>
                        <th className="p-2 border border-[#0082FC]">Weight</th>
                        <th className="p-2 border border-[#0082FC] text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeCategory.subvariants.map((v) => {
                        const isCurrent = activeSubvariant.id === v.id;
                        return (
                          <tr
                            key={v.id}
                            className={`border-b border-[#5FD4FD]/30 transition-colors ${
                              isCurrent
                                ? "bg-[#5FD4FD]/20 font-bold"
                                : "hover:bg-[#5FD4FD]/10"
                            }`}
                          >
                            <td className="p-2 font-mono font-bold text-[#0082FC]">
                              {v.catNumber}
                            </td>
                            <td className="p-2 font-bold text-[#0082FC]">
                              {v.name}
                            </td>
                            <td className="p-2 text-[#0082FC]/90">
                              {v.pipeFit}
                            </td>
                            <td className="p-2 font-mono">
                              {v.dimensions.height}
                            </td>
                            <td className="p-2 font-mono">
                              {v.dimensions.width}
                            </td>
                            <td className="p-2 text-[#0082FC]">
                              {v.dimensions.flowArea}
                            </td>
                            <td className="p-2 font-mono font-bold text-[#0082FC]">
                              {v.dimensions.weightLbs} lbs
                            </td>
                            <td className="p-2 text-center">
                              <button
                                type="button"
                                onClick={() => setActiveSubvariantId(v.id)}
                                className={`px-2.5 py-1 text-[10px] font-black uppercase border transition-colors cursor-pointer ${
                                  isCurrent
                                    ? "bg-[#0082FC] text-white border-[#0082FC]"
                                    : "bg-white text-[#0082FC] border-[#0082FC] hover:bg-[#0082FC] hover:text-white"
                                }`}
                              >
                                {isCurrent ? "Active" : "Select"}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

/* SVG Technical Schematics for the 4 Categories */
function DrainageBlueprintThumbnail({ type }: { type: string }) {
  if (type === "catch-basin-traps") {
    return (
      <svg
        className="w-full h-full text-[#0082FC]"
        viewBox="0 0 160 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Catch Basin Trap Schematic</title>
        {/* Basin Wall */}
        <line x1="20" y1="10" x2="20" y2="110" strokeDasharray="3 3" />
        <line x1="140" y1="10" x2="140" y2="110" strokeDasharray="3 3" />
        {/* Trap Hood Body */}
        <path
          d="M 40 25 L 105 25 L 105 50 Q 105 85 75 85 L 50 85 Q 40 85 40 70 Z"
          fill="#5FD4FD"
          fillOpacity="0.25"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        {/* Cleanout Plug */}
        <rect x="65" y="15" width="22" height="10" fill="#0082FC" />
        <line x1="76" y1="10" x2="76" y2="15" strokeWidth="2" />
        {/* Outlet Pipe */}
        <rect
          x="105"
          y="35"
          width="35"
          height="30"
          stroke="#0082FC"
          strokeWidth="2"
          fill="#5FD4FD"
          fillOpacity="0.1"
        />
        {/* Water Flow Arrow */}
        <path
          d="M 50 100 Q 55 70 85 70 L 125 50"
          stroke="#0082FC"
          strokeWidth="2"
          strokeDasharray="2 2"
        />
        <polygon points="128,48 120,46 123,54" fill="#0082FC" />
        <text
          x="80"
          y="108"
          textAnchor="middle"
          fontSize="8"
          fill="#0082FC"
          fontWeight="bold"
        >
          SIPHON WATER SEAL
        </text>
      </svg>
    );
  }

  if (type === "pipe-grates") {
    return (
      <svg
        className="w-full h-full text-[#0082FC]"
        viewBox="0 0 160 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Pipe Grate Schematic</title>
        {/* Pipe Outer Ring / Flared Edge */}
        <ellipse
          cx="80"
          cy="60"
          rx="55"
          ry="45"
          stroke="#0082FC"
          strokeWidth="3"
          fill="#5FD4FD"
          fillOpacity="0.15"
        />
        {/* Vertical Bars */}
        <line
          x1="45"
          y1="32"
          x2="45"
          y2="88"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        <line
          x1="62"
          y1="20"
          x2="62"
          y2="100"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        <line
          x1="80"
          y1="15"
          x2="80"
          y2="105"
          stroke="#0082FC"
          strokeWidth="3"
        />
        <line
          x1="98"
          y1="20"
          x2="98"
          y2="100"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        <line
          x1="115"
          y1="32"
          x2="115"
          y2="88"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        {/* Top Hinge Assembly */}
        <rect x="70" y="8" width="20" height="7" fill="#0082FC" />
        <circle cx="80" cy="11" r="2.5" fill="white" />
        {/* Bottom Padlock Tab */}
        <rect x="75" y="105" width="10" height="6" fill="#0082FC" />
        <text
          x="80"
          y="118"
          textAnchor="middle"
          fontSize="8"
          fill="#0082FC"
          fontWeight="bold"
        >
          GALV SAFETY BAR GRATE
        </text>
      </svg>
    );
  }

  if (type === "trash-racks") {
    return (
      <svg
        className="w-full h-full text-[#0082FC]"
        viewBox="0 0 160 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <title>Trash Rack Schematic</title>
        {/* Riser Lip Base */}
        <rect
          x="25"
          y="85"
          width="110"
          height="15"
          fill="#5FD4FD"
          fillOpacity="0.2"
          stroke="#0082FC"
          strokeWidth="2"
        />
        {/* Pyramidal / Anti-Vortex Slope */}
        <path
          d="M 25 85 L 80 20 L 135 85 Z"
          fill="#5FD4FD"
          fillOpacity="0.1"
          stroke="#0082FC"
          strokeWidth="2.5"
        />
        <line
          x1="80"
          y1="20"
          x2="80"
          y2="85"
          stroke="#0082FC"
          strokeWidth="2"
        />
        <line
          x1="45"
          y1="85"
          x2="80"
          y2="20"
          stroke="#0082FC"
          strokeWidth="1.5"
        />
        <line
          x1="62"
          y1="85"
          x2="80"
          y2="20"
          stroke="#0082FC"
          strokeWidth="1.5"
        />
        <line
          x1="98"
          y1="85"
          x2="80"
          y2="20"
          stroke="#0082FC"
          strokeWidth="1.5"
        />
        <line
          x1="115"
          y1="85"
          x2="80"
          y2="20"
          stroke="#0082FC"
          strokeWidth="1.5"
        />
        {/* Anti Vortex Apex Vanes */}
        <polygon points="80,12 85,20 75,20" fill="#0082FC" />
        <text
          x="80"
          y="114"
          textAnchor="middle"
          fontSize="8"
          fill="#0082FC"
          fontWeight="bold"
        >
          ANTI-VORTEX RISER DOME
        </text>
      </svg>
    );
  }

  // spouts-boots
  return (
    <svg
      className="w-full h-full text-[#0082FC]"
      viewBox="0 0 160 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <title>Downspout Boot Schematic</title>
      {/* Wall Line */}
      <line x1="40" y1="10" x2="40" y2="110" strokeDasharray="3 3" />
      {/* Cast Iron Boot Outline */}
      <path
        d="M 50 15 L 75 15 L 75 55 Q 75 85 110 85 L 125 85 L 125 105 L 85 105 Q 50 105 50 70 Z"
        fill="#5FD4FD"
        fillOpacity="0.25"
        stroke="#0082FC"
        strokeWidth="2.5"
      />
      {/* Cleanout Plate */}
      <circle
        cx="62"
        cy="50"
        r="8"
        fill="white"
        stroke="#0082FC"
        strokeWidth="2"
      />
      <line x1="62" y1="46" x2="62" y2="54" stroke="#0082FC" strokeWidth="2" />
      <line x1="58" y1="50" x2="66" y2="50" stroke="#0082FC" strokeWidth="2" />
      {/* Wall Bracket */}
      <rect x="42" y="25" width="10" height="8" fill="#0082FC" />
      <rect x="42" y="80" width="10" height="8" fill="#0082FC" />
      {/* Downspout entering top */}
      <line x1="55" y1="5" x2="55" y2="15" stroke="#0082FC" strokeWidth="2" />
      <line x1="70" y1="5" x2="70" y2="15" stroke="#0082FC" strokeWidth="2" />
      <text
        x="95"
        y="118"
        textAnchor="middle"
        fontSize="8"
        fill="#0082FC"
        fontWeight="bold"
      >
        OFFSET DOWNSPOUT BOOT
      </text>
    </svg>
  );
}

/* Detailed Technical Blueprint Illustration per Selected Item */
function DrainageBlueprintIllustration({
  type,
  tag,
  dimensions,
}: {
  type: "trap" | "pipe-grate" | "trash-rack" | "spout";
  tag: string;
  dimensions: DrainageSubvariant["dimensions"];
}) {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {type === "trap" && (
        <svg
          className="w-full max-h-56 text-[#0082FC]"
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Catch Basin Trap Engineering Blueprint</title>
          {/* Catch Basin Precast Wall */}
          <rect
            x="15"
            y="15"
            width="25"
            height="150"
            fill="#5FD4FD"
            fillOpacity="0.1"
            stroke="#0082FC"
            strokeDasharray="4 4"
          />
          <text
            x="27"
            y="90"
            fontSize="8"
            fill="#0082FC"
            transform="rotate(-90 27 90)"
          >
            PRECAST WALL
          </text>

          {/* Siphon Hood Body */}
          <path
            d="M 50 35 L 155 35 L 155 70 Q 155 125 105 125 L 70 125 Q 50 125 50 95 Z"
            fill="#5FD4FD"
            fillOpacity="0.25"
            stroke="#0082FC"
            strokeWidth="3"
          />

          {/* Top Cleanout Cap Assembly */}
          <rect
            x="85"
            y="20"
            width="35"
            height="15"
            fill="#0082FC"
            stroke="#0082FC"
          />
          <rect x="96" y="12" width="13" height="8" fill="#5FD4FD" />
          <text
            x="102"
            y="18"
            fontSize="6"
            fill="#0082FC"
            textAnchor="middle"
            fontWeight="bold"
          >
            ROD
          </text>

          {/* Outlet Pipe Spigot */}
          <rect
            x="155"
            y="48"
            width="65"
            height="45"
            fill="#5FD4FD"
            fillOpacity="0.15"
            stroke="#0082FC"
            strokeWidth="2.5"
          />
          <line
            x1="220"
            y1="42"
            x2="220"
            y2="99"
            stroke="#0082FC"
            strokeWidth="2"
          />

          {/* Water Siphon Line */}
          <path
            d="M 45 145 C 75 145, 80 105, 120 105 L 195 70"
            stroke="#0082FC"
            strokeWidth="2.5"
            strokeDasharray="3 3"
          />
          <polygon points="198,68 188,66 192,75" fill="#0082FC" />

          {/* Dimension Annotations */}
          <line
            x1="50"
            y1="170"
            x2="155"
            y2="170"
            stroke="#0082FC"
            strokeWidth="1"
          />
          <text
            x="102"
            y="166"
            fontSize="8"
            fill="#0082FC"
            textAnchor="middle"
            fontWeight="bold"
          >
            WIDTH: {dimensions.width}
          </text>

          <line
            x1="230"
            y1="35"
            x2="230"
            y2="125"
            stroke="#0082FC"
            strokeWidth="1"
          />
          <text
            x="233"
            y="85"
            fontSize="8"
            fill="#0082FC"
            transform="rotate(90 233 85)"
          >
            HT: {dimensions.height}
          </text>
        </svg>
      )}

      {type === "pipe-grate" && (
        <svg
          className="w-full max-h-56 text-[#0082FC]"
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Pipe Grate Engineering Blueprint</title>
          {/* Concrete Pipe Headwall Bevel */}
          <path
            d="M 30 20 L 210 20 L 190 155 L 50 155 Z"
            fill="#5FD4FD"
            fillOpacity="0.1"
            stroke="#0082FC"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Round Grate Outer Ring */}
          <circle
            cx="120"
            cy="90"
            r="60"
            stroke="#0082FC"
            strokeWidth="3.5"
            fill="#5FD4FD"
            fillOpacity="0.2"
          />

          {/* Vertical Heavy Bar Screen */}
          <line
            x1="80"
            y1="52"
            x2="80"
            y2="128"
            stroke="#0082FC"
            strokeWidth="3"
          />
          <line
            x1="95"
            y1="38"
            x2="95"
            y2="142"
            stroke="#0082FC"
            strokeWidth="3"
          />
          <line
            x1="110"
            y1="32"
            x2="110"
            y2="148"
            stroke="#0082FC"
            strokeWidth="3.5"
          />
          <line
            x1="125"
            y1="31"
            x2="125"
            y2="149"
            stroke="#0082FC"
            strokeWidth="3.5"
          />
          <line
            x1="140"
            y1="33"
            x2="140"
            y2="147"
            stroke="#0082FC"
            strokeWidth="3"
          />
          <line
            x1="155"
            y1="42"
            x2="155"
            y2="138"
            stroke="#0082FC"
            strokeWidth="3"
          />

          {/* Top Hinge Assembly */}
          <rect x="105" y="24" width="30" height="9" fill="#0082FC" />
          <circle cx="120" cy="28.5" r="3" fill="white" />

          {/* Bottom Security Latch */}
          <rect x="112" y="148" width="16" height="8" fill="#0082FC" />

          {/* Dimension Line */}
          <line
            x1="60"
            y1="172"
            x2="180"
            y2="172"
            stroke="#0082FC"
            strokeWidth="1"
          />
          <text
            x="120"
            y="168"
            fontSize="8"
            fill="#0082FC"
            textAnchor="middle"
            fontWeight="bold"
          >
            DIA: {dimensions.width}
          </text>
        </svg>
      )}

      {type === "trash-rack" && (
        <svg
          className="w-full max-h-56 text-[#0082FC]"
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Trash Rack Engineering Blueprint</title>
          {/* Precast Concrete Basin Riser Ring */}
          <ellipse
            cx="120"
            cy="135"
            rx="85"
            ry="25"
            fill="#5FD4FD"
            fillOpacity="0.2"
            stroke="#0082FC"
            strokeWidth="3"
          />

          {/* Pyramidal Screen Apex */}
          <path
            d="M 40 135 L 120 30 L 200 135 Z"
            fill="#5FD4FD"
            fillOpacity="0.15"
            stroke="#0082FC"
            strokeWidth="3"
          />

          {/* Center Spine & Diagonal Shed Bars */}
          <line
            x1="120"
            y1="30"
            x2="120"
            y2="145"
            stroke="#0082FC"
            strokeWidth="3"
          />
          <line
            x1="65"
            y1="135"
            x2="120"
            y2="30"
            stroke="#0082FC"
            strokeWidth="2"
          />
          <line
            x1="90"
            y1="135"
            x2="120"
            y2="30"
            stroke="#0082FC"
            strokeWidth="2"
          />
          <line
            x1="150"
            y1="135"
            x2="120"
            y2="30"
            stroke="#0082FC"
            strokeWidth="2"
          />
          <line
            x1="175"
            y1="135"
            x2="120"
            y2="30"
            stroke="#0082FC"
            strokeWidth="2"
          />

          {/* Anti-Vortex Fin Top */}
          <polygon points="120,18 128,30 112,30" fill="#0082FC" />

          {/* Dimension Tag */}
          <text
            x="120"
            y="172"
            fontSize="8"
            fill="#0082FC"
            textAnchor="middle"
            fontWeight="bold"
          >
            RISER SPAN: {dimensions.width} • HT: {dimensions.height}
          </text>
        </svg>
      )}

      {type === "spout" && (
        <svg
          className="w-full max-h-56 text-[#0082FC]"
          viewBox="0 0 240 180"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <title>Downspout Boot Engineering Blueprint</title>
          {/* Building Brick Wall Line */}
          <line
            x1="60"
            y1="10"
            x2="60"
            y2="165"
            stroke="#0082FC"
            strokeDasharray="3 3"
          />
          <text
            x="45"
            y="80"
            fontSize="8"
            fill="#0082FC"
            transform="rotate(-90 45 80)"
          >
            FACADE WALL
          </text>

          {/* Cast Iron Boot Shell */}
          <path
            d="M 75 25 L 115 25 L 115 80 Q 115 125 160 125 L 185 125 L 185 155 L 130 155 Q 75 155 75 105 Z"
            fill="#5FD4FD"
            fillOpacity="0.25"
            stroke="#0082FC"
            strokeWidth="3.5"
          />

          {/* Wall Mounting Lugs */}
          <rect x="62" y="38" width="14" height="12" fill="#0082FC" />
          <circle cx="68" cy="44" r="2.5" fill="white" />
          <rect x="62" y="115" width="14" height="12" fill="#0082FC" />
          <circle cx="68" cy="121" r="2.5" fill="white" />

          {/* Cleanout Inspection Cover */}
          <circle
            cx="95"
            cy="75"
            r="13"
            fill="white"
            stroke="#0082FC"
            strokeWidth="2.5"
          />
          <line
            x1="95"
            y1="68"
            x2="95"
            y2="82"
            stroke="#0082FC"
            strokeWidth="2.5"
          />
          <line
            x1="88"
            y1="75"
            x2="102"
            y2="75"
            stroke="#0082FC"
            strokeWidth="2.5"
          />

          {/* Waterflow Arrow Through Shoe */}
          <path
            d="M 95 35 L 95 75 Q 95 140 170 140"
            stroke="#0082FC"
            strokeWidth="2"
            strokeDasharray="3 3"
          />
          <polygon points="175,140 167,136 167,144" fill="#0082FC" />

          {/* Dimensions */}
          <line
            x1="205"
            y1="25"
            x2="205"
            y2="155"
            stroke="#0082FC"
            strokeWidth="1"
          />
          <text
            x="210"
            y="95"
            fontSize="8"
            fill="#0082FC"
            transform="rotate(90 210 95)"
          >
            HT: {dimensions.height}
          </text>
        </svg>
      )}

      {/* Blueprint Subtitle */}
      <span className="text-[10px] font-mono font-bold text-[#0082FC] mt-2">
        {tag} • SCALE: 1:10 CIVIL BLUEPRINT
      </span>
    </div>
  );
}
