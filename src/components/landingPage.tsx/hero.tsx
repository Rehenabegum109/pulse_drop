import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [glow, setGlow] = useState(false);
 const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setGlow((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">

      {/* Animated background glow */}
      <div
        className={`absolute w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-1000 ${
          glow ? "bg-red-600 opacity-30" : "bg-pink-600 opacity-20"
        }`}
      />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-28 h-28 bg-red-500 opacity-10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-pink-500 opacity-10 rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative text-center max-w-3xl">

        <p className="text-sm text-red-400 tracking-widest uppercase">
          Limited Drop System
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-4">
          Secure Your <span className="text-red-500">Limited Drops</span>
        </h1>

        <p className="text-gray-400 mt-6 text-lg">
          Real-time reservation system with 5-minute expiry and concurrency control.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center">

          <button className="bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600 transition"  onClick={() => navigate("/drops")}>
            Join Drop
          </button>

          <button 
            className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-900 transition"
           
          >
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}