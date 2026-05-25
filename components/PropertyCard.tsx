import Image from "next/image";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-[0_1px_8px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.13)] transition-shadow duration-300 cursor-pointer">
      {/* Image container */}
      <div className="relative h-[190px] overflow-hidden bg-zinc-100">
        <Image
          src={property.image}
          alt={`Student rental in ${property.city}`}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />

        {/* Favourite */}
        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label="Save listing"
        >
          <svg
            className="w-[15px] h-[15px] text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>

        {/* City badge */}
        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-2.5 py-[4px] bg-[#0c0d10]/75 backdrop-blur-sm text-white text-[11px] font-semibold rounded-full tracking-wide">
            {property.city}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="px-4 py-3.5">
        <div className="flex items-baseline gap-1 mb-[3px]">
          <span className="text-[1.3rem] font-bold text-zinc-900 leading-none">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-[12px] text-zinc-400 font-medium">/ bed</span>
        </div>
        <p className="text-[12.5px] text-zinc-500 mb-[2px]">
          {property.beds} Bed&nbsp;·&nbsp;{property.baths} Bath
        </p>
        <p className="text-[12px] text-zinc-400">{property.distance}</p>
      </div>
    </article>
  );
}
