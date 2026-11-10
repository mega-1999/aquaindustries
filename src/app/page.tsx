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
import { SuperAdminApprovalModal } from "../components/modals/SuperAdminApprovalModal";
import { YardSelectorModal } from "../components/modals/YardSelectorModal";
import { FloatingQuickActions } from "../components/navigation/FloatingQuickActions";
import { GlobalUtilityTicker } from "../components/navigation/GlobalUtilityTicker";
import { HeaderUmbrellasTicker } from "../components/navigation/HeaderUmbrellasTicker";
import { MainNavbar } from "../components/navigation/MainNavbar";
import { VerticalSideVideoAds } from "../components/navigation/VerticalSideVideoAds";
import { CatchBasinTrapsSpotlight } from "../components/products/CatchBasinTrapsSpotlight";
import { CulvertPipeGratesSpotlight } from "../components/products/CulvertPipeGratesSpotlight";
import { CurbBoxSpotlight } from "../components/products/CurbBoxSpotlight";
import { DownspoutSpoutsSpotlight } from "../components/products/DownspoutSpoutsSpotlight";
import { MechanicalJointFittingsSchedule } from "../components/products/MechanicalJointFittingsSchedule";
import { EngineeringInnovationSpotlight } from "../components/products/EngineeringInnovationSpotlight";
import { OurNewInnovations } from "../components/products/OurNewInnovations";
import { ProductCatalogMatrix } from "../components/products/ProductCatalogMatrix";
import { SolenoFlagshipProducts } from "../components/products/SolenoFlagshipProducts";
import { StormwaterTrashRacksSpotlight } from "../components/products/StormwaterTrashRacksSpotlight";
import { CommercialQuoteForm } from "../components/rfq/CommercialQuoteForm";
import { CivilCallToAction } from "../components/sections/CivilCallToAction";
import { DomesticStandards } from "../components/sections/DomesticStandards";
import { EngineeringSubmittalLibrary } from "../components/sections/EngineeringSubmittalLibrary";
import { MasteringInfrastructureTabs } from "../components/sections/MasteringInfrastructureTabs";
import { SolenoProjectsShowcase } from "../components/sections/SolenoProjectsShowcase";
import { SolenoVideoShowcase } from "../components/sections/SolenoVideoShowcase";
import { UmbrellaShowcase } from "../components/sections/UmbrellaShowcase";

import { DISTRIBUTION_YARDS, PRODUCTS_CATALOG } from "../data/waterworks-data";
import type { ProductItem, YardLocation } from "../types";

