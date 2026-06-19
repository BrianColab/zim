import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import StudentHousingResources from "@/components/StudentHousingResources";
import StudentHousingCta from "@/components/StudentHousingCta";
import SeasonalRentalCallout from "@/components/SeasonalRentalCallout";
import { properties } from "@/data/properties";

const canonicalUrl =
  "https://www.zim.ca/furnished-student-rooms-all-inclusive-ottawa";

export const metadata: Metadata = {
  title: {
    absolute: "Furnished All-Inclusive Student Rooms Ottawa | ZIM.ca",
  },
  description:
    "Furnished all-inclusive student rooms in Ottawa — bed, desk, hydro, internet, laundry included. Near Algonquin College and Baseline Station. From $850/month.",
  keywords: [
    "furnished student rooms Ottawa",
    "all-inclusive student rooms Ottawa",
    "furnished all-inclusive student housing Ottawa",
    "student rooms with utilities included Ottawa",
    "all-in student rental Ottawa",
    "furnished rooms near Algonquin College",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Furnished All-Inclusive Student Rooms Ottawa | ZIM.ca",
    description:
      "Bed, desk, hydro, internet, and laundry all included. Furnished student rooms in Nepean, Ottawa near Algonquin College. From $850/month.",
    url: canonicalUrl,
    images: [
      {
        url: "/images/og-zim-student-rentals.jpg",
        width: 1200,
        height: 630,
        alt: "Students entering the ZIM.ca rental at 1658-1660 Baseline Road in Ottawa",
      },
    ],
  },
};

const furnishedItems = [
  { label: "Bed + mattress", detail: "Ready on move-in day — no shopping required" },
  { label: "Desk + office chair", detail: "Full study setup already in the room" },
  { label: "Storage", detail: "Closet and built-in storage included" },
];

const includedBills = [
  { label: "Hydro (electricity)", detail: "Heat, A/C, and all electrical use covered" },
  { label: "Water + heat", detail: "No separate utility accounts to set up" },
  { label: "Gigabit internet", detail: "Unlimited high-speed — no data limits" },
  { label: "In-unit laundry", detail: "Washer and dryer in the building" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zim.ca/furnished-student-rooms-all-inclusive-ottawa#business",
  name: "ZIM.ca",
  sameAs: "https://www.zim.ca",
  url: canonicalUrl,
  image: "https://www.zim.ca/images/og-zim-student-rentals.jpg",
  description:
    "Furnished all-inclusive student rooms in Nepean, Ottawa. Bed, desk, hydro, internet, and laundry all included near Algonquin College and Baseline Station.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1658-1660 Baseline Road",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Ottawa" },
    { "@type": "Place", name: "Nepean" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Furnished all-inclusive student rooms Ottawa",
      serviceType: "Furnished student rooms / off-campus student rentals",
      areaServed: ["Ottawa", "Nepean"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${canonicalUrl}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What does furnished mean at ZIM.ca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each room includes a bed, mattress, desk, and office chair. Students arrive with personal belongings — no need to buy or transport large furniture.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the all-inclusive rent at ZIM.ca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hydro, water, heat, central A/C, unlimited gigabit internet, and in-unit laundry are all included in the monthly rent. There are no separate bills to set up.",
      },
    },
    {
      "@type": "Question",
      name: "How much are furnished all-inclusive student rooms at ZIM.ca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unit B single rooms start at $850/month. Unit A single rooms are $900/month. Pair rooms (two friends applying together) range from $1000 to $1200/month depending on the unit.",
      },
    },
    {
      "@type": "Question",
      name: "Where are the furnished all-inclusive rooms located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ZIM.ca is at 1658-1660 Baseline Road in Nepean, Ottawa, near Algonquin College, Baseline Station, and College Square.",
      },
    },
  ],
};

