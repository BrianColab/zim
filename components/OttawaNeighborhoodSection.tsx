import Link from "next/link";

export default function OttawaNeighborhoodSection() {
  return (
    <section className="bg-[#07111b] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker text-[#c8f535]">Nepean, Ottawa</p>
            <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
              Student Rentals Near Algonquin College and Baseline Station
            </h2>
          </div>
          <div className="grid gap-5">
            <p className="section-copy max-w-none text-white/66">
              ZIM.ca is located in Nepean, Ottawa near Algonquin College and
              Baseline Station. The homes are clean, well-maintained, and set up
              for students who want a comfortable, quiet place to live — not a
              party house.
            </p>
            <p className="section-copy max-w-none text-white/66">
              Baseline Station and OC Transpo routes make the location practical
              for students without a car. Groceries, transit, and daily
              essentials are close by.
            </p>
            <p className="section-copy max-w-none text-white/66">
              The setup suits local Ottawa students, international students new
              to Canada, and first-time renters who want furnished rooms with
              utilities, internet, and laundry already included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/student-rentals-nepean-baseline-station"
                className="rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-[12px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.1]"
              >
                student rentals near Baseline Station
              </Link>
              <Link
                href="/parents-student-housing-ottawa"
                className="rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-[12px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.1]"
              >
                information for parents
              </Link>
              <Link
                href="/international-student-housing-ottawa"
                className="rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-[12px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.1]"
              >
                international student housing in Ottawa
              </Link>
              <Link
                href="/student-housing-resources-ottawa"
                className="rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-[12px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.1]"
              >
                Ottawa student housing resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
