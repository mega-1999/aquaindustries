'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Zap, Factory } from 'lucide-react';

// --- DATA STRUCTURE ---
const menuData = {
  energy: {
    id: 'energy',
    label: 'Energy',
    icon: Zap,
    categories: [
      {
        name: "Biomass Energy",
        items: ["Bio Fuels", "Biomass Boilers", "Pellet Stoves", "Wood Chips"]
      },
      {
        name: "Hydro Power",
        items: ["Turbines", "Generators", "Control Systems", "Dam Gates"]
      },
      {
        name: "Solar Energy",
        items: ["Solar Panels", "Inverters", "Batteries", "Mounting Systems"]
      },
      {
        name: "Wind Energy",
        items: ["Wind Turbines", "Blades", "Towers", "Gearboxes"]
      }
    ]
  },
  powerGen: {
    id: 'power-gen',
    label: 'Power Generation',
    icon: Factory,
    categories: [
      {
        name: "Automotive & Transport Equipment",
        items: ["Heavy Duty Trucks", "Transport Logistics", "Vehicle Parts", "Fleets"]
      },
      {
        name: "Electrical & Power Systems",
        items: [
          "Big Power Supply",
          "Cables",
          "Electrical Equipment",
          "Power And Generating Sets",
          "Power Cables",
          "Vortex Flow Meter",
          "Wires"
        ]
      },
      {
        name: "Fabrication & Processing Machines",
        items: ["CNC Machines", "Lathes", "Milling Tools", "Welding Equipment"]
      },
      {
        name: "Generator",
        items: ["Diesel Generators", "Gas Generators", "Portable Gensets", "Alternators"]
      },
      {
        name: "Industrial & Plant Equipment",
        items: ["Boilers", "Heat Exchangers", "Compressors", "Pumps"]
      }
    ]
  }
};

export default function CategoryMegaMenu() {
  // State for Top Level Tabs
  const [activeTab, setActiveTab] = useState<'energy' | 'powerGen'>('powerGen');
  
  // State for the Sub-Category (Left Column)
  // We initialize it with the first category of the default active tab
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(1); // Defaulting to 2nd item like image

  // When switching top tabs, reset the left column selection to 0
  const handleTabChange = (tabKey: 'energy' | 'powerGen') => {
    setActiveTab(tabKey);
    setActiveCategoryIndex(0);
  };

  const currentData = menuData[activeTab];
  const activeSubItems = currentData.categories[activeCategoryIndex]?.items || [];

  return (
    <div className="relative group w-fit">
      
      {/* === TRIGGER / TOP TABS === */}
      {/* This simulates the navbar links. In a real navbar, you might trigger this on hover of a "Categories" button, 
          but here we show the tabs directly as requested in the image. */}
      <div className="flex items-center space-x-8 bg-white px-6 py-4 rounded-t-lg border-b border-gray-100">
        
        {/* Tab 1: Energy */}
        <button
          onMouseEnter={() => handleTabChange('energy')}
          className={`flex items-center gap-2 pb-2 text-sm font-semibold transition-all relative ${
            activeTab === 'energy' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Zap className={`w-5 h-5 ${activeTab === 'energy' ? 'text-[#B31942]' : 'text-gray-400'}`} />
          Energy
          {/* Red Underline Animation */}
          {activeTab === 'energy' && (
            <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#B31942]"></span>
          )}
        </button>

        {/* Tab 2: Power Generation */}
        <button
          onMouseEnter={() => handleTabChange('powerGen')}
          className={`flex items-center gap-2 pb-2 text-sm font-semibold transition-all relative ${
            activeTab === 'powerGen' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Factory className={`w-5 h-5 ${activeTab === 'powerGen' ? 'text-[#B31942]' : 'text-gray-400'}`} />
          Power Generation
          {/* Red Underline Animation */}
          {activeTab === 'powerGen' && (
            <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#B31942]"></span>
          )}
        </button>
      </div>


      {/* === DROPDOWN PANEL === */}
      <div className="absolute left-0 top-full w-[800px] bg-white shadow-xl border-t border-gray-100 rounded-b-lg flex z-50 min-h-[400px]">
        
        {/* --- LEFT COLUMN: CATEGORIES --- */}
        <div className="w-1/2 py-6 border-r-2 border-gray-100">
          <ul className="space-y-1">
            {currentData.categories.map((cat, index) => {
              const isActive = index === activeCategoryIndex;
              return (
                <li key={index}>
                  <button
                    onMouseEnter={() => setActiveCategoryIndex(index)}
                    className={`w-full flex items-center justify-between px-6 py-3 text-sm font-bold transition-colors ${
                      isActive 
                        ? 'text-[#B31942] bg-red-50/50' 
                        : 'text-gray-800 hover:text-[#B31942]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* --- RIGHT COLUMN: SUB-ITEMS --- */}
        <div className="w-1/2 py-6 bg-white">
          {/* Vertical gray line visual (optional, acts as spacer padding) */}
          <div className="h-full pl-8 border-l-2 border-gray-100/50">
            <ul className="space-y-4">
              {activeSubItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/category/${item.toLowerCase().replace(/ /g, '-')}`}
                    className={`block text-sm transition-colors ${
                        // Just styling the 3rd item red to match your image example, normally logic would differ
                        item === 'Electrical Equipment' 
                        ? 'text-[#B31942] font-medium' 
                        : 'text-gray-600 hover:text-[#B31942]'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
