import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="pt-24 pb-12 relative"
      style={{
        background: "linear-gradient(to right, #0A1A2F 0%, #143D5D 100%)",
      }}
    >
      <div className="max-w-screen-xl px-4 mx-auto grid lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 text-white">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight font-['Anonymous_Pro']">
            Web Development Meets{" "}
            <span className="text-green-400">Cybersecurity Excellence</span>
          </h1>
          <p className="text-xl mt-4 mb-6 text-gray-300">
          We create intelligent, high-performance digital solutions tailored to your business.
          Security is built into every layer to keep your data and users protected.
          Build Smart. Locked Tight. — because your success deserves no compromise.
          </p>
          <div className="flex flex-wrap gap-4">
         <a
  href="#about"
  className="px-5 py-3 border-2 border-green-400 text-white hover:bg-green-600 hover:border-green-600 hover:text-white rounded-md font-medium transition-colors duration-300"
>
  More About Us
</a>
            <a
              href="#contact"
              className="px-5 py-3 border-2 border-green-400 hover:bg-green-600 text-white rounded-md font-medium"
            >
              Contact Us!
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img src="/assets/images/1.jpg" alt="hacker" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
