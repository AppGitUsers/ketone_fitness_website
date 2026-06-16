function GalleryGrid() {
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={image}
                alt="Gym"
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryGrid;
