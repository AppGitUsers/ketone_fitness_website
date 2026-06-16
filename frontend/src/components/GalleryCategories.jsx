function GalleryCategories() {
  const categories = [
    "Gym Interior",
    "Equipment",
    "Workout Sessions",
    "Personal Training",
    "Transformations",
    "Events",
  ];

  return (
    <section className="py-12 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((item, index) => (
            <button
              key={index}
              className="px-6 py-3 rounded-full bg-[#F7F3EC] hover:bg-[#D97706] hover:text-white transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}

export default GalleryCategories;