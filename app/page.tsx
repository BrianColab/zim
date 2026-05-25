import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedHomes from "@/components/FeaturedHomes";
import ValueProps from "@/components/ValueProps";
import StudentResources from "@/components/StudentResources";
import LandlordCTA from "@/components/LandlordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedHomes />
        <ValueProps />
        <StudentResources />
        <LandlordCTA />
      </main>
      <Footer />
    </>
  );
}
