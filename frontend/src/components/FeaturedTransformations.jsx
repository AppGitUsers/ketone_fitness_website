import { useNavigate } from "react-router-dom";

function FeaturedTransformations() {
  const navigate = useNavigate();
  const transformations = [
    {
      name: "Arun Kumar",
      result: "Lost 15 KG in 6 Months",
      before:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      after:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    },
    {
      name: "Priya S",
      result: "Body Fat Reduced by 12%",
      before:
        "https://images.unsplash.com/photo-1546483875-ad9014c88eba",
      after:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    },
    {
      name: "Karthik R",
      result: "Gained 8 KG Muscle Mass",
      before:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      after:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    },
  ];

  return (
    <section className="py-24 bg-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SUCCESS STORIES
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Real Transformations,
            Real Results
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our members have transformed their lives through
            consistency, dedication, and expert guidance.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* Before & After */}
              <div className="grid grid-cols-2">

                <div className="relative">
                  <img
                    src={item.before}
                    alt="Before"
                    className="h-64 w-full object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    BEFORE
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={item.after}
                    alt="After"
                    className="h-64 w-full object-cover"
                  />

                  <span className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    AFTER
                  </span>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#1F1F1F]">
                  {item.name}
                </h3>

                <p className="text-[#D97706] font-semibold mt-2">
                  {item.result}
                </p>

                <p className="text-gray-600 mt-4">
                  Through structured training and nutrition
                  guidance, this member achieved remarkable
                  fitness results and improved overall health.
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-12">

          <button onClick={() => navigate("/transformations")} className="bg-[#D97706] hover:bg-[#c26a05] text-white px-8 py-4 rounded-full font-semibold transition cursor-pointer">
            View All Transformations
          </button>

        </div>

      </div>
    </section>
  );
}

export default FeaturedTransformations;