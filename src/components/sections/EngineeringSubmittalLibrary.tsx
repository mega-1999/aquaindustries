"use client";

import React, { useState } from "react";

interface SubmittalDoc {
  id: string;
  category: string;
  title: string;
  standard: string;
  fileType: string;
  fileSize: string;
  description: string;
  complianceTags: string[];
}

const SUBMITTAL_DOCS: SubmittalDoc[] = [
  {
    id: "sub-c153-mj",
    category: "Fittings Specification",
    title: "AWWA C153 Compact Ductile Iron Mechanical Joint Submittal Sheet",
    standard: "AWWA C153 / ANSI A21.53",
    fileType: "PDF",
    fileSize: "2.8 MB",
    description:
      'Dimensional tolerances, weight tables, wall thicknesses, and hydrostatic pressure rating curves for 3" through 36" compact MJ fittings.',
    complianceTags: ["AWWA C153", "ASTM A536", "350 PSI"],
  },
  {
    id: "sub-wedge-restraint",
    category: "Restraint Systems",
    title:
      "Series 3000 Wedge-Action Restraint Gland Installation & Torque Guide",
    standard: "ASTM A536 / UL 194",
    fileType: "PDF",
    fileSize: "1.9 MB",
    description:
      "Field assembly guidelines, breakaway torque nut ratings (65-75 ft-lbs), minimum pipe insertion depths, and allowable angular deflections.",
    complianceTags: ["UL LISTED", "FM APPROVED", "C900 & DI"],
  },
  {
    id: "sub-m306-castings",
    category: "Municipal Castings",
    title:
      "AASHTO M306 Heavy Highway Traffic Manhole Frame & Cover Proof-Load Cert",
    standard: "AASHTO M306 / ASTM A48",
    fileType: "PDF",
    fileSize: "1.4 MB",
    description:
      "Independent laboratory proof-load test reports certifying 40,000+ lb wheel loading resistance with zero structural cracks or permanent deformation.",
    complianceTags: ["AASHTO M306", "H-20 / HS-20", "CLASS 35B"],
  },
  {
    id: "sub-nsf61-health",
    category: "Drinking Water Safety",
    title:
      "NSF/ANSI 61 & NSF/ANSI 372 Safe Drinking Water Health Effects Dossier",
    standard: "NSF/ANSI 61 / Annex G",
    fileType: "PDF",
    fileSize: "3.2 MB",
    description:
      "Official toxicological analysis reports verifying zero harmful heavy metal extraction and lead content under 0.25% weighted average.",
    complianceTags: ["NSF 61 CERTIFIED", "LOW-LEAD 372", "POTABLE APPROVED"],
  },
  {
    id: "sub-cement-lining",
    category: "Corrosion Protection",
    title:
      "AWWA C104 Cement Mortar Lining & Seal Coat Technical Application Data",
    standard: "AWWA C104 / ANSI A21.4",
    fileType: "PDF",
    fileSize: "1.6 MB",
    description:
      "Centrifugal lining application process, standard mortar thickness tables, and asphaltic seal coating barrier performance for aggressive waters.",
    complianceTags: ["AWWA C104", "HAZEN-WILLIAMS C=140", "SEAL COATED"],
  },
  {
    id: "sub-cad-bim",
    category: "CAD & 3D BIM Library",
    title: "Complete Mechanical Joint AutoCAD DWG & Revit 3D Family Catalog",
    standard: "Revit 2021+ / AutoCAD",
    fileType: "ZIP / BIM",
    fileSize: "18.4 MB",
    description:
      "Parametric Revit mechanical joint pipe fittings (90°, 45°, 22.5° bends, tees, crosses, reducers) with native MEP connector routing ports.",
    complianceTags: ["REVIT FAMILIES", "3D DWG", "BIM READY"],
  },
];

interface EngineeringSubmittalLibraryProps {
  onPreviewSubmittal?: (docTitle: string) => void;
}

