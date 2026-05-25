import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedHomes() {
  return (
    <section className="bg-[#f4f3ee] pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-heading font-bold text-zinc-900 text-[1.6rem] md:text-[1.85rem]">
            Featured Homes Near Campus
          </h2>
          <Link
            href="#"
            className="hidden sm:flex items-center gap-1 text-[13px] font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            View all homes
            <span aria-hidden className="text-[15px]">
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