export default function Home() {
  // Modal states
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [superAdminModalOpen, setSuperAdminModalOpen] = useState(false);
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
    <div className="min-h-screen flex flex-col bg-white text-[#3087ff] selection:bg-[#3087ff] selection:text-[#3087ff]">
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
        onOpenSuperAdminModal={() => setSuperAdminModalOpen(true)}
        onSelectProductCategory={handleSelectProductCategory}
      />

      {/* Individual Rotating Umbrellas Under Header Ribbon (Ben Mega Foundries US) */}
      <HeaderUmbrellasTicker onSelectCategory={handleSelectProductCategory} />

      {/* Main Single-Page Blueprint with Alternating Background Rhythm */}
      <main className="flex-1 relative">
        {/* Left (12 cards) and Right (3 cards) Vertical Video Ads (Scrolling along with website in side gutters) */}
        <VerticalSideVideoAds
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 1: 1st Place - Soleno Flagship Showcase (Sampling Station Hero - Blue #3087ff) */}
        <SolenoSamplingHero />

        {/* Section 2: 2nd Place - Bison Curb Box Showcase (White Background #FFFFFF - Alternating) */}
        <CurbBoxSpotlight
          product={PRODUCTS_CATALOG[1]}
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 3: 3rd Place - Our New Innovations Showcase (Blue Background #3087ff - Alternating) */}
        <OurNewInnovations
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 4: 4th Place - Mechanical Joint Engineering: Series 3000 Cam-Action MJ Restraint */}
        <EngineeringInnovationSpotlight
          product={PRODUCTS_CATALOG[2]}
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 4: American Infrastructure Ductile Iron Waterworks Overview (Blue Background #3087ff - Water Dynamics) */}
        <CinematicHero variant="blue" />

        {/* Section 5: Quick Metrics Ribbon */}
        <CertifiedMetricsBar />

        {/* Section 4: Civil Call to Action (Soleno call_to_action split pattern) */}
        {/* <CivilCallToAction
          onExploreCatalog={() => handleSelectProductCategory("all")}
          onRequestQuote={() => {
            const el = document.getElementById("quote-builder");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        /> */}

        {/* Section 4: Civil Sector Interactive Tabs (Soleno mastering_water pattern) */}
        {/* <MasteringInfrastructureTabs /> */}

        {/* Section 5: Flagship Engineered Products Showcase (Soleno other_drainage 4-card pattern - Blue #3087ff - Alternating) */}
        <SolenoFlagshipProducts
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 6: Complete 2" - 64" Ductile Iron Mechanical Joint Fittings Schedule (White #FFFFFF - Alternating) */}
        <MechanicalJointFittingsSchedule
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 7: Stormwater Detention Basin Trash Racks Showcase - Anti-Vortex Pyramids (Blue #3087ff - Alternating) */}
        <StormwaterTrashRacksSpotlight
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 8: Culvert Safety Pipe Grates Showcase - Hinged Bar Grates & Safety Slopes (White #FFFFFF - Alternating) */}
        <CulvertPipeGratesSpotlight
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 9: Cast Iron Catch Basin Traps Showcase (Blue #3087ff - Alternating) */}
        <CatchBasinTrapsSpotlight
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 10: Cast Iron Architectural Downspout Boots & Spouts (White #FFFFFF - Alternating) */}
        <DownspoutSpoutsSpotlight
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />

        {/* Section 11: "We Have You Covered" Umbrella Video Showcase (Blue #3087ff - Alternating) */}
        <UmbrellaShowcase />

        {/* Section 6: Engineering Submittal & Cut Sheet Library (Soleno ressources_single carousel pattern) */}
        {/* <EngineeringSubmittalLibrary
          onPreviewSubmittal={handlePreviewSubmittalDoc}
        /> */}

        {/* Section 7: Soleno-Cloned Municipal Infrastructure Projects & Case Studies Showcase */}
        {/* <SolenoProjectsShowcase
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        /> */}

        {/* Section 8: Waterworks Video Demonstrations & Field Proofs (Soleno video pattern - Blue #3087ff - Alternating) */}
        <SolenoVideoShowcase
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
        />
        {/* Section 11: Product Catalog Matrix (Soleno categorie pattern - White #FFFFFF - Alternating) */}
        <ProductCatalogMatrix
          onAddToRfq={handleAddToRfq}
          onPreviewSubmittal={(product) => setSubmittalModalProduct(product)}
          selectedCategory={productCategoryFilter}
        />
        {/* Section 9: Interactive Thrust Restraint Calculator (Civil Engineering Field Tool - White #FFFFFF - Alternating) */}
        {/* <EngineeringThrustCalculator /> */}

        {/* Section 9: Real Foundry & Yard Walkthrough (Physical Process & Quality Control) */}
        {/* <FoundryWalkthrough /> */}

        {/* Section 10: Domestic Standards & Testing Integrity (Soleno mission pattern) */}
        {/* <DomesticStandards /> */}

        {/* Section 11: Clear Jobsite & Order Policies (Honest & Direct Insurance Terms) */}
        {/* <ClearJobsitePolicies /> */}

        {/* Section 12: Commercial Quote Request & Submittal Builder (Soleno start project pattern) */}
        {/* <CommercialQuoteForm
          rfqItems={rfqItems}
          onRemoveItem={handleRemoveRfqItem}
          onClearItems={handleClearRfqItems}
        /> */}
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
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
      />

      <AccountRegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <SuperAdminApprovalModal
        isOpen={superAdminModalOpen}
        onClose={() => setSuperAdminModalOpen(false)}
        onOpenContractorLogin={() => {
          setSuperAdminModalOpen(false);
          setLoginModalOpen(true);
        }}
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

      {/* Floating Quick Action Buttons: Call, Mail, YouTube, Top/Bottom */}
      <FloatingQuickActions />
    </div>
  );
}
