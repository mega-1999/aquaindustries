"use client";

import {
  Building,
  CheckCircle2,
  Clock,
  FileCheck2,
  Layers,
  Mail,
  MapPin,
  Package,
  Phone,
  PhoneCall,
  Send,
  ShieldCheck,
  Trash2,
  Truck,
  UploadCloud,
  User,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { ProductItem } from "../../types";

interface CommercialQuoteFormProps {
  rfqItems: ProductItem[];
  onRemoveItem: (id: string) => void;
  onClearItems: () => void;
}

export const CommercialQuoteForm: React.FC<CommercialQuoteFormProps> = ({
  rfqItems,
  onRemoveItem,
  onClearItems,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Complete Job Package",
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([
    '6"',
    '8"',
    '12"',
  ]);
  const [estimatedQuantity, setEstimatedQuantity] =
    useState<string>("10-25 Fittings");

  // Form inputs
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("Chicago, IL 60638");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "C153 & C110 Fittings",
    "ULTRA & Series 3000 Restraints",
    "MJ Accessories & Linings",
    "Municipal Castings & Inlets",
    "Complete Job Package",
  ];

  const availableSizes = [
    '4"',
    '6"',
    '8"',
    '10"',
    '12"',
    '16"',
    '20"',
    '24"',
    '30"',
    '36"',
    '48"',
  ];

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      const stored = localStorage.getItem("aqua_industries_rfq_requests_v1");
      const existingRfq = stored ? JSON.parse(stored) : [];
      const newRfq = {
        id: `RFQ-${Date.now().toString().slice(-6)}`,
        companyName: companyName || "Commercial Contractor",
        contactName: contactName || "Authorized Estimator",
        email: email || "estimator@company.com",
        phone: phone || "+1 (516) 252-1111",
        projectType: selectedCategory || "Complete Job Package",
        deliveryLocation: deliveryLocation || "Melville, NY",
        targetDeliveryDate: estimatedQuantity || "Standard Dispatch",
        taxExempt: false,
        notes: `Sizes: ${selectedSizes.join(", ") || "All Standard"}${uploadedFileName ? ` • Upload: ${uploadedFileName}` : ""}`,
        itemsCount: rfqItems.length,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(
        "aqua_industries_rfq_requests_v1",
        JSON.stringify([newRfq, ...existingRfq]),
      );
    } catch (err) {
      console.warn("Failed to save RFQ to storage:", err);
    }
  };

  return (
    <section
      id="quote-form"
      aria-label="Commercial Quote Request"
      className="py-20 lg:py-28 bg-white text-[#0082FC] border-t-2 border-[#5FD4FD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] text-xs font-semibold uppercase tracking-wider mb-3">
            <FileCheck2 className="w-3.5 h-3.5 text-[#0082FC]" />
            <span className="whitespace-nowrap">
              Direct Factory-to-Contractor Pricing
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0082FC] tracking-tight leading-tight">
            Commercial Quote Request Form
          </h2>
          <p className="mt-3 text-[#0082FC] text-sm sm:text-base leading-relaxed">
            Fill in your job details, attach project material take-offs, and
            receive straightforward pricing with verifiable shipping timelines
            within 2 business hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Column (8 cols) */}
          <div className="lg:col-span-8 bg-white border-2 border-[#5FD4FD] rounded-none p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full">
            {/* Synchronized Top Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-[#5FD4FD]/30 mb-6 min-h-[46px]">
              <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0082FC]">
                <FileCheck2 className="w-5 h-5 text-[#0082FC] shrink-0" />
                <span>Project Material Take-Off &amp; Sizing Specs</span>
              </div>
              <span className="text-xs font-bold text-[#0082FC] bg-[#5FD4FD]/20 border border-[#5FD4FD] px-2.5 py-1 uppercase tracking-wider">
                Direct Foundry Pricing
              </span>
            </div>

            {isSubmitted ? (
              <div className="my-auto py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-none bg-white border-2 border-[#5FD4FD] text-[#0082FC] flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-[#5FD4FD]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0082FC] mb-2">
                  Quote Request Received
                </h3>
                <p className="text-sm text-[#0082FC] max-w-md mb-6 leading-relaxed">
                  Thank you, <strong>{contactName || "Estimator"}</strong>. Your
                  request for <strong>{companyName || "your company"}</strong>{" "}
                  has been routed to our regional waterworks dispatch desk for{" "}
                  <strong>{deliveryLocation}</strong>. A pricing sheet and
                  transit schedule will be delivered to{" "}
                  <strong>{email || "your inbox"}</strong> promptly.
                </p>
                <div className="p-4 bg-white border-2 border-[#5FD4FD] rounded-none text-xs text-[#0082FC] mb-6 font-bold">
                  Reference Tracking Number:{" "}
                  <span className="text-[#0082FC]">AQUA-RFQ-2026-8814</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white text-xs font-bold rounded-none border-2 border-[#0082FC] transition-colors cursor-pointer"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-between space-y-7"
              >
                {/* 1. Category Selection */}
                <div>
                  <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0082FC] mb-3 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0082FC]" />
                    <span>1. Select Product Category</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2.5 rounded-none text-sm font-bold border-2 transition-all whitespace-nowrap cursor-pointer ${
                          selectedCategory === cat
                            ? "bg-[#0082FC] text-white border-[#0082FC] shadow-sm"
                            : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                        }`}
                      >
                        <span className="whitespace-nowrap">{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Pipe Sizes & Total Quantities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-2">
                      2. Pipe Sizes Needed
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map((size) => {
                        const isSelected = selectedSizes.includes(size);
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => toggleSize(size)}
                            className={`w-12 h-10 rounded-none text-sm font-bold border-2 transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#0082FC] text-white border-[#0082FC]"
                                : "bg-white text-[#0082FC] border-[#5FD4FD] hover:bg-[#5FD4FD]/20"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-quantity-select"
                      className="block text-sm font-bold uppercase tracking-wider text-[#0082FC] mb-2"
                    >
                      Estimated Order Volume
                    </label>
                    <select
                      id="quote-quantity-select"
                      value={estimatedQuantity}
                      onChange={(e) => setEstimatedQuantity(e.target.value)}
                      className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none px-4 py-3 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none"
                    >
                      <option value="1-9 Fittings">
                        1 to 9 Fittings (Quick Repair)
                      </option>
                      <option value="10-25 Fittings">
                        10 to 25 Fittings (Subdivision Run)
                      </option>
                      <option value="Full Truckload">
                        Full Truckload (Flatbed Job Delivery)
                      </option>
                      <option value="Stocking Order">
                        Stocking Warehouse Order
                      </option>
                    </select>
                  </div>
                </div>

                {/* 3. Drag-and-drop file upload */}
                <div className="border-2 border-dashed border-[#5FD4FD] rounded-none p-6 text-center hover:border-[#0082FC] transition-colors bg-white">
                  <input
                    type="file"
                    id="quote-spec-upload"
                    accept=".pdf,.xlsx,.xls,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="quote-spec-upload"
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <UploadCloud className="w-9 h-9 text-[#0082FC] mb-2" />
                    <span className="text-sm sm:text-base font-bold text-[#0082FC] mb-1">
                      {uploadedFileName ? (
                        <span className="text-[#0082FC] font-extrabold">
                          Attached: {uploadedFileName}
                        </span>
                      ) : (
                        "Upload Project Plans or Material List (PDF, Excel, Word)"
                      )}
                    </span>
                    <span className="text-xs sm:text-sm text-[#0082FC] font-medium">
                      Drag and drop your engineering take-off document or click
                      to browse
                    </span>
                  </label>
                </div>

                {/* 4. Company & Jobsite Details */}
                <div className="space-y-4 pt-4 border-t-2 border-[#5FD4FD]/30">
                  <div className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#0082FC] flex items-center gap-2">
                    <Building className="w-5 h-5 text-[#0082FC]" />
                    <span>3. Contractor &amp; Jobsite Destination</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="quote-company-name"
                        className="block text-xs sm:text-sm font-bold text-[#0082FC] mb-1"
                      >
                        Company / Entity Name *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5" />
                        <input
                          id="quote-company-name"
                          type="text"
                          required
                          placeholder="e.g. Great Lakes Utility Contractors"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-2.5 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-contact-name"
                        className="block text-xs sm:text-sm font-bold text-[#0082FC] mb-1"
                      >
                        Contact Person &amp; Title *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5" />
                        <input
                          id="quote-contact-name"
                          type="text"
                          required
                          placeholder="e.g. Dan Miller, Project Estimator"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-2.5 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-email"
                        className="block text-xs sm:text-sm font-bold text-[#0082FC] mb-1"
                      >
                        Business Email (For Official Quote) *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5" />
                        <input
                          id="quote-email"
                          type="email"
                          required
                          placeholder="dmiller@contracting.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-2.5 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-phone"
                        className="block text-xs sm:text-sm font-bold text-[#0082FC] mb-1"
                      >
                        Direct Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5" />
                        <input
                          id="quote-phone"
                          type="tel"
                          required
                          placeholder="(555) 014-2900"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-2.5 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="quote-destination"
                        className="block text-xs sm:text-sm font-bold text-[#0082FC] mb-1"
                      >
                        Delivery City, State &amp; Zip Code *
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-[#0082FC] absolute left-3.5 top-3.5" />
                        <input
                          id="quote-destination"
                          type="text"
                          required
                          placeholder="e.g. Chicago, IL 60638 (Jobsite or Yard address)"
                          value={deliveryLocation}
                          onChange={(e) => setDeliveryLocation(e.target.value)}
                          className="w-full bg-white border-2 border-[#5FD4FD] text-[#0082FC] rounded-none pl-10 pr-3 py-2.5 text-sm sm:text-base font-bold focus:border-[#0082FC] focus:outline-none placeholder-[#0082FC]/40"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button & Assurance Strip */}
                <div className="pt-4 border-t-2 border-[#5FD4FD]/30 mt-auto">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] text-white font-extrabold rounded-none text-base border-2 border-[#0082FC] shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5 text-white group-hover:text-[#0082FC] shrink-0" />
                    <span className="whitespace-nowrap">
                      Submit For Rapid Quote
                    </span>
                  </button>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#0082FC] font-semibold mt-3">
                    <span>Quotes valid 30 days</span>
                    <span>&bull;</span>
                    <span>Direct yard dispatch</span>
                    <span>&bull;</span>
                    <span>Standard freight insurance</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Live Quote List / Cart (4 cols) */}
          <div className="lg:col-span-4 bg-white border-2 border-[#5FD4FD] rounded-none p-6 sm:p-8 shadow-sm flex flex-col justify-between h-full text-[#0082FC]">
            <div className="flex-1 flex flex-col">
              {/* Synchronized Top Header */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#5FD4FD]/30 mb-6 min-h-[46px]">
                <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold uppercase tracking-tight text-[#0082FC]">
                  <Package className="w-5 h-5 text-[#0082FC] shrink-0" />
                  <span>Selected Quote Items</span>
                  {rfqItems.length > 0 && (
                    <span className="ml-1 bg-[#0082FC] text-white text-[11px] font-bold px-2 py-0.5 rounded-none">
                      {rfqItems.length}
                    </span>
                  )}
                </div>
                {rfqItems.length > 0 ? (
                  <button
                    type="button"
                    onClick={onClearItems}
                    className="text-xs text-[#0082FC] hover:text-[#5FD4FD] font-bold uppercase tracking-wider underline cursor-pointer"
                  >
                    Clear All
                  </button>
                ) : (
                  <span className="text-[11px] font-bold text-[#0082FC]/70 uppercase tracking-wider">
                    Live Staging
                  </span>
                )}
              </div>

              {/* Items List or Empty Staging Box */}
              {rfqItems.length === 0 ? (
                <div className="py-6 text-center bg-white rounded-none border-2 border-[#5FD4FD] p-4 mb-4">
                  <Package className="w-8 h-8 text-[#5FD4FD] mx-auto mb-2" />
                  <p className="text-sm text-[#0082FC] font-bold">
                    No catalog items added yet.
                  </p>
                  <p className="text-xs text-[#0082FC] mt-1 font-medium">
                    Click &quot;Add to Quote List&quot; on any product above.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 mb-4 max-h-56 overflow-y-auto pr-1">
                  {rfqItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border-2 border-[#5FD4FD] rounded-none p-3.5 flex items-start justify-between gap-2"
                    >
                      <div>
                        <div className="font-extrabold text-sm text-[#0082FC] leading-tight">
                          {item.name}
                        </div>
                        <div className="text-xs text-[#0082FC] font-semibold mt-1">
                          {item.standard} &bull;{" "}
                          {item.pressureRating.split(" ")[0]}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#0082FC] hover:bg-[#5FD4FD]/20 rounded-none cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Order Parameters Summary */}
              <div className="space-y-2 text-sm bg-white p-4 rounded-none border-2 border-[#5FD4FD] mb-4">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-[#0082FC] font-bold flex items-center justify-between">
                  <span>Order Summary</span>
                  <span className="text-[10px] bg-[#5FD4FD]/20 border border-[#5FD4FD] px-2 py-0.5">
                    Live Params
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC]">Category:</span>
                  <span className="text-[#0082FC] font-bold truncate max-w-[170px]">
                    {selectedCategory}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#5FD4FD]/30 pb-2">
                  <span className="text-[#0082FC]">Selected Sizes:</span>
                  <span className="text-[#0082FC] font-bold">
                    {selectedSizes.join(", ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#0082FC]">Volume:</span>
                  <span className="text-[#0082FC] font-bold">
                    {estimatedQuantity}
                  </span>
                </div>
              </div>

              {/* Foundry Logistics & SLA Assurance Box to balance vertical height */}
              <div className="space-y-2.5 bg-white border-2 border-[#5FD4FD] p-3.5 sm:p-4 rounded-none mb-4 flex-1 flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0082FC] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0082FC]" />
                  <span>Foundry Fulfillment Guarantees</span>
                </div>
                <div className="space-y-2 text-xs text-[#0082FC]">
                  <div className="flex items-start gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5" />
                    <span>
                      <strong>2-Hour Response:</strong> Sizing takeoff verified
                      by dedicated waterworks engineers.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Truck className="w-3.5 h-3.5 text-[#0082FC] shrink-0 mt-0.5" />
                    <span>
                      <strong>Direct Freight:</strong> Flatbed or LTL dispatch
                      directly to jobsite or municipal yard.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgent Jobsite Dispatch Call Card - 100% Contained, Zero Overflow, matching bottom alignment */}
            <div className="pt-4 border-t-2 border-[#5FD4FD]/30 mt-auto">
              <div className="bg-[#0082FC] text-white p-3.5 sm:p-4 border-2 border-[#5FD4FD] rounded-none shadow-md flex flex-col items-center text-center gap-1.5">
                <div className="flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#5FD4FD]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#5FD4FD] shrink-0" />
                  <span>New York Dispatch Desk</span>
                </div>
                <p className="text-[11px] text-white/90 leading-tight">
                  Need rapid yard stock verification or same-day flatbed
                  staging?
                </p>
                <a
                  href="tel:+15162521111"
                  className="mt-1.5 w-full py-2.5 px-3 bg-white hover:bg-[#5FD4FD] text-[#0082FC] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-white transition-all text-center flex items-center justify-center gap-2 shadow-xs cursor-pointer break-words"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0082FC] shrink-0" />
                  <span>Call: +1 (516) 252-1111</span>
                </a>
                <span className="text-[10px] text-white/80 font-mono mt-0.5">
                  Melville, NY HQ &bull; 24/7 Service Hotline
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
