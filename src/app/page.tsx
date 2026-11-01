"use client";

import { useState } from "react";
import { EngineeringThrustCalculator } from "../components/calculator/EngineeringThrustCalculator";
import { ClearJobsitePolicies } from "../components/compliance/ClearJobsitePolicies";
import { IndustrialFooter } from "../components/footer/IndustrialFooter";
import { FoundryWalkthrough } from "../components/foundry/FoundryWalkthrough";
import { CinematicHero } from "../components/hero/CinematicHero";
import { SolenoSamplingHero } from "../components/hero/SolenoSamplingHero";
import { SolenoPreloader } from "../components/loader/SolenoPreloader";
import { CertifiedMetricsBar } from "../components/metrics/CertifiedMetricsBar";
import { AccountRegistrationModal } from "../components/modals/AccountRegistrationModal";
import { ClientPortalModal } from "../components/modals/ClientPortalModal";
import { ProductSubmittalModal } from "../components/modals/ProductSubmittalModal";
import { YardSelectorModal } from "../components/modals/YardSelectorModal";
import { GlobalUtilityTicker } from "../components/navigation/GlobalUtilityTicker";
import { MainNavbar } from "../components/navigation/MainNavbar";
import { ProductCatalogMatrix } from "../components/products/ProductCatalogMatrix";
import { CurbBoxSpotlight } from "../components/products/CurbBoxSpotlight";
import { SamplingStationSpotlight } from "../components/products/SamplingStationSpotlight";
import { CommercialQuoteForm } from "../components/rfq/CommercialQuoteForm";
import { CivilCallToAction } from "../components/sections/CivilCallToAction";
import { DomesticStandards } from "../components/sections/DomesticStandards";
import { EngineeringSubmittalLibrary } from "../components/sections/EngineeringSubmittalLibrary";
import { MasteringInfrastructureTabs } from "../components/sections/MasteringInfrastructureTabs";
import { MunicipalCaseStudies } from "../components/sections/MunicipalCaseStudies";

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

  const handlePreviewSubmittalDoc = (docTitle: string) => {
    // Match with one of our products or fallback to default
    const matchedProduct =
      PRODUCTS_CATALOG.find((p) =>
        docTitle.toLowerCase().includes(p.name.toLowerCase().slice(0, 10)),
      ) || PRODUCTS_CATALOG[0];
    setSubmittalModalProduct(matchedProduct);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0082FC] selection:bg-[#5FD4FD] selection:text-[#0082FC]">
      {/* Soleno-Style Iris Aperture Preloader Animation */}
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

      {/* Main Single-Page Blueprint with Alternating Background Rhythm */}
      <main className="flex-1">
        {/* Section 1: 1st Place - Soleno Flagship Showcase (Blue Background #0082FC) */}
        <SolenoSamplingHero />

        {/* Section 2: 2nd Place - The Century Curb Box Showcase (White Background #FFFFFF - Alternating) */}
        <CurbBoxSpotlight
          product={PRODUCTS_CATALOG[1]}
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 3: 3rd Place - New Flagship Innovation Sampling Station (Blue Background #0082FC - Alternating) */}
        <SamplingStationSpotlight
          product={PRODUCTS_CATALOG[0]}
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 4: American Infrastructure Ductile Iron Waterworks Overview (White Background #FFFFFF - Alternating) */}
        <CinematicHero variant="white" />

        {/* Section 5: Quick Metrics Ribbon */}
        <CertifiedMetricsBar />

        {/* Section 4: Civil Call to Action (Soleno call_to_action split pattern) */}
        <CivilCallToAction
          onExploreCatalog={() => handleSelectProductCategory("all")}
          onRequestQuote={() => {
            const el = document.getElementById("quote-builder");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 4: Civil Sector Interactive Tabs (Soleno mastering_water pattern) */}
        <MasteringInfrastructureTabs />

        {/* Section 5: Product Catalog Matrix (Soleno categorie pattern) */}
        <ProductCatalogMatrix
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
          selectedCategory={productCategoryFilter}
        />

        {/* Section 6: Engineering Submittal & Cut Sheet Library (Soleno ressources_single carousel pattern) */}
        <EngineeringSubmittalLibrary
          onPreviewSubmittal={handlePreviewSubmittalDoc}
        />

        {/* Section 7: Municipal Infrastructure Case Studies (Soleno related_project pattern) */}
        <MunicipalCaseStudies />

        {/* Section 8: Interactive Thrust Restraint Calculator (Civil Engineering Field Tool) */}
        <EngineeringThrustCalculator />

        {/* Section 9: Real Foundry & Yard Walkthrough (Physical Process & Quality Control) */}
        <FoundryWalkthrough />

        {/* Section 10: Domestic Standards & Testing Integrity (Soleno mission pattern) */}
        <DomesticStandards />

        {/* Section 11: Clear Jobsite & Order Policies (Honest & Direct Insurance Terms) */}
        <ClearJobsitePolicies />

        {/* Section 12: Commercial Quote Request & Submittal Builder (Soleno start project pattern) */}
        <CommercialQuoteForm
          rfqItems={rfqItems}
          onRemoveItem={handleRemoveRfqItem}
          onClearItems={handleClearRfqItems}
        />
      </main>

      {/* Section 13: Footer & Company Directory (24/7 Dispatch Hotline & Yard Directory) */}
      <IndustrialFooter
        onOpenYardModal={() => setYardModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Integrated Modals */}
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
