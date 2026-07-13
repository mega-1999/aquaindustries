import Image from "next/image"
import { cn } from "@/lib/utils"
import { menuData } from "@/lib/menuData2" // 1. Import menuData

// Data modeled after your "Metalverse  Industries" capabilities
const tagLines = [
    {
        id: 1,
        lines: "Be bold. Be powerful. The Futuristic Metalverse Force.",
        description: "Represents Metalverse  Industries’ commitment to bold innovation, powerful engineering, and a futuristic vision. It reflects our focus on pioneering technologies, next-generation materials, and advanced manufacturing systems that position us as a global force transforming the future of metal and industrial engineering.",
        imgUrl: "/assets/image1.jpeg"
    },
    {
        id: 2,
        lines: "Metalverse Options. Metalverse Outcomes.",
        description: "Highlights the extensive variety of products, solutions, and industrial services Metalverse  Industries offers. From raw materials to advanced manufacturing systems, the company consistently delivers high-value outcomes that exceed expectations through versatility, innovation, and precision engineering.",
        imgUrl: "/assets/image2.jpeg"
    },
    {
        id: 3,
        lines: "A Force to Reckon With.",
        description: "Positions Metalverse  Industries as a dominant and reliable global leader. This tagline reflects our strong industrial capabilities, consistent product performance, and our established reputation in global markets as a trustworthy and powerful industrial partner.",
        imgUrl: "/assets/image3.jpeg"
    },
    {
        id: 4,
        lines: "Learning Never Ends. Excellence Never Stops.",
        description: "Represents Metalverse  Industries’ internal culture of continuous learning, modern training, R&D enhancement, skill development, and dedication to industry-leading standards. Excellence is a process, not a destination.",
        imgUrl: "/assets/image4.jpg"
    },
    {
        id: 5,
        lines: "Always Delivering Beyond Expectations.",
        description: "Emphasizes Metalverse  Industries’ reputation for exceeding industry standards and client expectations. The company consistently delivers superior quality, innovative solutions, and high-performance engineering across all product lines.",
        imgUrl: "/assets/image5.jpeg"
    },
    {
        id: 6,
        lines: "The Metalverse Guarantee.",
        description: "Assures customers of long-term durability, reliability, and flawless engineering. The Metalverse Guarantee symbolizes trust and confidence in the performance, safety, and structural strength of every product.",
        imgUrl: "/assets/image6.jpg"
    },
    {
        id: 7,
        lines: "Metalverse Savings. Zero Compromise.",
        description: "Communicates cost-efficiency paired with premium quality. It highlights Metalverse  Industries’ ability to provide competitive pricing without compromising on material strength, safety, or engineering excellence.",
        imgUrl: "/assets/image7.jpeg"
    },
    {
        id: 8,
        lines: "Boundless Possibilities.",
        description: "Reflects the limitless technological, engineering, and industrial capabilities of Metalverse  Industries. Whether scaling production or innovating with new materials, the potential for growth is endless.",
        imgUrl: "/assets/image8.jpeg"
    },
    {
        id: 9,
        lines: "Your Vision. Our Undertaking.",
        description: "Shows a client-centered approach where Metalverse  Industries converts customer concepts into real, functioning industrial solutions. This tagline reflects commitment, precision execution, and a long-term partnership mindset.",
        imgUrl: "/assets/image9.jpeg"
    },
    {
        id: 10,
        lines: "Comforting the Future.",
        description: "Symbolizes the long-term sustainability, safety, and reliability built into Metalverse  Industries’ engineering processes and product designs—ensuring the future is strong, stable, and secure.",
        imgUrl: "/assets/image10.jpeg"
    },
    {
        id: 11,
        lines: "Manage Your Foundries Seamlessly.",
        description: "Represents modern digital transformation, automation, and operational efficiency. This tagline is ideal for sections covering software systems, dashboards, workflow automation, and digital foundry management.",
        imgUrl: "/assets/image11.jpg"
    },
    {
        id: 12,
        lines: "Retire the Vintage. Step Into Modern.",
        description: "Encourages industries to upgrade from outdated machinery and legacy systems to advanced, efficient, and future-ready solutions created by Metalverse  Industries.",
        imgUrl: "/assets/image12.jpg"
    },
    {
        id: 13,
        lines: "Non-Stop Innovations. Non-Stop Progress.",
        description: "Highlights Metalverse  Industries’ continuous investment in R&D, new materials, enhanced engineering methods, and innovative industrial solutions that advance global manufacturing standards.",
        imgUrl: "/assets/image13.jpg"
    },
    {
        id: 14,
        lines: "Always Ahead of the Industry.",
        description: "Positions Metalverse  Industries as an industry leader in innovation, global expansion, and next-generation engineering. This tagline reflects a future-focused mindset and competitive advantage.",
        imgUrl: "/assets/image14.jpeg"
    },
    {
        id: 15,
        lines: "Our Investment Today, Your Reward Tomorrow.",
        description: "Shows Metalverse  Industries’ long-term value approach. Every product is engineered to deliver consistent, high-performance results for years or decades—ensuring customers benefit long after installation.",
        imgUrl: "/assets/image15.jpeg"
    },
    {
        id: 16,
        lines: "Price is Right. Commitments Are Everlasting.",
        description: "Reflects transparent pricing, ethical business practices, and commitment to long-term partnerships. Metalverse  Industries values trust and delivers continuous support throughout the customer lifecycle.",
        imgUrl: "/assets/image16.jpg"
    },
    {
        id: 17,
        lines: "Mother Earth to Your Dock.",
        description: "Perfect for sourcing and logistics sections. It represents Metalverse  Industries’ global supply chain strength, where raw materials and products move reliably from international sources directly to client facilities.",
        imgUrl: "/assets/image17.jpg"
    },
    {
        id: 18,
        lines: "Metalverse Strength. Metalverse Standards.",
        description: "Defines the exceptional quality, structural strength, durability, and strict compliance standards that Metalverse  Industries maintains across all operational and manufacturing processes.",
        imgUrl: "/assets/image18.jpeg"
    },
    {
        id: 19,
        lines: "Crafting the Future With Precision.",
        description: "Emphasizes precise engineering, advanced tools, and meticulous craftsmanship. Every product is designed with future applications and evolving industrial needs in mind.",
        imgUrl: "/assets/image19.jpeg"
    },
    {
        id: 20,
        lines: "Engineering Beyond Boundaries.",
        description: "Reflects global scalability. Metalverse  Industries designs and manufactures industrial solutions capable of serving international sectors without limitations on geography, complexity, or scale.",
        imgUrl: "/assets/image20.jpeg"
    }
];

