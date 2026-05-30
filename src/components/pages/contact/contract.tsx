import { useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <p className="uppercase tracking-[6px] text-gray-500 mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Let’s Build
            <br />
            Something Massive.
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            PulseDrop is designed for scalable high-demand product drops,
            reservation systems, and real-time stock management.
            Reach out for collaborations, partnerships, or platform access.
          </p>

          <div className="space-y-6">

            <div className="border border-gray-800 bg-zinc-950 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <h3 className="text-lg font-semibold">
                contact@pulsedrop.com
              </h3>
            </div>

            <div className="border border-gray-800 bg-zinc-950 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Support</p>
              <h3 className="text-lg font-semibold">
                24/7 Reservation Monitoring
              </h3>
            </div>

            <div className="border border-gray-800 bg-zinc-950 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Security</p>
              <h3 className="text-lg font-semibold">
                JWT Auth + Protected Checkout
              </h3>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="border border-gray-800 bg-zinc-950 rounded-3xl p-8">
          
          <h3 className="text-3xl font-bold mb-8">
            Send Message
          </h3>

          {sent ? (
            <div className="border border-green-500/30 bg-green-500/10 rounded-2xl p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">
                Message Sent 🚀
              </h2>

              <p className="text-gray-300">
                We’ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black border border-gray-800 rounded-xl p-4 outline-none focus:border-red-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-black border border-gray-800 rounded-xl p-4 outline-none focus:border-red-500 transition"
              />

              <textarea
                placeholder="Your Message"
                rows={6}
                className="bg-black border border-gray-800 rounded-xl p-4 outline-none resize-none focus:border-red-500 transition"
              />

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 transition py-4 rounded-xl font-semibold text-lg"
              >
                Send Message
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}