export function EngineeringSubmittalLibrary({
  onPreviewSubmittal,
}: EngineeringSubmittalLibraryProps) {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? Math.max(0, SUBMITTAL_DOCS.length - itemsPerPage) : prev - 1,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + itemsPerPage >= SUBMITTAL_DOCS.length ? 0 : prev + 1,
    );
  };

  const visibleDocs = SUBMITTAL_DOCS.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleDownload = (doc: SubmittalDoc) => {
    if (onPreviewSubmittal) {
      onPreviewSubmittal(doc.title);
    } else {
      alert(
        `Initiating download for: ${doc.title} (${doc.fileType} ${doc.fileSize})`,
      );
    }
  };

  return (
    <section className="relative w-full bg-white text-[#0082FC] py-20 border-b border-[#0082FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Ribbon with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-3xl space-y-2.5">
            <div className="inline-flex items-center space-x-2 border border-[#0082FC] bg-white px-3 py-1">
              <span className="w-2 h-2 bg-[#0082FC]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0082FC] whitespace-nowrap">
                Engineering Library &amp; Submittals
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0082FC] tracking-tight">
              Certified Technical Cut Sheets &amp; Submittal Packages
            </h2>
            <p className="text-sm sm:text-base text-[#0082FC]/90 font-normal leading-relaxed">
              Equip civil design engineers, municipal inspectors, and utility
              project managers with verifiable product cut sheets, laboratory
              physical test reports, and CAD BIM families.
            </p>
          </div>

          {/* Soleno-Style Slide Arrows */}
          <div className="flex items-center space-x-3 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous submittal documents"
              className="w-10 h-10 border-2 border-[#0082FC] bg-white text-[#0082FC] hover:bg-[#0082FC] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next submittal documents"
              className="w-10 h-10 border-2 border-[#0082FC] bg-white text-[#0082FC] hover:bg-[#0082FC] hover:text-white flex items-center justify-center transition-colors duration-150 cursor-pointer shadow-xs"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 3-Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDocs.map((doc) => (
            <div
              key={doc.id}
              className="border-2 border-[#0082FC] bg-white flex flex-col justify-between hover:border-[#5FD4FD] transition-colors duration-200"
            >
              <div>
                {/* Card Top Banner */}
                <div className="bg-[#0082FC] text-white p-4 flex items-center justify-between border-b border-[#0082FC]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5FD4FD] font-bold whitespace-nowrap">
                    {doc.category}
                  </span>
                  <span className="text-xs font-mono font-bold bg-white text-[#0082FC] px-2.5 py-1 whitespace-nowrap">
                    {doc.fileType} • {doc.fileSize}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Schematic Icon Preview Frame */}
                  <div className="border-2 border-[#0082FC] bg-white p-4 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 70"
                      className="w-24 h-16 text-[#0082FC]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect
                        x="5"
                        y="5"
                        width="90"
                        height="60"
                        stroke="#0082FC"
                        fill="none"
                      />
                      <line
                        x1="15"
                        y1="20"
                        x2="85"
                        y2="20"
                        stroke="#5FD4FD"
                        strokeWidth="2"
                      />
                      <line
                        x1="15"
                        y1="32"
                        x2="65"
                        y2="32"
                        stroke="#0082FC"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="15"
                        y1="44"
                        x2="75"
                        y2="44"
                        stroke="#0082FC"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="15"
                        y1="56"
                        x2="50"
                        y2="56"
                        stroke="#0082FC"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="70"
                        y="40"
                        width="15"
                        height="15"
                        fill="#5FD4FD"
                      />
                    </svg>
                  </div>

                  <div className="text-xs font-mono font-bold text-[#0082FC] uppercase whitespace-nowrap">
                    STANDARD: {doc.standard}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0082FC] leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0082FC]/90 leading-relaxed font-normal">
                    {doc.description}
                  </p>

                  {/* Compliance Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {doc.complianceTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono uppercase bg-white border border-[#0082FC] text-[#0082FC] px-2 py-0.5 font-semibold whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="p-4 pt-0 border-t border-[#0082FC]/20 mt-3 pt-3">
                <button
                  type="button"
                  onClick={() => handleDownload(doc)}
                  className="w-full inline-flex items-center justify-center bg-[#0082FC] text-white hover:bg-[#5FD4FD] hover:text-[#0082FC] font-bold text-xs sm:text-sm uppercase tracking-wider py-2.5 px-3.5 border-2 border-[#0082FC] transition-colors duration-150 whitespace-nowrap cursor-pointer shadow-xs"
                >
                  <span>Download Spec Sheet ({doc.fileType})</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="2.5"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Access Bar */}
        <div className="mt-12 p-6 sm:p-8 border-2 border-[#0082FC] bg-[#0082FC] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-sm font-mono uppercase text-[#5FD4FD] tracking-wider font-bold whitespace-nowrap">
              Need a Custom Engineered Submittal Package?
            </div>
            <div className="text-lg font-bold text-white">
              We compile stamped submittal packages with combined mill test
              reports (MTR) within 24 hours.
            </div>
          </div>

          <a
            href="#quote-builder"
            className="inline-flex items-center justify-center bg-white text-[#0082FC] hover:bg-[#5FD4FD] hover:text-[#0082FC] font-extrabold text-sm sm:text-base uppercase tracking-wider py-4 px-8 border-2 border-white transition-colors duration-150 whitespace-nowrap shadow-md"
          >
            <span>Request Engineer Submittal Binder</span>
          </a>
        </div>
      </div>
    </section>
  );
}
