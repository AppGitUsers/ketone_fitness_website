function PersonalTraining() {
  return (
    <section className="py-24 bg-[#F7F3EC]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-5xl font-bold mb-6">
              Personal Training
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Get one-on-one coaching from certified trainers.
              Customized workout plans, nutrition guidance,
              and continuous progress tracking.
            </p>

          </div>

          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
            alt="Trainer"
            className="rounded-3xl"
          />

        </div>

      </div>

    </section>
  );
}

export default PersonalTraining;