export default function FurnishedAllInclusiveStudentRoomsPage() {
  const faqs = faqSchema.mainEntity;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main id="main-content">
        <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[740px]">
          <div className="absolute inset-0">
            <Image
              src="/images/main.png"
              alt="Furnished all-inclusive student room at ZIM.ca, 1658-1660 Baseline Road Ottawa"
              fill
              priority
              sizes="100vw"
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
                  Everything included from day one
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.1rem, 7vw, 6.8rem)" }}
                >
                  Furnished All-Inclusive Student Rooms in Ottawa
                </h1>
                <p className="max-w-[620px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  Bed, desk, hydro, internet, and laundry all included in one
                  monthly rent. Near Algonquin College and Baseline Station in
                  Nepean, Ottawa.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "Furnished all-inclusive rooms inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="#rooms"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    View Rooms and Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeasonalRentalCallout />

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker text-[#60710f]">
                  What furnished actually means
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Move in with bags, not a moving truck
                </h2>
              </div>
              <p className="section-copy max-w-none text-zinc-600">
                Furnished student rooms in Ottawa vary widely. Some listings say
                furnished but only provide a mattress. At ZIM.ca, each room is
                set up for studying and sleeping from day one — bed, mattress,
                desk, chair, and storage are already in the room when students
                arrive.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {furnishedItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-black/[0.08] bg-white p-5"
                >
                  <p className="text-[13px] font-extrabold text-zinc-950">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-relaxed text-zinc-500">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  What all-inclusive actually means
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  One rent. No extra bills.
                </h2>
              </div>
              <p className="section-copy max-w-none text-white/62">
                All-inclusive student rentals in Ottawa also vary in what they
                actually include. At ZIM.ca, the rent covers four categories of
                bills students often have to set up and pay separately elsewhere.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {includedBills.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.05] p-5"
                >
                  <p className="text-[13px] font-extrabold text-[#c8f535]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[13px] font-medium leading-relaxed text-white/62">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Why this setup helps students
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                One number, no surprises
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                When rent, utilities, internet, laundry, and furniture are
                bundled together, students can budget accurately from day one.
                There are no surprise bills in January when heating costs rise,
                no arguments about splitting internet costs, and no last-minute
                furniture purchases before move-in.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                For students on a fixed budget — or for parents helping their
                student plan for the school year — a single monthly number is
                easier to work with than a base rent plus a variable list of
                extras.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Location</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Near Algonquin College and Baseline Station
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca is at 1658-1660 Baseline Road in Nepean, Ottawa. The
                address places students within reach of Algonquin College,
                Baseline Station (OC Transpo), College Square, groceries, and
                daily services.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students from Algonquin College, Carleton University, and other
                Ottawa schools have rented here. The location works best for
                students who want furnished, all-inclusive housing in a
                residential Nepean neighbourhood with practical transit access.
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

        <section id="rooms" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Available rooms
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished all-inclusive rooms and pricing
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Both units include all listed furniture and bills. Contact us to
                confirm current availability and move-in dates.
              </p>
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
                Furnished all-inclusive rooms FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  key={faq.name}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] p-5"
                >
                  <h3 className="text-[15px] font-extrabold leading-tight text-white">
                    {faq.name}
                  </h3>
                  <p className="mt-3 text-[13px] font-medium leading-relaxed text-white/58">
                    {faq.acceptedAnswer.text}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactTrigger
                payload={{
                  roomType: "Availability",
                  moveIn: "2026-09-01",
                  lease: "Furnished all-inclusive rooms inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
              <Link
                href="/algonquin-student-rentals-ottawa"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                student rentals near Algonquin College
              </Link>
              <Link
                href="/ottawa-student-housing-cost-guide"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                Ottawa student housing cost guide
              </Link>
            </div>
          </div>
        </section>

        <StudentHousingResources
          links={[
            "algonquin",
            "baseline",
            "resourceHub",
            "costGuide",
            "parents",
            "international",
          ]}
          theme="dark"
        />
        <StudentHousingCta title="Ready to see a furnished all-inclusive room?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
