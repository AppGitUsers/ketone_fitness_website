import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import TransformationHero from "../components/TransformationHero";
import TransformationStats from "../components/TransformationStats";
import TransformationGallery from "../components/TransformationGallery";
import SuccessStories from "../components/SuccessStories";
import TransformationVideos from "../components/TransformationVideos";
import SEO from "../components/SEO";

function Transformations() {
  return (
    <>
      <SEO
        title="Fitness Transformations | Ketone Fitness Hosur – Real Before & After Results"
        description="See real body transformation results from Ketone Fitness members in Hosur. Weight loss, muscle gain, and incredible before-and-after stories backed by expert training."
        canonical="https://www.ketonefitness.com/transformations"
      />
      <Navbar />
      <TransformationHero />
      <TransformationStats />
      <TransformationGallery />
      <SuccessStories />
      <TransformationVideos />
      <CTASection />
      <Footer />
    </>
  );
}

export default Transformations;
