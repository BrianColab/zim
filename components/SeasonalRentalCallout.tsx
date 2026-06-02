import Link from "next/link";
import ContactTrigger from "./ContactTrigger";
import { seasonalContactPayload, seasonalSeo } from "@/lib/seasonalSeo";

type SeasonalRentalCalloutProps = {
  className?: string;
};

export default function SeasonalRentalCallout({
  className = "",
}: SeasonalRentalCalloutProps) {
  return (
    <section className={`bg-[#f5f1e8] py-8 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 rounded-[8px] border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(8,18,28,0.05)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="section-kicker text-[#60710f]">
              {seasonalSeo.currentLeasingSeason}
            </p>
            <p className="mt-2 text-[15px] font-semibold leading-relaxed text-zinc-700">
              {seasonalSeo.seasonIntroMessage}{" "}
              {seasonalSeo.availabilityDisclaimer}
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link
                href="/september-student-rentals-ottawa"
                className="text-[12px] font-extrabold text-[#60710f] underline decoration-[#c8f535] decoration-2 underline-offset-4 transition hover:text-zinc-950"
              >
                September rental planning
              </Link>
              <Link
                href="/algonquin-student-rentals-ottawa"
                className="text-[12px] font-extrabold text-[#60710f] underline decoration-[#c8f535] decoration-2 underline-offset-4 transition hover:text-zinc-950"
              >
                student rentals near Algonquin
              </Link>
              <Link
                href="/student-rentals-nepean-baseline-station"
                className="text-[12px] font-extrabold text-[#60710f] underline decoration-[#c8f535] decoration-2 underline-offset-4 transition hover:text-zinc-950"
              >
                Nepean student rentals
              </Link>
            </div>
          </div>
          <ContactTrigger
            payload={seasonalContactPayload}
            className="inline-flex items-center justify-center rounded-[10px] bg-[#07111b] px-5 py-4 text-[13px] font-extrabold text-white transition hover:bg-[#142536]"
          >
            {seasonalSeo.calloutCtaLabel}
          </ContactTrigger>
        </div>
      </div>
    </section>
  );
}
