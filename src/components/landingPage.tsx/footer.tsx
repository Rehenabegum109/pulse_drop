export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* BRAND */}
          <div className="lg:col-span-1">
            <h2 className="text-red-600 text-3xl font-bold tracking-wide">
              PulseDrop
            </h2>

            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              A real-time limited drop system built for fairness, speed, and global access.
              No bots. No unfair sellouts.
            </p>

            {/* small highlight box */}
            <div className="mt-6 p-4 border border-white/10 rounded-xl bg-white/5">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                Status
              </p>
              <p className="text-green-500 text-sm mt-1">
                ● All systems operational
              </p>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white mb-5 uppercase tracking-widest text-sm">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">About PulseDrop</li>
              <li className="hover:text-white transition cursor-pointer">Careers</li>
              <li className="hover:text-white transition cursor-pointer">Press</li>
              <li className="hover:text-white transition cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white mb-5 uppercase tracking-widest text-sm">
              Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">Help Center</li>
              <li className="hover:text-white transition cursor-pointer">Contact Support</li>
              <li className="hover:text-white transition cursor-pointer">Terms of Service</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* SOCIAL TEXT LINKS */}
          <div>
            <h3 className="text-white mb-5 uppercase tracking-widest text-sm">
              Connect
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition cursor-pointer">Twitter / X</li>
              <li className="hover:text-white transition cursor-pointer">Instagram</li>
              <li className="hover:text-white transition cursor-pointer">GitHub</li>
              <li className="hover:text-white transition cursor-pointer">Email Us</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} PulseDrop. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Built for high-demand drops ⚡ | Fair access system
          </p>
        </div>
      </div>
    </footer>
  );
}