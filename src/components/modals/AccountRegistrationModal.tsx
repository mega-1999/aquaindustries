"use client";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  UserCheck,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { DISTRIBUTION_YARDS } from "../../data/waterworks-data";

interface AccountRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountRegistrationModal: React.FC<
  AccountRegistrationModalProps
> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [legalEntity, setLegalEntity] = useState("");
  const [taxId, setTaxId] = useState("");
  const [accountType, setAccountType] = useState("Contractor");
  const [assignedYard, setAssignedYard] = useState("new-york-foundry");
  const [w9Uploaded, setW9Uploaded] = useState(false);
  const [resaleUploaded, setResaleUploaded] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setRegistrationComplete(true);
      setTimeout(() => {
        setRegistrationComplete(false);
        setCurrentStep(1);
        onClose();
      }, 2500);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0082FC]/80 backdrop-blur-sm"
    >
      <div className="bg-white border-2 border-[#0082FC] rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl text-[#0082FC] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#0082FC] hover:bg-[#5FD4FD]/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#5FD4FD]/30">
          <div className="w-12 h-12 rounded-none bg-white text-[#0082FC] border-2 border-[#5FD4FD] flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6 text-[#0082FC]" />
          </div>
          <div>
            <h3
              id="reg-modal-title"
              className="text-xl sm:text-2xl font-black text-[#0082FC] whitespace-nowrap"
            >
              Commercial Account Registration
            </h3>
            <p className="text-xs sm:text-sm text-[#0082FC] font-medium mt-0.5">
              Establish Wholesale Credit &amp; Primary Stocking Yard Allocation
            </p>
          </div>
        </div>

        {/* 3-Step Wizard Indicator */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[
            { step: 1, title: "Business Profile" },
            { step: 2, title: "Yard Allocation" },
            { step: 3, title: "W-9 & Resale" },
          ].map((item) => (
            <div
              key={item.step}
              className={`p-2.5 rounded-none text-center border-2 transition-all ${
                currentStep === item.step
                  ? "bg-[#0082FC] border-[#0082FC] text-white"
                  : currentStep > item.step
                    ? "bg-white border-[#5FD4FD] text-[#0082FC]"
                    : "bg-white border-[#5FD4FD]/30 text-[#0082FC]/60"
              }`}
            >
              <div className="text-xs font-bold uppercase">
                Step {item.step}
              </div>
              <div className="text-xs sm:text-sm font-extrabold whitespace-nowrap">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {registrationComplete ? (
          <div className="py-10 text-center flex flex-col items-center">
            <CheckCircle2 className="w-14 h-14 text-[#5FD4FD] mb-3" />
            <h4 className="text-xl font-black text-[#0082FC]">
              Account Application Submitted
            </h4>
            <p className="text-sm text-[#0082FC] max-w-sm mt-1 leading-relaxed">
              Your business credit profile and resale certificate have been sent
              to Aqua Industries credit review. Your account manager will reach
              out today.
            </p>
          </div>
        ) : (
          <div>
            {/* Step 1: Business Profile */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="reg-account-type"
                    className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5"
                  >
                    Account Type *
                  </label>
                  <select
                    id="reg-account-type"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-3 text-sm font-bold focus:border-[#0082FC] focus:outline-none"
                  >
                    <option value="Contractor">
                      Civil Underground Utility Contractor
                    </option>
                    <option value="Distributor">
                      Waterworks Supply Wholesaler
                    </option>
                    <option value="Municipality">
                      City Water Authority / Public Works
                    </option>
                    <option value="Industrial">
                      Industrial Piping Contractor
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="reg-entity-name"
                    className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5"
                  >
                    Registered Business Entity Name *
                  </label>
                  <input
                    id="reg-entity-name"
                    type="text"
                    required
                    placeholder="e.g. Great Lakes Civil Contractors, LLC"
                    value={legalEntity}
                    onChange={(e) => setLegalEntity(e.target.value)}
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-3 text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reg-tax-id"
                    className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-1.5"
                  >
                    Federal Tax ID (EIN) *
                  </label>
                  <input
                    id="reg-tax-id"
                    type="text"
                    required
                    placeholder="XX-XXXXXXX"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-3.5 py-3 text-sm font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                  />
                </div>

                <div className="p-3.5 bg-white rounded-none border-2 border-[#5FD4FD] text-xs sm:text-sm text-[#0082FC] font-semibold leading-relaxed">
                  Commercial accounts benefit from standard Net 30 terms,
                  jobsite staging hold orders, and direct factory pricing.
                </div>
              </div>
            )}

            {/* Step 2: Regional Yard Assignment */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0082FC] mb-2">
                  Select Primary Stocking Yard
                </div>

                <div className="space-y-3">
                  {DISTRIBUTION_YARDS.map((yard) => (
                    <label
                      key={yard.id}
                      className={`flex items-center justify-between p-3.5 rounded-none border-2 cursor-pointer transition-all ${
                        assignedYard === yard.id
                          ? "bg-white border-[#0082FC]"
                          : "bg-white border-[#5FD4FD] hover:bg-[#5FD4FD]/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="assignedYard"
                          value={yard.id}
                          checked={assignedYard === yard.id}
                          onChange={(e) => setAssignedYard(e.target.value)}
                          className="text-[#0082FC] focus:ring-[#0082FC] accent-[#0082FC] w-4 h-4"
                        />
                        <div>
                          <div className="text-sm sm:text-base font-bold text-[#0082FC]">
                            {yard.name}
                          </div>
                          <div className="text-xs sm:text-sm text-[#0082FC]">
                            {yard.city}, {yard.state} &bull;{" "}
                            {yard.coverageRadius}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-none bg-white border border-[#5FD4FD] text-[#0082FC] whitespace-nowrap">
                        {yard.transitHours}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: W-9 & Resale Certificate */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0082FC] mb-2">
                  Tax Exemption &amp; Resale Documentation
                </div>

                {/* W-9 Form Upload */}
                <div className="border-2 border-[#5FD4FD] rounded-none p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileCheck2 className="w-6 h-6 text-[#0082FC] shrink-0" />
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#0082FC]">
                        Form W-9 (Signed PDF)
                      </div>
                      <div className="text-xs sm:text-sm text-[#0082FC]">
                        {w9Uploaded
                          ? "✓ Document Attached (W9_Signed.pdf)"
                          : "Upload signed W-9 document"}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setW9Uploaded(!w9Uploaded)}
                    className="px-4 py-2 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-xs sm:text-sm font-extrabold rounded-none border-2 border-[#5FD4FD] whitespace-nowrap shadow-sm"
                  >
                    {w9Uploaded ? "Replace" : "Upload File"}
                  </button>
                </div>

                {/* State Resale Certificate */}
                <div className="border-2 border-[#5FD4FD] rounded-none p-4 bg-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#5FD4FD] shrink-0" />
                    <div>
                      <div className="text-sm sm:text-base font-bold text-[#0082FC]">
                        State Resale / Sales Tax Exemption
                      </div>
                      <div className="text-xs sm:text-sm text-[#0082FC]">
                        {resaleUploaded
                          ? "✓ Document Attached (Resale_Cert.pdf)"
                          : "Department of Revenue certificate"}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResaleUploaded(!resaleUploaded)}
                    className="px-4 py-2 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-xs sm:text-sm font-extrabold rounded-none border-2 border-[#5FD4FD] whitespace-nowrap shadow-sm"
                  >
                    {resaleUploaded ? "Replace" : "Upload File"}
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-[#0082FC] italic pt-1">
                  * Documents may also be emailed post-registration to
                  credit@aquaindustries.com.
                </div>
              </div>
            )}

            {/* Modal Buttons */}
            <div className="mt-8 pt-5 border-t-2 border-[#5FD4FD]/30 flex items-center justify-between gap-3">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-3 bg-white hover:bg-[#5FD4FD]/20 text-[#0082FC] text-sm sm:text-base font-extrabold rounded-none border-2 border-[#5FD4FD] flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4 text-[#0082FC]" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-3 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold text-sm sm:text-base rounded-none border-2 border-[#0082FC] shadow-md flex items-center gap-2 whitespace-nowrap"
              >
                <span>
                  {currentStep === 3
                    ? "Complete Account Registration"
                    : `Proceed to Step ${currentStep + 1}`}
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:text-[#0082FC]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
