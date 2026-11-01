export interface CalculatorInputs {
  pipeDiameter: number; // inches (4 to 36)
  testPressure: number; // PSI (100 to 350)
  fittingType:
    | "90-bend"
    | "45-bend"
    | "22-bend"
    | "11-bend"
    | "tee"
    | "dead-end";
  soilType: "clay" | "silt" | "sand" | "hardpan";
  trenchType: 1 | 2 | 3 | 4 | 5; // AWWA C150 / C600 trench types
  safetyFactor: number; // standard 1.5
}

export interface ThrustResult {
  pipeOd: number; // inches
  crossSectionArea: number; // sq inches
  thrustForceLbf: number; // lbf
  thrustForceKn: number; // kN
  restrainedLengthFt: number; // linear feet upstream & downstream
  numberOfJointsRestrained: number; // based on standard 18-ft pipe lengths
  recommendedModel: string;
  recommendedModelCode: string;
  actuatingWedges: number;
  torqueFtLbs: string;
  standardPipeLengthFt: number;
  trenchDescription: string;
  soilDescription: string;
}

// Ductile Iron Pipe Standard Outside Diameters (AWWA C151)
const DUCTILE_OD_MAP: Record<number, number> = {
  3: 3.96,
  4: 4.8,
  6: 6.9,
  8: 9.05,
  10: 11.1,
  12: 13.2,
  14: 15.3,
  16: 17.4,
  18: 19.5,
  20: 21.6,
  24: 25.8,
  30: 32.0,
  36: 38.3,
};

// Soil friction coefficients (unit frictional drag Fs in lbs/linear ft per inch OD)
const SOIL_PARAMS: Record<
  string,
  { label: string; frictionFactor: number; bearingFactor: number }
> = {
  clay: {
    label: "Cohesive Saturated Clay / Plastic Soil (Poor)",
    frictionFactor: 14.5,
    bearingFactor: 22.0,
  },
  silt: {
    label: "Silt & Clayey Sands (Fair)",
    frictionFactor: 21.0,
    bearingFactor: 34.0,
  },
  sand: {
    label: "Clean Coarse Sand & Compacted Gravel (Good)",
    frictionFactor: 32.5,
    bearingFactor: 58.0,
  },
  hardpan: {
    label: "Hardpan & Dense Glacial Till (Excellent)",
    frictionFactor: 48.0,
    bearingFactor: 85.0,
  },
};

const TRENCH_DESCRIPTIONS: Record<
  number,
  { title: string; multiplier: number }
> = {
  1: {
    title: "Type 1: Flat-bottom trench, loose backfill (AWWA C150)",
    multiplier: 0.7,
  },
  2: {
    title: "Type 2: Flat-bottom trench, lightly tamped backfill",
    multiplier: 0.85,
  },
  3: {
    title: 'Type 3: Pipe bedded in 4" loose sand/gravel, lightly tamped',
    multiplier: 1.0,
  },
  4: {
    title: "Type 4: Pipe bedded in sand/gravel to centerline, compacted",
    multiplier: 1.25,
  },
  5: {
    title: "Type 5: Pipe bedded to top of pipe in compacted granular material",
    multiplier: 1.5,
  },
};

export function calculateThrustRestraint(
  inputs: CalculatorInputs,
): ThrustResult {
  const {
    pipeDiameter,
    testPressure,
    fittingType,
    soilType,
    trenchType,
    safetyFactor,
  } = inputs;

  const od = DUCTILE_OD_MAP[pipeDiameter] || pipeDiameter * 1.05;
  const area = (Math.PI * od ** 2) / 4;

  let bendAngleDeg = 90;
  let isDeadEndOrTee = false;

  switch (fittingType) {
    case "90-bend":
      bendAngleDeg = 90;
      break;
    case "45-bend":
      bendAngleDeg = 45;
      break;
    case "22-bend":
      bendAngleDeg = 22.5;
      break;
    case "11-bend":
      bendAngleDeg = 11.25;
      break;
    case "tee":
    case "dead-end":
      isDeadEndOrTee = true;
      break;
  }

  // Hydrostatic Thrust Force T = 2 * P * A * sin(theta/2)
  let thrustForceLbf = 0;
  if (isDeadEndOrTee) {
    thrustForceLbf = testPressure * area;
  } else {
    const angleRad = (bendAngleDeg * Math.PI) / 180;
    thrustForceLbf = 2 * testPressure * area * Math.sin(angleRad / 2);
  }

  const thrustForceKn = (thrustForceLbf * 4.44822) / 1000;

  // Resistance per linear foot of pipe
  const soil = SOIL_PARAMS[soilType] || SOIL_PARAMS.sand;
  const trench = TRENCH_DESCRIPTIONS[trenchType] || TRENCH_DESCRIPTIONS[3];

  const totalUnitResistance =
    (soil.frictionFactor * od + soil.bearingFactor * (od / 12)) *
    trench.multiplier;

  // Restrained length Lr = (SafetyFactor * Thrust) / Total Unit Resistance
  // With bend angle modifier
  const angleFactorModifier = isDeadEndOrTee
    ? 1.0
    : 1 - Math.tan((bendAngleDeg * Math.PI) / (180 * 4));
  const calculatedFeet = Math.max(
    18,
    Math.ceil(
      (safetyFactor * thrustForceLbf * angleFactorModifier) /
        Math.max(totalUnitResistance, 1) /
        2,
    ),
  );

  const standardPipeLengthFt = 18;
  const numberOfJointsRestrained = Math.ceil(
    calculatedFeet / standardPipeLengthFt,
  );
  const roundedRestrainedFt = numberOfJointsRestrained * standardPipeLengthFt;

  // Model & Wedge lookup based on diameter
  let recommendedModel = "Titan Series 3000 Wedge Restraint Gland";
  let recommendedModelCode = `T-3000-D${pipeDiameter}-MJ`;
  let actuatingWedges = 4;
  const torqueFtLbs = "75 - 90 ft-lbs (Hex Head Breakaway)";

  if (pipeDiameter <= 4) {
    actuatingWedges = 2;
  } else if (pipeDiameter <= 8) {
    actuatingWedges = 4;
  } else if (pipeDiameter <= 12) {
    actuatingWedges = 8;
  } else if (pipeDiameter <= 16) {
    actuatingWedges = 12;
  } else if (pipeDiameter <= 24) {
    actuatingWedges = 16;
  } else {
    actuatingWedges = 24;
    recommendedModel = "Titan Series 4100 Dual-Flange Restraint Harness";
    recommendedModelCode = `T-4100-HD${pipeDiameter}`;
  }

  return {
    pipeOd: Number(od.toFixed(2)),
    crossSectionArea: Number(area.toFixed(1)),
    thrustForceLbf: Math.round(thrustForceLbf),
    thrustForceKn: Number(thrustForceKn.toFixed(1)),
    restrainedLengthFt: roundedRestrainedFt,
    numberOfJointsRestrained,
    recommendedModel,
    recommendedModelCode,
    actuatingWedges,
    torqueFtLbs,
    standardPipeLengthFt,
    trenchDescription: trench.title,
    soilDescription: soil.label,
  };
}
