import { Shield, Lock, Activity, Users } from "lucide-react";

export default function AntiBotProtection() {
  const systems = [
    {
      icon: <Shield size={32} />,
      title: "Queue System",
      desc: "Users enter a smart waiting queue during high-traffic drops to prevent server overload.",
    },
    {
      icon: <Lock size={32} />,
      title: "Reservation Lock",
      desc: "Products are temporarily locked during checkout to stop duplicate purchases.",
    },
    {
      icon: <Activity size={32} />,
      title: "Rate Limiting",
      desc: "Suspicious rapid requests are automatically restricted for a fair shopping experience.",
    },
    {
      icon: <Users size={32} />,
      title: "Fair Access",
      desc: "Every customer gets equal access to limited products during live releases.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-4">
            Security Layer
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight uppercase">
            Anti-Bot
            <span className="block text-red-600">Protection</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            PulseDrop uses intelligent traffic protection systems to stop bots,
            reduce unfair purchases, and maintain real-time stability during
            high-demand product drops.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((item, index) => (
            <div
              key={index}
              className="group relative border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 overflow-hidden hover:border-red-500/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}