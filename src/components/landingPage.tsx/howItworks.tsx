export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-black text-white px-6">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          How Reservation Works
        </h2>
        <p className="text-gray-400 mt-2">
          Simple 3-step limited drop system
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Step 1 */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition">
          <div className="text-red-500 text-2xl font-bold">01</div>
          <h3 className="text-xl font-semibold mt-3">Click Reserve</h3>
          <p className="text-gray-400 mt-2">
            User clicks reserve button to lock the product instantly.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition">
          <div className="text-red-500 text-2xl font-bold">02</div>
          <h3 className="text-xl font-semibold mt-3">Stock Locked (5 min)</h3>
          <p className="text-gray-400 mt-2">
            System temporarily locks stock for 5 minutes to prevent overselling.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-red-500 transition">
          <div className="text-red-500 text-2xl font-bold">03</div>
          <h3 className="text-xl font-semibold mt-3">Checkout or Expire</h3>
          <p className="text-gray-400 mt-2">
            User completes payment or reservation expires automatically.
          </p>
        </div>

      </div>
    </section>
  );
}