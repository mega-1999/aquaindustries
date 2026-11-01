"use client";

import { useState } from "react";
import { EngineeringThrustCalculator } from "../components/calculator/EngineeringThrustCalculator";
import { ClearJobsitePolicies } from "../components/compliance/ClearJobsitePolicies";
import { IndustrialFooter } from "../components/footer/IndustrialFooter";
import { FoundryWalkthrough } from "../components/foundry/FoundryWalkthrough";
import { CinematicHero } from "../components/hero/CinematicHero";
import { SolenoPreloader } from "../components/loader/SolenoPreloader";
import { CertifiedMetricsBar } from "../components/metrics/CertifiedMetricsBar";
import { AccountRegistrationModal } from "../components/modals/AccountRegistrationModal";
import { ClientPortalModal } from "../components/modals/ClientPortalModal";
import { ProductSubmittalModal } from "../components/modals/ProductSubmittalModal";
import { YardSelectorModal } from "../components/modals/YardSelectorModal";
import { GlobalUtilityTicker } from "../components/navigation/GlobalUtilityTicker";
import { MainNavbar } from "../components/navigation/MainNavbar";
import { ProductCatalogMatrix } from "../components/products/ProductCatalogMatrix";
import { PlainQualityStandards } from "../components/quality/PlainQualityStandards";
import { CommercialQuoteForm } from "../components/rfq/CommercialQuoteForm";

import { DISTRIBUTION_YARDS, PRODUCTS_CATALOG } from "../data/waterworks-data";
import type { ProductItem, YardLocation } from "../types";

export default function Home() {
  // Modal states
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [yardModalOpen, setYardModalOpen] = useState(false);
  const [submittalModalProduct, setSubmittalModalProduct] =
    useState<ProductItem | null>(null);

  // Selected Yard Location
  const [selectedYard, setSelectedYard] = useState<YardLocation>(
    DISTRIBUTION_YARDS[0],
  );

  // Selected Category filter for Product Matrix
  const [productCategoryFilter, setProductCategoryFilter] =
    useState<string>("all");

  // RFQ queued items
  const [rfqItems, setRfqItems] = useState<ProductItem[]>([
    PRODUCTS_CATALOG[0], // AWWA C153 Compact MJ Bends
    PRODUCTS_CATALOG[2], // Series 3000 Wedge Restraints
  ]);

  const handleAddToRfq = (product: ProductItem) => {
    setRfqItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const handleRemoveRfqItem = (id: string) => {
    setRfqItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearRfqItems = () => {
    setRfqItems([]);
  };

  const handleSelectProductCategory = (category: string) => {
    setProductCategoryFilter(category);
    const element = document.getElementById("product-matrix");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0082FC] selection:bg-[#5FD4FD] selection:text-[#0082FC]">
      {/* Soleno-Style Preloader Animation */}
      <SolenoPreloader />

      {/* Top Utility Ribbon */}
      <GlobalUtilityTicker
        onOpenYardModal={() => setYardModalOpen(true)}
        selectedYardCity={`${selectedYard.city}, ${selectedYard.state}`}
      />

      {/* Sticky Main Navigation Bar */}
      <MainNavbar
        onOpenLoginModal={() => setLoginModalOpen(true)}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        onOpenYardModal={() => setYardModalOpen(true)}
        onSelectProductCategory={handleSelectProductCategory}
      />

      {/* Main Single-Page Blueprint */}
      <main className="flex-1">
        {/* Section 1: Hero Banner (Rich Aqua Blue #0082FC Background) */}
        <CinematicHero />

        {/* Section 2: Quick Metrics Ribbon (Crisp White Background) */}
        <CertifiedMetricsBar />

        {/* Section 3: Product Showcase Grid (Filterable Tabs) */}
        <ProductCatalogMatrix
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
          selectedCategory={productCategoryFilter}
        />

        {/* Section 4: Interactive Thrust Restraint Calculator (Light Blue #F0F7FF Background) */}
        <EngineeringThrustCalculator />

        {/* Section 5: Real Foundry & Yard Walkthrough (Photo Grid) */}
        <FoundryWalkthrough />

        {/* Section 6: Plain-English Quality Standards */}
        <PlainQualityStandards />

        {/* Section 7: Clear Jobsite & Order Policies (Honest & Direct) */}
        <ClearJobsitePolicies />

        {/* Section 8: Commercial Quote Request Form */}
        <CommercialQuoteForm
          rfqItems={rfqItems}
          onRemoveItem={handleRemoveRfqItem}
          onClearItems={handleClearRfqItems}
        />
      </main>

      {/* Section 9: Footer & Company Directory (Deep Navy Background) */}
      <IndustrialFooter
        onOpenYardModal={() => setYardModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Integrated Authentication & Utility Modals */}
      <ClientPortalModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <AccountRegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <YardSelectorModal
        isOpen={yardModalOpen}
        onClose={() => setYardModalOpen(false)}
        selectedYardId={selectedYard.id}
        onSelectYard={(yard) => setSelectedYard(yard)}
      />

      <ProductSubmittalModal
        product={submittalModalProduct}
        onClose={() => setSubmittalModalProduct(null)}
        onAddToRfq={handleAddToRfq}
      />
    </div>
  );
}
