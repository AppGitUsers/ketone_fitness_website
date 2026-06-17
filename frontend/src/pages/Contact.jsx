import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";
import GoogleMap from "../components/GoogleMap";
import SEO from "../components/SEO";

function Contact() {
  return (
    <>
      <SEO
        title="Contact Ketone Fitness | Get in Touch – Hosur, Tamil Nadu"
        description="Contact Ketone Fitness in Hosur, Tamil Nadu. Enquire about memberships, personal training, and gym facilities. We'll get back to you shortly."
        canonical="https://www.ketonefitness.com/contact"
      />
      <Navbar />
      <ContactHero />
      <ContactSection />
      <GoogleMap />
      <Footer />
    </>
  );
}

export default Contact;
