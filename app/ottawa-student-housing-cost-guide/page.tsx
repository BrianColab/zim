import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { ottawaStudentHousingCostFaqs } from "@/data/ottawaStudentHousingCostFaqs";

const canonicalUrl = "https://www.zim.ca/ottawa-student-housing-cost-guide";
const pageTitle =
  "How Much Does Student Housing Cost in Ottawa? | Student Rental Guide | ZIM.ca";
const pageDescription =
  "Compare student housing costs in Ottawa, including furnished rooms, utilities, internet, location, transit and all-inclusive student rentals near Algonquin College, Baseline Station and Nepean.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "how much does student housing cost in Ottawa",
    "Ottawa student housing cost",
    "student rentals Ottawa prices",
    "furnished student rooms Ottawa",
    "affordable student housing Ottawa",
    "student rooms near Algonquin College",
    "all-inclusive student rooms Ottawa",
    "student rentals near Baseline Station",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    images: [
      {
        url: "/images/main.png",
        width: 1200,
        height: 630,
        alt: "Ottawa student housing cost guide",
      },
    ],
  },
};

const priceFactors = [
  "Location",
  "Distance to school",
  "Transit access",
  "Furnished vs unfurnished",
  "Utilities included vs separate bills",
  "Private apartment vs shared student room",
  "Lease timing and September demand",
  "Room size and occupancy",
];

const comparisonRows = [
  {
    type: "Furnished student room",
    benefit: "Furniture and shared living setup may already be in place.",
    extras: "Confirm utilities, internet, laundry, deposits, and room setup.",
    bestFor:
      "Students who want less move-in setup and a clearer monthly comparison.",
  },
  {
    type: "Unfurnished room",
    benefit: "Can work for students who already own furniture.",
    extras: "Furniture, moving, utilities, internet, and setup items may add cost.",
    bestFor: "Students planning a longer stay or bringing their own furniture.",
  },
  {
    type: "Private apartment",
    benefit: "More independent space and control over the unit.",
    extras: "Utilities, internet, furniture, insurance, and household items may be separate.",
    bestFor: "Students who want more privacy and can manage more setup.",
  },
  {
    type: "Purpose-built student residence",
    benefit: "Student-focused building and roommate-oriented layouts.",
    extras: "Students should compare included items, fees, lease terms, and location.",
    bestFor: "Students who prefer a larger student-housing environment.",
  },
];

