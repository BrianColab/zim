import Image from "next/image";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group bg-white rounded-[8px] overflow-hidden border border-black/[0.06] shadow-[0_1px_2px_rgba(8,18,28,0.05)] hover:shadow-[0_18px_42px_rgba(8,18,28,0.13)] transition-shadow duration-300">
      <div className="relative h-[220px] overflow-hidden bg-zinc-100">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />

        <div className="absolute bottom-3 left-3">
          <span className="inline-block px-2.5 py-[5px] bg-[#07111b]/82 backdrop-blur-sm text-white text-[11px] font-bold rounded-[7px]">
            {property.availability}
          </span>
        </div>
      </div>

      <div className="px-4 py-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#60710f] mb-2">
          ZIM.ca Residence
        </p>
        <h3 className="text-[16px] leading-snug font-extrabold text-zinc-950 mb-2">
          {property.title}
        </h3>
        <p className="mb-2 text-[12px] font-extrabold text-zinc-700">
          {property.address}
        </p>
        <p className="text-[12.5px] leading-[1.55] text-zinc-500 mb-4 min-h-[40px]">
          {property.description}
        </p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-[1.35rem] font-extrabold text-zinc-950 leading-none">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-[12px] text-zinc-500 font-semibold">
            / month
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
          <p className="text-[12px] text-zinc-600 font-semibold">
            {property.beds}
          </p>
          <p className="text-[12px] text-zinc-500 font-medium">
            {property.baths}
          </p>
        </div>
      </div>
    </article>
  );
}
