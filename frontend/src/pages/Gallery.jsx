import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";
import VideoGallery from "../components/VideoGallery";
import CTASection from "../components/CTASection";
import SEO from "../components/SEO";

function Gallery() {
  return (
    <>
      <SEO
        title="Gym Gallery | Ketone Fitness Hosur – Photos & Workout Videos"
        description="Explore photos and videos of Ketone Fitness gym in Hosur. See our modern equipment, training sessions, and member workouts."
        canonical="https://www.ketonefitness.com/gallery"
      />
      <Navbar />
      <GalleryHero />
      <GalleryGrid />
      <VideoGallery />
      <CTASection />
      <Footer />
    </>
  );
}

export default Gallery;
