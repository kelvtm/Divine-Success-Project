import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
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
        <Services />
        <HowItWorks />
        <WhoWeHelp />
        <About />
        <Values />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
