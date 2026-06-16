import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/GoogleMap";

function Contact() {
  return (
    <>
      <Navbar />

      <ContactHero />
      <ContactSection />
      <GoogleMap />

      <Footer />
    </>
  );
}

export default Contact;