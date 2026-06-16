function FAQ() {
  const faqs = [
    "Do you provide personal training?",
    "Are diet plans included?",
    "Is there a trial session?",
    "What are gym timings?",
  ];

  return (
    <section className="py-24 bg-[#F7F3EC]">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl"
            >
              {faq}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;