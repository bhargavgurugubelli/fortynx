const About = () => {
  return (
<section id="about" className="bg-slate-100 pt-12 pb-16">
  <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-extrabold text-gray-900">Who We Are</h2>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Fortynx is a modern tech company specializing in building cutting-edge websites and providing strong cybersecurity solutions for businesses of all sizes.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Web Development</h3>
        <p className="text-gray-600">
          We craft responsive, lightning-fast websites that boost your business presence online and convert visitors into customers.
        </p>
      </div>
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Locked-Tight Security</h3>
        <p className="text-gray-600">
          Our cybersecurity experts secure your data, servers, and infrastructure from modern-day threats and vulnerabilities.
        </p>
      </div>
      <div className="bg-white shadow rounded-2xl p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailored SaaS Solutions</h3>
        <p className="text-gray-600">
          Need a custom SaaS platform? We help you build, scale, and deploy smart cloud software that meets your exact needs.
        </p>
      </div>
    </div>
  </div>
</section>


  );
};

export default About;
