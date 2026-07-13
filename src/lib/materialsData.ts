import { Anvil, Hammer, Construction, Layers, Beaker, LucideIcon } from "lucide-react";
import { Wrench, Droplet, Lightbulb, Grid3X3, DoorOpen } from 'lucide-react';
import { title } from "process";
export interface Category {
  title: string;
  slug: string;
  video?: string;       // Made optional
  image?: string;       // Added optional static image field
  description: string;
  specs: string[];
  icon: LucideIcon;
  color: string;
}
export const categories = [
  {
    title: "Trench Products",
    slug: "trench-products",
    video: "/video/trench/Trench 500 Animation.498.mp4",
    description: "Heavy-duty drainage solutions for high-traffic industrial environments.",
    specs: ["Ductile Iron Construction", "Load Class D400+", "Anti-Slip Surface", "UV Resistant Coating"],
    icon: Wrench,
    color: "bg-[#B31942]",
  },
  {
    title: "Cleanouts",
    slug: "cleanouts",
    image: "/assets/PAVING-RISERS/products/cleanout.jpeg",
    description: "Professional grade access points for plumbing and waste systems.",
    specs: ["Gas-tight Seals", "Brass/Nickel Finish", "Easy-access Design", "Corrosion Resistant"],
    icon: Droplet,
    color: "bg-[#B31942]",
  },
  {
    title: "New Innovations",
    slug: "new-innovations",
    image: "/assets/MEGA/MONITERING WELL STATION.11 - Copy.png", // Construction/Infrastructure image
    description: "Cutting-edge casting technologies and patent-pending industrial designs.",
    specs: ["Patent-pending Technology", "Sustainable Materials", "IoT Ready Sensors", "High Precision Molding"],
    icon: Lightbulb,
    color: "bg-[#B31942]",
  },
  {
    title: "Pipe Grates",
    slug: "pipe-grates",
    video: "/assets/PAVING-RISERS/products/pipe grate.mp4",
    description: "Optimized water flow and debris management for municipal projects.",
    specs: ["High Flow Efficiency", "Debris Filtration", "Cast Iron Durability", "Custom Sizes Available"],
    icon: Grid3X3,
    color: "bg-[#B31942]",
  },
  {
    title: "Hinged Castings",
    slug: "hinged-castings",
    image: "/assets/MEGA/HATCHES COVER.jpeg", //     description: "Ergonomic, easy-access manhole and utility covers for safety.",
    description: "Ergonomic, easy-access manhole and utility covers for safety.",
    specs: ["Ergonomic Lift Assist", "Safety Lock System", "Heavy Duty Hinge", "Reduced Maintenance Cost"],
    icon: DoorOpen,
    color: "bg-[#B31942]",
  },
  {
    title: "MJ Fittings",
    slug: "mj-fittings",
    image: "/assets/MEGA/MJ Fittings.jpeg",
    description: "Our range of mechanical joint (MJ) fittings are engineered for superior sealing performance in underground water and gas pipelines.   ",
    specs: ["ISO 2531/EN 545 Standard", "Flange Sizes: 50mm - 1200mm", "Working Pressure: Up to 16 Bar", "Corrosion-Resistant Epoxy Coating"],
    icon: Wrench,
    color: "bg-[#B31942]",
  }
];

export const materialsData: Record<string, any> = {
  "cast-iron": {
    title: "Cast Iron",
    icon: Anvil,
    description: "Known for its excellent machinability, vibration dampening, and wear resistance. Ideal for engine blocks, manhole covers, and heavy machinery bases.",
    properties: ["High compressive strength", "Good castability", "Vibration damping", "Wear resistance"],
    applications: ["Automotive engine blocks", "Pipe fittings", "Machine tool bases", "Manhole covers"],
    image: "/assets/image16.jpg"
  },
  "ductile-iron": {
    title: "Ductile Iron",
    icon: Hammer,
    description: "Also known as nodular cast iron, it offers the castability of gray iron but with much higher tensile strength and toughness.",
    properties: ["High ductility", "Impact resistance", "High tensile strength", "Elasticity"],
    applications: ["Water and sewer pipes", "Automotive crankshafts", "Wind turbine hubs", "Hydraulic components"],
    image: "/assets/image13.jpg"
  },
  "steel": {
    title: "Steel",
    icon: Construction,
    description: "The backbone of modern construction. We offer carbon, alloy, and tool steels tailored to structural integrity and durability needs.",
    properties: ["High yield strength", "Weldability", "Versatility", "Durability"],
    applications: ["Structural beams", "Automotive chassis", "Construction equipment", "Tools and dies"],
    image: "/assets/image11.jpg"
  },
  "aluminum": {
    title: "Aluminum",
    icon: Layers,
    description: "Lightweight yet strong, aluminum is essential for aerospace, automotive, and marine industries requiring corrosion resistance.",
    properties: ["Lightweight", "Corrosion resistant", "High thermal conductivity", "Non-magnetic"],
    applications: ["Aerospace components", "Automotive panels", "Heat sinks", "Marine fittings"],
    image: "/assets/image7.jpeg"
  },
  "stainless": {
    title: "Stainless Steel",
    icon: Beaker,
    description: "Selected for its corrosion resistance and hygiene properties. Essential for medical, food processing, and chemical industries.",
    properties: ["Excellent corrosion resistance", "High temperature strength", "Hygienic surface", "Low maintenance"],
    applications: ["Food processing equipment", "Medical instruments", "Chemical tanks", "Architectural cladding"],
    image: "/assets/image12.jpg"
  }
};