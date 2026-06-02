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
import { algonquinHousingGuideFaqs } from "@/data/algonquinHousingGuideFaqs";

const canonicalUrl =
  "https://www.zim.ca/algonquin-college-off-campus-housing-guide";
const pageTitle =
  "Algonquin College Off-Campus Housing Guide | Student Rentals Ottawa | ZIM.ca";
const pageDescription =
  "Looking for off-campus housing near Algonquin College? Learn what students should check before renting in Ottawa, including location, rent, utilities, furniture, transit and furnished room options near Baseline Station.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  keywords: [
    "Algonquin College off-campus housing",
    "student rentals near Algonquin College",
    "furnished student rooms near Algonquin College",
    "Ottawa student rentals",
    "Nepean student rentals",
    "student housing near Baseline Station",
    "student rooms near College Square",
    "all-inclusive student rooms Ottawa",
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
        url: "/images/og-zim-student-rentals.jpg",
        width: 1200,
        height: 630,
        alt: "Students entering the ZIM.ca rental at 1658-1660 Baseline Road in Ottawa",
      },
    ],
  },
};

const housingChecks = [
  "Check what is included in rent",
  "Confirm whether the room is furnished",
  "Ask about utilities and internet",
  "Understand transit access",
  "Check laundry access",
  "Confirm move-in dates",
  "Ask how showings and applications work",
];

const signingQuestions = [
  "What is included in the monthly rent?",
  "Is the room furnished?",
  "Is internet included?",
  "Is laundry included?",
  "How close is it to school or transit?",
  "What move-in dates are available?",
  "How do I book a showing?",
  "Who do I contact with questions?",
  "Are there any extra fees or deposits?",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Algonquin College Off-Campus Housing Guide",
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
  mainEntity: algonquinHousingGuideFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function AlgonquinCollegeHousingGuidePage() {
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
              alt="Students entering the ZIM.ca student rental at 1658-1660 Baseline Road in Ottawa"
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
                  Practical student housing guide
                </p>
                <h1
                  className="mb-6 font-heading font-extrabold leading-[0.9] text-white sm:leading-[0.86]"
                  style={{ fontSize: "clamp(3.1rem, 7vw, 6.8rem)" }}
                >
                  Algonquin College Off-Campus Housing Guide
                </h1>
                <p className="max-w-[650px] text-[1.02rem] font-medium leading-[1.65] text-white/72 sm:text-[1.16rem]">
                  A practical guide for students and parents comparing housing
                  options near Algonquin College, Baseline Station, College
                  Square, and Nepean.
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
                      lease: "Algonquin housing guide inquiry",
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
              <p className="section-kicker text-[#60710f]">Where to start</p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Compare the full housing picture, not only rent
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Finding Algonquin College off-campus housing is easier when
                students compare the total monthly cost, location, transit
                access, furniture, utilities, internet, lease timing, and the
                showing or application process.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                A lower advertised rent can still be hard to budget if furniture
                or separate bills are not included. A more complete comparison
                helps students and parents understand what the room will
                actually require before move-in.
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
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_420px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  What to look for
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Practical checks before choosing a room
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Use these points to compare Ottawa student rentals in a way that
                keeps the total cost and daily routine clear.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {housingChecks.map((item) => (
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
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#c8f535]">
                Areas to consider
              </p>
              <h2 className="section-heading-tight headline-on-dark mt-4 text-white">
                Nepean, Baseline Station, and College Square
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-white/58">
                Nepean, the Baseline Station area, College Square, and the
                Baseline Road area can be practical for students who want access
                to Algonquin College, transit, groceries, food, and daily
                student needs.
              </p>
              <p className="section-copy max-w-none text-white/58">
                Students may also compare transit-connected areas toward
                Carleton University and uOttawa depending on schedule and route.
                Exact commute times should be confirmed before choosing housing.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Furnished or unfurnished
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                Furnished rooms can reduce move-in work
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Furnished student rooms near Algonquin College can reduce the
                cost and effort of moving, especially for students coming from
                outside Ottawa. A furnished room may already include basics like
                a bed, desk, and chair.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                Unfurnished rentals can still work well for some students,
                especially if they already own furniture or plan to stay long
                term. The important step is comparing what each option requires
                before move-in.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <p className="section-kicker text-[#60710f]">
                Bills and budgeting
              </p>
              <h2 className="section-heading-tight mt-4 text-zinc-950">
                All-inclusive rooms vs separate bills
              </h2>
            </div>
            <div className="grid gap-5">
              <p className="section-copy max-w-none text-zinc-600">
                Some student rentals include utilities and internet in the rent.
                Others require students to budget separately for hydro, water,
                internet, furniture, and laundry access. Both setups can work,
                but they should not be compared by base rent alone.
              </p>
              <p className="section-copy max-w-none text-zinc-600">
                All-inclusive student rooms Ottawa students compare can make
                budgeting easier because more of the monthly cost is visible
                upfront. That does not mean one option is always cheaper; it
                means students can compare the total setup more clearly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f1e8] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Before signing
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Questions students should ask before signing
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Ask clear questions early so pricing, included items, and
                move-in expectations are easier to compare.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {signingQuestions.map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-black/[0.08] bg-white px-4 py-4 text-[13px] font-extrabold text-zinc-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="zimca-rooms" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_430px] lg:items-end">
              <div>
                <p className="section-kicker text-[#60710f]">
                  Why students consider ZIM.ca
                </p>
                <h2 className="section-heading-tight mt-4 text-zinc-950">
                  Furnished student rooms near Algonquin College
                </h2>
              </div>
              <p className="section-copy text-zinc-600">
                Availability and pricing may vary. Contact us to confirm current
                rooms and move-in dates.
              </p>
            </div>
            <div className="mb-8 grid gap-5 lg:grid-cols-2">
              <p className="section-copy max-w-none text-zinc-600">
                ZIM.ca offers furnished student rooms in Nepean, Ottawa near
                Algonquin College, Baseline Station, and College Square. Current
                room information shows utilities, internet, and laundry included
                with rooms from $850/month depending on room and setup.
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
                Algonquin off-campus housing FAQ
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {algonquinHousingGuideFaqs.map((faq) => (
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
                  lease: "Algonquin housing guide inquiry",
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
                href="/student-rentals-nepean-baseline-station"
                className="inline-flex items-center justify-center rounded-[10px] border border-white/12 bg-white/[0.08] px-5 py-4 text-[13px] font-extrabold text-white transition hover:border-[#c8f535]/60 hover:bg-white/[0.12]"
              >
                student rooms near Baseline Station
              </Link>
            </div>
          </div>
        </section>
        <StudentHousingResources
          links={["algonquin", "baseline", "costGuide", "parents", "comparison"]}
          theme="dark"
        />
        <StudentHousingCta title="Ready to compare student rooms near Algonquin?" />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
