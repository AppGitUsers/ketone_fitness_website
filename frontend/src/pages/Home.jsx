import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
// import PlanMembership from "../components/PlanMembership";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      {/* <PlanMembership /> */}
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;