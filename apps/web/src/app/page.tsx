import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Buyers from "@/components/Buyers";
import About from "@/components/About";
import Values from "@/components/Values";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <HowItWorks />
        <Buyers />
        <About />
        <Values />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
