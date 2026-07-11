import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoWeHelp from "@/components/WhoWeHelp";
import About from "@/components/About";
import Values from "@/components/Values";
import AreasWeCover from "@/components/AreasWeCover";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Divine Success Ltd",
  description:
    "House, office and warehouse clearance plus waste management across the M4 corridor — London to Bristol. Licensed waste carrier. Reuse and recycling first, landfill last.",
  url: "https://divine-success.com",
  email: "info@divine-success.com",
  telephone: "+447575342732",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Shaftesbury Centre, Percy Street",
    addressLocality: "Swindon",
    addressRegion: "England",
    postalCode: "SN2 2AZ",
    addressCountry: "GB",
  },
  areaServed: [
    "West London",
    "Slough",
    "Windsor",
    "Reading",
    "Newbury",
    "Oxford",
    "Swindon",
    "Chippenham",
    "Bath",
    "Bristol",
  ],
  identifier: {
    "@type": "PropertyValue",
    name: "Waste Carrier Registration",
    value: "CBDU647280",
  },
  sameAs: [
    "https://www.linkedin.com/company/divine-success/",
    "https://www.facebook.com/thedivinesucces/",
    "https://www.instagram.com/_divinesuccess",
    "https://x.com/_divinesuccess",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <HowItWorks />
        <WhoWeHelp />
        <About />
        <Values />
        <AreasWeCover />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
