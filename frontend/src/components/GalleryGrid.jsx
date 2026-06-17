const images = [
  { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48", alt: "Modern gym equipment at Ketone Fitness" },
  { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b", alt: "Personal trainer coaching a member" },
  { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", alt: "Strength training session at the gym" },
  { src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba", alt: "Weight training area at Ketone Fitness" },
  { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61", alt: "Cardio workout session" },
  { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a", alt: "Group fitness class at Ketone Fitness" },
];

function GalleryGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PHOTOS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Inside Ketone Fitness
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-56 sm:h-72 lg:h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GalleryGrid;
