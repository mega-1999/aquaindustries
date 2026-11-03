"use client";

import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  Copy,
  FileCheck2,
  FileText,
  Filter,
  Layers,
  Plus,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";
import type { ProductItem } from "../../types";

interface MechanicalJointFittingsScheduleProps {
  onAddToRfq: (product: ProductItem) => void;
  onPreviewSubmittal: (product: ProductItem) => void;
}

export interface FittingItemData {
  id: string;
  name: string;
  catNumber: string;
  category:
    | "mj-mj-bends"
    | "mj-pe-bends"
    | "mj-fe-bends"
    | "tees-crosses"
    | "reducers-sleeves"
    | "swivel-hydrant";
  categoryLabel: string;
  sizeRange: string;
  pressureRating: string;
  deflection: string;
  description: string;
  jointType: string;
  fittingType: "bend" | "tee" | "cross" | "reducer" | "sleeve" | "swivel";
  angle?: string;
  standards: string;
  imageUrl?: string;
}

export interface FittingFamily {
  id: string;
  categoryKey:
    | "mj-mj-bends"
    | "mj-pe-bends"
    | "mj-fe-bends"
    | "tees-crosses"
    | "reducers-sleeves"
    | "swivel-hydrant";
  title: string;
  subtitle: string;
  shortName: string;
  tag: string;
  description: string;
  subvariantTypeLabel: string;
  sampleAngles: { label: string; subvariantId: string }[];
  defaultSubvariantId: string;
  iconType: "bend" | "tee" | "cross" | "reducer" | "sleeve" | "swivel";
}

