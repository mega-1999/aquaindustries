import React from "react";
import Link from "next/link";
const categories = [
  "Manhole Covers",
  "Trench Systems",
  "Paving Risers",
  "Hactches & Access Covers for Inspection Chambers",
  "Fiber Optic, Telecom & Electrical Covers",
  "Precast Concrete Molds",
  "Petro Gas Station Products",
  "Tree Grates",
  "Marine Castings",
  "Detectable Warning Plates",
  "Water Works Products",
  "Ornamental Castings",
  "Water Sampling Station",
  "Precast Concrete Molds"
];

const products = [
  {
    id: "manhole-covers",
    title: "Manhole Covers",
    description: "Available in modern designs and various resistance classes. Metalverse  Industries ductile iron castings are engineered securely for high-load municipal sealing and sewage networks.",
    image: "/assets/image4.jpg",
    link: "/products/manhole-covers"
  },
  {
    id: "trench-system",
    title: "Trench Systems",
    description: "High-performance iron castings supplied in multiple sizes and load classes for efficient rainwater collection on urban roads, highways, parking lots, and industrial plants.",
    image: "/assets/MEGA/pre-trench-01.JPG",
    link: "/products/gully-gratings"
  },
  {
    id: "paving-risers",
    title: "Paving Risers",
    description: "Heavy-duty iron castings engineered to withstand intensive point loads up to 90 tons. The ultimate casting solution for heavy industrial zones, logistics hubs, airports, and dockyards.",
    image: "/assets/PAVING-RISERS/paving riser 1.5201.png",
    link: "/products/heavy-traffic"
  },
  {
    id: "Hatches & Access-covers",
    title: "Hactches & Access Covers for Inspection Chambers",
    description: "Versatile casting solutions for inspection and access over water, sewage, and electrical distribution chambers. Built with airtight sealing, dual-face options, and modular sizing.",
    image: "/assets/MEGA/HATCHES COVER.png",
    link: "/products/access-covers"
  },
  {
    id: "utility-telecom-electrical",
    title: "Fiber Optic, Telecom & Electrical Covers",
    description: "Specialized infrastructure castings offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/assets/MEGA/white.png",
    link: "/products/telecom-covers"
  },
  {
    id: "precast-concrete molds",
    title: "Precast Concrete Molds",
    description: "Premium linear drainage solutions engineered with solid ductile iron casting gratings to ensure rapid surface water evacuation and maximum performance.",
    image: "/assets/MEGA/catch-01 (3).JPG",
    link: "/products/drainage-castings"
  },
  
  {
    id: "petro-gas-station-products",
    title: "Petro Gas Station Products",
    description: "Specialized infrastructure castings offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/assets/MEGA/MONITERING WELL STATION.11 - Copy.png",
    link: "/products/telecom-covers"
  },
  {
    id: "tree-grates",
    title: "Tree Grates",
    description: "Premium linear drainage solutions engineered with solid ductile iron casting gratings to ensure rapid surface water evacuation and maximum performance.",
    image: "/assets/image9.jpeg",
    link: "/products/drainage-castings"
  },
  {
    id: "marine-castings",
    title: "Marine Castings",
    description: "Specialized infrastructure castings offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/assets/image7.jpeg",
    link: "/products/telecom-covers"
  },
  {
    id: "detectable-warning-plates",
    title: "Detectable Warning Plates",
    description: "Premium linear drainage solutions engineered with solid ductile iron casting gratings to ensure rapid surface water evacuation and maximum performance.",
    image: "/assets/MEGA/white.png",
    link: "/products/drainage-castings"
  },
  {
    id: "water-works-product",
    title: "Water Works Products",
    description: "Specialized infrastructure castings offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/assets/MEGA/1.1 - Copy.png",
    link: "/products/telecom-covers"
  },
  {
    id: "ornamental-castings",
    title: "Ornamental Castings",
    description: "Premium linear drainage solutions engineered with solid ductile iron casting gratings to ensure rapid surface water evacuation and maximum performance.",
    image: "/assets/MEGA/white.png",
    link: "/products/drainage-castings"
  },
  {
    id: "water-sampling-station",
    title: "Water Sampling Station",
    description: "Specialized infrastructure castings offering secure access, single/articulated mechanics, and tamper-proof locking mechanisms across varying heavy-duty utility networks.",
    image: "/assets/MEGA/sampling stations.png",
    link: "/products/telecom-covers"
  },
  {
    id: "precast-concrete molds",
    title: "Precast Concrete Molds",
    description: "Premium linear drainage solutions engineered with solid ductile iron casting gratings to ensure rapid surface water evacuation and maximum performance.",
    image: "/assets/MEGA/catch-01 (3).JPG",
    link: "/products/drainage-castings"
  }
];

const MegaProduct = () => {
  return (
    <section className="bg-[#0A3161] text-white py-16 w-full px-4 sm:px-6 lg:px-10 font-sans border-t border-white/10">
      <div className="">

        {/* Header Section */}
        <div className="border-b border-white/20 pb-6 mb-10">
          <h2 className="text-3xl font-light tracking-wide text-white mb-2">
            Explore <span className="font-semibold text-[#B31942]">Metalverse  Industries</span> Products
          </h2>
          <p className="text-sm text-white/60">
            Complete line of world-class nodular ductile iron castings (Fe 50007), delivering ultimate durability and engineering modernity to your infrastructure projects.
          </p>
        </div>

        {/* Categorized Quick Links Menu */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-16 text-xs uppercase tracking-wider">
          {categories.map((cat, index) => (
            <button
              key={index}
              className="px-3 py-2 border border-white/20 bg-white/5 hover:bg-[#B31942] hover:border-[#B31942] text-white/60 hover:text-white transition-all duration-200 rounded-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid / Row Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 border-b border-white/10 filter drop-shadow-[0_10px_15px_rgba(10,49,97,0.6)] transition-transform duration-300  pb-12 last:border-0"
            >
              {/* Product Image Wrapper Container */}
              <div className="w-full md:w-1/3 flex justify-center items-center bg-[#B31942] p-6 rounded-lg border border-[#B31942]/40 shadow-inner group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-56 object-contain filter drop-shadow-[0_10px_15px_rgba(10,49,97,0.6)] transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/300x200/222/fff?text=Casting+Product";
                  }}
                />
              </div>

              {/* Product Content Details */}
              <div className="w-full md:w-2/3 flex flex-col items-start justify-center">
                <h3 className="text-2xl font-semibold text-white tracking-wide mb-3">
                  {product.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
                  {product.description}
                </p>

                {/* Styled Red Border Action Button */}
                <Link
                  href={product.link}
                  className="
                    inline-block text-xs font-bold uppercase tracking-widest text-white 
                    border border-[#B31942] px-6 py-3 bg-transparent 
                    hover:bg-[#B31942] transition-all duration-300 ease-in-out
                    rounded-xs
                  "
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MegaProduct;
