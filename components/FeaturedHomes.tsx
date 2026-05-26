import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedHomes() {
  return (
    <section className="bg-[#f5f1e8] pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#60710f] mb-3">
              Suite options
            </p>
            <h2 className="font-heading font-extrabold text-zinc-950 text-[1.7rem] md:text-[2rem] leading-tight">
              Choose your space at ZIM.ca
            </h2>
          </div>
          <Link
            href="#"
            className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            Check availability
            <span aria-hidden className="text-[15px]">
              -&gt;
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
