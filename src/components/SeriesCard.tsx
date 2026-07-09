// components/SeriesCard.tsx
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface SeriesCardProps {
  title: string;
  items: string[];
}

export default function SeriesCard({ title, items }: SeriesCardProps) {
  return (
    <div className="flex flex-col h-full bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 relative group hover:shadow-md transition-shadow duration-300">
      
      {/* Header */}
      <div className="bg-[#B31942] text-white font-bold text-lg py-2 px-4 uppercase tracking-wider">
        {title}
      </div>

      {/* Content List */}
      <div className="p-5 flex-grow relative z-10">
        <ul className="space-y-1.5">
          {items.map((item, index) => (
            <li key={index}>
              <Link 
                href={`/products/${title.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-medium text-slate-700 hover:text-[#B31942] flex items-center gap-1 transition-colors"
              >
                {/* Logic to underline specific headers like "SPECIALITY PRODUCTS" */}
                <span className={item === item.toUpperCase() && item.length > 10 ? "underline decoration-2 underline-offset-4 font-bold" : ""}>
                    {item}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Red Gradient Effect (Bottom Right Corner) */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#B31942] via-[#B31942]/20 to-transparent opacity-80 rounded-tl-[100px] pointer-events-none" />
    </div>
  );
}
