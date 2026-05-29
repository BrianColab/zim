import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

export default function FeaturedHomes() {
  return (
    <section id="suites" className="bg-[#f5f1e8] pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div>
            <p className="section-kicker mb-4 text-[#60710f]">
              Ottawa student rentals in Nepean
            </p>
            <h2 className="section-heading-tight text-zinc-950">
              <span className="headline-main">
                Furnished <span className="headline-accent">rooms</span>
              </span>
              <span className="headline-sub">
                at <span className="headline-accent">1658-1660 Baseline Road</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
