const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-black pt-20 pb-16 px-4 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
            We are a team of passionate engineers delivering top-notch Web Development and Cybersecurity solutions. From sleek websites and mobile apps to powerful dashboards and cloud-based SaaS platforms — we bring ideas to life with modern tech.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            We also protect what we build. Our cybersecurity services include penetration testing, network hardening, and expert security consulting to keep your digital assets safe.
          </p>
        </div>
        <div className="w-full">
          <img
            src="/assets/img/about-illustration.svg"
            alt="About illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