const priceQuestions = [
  "Is the room furnished?",
  "Are utilities included?",
  "Is internet included?",
  "Is laundry included?",
  "Is the property near school or transit?",
  "Are there extra fees?",
  "What is the lease term?",
  "What is the move-in date?",
  "How do showings and applications work?",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does Student Housing Cost in Ottawa?",
  description: pageDescription,
  author: {
    "@type": "Organization",
    name: "ZIM.ca",
    url: "https://www.zim.ca",
  },
  publisher: {
    "@type": "Organization",
    name: "ZIM.ca",
    url: "https://www.zim.ca",
    logo: {
      "@type": "ImageObject",
      url: "https://www.zim.ca/icon.svg",
    },
  },
  datePublished: "2026-06-02",
  dateModified: "2026-06-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${canonicalUrl}#faq`,
  mainEntity: ottawaStudentHousingCostFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function OttawaStudentHousingCostGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[740px]">
          <div className="absolute inset-0">
            <Image
              src="/images/main.png"
              alt="Ottawa student housing cost guide"
              fill
              priority
              quality={90}
              className="object-cover object-[62%_42%]"
            />
            <div className="absolute inset-0 bg-[#07111b]/24" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/90 via-[#07111b]/42 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06101a]/44 via-transparent to-[#06101a]/72" />
          </div>

          <div className="relative flex flex-1 flex-col justify-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8">
              <div className="max-w-[850px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Student rental guide
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.1rem, 7vw, 6.8rem)" }}
                >
                  How Much Does Student Housing Cost in Ottawa?
                </h1>
                <p className="max-w-[650px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  Student housing costs depend on location, furniture,
                  utilities, internet, lease type, and proximity to school or
                  transit.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#zimca-rooms"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    View Student Rooms
                  </Link>
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Student housing cost guide inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    Book a Showing
                  </ContactTrigger>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Full monthly cost</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Compare more than the base rent
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Students and parents should compare the full monthly cost, not
                just the base rent. Total cost may include rent, utilities,
                internet, laundry, furniture, transit, parking if applicable,
                and move-in costs.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                A rental with a lower starting rent may still cost more to set
                up if the student needs furniture, separate utility accounts, or
                a longer commute. The best comparison is the one that includes
                the full routine.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  furnished student rooms in Ottawa
                </Link>
                <Link
                  href="/algonquin-college-off-campus-housing-guide"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Algonquin College off-campus housing guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Price factors
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  What affects student rental prices in Ottawa?
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Avoid relying on exact citywide averages unless the source is
                current and comparable. These factors change the total cost.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {priceFactors.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-black/[0.08] bg-[#f7f4ed] px-4 py-4 text-[13px] font-extrabold text-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  Housing type comparison
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  Furnished rooms vs private apartments
                </h2>
              </div>
              <p className="section-copy text-white/58">
                These are general comparisons. Students should confirm the exact
                room, lease, included items, and move-in details before applying.
              </p>
            </div>
            <div className="overflow-hidden rounded-[8px] border border-white/[0.08]">
              <div className="grid grid-cols-1 bg-white/[0.06] text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#c8f535] md:grid-cols-4">
                <div className="border-b border-white/[0.08] p-4 md:border-b-0 md:border-r">
                  Housing type
                </div>
                <div className="border-b border-white/[0.08] p-4 md:border-b-0 md:border-r">
                  Typical benefit
                </div>
                <div className="border-b border-white/[0.08] p-4 md:border-b-0 md:border-r">
                  Possible extra costs
                </div>
                <div className="p-4">Best for</div>
              </div>
              {comparisonRows.map((row) => (
                <article
                  key={row.type}
                  className="grid grid-cols-1 border-t border-white/[0.08] bg-white/[0.03] md:grid-cols-4"
                >
                  <h3 className="p-4 text-[14px] font-extrabold text-white md:border-r md:border-white/[0.08]">
                    {row.type}
                  </h3>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58 md:border-r md:border-white/[0.08]">
                    {row.benefit}
                  </p>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58 md:border-r md:border-white/[0.08]">
                    {row.extras}
                  </p>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58">
                    {row.bestFor}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                All-inclusive rent
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Included essentials can make budgeting easier
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                All-inclusive rooms can reduce uncertainty because utilities,
                internet, and laundry may be included. ZIM.ca offers furnished
                student rooms with utilities, internet, laundry, and furniture
                included.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Current ZIM.ca room data shows rooms from $850/month.
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Questions to ask
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Before comparing student rental prices
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                These questions help students compare student rentals Ottawa
                prices with fewer surprises.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {priceQuestions.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-black/[0.08] bg-[#f7f4ed] px-4 py-4 text-[13px] font-extrabold text-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Location and cost
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Lower rent is not always the lower total cost
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Location matters because a lower rent may come with higher
                transit costs, a longer commute, or extra furniture and setup
                costs. Students comparing housing near Algonquin College should
                also look at Baseline Station, College Square, Nepean, and
                Ottawa transit access.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                A practical location can make the daily routine simpler, but
                students should confirm their exact route and schedule before
                choosing a room.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/algonquin-student-rentals-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rentals near Algonquin College
                </Link>
                <Link
                  href="/student-rentals-nepean-baseline-station"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student rooms near Baseline Station
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="zimca-rooms" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Where ZIM.ca fits
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished student rooms in Nepean, Ottawa
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
              </p>
            </div>
            <div className="mb-8 grid gap-5 lg:grid-cols-2">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca offers furnished student rooms near Algonquin College,
                Baseline Station, and College Square, with utilities, internet,
                and laundry included. The contact/showing process helps students
                confirm current room options and move-in dates.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/parents-student-housing-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  student housing information for parents
                </Link>
                <Link
                  href="/international-student-housing-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  international student housing in Ottawa
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="section-kicker text-[#c8f535]">FAQ</p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Ottawa student housing cost FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {ottawaStudentHousingCostFaqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-5"
                >
                  <h3 className="text-[15px] font-extrabold leading-tight text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-white/58">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactTrigger
                payload={{
                  roomType: "Availability",
                  moveIn: "2026-09-01",
                  lease: "Student housing cost guide inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
              <Link
                href="/algonquin-college-off-campus-housing-guide"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                Algonquin College off-campus housing guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
