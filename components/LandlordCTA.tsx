import Link from "next/link";
import Image from "next/image";

export default function LandlordCTA() {
  return (
    <section className="bg-[#0c0d10] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text side */}
          <div>
            <p className="text-[#c8f535] text-[11px] font-bold uppercase tracking-[0.15em] mb-5">
              For Landlords
            </p>
            <h2
              className="font-heading font-extrabold text-white leading-[0.88] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
            >
              List with ZIM.
            </h2>
            <p className="text-white/45 text-[1rem] leading-[1.7] mb-9 max-w-[400px]">
              Reach thousands of students actively looking for their next home.
              Fast setup, honest pricing, and real results.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-[13px] bg-[#c8f535] text-[#0c0d10] font-bold text-[13.5px] rounded-xl hover:bg-[#d5f858] transition-colors"
              >
                List Your Property
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-white/40 hover:text-white/70 text-[13.5px] font-medium transition-colors"
              >
                Learn more →
              </Link>
            </div>

            {/* Social proof */}
            <p className="mt-8 text-white/20 text-[12px]">
              Trusted by landlords across Ottawa, Waterloo, Toronto & more
            </p>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/unit-bedroom.jpg"
                alt="Premium student room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 bg-[#111318] border border-white/[0.08] rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-[#c8f535] text-[1.6rem] font-bold font-heading leading-none mb-1">
                3,200+
              </p>
              <p className="text-white/40 text-[12px] font-medium">
                students placed last year
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
