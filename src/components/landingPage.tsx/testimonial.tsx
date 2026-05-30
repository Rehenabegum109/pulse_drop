import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Carter",
      role: "Sneaker Collector",
      review:
        "Finally a fair drop system. I actually had time to complete checkout before stock disappeared.",
    },
    {
      name: "Sarah Kim",
      role: "Streetwear Buyer",
      review:
        "No more instant sellouts. The reservation timer completely changed the experience.",
    },
    {
      name: "Marcus Lee",
      role: "Gaming Enthusiast",
      review:
        "PulseDrop feels smooth even during massive traffic spikes. Super clean experience.",
    },
    {
      name: "Daniel Brooks",
      role: "Tech Collector",
      review:
        "The anti-bot protection and queue system make every release feel balanced and fair.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-4">
            Community Feedback
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Trusted By
            <span className="block text-red-600">
              Real Collectors
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            Thousands of users trust PulseDrop for fair access, real-time
            reservations, and smooth limited product releases.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-8 overflow-hidden hover:border-red-500/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-transparent"></div>

              <div className="relative z-10">
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 text-red-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-xl leading-relaxed text-gray-200 mb-8">
                  “{item.review}”
                </p>

                {/* User */}
                <div>
                  <h3 className="font-bold text-lg uppercase tracking-wide">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mt-1">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Bottom Animated Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}