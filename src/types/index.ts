export type ProductStandard =
  | "AWWA C153"
  | "AWWA C110"
  | "AWWA C151"
  | "ASTM A888"
  | "ASTM A74"
  | "ASTM A536"
  | "AASHTO M306"
  | "ANSI/NSF 61"
  | "UL/FM";

export type JointType =
  | "Mechanical Joint (MJ)"
  | "Flanged (Class 125/250)"
  | "Push-On Joint (Tyton)"
  | "Hubless No-Hub"
  | "Hub & Spigot"
  | "Wedge Action Restrained";

export interface ProductItem {
  id: string;
  name: string;
  category: "waterworks" | "restraints" | "castings" | "soilpipe" | "saddles";
  categoryLabel: string;
  standard: ProductStandard;
  pressureRating: string;
  jointType: JointType;
  diameterRange: string;
  material: string;
  coating: string;
  description: string;
  cadFile: string;
  submittalFile: string;
  specs: {
    tensileStrength: string;
    yieldStrength: string;
    elongation: string;
    wallThicknessClass: string;
    standardBoltCount: string;
    torqueSpec: string;
  };
  keyFeatures: string[];
  imageUrl: string;
  aisCompliant: boolean;
  buyAmericaReady: boolean;
}

export interface YardLocation {
  id: string;
  city: string;
  state: string;
  name: string;
  address: string;
  phone: string;
  dispatchEmail: string;
  stockStatus: "Normal Stock" | "High Capacity" | "Critical Fast-Track";
  coverageRadius: string;
  railSpur: boolean;
  transitHours: string;
  inventoryFittingsTons: number;
  inventoryRestraintsUnits: number;
}

export interface ThrustCalculationResult {
  pipeDiameter: number;
  testPressure: number;
  fittingType: string;
  soilType: string;
  trenchType: number;
  safetyFactor: number;
  resultantThrustLbf: number;
  restrainedLengthFt: number;
  recommendedRestraintModel: string;
  boltTorqueFtLbs: string;
  unitWeightLbPerFt: number;
}

export interface RfqItem {
  productId: string;
  productName: string;
  size: string;
  quantity: number;
  jointType: string;
  notes?: string;
}
