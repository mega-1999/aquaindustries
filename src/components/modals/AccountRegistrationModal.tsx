"use client";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  FileCheck2,
  Lock,
  Mail,
  MapPin,
  Phone,
  ShieldAlert,
  ShieldCheck,
  UploadCloud,
  User,
  UserCheck,
  X,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { DISTRIBUTION_YARDS } from "../../data/waterworks-data";

interface AccountRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountRegistrationModal: React.FC<
  AccountRegistrationModalProps
> = ({ isOpen, onClose }) => {
  const { register } = useAuth();

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Fields
  const [companyName, setCompanyName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [accountType, setAccountType] = useState<
    | "Contractor"
    | "Supply House Partner"
    | "Municipal Utility"
    | "Engineering Specifier"
  >("Contractor");
  const [assignedYard, setAssignedYard] = useState("new-york-foundry");
  const [taxId, setTaxId] = useState("");
  const [w9Uploaded, setW9Uploaded] = useState(true);
  const [resaleUploaded, setResaleUploaded] = useState(true);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registeredUser, setRegisteredUser] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage(null);

    // Validation for Step 1: Business Info
    if (currentStep === 1) {
      if (!companyName.trim() || !fullName.trim()) {
        setErrorMessage(
          "Please enter your Company Name and Primary Authorized Contact Name.",
        );
        return;
      }
      setCurrentStep(2);
      return;
    }

    // Validation for Step 2: Yard & Tax ID
    if (currentStep === 2) {
      if (!taxId.trim()) {
        setErrorMessage(
          "Please enter your Federal Tax ID (EIN) or State Contractor License Number.",
        );
        return;
      }
      setCurrentStep(3);
      return;
    }

    // Validation & Submission for Step 3: W-9 & Credentials
    if (currentStep === 3) {
      if (!email.trim() || !password.trim()) {
        setErrorMessage(
          "Please complete all required fields: Business Email and Account Password.",
        );
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        setErrorMessage("Please enter a valid business email address.");
        return;
      }
      if (password.trim().length < 6) {
        setErrorMessage("Password must be at least 6 characters long.");
        return;
      }

      setIsSubmitting(true);
      const res = register({
        companyName,
        fullName,
        email,
        password,
        phone: phone || "+1 (516) 252-1111",
        accountType,
        assignedYard,
        taxIdOrLicense: taxId,
        w9Uploaded,
        resaleUploaded,
        role: "contractor",
      });

      setIsSubmitting(false);

      if (res.success && res.user) {
        setRegisteredUser(res.user);
      } else {
        setErrorMessage(res.message);
      }
    }
  };

  const handlePrevStep = () => {
    setErrorMessage(null);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleResetAndClose = () => {
    setRegisteredUser(null);
    setCurrentStep(1);
    setCompanyName("");
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
    setTaxId("");
    setErrorMessage(null);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#3087ff]/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="bg-white border-4 border-[#3087ff] rounded-none max-w-xl w-full p-6 sm:p-8 shadow-2xl text-[#3087ff] relative my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-1 rounded-none text-[#3087ff] hover:bg-[#3087ff]/20 transition-colors cursor-pointer"
          aria-label="Close Registration"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#3087ff]/40">
          <div className="w-12 h-12 bg-[#3087ff] text-white border-2 border-[#3087ff] flex items-center justify-center shrink-0">
            <UserCheck className="w-6 h-6 text-[#3087ff]" />
          </div>
          <div>
            <h3
              id="reg-modal-title"
              className="text-xl sm:text-2xl font-black text-[#3087ff] uppercase tracking-tight"
            >
              Commercial Account Registration
            </h3>
            <p className="text-xs sm:text-sm text-[#3087ff]/90 font-medium mt-0.5">
              Wholesale Pricing, MTR Documentation &amp; Yard Allocation
            </p>
          </div>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-4 p-3 bg-rose-50 border-2 border-rose-500 text-rose-800 text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* ========================================================
            SUCCESS STATE: APPLICATION PENDING APPROVAL
        ======================================================== */}
        {registeredUser ? (
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Status Alert Ribbon */}
            <div className="p-4 bg-amber-50 border-2 border-amber-500 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-500 text-white flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-200 px-2 py-0.5 inline-block mb-1">
                STATUS: PENDING SUPER-ADMIN APPROVAL
              </span>
              <h4 className="text-lg font-black text-amber-950 uppercase">
                Application Successfully Registered!
              </h4>
              <p className="text-xs text-amber-900 font-medium mt-1 leading-relaxed">
                Thank you, <strong>{registeredUser.fullName}</strong>. Your
                contractor account for{" "}
                <strong>{registeredUser.companyName}</strong> has been logged
                into the Melville foundry compliance queue.
              </p>
            </div>

            {/* Registration Summary Card */}
            <div className="p-4 bg-white border-2 border-[#3087ff] space-y-2 text-xs">
              <div className="flex justify-between border-b border-[#3087ff]/20 pb-1.5">
                <span className="text-[#3087ff]/80">Registration ID:</span>
                <span className="font-mono font-bold text-[#3087ff]">
                  {registeredUser.id}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/20 pb-1.5">
                <span className="text-[#3087ff]/80">Account Email:</span>
                <span className="font-mono font-bold text-[#3087ff]">
                  {registeredUser.email}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#3087ff]/20 pb-1.5">
                <span className="text-[#3087ff]/80">Tax ID / License:</span>
                <span className="font-mono font-bold text-[#3087ff]">
                  {registeredUser.taxIdOrLicense}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#3087ff]/80">
                  Primary Stocking Yard:
                </span>
                <span className="font-bold uppercase text-[#3087ff]">
                  {registeredUser.assignedYard.replace("-", " ")}
                </span>
              </div>
            </div>

            <div className="p-3 bg-[#3087ff]/10 border border-[#3087ff] text-[11px] text-[#3087ff] leading-relaxed">
              <strong className="block font-black uppercase text-[#3087ff] mb-0.5">
                Pending Administrator Authorization:
              </strong>
              Per municipal compliance rules, all new commercial accounts
              require verification of business license and W-9 by a Super-Admin
              before portal login is enabled. Once authorized by an
              administrator, you will be able to sign in to view live stock and
              submit orders.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-3 px-6 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-[#3087ff] font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer text-center"
              >
                Done / Close Application Window
              </button>
            </div>
          </div>
        ) : (
          /* ========================================================
              3-STEP REGISTRATION FORM WIZARD
          ======================================================== */
          <form onSubmit={handleNextStep} className="space-y-5">
            {/* 3-Step Wizard Indicator */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { step: 1, title: "1. Business Info" },
                { step: 2, title: "2. Yard & Tax ID" },
                { step: 3, title: "3. W-9 & Password" },
              ].map((item) => (
                <div
                  key={item.step}
                  className={`p-2 text-center border-2 transition-all ${currentStep === item.step
                      ? "bg-[#3087ff] border-[#3087ff] text-white font-black shadow-xs"
                      : currentStep > item.step
                        ? "bg-[#3087ff]/20 border-[#3087ff] text-[#3087ff] font-bold"
                        : "bg-white border-[#3087ff]/50 text-[#3087ff]/60 font-semibold"
                    }`}
                >
                  <span className="text-[11px] block">{item.title}</span>
                </div>
              ))}
            </div>

            {/* STEP 1: BUSINESS PROFILE */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label
                    htmlFor="reg-company"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Legal Business Entity / Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                    <input
                      id="reg-company"
                      type="text"
                      required
                      placeholder="e.g. Northeast Utilities & Excavation LLC"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="reg-fullname"
                      className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                    >
                      Contact Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                      <input
                        id="reg-fullname"
                        type="text"
                        required
                        placeholder="e.g. Dave Miller"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="reg-phone"
                      className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                    >
                      Direct Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                      <input
                        id="reg-phone"
                        type="tel"
                        required
                        placeholder="+1 (516) 252-1111"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reg-type"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Business Classification *
                  </label>
                  <select
                    id="reg-type"
                    value={accountType}
                    onChange={(e: any) => setAccountType(e.target.value)}
                    className="w-full bg-white border-2 border-[#3087ff] px-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                  >
                    <option value="Contractor">
                      Civil / Waterworks Utility Contractor
                    </option>
                    <option value="Supply House Partner">
                      Wholesale Supply House Distributor
                    </option>
                    <option value="Municipal Utility">
                      City / County Municipal Water Authority
                    </option>
                    <option value="Engineering Specifier">
                      Consulting Civil Engineer / Specifier
                    </option>
                  </select>
                </div>
              </div>
            )}

            {/* STEP 2: YARD ALLOCATION & TAX ID */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label
                    htmlFor="reg-taxid"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Federal Tax ID (EIN) or State Contractor License # *
                  </label>
                  <div className="relative">
                    <ShieldCheck className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                    <input
                      id="reg-taxid"
                      type="text"
                      required
                      placeholder="e.g. 11-0933871 or LIC-948102"
                      value={taxId}
                      onChange={(e) => setTaxId(e.target.value)}
                      className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs sm:text-sm font-mono font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                    />
                  </div>
                  <span className="text-[11px] text-[#3087ff]/75 mt-0.5 block">
                    Used by Super-Admin to verify contractor qualification
                    before approval.
                  </span>
                </div>

                <div>
                  <label
                    htmlFor="reg-yard"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Primary Distribution Hub Allocation *
                  </label>
                  <select
                    id="reg-yard"
                    value={assignedYard}
                    onChange={(e) => setAssignedYard(e.target.value)}
                    className="w-full bg-white border-2 border-[#3087ff] px-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                  >
                    {DISTRIBUTION_YARDS.map((yard) => (
                      <option key={yard.id} value={yard.id}>
                        {yard.city}, {yard.state} — {yard.name} (
                        {yard.stockStatus})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-[#3087ff]/20 border border-[#3087ff] text-xs text-[#3087ff]">
                  <strong>Dispatch Policy:</strong> Your designated hub
                  determines shipping transit time, rail siding access, and
                  flatbed freight rates.
                </div>
              </div>
            )}

            {/* STEP 3: W-9 & CREDENTIALS */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-150">
                <div>
                  <label
                    htmlFor="reg-email"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Business Login Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                    <input
                      id="reg-email"
                      type="email"
                      required
                      placeholder="e.g. purchasing@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="reg-password"
                    className="block text-xs font-bold text-[#3087ff] uppercase mb-1"
                  >
                    Create Account Password *
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#3087ff] absolute left-3 top-3" />
                    <input
                      id="reg-password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-white border-2 border-[#3087ff] pl-9 pr-10 py-2 text-xs sm:text-sm font-bold text-[#3087ff] focus:outline-none focus:border-[#3087ff]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#3087ff] hover:text-[#3087ff] transition-colors cursor-pointer"
                      title={showPassword ? "Hide password" : "Show password"}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Document Verification Checkboxes */}
                <div className="space-y-2 pt-1 border-t border-[#3087ff]/20">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={w9Uploaded}
                      onChange={(e) => setW9Uploaded(e.target.checked)}
                      className="mt-0.5 accent-[#3087ff] w-4 h-4"
                    />
                    <span className="text-xs text-[#3087ff] font-medium leading-tight">
                      <strong>W-9 Taxpayer Certification:</strong> I certify our
                      entity has an active IRS W-9 form on file for wholesale
                      waterworks purchases.
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={resaleUploaded}
                      onChange={(e) => setResaleUploaded(e.target.checked)}
                      className="mt-0.5 accent-[#3087ff] w-4 h-4"
                    />
                    <span className="text-xs text-[#3087ff] font-medium leading-tight">
                      <strong>State Resale / Exemption Certificate:</strong> I
                      acknowledge sales tax exemption requires proof of resale
                      certificate submission.
                    </span>
                  </label>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-400 text-xs text-amber-900 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Super-Admin Verification Notice:</strong> This
                    account will be created with status{" "}
                    <strong>PENDING_APPROVAL</strong>. You will be able to log
                    in once authorized by an administrator.
                  </span>
                </div>
              </div>
            )}

            {/* Modal Controls */}
            <div className="flex items-center justify-between pt-4 border-t-2 border-[#3087ff]/30">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-[#3087ff] border-2 border-[#3087ff] text-xs font-bold uppercase hover:bg-[#3087ff]/20 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              ) : (
                <span />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3087ff] hover:bg-[#3087ff] text-white hover:text-[#3087ff] font-black text-xs sm:text-sm uppercase tracking-wider rounded-none shadow-md transition-all cursor-pointer"
              >
                <span>
                  {currentStep === 3
                    ? "Submit Commercial Registration"
                    : "Next Step"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
