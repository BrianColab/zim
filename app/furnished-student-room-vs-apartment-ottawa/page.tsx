import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { roomVsApartmentFaqs } from "@/data/roomVsApartmentFaqs";

const canonicalUrl =
  "https://www.zim.ca/furnished-student-room-vs-apartment-ottawa";
const pageTitle =
  "Furnished Student Room vs Apartment in Ottawa | Student Housing Guide | ZIM.ca";
const pageDescription =
  "Compare furnished student rooms, private apartments and student residences in Ottawa. Learn what students should consider for rent, utilities, furniture, internet, location and move-in costs.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "furnished student room vs apartment Ottawa",
    "furnished student rooms Ottawa",
    "Ottawa student rentals",
    "affordable student housing Ottawa",
    "student residence vs apartment Ottawa",
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
        alt: "Furnished student room vs apartment guide in Ottawa",
      },
    ],
  },
};

const comparisonRows = [
  {
    type: "Furnished student room",
    includes:
      "Furniture may be included, often with shared kitchen, bathroom, and living areas.",
    extras:
      "Confirm utilities, internet, laundry, deposits, parking if applicable, and room setup.",
    bestFor:
      "Students who want a simpler move-in and easier total monthly cost comparison.",
    ask: "What furniture, utilities, internet, laundry, and shared spaces are included?",
  },
  {
    type: "Unfurnished room",
    includes:
      "A room in a shared home or apartment, usually without bedroom furniture.",
    extras:
      "Furniture, moving costs, utility shares, internet, laundry, and setup items.",
    bestFor:
      "Students who already have furniture or want more control over their setup.",
    ask: "Who manages utilities, internet, furnishing, and shared-space expectations?",
  },
  {
    type: "Private apartment",
    includes:
      "A full private unit with more independence and control over the space.",
    extras:
      "Furniture, utilities, internet, tenant insurance, laundry, parking, and household items.",
    bestFor:
      "Students who want their own full unit and can handle more setup.",
    ask: "Which bills are separate, and what will the total monthly cost be?",
  },
  {
    type: "Purpose-built student residence",
    includes:
      "Student-oriented layouts and amenities depending on the building and room type.",
    extras:
      "Students should compare fees, lease terms, included services, and location.",
    bestFor:
      "Students who prefer a larger student-housing environment.",
    ask: "What services, fees, lease terms, and room rules are included?",
  },
];

