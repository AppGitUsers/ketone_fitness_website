import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GalleryHero from "../components/GalleryHero";
// import GalleryCategories from "../components/GalleryCategories";
import GalleryGrid from "../components/GalleryGrid";
import VideoGallery from "../components/VideoGallery";
import CTASection from "../components/CTASection";

function Gallery() {
  return (
    <>
      <Navbar />

      <GalleryHero />
      {/* <GalleryCategories /> */}
      <GalleryGrid />
      <VideoGallery />
      <CTASection />

      <Footer />
    </>
  );
}

export default Gallery;