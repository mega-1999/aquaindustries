export type ProductStandard =
  | "AWWA C153"
  | "AWWA C110"
  | "AWWA C115"
  | "AWWA C111"
  | "AWWA C104"
  | "AWWA C116"
  | "ASTM A536"
  | "ASTM A48"
  | "AASHTO M306"
  | "ANSI/NSF 61"
  | "ANSI/NSF 372"
  | "UL/FM"
  | "ISO 8179"
  | "ADA Standards";

export type JointType =
  | "Mechanical Joint (MJ)"
  | "Flanged (Class 125/250)"
  | "Push-On Joint (Tyton)"
  | "Wedge Action Restrained"
  | "Harness Restrained"
  | "Threaded & Companion"
  | "Gravity Flow Drop-In";

export type ProductCategory =
  | "all"
  | "fittings"
  | "restraints"
  | "accessories"
  | "linings-coatings"
  | "hydrants-flanges"
  | "valve-meter-boxes"
  | "municipal-castings";

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
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
