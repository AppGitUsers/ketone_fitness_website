import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide personal training?",
    answer: "Yes, we offer one-on-one personal training sessions with certified trainers tailored to your specific fitness goals.",
  },
  {
    question: "Are diet plans included?",
    answer: "Diet consultation is included in our 6-month and 12-month plans. Personalized meal plans are also available as an add-on service.",
  },
  {
    question: "Is there a trial session?",
    answer: "Absolutely! We offer a free trial session for new members so you can experience our facilities and training style before committing.",
  },
  {
    question: "What are gym timings?",
    answer: "We are open Monday to Saturday from 5:00 AM to 10:00 PM to accommodate early birds and evening workout enthusiasts.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F3EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1F1F]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-[#1F1F1F] hover:text-[#D97706] transition text-sm sm:text-base"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-[#D97706]" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
