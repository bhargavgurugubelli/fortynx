import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-black via-[#0d1b2a] to-black text-white py-28 min-h-[90vh] flex items-center justify-center font-sans relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="w-[200%] h-[200%] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow blur-3xl rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-heading">
          Build <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Smart</span>. Locked <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Tight</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Fortynx builds modern, fast, and secure websites with built-in cybersecurity — empowering your business to grow confidently.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#services"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-md transition"
          >
            Explore Services
          </a>
          <a
            href="https://wa.me/917901247450"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-md transition"
          >
            Get Free Audit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
