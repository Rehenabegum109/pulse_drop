import { Globe, Users, ShoppingBag, Activity } from "lucide-react";

export default function GlobalCommunity() {
  const stats = [
    {
      icon: <Globe size={30} />,
      number: "42+",
      label: "Countries Connected",
    },
    {
      icon: <Users size={30} />,
      number: "18K+",
      label: "Users Online Now",
    },
    {
      icon: <ShoppingBag size={30} />,
      number: "250K+",
      label: "Successful Reservations",
    },
    {
      icon: <Activity size={30} />,
      number: "Live",
      label: "Real-Time Drop Activity",
    },
  ];

  const purchases = [
    "Jordan 4 Retro reserved in Tokyo 🇯🇵",
    "PS5 Console purchased in New York 🇺🇸",
    "Essentials Hoodie reserved in London 🇬🇧",
    "Nike Dunk Low purchased in Dubai 🇦🇪",
    "Gaming GPU reserved in Berlin 🇩🇪",
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-500 text-sm mb-4">
            Global Network
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Global
            <span className="block text-red-600">
              Community
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed">
            PulseDrop powers real-time limited product releases for a growing
            global community of collectors, gamers, and sneaker enthusiasts.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 hover:border-red-500/40 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-4xl font-black mb-2">
                {item.number}
              </h3>

              <p className="text-gray-400 uppercase tracking-wide text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Live Purchases */}
        <div className="border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-xl overflow-hidden">
          
          <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
            <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>

            <h3 className="uppercase tracking-[0.3em] text-sm text-gray-300">
              Live Purchase Activity
            </h3>
          </div>

          <div className="divide-y divide-white/10">
            {purchases.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-5 hover:bg-white/[0.03] transition-all duration-300"
              >
                <p className="text-gray-300">
                  {item}
                </p>

                <span className="text-red-500 text-sm uppercase tracking-wide">
                  Just Now
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}