'use client';

import { HandFist, MapPinIcon, Radar, Target } from 'lucide-react';
interface ProductItemCardProps {
    count: string;
    label: string;
}
interface ScrollRowProps {
    data: ProductItemCardProps[];
    duration: number;
}
const MetricSection = () => {
    const metrics = [
        { icon: Target, value: "2000", label: "Products" },
        { icon: HandFist, value: "1000", label: "Suppliers" },
        { icon: Radar, value: "12000", label: "Product Categories" },
        { icon: MapPinIcon, value: "4000", label: "countries and regions" },
    ];
    return (
        <section className="max-w-5xl mx-auto">
            <div className="w-full px-4 sm:px-6 lg:px-10 py-3">
                <h2 className="text-[30px] text-white font-extrabold text-center mb-16 max-w-3xl mx-auto">
                    Proudly Supporting & Sponsoring
                </h2>

                {/* Metrics Grid */}
                {/* <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 py-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex flex-col items-center p-4">
                            <div className="relative p-3 rounded-full bg-white/50 mb-3">
                                 <metric.icon className="w-6 h-6 text-[#0A3161]" />
                                 <div className="absolute inset-0 border border-[#0A3161]/20 rounded-full"></div>
                            </div>

                            <div className="text-[14px] font-extrabold text-[#B31942] mb-1">{metric.value}</div>
                            <p className="text-[10px] text-[#0A3161] text-center">{metric.label}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

// --- PRODUCT CAROUSEL COMPONENTS (Updated for Auto-Scrolling and Mask) ---

const ProductItemCard = ({ count, label }: ProductItemCardProps) => (
    <div
        className={`
            shrink-0   rounded-xl p-4 transition-shadow duration-300 hover:shadow-lg bg-[#B31942]
            w-[250px] h-[100px] flex flex-col justify-center items-center shadow-sm  cursor-pointer
        `}
    >
        <p className={`font-extrabold text-white text-xl mb-1`}>{count}</p>
        <p className={`text-center text-white text-[13px] leading-tight`}>{label}</p>
    </div>
);

const ProductCarousel = () => {
    const productData = [
        { count: "1200+", label: "Manholes Patterns" },
        { count: "4000+", label: "Curb Intet Patterns" },
        { count: "3000+", label: "Catch Basin Patterns" },
        { count: "1500+", label: "Water Works Patterns" },
        { count: "200+", label: "Cleanout Patterns" },
        { count: "5000+", label: "Trench Patterns" },
    ];

    // Create an array that is duplicated so the scrolling is seamless (Infinite Marquee)
    const scrollingData = [...productData, ...productData];

    const cardWidth = 236; // 220px card width + 16px margin (w-[220px] + space-x-4)
    const totalItems = productData.length;
    const scrollDistance = totalItems * cardWidth; // 12 * 236 = 2832px

    const ScrollRow = ({ data, duration }: ScrollRowProps) => (
        <div
            className="flex space-x-4 pb-4 px-1 whitespace-nowrap"
            style={{
                animation: `marquee ${duration}s linear infinite`
            }}
        >
            {data.map((item, index) => (
                <ProductItemCard
                    key={`${item.label}-${index}`}
                    count={item.count}
                    label={item.label}
                />
            ))}
        </div>
    );

    return (
        <section className="py-10 bg-[#0A3161] ">
            <MetricSection />
            <div className="space-y-4 w-full">
                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        maskImage: `linear-gradient(to right, 
                            rgba(10,49,97,0) 20%, 
                            rgba(10,49,97,1) 55%, 
                            rgba(10,49,97,1) 95%, 
                            rgba(10,49,97,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, 
                            rgba(10,49,97,0) 0%, 
                            rgba(10,49,97,1) 5%, 
                            rgba(10,49,97,1) 95%, 
                            rgba(10,49,97,0) 100%)`,
                    }}
                >
                    <ScrollRow data={scrollingData.slice(0, totalItems)} duration={60} />
                    <ScrollRow data={scrollingData.slice(0, totalItems)} duration={60} />
                </div>

                <div
                    className="relative flex overflow-x-hidden"
                    style={{
                        maskImage: `linear-gradient(to right, 
                            rgba(10,49,97,0) 0%, 
                            rgba(10,49,97,1) 5%, 
                            rgba(10,49,97,1) 95%, 
                            rgba(10,49,97,0) 100%)`,
                        WebkitMaskImage: `linear-gradient(to right, 
                            rgba(10,49,97,0) 0%, 
                            rgba(10,49,97,1) 5%, 
                            rgba(10,49,97,1) 95%, 
                            rgba(10,49,97,0) 100%)`,
                    }}
                >
                    {/* We can use the same data source but it runs in a separate row */}
                    <ScrollRow data={scrollingData.slice(totalItems)} duration={60} />
                    <ScrollRow data={scrollingData.slice(totalItems)} duration={60} />
                </div>
            </div>

            <style jsx global>{`
                /* Define the CSS keyframes for the continuous horizontal scroll */
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${scrollDistance}px); } /* Translate by the full width of the original data set */
                }
            `}</style>
        </section>
    );
};
export default ProductCarousel