export const FITTINGS_SCHEDULE_DATA: FittingItemData[] = [
  // 1. MJ x MJ Bends
  {
    id: "mj-mj-bend-90",
    name: "MJ x MJ 90° Bends (1/4 Bend)",
    catNumber: "Cat. 14 / 16",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '2" - 64"',
    pressureRating: '350 PSI (2"-24") / 250 PSI (30"-48")',
    deflection: '8° (2"-4") down to 2° (30"-64")',
    description:
      "Right-angle directional elbow for ductile iron water mains. Twin mechanical joint bells provide flexible, restrained joint deflection and watertight sealing.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "90°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-90.png",
  },
  {
    id: "mj-mj-bend-60",
    name: "MJ x MJ 60° Bends (1/6 Bend)",
    catNumber: "Cat. 60-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '3" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '7° (6") down to 3° (18"-24")',
    description:
      "Precision 60-degree trajectory offset designed to navigate crowded underground utility corridors, storm drain crossings, and urban easements.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "60°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-60.png",
  },
  {
    id: "mj-mj-bend-45",
    name: "MJ x MJ 45° Bends (1/8 Bend)",
    catNumber: "Cat. 45-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '2" - 48"',
    pressureRating: '350 PSI (2"-24") / 250 PSI (30"-48")',
    deflection: '8° (2"-4") down to 2° (30"-48")',
    description:
      "The American waterworks standard for moderate pipeline redirection, curved roadways, and trench elevation step-downs with minimal hydraulic head loss.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "45°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-45.png",
  },
  {
    id: "mj-mj-bend-30",
    name: "MJ x MJ 30° Bends (1/12 Bend)",
    catNumber: "Cat. 30-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '3" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '5° (8"-12") / 3° (18"-24")',
    description:
      "Shallow deflection bend engineered for curved street profiles, sewer bypass corridors, and gradual vertical grade corrections.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "30°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-30.png",
  },
  {
    id: "mj-mj-bend-22-5",
    name: "MJ x MJ 22.5° Bends (1/16 Bend)",
    catNumber: "Cat. 22-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '2" - 48"',
    pressureRating: '350 PSI (2"-24") / 250 PSI (30"-48")',
    deflection: '8° (2"-4") down to 2° (30"-48")',
    description:
      "Low-turbulence 22.5-degree alignment bend reducing surge thrust forces while gently sweeping water distribution lines around underground obstacles.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "22.5°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-22-5.png",
  },
  {
    id: "mj-mj-bend-11-25",
    name: "MJ x MJ 11.25° Bends (1/32 Bend)",
    catNumber: "Cat. 11-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '2" - 48"',
    pressureRating: '350 PSI (2"-24") / 250 PSI (30"-48")',
    deflection: '8° (2"-4") down to 2° (30"-48")',
    description:
      "Subtle deflection bend ideal for natural road crown alignment, long-radius curves, and municipal right-of-way easement contours.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "11.25°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-11-25.png",
  },
  {
    id: "mj-mj-bend-5-625",
    name: "MJ x MJ 5.625° Bends (1/64 Bend)",
    catNumber: "Cat. 5-MJ",
    category: "mj-mj-bends",
    categoryLabel: "MJ x MJ Bends",
    sizeRange: '3" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '5° (8"-12") / 3° (18"-24")',
    description:
      "Micro-deflection bend for long-haul transmission lines and high-velocity trunk mains requiring precise grade adjustments with zero turbulence.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "bend",
    angle: "5.625°",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-bend-5-625.png",
  },

  // 2. MJ x PE Bends (Bell x Plain End)
  {
    id: "mj-pe-bend-90",
    name: "MJ x PE 90° Bends (1/4 Bend)",
    catNumber: "Cat. 90-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '3" - 36"',
    pressureRating: '350 PSI (3"-24") / 250 PSI (30"-36")',
    deflection: '7° (6") down to 2° (30"-36")',
    description:
      "Mechanical joint bell on one end with beveled plain end (spigot) on the other. Plugs directly into valves or pipe bells, eliminating extra spool cuts.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "90°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-90.png",
  },
  {
    id: "mj-pe-bend-60",
    name: "MJ x PE 60° Bends (1/6 Bend)",
    catNumber: "Cat. 60-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '4" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '7° (6") / 5° (8"-12")',
    description:
      "Direct-insert 60° bell-and-spigot fitting providing streamlined utility bypass with half the joints of a standard spool setup.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "60°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-60.png",
  },
  {
    id: "mj-pe-bend-45",
    name: "MJ x PE 45° Bends (1/8 Bend)",
    catNumber: "Cat. 45-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '3" - 36"',
    pressureRating: '350 PSI (3"-24") / 250 PSI (30"-36")',
    deflection: '7° (6") down to 2° (30"-36")',
    description:
      "The premier valve-to-fitting tie-in bend. Eliminates intermediate pipe nipples when offsetting distribution lines into road trenches.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "45°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-45.png",
  },
  {
    id: "mj-pe-bend-30",
    name: "MJ x PE 30° Bends (1/12 Bend)",
    catNumber: "Cat. 30-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '4" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '5° (8"-12") / 3° (18"-24")',
    description:
      "30° plain-end fitting allowing direct push-on connection into Tyton or mechanical joint pipe bells with calibrated insertion depth.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "30°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-30.png",
  },
  {
    id: "mj-pe-bend-22-5",
    name: "MJ x PE 22.5° Bends (1/16 Bend)",
    catNumber: "Cat. 22-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '3" - 36"',
    pressureRating: '350 PSI (3"-24") / 250 PSI (30"-36")',
    deflection: '7° (6") down to 2° (30"-36")',
    description:
      "Low-angle spigot-bell fitting optimized for tie-ins to pre-installed water mains and deep storm sewer crossings.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "22.5°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-22-5.png",
  },
  {
    id: "mj-pe-bend-11-25",
    name: "MJ x PE 11.25° Bends (1/32 Bend)",
    catNumber: "Cat. 11-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '3" - 36"',
    pressureRating: '350 PSI (3"-24") / 250 PSI (30"-36")',
    deflection: '7° (6") down to 2° (30"-36")',
    description:
      "Gradual alignment plain-end bend used to step pipelines over culverts and bridge approaches without field pipe cutting.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "11.25°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-11-25.png",
  },
  {
    id: "mj-pe-bend-5-625",
    name: "MJ x PE 5.625° Bends (1/64 Bend)",
    catNumber: "Cat. 5-PE",
    category: "mj-pe-bends",
    categoryLabel: "MJ x PE Bends",
    sizeRange: '4" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: '5° (8"-12") / 3° (18"-24")',
    description:
      "Micro-deflection plain-end fitting facilitating continuous curve laying in tight highway rights-of-way.",
    jointType: "Mechanical Joint x Plain End (MJ x PE)",
    fittingType: "bend",
    angle: "5.625°",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-bend-5-625.png",
  },

  // 3. MJ x FE Bends (Bell x Class 125 Flange)
  {
    id: "mj-fe-bend-90",
    name: "MJ x FE 90° Bends (1/4 Bend)",
    catNumber: "Cat. 90-FE",
    category: "mj-fe-bends",
    categoryLabel: "MJ x FE Bends",
    sizeRange: '3" - 36"',
    pressureRating: "250 PSI / Class 125 Drilling",
    deflection: '7° (6") on MJ Bell',
    description:
      "Transitions underground mechanical joint line directly into an above-grade meter vault, backflow enclosure, or flanged gate valve.",
    jointType: "Mechanical Joint x Flanged (MJ x FE)",
    fittingType: "bend",
    angle: "90°",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-bend-90.png",
  },
  {
    id: "mj-fe-bend-45",
    name: "MJ x FE 45° Bends (1/8 Bend)",
    catNumber: "Cat. 45-FE",
    category: "mj-fe-bends",
    categoryLabel: "MJ x FE Bends",
    sizeRange: '3" - 24"',
    pressureRating: "250 PSI / Class 125 Drilling",
    deflection: '7° (6") on MJ Bell',
    description:
      "45° flanged transition fitting mating underground pipe runs with angled station piping, treatment skids, or deep booster stations.",
    jointType: "Mechanical Joint x Flanged (MJ x FE)",
    fittingType: "bend",
    angle: "45°",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-bend-45.png",
  },
  {
    id: "mj-fe-bend-22-5",
    name: "MJ x FE 22.5° Bends (1/16 Bend)",
    catNumber: "Cat. 22-FE",
    category: "mj-fe-bends",
    categoryLabel: "MJ x FE Bends",
    sizeRange: '4" - 24"',
    pressureRating: "250 PSI / Class 125 Drilling",
    deflection: '5° (8"-12") on MJ Bell',
    description:
      "Flange-to-MJ interface bend engineered for water treatment plant intake manifolds and pressure-reducing valve vaults.",
    jointType: "Mechanical Joint x Flanged (MJ x FE)",
    fittingType: "bend",
    angle: "22.5°",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-bend-22-5.png",
  },
  {
    id: "mj-fe-bend-11-25",
    name: "MJ x FE 11.25° Bends (1/32 Bend)",
    catNumber: "Cat. 11-FE",
    category: "mj-fe-bends",
    categoryLabel: "MJ x FE Bends",
    sizeRange: '4" - 24"',
    pressureRating: "250 PSI / Class 125 Drilling",
    deflection: '5° (8"-12") on MJ Bell',
    description:
      "Low-angle flanged adapter bend compensating for concrete vault wall angular misalignments during valve installation.",
    jointType: "Mechanical Joint x Flanged (MJ x FE)",
    fittingType: "bend",
    angle: "11.25°",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-bend-11-25.png",
  },

  // 4. Tees & Crosses
  {
    id: "mj-mj-tee",
    name: "MJ x MJ Standard & Reducing Tees",
    catNumber: "Cat. 1280",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '2" - 64" (All Branches)',
    pressureRating: '350 PSI (2"-24") / 250 PSI (30"-48")',
    deflection: "Standard C111 MJ Deflection",
    description:
      "Continuous mainline run with perpendicular mechanical joint branch for lateral distribution lines, fire services, and subdivision feeds.",
    jointType: "Mechanical Joint (MJ x MJ x MJ)",
    fittingType: "tee",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-mj-tee.png",
  },
  {
    id: "mj-fe-tee",
    name: "MJ x FE Tees (Flanged Branch)",
    catNumber: "Cat. 1301",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '3" - 36"',
    pressureRating: "250/350 PSI Working Pressure",
    deflection: "Standard C111 on Run Bells",
    description:
      "Mechanical joint run with Class 125 flanged branch. Purpose-built for direct bolt-up of resilient-wedge gate valves and hydrant feeder valves.",
    jointType: "Mechanical Joint x Flanged Branch",
    fittingType: "tee",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-tee.png",
  },
  {
    id: "mj-pe-mj-tee",
    name: "MJ x PE x MJ In-Line Tees",
    catNumber: "Cat. 497",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '4" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 Joint",
    description:
      "Specialty tee with plain-end run segment allowing direct slip-fit insertion into line sleeves and reducing trench excavation footprint.",
    jointType: "Mechanical Joint x Plain End Run",
    fittingType: "tee",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-pe-mj-tee.png",
  },
  {
    id: "mj-mj-tapped-tee-cross",
    name: "MJ x MJ Tapped Tees & Crosses (Tap)",
    catNumber: "Cat. TAP-TEE",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '3" - 24" (2" NPT Tap)',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 Joint",
    description:
      'Cast ductile iron tee with integral reinforced 2" NPT female threaded boss for air release valves, sample bibbs, or dual corporation stops.',
    jointType: 'Mechanical Joint w/ 2" NPT Tap',
    fittingType: "tee",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-tapped-tee-cross.png",
  },
  {
    id: "mj-mj-tangential-tee",
    name: "MJ x MJ Tangential Drainage Tees",
    catNumber: "Cat. TANG-TEE",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '4" - 36"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 Joint",
    description:
      "Bottom-flush branch tee designed for complete pipeline drainage, blow-offs, and sewer force main dewatering without sediment traps.",
    jointType: "Mechanical Joint Tangential",
    fittingType: "tee",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-tangential-tee.png",
  },
  {
    id: "mj-mj-cross",
    name: "MJ x MJ 4-Way Crosses",
    catNumber: "Cat. 1255",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '4" - 36"',
    pressureRating: '350 PSI (4"-24") / 250 PSI (30"-36")',
    deflection: "Standard C111 Joint",
    description:
      "Four-way mechanical joint manifold fitting distributing municipal potable water simultaneously in four directions at street intersections.",
    jointType: "Mechanical Joint (4x MJ)",
    fittingType: "cross",
    standards: "AWWA C153 / ANSI A21.53",
    imageUrl: "/images/fittings/mj-mj-cross.png",
  },
  {
    id: "mj-fe-cross",
    name: "MJ x FE Crosses (Flanged Branches)",
    catNumber: "Cat. 1291",
    category: "tees-crosses",
    categoryLabel: "Tees & Crosses",
    sizeRange: '4" - 24"',
    pressureRating: "250 PSI Working Pressure",
    deflection: "Standard C111 on Run",
    description:
      "Four-way manifold cross featuring Class 125 flanged branches for valve vault headers, booster stations, and dual isolation valve banks.",
    jointType: "MJ Run x Flanged Branches",
    fittingType: "cross",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-cross.png",
  },

  // 5. Reducers, Offsets & Cutting-In Sleeves
  {
    id: "mj-mj-reducer",
    name: "MJ x MJ Concentric Reducers",
    catNumber: "Cat. 500",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '3"x2" to 48"x36"',
    pressureRating: '350 PSI (Up to 24") / 250 PSI (30"+)',
    deflection: "Standard C111 Joint",
    description:
      "Uniform conical diameter transition maintaining centered pipe alignment between differing nominal water main sizes with smooth laminar flow.",
    jointType: "Mechanical Joint (MJ x MJ)",
    fittingType: "reducer",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-mj-reducer.png",
  },
  {
    id: "seb-reducer",
    name: "SEB Reducers (Small End Bell)",
    catNumber: "Cat. 502",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '4"x3" to 24"x16"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 on Small Bell",
    description:
      "Specialty reducer with mechanical joint bell on the smaller reduced diameter, saving fittings and fitting directly over the small pipe run.",
    jointType: "Small End Bell Reducer",
    fittingType: "reducer",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/seb-reducer.png",
  },
  {
    id: "leb-reducer",
    name: "LEB Reducers (Large End Bell)",
    catNumber: "Cat. 1317",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '4"x3" to 36"x24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 on Large Bell",
    description:
      "Large end bell design providing streamlined bell-fit for main line headers reducing down to smaller transmission branches.",
    jointType: "Large End Bell Reducer",
    fittingType: "reducer",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/leb-reducer.png",
  },
  {
    id: "mj-fe-reducer",
    name: "MJ x FE Flanged Reducers",
    catNumber: "Cat. 508",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '3"x2" to 30"x20"',
    pressureRating: "250 PSI / Class 125 Flange",
    deflection: "Standard C111 on MJ Bell",
    description:
      "Transitions pipe diameter while converting from underground mechanical joint distribution to ANSI Class 125 flanged meter/pump connections.",
    jointType: "Mechanical Joint x Flanged",
    fittingType: "reducer",
    standards: "AWWA C153 / C115 Class 125",
    imageUrl: "/images/fittings/mj-fe-reducer.png",
  },
  {
    id: "eccentric-reducer",
    name: "Eccentric Reducers (Flat-on-Top/Bottom)",
    catNumber: "Cat. 511",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '4"x3" to 24"x16"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 Joint",
    description:
      "Asymmetric flat-line reducer preventing air pocket entrapment in pumped lines (flat-on-top) or sediment buildup (flat-on-bottom).",
    jointType: "Mechanical Joint Eccentric",
    fittingType: "reducer",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/eccentric-reducer.png",
  },
  {
    id: "cutting-in-sleeve",
    name: "MJ x PE Cutting-In Sleeve w/ Oversize Gland",
    catNumber: "Cat. 1303",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '4" - 24"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Slip-fit adjustability",
    description:
      "Repair and retrofit sleeve designed to cut into existing in-service ductile iron or pit cast pipe to insert a new valve or tee with oversize gland.",
    jointType: "MJ x PE Cutting-In Sleeve",
    fittingType: "sleeve",
    standards: "AWWA C153 / AWWA C111",
    imageUrl: "/images/fittings/cutting-in-sleeve.png",
  },
  {
    id: "mj-offset",
    name: "MJ x MJ Line Offsets",
    catNumber: "Cat. 1332",
    category: "reducers-sleeves",
    categoryLabel: "Reducers & Sleeves",
    sizeRange: '4" - 24" (6" to 24" Throw)',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Standard C111 Joint",
    description:
      "Double-bend S-curve fitting that shifts pipeline centerlines vertically or horizontally to bypass unexpected underground obstructions.",
    jointType: "Mechanical Joint Offset",
    fittingType: "bend",
    standards: "AWWA C153 / ASTM A536",
    imageUrl: "/images/fittings/mj-offset.png",
  },

  // 6. Swivel Hydrant Fittings & Adapters
  {
    id: "swivel-swivel-hydrant-adapter",
    name: "Swivel x Swivel Hydrant Adapters",
    catNumber: "Cat. SW-ADPT",
    category: "swivel-hydrant",
    categoryLabel: "Swivel Hydrant",
    sizeRange: '4" - 8"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "360° Free Rotation",
    description:
      "Dual 360-degree rotating mechanical joint swivel ends enabling contractors to plumb and orient fire hydrants perfectly plumb regardless of trench angle.",
    jointType: "Swivel x Swivel Mechanical Joint",
    fittingType: "swivel",
    standards: "AWWA C153 / AWWA C111",
    imageUrl: "/images/fittings/swivel-swivel-hydrant-adapter.png",
  },
  {
    id: "swivel-swivel-hydrant-ell",
    name: "Swivel x Swivel Hydrant Ell w/ 2 Glands",
    catNumber: "Cat. SW-ELL-2G",
    category: "swivel-hydrant",
    categoryLabel: "Swivel Hydrant",
    sizeRange: '6" & 8"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "360° Rotational Positioning",
    description:
      "90-degree hydrant elbow equipped with twin swivel glands, locking the hydrant vertical while providing rotational positioning for pumper nozzles.",
    jointType: "Swivel x Swivel 90° Ell",
    fittingType: "swivel",
    standards: "AWWA C153 / AWWA C111",
    imageUrl: "/images/fittings/swivel-swivel-hydrant-ell.png",
  },
  {
    id: "swivel-solid-hydrant-adapter",
    name: "Swivel x Solid Hydrant Adapters",
    catNumber: "Cat. SW-SOLID",
    category: "swivel-hydrant",
    categoryLabel: "Swivel Hydrant",
    sizeRange: '4" - 8"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "360° Swivel on Hydrant End",
    description:
      "Rigid mechanical joint on one end with a 360-degree free-spinning swivel ring on the hydrant end for rigid line anchoring.",
    jointType: "Swivel x Solid MJ",
    fittingType: "swivel",
    standards: "AWWA C153 / AWWA C111",
    imageUrl: "/images/fittings/swivel-solid-hydrant-adapter.png",
  },
  {
    id: "swivel-glands",
    name: "Swivel Glands & Retainer Rings",
    catNumber: "Cat. SW-GLAND",
    category: "swivel-hydrant",
    categoryLabel: "Swivel Hydrant",
    sizeRange: '4" - 12"',
    pressureRating: "350 PSI Working Pressure",
    deflection: "Locking Ring Capture",
    description:
      "Ductile iron split and solid swivel locking rings with high-tensile T-bolts for secure fire hydrant mechanical joint installation.",
    jointType: "Swivel Retainer Gland",
    fittingType: "swivel",
    standards: "AWWA C111 / ASTM A536",
    imageUrl: "/images/fittings/swivel-glands.png",
  },
];

