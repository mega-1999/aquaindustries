"use client";

import {
  Activity,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
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

export const MechanicalJointFittingsSchedule: React.FC<
  MechanicalJointFittingsScheduleProps
> = ({ onAddToRfq, onPreviewSubmittal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [specDrawerOpen, setSpecDrawerOpen] = useState<boolean>(false);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: "all", label: "All Fittings", count: FITTINGS_SCHEDULE_DATA.length },
    {
      id: "mj-mj-bends",
      label: "MJ x MJ Bends",
      count: FITTINGS_SCHEDULE_DATA.filter((i) => i.category === "mj-mj-bends")
        .length,
    },
    {
      id: "mj-pe-bends",
      label: "MJ x PE Bends",
      count: FITTINGS_SCHEDULE_DATA.filter((i) => i.category === "mj-pe-bends")
        .length,
    },
    {
      id: "mj-fe-bends",
      label: "MJ x FE Bends",
      count: FITTINGS_SCHEDULE_DATA.filter((i) => i.category === "mj-fe-bends")
        .length,
    },
    {
      id: "tees-crosses",
      label: "Tees & Crosses",
      count: FITTINGS_SCHEDULE_DATA.filter((i) => i.category === "tees-crosses")
        .length,
    },
    {
      id: "reducers-sleeves",
      label: "Reducers & Sleeves",
      count: FITTINGS_SCHEDULE_DATA.filter(
        (i) => i.category === "reducers-sleeves",
      ).length,
    },
    {
      id: "swivel-hydrant",
      label: "Swivel Hydrant",
      count: FITTINGS_SCHEDULE_DATA.filter(
        (i) => i.category === "swivel-hydrant",
      ).length,
    },
  ];

  const filteredFittings = useMemo(() => {
    return FITTINGS_SCHEDULE_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.catNumber.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.jointType.toLowerCase().includes(query) ||
        item.sizeRange.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddFitting = (fitting: FittingItemData) => {
    // Map fitting to ProductItem contract
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
            Full comprehensive specification matrix and dimensional schedule for
            all mechanical joint bends, tees, crosses, reducers, sleeves, and
            swivel hydrant fittings. Hydrostatically proof-tested to 500 PSI
            with traceable melt lot reports.
          </p>

          {/* Quick Specifications Blueprint Bar Toggle */}
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setSpecDrawerOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] text-white hover:text-[#0082FC] text-xs font-black uppercase tracking-wider rounded-none border-2 border-[#0082FC] transition-all shadow-md cursor-pointer"
            >
              <FileCheck2 className="w-4 h-4 shrink-0" />
              <span>
                {specDrawerOpen
                  ? "Hide General Specifications Blueprint"
                  : 'View Official General Specifications Sheet (2" - 64")'}
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
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#5FD4FD] pb-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#0082FC]">
                  2&quot; - 64&quot; Ductile Iron Mechanical Joint Compact
                  Fittings
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#0082FC]/75 uppercase tracking-wider mt-0.5">
                  General Specifications &bull; ANSI/AWWA C153/A21.53 &bull;
                  ANSI/AWWA C111/A21.11
                </p>
              </div>
              <span className="text-xs font-black bg-[#5FD4FD]/20 border border-[#0082FC] px-3 py-1 uppercase text-[#0082FC]">
                Direct Foundry Spec
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm text-[#0082FC]">
              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Material &amp; Metallurgy
                </div>
                <p className="leading-relaxed">
                  Ductile Iron per <strong>ASTM A536</strong> Grade 65-45-12.
                  65,000 PSI minimum tensile strength, 45,000 PSI minimum yield,
                  12% elongation.
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Pressure Ratings
                </div>
                <p className="leading-relaxed">
                  <strong>350 PSI</strong> for 2&quot; - 24&quot; sizes &bull;{" "}
                  <strong>250 PSI</strong> for 30&quot; - 48&quot; sizes &bull;{" "}
                  <strong>150 PSI</strong> for 54&quot; - 64&quot; sizes.
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Testing Standards
                </div>
                <p className="leading-relaxed">
                  In accordance with <strong>ANSI/AWWA C153/A21.53</strong>,{" "}
                  <strong>ANSI/AWWA C111/A21.11</strong>, and stringent UL / FM
                  testing protocols.
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Joint Deflection Limits
                </div>
                <p className="leading-relaxed font-mono text-xs">
                  2&quot;-4&quot; = 8° &bull; 6&quot; = 7° &bull;
                  8&quot;-12&quot; = 5°
                  <br />
                  14&quot;-16&quot; = 3½° &bull; 18&quot;-24&quot; = 3° &bull;
                  30&quot;-64&quot; = 2°
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Linings &amp; Seal Coatings
                </div>
                <p className="leading-relaxed">
                  Cement lining per <strong>ANSI/AWWA C104/A21.4</strong>{" "}
                  (2&quot;-3&quot; single, 4&quot;-64&quot; double thickness).
                  Exterior asphaltic seal coat inside and out.
                </p>
              </div>

              <div className="space-y-1.5 p-3.5 bg-[#5FD4FD]/10 border border-[#5FD4FD]/30">
                <div className="font-black uppercase tracking-wider text-[#0082FC]">
                  Certifications &amp; Approvals
                </div>
                <p className="leading-relaxed">
                  3&quot;-12&quot; UL/ULC Listed &bull; 2&quot;+ UL/ANSI/NSF 61
                  &amp; 372 Lead-Free &bull; 3&quot;-16&quot; FM Approved &bull;
                  Flanges match Class 125.
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#5FD4FD]/30 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#0082FC]/80">
              <span>
                Installation: Per ANSI/AWWA C600 &amp; C111 using DIP
                (C150/C151) or PVC (C900)
              </span>
              <span>
                Hardware: SBR Gaskets &amp; Low-Alloy Steel T-Bolts per
                C111/A21.11
              </span>
            </div>
          </div>
        )}

        {/* Filter Controls & Search Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Box */}
          <div className="relative w-full max-w-xl mx-auto">
            <Search className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search fittings (e.g. 90 bend, Cat. 1280, eccentric, swivel ell, cutting-in)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-4 py-2.5 text-xs sm:text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs font-bold text-[#0082FC] hover:underline"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-black uppercase tracking-wider rounded-none border-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                      : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-none font-bold ${
                      isActive
                        ? "bg-white text-[#0082FC]"
                        : "bg-[#5FD4FD]/20 text-[#0082FC]"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-bold text-[#0082FC] border-b-2 border-[#5FD4FD]/30 pb-2">
          <span>
            Showing <strong>{filteredFittings.length}</strong> C153 Mechanical
            Joint Configurations
          </span>
          <span className="text-[11px] uppercase tracking-wider text-[#0082FC]/75">
            100% AWWA C153 &bull; NSF 61 Certified
          </span>
        </div>

        {/* 4-Column Fitting Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {filteredFittings.map((fitting) => {
            const isAdded = addedIds[fitting.id];
            return (
              <div
                key={fitting.id}
                className="bg-white border-4 border-[#5FD4FD] rounded-none p-4 sm:p-5 flex flex-col justify-between shadow-lg hover:border-[#0082FC] transition-all duration-300 group hover:-translate-y-1 relative text-[#0082FC] h-full min-w-0 overflow-hidden"
              >
                <div>
                  {/* Top Bar: Cat Ref Code + Category Tag (100% Single Line, Never Wraps) */}
                  <div className="flex items-center justify-between gap-1.5 mb-2 border-b-2 border-[#0082FC]/15 pb-2 min-h-[26px] flex-nowrap">
                    <span className="text-[10px] font-black uppercase tracking-tight bg-[#0082FC] text-white px-2 py-0.5 border border-[#0082FC] shrink-0 whitespace-nowrap">
                      {fitting.catNumber}
                    </span>
                    <span className="text-[10px] font-bold text-[#0082FC]/80 uppercase tracking-tight truncate text-right shrink min-w-0 whitespace-nowrap">
                      {fitting.categoryLabel}
                    </span>
                  </div>

                  {/* Fitting Image with Blueprint Fallback */}
                  <FittingCardImage fitting={fitting} />

                  {/* Title & Joint Type (Slightly Smaller & 2-Line Visible) */}
                  <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#0082FC] leading-tight line-clamp-2 min-h-[34px] flex items-center mt-2 mb-0.5">
                    {fitting.name}
                  </h3>

                  <p className="text-[10px] font-bold text-[#0082FC]/75 uppercase tracking-wider mb-2 truncate">
                    {fitting.jointType}
                  </p>

                  {/* Engineering Description */}
                  <p className="text-xs text-[#0082FC]/90 font-normal leading-relaxed line-clamp-2 mb-3 min-h-[34px]">
                    {fitting.description}
                  </p>

                  {/* Technical Spec Badges */}
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

                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#0082FC] bg-[#5FD4FD]/15 border border-[#5FD4FD] px-1.5 py-0.5 rounded-none max-w-full">
                      <CheckCircle2 className="w-2.5 h-2.5 text-[#0082FC] shrink-0" />
                      <span className="truncate">C104 Cement Lined</span>
                    </span>
                  </div>
                </div>

                {/* Single-Line Action Bar: Add to Quote (flex-1) + Cut Sheet PDF Icon Button */}
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

        {/* Empty Search Fallback */}
        {filteredFittings.length === 0 && (
          <div className="py-16 text-center bg-white border-2 border-dashed border-[#5FD4FD] p-8 max-w-lg mx-auto">
            <Compass className="w-10 h-10 text-[#5FD4FD] mx-auto mb-3" />
            <h4 className="text-base font-bold text-[#0082FC]">
              No fitting configurations match &quot;{searchQuery}&quot;
            </h4>
            <p className="text-xs text-[#0082FC]/75 mt-1">
              Try searching by angle (e.g. 90, 45, 22.5), fitting type (tee,
              bend, reducer), or catalog code.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-[#0082FC] text-white text-xs font-bold uppercase rounded-none border-2 border-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
