import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-12">
          Hear from businesses that trusted Fortynx to elevate their digital presence.
        </p>

        {/* Marquee-style scroll */}
        <div className="overflow-hidden relative">
          <div className="flex w-max animate-marquee space-x-8">
            {[1, 2].map((_, i) => (
              <React.Fragment key={i}>
                <TestimonialCard
                  quote="Fortynx transformed our business with a modern, secure website tailored to our brand."
                  name="Restaurant Owner"
                  location="Hyderabad, India"
                />
                <TestimonialCard
                  quote="Highly recommend their cybersecurity solutions. The team is professional, proactive, and efficient."
                  name="CEO, Tech Startup"
                  location="Hyderabad, India"
                />
                <TestimonialCard
                  quote="Quick deployment, outstanding support, and excellent user experience. Truly a great team."
                  name="Ecommerce Business Owner"
                  location="Hyderabad, India"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) => (
  <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition w-80 shrink-0">
    <p className="text-gray-800 italic text-base md:text-lg">“{quote}”</p>
    <div className="mt-6">
      <div className="text-gray-900 font-semibold text-base">{name}</div>
      <div className="text-sm text-gray-500">{location}</div>
    </div>
  </div>
);

export default Testimonials;
