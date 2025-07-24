import React from 'react';

const Hero: React.FC = () => {
  return (
   <section className="bg-gradient-to-r from-black to-[#0d1b2a] text-white py-24 min-h-[90vh] flex items-center justify-center text-center">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
      Build Smart. Locked Tight.
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      Fortynx delivers fast, modern websites backed by enterprise-grade cybersecurity — so your business grows with confidence and peace of mind.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="#services"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition"
      >
        Explore Services
      </a>
      <a
        href="https://wa.me/917901247450"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-semibold transition"
      >
        Get Free Audit
      </a>
    </div>
  </div>
</section>

  );
};

export default Hero;
