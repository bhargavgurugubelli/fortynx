import { useEffect, useRef, useState } from "react";

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = [25, 100, 1]; // 1 for ∞

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const durations = [1000, 1000, 1000];

    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / (durations[i] / 20));

      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 20);
    });
  };

  return (
    <section id="about" className="bg-white pt-12 pb-16" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black font-heading">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Company Description */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          Fortynx is a modern tech company specializing in
          <span className="text-orange-500 font-semibold"> web development</span> and
          <span className="text-orange-500 font-semibold"> cybersecurity</span>.
          Based in <span className="text-orange-500 font-semibold">Hyderabad</span> with a branch in
          <span className="text-orange-500 font-semibold"> Srikakulam</span>, we build fast, secure, and scalable digital solutions for businesses of all sizes.
          <br /><br />
          Whether you're launching a website or securing your systems, our goal is simple: deliver smart technology that works — with speed, reliability, and trust.
        </p>

        {/* Leadership Messages */}
        <div className="py-12 px-4 mt-16 text-center">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Bhargav's Message */}
            <div className="p-8 border rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition-all duration-300">
              <p className="text-gray-700 text-lg italic mb-6">
                “At Fortynx, we believe in building smart and securing tight — delivering cutting-edge web solutions with unmatched protection.”
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">BhargavKrishna Gurugubelli</p>
              </div>
            </div>

            {/* Pavan's Message */}
            <div className="p-8 border rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition-all duration-300">
              <p className="text-gray-700 text-lg italic mb-6">
                “We are committed to simplifying the digital world for businesses, ensuring secure, scalable, and high-performing web infrastructure.”
              </p>
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-800">Pavan Dopa</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Counters */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-black font-heading">{counts[0]}+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black font-heading">{counts[1]}%</h3>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-black font-heading">
              {counts[2] === 1 ? "∞" : counts[2]}
            </h3>
            <p className="text-gray-600 mt-2">Security Commitment</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            📍 Head Office: Hyderabad, India<br />
            🏢 Branch Office: Srikakulam, Andhra Pradesh, India
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
