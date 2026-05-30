export default function AboutSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT */}
        <div>
          <p className="uppercase tracking-[6px] text-gray-500 mb-4 text-sm">
            About PulseDrop
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Limited Drops.
            <br />
            Real-Time Reservation.
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-8">
            PulseDrop is a modern limited-stock reservation platform
            built for high-demand product releases.
            Users can reserve products instantly with a protected
            stock-locking system that prevents overselling during
            traffic spikes.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-2">5 Min</h3>
              <p className="text-gray-400 text-sm">
                Smart reservation timer with auto release
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-gray-400 text-sm">
                Stock-safe reservation system
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-2">Live</h3>
              <p className="text-gray-400 text-sm">
                Real-time inventory updates
              </p>
            </div>

            <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-950">
              <h3 className="text-3xl font-bold mb-2">Secure</h3>
              <p className="text-gray-400 text-sm">
                JWT authentication & protected checkout
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>

          <div className="relative border border-gray-800 bg-zinc-950 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop"
              alt="PulseDrop"
              className="w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-8">
              <h3 className="text-3xl font-bold mb-2">
                Engineered for High Demand
              </h3>

              <p className="text-gray-300">
                Prevent double booking, race conditions,
                and overselling with an advanced reservation flow.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}