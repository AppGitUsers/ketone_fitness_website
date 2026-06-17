function PersonalTraining() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PERSONAL TRAINING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 text-[#1F1F1F] leading-tight">
              One-on-One Personal Training
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Get one-on-one coaching from certified trainers.
              Customized workout plans, nutrition guidance,
              and continuous progress tracking to ensure you reach your goals faster.
            </p>

            <ul className="mt-6 space-y-3">
              {["Customized Workout Plans", "Nutrition Guidance", "Progress Tracking", "Flexible Scheduling"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            alt="Personal trainer coaching a client at Ketone Fitness"
            className="rounded-3xl w-full h-[280px] sm:h-[380px] lg:h-[450px] object-cover shadow-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default PersonalTraining;
