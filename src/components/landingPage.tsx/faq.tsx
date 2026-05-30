import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How long does a reservation last?",
      answer:
        "Each reservation is locked for 5 minutes. During this time, the product is temporarily unavailable to other users until checkout is completed or the timer expires.",
    },
    {
      question: "What happens if the timer expires?",
      answer:
        "If checkout is not completed before the reservation timer ends, the product is automatically returned to available stock for other users.",
    },
    {
      question: "Can multiple users reserve the same item?",
      answer:
        "No. PulseDrop uses a real-time inventory lock system to prevent duplicate reservations and overselling during high-demand drops.",
    },
    {
      question: "How does PulseDrop stop bots?",
      answer:
        "PulseDrop uses queue systems, request rate limiting, reservation locking, and real-time traffic monitoring to reduce bot activity and maintain fair access.",
    },
    {
      question: "Is stock updated in real time?",
      answer:
        "Yes. Inventory updates instantly whenever a reservation is created, completed, or expired to ensure accurate stock availability.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-4">
            Support Center
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Frequently Asked
            <span className="block text-red-600">Questions</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Everything you need to know about reservations, inventory locking,
            and PulseDrop’s fair release system.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/[0.04] backdrop-blur-2xl rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-8 py-6"
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>

                <div className="text-red-500">
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-7 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}