import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AvailabilityBar from "@/components/AvailabilityBar";
import HomepageSeoSections from "@/components/HomepageSeoSections";
import FeaturedHomes from "@/components/FeaturedHomes";
import FloatingWalkRoute from "@/components/FloatingWalkRoute";
import GallerySlideshow from "@/components/GallerySlideshow";
import ImportantNotes from "@/components/ImportantNotes";
import IncludedValueCalculator from "@/components/IncludedValueCalculator";
import MoveInChecklist from "@/components/MoveInChecklist";
import ValueProps from "@/components/ValueProps";
import StudentResources from "@/components/StudentResources";
import BlogPreview from "@/components/BlogPreview";
import CommuteSnapshot from "@/components/CommuteSnapshot";
import ShoppingHubs from "@/components/ShoppingHubs";
import LandlordCTA from "@/components/LandlordCTA";
import StudentHousingCta from "@/components/StudentHousingCta";
import StudentHousingResources from "@/components/StudentHousingResources";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import type { Metadata } from "next";
import { homepageFaqs } from "@/data/homepageFaqs";

export const metadata: Metadata = {
  title: {
    absolute:
      "Ottawa Student Rentals Near Algonquin College | Furnished Rooms from $850 | ZIM.ca",
  },
  description:
    "Furnished all-inclusive student rooms in Nepean, Ottawa near Algonquin College and Baseline Station. Rooms from $850/month with utilities, internet, laundry and furniture included. Book a showing today.",
  keywords: [
    "Ottawa student rentals",
    "student rentals near Algonquin College",
    "furnished student rooms Ottawa",
    "Nepean student rentals",
    "student rooms near Baseline Station",
    "student rentals near College Square",
  ],
  alternates: {
    canonical: "https://www.zim.ca/",
  },
  openGraph: {
    title:
      "Ottawa Student Rentals Near Algonquin College | Furnished Rooms from $850 | ZIM.ca",
    description:
      "Furnished all-inclusive student rooms in Nepean, Ottawa near Algonquin College and Baseline Station. Rooms from $850/month with utilities, internet, laundry and furniture included.",
    url: "https://www.zim.ca/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RealEstateAgent",
      "@id": "https://www.zim.ca/#real-estate-agent",
      name: "ZIM.ca",
      url: "https://www.zim.ca/",
      image: "https://www.zim.ca/images/main.png",
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
          name: "Student rentals and furnished student rooms",
          serviceType: "Student rentals / furnished student rooms",
          areaServed: ["Ottawa", "Nepean"],
        },
      },
    },
    {
      "@type": "ApartmentComplex",
      "@id": "https://www.zim.ca/#student-rentals",
      name: "ZIM.ca Student Rentals",
      url: "https://www.zim.ca/",
      image: "https://www.zim.ca/images/main.png",
      description:
        "All-inclusive furnished student rooms in Nepean, Ottawa near Algonquin College, Baseline Station, and College Square.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1658-1660 Baseline Road",
        addressLocality: "Ottawa",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Furnished rooms" },
        { "@type": "LocationFeatureSpecification", name: "Utilities included" },
        { "@type": "LocationFeatureSpecification", name: "Internet included" },
        { "@type": "LocationFeatureSpecification", name: "Laundry included" },
      ],
      offers: {
        "@type": "Offer",
        name: "Furnished student rooms from $850/month",
        price: "850",
        priceCurrency: "CAD",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.zim.ca/#faq",
      mainEntity: homepageFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <AvailabilityBar />
        </ScrollReveal>
        <ScrollReveal>
          <HomepageSeoSections />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedHomes />
        </ScrollReveal>
        <ScrollReveal>
          <GallerySlideshow />
        </ScrollReveal>
        <ScrollReveal>
          <ImportantNotes />
        </ScrollReveal>
        <ScrollReveal>
          <IncludedValueCalculator />
        </ScrollReveal>
        <ScrollReveal>
          <MoveInChecklist />
        </ScrollReveal>
        <ScrollReveal>
          <ValueProps />
        </ScrollReveal>
        <ScrollReveal>
          <StudentResources />
        </ScrollReveal>
        <ScrollReveal>
          <BlogPreview />
        </ScrollReveal>
        <ScrollReveal>
          <CommuteSnapshot />
        </ScrollReveal>
        <ScrollReveal>
          <ShoppingHubs />
        </ScrollReveal>
        <ScrollReveal>
          <LandlordCTA />
        </ScrollReveal>
        <ScrollReveal>
          <StudentHousingResources
            links={[
              "algonquin",
              "baseline",
              "parents",
              "international",
              "costGuide",
            ]}
          />
        </ScrollReveal>
        <StudentHousingCta />
      </main>
      <Footer />
      <FloatingWalkRoute />
      <ContactDrawer />
    </>
  );
}