export function DesignCapabilities() {
  
  // 2. Extract all Category Names into a single list
  const allCategories = Object.values(menuData).flatMap(section => 
    section.categories.map(cat => cat.name)
  );

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-[#0A3161]/5">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A3161] mb-10 border-l-4 border-[#B31942] pl-4">
          The Metalverse Philosophy
        </h2>

        {/* The Grid Layout (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {tagLines.map((item, index) => {
             // 3. Get category name (Loop if we run out of categories)
             const categoryTitle = allCategories[index % allCategories.length];

             return (
                <div 
                  key={item.id} 
                  className="group flex flex-row border border-[#cccccc] shadow-xl overflow-hidden hover:shadow-none transition-shadow duration-300 min-h-[240px] bg-white"
                >
                  {/* Left Side: Image (Approx 35% width) */}
                  <div className="relative w-[35%] min-w-[35%] bg-[#0A3161]/10">
                    <Image
                      src={item.imgUrl} 
                      alt={item.lines}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Optional dark overlay on hover */}
                    <div className="absolute inset-0 bg-[#0A3161]/0 group-hover:bg-[#0A3161]/10 transition-colors" />
                  </div>

                  {/* Right Side: Content (Approx 65% width) */}
                  <div className="w-[65%] p-6 flex flex-col justify-center">
                    
                    {/* 4. Display the Category Title (From Menu Data) */}
                    <span className="text-xs font-bold text-[#B31942] uppercase tracking-wider mb-2 block">
                       {categoryTitle}
                    </span>

                    <h3 className="text-lg md:text-xl font-bold text-[#0A3161] mb-3 leading-tight group-hover:text-[#B31942] transition-colors">
                      {item.lines}
                    </h3>
                    <p className="text-sm text-[#0A3161]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
             );
          })}
        </div>
      </div>
    </section>
  )
}