export const FITTING_FAMILIES: FittingFamily[] = [
  {
    id: "fam-mj-mj-bends",
    categoryKey: "mj-mj-bends",
    title: "MJ x MJ Bends",
    subtitle: "Mechanical Joint x Mechanical Joint",
    shortName: "MJ x MJ Elbows",
    tag: "7 SUBVARIANTS (90° TO 5.625°)",
    description:
      "Ductile iron directional elbows with twin mechanical joint bells. Full range of deflection angles for water main redirection.",
    subvariantTypeLabel: "Select Bend Angle",
    sampleAngles: [
      { label: "90°", subvariantId: "mj-mj-bend-90" },
      { label: "60°", subvariantId: "mj-mj-bend-60" },
      { label: "45°", subvariantId: "mj-mj-bend-45" },
      { label: "30°", subvariantId: "mj-mj-bend-30" },
      { label: "22.5°", subvariantId: "mj-mj-bend-22-5" },
      { label: "11.25°", subvariantId: "mj-mj-bend-11-25" },
      { label: "5.625°", subvariantId: "mj-mj-bend-5-625" },
    ],
    defaultSubvariantId: "mj-mj-bend-90",
    iconType: "bend",
  },
  {
    id: "fam-mj-pe-bends",
    categoryKey: "mj-pe-bends",
    title: "MJ x PE Bends",
    subtitle: "Mechanical Joint Bell x Plain End Spigot",
    shortName: "MJ x PE Spigot Elbows",
    tag: "7 SUBVARIANTS (90° TO 5.625°)",
    description:
      "Bell-by-spigot elbows engineered to plug directly into push-on pipe bells or gate valves, eliminating extra spool pieces.",
    subvariantTypeLabel: "Select Bend Angle",
    sampleAngles: [
      { label: "90°", subvariantId: "mj-pe-bend-90" },
      { label: "60°", subvariantId: "mj-pe-bend-60" },
      { label: "45°", subvariantId: "mj-pe-bend-45" },
      { label: "30°", subvariantId: "mj-pe-bend-30" },
      { label: "22.5°", subvariantId: "mj-pe-bend-22-5" },
      { label: "11.25°", subvariantId: "mj-pe-bend-11-25" },
      { label: "5.625°", subvariantId: "mj-pe-bend-5-625" },
    ],
    defaultSubvariantId: "mj-pe-bend-90",
    iconType: "bend",
  },
  {
    id: "fam-mj-fe-bends",
    categoryKey: "mj-fe-bends",
    title: "MJ x FE Bends",
    subtitle: "Mechanical Joint x Class 125 Flange",
    shortName: "MJ x Flanged Elbows",
    tag: "4 SUBVARIANTS (90°, 45°, 22.5°, 11.25°)",
    description:
      "Direct transition elbows converting underground mechanical joint mains to ANSI Class 125 flanged meter vaults and pump stations.",
    subvariantTypeLabel: "Select Bend Angle",
    sampleAngles: [
      { label: "90°", subvariantId: "mj-fe-bend-90" },
      { label: "45°", subvariantId: "mj-fe-bend-45" },
      { label: "22.5°", subvariantId: "mj-fe-bend-22-5" },
      { label: "11.25°", subvariantId: "mj-fe-bend-11-25" },
    ],
    defaultSubvariantId: "mj-fe-bend-90",
    iconType: "bend",
  },
  {
    id: "fam-tees-crosses",
    categoryKey: "tees-crosses",
    title: "MJ Tees & 4-Way Crosses",
    subtitle: "Branch Distribution & Grid Junctions",
    shortName: "Tees & Crosses",
    tag: "7 CONFIGURATIONS",
    description:
      "Full and reducing branch tees, flanged branch valve tees, tapped sample tees, tangential drainage tees, and 4-way distribution crosses.",
    subvariantTypeLabel: "Select Fitting Pattern",
    sampleAngles: [
      { label: "MJ x MJ Tee", subvariantId: "mj-mj-tee" },
      { label: "MJ x FE Tee", subvariantId: "mj-fe-tee" },
      { label: "Plain End Run", subvariantId: "mj-pe-mj-tee" },
      { label: '2" NPT Tap', subvariantId: "mj-mj-tapped-tee-cross" },
      { label: "Tangential", subvariantId: "mj-mj-tangential-tee" },
      { label: "MJ Cross", subvariantId: "mj-mj-cross" },
      { label: "FE Cross", subvariantId: "mj-fe-cross" },
    ],
    defaultSubvariantId: "mj-mj-tee",
    iconType: "tee",
  },
  {
    id: "fam-reducers-sleeves",
    categoryKey: "reducers-sleeves",
    title: "Reducers, Offsets & Sleeves",
    subtitle: "Concentric, Eccentric, SEB, LEB & Cut-In",
    shortName: "Reducers & Sleeves",
    tag: "7 SPECIALTY FITTINGS",
    description:
      "Diameter transitions maintaining uniform flow lines, flat-line eccentric reducers, repair cutting-in sleeves, and double-bend S-curve offsets.",
    subvariantTypeLabel: "Select Reducer / Sleeve",
    sampleAngles: [
      { label: "Concentric", subvariantId: "mj-mj-reducer" },
      { label: "SEB (Small Bell)", subvariantId: "seb-reducer" },
      { label: "LEB (Large Bell)", subvariantId: "leb-reducer" },
      { label: "MJ x FE", subvariantId: "mj-fe-reducer" },
      { label: "Eccentric", subvariantId: "eccentric-reducer" },
      { label: "Cutting-In", subvariantId: "cutting-in-sleeve" },
      { label: "Line Offset", subvariantId: "mj-offset" },
    ],
    defaultSubvariantId: "mj-mj-reducer",
    iconType: "reducer",
  },
  {
    id: "fam-swivel-hydrant",
    categoryKey: "swivel-hydrant",
    title: "Swivel Hydrant Fittings",
    subtitle: "360° Rotating Fire Hydrant Hardware",
    shortName: "Hydrant Swivels",
    tag: "4 HYDRANT ACCESSORIES",
    description:
      "Dual-swivel adapters, twin-gland 90° hydrant elbows, solid adapters, and locking swivel retainer glands for precision vertical hydrant plumbing.",
    subvariantTypeLabel: "Select Hydrant Part",
    sampleAngles: [
      {
        label: "Swivel Adapter",
        subvariantId: "swivel-swivel-hydrant-adapter",
      },
      { label: "Swivel 90° Ell", subvariantId: "swivel-swivel-hydrant-ell" },
      { label: "Solid Adapter", subvariantId: "swivel-solid-hydrant-adapter" },
      { label: "Swivel Glands", subvariantId: "swivel-glands" },
    ],
    defaultSubvariantId: "swivel-swivel-hydrant-adapter",
    iconType: "swivel",
  },
];

