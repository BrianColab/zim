import Image from "next/image";
import ContactTrigger from "./ContactTrigger";

const managerPhone = "1 (613) 298-2875";
const managerPhoneHref = "tel:+16132982875";

export default function LandlordCTA() {
  return (
    <section className="bg-[#07111b] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-14 items-center">
          <div>
            <p className="section-kicker mb-5 text-[#c8f535]">
              Visit ZIM.ca
            </p>
            <h2
              className="mb-6 font-heading font-black leading-[0.86] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(3.6rem, 8vw, 6.5rem)" }}
            >
              Book a tour.
            </h2>
            <p className="section-copy mb-9 text-white/62">
              See Unit A and Unit B, the furnished rooms, shared kitchens, and
              study-friendly common areas before you choose your room.
            </p>

            <div className="flex items-center gap-5 flex-wrap">
              <ContactTrigger
                className="inline-flex items-center gap-2 px-6 py-[13px] bg-[#c8f535] text-[#07111b] font-extrabold text-[13.5px] rounded-[10px] hover:bg-[#d6fa57] transition-colors"
              >
                Schedule a Tour
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
              </ContactTrigger>
              <ContactTrigger
                className="text-white/52 hover:text-white text-[13.5px] font-bold transition-colors"
              >
                Ask a question -&gt;
              </ContactTrigger>
              <a
                href={managerPhoneHref}
                className="text-[13.5px] font-extrabold text-[#c8f535] transition-colors hover:text-[#d6fa57]"
              >
                Call {managerPhone}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 max-w-[430px]">
              <div className="border-t border-white/[0.12] pt-4">
                <p className="text-white font-extrabold text-[1.45rem] leading-none">
                  2 units
                </p>
                <p className="text-white/42 text-[12px] mt-2">
                  Unit A and Unit B
                </p>
              </div>
              <div className="border-t border-white/[0.12] pt-4">
                <p className="text-white font-extrabold text-[1.45rem] leading-none">
                  2 plans
                </p>
                <p className="text-white/42 text-[12px] mt-2">
                  single rooms and two-friend pair rooms
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-8 h-32 w-32 border-t-4 border-r-4 border-[#c8f535]" />
            <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden border border-white/[0.1] shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
              <Image
                src="/images/unit-dining.jpg"
                alt="Clean shared dining and study area at ZIM.ca"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07111b]/52 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
