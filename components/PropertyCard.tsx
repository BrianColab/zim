import Image from "next/image";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group bg-white rounded-[8px] overflow-hidden border border-black/[0.06] shadow-[0_1px_2px_rgba(8,18,28,0.05)] hover:shadow-[0_18px_42px_rgba(8,18,28,0.13)] transition-shadow duration-300 cursor-pointer">
      <div className="relative h-[196px] overflow-hidden bg-zinc-100">
        <Image
          src={property.image}
          alt={`Student rental in ${property.city}`}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />

        <button
          className="absolute top-3 right-3 w-8 h-8 bg-white/92 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
          aria-label="Save listing"
        >
          <svg
            className="w-[15px] h-[15px] text-zinc-500"
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

        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-2.5 py-[5px] bg-[#07111b]/82 backdrop-blur-sm text-white text-[11px] font-bold rounded-[7px]">
            {property.city}
          </span>
        </div>
      </div>

      <div className="px-4 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-400 mb-2">
          {property.school}
        </p>
        <h3 className="text-[14px] leading-snug font-bold text-zinc-900 mb-3 min-h-[38px]">
          {property.title}
        </h3>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-[1.35rem] font-extrabold text-zinc-950 leading-none">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-[12px] text-zinc-500 font-semibold">/ bed</span>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
          <p className="text-[12px] text-zinc-600 font-semibold">
            {property.beds} Bed / {property.baths} Bath
          </p>
          <p className="text-[12px] text-zinc-500 font-medium">
            {property.distance}
          </p>
        </div>
      </div>
    </article>
  );
}
