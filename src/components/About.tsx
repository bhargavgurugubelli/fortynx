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
      { threshold: 1.0 }
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
    const durations = [1000, 1000, 1000]; // in ms

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

        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
          Fortynx is a forward-thinking tech company headquartered in the{" "}
          <span className="text-orange-500 font-semibold">Hyderabad</span>, 
          with a growing presence in <span className="text-orange-500 font-semibold">Srikakulam</span>. 
          We are founded with a clear mission: to empower businesses with secure, scalable digital solutions.
          <br /><br />
          We combine speed, smart design, and robust cybersecurity to help companies grow — confidently and securely. 
          Our team believes in building not just software, but long-term trust.
        </p>

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
