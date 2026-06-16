import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

import TransformationHero from "../components/TransformationHero";
import TransformationStats from "../components/TransformationStats";
import TransformationGallery from "../components/TransformationGallery";
import SuccessStories from "../components/SuccessStories";
import TransformationVideos from "../components/TransformationVideos";

function Transformations() {
  return (
    <>
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