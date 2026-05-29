import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AvailabilityBar from "@/components/AvailabilityBar";
import FeaturedHomes from "@/components/FeaturedHomes";
import GallerySlideshow from "@/components/GallerySlideshow";
import ImportantNotes from "@/components/ImportantNotes";
import IncludedValueCalculator from "@/components/IncludedValueCalculator";
import MoveInChecklist from "@/components/MoveInChecklist";
import ValueProps from "@/components/ValueProps";
import StudentResources from "@/components/StudentResources";
import CommuteSnapshot from "@/components/CommuteSnapshot";
import ShoppingHubs from "@/components/ShoppingHubs";
import LandlordCTA from "@/components/LandlordCTA";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ottawa Student Rentals Near Algonquin College",
  description:
    "All-inclusive furnished student rooms in Nepean, Ottawa at 1658-1660 Baseline Road. Minutes from Algonquin College and welcoming students from all Ottawa schools.",
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "ZIM.ca Student Rentals",
  url: "https://www.zim.ca",
  image: "https://www.zim.ca/images/main.png",
  description:
    "All-inclusive furnished student rooms in Nepean, Ottawa near Algonquin College, with utilities, internet, laundry, and respectful shared living.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1658-1660 Baseline Road",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Ottawa", "Nepean", "Algonquin College", "Carleton University"],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Furnished rooms" },
    { "@type": "LocationFeatureSpecification", name: "Utilities included" },
    {
      "@type": "LocationFeatureSpecification",
      name: "Gigabit internet included",
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "In-unit laundry included",
    },
    { "@type": "LocationFeatureSpecification", name: "Parking available" },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Unit A private room",
      price: "900",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Unit B single room",
      price: "850",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
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
        <AvailabilityBar />
        <FeaturedHomes />
        <GallerySlideshow />
        <ImportantNotes />
        <IncludedValueCalculator />
        <MoveInChecklist />
        <ValueProps />
        <StudentResources />
        <CommuteSnapshot />
        <ShoppingHubs />
        <LandlordCTA />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
