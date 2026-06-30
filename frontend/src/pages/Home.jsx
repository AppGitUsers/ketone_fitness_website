import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WorkoutVideos from "../components/WorkoutVideos";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Ketone Fitness | Best Gym in Hosur, Tamil Nadu – Personal Training & Membership"
        description="Ketone Fitness is Hosur's premier gym offering personal training, weight loss, muscle gain, and flexible membership plans. Join 500+ members transforming their bodies."
        canonical="https://www.ketonefitness.com/"
      />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WorkoutVideos />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}

export default Home;
