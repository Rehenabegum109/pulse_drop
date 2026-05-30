import { ShieldCheck, TimerReset, Users, Zap } from "lucide-react";

export default function WhyLimitedDrop() {
  const features = [
    {
      icon: <ShieldCheck size={34} />,
      title: "Prevent Overselling",
      desc: "Inventory is temporarily locked during checkout so the same product can't be sold twice.",
    },
    {
      icon: <Zap size={34} />,
      title: "Real-Time Concurrency",
      desc: "PulseDrop handles thousands of users reserving products simultaneously with live stock updates.",
    },
    {
      icon: <Users size={34} />,
      title: "Fair Purchase System",
      desc: "Every customer gets a fair chance to reserve limited items before stock runs out.",
    },
    {
      icon: <TimerReset size={34} />,
      title: "Auto Reservation Expiry",
      desc: "Reserved products automatically return to stock if checkout is not completed within 5 minutes.",
    },
  ];

  return (
    <section className="w-full py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 text-gray-400">
            Smart Drop System
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Why Limited Drop System?
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            PulseDrop is designed for hype releases and flash sales where
            fairness, speed, and real-time inventory management matter most.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group border border-white/10 bg-white/5 backdrop-blur-md rounded-3xl p-8 hover:border-white transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}