const FittingCardImage: React.FC<{ fitting: FittingItemData }> = ({
  fitting,
}) => {
  const [imgError, setImgError] = useState(false);
  const src = fitting.imageUrl || `/images/fittings/${fitting.id}.png`;

  return (
    <div className="relative w-full h-32 sm:h-36 flex items-center justify-center p-3 overflow-hidden my-1 bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border border-[#5FD4FD]/25">
      {!imgError ? (
        <img
          src={src}
          alt={fitting.name}
          className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-none border-2 border-dashed border-[#0082FC] bg-white flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
            {fitting.fittingType === "bend" && (
              <Compass className="w-8 h-8 text-[#0082FC]" />
            )}
            {fitting.fittingType === "tee" && (
              <Layers className="w-8 h-8 text-[#0082FC]" />
            )}
            {fitting.fittingType === "cross" && (
              <Plus className="w-8 h-8 text-[#0082FC] stroke-[2.5]" />
            )}
            {fitting.fittingType === "reducer" && (
              <Filter className="w-8 h-8 text-[#0082FC]" />
            )}
            {fitting.fittingType === "sleeve" && (
              <Wrench className="w-8 h-8 text-[#0082FC]" />
            )}
            {fitting.fittingType === "swivel" && (
              <Activity className="w-8 h-8 text-[#0082FC]" />
            )}
          </div>
          <span className="text-[10px] font-mono font-bold text-[#0082FC] mt-1.5 uppercase">
            {fitting.sizeRange} &bull; {fitting.angle || "C153 COMPACT"}
          </span>
        </div>
      )}

      {/* Stock Status Badge */}
      <span className="absolute bottom-1.5 right-1.5 text-[9px] font-bold bg-[#5FD4FD]/20 text-[#0082FC] px-1.5 py-0.2 border border-[#5FD4FD]">
        Foundry Stock
      </span>
    </div>
  );
};

// General Specifications directly from the official 2" - 64" Ductile Iron Mechanical Joint Compact Fittings catalog
export interface GeneralSpecificationItem {
  id: string;
  label: string;
  value: string;
  badge?: string;
}

export const GENERAL_SPECIFICATIONS_DATA: GeneralSpecificationItem[] = [
  {
    id: "material",
    label: "MATERIAL",
    value: "Ductile Iron per ASTM A536",
    badge: "ASTM A536",
  },
  {
    id: "pressure",
    label: "PRESSURE",
    value:
      '350 PSI rating for 2" - 24" sizes, 250 PSI rating for 30" - 48" sizes and 150 PSI rating for 54" - 64" sizes',
    badge: "350 / 250 / 150 PSI",
  },
  {
    id: "testing",
    label: "TESTING",
    value:
      "In accordance with ANSI/AWWA C153/A21.53, ANSI/AWWA C111/A21.11, UL and FM requirements",
    badge: "AWWA C153 & C111",
  },
  {
    id: "laying-length",
    label: "LAYING LENGTH",
    value:
      "In accordance with ANSI/AWWA C153/A21.53 (fittings not listed in ANSI/AWWA have dimensions per H2O design as noted in the catalog)",
    badge: "AWWA C153 / H2O Design",
  },
  {
    id: "deflection",
    label: "DEFLECTION",
    value:
      '2"-4"=8° | 6"=7° | 8"-12"=5° | 14"-16"=3 ½° | 18"-24"=3° | 30"-64"=2°',
    badge: "Max 8° Deflection",
  },
  {
    id: "weights",
    label: "WEIGHTS",
    value:
      "Are in pounds, unless noted otherwise and do not include accessories, cement lining and coating",
    badge: "Bare Casting LBS",
  },
  {
    id: "flanges",
    label: "FLANGES",
    value:
      "Flanged ends on fittings match ANSI/AWWA C115/A21.15 and ANSI B16.1 class 125 flanges",
    badge: "Class 125 Flange",
  },
  {
    id: "cement-lining",
    label: "CEMENT LINING",
    value:
      'In accordance with ANSI/AWWA C104/A21.4 -- size 2" - 3" single thickness and sizes 4" - 64" double thickness.',
    badge: "AWWA C104 Double Thick",
  },
  {
    id: "coating",
    label: "COATING",
    value:
      "Asphaltic seal coat inside and out in accordance with ANSI/AWWA C104/A21.4 and referenced in ANSI/AWWA C153/A21.53",
    badge: "Dual Asphaltic Seal Coat",
  },
  {
    id: "gaskets",
    label: "GASKETS",
    value: "SBR in accordance with ANSI/AWWA C111/A21.11 (see pg. 20)",
    badge: "SBR Rubber C111",
  },
  {
    id: "t-bolts",
    label: "T-BOLTS/NUTS",
    value:
      "Low alloy steel in accordance with ANSI/AWWA C111/A21.11 (see pg. 22)",
    badge: "Low-Alloy Steel",
  },
  {
    id: "approvals",
    label: "APPROVALS",
    value:
      '3" - 12" UL/ULC Listed | 2" and greater are UL/ANSI/NSF Standards 61 and 372 | 3" - 16" FM APPROVED. Please consult factory for detail listing and approvals.',
    badge: "UL • FM • NSF 61/372",
  },
  {
    id: "dimensions",
    label: "DIMENSIONS",
    value:
      "All dimensions are in inches unless noted otherwise. (Review commentary before ordering or installing fittings for this application.)",
    badge: "Inches (in.)",
  },
  {
    id: "installation",
    label: "INSTALLATION",
    value:
      "Per ANSI/AWWA C600 and C111 using DIP conforming to C150/C151 and PVC pipe conforming to C900",
    badge: "AWWA C600 / C111",
  },
];

export const MechanicalJointFittingsSchedule: React.FC<
  MechanicalJointFittingsScheduleProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [selectedFamilyId, setSelectedFamilyId] = useState<string | null>(null);
  const [activeSubvariantId, setActiveSubvariantId] = useState<string | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [specDrawerOpen, setSpecDrawerOpen] = useState<boolean>(false);
  const [copiedSpecs, setCopiedSpecs] = useState<boolean>(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleCopyAllSpecs = () => {
    const text =
      `2" - 64" DUCTILE IRON MECHANICAL JOINT COMPACT FITTINGS\nGENERAL SPECIFICATIONS\n\n` +
      GENERAL_SPECIFICATIONS_DATA.map(
        (item) => `${item.label}: ${item.value}`,
      ).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2500);
  };

  // Active family object when a category is opened
  const activeFamily = useMemo(() => {
    return FITTING_FAMILIES.find((f) => f.id === selectedFamilyId) || null;
  }, [selectedFamilyId]);

  // Subvariants of currently selected family
  const familySubvariants = useMemo(() => {
    if (!activeFamily) return [];
    return FITTINGS_SCHEDULE_DATA.filter(
      (item) => item.category === activeFamily.categoryKey,
    );
  }, [activeFamily]);

  // Currently focused subvariant: only returns an item if activeSubvariantId is specifically selected
  const activeSubvariant = useMemo(() => {
    if (!familySubvariants.length || !activeSubvariantId) return null;
    return familySubvariants.find((v) => v.id === activeSubvariantId) || null;
  }, [familySubvariants, activeSubvariantId]);

  // Search results across all 36 fittings
  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return [];
    return FITTINGS_SCHEDULE_DATA.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.catNumber.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.jointType.toLowerCase().includes(query) ||
        item.sizeRange.toLowerCase().includes(query) ||
        item.angle?.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleOpenFamily = (familyId: string, initialSubvariantId?: string) => {
    setSelectedFamilyId(familyId);
    setActiveSubvariantId(initialSubvariantId || null);
    const element = document.getElementById("c153-fittings-schedule");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBackToFamilies = () => {
    setSelectedFamilyId(null);
    setActiveSubvariantId(null);
    const element = document.getElementById("c153-fittings-schedule");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddFitting = (fitting: FittingItemData) => {
    const productItem: ProductItem = {
      id: fitting.id,
      name: fitting.name,
      category: "fittings",
      categoryLabel: fitting.categoryLabel,
      standard: "AWWA C153",
      pressureRating: fitting.pressureRating,
      jointType: "Mechanical Joint (MJ)",
      diameterRange: fitting.sizeRange,
      material: "Ductile Iron per ASTM A536 Grade 65-45-12",
      coating:
        "Standard Double Cement Mortar per AWWA C104 + Asphaltic Seal Coat",
      description: `${fitting.description} [${fitting.catNumber}]`,
      cadFile: `${fitting.id.toUpperCase().replace(/-/g, "_")}.DWG`,
      submittalFile: `SUBMITTAL_${fitting.id.toUpperCase().replace(/-/g, "_")}.PDF`,
      specs: {
        tensileStrength: "65,000 PSI Minimum",
        yieldStrength: "45,000 PSI Minimum",
        elongation: "12% Minimum",
        wallThicknessClass: "AWWA C153 Compact Section",
        standardBoltCount: "Per AWWA C111 Table",
        torqueSpec: '75 - 90 ft-lbs (5/8" & 3/4" T-Bolts)',
      },
      keyFeatures: [
        `Rated ${fitting.pressureRating} per ANSI/AWWA C153/A21.53`,
        `Deflection capability: ${fitting.deflection}`,
        "Double-thickness cement mortar lining per ANSI/AWWA C104/A21.4",
        "UL/ULC Listed & FM Approved for fire lines and municipal mains",
      ],
      imageUrl: fitting.imageUrl || `/images/fittings/${fitting.id}.png`,
      aisCompliant: true,
      buyAmericaReady: true,
    };

    onAddToRfq(productItem);
    setAddedIds((prev) => ({ ...prev, [fitting.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [fitting.id]: false }));
    }, 2500);
  };

  const handlePreviewFitting = (fitting: FittingItemData) => {
    const productItem: ProductItem = {
      id: fitting.id,
      name: fitting.name,
      category: "fittings",
      categoryLabel: fitting.categoryLabel,
      standard: "AWWA C153",
      pressureRating: fitting.pressureRating,
      jointType: "Mechanical Joint (MJ)",
      diameterRange: fitting.sizeRange,
      material: "Ductile Iron per ASTM A536 Grade 65-45-12",
      coating:
        "Standard Double Cement Mortar per AWWA C104 + Asphaltic Seal Coat",
      description: `${fitting.description} [${fitting.catNumber}]`,
      cadFile: `${fitting.id.toUpperCase().replace(/-/g, "_")}.DWG`,
      submittalFile: `SUBMITTAL_${fitting.id.toUpperCase().replace(/-/g, "_")}.PDF`,
      specs: {
        tensileStrength: "65,000 PSI Minimum",
        yieldStrength: "45,000 PSI Minimum",
        elongation: "12% Minimum",
        wallThicknessClass: "AWWA C153 Compact Section",
        standardBoltCount: "Per AWWA C111 Table",
        torqueSpec: '75 - 90 ft-lbs (5/8" & 3/4" T-Bolts)',
      },
      keyFeatures: [
        `Rated ${fitting.pressureRating} per ANSI/AWWA C153/A21.53`,
        `Deflection capability: ${fitting.deflection}`,
        "Double-thickness cement mortar lining per ANSI/AWWA C104/A21.4",
        "UL/ULC Listed & FM Approved for fire lines and municipal mains",
      ],
      imageUrl: fitting.imageUrl || `/images/fittings/${fitting.id}.png`,
      aisCompliant: true,
      buyAmericaReady: true,
    };

    onPreviewSubmittal(productItem);
  };

  return (
    <section
      id="c153-fittings-schedule"
      aria-label="2 to 64 Inch Ductile Iron Mechanical Joint Compact Fittings Schedule"
      className="py-16 sm:py-24 bg-white text-[#0082FC] border-t-4 border-[#5FD4FD] border-b-4 border-[#5FD4FD] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-[#0082FC] text-xs font-bold uppercase tracking-wider rounded-none mb-3 shadow-sm border-2 border-[#5FD4FD]">
            <Compass className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
            <span>ANSI/AWWA C153 &bull; ANSI/AWWA C111 &bull; ASTM A536</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0082FC] leading-[1.05] mb-3">
            2&quot; - 64&quot; Ductile Iron{" "}
            <span className="text-[#0082FC]">Mechanical Joint</span> Fittings
          </h2>

          <p className="text-sm sm:text-base text-[#0082FC]/90 font-normal leading-relaxed">
            Explore ductile iron mechanical joint compact fittings by product
            family. Select any fitting category below to browse specific
            subvariant angles (90°, 60°, 45°, 30°, 22.5°, 11.25°, 5.625°), tees,
            reducers, and swivel hardware.
          </p>

          {/* Quick Specifications Blueprint Bar Toggle */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setSpecDrawerOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all shadow-md cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>
                {specDrawerOpen
                  ? "Hide General Specifications Blueprint"
                  : 'View Official General Specifications Sheet (2" - 64")'}
              </span>
              <span className="px-1.5 py-0.2 text-[10px] bg-white text-[#0082FC] font-black border border-[#0082FC]">
                14 Certified Specs
              </span>
              {specDrawerOpen ? (
                <ChevronUp className="w-4 h-4 shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 shrink-0" />
              )}
            </button>
          </div>
        </div>

        {/* Official Specifications Sheet Blueprint (From User Catalog Document) */}
        {specDrawerOpen && (
          <div className="mb-12 bg-white border-4 border-[#0082FC] p-6 sm:p-8 shadow-2xl relative animate-in fade-in duration-300">
            {/* Header of the Blueprint Sheet */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#0082FC] pb-5 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#5FD4FD]/20 border border-[#0082FC] text-[10px] font-black uppercase tracking-wider text-[#0082FC] mb-2">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                  <span>Official Foundry Catalog Standard Sheet</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#0082FC]">
                  2&quot; - 64&quot; Ductile Iron Mechanical Joint Compact
                  Fittings
                </h3>
                <h4 className="text-sm sm:text-base font-black uppercase tracking-widest text-[#0082FC]/90 mt-1">
                  General Specifications
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyAllSpecs}
                  className="px-3.5 py-2 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedSpecs ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3] text-[#0082FC]" />
                      <span>Copied All Specs!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy All Specs</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setSpecDrawerOpen(false)}
                  className="px-3.5 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none transition-all cursor-pointer shadow-xs"
                >
                  Close Sheet &times;
                </button>
              </div>
            </div>

            {/* 14 Specifications Structured Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm text-[#0082FC]">
              {GENERAL_SPECIFICATIONS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 sm:p-4 bg-white hover:bg-[#5FD4FD]/10 border-2 border-[#5FD4FD] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5 border-b border-[#0082FC]/15 pb-1.5">
                      <span className="font-black uppercase tracking-wider text-xs text-[#0082FC]">
                        {item.label}:
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-bold uppercase tracking-tight bg-[#0082FC] text-white px-1.5 py-0.2 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="leading-relaxed text-[#0082FC]/95 font-medium text-xs sm:text-[13px]">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Notes & Installation Guidance */}
            <div className="mt-6 pt-4 border-t-2 border-[#5FD4FD] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold text-[#0082FC]/85">
              <span>
                Standard Compliance: ANSI/AWWA C153 &bull; ANSI/AWWA C111 &bull;
                ANSI/AWWA C104 &bull; ANSI/AWWA C115 &bull; ASTM A536
              </span>
              <span className="font-mono">
                Catalog Rev: 2026.1 &bull; 100% Domestic AIS / Buy America Ready
              </span>
            </div>
          </div>
        )}

        {/* Global Search Bar (Works Across All 36 Fittings) */}
        <div className="mb-10 max-w-xl mx-auto">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search all fittings (e.g. 45 bend, 90, Cat. 1280, eccentric, swivel ell)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-4 py-2.5 text-xs sm:text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs font-bold text-[#0082FC] hover:underline cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* VIEW 1: SEARCH RESULTS (IF USER TYPED IN SEARCH BOX) */}
        {searchQuery ? (
          <div>
            <div className="mb-6 flex items-center justify-between text-xs font-bold text-[#0082FC] border-b-2 border-[#5FD4FD]/30 pb-2">
              <span>
                Search Results for &quot;<strong>{searchQuery}</strong>&quot; (
                {searchResults.length} matches)
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-[#0082FC] hover:underline uppercase tracking-wider cursor-pointer"
              >
                Back to Categories
              </button>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
                {searchResults.map((fitting) => {
                  const isAdded = addedIds[fitting.id];
                  return (
                    <div
                      key={fitting.id}
                      className="bg-white border-4 border-[#5FD4FD] rounded-none p-4 sm:p-5 flex flex-col justify-between shadow-lg hover:border-[#0082FC] transition-all duration-300 group hover:-translate-y-1 relative text-[#0082FC] h-full min-w-0 overflow-hidden"
                    >
                      <div>
                        {/* Top Bar */}
                        <div className="flex items-center justify-between gap-1.5 mb-2 border-b-2 border-[#0082FC]/15 pb-2 min-h-[26px] flex-nowrap">
                          <span className="text-[10px] font-black uppercase tracking-tight bg-[#0082FC] text-white px-1.5 py-0.5 border border-[#0082FC] shrink-0 whitespace-nowrap">
                            {fitting.catNumber}
                          </span>
                          <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase tracking-tight truncate text-right shrink min-w-0 whitespace-nowrap">
                            {fitting.categoryLabel}
                          </span>
                        </div>

                        {/* Image */}
                        <FittingCardImage fitting={fitting} />

                        {/* Title */}
                        <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#0082FC] leading-tight line-clamp-2 min-h-[34px] flex items-center mt-2 mb-0.5">
                          {fitting.name}
                        </h3>

                        <p className="text-[10px] font-bold text-[#0082FC]/75 uppercase tracking-wider mb-2 truncate">
                          {fitting.jointType}
                        </p>

                        <p className="text-xs text-[#0082FC]/90 font-normal leading-relaxed line-clamp-2 mb-3 min-h-[34px]">
                          {fitting.description}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#0082FC] bg-[#5FD4FD]/15 border border-[#5FD4FD] px-1.5 py-0.5 rounded-none max-w-full">
                            <ShieldCheck className="w-2.5 h-2.5 text-[#0082FC] shrink-0" />
                            <span className="truncate">
                              {fitting.pressureRating.split(" ")[0]} PSI
                            </span>
                          </span>
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#0082FC] bg-[#5FD4FD]/15 border border-[#5FD4FD] px-1.5 py-0.5 rounded-none max-w-full">
                            <CheckCircle2 className="w-2.5 h-2.5 text-[#0082FC] shrink-0" />
                            <span className="truncate">
                              {fitting.standards.split(" ")[0]}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="w-full flex items-center gap-2 pt-3 border-t-2 border-[#0082FC]/15 mt-auto">
                        <button
                          type="button"
                          onClick={() => handleAddFitting(fitting)}
                          className={`flex-1 min-w-0 py-2.5 px-3 text-xs font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-1.5 cursor-pointer border-2 ${
                            isAdded
                              ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                              : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC] shadow-sm"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                              <span className="truncate">Added</span>
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
                          onClick={() => handlePreviewFitting(fitting)}
                          title="Download Cut Sheet PDF"
                          className="w-10 h-10 shrink-0 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center cursor-pointer shadow-xs"
                        >
                          <FileText className="w-4 h-4 shrink-0" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-16 text-center bg-white border-2 border-dashed border-[#5FD4FD] p-8 max-w-lg mx-auto">
                <Compass className="w-10 h-10 text-[#5FD4FD] mx-auto mb-3" />
                <h4 className="text-base font-bold text-[#0082FC]">
                  No fittings found matching &quot;{searchQuery}&quot;
                </h4>
                <p className="text-xs text-[#0082FC]/75 mt-1">
                  Try searching by angle (e.g. 90, 45, 22.5), fitting type (tee,
                  bend, reducer), or catalog code.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-4 px-4 py-2 bg-[#0082FC] text-white text-xs font-bold uppercase rounded-none border-2 border-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] cursor-pointer"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        ) : selectedFamilyId && activeFamily ? (
          /* VIEW 2: DEDICATED SUBVARIANT SELECTION VIEW (WHEN CATEGORY IS CLICKED) */
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Navigation & Breadcrumbs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#5FD4FD] pb-4">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleBackToFamilies}
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none transition-all shadow-sm cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 shrink-0" />
                  <span>&larr; Back to All Categories</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSpecDrawerOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#5FD4FD]/15 hover:bg-[#0082FC] text-[#0082FC] hover:text-white border-2 border-[#5FD4FD] text-xs font-black uppercase tracking-wider rounded-none transition-all shadow-xs cursor-pointer"
                >
                  <FileCheck2 className="w-3.5 h-3.5 shrink-0" />
                  <span>
                    {specDrawerOpen
                      ? "Hide General Specs"
                      : 'General Specs (2" - 64")'}
                  </span>
                </button>
              </div>

              {/* Family Quick Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5">
                {FITTING_FAMILIES.map((fam) => (
                  <button
                    key={fam.id}
                    type="button"
                    onClick={() => handleOpenFamily(fam.id)}
                    className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-none border transition-all cursor-pointer ${
                      fam.id === selectedFamilyId
                        ? "bg-[#0082FC] text-white border-[#0082FC]"
                        : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                    }`}
                  >
                    {fam.shortName}
                  </button>
                ))}
              </div>
            </div>

            {/* Subvariant Angle / Option Selector Bar */}
            <div className="bg-[#5FD4FD]/15 border-2 border-[#5FD4FD] p-4 sm:p-5 rounded-none">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#0082FC] shrink-0" />
                  <span>
                    {activeFamily.subvariantTypeLabel}: Click to view
                    specifications
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#0082FC]/75 uppercase">
                  {familySubvariants.length} Subvariants Available
                </span>
              </div>

              {/* Angle / Subvariant Pills */}
              <div className="flex flex-wrap gap-2">
                {familySubvariants.map((variant) => {
                  const isActive = activeSubvariant?.id === variant.id;
                  const displayAngle =
                    variant.angle ||
                    variant.name.split(" ")[2] ||
                    variant.catNumber;
                  return (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setActiveSubvariantId(variant.id)}
                      className={`px-3.5 py-2 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                        isActive
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-md scale-102"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:border-[#0082FC] hover:bg-white"
                      }`}
                    >
                      {isActive && (
                        <Check className="w-3.5 h-3.5 stroke-[3] shrink-0" />
                      )}
                      <span>{displayAngle}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.2 border ${
                          isActive
                            ? "bg-white/20 border-white text-white"
                            : "bg-[#5FD4FD]/20 border-[#5FD4FD] text-[#0082FC]"
                        }`}
                      >
                        {variant.catNumber}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Subvariant Spotlight Showcase Panel */}
            {activeSubvariant && (
              <div className="bg-white border-4 border-[#0082FC] p-6 sm:p-8 shadow-2xl rounded-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Subvariant Image & Blueprint Frame */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full h-56 sm:h-64 flex items-center justify-center p-4 bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border-2 border-[#5FD4FD]">
                      <FittingCardImage fitting={activeSubvariant} />
                    </div>
                    <div className="mt-3 flex items-center justify-between w-full text-xs font-bold text-[#0082FC]">
                      <span className="bg-[#0082FC] text-white px-2.5 py-0.5 border border-[#0082FC] uppercase text-[10px]">
                        {activeSubvariant.catNumber}
                      </span>
                      <span className="text-[11px] font-mono">
                        Standard Laying Length C153
                      </span>
                    </div>
                  </div>

                  {/* Right: Technical Specifications & Actions */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2.5 py-0.5 border border-[#0082FC] mb-2">
                        <span>{activeFamily.title}</span>
                        <span>&bull;</span>
                        <span>
                          {activeSubvariant.angle || activeSubvariant.catNumber}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC] leading-tight">
                        {activeSubvariant.name}
                      </h3>

                      <p className="text-xs font-bold text-[#0082FC]/75 uppercase tracking-wider mt-1 mb-3">
                        {activeSubvariant.jointType} &bull;{" "}
                        {activeSubvariant.standards}
                      </p>

                      <p className="text-xs sm:text-sm text-[#0082FC]/90 font-normal leading-relaxed mb-4">
                        {activeSubvariant.description}
                      </p>

                      {/* 4 Technical Parameter Boxes */}
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs text-[#0082FC] mb-6">
                        <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]/40">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                            Size Range
                          </span>
                          <span className="font-black text-sm text-[#0082FC]">
                            {activeSubvariant.sizeRange}
                          </span>
                        </div>

                        <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]/40">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                            Working Pressure
                          </span>
                          <span className="font-black text-sm text-[#0082FC]">
                            {activeSubvariant.pressureRating.split(" ")[0]} PSI
                            Rated
                          </span>
                        </div>

                        <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]/40">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                            Joint Deflection Limit
                          </span>
                          <span className="font-bold text-xs text-[#0082FC]">
                            {activeSubvariant.deflection}
                          </span>
                        </div>

                        <div className="p-3 bg-[#5FD4FD]/10 border border-[#5FD4FD]/40">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                            Sanitary Linings
                          </span>
                          <span className="font-bold text-xs text-[#0082FC]">
                            Double C104 Cement Mortar
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t-2 border-[#0082FC]/20">
                      <button
                        type="button"
                        onClick={() => handleAddFitting(activeSubvariant)}
                        className={`w-full sm:flex-1 py-3 px-4 text-xs sm:text-sm font-black uppercase tracking-wider rounded-none transition-all flex items-center justify-center gap-2 cursor-pointer border-2 ${
                          addedIds[activeSubvariant.id]
                            ? "bg-[#5FD4FD] text-[#0082FC] border-[#0082FC]"
                            : "bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] border-[#0082FC] shadow-md"
                        }`}
                      >
                        {addedIds[activeSubvariant.id] ? (
                          <>
                            <Check className="w-4 h-4 stroke-[3]" />
                            <span>Added to Quote List</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 stroke-[2.5]" />
                            <span>+ Add to Commercial Quote</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handlePreviewFitting(activeSubvariant)}
                        className="w-full sm:w-auto py-3 px-5 bg-white hover:bg-[#0082FC] text-[#0082FC] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Cut Sheet Submittal PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* When no specific subvariant angle has been clicked yet */}
            {!activeSubvariant && (
              <div className="bg-white border-4 border-[#5FD4FD] p-8 sm:p-12 text-center shadow-lg">
                <Compass className="w-12 h-12 text-[#0082FC] mx-auto mb-3" />
                <h4 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#0082FC]">
                  Select an Option or Angle Above
                </h4>
                <p className="text-xs sm:text-sm text-[#0082FC]/80 max-w-md mx-auto mt-1 mb-6">
                  Click any angle option above (such as 45°, 90°, or 22.5°) to
                  display only that specific fitting&apos;s blueprint,
                  specifications, and commercial quote options.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {familySubvariants.map((v) => {
                    const label =
                      v.angle || v.name.split(" ")[2] || v.catNumber;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setActiveSubvariantId(v.id)}
                        className="px-4 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase rounded-none border-2 border-[#0082FC] transition-all cursor-pointer shadow-xs"
                      >
                        {label} ({v.catNumber})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* VIEW 3: CLEAN CATEGORY FRONT VIEW (SHOW ONLY CATEGORIES IN FRONT) */
          <div>
            <div className="mb-6 flex items-center justify-between text-xs font-bold text-[#0082FC] border-b-2 border-[#5FD4FD]/30 pb-2">
              <span>
                Showing <strong>{FITTING_FAMILIES.length}</strong> Mechanical
                Joint Product Families
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#0082FC]/75">
                Click any category to explore subvariant angles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {FITTING_FAMILIES.map((family) => {
                const sampleFitting =
                  FITTINGS_SCHEDULE_DATA.find(
                    (item) => item.id === family.defaultSubvariantId,
                  ) || FITTINGS_SCHEDULE_DATA[0];

                return (
                  <div
                    key={family.id}
                    className="bg-white border-4 border-[#5FD4FD] hover:border-[#0082FC] rounded-none p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1 relative text-[#0082FC] h-full"
                  >
                    <div>
                      {/* Top Category Tag */}
                      <div className="flex items-center justify-between mb-3 border-b-2 border-[#0082FC]/15 pb-2.5 min-h-[28px]">
                        <span className="text-[10px] font-black uppercase tracking-wider bg-[#5FD4FD]/20 text-[#0082FC] px-2.5 py-0.5 border border-[#0082FC]">
                          {family.tag}
                        </span>
                        <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase">
                          AWWA C153
                        </span>
                      </div>

                      {/* Family Image Frame */}
                      <div className="relative w-full h-44 sm:h-48 flex items-center justify-center p-3 overflow-hidden my-2 bg-gradient-to-b from-[#5FD4FD]/10 to-transparent border border-[#5FD4FD]/30">
                        <FittingCardImage fitting={sampleFitting} />
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0082FC] leading-snug mt-3 mb-1">
                        {family.title}
                      </h3>

                      <p className="text-[11px] font-bold text-[#0082FC]/75 uppercase tracking-wider mb-2.5">
                        {family.subtitle}
                      </p>

                      <p className="text-xs text-[#0082FC]/90 font-normal leading-relaxed line-clamp-2 mb-4">
                        {family.description}
                      </p>

                      {/* Interactive Subvariant Angle Preview Chips */}
                      <div className="space-y-1.5 border-t border-[#0082FC]/15 pt-3 mb-5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0082FC]/70 block">
                          Available Subvariants:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {family.sampleAngles.map((ang) => (
                            <button
                              key={ang.label}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenFamily(family.id, ang.subvariantId);
                              }}
                              className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#5FD4FD]/15 hover:bg-[#0082FC] hover:text-white text-[#0082FC] border border-[#5FD4FD] rounded-none transition-colors cursor-pointer"
                              title={`View ${ang.label} subvariant specifications`}
                            >
                              {ang.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Main Category Action Button */}
                    <button
                      type="button"
                      onClick={() => handleOpenFamily(family.id)}
                      className="w-full py-3 px-4 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs sm:text-sm font-black uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md mt-auto"
                    >
                      <span>Explore {family.shortName}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
