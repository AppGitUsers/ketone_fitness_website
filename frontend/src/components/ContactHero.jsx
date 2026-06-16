import bgImage from "../assets/images/bg2.jpg";

function ContactHero() {
  return (
    <section
      className="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Orange Glow Effects */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-500/20 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <span className="inline-block bg-orange-500/20 backdrop-blur-md text-orange-300 px-4 py-2 rounded-full border border-orange-400/30 font-semibold">
          CONTACT US
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-6 text-white leading-tight">
          Let's Start Your
          <br />
          <span className="text-[#D97706]">
            Fitness Journey
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-200 mt-6 text-lg">
          Have questions about memberships, personal training,
          or gym facilities? Get in touch with our team today.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;