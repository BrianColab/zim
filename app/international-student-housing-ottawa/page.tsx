import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ContactTrigger from "@/components/ContactTrigger";
import PropertyCard from "@/components/PropertyCard";
import StudentHousingCta from "@/components/StudentHousingCta";
import StudentHousingResources from "@/components/StudentHousingResources";
import { properties } from "@/data/properties";
import { internationalStudentFaqs } from "@/data/internationalStudentFaqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "International Student Housing in Ottawa | Furnished Rooms Near Algonquin | ZIM.ca",
  },
  description:
    "Moving to Ottawa for school? ZIM.ca offers furnished all-inclusive student rooms near Algonquin College, Baseline Station and College Square with utilities, internet, laundry and furniture included.",
  keywords: [
    "international student housing Ottawa",
    "furnished student rooms Ottawa",
    "Ottawa student rentals",
    "student housing near Algonquin College",
    "all-inclusive student rooms Ottawa",
    "move-in ready student rooms Ottawa",
  ],
  alternates: {
    canonical: "https://www.zim.ca/international-student-housing-ottawa",
  },
  openGraph: {
    title:
      "International Student Housing in Ottawa | Furnished Rooms Near Algonquin | ZIM.ca",
    description:
      "Furnished all-inclusive student rooms in Nepean near Algonquin College, Baseline Station and College Square.",
    url: "https://www.zim.ca/international-student-housing-ottawa",
    images: [
      {
        url: "/images/main.png",
        width: 1200,
        height: 630,
        alt: "International student housing in Ottawa near Algonquin College",
      },
    ],
  },
};

const includedItems = [
  "Furniture included",
  "Utilities included",
  "Internet included",
  "Laundry included",
  "Practical Nepean location",
  "Student-focused rental setup",
  "Rooms from $850/month",
  "Easy showing/contact process",
];

const checklistItems = [
  "Is the room furnished?",
  "Are utilities included?",
  "Is internet included?",
  "How close is it to school or transit?",
  "What is the total monthly cost?",
  "How do showings and applications work?",
  "What move-in dates are available?",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zim.ca/international-student-housing-ottawa#business",
  name: "ZIM.ca",
  url: "https://www.zim.ca/international-student-housing-ottawa",
  image: "https://www.zim.ca/images/main.png",
  description:
    "Furnished all-inclusive student rooms in Nepean, Ottawa near Algonquin College, Baseline Station, and College Square.",
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
    { "@type": "CollegeOrUniversity", name: "Algonquin College" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "International student housing Ottawa",
      serviceType: "Furnished student rooms / off-campus student rentals",
      areaServed: ["Ottawa", "Nepean"],
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.zim.ca/international-student-housing-ottawa#faq",
  mainEntity: internationalStudentFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function InternationalStudentHousingOttawaPage() {
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
      <main>
        <section className="relative flex min-h-[680px] flex-col overflow-hidden bg-[#07111b] sm:min-h-[740px]">
          <div className="absolute inset-0">
            <Image
              src="/images/main.png"
              alt="International student housing in Ottawa"
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
                  Move-in ready student rooms Ottawa
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.25rem, 7.5vw, 7rem)" }}
                >
                  International Student Housing in Ottawa
                </h1>
                <p className="max-w-[610px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  ZIM.ca offers furnished, all-inclusive student rooms in
                  Nepean, Ottawa near Algonquin College, Baseline Station, and
                  College Square.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ContactTrigger
                    payload={{
                      roomType: "Availability",
                      moveIn: "2026-09-01",
                      lease: "International student housing inquiry",
                    }}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
                  >
                    Book a Showing
                  </ContactTrigger>
                  <Link
                    href="#student-rooms"
                    className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white backdrop-blur-md transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
                  >
                    View Student Rooms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                For international students
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Furnished rooms with major monthly costs included
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Moving to a new city is easier when the room is furnished and
                major monthly costs are included. ZIM.ca student rooms include
                furniture, utilities, internet, and laundry in a Nepean location
                near Algonquin College, Baseline Station, and College Square.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                International students comparing Ottawa student rentals can use
                ZIM.ca as a practical off-campus option while confirming current
                rooms, move-in dates, and showing details through the contact
                form.
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
                  Nepean student rentals
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#07111b] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#c8f535]">
                  What is included
                </p>
                <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                  All-inclusive student rooms Ottawa students can compare
                </h2>
              </div>
              <p className="section-copy text-white/58">
                The setup focuses on student essentials without adding services
                that are not part of the current ZIM.ca offering.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-[13px] font-extrabold text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Why furnished rooms help
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Less to buy, fewer accounts to set up
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished rooms can help students avoid buying large furniture
                right away. Included utilities and internet also reduce the need
                to set up separate accounts before settling into Ottawa.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                For students who want practical off-campus housing, an
                all-inclusive setup can make monthly housing costs easier to
                understand before booking a showing or applying.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">Location</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Near Algonquin College, transit, and daily needs
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca is at or near 1658-1660 Baseline Road in Nepean,
                Ottawa. The Baseline Road area places students near Algonquin
                College, Baseline Station, College Square, transit, groceries,
                food, and daily student needs.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Students should confirm their exact route and schedule, but the
                location is built around a practical west Ottawa base for
                furnished student rooms Ottawa students can compare.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Helpful checklist
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  What international students should ask before renting in Ottawa
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                These questions can help students compare student housing near
                Algonquin College and Baseline Station before choosing a room.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {checklistItems.map((item) => (
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

        <section id="student-rooms" className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Room and pricing
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished student rooms from existing ZIM.ca listings
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
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
                International student housing FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {internationalStudentFaqs.map((faq) => (
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
                  lease: "International student housing inquiry",
                }}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#c8f535] px-5 py-4 text-[13px] font-extrabold text-[#07111b] transition hover:bg-[#d6fa57]"
              >
                book a showing
              </ContactTrigger>
              <Link
                href="/parents-student-housing-ottawa"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                student housing information for parents
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                furnished student rooms in Ottawa
              </Link>
            </div>
          </div>
        </section>
        <StudentHousingResources
          links={["algonquin", "baseline", "parents", "costGuide", "september"]}
          theme="dark"
        />
        <StudentHousingCta title="Moving to Ottawa for school?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
