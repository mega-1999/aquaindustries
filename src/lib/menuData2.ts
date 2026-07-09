import { Zap, Factory, Settings, ShieldCheck, Droplets, Cog, Hammer, Flame, Wrench, Anchor, Snowflake, Building2, TreePineIcon, LocateIcon, DropletsIcon, Cpu, Shapes, Pickaxe, Truck } from 'lucide-react';
export const menuData = {
  construction_castings: {
    id: 'construction_castings',
    label: 'CONSTRUCTION CASTINGS',
    icon: Zap, // change icon if you like
    bannerImage: '/assets/image1.jpeg',
    color: 'bg-[#B31942] text-white',

    categories: [

      // 1) Manhole Covers & Frames
      {
        name: "MANHOLE COVERS & FRAMES",
        slug: "manhole-covers-and-frames",
        image: "/assets/image1.jpeg",
        description:
          "Durable ductile iron an d gray iron manhole covers and frames engineered for municipal, highway, and smart-city infrastructure.",
        videoUrl: "/video/manhole-covers.mp4",
        items: [
          "Circular manhole covers",
          "Square & rectangular manhole covers",
          "Solid top covers",
          "Recessed infill covers",
          "Vented / perforated covers",
          "Manhole frames & seating rings"
        ]
      },

      // 2) Drainage & Grating Castings
      {
        name: "DRAINAGE & GRATING CASTINGS",
        slug: "drainage-and-grating-castings",
        image: "/assets/image2.jpeg",
        description:
          "High-strength drainage gratings and trench covers designed for stormwater control, highways, airports, and industrial facilities.",
        videoUrl: "/video/drainage-gratings.mp4",
        items: [
          "Trench gratings",
          "Kerb inlet grates",
          "Stormwater gratings",
          "Heavy traffic rated gratings",
          "Gully grates & frames",
          "Walkway & platform gratings"
        ]
      },

      // 3) Construction Machinery Cast Components
      {
        name: "CONSTRUCTION MACHINERY CAST COMPONENTS",
        slug: "construction-machinery-cast-components",
        image: "/assets/image3.jpeg",
        description:
          "Precision cast components manufactured for excavators, loaders, batching plants, cranes and concrete machinery.",
        videoUrl: "/video/machinery-cast-components.mp4",
        items: [
          "Pump housings",
          "Gearbox casings",
          "Bearing housings",
          "Counterweights",
          "Engine mounting brackets",
          "Transmission housings"
        ]
      },

      // 4) Structural & Architectural Castings
      {
        name: "STRUCTURAL & ARCHITECTURAL CASTINGS",
        slug: "structural-and-architectural-castings",
        image: "/assets/image4.jpg",
        description:
          "Decorative and structural castings used in building architecture, railing systems, façade elements, and landscape structures.",
        videoUrl: "/video/architectural-castings.mp4",
        items: [
          "Cast balustrades & railings",
          "Lamp post castings",
          "Gate & fence castings",
          "Decorative façade elements",
          "Urban furniture castings",
          "Cast architectural brackets"
        ]
      },

      // 5) Utility & Infrastructure Castings
      {
        name: "UTILITY & INFRASTRUCTURE CASTINGS",
        slug: "utility-and-infrastructure-castings",
        image: "/assets/image5.jpeg",
        description:
          "Castings designed for water supply systems, telecom chambers, electric networks, and smart city infrastructure projects.",
        videoUrl: "/video/utility-castings.mp4",
        items: [
          "Surface boxes",
          "Valve boxes",
          "Transformer base castings",
          "Cable trench covers",
          "Access covers",
          "Inspection chamber covers"
        ]
      }
    ]
  },
  water_works_casting: {
    id: 'water_works_casting',
    label: 'WATER WORKS CASTINGS',
    icon: DropletsIcon, // or any icon you prefer
    bannerImage: '/assets/image2.jpeg',
    color: 'bg-blue-100 text-blue-900',

    categories: [

      // 1) Valve Bodies & Components
      {
        name: "VALVE BODIES & COMPONENTS",
        slug: "valve-bodies-and-components",
        image: "/assets/image6.jpg",
        description:
          "High-strength cast valve bodies and components designed for potable water, wastewater and industrial water handling applications.",
        videoUrl: "/video/valve-bodies.mp4",
        items: [
          "Gate valve bodies",
          "Butterfly valve bodies",
          "Globe valve bodies",
          "Check valve housings",
          "Control valve cast components",
          "Actuator mounting castings"
        ]
      },

      // 2) Hydrant & Water Distribution Castings
      {
        name: "HYDRANT & WATER DISTRIBUTION CASTINGS",
        slug: "hydrant-and-water-distribution-castings",
        image: "/assets/image7.jpeg",
        description:
          "Cast components used in municipal water networks for underground and above-ground fire hydrants and distribution systems.",
        videoUrl: "/video/hydrant-castings.mp4",
        items: [
          "Fire hydrant bodies",
          "Hydrant risers",
          "Hydrant bonnet castings",
          "Hydrant base castings",
          "Hydrant nozzle connectors",
          "Hydrant valve housings"
        ]
      },

      // 3) Pipe Fittings & Connector Castings
      {
        name: "PIPE FITTINGS & CONNECTOR CASTINGS",
        slug: "pipe-fittings-and-connector-castings",
        image: "/assets/image8.jpg",
        description:
          "Ductile iron and alloy cast fittings engineered for water pipelines, joint connections and network pressure systems.",
        videoUrl: "/video/pipe-fitting-castings.mp4",
        items: [
          "Flanged fittings",
          "Socket fittings",
          "Mechanical joint fittings",
          "Restrained joint connectors",
          "Dismantling joint castings",
          "Expansion joint cast components"
        ]
      },

      // 4) Meter Box & Access Infrastructure Castings
      {
        name: "METER BOX & ACCESS INFRASTRUCTURE CASTINGS",
        slug: "meter-box-and-access-castings",
        image: "/assets/image9.jpeg",
        description:
          "Durable castings used for water meter housings, access covers and inspection systems in urban water networks.",
        videoUrl: "/video/meter-box-castings.mp4",
        items: [
          "Water meter box covers",
          "Cast iron enclosures",
          "Surface access covers",
          "Inspection chamber castings",
          "Service box castings"
        ]
      },

      // 5) Pump & Flow Equipment Castings
      {
        name: "PUMP & FLOW EQUIPMENT CASTINGS",
        slug: "pump-and-flow-equipment-castings",
        image: "/assets/image10.jpeg",
        description:
          "Precision-engineered castings for pumps and fluid movement systems used in potable water, irrigation and wastewater treatment.",
        videoUrl: "/video/pump-castings.mp4",
        items: [
          "Pump casings",
          "Impeller castings",
          "Volute casings",
          "Bearing housings",
          "Suction & discharge casings",
          "Pump mounting base castings"
        ]
      }
    ]
  },
  trench_products: {
    id: 'trench_products',
    label: 'TRENCH PRODUCTS',
    icon: Settings,
    bannerImage: '/assets/image3.jpeg',
    color: 'bg-[#B31942] text-white',
    categories: [
      {
        name: "ZINC & ALUMINIUM CAST ANODES",
        slug: "zinc-aluminium-cast-anodes",
        image: "/assets/image11.jpg",
        description: "High-purity zinc and aluminium cast anodes designed for long-term corrosion prevention in marine and industrial environments.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Zinc slab anodes",
          "Aluminium block anodes",
          "Boat hull anodes",
          "Pipeline cast anodes",
          "Tank & vessel sacrificial anodes"
        ]
      },
      {
        name: "COATED TITANIUM ANODES",
        slug: "coated-titanium-anodes",
        image: "/assets/image12.jpg",
        description: "Mixed-metal oxide (MMO) coated titanium anodes built for high-performance cathodic protection with minimal maintenance.",
        videoUrl: "/video/video1.mp4",
        items: [
          "MMO rod anodes",
          "MMO mesh anodes",
          "Ribbon titanium anodes",
          "Tubular titanium anodes",
          "Disc & plate titanium anodes"
        ]
      },
      {
        name: "MAGNESIUM ANODES",
        slug: "magnesium-anodes",
        image: "/assets/image13.jpg",
        description: "Premium magnesium anodes designed for cathodic protection in underground and freshwater applications.",
        videoUrl: "/video/video1.mp4",
        items: [
          "High potential magnesium anodes",
          "AZ63 magnesium rods",
          "Pre-packaged magnesium anodes",
          "Cast magnesium ingots",
          "Flexible anode assemblies"
        ]
      },
      {
        name: "TRANSFORMERS & RECTIFIERS",
        slug: "transformers-rectifiers",
        image: "/assets/image14.jpeg",
        description: "Reliable transformers and rectifiers engineered to deliver controlled DC output for cathodic protection systems.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Transformer rectifier units (TRU)",
          "Digital automatic rectifiers",
          "Outdoor weatherproof rectifiers",
          "Oil-cooled transformer rectifiers",
          "Panel-mounted rectifier systems"
        ]
      },
      {
        name: "JUNCTION BOXES",
        slug: "junction-boxes",
        image: "/assets/image15.jpeg",
        description: "Industrial-grade junction boxes designed for safe and secure connectivity in cathodic protection setups.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Test station junction boxes",
          "Current distribution boxes",
          "PCB terminal boxes",
          "FRP & metal junction enclosures",
          "Underground access junction boxes"
        ]
      },
      {
        name: "MONITORING EQUIPMENTS",
        slug: "monitoring-equipments",
        image: "/assets/image16.jpg",
        description: "Advanced monitoring equipment for tracking, measuring and maintaining optimal cathodic protection levels.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Reference electrodes",
          "Remote monitoring units (RMU)",
          "Portable CP survey meters",
          "Potential logging devices",
          "Test station probes"
        ]
      },
      {
        name: "CALES & WIRING SYSTEMS",
        slug: "cales-and-wiring-systems",
        image: "/assets/image17.jpg",
        description: "Durable cabling and wiring systems engineered for cathodic protection installations in challenging conditions.",
        videoUrl: "/video/video1.mp4",
        items: [
          "Anode lead wires",
          "High molecular weight polyethylene cables",
          "Copper–copper sulfate cable",
          "Cable splicing kits",
          "Underground shielding wires"
        ]
      }
    ]

  },
  // precast_molds: {
  //   id: 'precast_molds',
  //   label: 'PRECAST & MOLDS',
  //   icon: Shapes, // choose any lucide icon you like
  //   bannerImage: '/assets/image4.jpg',
  //   color: 'bg-orange-100 text-orange-900',

  //   categories: [

  //     // 1) Precast Concrete Molds
  //     {
  //       name: "PRECAST CONCRETE MOLDS",
  //       slug: "precast-concrete-molds",
  //       image: "/assets/image18.jpeg",
  //       description:
  //         "High-precision molds engineered for manufacturing durable, dimensionally accurate precast concrete elements.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Slab molds",
  //         "Beam & column molds",
  //         "Retaining block molds",
  //         "Foundation molds",
  //         "Drain cover molds"
  //       ]
  //     },

  //     // 2) Precast Road & Highway Molds
  //     {
  //       name: "PRECAST ROAD & HIGHWAY MOLDS",
  //       slug: "precast-road-and-highway-molds",
  //       image: "/assets/image19.jpeg",
  //       description:
  //         "Molds designed for precast components used in roads, highways, bridges and transportation infrastructure.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Crash barrier molds",
  //         "Curbstone molds",
  //         "Bridge girder molds",
  //         "Divider molds",
  //         "Drain channel molds"
  //       ]
  //     },

  //     // 3) Precast Pipe Molds
  //     {
  //       name: "PRECAST PIPE MOLDS",
  //       slug: "precast-pipe-molds",
  //       image: "/assets/image20.jpeg",
  //       description:
  //         "Heavy-duty molds for manufacturing RCC and precast concrete pipes with high load-bearing capacity.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "RCC Hume pipe molds",
  //         "Box culvert pipe molds",
  //         "Jack pipe molds",
  //         "Pressure pipe molds",
  //         "Manhole pipe molds"
  //       ]
  //     },

  //     // 4) Precast Building Components
  //     {
  //       name: "PRECAST BUILDING COMPONENTS",
  //       slug: "precast-building-components",
  //       image: "/assets/image1.jpeg",
  //       description:
  //         "Molds used for precast elements in residential, commercial and industrial building construction.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Wall panel molds",
  //         "Floor slab molds",
  //         "Staircase molds",
  //         "Balcony & railing molds",
  //         "Parapet wall molds"
  //       ]
  //     },

  //     // 5) Landscape & Urban Molds
  //     {
  //       name: "LANDSCAPE & URBAN MOLDS",
  //       slug: "landscape-and-urban-molds",
  //       image: "/assets/image2.jpeg",
  //       description:
  //         "Architectural molds for landscape development, garden structures and city beautification elements.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Paving block molds",
  //         "Planter molds",
  //         "Tree guard molds",
  //         "Street furniture molds",
  //         "Decorative wall molds"
  //       ]
  //     },

  //     // 6) Utility & Municipal Precast Molds
  //     {
  //       name: "UTILITY & MUNICIPAL PRECAST MOLDS",
  //       slug: "utility-and-municipal-precast-molds",
  //       image: "/assets/image3.jpeg",
  //       description:
  //         "Molds developed for smart city projects, utilities and public infrastructure applications.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Manhole cover molds",
  //         "Sewer chamber molds",
  //         "Electric cable trench molds",
  //         "Utility vault molds",
  //         "Drainage component molds"
  //       ]
  //     },

  //     // 7) Wall & Boundary Molds
  //     {
  //       name: "WALL & BOUNDRY MOLDS",
  //       slug: "wall-and-boundary-molds",
  //       image: "/assets/image4.jpg",
  //       description:
  //         "Precast molds for compound walls, fencing and boundary applications offering high strength and fast installation.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Prestressed boundary wall molds",
  //         "Post & panel molds",
  //         "Fence slab molds",
  //         "Gate pillar molds",
  //         "Textured wall molds"
  //       ]
  //     },

  //     // 8) Industrial Precast Molds
  //     {
  //       name: "INDUSTRIAL PRECAST MOLDS",
  //       slug: "industrial-precast-molds",
  //       image: "/assets/image5.jpeg",
  //       description:
  //         "Molds for precast elements used in factories, warehouses, utility buildings and heavy industry projects.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Machine foundation molds",
  //         "Cable tray molds",
  //         "Trench cover molds",
  //         "Heavy load slab molds",
  //         "Industrial column molds"
  //       ]
  //     },

  //     // 9) Agriculture Precast Molds
  //     {
  //       name: "AGRICULTURE PRECAST MOLDS",
  //       slug: "agriculture-precast-molds",
  //       image: "/assets/image6.jpg",
  //       description:
  //         "Precast molds designed for agricultural infrastructure and farm development components.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Irrigation canal molds",
  //         "Cattle trough molds",
  //         "Cow shed molds",
  //         "Farming slab molds",
  //         "Agriculture fencing molds"
  //       ]
  //     },

  //     // 10) Modular Mold Systems
  //     {
  //       name: "MODULAR MOLDS SYSTEMS",
  //       slug: "modular-molds-systems",
  //       image: "/assets/image7.jpeg",
  //       description:
  //         "Flexible modular mold systems allowing quick size changes and high productivity for multiple product designs.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Adjustable shuttering systems",
  //         "Bolt-lock panel molds",
  //         "Universal mold frames",
  //         "Quick release systems",
  //         "Interchangeable panel molds"
  //       ]
  //     },

  //     // 11) Mold Accessories
  //     {
  //       name: "MOLDS ACCESSORIES",
  //       slug: "molds-accessories",
  //       image: "/assets/image8.jpg",
  //       description:
  //         "Accessories that enhance mold performance, surface finish and production efficiency.",
  //       videoUrl: "/video/mold/2 feet mold.54.mp4",

  //       items: [
  //         "Vibration systems",
  //         "Lifting anchors",
  //         "Rubber gaskets",
  //         "Rebar positioning accessories",
  //         "Surface finishing liners"
  //       ]
  //     }
  //   ]
  // }
  // ,
  buildings_supply: {
    id: 'buildings_supply',
    label: 'BUILDING SUPPLY',
    icon: Building2, // choose any lucide icon you like
    bannerImage: '/assets/image5.jpeg',
    color: 'bg-stone-100 text-stone-900',

    categories: [

      // 1) Cement, Mortar & Concrete Products
      {
        name: "CEMENT, MORTAR & CONCRETE PRODUCTS",
        slug: "cement-mortar-concrete-products",
        image: "/assets/image9.jpeg",
        description:
          "High-quality cementitious materials and ready-mix solutions for structural, masonry and finishing applications in building projects.",
        videoUrl: "/video/cement-products.mp4",
        items: [
          "Portland cement",
          "Ready-mix concrete",
          "Dry mix mortar",
          "Grouts & repair mortars",
          "Self-leveling compounds"
        ]
      },

      // 2) Bricks, Blocks & Masonry Units
      {
        name: "BRICKS, BLOCKS & MASONRY UNITS",
        slug: "bricks-blocks-masonry-units",
        image: "/assets/image10.jpeg",
        description:
          "Structural and lightweight masonry products for walls, partitions and façade applications.",
        videoUrl: "/video/masonry-units.mp4",
        items: [
          "Clay bricks",
          "Concrete blocks",
          "AAC blocks",
          "Hollow blocks",
          "Interlocking paver blocks"
        ]
      },

      // 3) Roofing & Cladding Systems
      {
        name: "ROOFING & CLADDING SYSTEMS",
        slug: "roofing-and-cladding-systems",
        image: "/assets/image11.jpg",
        description:
          "Durable roofing and exterior cladding solutions engineered for weather resistance and architectural aesthetics.",
        videoUrl: "/video/roofing-cladding.mp4",
        items: [
          "Metal roofing sheets",
          "Sandwich panels",
          "Clay & concrete roof tiles",
          "Wall cladding panels",
          "Flashing & ridge accessories"
        ]
      },

      // 4) Doors, Windows & Hardware
      {
        name: "DOORS, WINDOWS & HARDWARE",
        slug: "doors-windows-hardware",
        image: "/assets/image12.jpg",
        description:
          "Energy-efficient doors and windows with a complete range of architectural hardware for commercial and residential buildings.",
        videoUrl: "/video/doors-windows.mp4",
        items: [
          "UPVC doors & windows",
          "Aluminium doors & windows",
          "Hardware fittings",
          "Hinges & handles",
          "Framing systems"
        ]
      },

      // 5) Plumbing & Sanitary Systems
      {
        name: "PLUMBING & SANITARY SYSTEMS",
        slug: "plumbing-and-sanitary-systems",
        image: "/assets/image13.jpg",
        description:
          "Comprehensive plumbing and sanitary ware solutions designed for water supply, drainage and hygiene management.",
        videoUrl: "/video/plumbing-sanitary.mp4",
        items: [
          "CPVC / UPVC piping systems",
          "Sanitary fittings",
          "Water storage tanks",
          "Drainage piping",
          "Bathroom accessories"
        ]
      },

      // 6) Electrical & Lighting Products
      {
        name: "ELECTRICAL & LIGHTING PRODUCTS",
        slug: "electrical-and-lighting-products",
        image: "/assets/image14.jpeg",
        description:
          "Electrical distribution and lighting solutions for residential, industrial and commercial building infrastructure.",
        videoUrl: "/video/electrical-lighting.mp4",
        items: [
          "Switches & sockets",
          "MCB & distribution boards",
          "LED lighting systems",
          "Cables & wiring",
          "Panel boards"
        ]
      }
    ]
  }
  ,
  tree_grates: {
    id: 'tree_grates',
    label: 'TREE GRATES',
    icon: TreePineIcon, // choose any lucide icon you prefer
    bannerImage: '/assets/image6.jpg',
    color: 'bg-green-100 text-green-900',

    categories: [

      // 1) Square Tree Grates
      {
        name: "SQUARE TREE GRATES",
        slug: "square-tree-grates",
        image: "/assets/image15.jpeg",
        description:
          "Heavy-duty square tree grates designed for pedestrian pathways, plazas, malls and urban landscaping projects.",
        videoUrl: "/video/square-tree-grates.mp4",
        items: [
          "Two-piece square grates",
          "Four-piece modular grates",
          "Bolted frame assemblies",
          "Decorative pattern grates",
          "Heavy load-bearing options"
        ]
      },

      // 2) Circular Tree Grates
      {
        name: "CIRCULAR TREE GRATES",
        slug: "circular-tree-grates",
        image: "/assets/image16.jpg",
        description:
          "Cast iron circular tree grates providing protection while allowing healthy aeration and water flow to tree roots.",
        videoUrl: "/video/circular-tree-grates.mp4",
        items: [
          "One-piece circular grates",
          "Segmented circular grates",
          "Adjustable inner opening sizes",
          "Decorative circular designs",
          "Frame & grate assemblies"
        ]
      },

      // 3) Ductile Iron Tree Grates
      {
        name: "DUCTILE IRON TREE GRATES",
        slug: "ductile-iron-tree-grates",
        image: "/assets/image17.jpg",
        description:
          "High-strength ductile iron tree grates complying with international load-class standards for public walkways and traffic areas.",
        videoUrl: "/video/ductile-tree-grates.mp4",
        items: [
          "Heavy duty ductile iron grates",
          "Corrosion-protected coated grates",
          "Pedestrian & vehicular load class options",
          "Anti-slip surface patterns",
          "Custom logo / branding option"
        ]
      },

      // 4) Tree Guards & Protection Systems
      {
        name: "TREE GUARDS & PROTECTION SYSTEMS",
        slug: "tree-guards-and-protection-systems",
        image: "/assets/image18.jpeg",
        description:
          "Protective systems designed to safeguard young trees against pedestrian traffic, vehicles and physical damage.",
        videoUrl: "/video/tree-guards.mp4",
        items: [
          "Steel tree guards",
          "Cast iron tree guards",
          "Decorative tree enclosures",
          "Square & circular guard systems",
          "Anchor & mounting accessories"
        ]
      },

      // 5) Custom Tree Grates
      {
        name: "CUSTOM TREE GRATES",
        slug: "custom-tree-grates",
        image: "/assets/image19.jpeg",
        description:
          "Tailor-made tree grate solutions engineered to meet unique architectural, city planning and landscape design requirements.",
        videoUrl: "/video/custom-tree-grates.mp4",
        items: [
          "Custom size and shape grates",
          "Laser-cut design patterns",
          "Engraved city name / branding",
          "Special coating & finishing",
          "OEM & private-label manufacturing"
        ]
      }
    ]
  }
  ,
  mining_products: {
    id: 'mining_products',
    label: 'MINING PRODUCTS',
    icon: Pickaxe, // pick any lucide icon you like
    bannerImage: '/assets/image7.jpeg',
    color: 'bg-stone-100 text-stone-900',

    categories: [

      // 1) Crusher Parts
      {
        name: "CRUSHER PARTS",
        slug: "crusher-parts",
        image: "/assets/image20.jpeg",
        description:
          "High-strength wear parts for jaw, cone and impact crushers designed to withstand extreme abrasion and impact conditions.",
        items: [
          "Jaw plates",
          "Mantles & concaves",
          "Blow bars",
          "Liners & cheek plates",
          "Hammer crusher parts"
        ]
      },

      // 2) Screen Panels
      {
        name: "SCREEN PANELS",
        slug: "screen-panels",
        image: "/assets/image1.jpeg",
        description:
          "Screening panels used for separation and classification of minerals and aggregates in mining operations.",
        items: [
          "Polyurethane screen panels",
          "Rubber screen panels",
          "Wedge wire screens",
          "Perforated metal screens",
          "Modular screen decks"
        ]
      },

      // 3) Idlers & Rollers
      {
        name: "IDLERS & ROLLERS",
        slug: "idlers-and-rollers",
        image: "/assets/image2.jpeg",
        description:
          "Conveyor idlers and rollers engineered for material handling in mines, ports and bulk handling facilities.",
        items: [
          "Carrying idlers",
          "Return rollers",
          "Impact idlers",
          "Self-aligning idlers",
          "Garland idlers"
        ]
      },

      // 4) Bits & Drill Rods
      {
        name: "BITS & DRILL RODS",
        slug: "bits-and-drill-rods",
        image: "/assets/image3.jpeg",
        description:
          "Drilling tools suitable for underground, open-cast mining and quarrying applications.",
        items: [
          "Button bits",
          "Taper bits",
          "DTH hammer bits",
          "Drill rods",
          "Shank adaptors"
        ]
      },

      // 5) Blocks & Wear Parts
      {
        name: "BLOCKS & WEAR PARTS",
        slug: "blocks-and-wear-parts",
        image: "/assets/image4.jpg",
        description:
          "Wear-resistant blocks and liners designed to extend service life of mining and material handling equipment.",
        items: [
          "Wear blocks",
          "Chocky bars",
          "Wear plates",
          "Impact liners",
          "Hardfaced components"
        ]
      },

      // 6) Teeth & Adaptors
      {
        name: "TEETH & ADAPTORS",
        slug: "teeth-and-adaptors",
        image: "/assets/image5.jpeg",
        description:
          "Ground engaging tools used on excavators, loaders and buckets for efficient digging and loading.",
        items: [
          "Bucket teeth",
          "Adaptors",
          "Side cutters",
          "Ripper teeth",
          "Tooth pins & retainers"
        ]
      },

      // 7) Utility Components
      {
        name: "UTILITY COMPONENTS",
        slug: "utility-components",
        image: "/assets/image6.jpg",
        description:
          "Essential supporting components and accessories used across mining machines and processing plants.",
        items: [
          "Bearings housings",
          "Brackets & frames",
          "Support structures",
          "Custom fabricated parts",
          "General mining hardware"
        ]
      }
    ]
  }
  ,
  fabrication_products: {
    id: 'fabrication_products',
    label: 'FABRICATION PRODUCTS',
    icon: Wrench, // choose any lucide icon you prefer
    bannerImage: '/assets/image8.jpg',
    color: 'bg-gray-100 text-gray-900',

    categories: [

      // 1) Steel Structures & Frames
      {
        name: "STEEL STRUCTURES & FRAMES",
        slug: "steel-structures-and-frames",
        image: "/assets/image7.jpeg",
        description:
          "Custom fabricated steel structures and frames designed for industrial buildings, warehouses and heavy engineering applications.",
        videoUrl: "/video/steel-structures.mp4",
        items: [
          "Structural steel frames",
          "PEB building structures",
          "Portal frames & trusses",
          "Equipment supporting frames",
          "Industrial shed structures"
        ]
      },

      // 2) Sheet Metal Fabrication Components
      {
        name: "SHEET METAL FABRICATION COMPONENTS",
        slug: "sheet-metal-fabrication-components",
        image: "/assets/image8.jpg",
        description:
          "Precision sheet metal fabricated parts produced through cutting, bending and forming processes with high dimensional accuracy.",
        videoUrl: "/video/sheet-metal-fabrication.mp4",
        items: [
          "Enclosures & cabinets",
          "Control panels",
          "Laser cut components",
          "Formed sheet assemblies",
          "Perforated sheet parts"
        ]
      },

      // 3) Industrial Fabricated Equipment
      {
        name: "INDUSTRIAL FABRICATED EQUIPMENT",
        slug: "industrial-fabricated-equipment",
        image: "/assets/image9.jpeg",
        description:
          "Heavy-duty fabricated equipment for cement plants, power plants, mining, steel industries and material handling systems.",
        videoUrl: "/video/industrial-fabricated-equipment.mp4",
        items: [
          "Hoppers & bunkers",
          "Chutes & ducts",
          "Fabricated tanks",
          "Kiln & furnace structures",
          "Material handling frames"
        ]
      },

      // 4) Pipe Spools & Piping Fabrication
      {
        name: "PIPE SPOOLS & PIPING FABRICATION",
        slug: "pipe-spools-and-piping-fabrication",
        image: "/assets/image10.jpeg",
        description:
          "Fabricated pipe spools and piping assemblies for oil & gas, chemical plants, water treatment facilities and process industries.",
        videoUrl: "/video/piping-fabrication.mp4",
        items: [
          "Pipe spool assemblies",
          "MS/SS piping skids",
          "Pressure piping systems",
          "Header & manifold fabrication",
          "Welded pipe supports & shoes"
        ]
      },

      // 5) Custom Fabrication & OEM Products
      {
        name: "CUSTOM FABRICATION & OEM PRODUCTS",
        slug: "custom-fabrication-and-oem-products",
        image: "/assets/image11.jpg",
        description:
          "Tailor-made fabricated products developed based on client drawings, specifications and OEM manufacturing requirements.",
        videoUrl: "/video/custom-fabrication.mp4",
        items: [
          "Prototype fabrication",
          "Low-volume special fabrications",
          "Project-specific assemblies",
          "OEM private label fabrication",
          "Reverse engineered components"
        ]
      }
    ]
  }
  ,
  paving_risers: {
    id: 'paving_risers',
    label: 'PAVING RISERS',
    icon: Cog, // change if you prefer
    bannerImage: '/assets/PAVING-RISERS/paving riser 1.5200.png',
    color: 'bg-[#B31942] text-white',

    categories: [

      // 1) Adjustable Paving Risers
      {
        name: "ADJUSTABLE PAVING RISERS",
        slug: "adjustable-paving-risers",
        image: "/assets/PAVING-RISERS/paving riser 1.5200.png",
        description:
          "Height-adjustable paving risers designed for raised flooring, terraces, rooftops and outdoor decking applications.",
        videoUrl: "/video/paving_riser/paving riser 1.5213.mp4",
        items: [
          "Wide height adjustment range",
          "Self-levelling functionality",
          "High load bearing capacity",
          "Quick installation design",
          "Suitable for stone & porcelain tiles"
        ]
      },

      // 2) Fixed Height Risers
      {
        name: "FIXED HEIGHT RISERS",
        slug: "fixed-height-risers",
        image: "/assets/PAVING-RISERS/paving riser 1.5203.png",
        description:
          "Cost-effective fixed-height risers used for uniform elevation in pedestrian areas, plazas and garden paving projects.",
        videoUrl: "/video/paving_riser/paving riser 1.5216.mp4",
        items: [
          "Low-profile supports",
          "Predefined height options",
          "Anti-slip design",
          "UV and weather resistant material",
          "Ideal for lightweight paving units"
        ]
      },

      // 3) Heavy-Duty Pedestal Systems
      {
        name: "HEAVY-DUTY PEDESTAL SYSTEMS",
        slug: "heavy-duty-pedestal-systems",
        image: "/assets/PAVING-RISERS/paving riser 1.5204.png",
        description:
          "Strong pedestal systems engineered for high-load applications like commercial plazas, industrial walkways and public spaces.",
        videoUrl: "/video/paving_riser/paving riser 1.5217.mp4",
        items: [
          "Reinforced support structure",
          "High load carrying capacity",
          "Shock & vibration resistance",
          "Supports concrete & granite slabs",
          "Suitable for vehicular load areas"
        ]
      },

      // 4) Self-Levelling Risers
      {
        name: "SELF-LEVELLING RISERS",
        slug: "self-levelling-risers",
        image: "/assets/PAVING-RISERS/paving riser 1.5205.png",
        description:
          "Self-levelling risers designed to compensate for surface irregularities and slopes while maintaining level paving surfaces.",
        videoUrl: "/video/paving_riser/paving riser 1.5223.mp4",
        items: [
          "Automatic slope correction",
          "Perfectly level paved finish",
          "Reduces onsite adjustments",
          "Ideal for rooftops and terraces",
          "Compatible with adjustable pedestals"
        ]
      },

      // 5) Accessories & Spacers
      {
        name: "ACCESSORIES & SPACERS",
        slug: "paving-riser-accessories-and-spacers",
        image: "/assets/PAVING-RISERS/paving riser 1.5200.png",
        description:
          "Complete range of accessories for pedestal systems including spacers, shims and edge supports for accurate tile alignment.",
        videoUrl: "/video/paving_riser/paving riser 1.5251.mp4",
        items: [
          "Tile spacers",
          "Rubber shims",
          "Slope correctors",
          "Edge support brackets",
          "Acoustic insulation pads"
        ]
      }
    ]
  }
  ,
  // petro_products: {
  //   id: 'petro_products',
  //   label: 'PETRO PRODUCTS',
  //   icon: Flame, // choose any lucide icon you prefer
  //   bannerImage: '/assets/image9.jpeg',
  //   color: 'bg-amber-100 text-amber-900',

  //   categories: [

  //     // 1) Refinery & Process Equipment Components
  //     {
  //       name: "REFINERY & PROCESS EQUIPMENT COMPONENTS",
  //       slug: "refinery-and-process-equipment-components",
  //       image: "/assets/image12.jpg",
  //       description:
  //         "Critical cast and fabricated components used in refineries and petrochemical process plants operating under high temperature and pressure.",
  //       videoUrl: "/video/petro/video1.mp4",
  //       items: [
  //         "Pressure vessel components",
  //         "Heat exchanger parts",
  //         "Column internals",
  //         "Burner & furnace castings",
  //         "Reactor support castings"
  //       ]
  //     },

  //     // 2) Piping & Flowline Products
  //     {
  //       name: "PIPING & FLOWLINE PRODUCTS",
  //       slug: "piping-and-flowline-products",
  //       image: "/assets/image13.jpg",
  //       description:
  //         "Comprehensive range of pipeline components for upstream, midstream and downstream oil & gas transportation systems.",
  //       videoUrl: "/video/petro/video1.mp4",
  //       items: [
  //         "Pipe fittings & elbows",
  //         "Induction bends",
  //         "Flanges & connectors",
  //         "Insulated piping spools",
  //         "Pig launcher & receiver fittings"
  //       ]
  //     },

  //     // 3) Valve & Pump Castings
  //     {
  //       name: "VALVE & PUMP CASTINGS",
  //       slug: "valve-and-pump-castings",
  //       image: "/assets/image14.jpeg",
  //       description:
  //         "High-performance castings for valves and pumps designed for corrosive fluids, hydrocarbons and high-pressure applications.",
  //       videoUrl: "/video/petro/video1.mp4",
  //       items: [
  //         "Gate & globe valve bodies",
  //         "Ball valve housings",
  //         "Control valve castings",
  //         "Pump casings & volutes",
  //         "Impellers & diffusers"
  //       ]
  //     },

  //     // 4) Offshore & Subsea Components
  //     {
  //       name: "OFFSHORE & SUBSEA COMPONENTS",
  //       slug: "offshore-and-subsea-components",
  //       image: "/assets/image15.jpeg",
  //       description:
  //         "Components engineered for offshore platforms, subsea systems and drilling operations in harsh marine environments.",
  //       videoUrl: "/video/petro/video1.mp4",
  //       items: [
  //         "Subsea valve bodies",
  //         "Christmas tree components",
  //         "Riser & manifold components",
  //         "Wellhead housings",
  //         "Anchor and mooring castings"
  //       ]
  //     },

  //     // 5) Storage & Terminal Equipment
  //     {
  //       name: "STORAGE & TERMINAL EQUIPMENT",
  //       slug: "storage-and-terminal-equipment",
  //       image: "/assets/image16.jpg",
  //       description:
  //         "Equipment and components used in crude oil storage tanks, terminals and distribution stations.",
  //       videoUrl: "/video/petro/video1.mp4",
  //       items: [
  //         "Floating roof tank components",
  //         "Roof drain system parts",
  //         "Access covers & manways",
  //         "Tank foundation castings",
  //         "Terminal handling components"
  //       ]
  //     }
  //   ]
  // }
  // ,
  // monitoring_wells: {
  //   id: 'monitoring_wells',
  //   label: 'MONITORING WELLS',
  //   icon: LocateIcon, // choose any lucide icon you prefer
  //   bannerImage: '/assets/image17.jpg',
  //   color: 'bg-cyan-100 text-cyan-900',

  //   categories: [

  //     {
  //       name: "GROUNDWATER MONITORING WELLS",
  //       slug: "groundwater-monitoring-wells",
  //       image: "/assets/image18.jpeg",
  //       description:
  //         "Complete range of groundwater monitoring wells designed to measure water levels, water quality and aquifer characteristics.",
  //       videoUrl: "/video/groundwater-monitoring-wells.mp4",
  //       items: [
  //         "PVC monitoring well casings",
  //         "HDPE monitoring well pipes",
  //         "Screened well sections",
  //         "Lockable monitoring well caps",
  //         "Well development accessories"
  //       ]
  //     },

  //     // 2) Environmental Observation Wells
  //     {
  //       name: "ENVIRONMENTAL OBSERVATION WELLS",
  //       slug: "environmental-observation-wells",
  //       image: "/assets/image19.jpeg",
  //       description:
  //         "Observation wells used for environmental site assessment, contamination studies, and remediation projects.",
  //       videoUrl: "/video/environmental-observation-wells.mp4",
  //       items: [
  //         "Soil vapor monitoring wells",
  //         "Leachate observation wells",
  //         "Groundwater contamination wells",
  //         "Remediation injection wells",
  //         "Well sealing & protection systems"
  //       ]
  //     },

  //     // 3) Well Screens & Filter Packs
  //     {
  //       name: "WELL SCREENS & FILTER PACKS",
  //       slug: "well-screens-and-filter-packs",
  //       image: "/assets/image20.jpeg",
  //       description:
  //         "High-performance well screens and gravel filter packs designed to prevent sand entry while maintaining maximum flow rate.",
  //       videoUrl: "/video/well-screens.mp4",
  //       items: [
  //         "PVC well screens",
  //         "SS slotted screens",
  //         "Wedge wire screens",
  //         "Gravel / sand filter packs",
  //         "Screen centralizers & end caps"
  //       ]
  //     },

  //     // 4) Monitoring Well Headworks & Covers
  //     {
  //       name: "MONITORING WELL HEADWORKS & COVERS",
  //       slug: "monitoring-well-headworks-and-covers",
  //       image: "/assets/image1.jpeg",
  //       description:
  //         "Heavy-duty surface protection and access systems for monitoring wells used in industrial, roadway and urban environments.",
  //       videoUrl: "/video/well-headworks.mp4",
  //       items: [
  //         "Cast iron well covers",
  //         "Steel traffic-rated covers",
  //         "Locking protective caps",
  //         "Flush-mount well covers",
  //         "Surface box assemblies"
  //       ]
  //     },

  //     // 5) Instruments & Data Logging Systems
  //     {
  //       name: "INSTRUMENTS & DATA LOGGING SYSTEMS",
  //       slug: "instruments-and-data-logging-systems",
  //       image: "/assets/image2.jpeg",
  //       description:
  //         "Advanced measurement and logging instruments for continuous monitoring of water level, pressure and water quality parameters.",
  //       videoUrl: "/video/well-instruments.mp4",
  //       items: [
  //         "Water level loggers",
  //         "Pressure transducers",
  //         "Multiparameter sondes",
  //         "Telemetry-based remote monitoring",
  //         "Automatic data logging systems"
  //       ]
  //     }
  //   ]
  // }
  // ,
  // water_works_tools: {
  //   id: 'water_works_tools',
  //   label: 'WATER WORKS TOOLS',
  //   icon: Wrench, // choose any lucide icon
  //   bannerImage: '/assets/image11.jpg',
  //   color: 'bg-sky-100 text-sky-900',

  //   categories: [

  //     // 1) Pipe Installation & Handling Tools
  //     {
  //       name: "PIPE INSTALLATION & HANDLING TOOLS",
  //       slug: "pipe-installation-and-handling-tools",
  //       image: "/assets/image3.jpeg",
  //       description:
  //         "Specialized tools designed for lifting, aligning, cutting and jointing water pipelines safely and efficiently.",
  //       videoUrl: "/video/pipe-installation-tools.mp4",
  //       items: [
  //         "Pipe lifting clamps",
  //         "Pipe alignment tools",
  //         "Chain pipe wrenches",
  //         "Pipe rollers & supports",
  //         "Cutting and beveling tools"
  //       ]
  //     },

  //     // 2) Valve Operation & Maintenance Tools
  //     {
  //       name: "VALVE OPERATION & MAINTENANCE TOOLS",
  //       slug: "valve-operation-and-maintenance-tools",
  //       image: "/assets/image4.jpg",
  //       description:
  //         "Tools used for installation, operation, servicing and preventive maintenance of gate valves, butterfly valves and hydrants.",
  //       videoUrl: "/video/valve-maintenance-tools.mp4",
  //       items: [
  //         "Valve key wrenches",
  //         "Hydrant operating tools",
  //         "Valve exercising machines",
  //         "Extension operating rods",
  //         "Portable valve actuators"
  //       ]
  //     },

  //     // 3) Leak Detection & Location Equipment
  //     {
  //       name: "LEAK DETECTION & LOCATION EQUIPMENT",
  //       slug: "leak-detection-and-location-equipment",
  //       image: "/assets/image5.jpeg",
  //       description:
  //         "Advanced acoustic and electronic tools for detecting underground water leakage and pinpointing pipeline faults.",
  //       videoUrl: "/video/leak-detection.mp4",
  //       items: [
  //         "Acoustic leak detectors",
  //         "Ground microphones",
  //         "Correlators",
  //         "Tracer gas leak detection kits",
  //         "Pipe locators"
  //       ]
  //     },

  //     // 4) Tapping, Drilling & Cutting Tools
  //     {
  //       name: "TAPPING, DRILLING & CUTTING TOOLS",
  //       slug: "tapping-drilling-and-cutting-tools",
  //       image: "/assets/image6.jpg",
  //       description:
  //         "Professional tools for hot tapping, drilling and on-line connection works on pressurized and non-pressurized pipelines.",
  //       videoUrl: "/video/tapping-cutting-tools.mp4",
  //       items: [
  //         "Hot tapping machines",
  //         "Hydrant tapping tools",
  //         "Core drilling machines",
  //         "Pipe cutting saws",
  //         "Hole saw kits"
  //       ]
  //     },

  //     // 5) Safety & Support Equipment
  //     {
  //       name: "SAFETY & SUPPORT EQUIPMENT",
  //       slug: "safety-and-support-equipment",
  //       image: "/assets/image7.jpeg",
  //       description:
  //         "Protective and supporting equipment used during trenching, pipeline installation and confined space water works.",
  //       videoUrl: "/video/water-works-safety.mp4",
  //       items: [
  //         "Trench shoring systems",
  //         "Confined space entry kits",
  //         "Gas detection devices",
  //         "Fall protection equipment",
  //         "Safety signage & barriers"
  //       ]
  //     }
  //   ]
  // }
  // ,
  irrigation_products: {
    id: 'irrigation_products',
    label: 'IRRIGATION PRODUCTS',
    icon: Droplets, // choose any lucide icon you like
    bannerImage: '/assets/image12.jpg',
    color: 'bg-green-100 text-green-900',

    categories: [

      // 1) Pipes & Fittings
      {
        name: "PIPES & FITTINGS",
        slug: "pipes-and-fittings",
        image: "/assets/image8.jpg",
        description:
          "High-performance irrigation pipes and fittings engineered for long-term durability, leak-proof performance and efficient water transport.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video1.mp4",
        items: [
          "HDPE pipes",
          "PVC pressure pipes",
          "Lateral pipes",
          "Compression fittings",
          "Elbows, tees, reducers & end caps"
        ]
      },

      // 2) Sprinkler System
      {
        name: "SPRINKLER SYSTEM",
        slug: "sprinkler-system",
        image: "/assets/image9.jpeg",
        description:
          "Advanced sprinkler irrigation systems designed to distribute uniform water coverage for farms, lawns, fields and plantations.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video2.mp4",
        items: [
          "Impact sprinklers",
          "Rain gun systems",
          "Pop-up sprinklers",
          "Sprinkler laterals & risers",
          "Nozzles and spray guns"
        ]
      },

      // 3) Water Control
      {
        name: "WATER CONTROL",
        slug: "water-control",
        image: "/assets/image10.jpeg",
        description:
          "Smart irrigation control components for precise flow regulation, pressure management and automatic system operation.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video3.mp4",
        items: [
          "Solenoid valves",
          "Butterfly & gate valves",
          "Pressure regulators",
          "Air release valves",
          "Smart irrigation controllers"
        ]
      },

      // 4) Pumping Solution
      {
        name: "PUMPING SOLUTION",
        slug: "pumping-solution",
        image: "/assets/image11.jpg",
        description:
          "Reliable pumping systems engineered for agricultural water lifting, drip irrigation and sprinkler irrigation applications.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video4.mp4",
        items: [
          "Centrifugal pumps",
          "Submersible pumps",
          "Solar water pumps",
          "Booster pumps",
          "Control panels & starters"
        ]
      },

      // 5) Agriculture Tools & Accessories
      {
        name: "AGRICULTURE TOOLS & ACCESSORIES",
        slug: "agriculture-tools-and-accessories",
        image: "/assets/image12.jpg",
        description:
          "A wide range of accessories and tools used for installation, maintenance and operation of irrigation networks.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video1.mp4",
        items: [
          "Punch tools",
          "Pipe cutters",
          "Filter cleaning tools",
          "Connector tool kits",
          "Flow monitoring gauges"
        ]
      },

      // 6) Landscape & Garden
      {
        name: "LANDSCAPE & GARDEN",
        slug: "landscape-and-garden",
        image: "/assets/image13.jpg",
        description:
          "Irrigation solutions for parks, villas, resorts, golf courses, public gardens and urban landscaping projects.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video2.mp4",
        items: [
          "Drip irrigation kits",
          "Micro sprinklers",
          "Planter watering systems",
          "Misting systems",
          "Garden hoses & reels"
        ]
      },

      // 7) Industrial & Large-Scale
      {
        name: "INDUSTRIAL & LARGE-SCALE",
        slug: "industrial-and-large-scale",
        image: "/assets/image14.jpeg",
        description:
          "Heavy-duty irrigation systems designed for commercial agriculture, greenhouses, agro-industries and large plantations.",
        videoUrl: "/video/IRRIGATION PRODUCTS/video3.mp4",
        items: [
          "High-pressure filtration systems",
          "Automated fertigation units",
          "Smart irrigation controllers",
          "Wireless sensor-based irrigation",
          "Central pumping stations"
        ]
      }
    ]
  },

  forgings: {
    id: 'forgings',
    label: 'FORGINGS',
    icon: Hammer, // choose any lucide icon
    bannerImage: '/assets/image13.jpg',
    color: 'bg-orange-100 text-orange-900',

    categories: [

      // 1) Open Die Forgings
      {
        name: "OPEN DIE FORGINGS",
        slug: "open-die-forgings",
        image: "/assets/image15.jpeg",
        description:
          "Large-size forgings produced using open-die forging processes for heavy engineering, power and oil & gas sectors.",
        videoUrl: "/video/open-die-forgings.mp4",
        items: [
          "Blocks & slabs",
          "Discs & flanges",
          "Bars & shafts",
          "Forged plates",
          "Heavy-section components"
        ]
      },

      // 2) Closed Die / Impression Die Forgings
      {
        name: "CLOSED DIE FORGINGS",
        slug: "closed-die-forgings",
        image: "/assets/image16.jpg",
        description:
          "High-precision closed-die forgings used for automotive, mining, agriculture and construction machinery components.",
        videoUrl: "/video/closed-die-forgings.mp4",
        items: [
          "Connecting rods",
          "Crankshafts",
          "Gear blanks",
          "Hub & yoke forgings",
          "Bracket components"
        ]
      },

      // 3) Ring Rolled Forgings
      {
        name: "RING ROLLED FORGINGS",
        slug: "ring-rolled-forgings",
        image: "/assets/image17.jpg",
        description:
          "Seamless rolled rings manufactured in various diameters and cross sections for bearings, turbines and gear applications.",
        videoUrl: "/video/ring-rolled-forgings.mp4",
        items: [
          "Seamless rings",
          "Bearing races",
          "Turbine rings",
          "Flange rings",
          "Gear ring blanks"
        ]
      },

      // 4) Shaft & Step Shaft Forgings
      {
        name: "SHAFT & STEP SHAFT FORGINGS",
        slug: "shaft-and-step-shaft-forgings",
        image: "/assets/image18.jpeg",
        description:
          "High-strength forged shafts designed for marine, power plant, cement plant, and heavy industrial machinery.",
        videoUrl: "/video/shaft-forgings.mp4",
        items: [
          "Straight shafts",
          "Step shafts",
          "Rotor shafts",
          "Crane shafts",
          "Drive shafts"
        ]
      },

      // 5) Alloy & Stainless Steel Forgings
      {
        name: "ALLOY & STAINLESS STEEL FORGINGS",
        slug: "alloy-and-stainless-steel-forgings",
        image: "/assets/image19.jpeg",
        description:
          "Forgings manufactured from carbon steel, alloy steel, duplex and stainless steels for critical environments and pressure applications.",
        videoUrl: "/video/steel-forgings.mp4",
        items: [
          "Carbon steel forgings",
          "Alloy steel forgings",
          "Stainless steel forgings",
          "Duplex & super duplex forgings",
          "Heat resistant steel forgings"
        ]
      },

      // 6) Custom / Precision Forgings
      {
        name: "CUSTOM & PRECISION FORGINGS",
        slug: "custom-and-precision-forgings",
        image: "/assets/image20.jpeg",
        description:
          "Tailor-made precision forgings manufactured based on customer drawings, 3D models and OEM specifications.",
        videoUrl: "/video/custom-forgings.mp4",
        items: [
          "Near-net shape forgings",
          "Closed tolerance forgings",
          "Prototype forgings",
          "Small batch forged parts",
          "OEM & private label forgings"
        ]
      }
    ]
  }
  ,
  marine_casting: {
    id: 'marine_casting',
    label: 'MARINE CASTING',
    icon: Anchor, // choose any lucide icon you like
    bannerImage: '/assets/image14.jpeg',
    color: 'bg-blue-100 text-blue-900',

    categories: [

      // 1) Propeller & Impeller Castings
      {
        name: "PROPELLER & IMPELLER CASTINGS",
        slug: "propeller-and-impeller-castings",
        image: "/assets/image15.jpeg",
        description:
          "High-performance bronze and stainless-steel propeller and impeller castings engineered for marine propulsion systems.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Ship propeller castings",
          "Pump impeller castings",
          "Turbine impellers",
          "Controllable pitch propeller hubs",
          "Custom marine propulsion components"
        ]
      },

      // 2) Marine Hardware & Deck Fittings
      {
        name: "MARINE HARDWARE & DECK FITTINGS",
        slug: "marine-hardware-and-deck-fittings",
        image: "/assets/image16.jpg",
        description:
          "Rugged deck and hull hardware components designed to withstand harsh saline and offshore environments.",
        videoUrl: "/video/marine_castings/marine_castings2.mp4",
        items: [
          "Cleats & bollards",
          "Fairleads & chocks",
          "Hinges & brackets",
          "Handrail and stanchion castings",
          "Deck mount fittings"
        ]
      },

      // 3) Anodes & Corrosion Protection Castings
      {
        name: "ANODES & CORROSION PROTECTION CASTINGS",
        slug: "anodes-and-corrosion-protection-castings",
        image: "/assets/image17.jpg",
        description:
          "Sacrificial and impressed-current anode castings designed to protect ship hulls and marine structures from corrosion.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Zinc anodes",
          "Aluminium anodes",
          "Magnesium anodes",
          "Hull & tank anodes",
          "ICCP system components"
        ]
      },

      // 4) Shipbuilding Structural Castings
      {
        name: "SHIPBUILDING STRUCTURAL CASTINGS",
        slug: "shipbuilding-structural-castings",
        image: "/assets/image18.jpeg",
        description:
          "Heavy-duty structural castings used in hull framing, rudder systems and load-bearing areas of ships and offshore vessels.",
        videoUrl: "/video/marine_castings/marine_castings2.mp4",
        items: [
          "Rudder horn castings",
          "Stern frame castings",
          "Keel block castings",
          "Chain stopper castings",
          "Winch & capstan castings"
        ]
      },

      // 5) Offshore Platform & Subsea Castings
      {
        name: "OFFSHORE PLATFORM & SUBSEA CASTINGS",
        slug: "offshore-platform-and-subsea-castings",
        image: "/assets/image19.jpeg",
        description:
          "Cast components engineered for offshore drilling rigs, subsea structures, mooring and production systems.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Mooring chain components",
          "Subsea connector castings",
          "Riser support castings",
          "Anchor and pile shoe castings",
          "Offshore platform brackets"
        ]
      }
    ]
  }
  ,
  earth_moving_equipments: {
    id: 'earth_moving_equipments',
    label: 'EARTH MOVING EQUIPMENTS',
    icon: Truck, // choose any lucide icon you like
    bannerImage: '/assets/image15.jpeg',
    color: 'bg-yellow-100 text-yellow-900',

    categories: [

      // 1) Bucket Teeth & Adaptors
      {
        name: "BUCKET TEETH & ADAPTORS",
        slug: "bucket-teeth-and-adaptors",
        image: "/assets/image20.jpeg",
        description:
          "High-strength bucket teeth and adaptors engineered for superior penetration and abrasion resistance in mining and construction operations.",
        items: [
          "Standard bucket teeth",
          "Rock bucket teeth",
          "Heavy-duty tips",
          "Adaptors & shanks",
          "Side cutters & protectors"
        ]
      },

      // 2) Cutting Edges & End Bits
      {
        name: "CUTTING EDGES & END BITS",
        slug: "cutting-edges-and-end-bits",
        image: "/assets/image1.jpeg",
        description:
          "Wear-resistant cutting edges and end bits suitable for loaders, graders, dozers and scrapers.",
        items: [
          "Straight cutting edges",
          "Curved cutting edges",
          "Bolt-on edges",
          "Grader blades",
          "End bits & corner bits"
        ]
      },

      // 3) Rollers & Sprockets
      {
        name: "ROLLARS & SPROCKETS",
        slug: "rollers-and-sprockets",
        image: "/assets/image2.jpeg",
        description:
          "Undercarriage rollers and sprockets designed for maximum load capacity and long service life.",
        items: [
          "Track rollers",
          "Carrier rollers",
          "Idlers",
          "Drive sprockets",
          "Segment groups"
        ]
      },

      // 4) Couplers & Attachments
      {
        name: "COUPLERS & ATTACHEMENTS",
        slug: "couplers-and-attachments",
        image: "/assets/image3.jpeg",
        description:
          "Quick couplers and multi-purpose attachments improving machine productivity across different job applications.",
        items: [
          "Hydraulic quick couplers",
          "Mechanical couplers",
          "Rippers",
          "Grapples",
          "Hydraulic breakers"
        ]
      },

      // 5) Hydraulic Cylinder Components
      {
        name: "HYDRAULIC CYLINDER COMPONENTS",
        slug: "hydraulic-cylinder-components",
        image: "/assets/image4.jpg",
        description:
          "Precision hydraulic cylinder components used in excavators, loaders, cranes and dozers.",
        items: [
          "Cylinder barrels",
          "Piston rods",
          "End caps",
          "Glands & seals",
          "Complete hydraulic cylinders"
        ]
      },

      // 6) Cab & Body Parts
      {
        name: "CAB & BODY PARTS",
        slug: "cab-and-body-parts",
        image: "/assets/image5.jpeg",
        description:
          "Structural and safety cabin components designed for operator comfort and machine durability.",
        items: [
          "Operator cabins",
          "Doors & panels",
          "Engine hoods",
          "Fenders & guards",
          "Canopy structures"
        ]
      },

      // 7) Drive Train Components
      {
        name: "DRUVE TRAIN COMPONENTS",
        slug: "drive-train-components",
        image: "/assets/image6.jpg",
        description:
          "Heavy-duty powertrain components ensuring efficient torque transmission and smooth machine operation.",
        items: [
          "Transmission housings",
          "Differential components",
          "Final drive assemblies",
          "Axle components",
          "Gear sets"
        ]
      },

      // 8) Undercarriage Components
      {
        name: "UNDERCARRIAGE COMPONENTS",
        slug: "undercarriage-components",
        image: "/assets/image7.jpeg",
        description:
          "Complete undercarriage spare parts suitable for excavators, bulldozers and track machines.",
        items: [
          "Track chains",
          "Track shoes",
          "Track bolts & nuts",
          "Track frames",
          "Track adjusters"
        ]
      }
    ]
  }
  ,
  custom_manufacturing: {
    id: 'custom_manufacturing',
    label: 'CUSTOM MANUFACTURING',
    icon: Wrench, // pick any lucide icon you prefer
    bannerImage: '/assets/image16.jpg',
    color: 'bg-indigo-100 text-indigo-900',

    categories: [

      // 1) Build-to-Print Manufacturing
      {
        name: "BUILD-TO-PRINT MANUFACTURING",
        slug: "build-to-print-manufacturing",
        image: "/assets/image8.jpg",
        description:
          "Manufacturing services based strictly on customer drawings, 3D models and technical specifications with complete confidentiality.",
        videoUrl: "/video/build-to-print.mp4",
        items: [
          "Drawing-based component production",
          "Tight tolerance machining",
          "Material & grade flexibility",
          "Dimensional inspection reports",
          "Packaging & private labeling"
        ]
      },

      // 2) Prototype & New Product Development
      {
        name: "PROTOTYPE & NEW PRODUCT DEVELOPMENT",
        slug: "prototype-and-new-product-development",
        image: "/assets/image9.jpeg",
        description:
          "Rapid prototyping and new product development support from concept design to functional prototype and pilot production.",
        videoUrl: "/video/prototype-development.mp4",
        items: [
          "Rapid 3D prototyping",
          "Sample & trial batch casting",
          "Functional testing support",
          "Design validation assistance",
          "Pilot lot manufacturing"
        ]
      },

      // 3) Low & Medium Volume Production
      {
        name: "LOW & MEDIUM VOLUME PRODUCTION",
        slug: "low-and-medium-volume-production",
        image: "/assets/image10.jpeg",
        description:
          "Flexible manufacturing setups ideal for specialized components, aftermarket parts and low-to-medium production requirements.",
        videoUrl: "/video/low-volume-production.mp4",
        items: [
          "Small batch manufacturing",
          "Job shop production",
          "Flexible tooling systems",
          "Quick changeover capability",
          "Cost-effective low volume runs"
        ]
      },

      // 4) Multi-Process Manufacturing (Casting + Machining + Fabrication)
      {
        name: "MULTI-PROCESS MANUFACTURING",
        slug: "multi-process-manufacturing",
        image: "/assets/image11.jpg",
        description:
          "End-to-end manufacturing solutions combining casting, forging, machining, fabrication and surface finishing in a single window.",
        videoUrl: "/video/multi-process-manufacturing.mp4",
        items: [
          "Casting + machining integration",
          "Fabrication + machining assemblies",
          "Heat treatment & surface coating",
          "Assembly & sub-assembly manufacturing",
          "Complete project manufacturing"
        ]
      },

      // 5) OEM / Private Label Solutions
      {
        name: "OEM / PRIVATE LABEL SOLUTIONS",
        slug: "oem-private-label-solutions",
        image: "/assets/image12.jpg",
        description:
          "Dedicated OEM manufacturing and private label production for brands requiring custom product identity and packaging.",
        videoUrl: "/video/oem-private-label.mp4",
        items: [
          "Brand-specific product development",
          "Custom packaging & labeling",
          "Confidential production agreements",
          "Long-term supply partnerships",
          "Reverse engineered OEM replacements"
        ]
      }
    ]
  }
  ,
  forge_shop_products: {
    id: 'forge_shop_products',
    label: 'FORGE SHOP PRODUCTS',
    icon: Hammer, // choose any lucide icon you like
    bannerImage: '/assets/image17.jpg',
    color: 'bg-red-100 text-red-900',

    categories: [

      // 1) Forging Dies & Tooling
      {
        name: "FORGING DIES & TOOLING",
        slug: "forging-dies-and-tooling",
        image: "/assets/image13.jpg",
        description:
          "High-performance forging dies and tooling solutions designed for open-die, closed-die and ring-rolling operations.",
        videoUrl: "/video/forging-dies.mp4",
        items: [
          "Closed die impression tooling",
          "Open die tooling",
          "Preform dies",
          "Trimming dies",
          "Die holders & bolsters"
        ]
      },

      // 2) Forging Hammers & Press Equipment
      {
        name: "FORGING HAMMERS & PRESS EQUIPMENT",
        slug: "forging-hammers-and-press-equipment",
        image: "/assets/image14.jpeg",
        description:
          "Heavy-duty forging hammers and hydraulic/mechanical presses for high-volume forging production lines.",
        videoUrl: "/video/forging-hammers.mp4",
        items: [
          "Drop forging hammers",
          "Pneumatic forging hammers",
          "Counterblow hammers",
          "Hydraulic forging presses",
          "Mechanical forging presses"
        ]
      },

      // 3) Heating & Furnace Systems
      {
        name: "HEATING & FURNACE SYSTEMS",
        slug: "heating-and-furnace-systems",
        image: "/assets/image15.jpeg",
        description:
          "Energy-efficient heating systems and industrial furnaces for billet, ingot and bar heating prior to forging.",
        videoUrl: "/video/forging-furnace.mp4",
        items: [
          "Billet heating furnaces",
          "Forging reheating furnaces",
          "Induction heating systems",
          "Gas-fired furnaces",
          "Electric box furnaces"
        ]
      },

      // 4) Manipulators & Handling Systems
      {
        name: "MANIPULATORS & HANDLING SYSTEMS",
        slug: "manipulators-and-handling-systems",
        image: "/assets/image16.jpg",
        description:
          "Material handling systems designed for safe movement of hot billets, forgings and heavy dies inside forge shops.",
        videoUrl: "/video/forging-manipulators.mp4",
        items: [
          "Hydraulic forging manipulators",
          "Billet handling systems",
          "Die handling trolleys",
          "Roller tables",
          "Electromagnetic lifters"
        ]
      },

      // 5) Heat Treatment & Finishing Equipment
      {
        name: "HEAT TREATMENT & FINISHING EQUIPMENT",
        slug: "heat-treatment-and-finishing-equipment",
        image: "/assets/image17.jpg",
        description:
          "Post-forging heat treatment and finishing systems that improve mechanical properties and product surface quality.",
        videoUrl: "/video/heat-treatment.mp4",
        items: [
          "Quenching tanks",
          "Tempering furnaces",
          "Normalizing furnaces",
          "Shot blasting machines",
          "Grinding & finishing systems"
        ]
      }
    ]
  }
  ,
  industrial_machinery: {
    id: 'industrial_machinery',
    label: 'INDUSTRIAL MACHINERY',
    icon: Factory, // choose any lucide icon you prefer
    bannerImage: '/assets/image18.jpeg',
    color: 'bg-gray-100 text-gray-900',

    categories: [

      // 1) Material Handling Machinery
      {
        name: "MATERIAL HANDLING MACHINERY",
        slug: "material-handling-machinery",
        image: "/assets/image19.jpeg",
        description:
          "Heavy-duty material handling machinery designed for mines, ports, warehouses and industrial production facilities.",
        videoUrl: "/video/material-handling-machinery.mp4",
        items: [
          "Belt conveyors",
          "Bucket elevators",
          "Chain conveyors",
          "Screw conveyors",
          "Truck & wagon loading systems"
        ]
      },

      // 2) Crushing & Screening Machinery
      {
        name: "CRUSHING & SCREENING MACHINERY",
        slug: "crushing-and-screening-machinery",
        image: "/assets/image20.jpeg",
        description:
          "Industrial crushers and screens used in mining, quarrying, aggregates and mineral processing applications.",
        videoUrl: "/video/crushing-machinery.mp4",
        items: [
          "Jaw crushers",
          "Cone crushers",
          "Impact crushers",
          "Vibrating screens",
          "Feeder & hopper systems"
        ]
      },

      // 3) Power & Energy Equipment
      {
        name: "POWER & ENERGY EQUIPMENT",
        slug: "power-and-energy-equipment",
        image: "/assets/image1.jpeg",
        description:
          "Machinery and systems supporting thermal, hydro, renewable and captive power generation plants.",
        videoUrl: "/video/power-energy-equipment.mp4",
        items: [
          "Steam turbines components",
          "Boiler auxiliary systems",
          "Hydro turbine equipment",
          "Generator support structures",
          "Cooling tower equipment"
        ]
      },

      // 4) Process Industry Machinery
      {
        name: "PROCESS INDUSTRY MACHINERY",
        slug: "process-industry-machinery",
        image: "/assets/image2.jpeg",
        description:
          "Machinery engineered for cement, steel, chemical, fertilizer, paper and food processing industries.",
        videoUrl: "/video/process-industry-machinery.mp4",
        items: [
          "Kiln & mill components",
          "Mixers & blenders",
          "Reactors & vessels",
          "Dryers & coolers",
          "Industrial agitators"
        ]
      },

      // 5) Automation & Mechatronics Systems
      {
        name: "AUTOMATION & MECHATRONICS SYSTEMS",
        slug: "automation-and-mechatronics-systems",
        image: "/assets/image3.jpeg",
        description:
          "Smart automation solutions integrating electrical, mechanical and control systems for improved productivity and safety.",
        videoUrl: "/video/industrial-automation.mp4",
        items: [
          "Robotic handling systems",
          "Automated assembly lines",
          "PLC & SCADA systems",
          "Industrial control panels",
          "Sensors & motion control systems"
        ]
      }
    ]
  }
  ,
  snow_plough: {
    id: 'snow_plough',
    label: 'SNOW PLOUGH',
    icon: Snowflake, // choose any lucide icon you like
    bannerImage: '/assets/image20.jpeg',
    color: 'bg-blue-100 text-blue-900',

    categories: [

      // 1) Truck Mounted Snow Ploughs
      {
        name: "TRUCK MOUNTED SNOW PLOUGHS",
        slug: "truck-mounted-snow-ploughs",
        image: "/assets/image1.jpeg",
        description:
          "Heavy-duty snow ploughs mounted on trucks for clearing highways, airports and city roads during heavy snowfall.",
        videoUrl: "/video/truck-mounted-snow-ploughs.mp4",
        items: [
          "Straight blade ploughs",
          "V-type snow ploughs",
          "Reversible snow ploughs",
          "Highway snow removal ploughs",
          "Airport runway snow ploughs"
        ]
      },

      // 2) Loader & Dozer Mounted Ploughs
      {
        name: "LOADER & DOZER MOUNTED PLOUGHS",
        slug: "loader-and-dozer-mounted-ploughs",
        image: "/assets/image2.jpeg",
        description:
          "Snow plough attachments designed for loaders, dozers and tractors for municipal and industrial snow clearing.",
        videoUrl: "/video/loader-mounted-ploughs.mp4",
        items: [
          "Front-end loader snow ploughs",
          "Dozer blade snow ploughs",
          "Side wing snow ploughs",
          "Universal quick-coupler ploughs",
          "Heavy industrial snow blades"
        ]
      },

      // 3) Road & Street Snow Sweepers
      {
        name: "ROAD & STREET SNOW SWEEPERS",
        slug: "road-and-street-snow-sweepers",
        image: "/assets/image3.jpeg",
        description:
          "Rotary broom and mechanical sweepers for clearing light to medium snow from streets, parking areas and pedestrian zones.",
        videoUrl: "/video/snow-sweepers.mp4",
        items: [
          "Rotary broom sweepers",
          "Compact municipal sweepers",
          "Airport apron sweepers",
          "Hydraulic broom attachments",
          "Snow removal multi-tool carriers"
        ]
      },

      // 4) Salt Spreaders & De-icing Equipment
      {
        name: "SALT SPREADERS & DE-ICING EQUIPMENT",
        slug: "salt-spreaders-and-de-icing-equipment",
        image: "/assets/image4.jpg",
        description:
          "Equipment for spreading salt and de-icing chemicals to prevent road freezing and improve vehicle traction.",
        videoUrl: "/video/salt-spreaders.mp4",
        items: [
          "Truck mounted salt spreaders",
          "Towed salt spreaders",
          "Liquid brine sprayers",
          "Walk-behind spreaders",
          "Winter road de-icing systems"
        ]
      },

      // 5) Snow Plough Accessories & Spares
      {
        name: "SNOW PLOUGH ACCESSORIES & SPARES",
        slug: "snow-plough-accessories-and-spares",
        image: "/assets/image5.jpeg",
        description:
          "A complete range of accessories and spare parts ensuring reliable operation of snow plough systems in harsh winter conditions.",
        videoUrl: "/video/snow-plough-accessories.mp4",
        items: [
          "Cutting edges & wear blades",
          "Hydraulic cylinders",
          "Mounting brackets",
          "Control systems",
          "Rubber & polyurethane scraper blades"
        ]
      }
    ]
  }
  , metals_alloys: {
    id: 'metals_alloys',
    label: 'METALS & ALLOYS',
    icon: Zap, // choose any lucide icon you prefer
    bannerImage: '/assets/image6.jpg',
    color: 'bg-slate-100 text-slate-900',

    categories: [

      // 1) Ductile Iron Castings
      {
        name: "DUCTILE IRON CASTINGS",
        slug: "ductile-iron-castings",
        image: "/assets/image7.jpeg",
        description:
          "High-strength ductile iron castings offering superior toughness and fatigue resistance for industrial applications.",
        items: [
          "Valve body castings",
          "Pump housing castings",
          "Automotive components",
          "Gearbox housings",
          "Heavy machinery parts"
        ]
      },

      // 2) High Manganese Steel Parts
      {
        name: "HIGH MANGANESE STEEL PARTS",
        slug: "high-manganese-steel-parts",
        image: "/assets/image8.jpg",
        description:
          "Wear-resistant high manganese steel components ideal for impact and abrasion environments.",
        items: [
          "Crusher jaw plates",
          "Cone crusher parts",
          "Liner plates",
          "Railway crossing parts",
          "Earthmoving wear parts"
        ]
      },

      // 3) Stainless Steel Components
      {
        name: "STAINLESS STEEL COMPONENTS",
        slug: "stainless-steel-components",
        image: "/assets/image9.jpeg",
        description:
          "Corrosion-resistant stainless steel castings and machined parts for process industries and marine environments.",
        items: [
          "Valve & pump components",
          "Food industry parts",
          "Chemical plant components",
          "Heat-resistant parts",
          "Precision engineered components"
        ]
      },

      // 4) Alloy Steel Forged Parts
      {
        name: "ALLOY STEEL FORGED PARTS",
        slug: "alloy-steel-forged-parts",
        image: "/assets/image10.jpeg",
        description:
          "High-strength alloy steel forgings used in power, oil & gas, construction and heavy engineering sectors.",
        items: [
          "Forged shafts",
          "Flanges",
          "Rings & gears",
          "Crankshafts",
          "Heavy forged blocks"
        ]
      },

      // 5) Aluminium & Brass Components
      {
        name: "ALUMINIUM & BRASS COMPONENTS",
        slug: "aluminium-and-brass-components",
        image: "/assets/image12.jpg",
        description:
          "Lightweight aluminum and brass precision components for electrical, automotive and marine applications.",
        items: [
          "Die-cast aluminium parts",
          "Sand cast brass parts",
          "Marine components",
          "Electrical fittings",
          "Automotive housings"
        ]
      },

      // 6) White Iron Castings
      {
        name: "WHITE IRON CASTINGS",
        slug: "white-iron-castings",
        image: "/assets/image13.jpg",
        description:
          "Abrasion-resistant white cast iron parts suitable for high wear applications in mining and cement industries.",
        items: [
          "Grinding mill liners",
          "Chute liners",
          "Wear plates",
          "Crusher liners",
          "Pump parts"
        ]
      },

      // 7) Copper & Bronze Precision Parts
      {
        name: "COPPER & BRONZE PRECISION PARTS",
        slug: "copper-and-bronze-precision-parts",
        image: "/assets/image14.jpeg",
        description:
          "Precision copper and bronze castings with excellent conductivity, wear-resistance and anti-friction properties.",
        items: [
          "Bushes & bearings",
          "Worm gear castings",
          "Propeller components",
          "Electrical contact parts",
          "Sliding wear components"
        ]
      },

      // 8) Electrical Component Alloys
      {
        name: "ELECTRICAL COMPONENT ALLOYS",
        slug: "electrical-component-alloys",
        image: "/assets/image15.jpeg",
        description:
          "Specialty alloys used in switchgear, transformers and electrical equipment applications.",
        items: [
          "Contact tip alloys",
          "Conductive copper alloys",
          "Brazing alloys",
          "Magnetic alloys",
          "Electrical connector parts"
        ]
      },

      // 9) Metal Fabricated Items
      {
        name: "METAL FABRICATED ITEMS",
        slug: "metal-fabricated-items",
        image: "/assets/image16.jpg",
        description:
          "Fabricated metal structures and assemblies manufactured through cutting, bending and welding processes.",
        items: [
          "Frames & brackets",
          "Sheet metal enclosures",
          "Support structures",
          "Custom welded assemblies",
          "Industrial fabrications"
        ]
      },

      // 10) Pipes, Tubes & Fittings
      {
        name: "PIPES, TUBES & FITTINGS",
        slug: "pipes-tubes-and-fittings",
        image: "/assets/image17.jpg",
        description:
          "Comprehensive range of metallic pipes, tubes and fittings for fluid transport and structural applications.",
        items: [
          "Seamless pipes",
          "ERW pipes",
          "Square & rectangular tubes",
          "Butt-weld fittings",
          "Forged fittings"
        ]
      }
    ]
  }
  ,
  custom_offerings: {
    id: 'custom_offerings',
    label: 'CUSTOM OFFERINGS',
    icon: Hammer, // choose any lucide icon you prefer
    bannerImage: '/assets/image2.jpeg',
    color: 'bg-purple-100 text-purple-900',

    categories: [

      // 1) Bespoke Casting Solutions
      {
        name: "BESPOKE CASTING SOLUTIONS",
        slug: "bespoke-casting-solutions",
        image: "/assets/image18.jpeg",
        description:
          "Tailor-made casting solutions engineered to meet unique dimensional, metallurgical and performance requirements.",
        videoUrl: "/video/bespoke-casting-solutions.mp4",
        items: [
          "Custom geometry castings",
          "Special alloy grade castings",
          "Near-net shape castings",
          "Prototype & trial batch casting",
          "Low & high volume custom production"
        ]
      },

      // 2) Precision Machining & Fabrication
      {
        name: "PRECISION MACHINING & FABRICATION",
        slug: "precision-machining-and-fabrication",
        image: "/assets/image19.jpeg",
        description:
          "High-precision machining and fabrication services for critical components requiring tight tolerance and perfect finish.",
        videoUrl: "/video/precision-machining.mp4",
        items: [
          "CNC turning & milling",
          "5-axis machining",
          "Sheet metal fabrication",
          "Welded assemblies",
          "Surface finishing & coating"
        ]
      },

      // 3) OEM / Private Label Manufacturing
      {
        name: "OEM / PRIVATE LABEL MANUFACTURING",
        slug: "oem-private-label-manufacturing",
        image: "/assets/image20.jpeg",
        description:
          "Dedicated OEM & private label production services including brand-specific tooling, packaging and documentation.",
        videoUrl: "/video/oem-private-label.mp4",
        items: [
          "Brand-specific product development",
          "Custom packaging and labelling",
          "Confidential long-term contracts",
          "Reverse engineered OEM parts",
          "Aftermarket replacement parts"
        ]
      },

      // 4) Reverse Engineering Solutions
      {
        name: "REVERSE ENGINEERING",
        slug: "reverse-engineering",
        image: "/assets/image1.jpeg",
        description:
          "Accurate reverse-engineering service for discontinued, legacy and critical spare components without available drawings.",
        videoUrl: "/video/reverse-engineering.mp4",
        items: [
          "3D scanning & measurement",
          "Digital model creation",
          "Material analysis",
          "Design improvement suggestions",
          "Replacement part manufacturing"
        ]
      },

      // 5) Project-Based Manufacturing
      {
        name: "PROJECT-BASED MANUFACTURING",
        slug: "project-based-manufacturing",
        image: "/assets/image2.jpeg",
        description:
          "Turnkey engineering and manufacturing executed on complete project scope including design, production and delivery.",
        videoUrl: "/video/project-based-manufacturing.mp4",
        items: [
          "EPC project manufacturing support",
          "Industrial project components",
          "Infrastructure casting packages",
          "Bulk supply management",
          "Inspection & quality documentation"
        ]
      },

      // 6) Custom Product Design Assistance
      {
        name: "CUSTOM PRODUCT DESIGN ASSISTANCE",
        slug: "custom-product-design-assistance",
        image: "/assets/image3.jpeg",
        description:
          "Engineering consultation service helping clients convert ideas and application needs into manufacturable products.",
        videoUrl: "/video/custom-design-assistance.mp4",
        items: [
          "Concept to 3D model conversion",
          "Design for manufacturability",
          "Topology optimization",
          "Cost-effective design solutions",
          "Validation & prototyping support"
        ]
      }
    ]
  }
  ,
  marine_castings: {
    id: 'marine_castings',
    label: 'MARINE CASTINGS',
    icon: Anchor, // choose any lucide icon
    bannerImage: '/assets/marine_castings/marine_castings3.jpeg',
    color: 'bg-blue-100 text-blue-900',

    categories: [

      // 1) Propulsion System Castings
      {
        name: "PROPELLER & PROPELLER HUB CASTINGS",
        slug: "propeller-and-propeller-hub-castings",
        image: "/assets/marine_castings/marine_castings2.jpeg",
        description:
          "High-performance bronze and stainless-steel castings used in marine propulsion systems for vessels of all sizes.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Fixed pitch propeller castings",
          "Controllable pitch propeller hubs",
          "Impeller castings",
          "Propeller boss & blades",
          "Thruster components"
        ]
      },

      // 2) Deck & Mooring Castings
      {
        name: "DECK & MOORING CASTINGS",
        slug: "deck-and-mooring-castings",
        image: "/assets/marine_castings/marine_castings1.jpeg",
        description:
          "Heavy-duty castings used for mooring, towing and securing vessels in ports, harbors and offshore platforms.",
        videoUrl: "/video/marine_castings/marine_castings2.mp4",
        items: [
          "Bitts & bollards",
          "Cleats & chocks",
          "Fairleads",
          "Chain stoppers",
          "Towing hook castings"
        ]
      },

      // 3) Rudder & Steering System Castings
      {
        name: "RUDDER & STEERING SYSTEM CASTINGS",
        slug: "rudder-and-steering-system-castings",
        image: "/assets/marine_castings/marine_castings2.jpeg",
        description:
          "Structural cast parts used in rudder assemblies and steering mechanisms for marine vessels and ships.",
        videoUrl: "/video/marine_castings/Mashroom Anchor.578.mp4",
        items: [
          "Rudder horn castings",
          "Rudder stock castings",
          "Rudder carrier castings",
          "Tiller arm castings",
          "Stern frame castings"
        ]
      },

      // 4) Corrosion Protection Anode Castings
      {
        name: "SACRIFICIAL ANODE CASTINGS",
        slug: "sacrificial-anode-castings",
        image: "/assets/marine_castings/marine_castings3.jpeg",
        description:
          "Zinc, aluminium and magnesium anode castings designed for cathodic protection of ship hulls and marine structures.",
        videoUrl: "/video/marine_castings/marine_castings1.mp4",
        items: [
          "Hull anodes",
          "Tank anodes",
          "Pipeline anodes",
          "Offshore platform anodes",
          "ICCP system components"
        ]
      },

      // 5) Offshore & Subsea Equipment Castings
      {
        name: "OFFSHORE & SUBSEA CASTINGS",
        slug: "offshore-and-subsea-castings",
        image: "/assets/marine_castings/marine_castings1.jpeg",
        description:
          "Castings manufactured for subsea production systems, offshore platforms and deep-water equipment.",
        videoUrl: "/video/marine_castings/Mooring Bollards.13.mp4",
        items: [
          "Subsea connector castings",
          "Manifold components",
          "Riser support castings",
          "Anchor castings",
          "Mooring system components"
        ]
      }
    ]
  },
  cathodic_protection: {
    id: 'cathodic_protection',
    label: 'CATHODIC PROTECTION',
    icon: ShieldCheck, // choose any lucide icon
    bannerImage: '/assets/image5.jpeg',
    color: 'bg-orange-100 text-orange-900',

    categories: [

      // 1) Zinc & Aluminium Cast Anodes
      {
        name: "ZINC & ALUMINIUM CAST ANODES",
        slug: "zinc-and-aluminium-cast-anodes",
        image: "/assets/image9.jpeg",
        description:
          "High-efficiency sacrificial anodes for corrosion protection of pipelines, marine structures and storage tanks.",
        items: [
          "Zinc slab anodes",
          "Aluminium hull anodes",
          "Pipeline anodes",
          "Tank anodes",
          "Hull & ballast tank anodes"
        ]
      },

      // 2) Coated Titanium Anodes
      {
        name: "COATED TITANIUM ANODES",
        slug: "coated-titanium-anodes",
        image: "/assets/image10.jpeg",
        description:
          "Mixed metal oxide coated titanium anodes designed for impressed current cathodic protection systems.",
        items: [
          "MMO coated anodes",
          "Ribbon mesh anodes",
          "Tubular titanium anodes",
          "Disc & plate anodes",
          "Deep well anodes"
        ]
      },

      // 3) Magnesium Anodes
      {
        name: "MAGNESIUM ANODES",
        slug: "magnesium-anodes",
        image: "/assets/image11.jpg",
        description:
          "High-potential magnesium sacrificial anodes for underground steel structures and buried pipelines.",
        items: [
          "Cast magnesium anodes",
          "High potential anodes",
          "Pre-packaged magnesium anodes",
          "Water heater anodes",
          "Underground tank anodes"
        ]
      },

      // 4) Transformers & Rectifiers
      {
        name: "TRANSFORMERS & RECTIFIERS",
        slug: "transformers-and-rectifiers",
        image: "/assets/image12.jpg",
        description:
          "Impressed current cathodic protection power supply equipment ensuring accurate DC output and reliability.",
        items: [
          "Oil cooled rectifiers",
          "Air cooled rectifiers",
          "Automatic controlled TR units",
          "Solar powered rectifiers",
          "Digital monitoring rectifiers"
        ]
      },

      // 5) Junction Boxes
      {
        name: "JUNCTION BOXES",
        slug: "junction-boxes",
        image: "/assets/image13.jpg",
        description:
          "Junction boxes for current distribution, test stations and monitoring connections in CP systems.",
        items: [
          "Positive junction boxes",
          "Negative junction boxes",
          "Drain point boxes",
          "Current regulating boxes",
          "Bond boxes"
        ]
      },

      // 6) Monitoring Equipments
      {
        name: "MONITORING EQUIPMENTS",
        slug: "monitoring-equipments",
        image: "/assets/image14.jpeg",
        description:
          "Monitoring systems for measuring potential, current output and performance of cathodic protection networks.",
        items: [
          "Reference electrodes",
          "Test stations",
          "Remote monitoring systems",
          "Data loggers",
          "Portable CP meters"
        ]
      },

      // 7) Cables & Wiring Systems
      {
        name: "CALES & WIRING SYSTEMS",
        slug: "cables-and-wiring-systems",
        image: "/assets/image15.jpeg",
        description:
          "Special corrosion-resistant cables and wiring accessories for underground and marine CP applications.",
        items: [
          "HMWPE cables",
          "XLPE/PVC cables",
          "Anode header cables",
          "Splicing kits",
          "Cable connectors & seals"
        ]
      }
    ]
  }

};
export type FooterLink = { label: string; href: string };

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterColumn = {
  id: string;
  sections: FooterSection[]; // Every column now has a list of sections
};

