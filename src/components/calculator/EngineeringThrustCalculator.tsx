"use client";

import {
  AlertCircle,
  Calculator,
  CheckCircle2,
  Download,
  FileCheck2,
  Printer,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";
import {
  type CalculatorInputs,
  calculateThrustRestraint,
  type ThrustResult,
} from "../../lib/thrust-calculator";

export const EngineeringThrustCalculator: React.FC = () => {
  const [pipeDiameter, setPipeDiameter] = useState<number>(12);
  const [testPressure, setTestPressure] = useState<number>(150);
  const [fittingType, setFittingType] =
    useState<CalculatorInputs["fittingType"]>("90-bend");
  const [soilType, setSoilType] =
    useState<CalculatorInputs["soilType"]>("sand");
  const [trenchType, setTrenchType] =
    useState<CalculatorInputs["trenchType"]>(3);
  const [safetyFactor, setSafetyFactor] = useState<number>(1.5);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const result: ThrustResult = useMemo(() => {
    return calculateThrustRestraint({
      pipeDiameter,
      testPressure,
      fittingType,
      soilType,
      trenchType,
      safetyFactor,
    });
  }, [
    pipeDiameter,
    testPressure,
    fittingType,
    soilType,
    trenchType,
    safetyFactor,
  ]);

  const handlePrintSummary = () => {
    window.print();
  };

  return (
    <section
      id="thrust-calculator"
      aria-label="Interactive Joint Restraint Thrust Calculator"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#0565d6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#0565d6] text-[#0082FC] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#0082FC]" />
            <span className="whitespace-nowrap">
              Practical Field Utility Sizing Tool
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
            Thrust Restraint Length Calculator
          </h2>
          <p className="mt-3 text-[#0082FC] text-sm sm:text-base leading-relaxed">
            Calculate the exact restrained pipe footage needed upstream and
            downstream to prevent mechanical joint pull-out under operating
            pressures. Based on AWWA C600 standards.
          </p>
        </div>

        {/* Calculator Main Grid - Balanced 1:1 Two-Column Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Inputs Column (Balanced 50% Width) */}
          <div className="bg-white border-2 border-[#0565d6] rounded-none p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Synchronized Left Header matching Right Header Height */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[#0565d6]/30 min-h-[42px]">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0082FC] flex items-center gap-2 uppercase tracking-tight">
                  <Wrench className="w-5 h-5 text-[#0082FC]" />
                  <span>Jobsite &amp; Trench Parameters</span>
                </h3>
                <span className="text-xs font-bold text-[#0082FC] bg-white px-2.5 py-1 rounded-none border border-[#0565d6] uppercase tracking-wider">
                  AWWA Sizing Engine
                </span>
              </div>

              <div className="space-y-4">
                {/* 1. Pipe Size & Geometry Selector */}
                <div className="bg-white border-2 border-[#0565d6]/60 p-4 rounded-none">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0082FC]">
                      Pipe Size (Nominal Diameter)
                    </span>
                    <span className="text-xs font-bold text-[#0082FC] bg-white border border-[#0565d6] px-2 py-0.5 rounded-none">
                      Actual O.D.: {result.pipeOd}&quot; &bull;{" "}
                      {result.crossSectionArea} sq. in.
                    </span>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {[4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 36].map(
                      (diam) => (
                        <button
                          key={diam}
                          type="button"
                          onClick={() => setPipeDiameter(diam)}
                          className={`py-2 text-center text-xs sm:text-sm font-bold rounded-none border-2 transition-all whitespace-nowrap cursor-pointer ${pipeDiameter === diam
                              ? "bg-[#0082FC] text-white border-[#0082FC] font-black shadow-sm"
                              : "bg-white text-[#0082FC] border-[#0565d6] hover:bg-[#0565d6]/20"
                            }`}
                        >
                          {diam}&quot;
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* 2. Water Pressure (PSI) with Quick Presets */}
                <div className="bg-white border-2 border-[#0565d6]/60 p-4 rounded-none">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="calc-pressure-slider"
                      className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0082FC]"
                    >
                      Working Water Pressure
                    </label>
                    <span className="text-sm font-black text-[#0082FC] bg-white border-2 border-[#0565d6] px-3 py-0.5 rounded-none">
                      {testPressure} PSI
                    </span>
                  </div>
                  <input
                    id="calc-pressure-slider"
                    type="range"
                    min="100"
                    max="350"
                    step="25"
                    value={testPressure}
                    onChange={(e) => setTestPressure(Number(e.target.value))}
                    className="w-full h-2.5 bg-white border border-[#0565d6] rounded-none appearance-none cursor-pointer accent-[#0082FC]"
                  />
                  {/* Quick-Select Municipal Pressure Presets */}
                  <div className="flex items-center justify-between gap-1.5 mt-2.5 pt-2 border-t border-[#0565d6]/30">
                    <span className="text-[10px] font-bold text-[#0082FC]/75 uppercase">
                      Presets:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {[150, 200, 250, 350].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setTestPressure(preset)}
                          className={`px-2 py-0.5 text-[10px] font-bold rounded-none border transition-colors cursor-pointer ${testPressure === preset
                              ? "bg-[#0082FC] text-white border-[#0082FC]"
                              : "bg-white text-[#0082FC] border-[#0565d6] hover:bg-[#0565d6]/20"
                            }`}
                        >
                          {preset} PSI
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Fitting Configuration & Deflection Angle */}
                <div className="bg-white border-2 border-[#0565d6]/60 p-4 rounded-none">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="calc-fitting-select"
                      className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#0082FC]"
                    >
                      Fitting Geometry &amp; Deflection Angle
                    </label>
                    <span className="text-[10px] font-bold text-[#0082FC] bg-[#0565d6]/20 px-2 py-0.5 uppercase">
                      {fittingType === "90-bend"
                        ? "Maximum Radial Thrust"
                        : fittingType === "dead-end"
                          ? "Dead End Direct Surge"
                          : "Deflection Vector"}
                    </span>
                  </div>
                  <select
                    id="calc-fitting-select"
                    value={fittingType}
                    onChange={(e) =>
                      setFittingType(
                        e.target.value as CalculatorInputs["fittingType"],
                      )
                    }
                    className="w-full bg-white border-2 border-[#0565d6] text-[#0082FC] rounded-none px-3.5 py-2 text-xs sm:text-sm font-bold focus:border-[#0082FC] focus:outline-none"
                  >
                    <option value="90-bend">
                      90° Elbow Bend (High Radial Load)
                    </option>
                    <option value="45-bend">45° Deflection Bend</option>
                    <option value="22-bend">22.5° Deflection Bend</option>
                    <option value="11-bend">11.25° Alignment Bend</option>
                    <option value="tee">Branch Tee Header</option>
                    <option value="dead-end">
                      Dead End Terminal Plug / Cap
                    </option>
                  </select>
                </div>

                {/* 4. Soil Type & AWWA C150 Trench Bedding */}
                <div className="bg-white border-2 border-[#0565d6]/60 p-4 rounded-none">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Soil Mechanics */}
                    <div>
                      <label
                        htmlFor="calc-soil-select"
                        className="block text-xs font-black uppercase tracking-wider text-[#0082FC] mb-1.5"
                      >
                        Soil Condition
                      </label>
                      <select
                        id="calc-soil-select"
                        value={soilType}
                        onChange={(e) =>
                          setSoilType(
                            e.target.value as CalculatorInputs["soilType"],
                          )
                        }
                        className="w-full bg-white border-2 border-[#0565d6] text-[#0082FC] rounded-none px-2.5 py-2 text-xs font-bold focus:border-[#0082FC] focus:outline-none"
                      >
                        <option value="sand">
                          Coarse Sand / Compact Gravel (Good)
                        </option>
                        <option value="silt">
                          Silt / Silty Clay (Moderate)
                        </option>
                        <option value="clay">
                          Cohesive Wet Clay (Soft Soil)
                        </option>
                        <option value="hardpan">
                          Dense Hardpan / Glacial Till
                        </option>
                      </select>
                    </div>

                    {/* AWWA C150 Trench Bedding */}
                    <div>
                      <label
                        htmlFor="calc-trench-select"
                        className="block text-xs font-black uppercase tracking-wider text-[#0082FC] mb-1.5"
                      >
                        Trench Bedding (C150)
                      </label>
                      <select
                        id="calc-trench-select"
                        value={trenchType}
                        onChange={(e) =>
                          setTrenchType(
                            Number(
                              e.target.value,
                            ) as CalculatorInputs["trenchType"],
                          )
                        }
                        className="w-full bg-white border-2 border-[#0565d6] text-[#0082FC] rounded-none px-2.5 py-2 text-xs font-bold focus:border-[#0082FC] focus:outline-none"
                      >
                        <option value={1}>Type 1: Flat-bottom, loose</option>
                        <option value={2}>Type 2: Lightly tamped</option>
                        <option value={3}>Type 3: 4&quot; granular bed</option>
                        <option value={4}>Type 4: Bed to centerline</option>
                        <option value={5}>Type 5: Compacted to top</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Factor Footer Strip - Synchronized height and border with right actions */}
            <div className="pt-5 mt-5 border-t-2 border-[#0565d6]/30 flex flex-wrap items-center justify-between gap-3 min-h-[58px]">
              <span className="text-xs sm:text-sm text-[#0082FC] flex items-center gap-2 font-black uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#0565d6]" />
                <span>Safety Factor:</span>
              </span>
              <div className="flex gap-2">
                {[1.5, 2.0].map((factor) => (
                  <button
                    key={factor}
                    type="button"
                    onClick={() => setSafetyFactor(factor)}
                    className={`px-3.5 py-1.5 text-xs font-black rounded-none border-2 transition-colors cursor-pointer uppercase tracking-wider ${safetyFactor === factor
                        ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                        : "bg-white text-[#0082FC] border-[#0565d6] hover:bg-[#0565d6]/20"
                      }`}
                  >
                    {factor.toFixed(1)}x Factor
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Output Panel (Balanced 50% Width) */}
          <div className="bg-white border-2 border-[#0565d6] rounded-none p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            <div>
              {/* Synchronized Right Header matching Left Header Height */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[#0565d6]/30 min-h-[42px]">
                <h3 className="text-base sm:text-lg font-extrabold text-[#0082FC] flex items-center gap-2 uppercase tracking-tight">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#0565d6] animate-pulse" />
                  <span>Calculation Results</span>
                </h3>
                <span className="text-xs font-bold text-[#0082FC] bg-white px-2.5 py-1 rounded-none border border-[#0565d6] uppercase tracking-wider">
                  AWWA C600 Standard
                </span>
              </div>

              <div className="space-y-4">
                {/* 1. Restrained Pipe Footage Hero Card */}
                <div className="bg-white border-2 border-[#0082FC] rounded-none p-5 shadow-sm">
                  <div className="text-xs font-black uppercase text-[#0082FC] tracking-wider mb-1">
                    Recommended Restrained Pipe Length (Each Direction)
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#0082FC] tracking-tight">
                      {result.restrainedLengthFt}
                    </span>
                    <span className="text-base font-extrabold text-[#0082FC] uppercase">
                      Linear Feet
                    </span>
                  </div>

                  {/* Visual Pipe Sticks Indicator */}
                  <div className="mt-3 pt-3 border-t border-[#0082FC]/20">
                    <div className="flex items-center justify-between text-[11px] font-bold text-[#0082FC] mb-1.5">
                      <span>Restrained Joint Allocation:</span>
                      <span className="bg-[#0082FC] text-white px-2 py-0.5 text-[10px] font-black uppercase">
                        {result.numberOfJointsRestrained} Standard 18-FT Joints
                      </span>
                    </div>

                    {/* Pipe Sticks Schematic Progress Graphic */}
                    <div
                      className="grid grid-cols-6 gap-1 my-2"
                      aria-hidden="true"
                    >
                      {[1, 2, 3, 4, 5, 6].map((stickNum) => (
                        <div
                          key={`joint-stick-${stickNum}`}
                          className={`h-2 border border-[#0082FC] ${stickNum <= result.numberOfJointsRestrained
                              ? "bg-[#0565d6]"
                              : "bg-[#0082FC]/10"
                            }`}
                          title={`Joint Stick ${stickNum}`}
                        />
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs text-[#0082FC] font-semibold mt-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0565d6] shrink-0" />
                      <span>
                        Restrain minimum {result.numberOfJointsRestrained}{" "}
                        joints upstream &amp; downstream from fitting
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Total Hydrostatic Thrust Force */}
                <div className="bg-white border-2 border-[#0565d6] rounded-none p-4 sm:p-5">
                  <div className="text-xs font-black uppercase text-[#0082FC] tracking-wider mb-1">
                    Resultant Hydrostatic Thrust Force (T)
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl sm:text-3xl font-black text-[#0082FC]">
                      {result.thrustForceLbf.toLocaleString()}
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-[#0082FC] uppercase">
                      LBS FORCE ({result.thrustForceKn} kN)
                    </span>
                  </div>
                  <div className="mt-1.5 text-xs text-[#0082FC] font-medium leading-relaxed">
                    Calculated at {testPressure} PSI on {result.pipeOd}&quot;
                    pipe O.D. with {safetyFactor}x design safety factor.
                  </div>
                </div>

                {/* 3. Recommended Mechanical Restraint Gland */}
                <div className="bg-white border-2 border-[#0565d6] rounded-none p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-black uppercase text-[#0082FC] tracking-wider">
                      Recommended Mechanical Restraint
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 bg-[#0082FC] text-white">
                      AWWA C111 / UL / FM
                    </span>
                  </div>
                  <div className="font-black text-[#0082FC] text-base sm:text-lg">
                    {result.recommendedModel}
                  </div>
                  <div className="text-xs text-[#0082FC] font-bold mt-0.5">
                    Catalog Part Number: {result.recommendedModelCode}
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#0565d6]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-[#0082FC]">
                    <span>
                      Actuating Wedges:{" "}
                      <strong>{result.actuatingWedges} Grippers</strong>
                    </span>
                    <span>
                      Bolt Torque: <strong>75 to 90 ft-lbs</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: "Save Calculation to PDF" - Synchronized height and border with left strip */}
            <div className="pt-5 mt-5 border-t-2 border-[#0565d6]/30 flex flex-col sm:flex-row gap-3 min-h-[58px] items-center">
              <button
                type="button"
                onClick={() => setShowExportModal(true)}
                className="w-full flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-[#0082FC] hover:bg-[#0565d6] hover:text-[#0082FC] text-white font-black rounded-none text-xs sm:text-sm uppercase tracking-wider border-2 border-[#0082FC] shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4 text-white" />
                <span className="whitespace-nowrap">
                  Save Calculation to PDF
                </span>
              </button>

              <button
                type="button"
                onClick={handlePrintSummary}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-5 bg-white hover:bg-[#0565d6]/20 text-[#0082FC] font-black rounded-none text-xs sm:text-sm uppercase tracking-wider border-2 border-[#0565d6] transition-colors whitespace-nowrap cursor-pointer"
                title="Print Submittal"
              >
                <Printer className="w-4 h-4 text-[#0082FC]" />
                <span className="whitespace-nowrap">Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practical Field Tip */}
        <div className="mt-8 p-5 rounded-none bg-white border-2 border-[#0565d6] text-sm text-[#0082FC] flex items-start gap-3 shadow-sm">
          <AlertCircle className="w-5 h-5 text-[#0082FC] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Jobsite Field Note:</strong> This calculation follows
            standard DIPRA / AWWA C600 formulas assuming a minimum bury depth of
            4.0 feet to the top of pipe. Always check with the project civil
            engineer of record to verify trench soil conditions before final
            backfilling.
          </p>
        </div>
      </div>

      {/* Save Calculation Modal */}
      {showExportModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="calc-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0082FC]/80 backdrop-blur-sm"
        >
          <div className="bg-white border-2 border-[#0082FC] rounded-none max-w-lg w-full p-6 sm:p-8 shadow-2xl text-[#0082FC]">
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#0565d6] mb-6">
              <div>
                <h3
                  id="calc-modal-title"
                  className="text-lg font-bold text-[#0082FC] flex items-center gap-2"
                >
                  <FileCheck2 className="w-5 h-5 text-[#0082FC]" />
                  <span>Aqua Industries Thrust Calculation Summary</span>
                </h3>
                <span className="text-xs text-[#0082FC] font-medium">
                  AWWA C600 Verified Calculation Sheet
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="p-1 rounded-none hover:bg-[#0565d6]/20 text-[#0082FC] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs bg-white p-4 rounded-none border-2 border-[#0565d6]">
              <div className="flex justify-between border-b border-[#0565d6]/30 pb-2">
                <span className="text-[#0082FC]">Pipe Size:</span>
                <span className="font-bold text-[#0082FC]">
                  {pipeDiameter}&quot; Ductile Iron (O.D. {result.pipeOd}&quot;)
                </span>
              </div>
              <div className="flex justify-between border-b border-[#0565d6]/30 pb-2">
                <span className="text-[#0082FC]">Test Pressure:</span>
                <span className="font-bold text-[#0082FC]">
                  {testPressure} PSI
                </span>
              </div>
              <div className="flex justify-between border-b border-[#0565d6]/30 pb-2">
                <span className="text-[#0082FC]">Resultant Thrust:</span>
                <span className="font-bold text-[#0082FC]">
                  {result.thrustForceLbf.toLocaleString()} LBS FORCE
                </span>
              </div>
              <div className="flex justify-between border-b border-[#0565d6]/30 pb-2">
                <span className="text-[#0082FC]">
                  Restrained Footage Required:
                </span>
                <span className="font-bold text-[#0082FC]">
                  {result.restrainedLengthFt} Linear Feet (
                  {result.numberOfJointsRestrained} Joints)
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-[#0082FC]">Specified Model:</span>
                <span className="font-bold text-[#0082FC]">
                  {result.recommendedModel}
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="px-4 py-2 bg-white hover:bg-[#0565d6]/20 text-[#0082FC] border border-[#0565d6] text-xs font-semibold rounded-none"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handlePrintSummary}
                className="px-5 py-2 bg-[#0082FC] hover:bg-[#0565d6] hover:text-[#0082FC] text-white text-xs font-bold rounded-none border-2 border-[#0082FC] shadow-md flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Official PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