const roomMakesSenseItems = [
  "You want furniture included",
  "You want internet included",
  "You want utilities included",
  "You want a simpler move-in",
  "You want a practical option near school or transit",
  "You are moving from outside Ottawa",
  "You want to compare total monthly cost, not only base rent",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Furnished Student Room vs Apartment in Ottawa",
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
  mainEntity: roomVsApartmentFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FurnishedStudentRoomVsApartmentOttawaPage() {
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
              alt="Furnished student room vs apartment in Ottawa"
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
              <div className="max-w-[870px]">
                <p className="section-kicker mb-5 text-[#c8f535]">
                  Student housing comparison
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3rem, 7vw, 6.8rem)" }}
                >
                  Furnished Student Room vs Apartment in Ottawa
                </h1>
                <p className="max-w-[660px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  Students and parents should compare total monthly cost,
                  furniture, utilities, internet, location, privacy, and
                  move-in needs before choosing housing.
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
                      lease: "Room vs apartment guide inquiry",
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
              <p className="section-kicker text-[#60710f]">
                Choosing housing
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                The best option depends on the student
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                The best Ottawa student rental depends on budget, location,
                school commute, need for furniture, included utilities, internet
                access, lease timing, privacy preferences, and move-in timeline.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                A furnished student room, private apartment, or student
                residence can each make sense for different students. The key is
                comparing total monthly cost and day-to-day routine before
                applying.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/ottawa-student-housing-cost-guide"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  Ottawa student housing cost guide
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

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  Quick comparison
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  Four common student housing types
                </h2>
              </div>
              <p className="section-copy text-white/58">
                This table is general. Students should confirm what is included
                in the exact room, apartment, or residence before renting.
              </p>
            </div>
            <div className="overflow-hidden rounded-[8px] border border-white/[0.08]">
              <div className="grid grid-cols-1 bg-white/[0.06] text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#c8f535] lg:grid-cols-5">
                <div className="border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r">
                  Housing type
                </div>
                <div className="border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r">
                  What it usually includes
                </div>
                <div className="border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r">
                  Possible extra costs
                </div>
                <div className="border-b border-white/[0.08] p-4 lg:border-b-0 lg:border-r">
                  Best for
                </div>
                <div className="p-4">Things to ask</div>
              </div>
              {comparisonRows.map((row) => (
                <article
                  key={row.type}
                  className="grid grid-cols-1 border-t border-white/[0.08] bg-white/[0.03] lg:grid-cols-5"
                >
                  <h3 className="p-4 text-[14px] font-extrabold text-white lg:border-r lg:border-white/[0.08]">
                    {row.type}
                  </h3>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58 lg:border-r lg:border-white/[0.08]">
                    {row.includes}
                  </p>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58 lg:border-r lg:border-white/[0.08]">
                    {row.extras}
                  </p>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58 lg:border-r lg:border-white/[0.08]">
                    {row.bestFor}
                  </p>
                  <p className="p-4 text-[13px] font-medium leading-relaxed text-white/58">
                    {row.ask}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Furnished student rooms
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Easier move-in and fewer setup steps
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished student rooms Ottawa students compare can reduce
                move-in work because furniture is already included. Utilities
                and internet may also be included depending on the rental.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                This can be useful for students moving from outside Ottawa or
                students who want a lower monthly cost than some private
                apartments or purpose-built residences. Students should still
                compare the exact room and included costs.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Private apartments
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                More privacy, more setup to manage
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Private apartments can offer more privacy and independence. They
                may be a better fit for students who want their own full unit
                and are ready to manage more setup.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students should ask whether furniture, utilities, internet,
                tenant insurance, laundry, parking, and household items are
                separate because those details can raise the total monthly cost.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Student residences
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Purpose-built student housing can work for some students
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Purpose-built student residence can offer amenities and a
                student community, which may be convenient for some students.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Costs can vary depending on the building, room type, included
                services, and lease terms. Students should compare what is
                included before deciding.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#c8f535]">
                Budgeting
              </p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Compare the full monthly cost
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-white/58">
                Students should compare rent, utilities, internet, laundry,
                furniture, transit, parking if applicable, and move-in supplies.
                Base rent does not always show the full cost of living there.
              </p>
              <p className="section-copy max-w-none text-white/58">
                ZIM.ca offers furnished student rooms with utilities, internet,
                laundry, and furniture included. Current room data shows rooms
                from $850/month. Availability and pricing may vary. Contact us
                to confirm current rooms and move-in dates.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Location matters</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                School, transit, and daily needs all affect fit
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Students should consider location and transit access, especially
                near Algonquin College, Baseline Station, College Square, and
                Nepean. Ottawa transit access and nearby daily needs like
                groceries, food, and shopping can affect the overall routine.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Exact commute details should be confirmed before renting, but a
                practical location can make the total housing decision easier to
                compare.
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

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  When a furnished room may make sense
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  A practical checklist for students
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                These points do not mean a furnished room is always best. They
                help students decide when it may be a practical fit.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {roomMakesSenseItems.map((item) => (
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

        <section id="zimca-rooms" className="bg-[#f5f1e8] py-20">
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
                  href="/"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  furnished student rooms in Ottawa
                </Link>
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
                <Link
                  href="/september-student-rentals-ottawa"
                  className="rounded-[8px] border border-black/[0.1] bg-white px-4 py-3 text-[12px] font-extrabold text-zinc-800 transition hover:border-[#60710f]/40"
                >
                  September student rentals in Ottawa
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
                Furnished room vs apartment FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {roomVsApartmentFaqs.map((faq) => (
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
                  lease: "Room vs apartment guide inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
              <Link
                href="/ottawa-student-housing-cost-guide"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                Ottawa student housing cost guide
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
