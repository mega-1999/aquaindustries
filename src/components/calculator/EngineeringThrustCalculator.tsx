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
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
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

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Inputs (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#5FD4FD] rounded-none p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-[#0082FC] mb-6 flex items-center gap-2 border-b-2 border-[#5FD4FD]/30 pb-3">
              <Wrench className="w-5 h-5 text-[#0082FC]" />
              <span>Jobsite &amp; Trench Parameters</span>
            </h3>

            <div className="space-y-6">
              {/* Pipe Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#0082FC]">
                    Pipe Size (Nominal Diameter)
                  </span>
                  <span className="text-sm text-[#0082FC] font-bold bg-white border-2 border-[#5FD4FD] px-2.5 py-0.5 rounded-none">
                    Actual O.D.: {result.pipeOd}&quot;
                  </span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {[4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 30, 36].map((diam) => (
                    <button
                      key={diam}
                      type="button"
                      onClick={() => setPipeDiameter(diam)}
                      className={`py-2.5 text-center text-sm font-bold rounded-none border-2 transition-all whitespace-nowrap ${
                        pipeDiameter === diam
                          ? "bg-[#0082FC] text-white border-[#0082FC] font-extrabold shadow-sm"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                      }`}
                    >
                      {diam}&quot;
                    </button>
                  ))}
                </div>
              </div>

              {/* Water Pressure & Fitting Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Water Pressure (PSI) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="calc-pressure-slider"
                      className="text-sm font-bold uppercase tracking-wider text-[#0082FC]"
                    >
                      Water Pressure (PSI)
                    </label>
                    <span className="text-sm font-bold text-[#0082FC] bg-white border-2 border-[#5FD4FD] px-2.5 py-0.5 rounded-none">
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
                    className="w-full h-2.5 bg-white border border-[#5FD4FD] rounded-none appearance-none cursor-pointer accent-[#0082FC]"
                  />
                  <div className="flex justify-between text-xs text-[#0082FC] mt-1.5 font-bold">
                    <span>100 PSI</span>
                    <span>150</span>
                    <span>200</span>
                    <span>250</span>
                    <span>300</span>
                    <span>350 PSI</span>
                  </div>
                </div>

                {/* Fitting Type */}
                <div>
                  <label
                    htmlFor="calc-fitting-select"
                    className="block text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-2"
                  >
                    Fitting Type
                  </label>
                  <select
                    id="calc-fitting-select"
                    value={fittingType}
                    onChange={(e) =>
                      setFittingType(
                        e.target.value as CalculatorInputs["fittingType"],
                      )
                    }
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-2.5 text-sm font-bold focus:border-[#0082FC] focus:outline-none"
                  >
                    <option value="90-bend">90° Bend</option>
                    <option value="45-bend">45° Bend</option>
                    <option value="22-bend">22.5° Bend</option>
                    <option value="11-bend">11.25° Bend</option>
                    <option value="tee">Branch Tee</option>
                    <option value="dead-end">Dead End Plug</option>
                  </select>
                </div>
              </div>

              {/* Soil Type & Trench Bedding */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Soil Type */}
                <div>
                  <label
                    htmlFor="calc-soil-select"
                    className="block text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-2"
                  >
                    Soil Type
                  </label>
                  <select
                    id="calc-soil-select"
                    value={soilType}
                    onChange={(e) =>
                      setSoilType(
                        e.target.value as CalculatorInputs["soilType"],
                      )
                    }
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-2.5 text-sm font-bold focus:border-[#0082FC] focus:outline-none"
                  >
                    <option value="sand">Coarse Sand / Compact Gravel</option>
                    <option value="silt">Silt / Silty Clay</option>
                    <option value="clay">Cohesive Wet Clay (Soft Soil)</option>
                    <option value="hardpan">Hardpan / Dense Till</option>
                  </select>
                </div>

                {/* AWWA Trench Type */}
                <div>
                  <label
                    htmlFor="calc-trench-select"
                    className="block text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-2"
                  >
                    Trench Bedding (AWWA C150)
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
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-2.5 text-sm font-bold focus:border-[#0082FC] focus:outline-none"
                  >
                    <option value={1}>
                      Type 1: Flat-bottom, loose backfill
                    </option>
                    <option value={2}>
                      Type 2: Flat-bottom, lightly tamped
                    </option>
                    <option value={3}>
                      Type 3: 4&quot; granular bed, lightly tamped
                    </option>
                    <option value={4}>
                      Type 4: Granular bed to pipe centerline
                    </option>
                    <option value={5}>
                      Type 5: Granular bed to top of pipe, compacted
                    </option>
                  </select>
                </div>
              </div>

              {/* Safety Factor */}
              <div className="pt-2 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between">
                <span className="text-sm text-[#0082FC] flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#5FD4FD]" />
                  Engineering Safety Factor:
                </span>
                <div className="flex gap-2">
                  {[1.5, 2.0].map((factor) => (
                    <button
                      key={factor}
                      type="button"
                      onClick={() => setSafetyFactor(factor)}
                      className={`px-4 py-2 text-sm rounded-none font-bold border-2 transition-colors ${
                        safetyFactor === factor
                          ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                          : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                      }`}
                    >
                      {factor.toFixed(1)}x Factor
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Output Panel (5 Columns) */}
          <div className="lg:col-span-5 bg-white border-2 border-[#5FD4FD] rounded-none p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-[#5FD4FD]/30">
                <span className="text-sm font-bold uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-none bg-[#5FD4FD] animate-pulse" />
                  Calculation Results
                </span>
                <span className="text-xs font-bold text-[#0082FC] bg-white px-2.5 py-1 rounded-none border border-[#5FD4FD]">
                  AWWA C600 Standard
                </span>
              </div>

              {/* Restrained Pipe Footage Output */}
              <div className="bg-white border-2 border-[#0082FC] rounded-none p-5 mb-5 shadow-sm">
                <div className="text-sm font-bold uppercase text-[#0082FC] mb-1">
                  Recommended Restrained Pipe Length (Each Direction)
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0082FC]">
                    {result.restrainedLengthFt}
                  </span>
                  <span className="text-base font-bold text-[#0082FC]">
                    Linear Feet
                  </span>
                </div>
                <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-white border border-[#5FD4FD] text-xs sm:text-sm text-[#0082FC] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#5FD4FD] shrink-0" />
                  <span>
                    Requires {result.numberOfJointsRestrained} Full Standard
                    18-ft Pipe Lengths Restrained Upstream &amp; Downstream
                  </span>
                </div>
              </div>

              {/* Total Thrust Force */}
              <div className="bg-white border-2 border-[#5FD4FD] rounded-none p-5 mb-5">
                <div className="text-sm font-bold uppercase text-[#0082FC] mb-1">
                  Resultant Hydrostatic Thrust Force (T)
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#0082FC]">
                    {result.thrustForceLbf.toLocaleString()}
                  </span>
                  <span className="text-sm font-bold text-[#0082FC]">
                    LBS FORCE ({result.thrustForceKn} kN)
                  </span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-[#0082FC] font-medium">
                  Calculated at {testPressure} PSI on {result.pipeOd}&quot; pipe
                  O.D. with {safetyFactor}x safety factor.
                </div>
              </div>

              {/* Recommended Restraint Gland Model */}
              <div className="bg-white border-2 border-[#5FD4FD] rounded-none p-4">
                <div className="text-sm font-bold uppercase text-[#0082FC] mb-1">
                  Recommended Mechanical Restraint
                </div>
                <div className="font-extrabold text-[#0082FC] text-base">
                  {result.recommendedModel}
                </div>
                <div className="text-sm text-[#0082FC] font-semibold mt-0.5">
                  Part Number: {result.recommendedModelCode}
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#5FD4FD]/30 text-xs sm:text-sm text-[#0082FC]">
                  Actuating Wedges:{" "}
                  <strong>{result.actuatingWedges} Grippers</strong> &bull; Bolt
                  Torque: <strong>75 to 90 ft-lbs</strong>
                </div>
              </div>
            </div>

            {/* Action Buttons: "Save Calculation to PDF" */}
            <div className="mt-6 pt-5 border-t-2 border-[#5FD4FD]/30 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setShowExportModal(true)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold rounded-none text-sm sm:text-base border-2 border-[#0082FC] shadow-md transition-all whitespace-nowrap"
              >
                <Download className="w-5 h-5 text-white group-hover:text-[#0082FC]" />
                <span className="whitespace-nowrap">
                  Save Calculation to PDF
                </span>
              </button>

              <button
                type="button"
                onClick={handlePrintSummary}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] font-extrabold rounded-none text-sm sm:text-base border-2 border-[#5FD4FD] transition-colors whitespace-nowrap"
                title="Print Submittal"
              >
                <Printer className="w-5 h-5 text-[#0082FC]" />
                <span className="whitespace-nowrap">Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Practical Field Tip */}
        <div className="mt-8 p-5 rounded-none bg-white border-2 border-[#5FD4FD] text-sm text-[#0082FC] flex items-start gap-3 shadow-sm">
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
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#5FD4FD] mb-6">
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
                className="p-1 rounded-none hover:bg-[#5FD4FD]/20 text-[#0082FC] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs bg-white p-4 rounded-none border-2 border-[#5FD4FD]">
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Pipe Size:</span>
                <span className="font-bold text-[#0082FC]">
                  {pipeDiameter}&quot; Ductile Iron (O.D. {result.pipeOd}&quot;)
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Test Pressure:</span>
                <span className="font-bold text-[#0082FC]">
                  {testPressure} PSI
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                <span className="text-[#0082FC]">Resultant Thrust:</span>
                <span className="font-bold text-[#0082FC]">
                  {result.thrustForceLbf.toLocaleString()} LBS FORCE
                </span>
              </div>
              <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
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
                className="px-4 py-2 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] border border-[#5FD4FD] text-xs font-semibold rounded-none"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handlePrintSummary}
                className="px-5 py-2 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white text-xs font-bold rounded-none border-2 border-[#0082FC] shadow-md flex items-center gap-2"
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
