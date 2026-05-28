import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedHomes from "@/components/FeaturedHomes";
import ImportantNotes from "@/components/ImportantNotes";
import ValueProps from "@/components/ValueProps";
import StudentResources from "@/components/StudentResources";
import ShoppingHubs from "@/components/ShoppingHubs";
import LandlordCTA from "@/components/LandlordCTA";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedHomes />
        <ImportantNotes />
        <ValueProps />
        <StudentResources />
        <ShoppingHubs />
        <LandlordCTA />
      </main>
      <Footer />
      <ContactDrawer />
    </>
  );
}