// 2. Helper to generate links (Prevents typing /footerPages/ 100 times)
const makeLink = (label: string, slug: string) => ({
  label,
  href: `/footerPages/${slug}`,
});

// 3. The Clean Data Structure
export const footerColumns: FooterColumn[] = [
  {
    id: "corporate",
    sections: [
      {
        title: "Corporate",
        links: [
          makeLink("Customer Services", "customer-services"),
          makeLink("Accounts Dept.", "accounts-dept"),
          makeLink("Awards & Achievements", "awards-achievements"),
          makeLink("Leadership Team", "leadership-team"),
          makeLink("Our Values", "our-values"),
          makeLink("Current Events", "current-events"),
          makeLink("Global Presence", "global-presence"),
          makeLink("Executive Committee", "executive-committee"),
          makeLink("Our Foundation", "our-foundation"),
          makeLink("Human Resources", "human-resources"),
          makeLink("Mission & Vision", "mission-vision"),
          makeLink("Monthly Raffle", "monthly-raffle"),
          makeLink("Organizational Structure", "organizational-structure"),
          makeLink("Scholarships", "scholarships"),
          makeLink("Testimonials", "testimonials"),
          makeLink("Our Milestones", "our-milestones"),
          makeLink("Industrial Articles", "industrial-articles"),
          makeLink("Trade Shows", "trade-shows"),
        ],
      },
    ],
  },
  {
    id: "resources",
    sections: [
      {
        title: "Resources",
        links: [
          makeLink("Products Pricing", "products-pricing"),
          makeLink("Exports/Imports", "exports-imports"),
          makeLink("Media Managements", "media-managements"),
          makeLink("Animations & Videos", "animations-videos"),
          makeLink("Product Catalogs", "product-catalogs"),
          makeLink("Installation Guide", "installation-guide"),
          makeLink("Data Center", "data-center"),
          makeLink("Sales Team", "sales-team"),
          makeLink("Follow Your Order", "follow-your-order"),
          makeLink("On Going Projects", "on-going-projects"),
          makeLink("Request for Delivery", "request-for-delivery"),
          makeLink("Request for Quote", "request-for-quote"),
          makeLink("Logistics", "logistics"),
          makeLink("Webinars", "webinars"),
          makeLink("Certifications", "certifications"),
          makeLink("Design Resources", "design-resources"),
          makeLink("Compliances", "compliances"),
          makeLink("FAQs", "faqs"),
        ],
      },
    ],
  },
  {
    id: "engineering",
    sections: [
      {
        title: "Engineering",
        links: [
          makeLink("Market Analysis", "market-analysis"),
          makeLink("Case Studies", "case-studies"),
          makeLink("Specifications", "specifications"),
          makeLink("Standards", "standards"),
          makeLink("Submittals", "submittals"),
          makeLink("Shop Drawings", "shop-drawings"),
          makeLink("Engineering Drawings", "engineering-drawings"),
          makeLink("Data Sheets", "data-sheets"),
          makeLink("Engineers & Architects", "engineers-architects"),
          makeLink("IT Department", "it-department"),
          makeLink("Innovations", "innovations"),
          makeLink("Customizations", "customizations"),
          makeLink("Quality Control", "quality-control"),
          makeLink("CRM System", "crm-system"),
          makeLink("Manufacturing", "manufacturing"),
          makeLink("Approvals", "approvals"),
          makeLink("Latest Technologies", "latest-technologies"),
        ],
      },
    ],
  },
  {
    id: "product-categories",
    sections: [
      {
        title: "Product Categories",
        links: [
          makeLink("Irrigation Products", "irrigation-products"),
          makeLink("Earth Moving Equipments", "earth-moving-equipments"),
          makeLink("Cathodic Protection", "cathodic-protection"),
          // makeLink("Precast & Molds", "precast-molds"),
          makeLink("Mining Products", "mining-products"),
          makeLink("Metals & Alloys", "metals-alloys"),
          makeLink("Fabrication", "fabrication"),
          makeLink("Foundry Equipments", "foundry-equipments"),
          makeLink("Oil & Gas Industries Products", "oil-gas-products"),
          makeLink("Construction & Infrastructure", "construction-infrastructure"),
          makeLink("Utility & Power Energy", "utility-power-energy"),
          makeLink("Defence & Aerospace", "defence-aerospace"),
          makeLink("Custom Manufacturing", "custom-manufacturing"),
          makeLink("Forge Shop Products", "forge-shop-products"),
          makeLink("Industrial Machinery", "industrial-machinery"),
          makeLink("Wind & Solar", "wind-solar"),
        ],
      },
    ],
  },
  {
    id: "policies",
    sections: [
      {
        title: "Policies",
        links: [
          makeLink("Government Policy", "government-policy"),
          makeLink("Privacy Policy", "privacy-policy"),
          makeLink("Terms & Conditions", "terms-conditions"),
          makeLink("Security & Maintenance", "security-maintenance"),
          makeLink("Credit Application", "credit-application"),
          makeLink("Corporate Social Responsibility", "corporate-social-responsibility"),
          makeLink("Non Disclosure Agreement", "non-disclosure-agreement"),
          makeLink("Approvals", "approvals"),
          makeLink("Return Policy", "return-policy"),
          makeLink("Warranties", "warranties"),
          makeLink("Product Liabilities", "product-liabilities"),
          makeLink("Confidentiality", "confidentiality"),
          makeLink("Sustainability", "sustainability"),
          makeLink("Insurances", "insurances"),
          makeLink("Complaints", "complaints"),
          makeLink("Patents", "patents"),
        ],
      },
    ],
  },
  {
    id: "support-service",
    sections: [
      {
        title: "Suport Service",
        links: [
          makeLink("Technical Support", "technical-support"),
          makeLink("Customer Support", "customer-support"),
          makeLink("Engineering Consultancy", "engineering-consultancy"),
          makeLink("After Sales Services", "after-sales-services"),
          makeLink("Installation Support", "installation-support"),
          makeLink("Custom Support", "custom-support"),
          makeLink("Live Solutions", "live-solutions"),
          makeLink("Chemical Testing", "chemical-testing"),
          makeLink("Physical Testing", "physical-testing"),
          makeLink("Manual Testing", "manual-testing"),
          makeLink("Testing & Inspection", "testing-inspection"),
          makeLink("Material Analysis", "material-analysis"),
          makeLink("Quality Control Process", "quality-control-process"),
          makeLink("Approval & Certification", "approval-certification")
        ],
      },
    ],
  },
  // {
  //   id: "support-quality",
  //    sections: [
  //     {
  //       title: "Support & Services",
  //       links: [
  //         makeLink("Technical Support", "technical-support"),
  //         makeLink("Customer Support", "customer-support"),
  //         makeLink("Engineering Consultancy", "engineering-consultancy"),
  //         makeLink("After Sales Services", "after-sales-services"),
  //         makeLink("Installation Support", "installation-support"),
  //         makeLink("Custom Support", "custom-support"),
  //         makeLink("Live Solutions", "live-solutions"),
  //       ],
  //     },
  //     {
  //       title: "Quality & Compliances",
  //       links: [
  //         makeLink("Chemical Testing", "chemical-testing"),
  //         makeLink("Physical Testing", "physical-testing"),
  //         makeLink("Manual Testing", "manual-testing"),
  //         makeLink("Testing & Inspection", "testing-inspection"),
  //         makeLink("Material Analysis", "material-analysis"),
  //         makeLink("Quality Control Process", "quality-control-process"),
  //         makeLink("Approval & Certification", "approval-certification"),
  //       ],
  //     },
  //   ],
  // },
];
