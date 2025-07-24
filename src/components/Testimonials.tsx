

const Testimonials = () => {
  return (
    <section className="bg-white py-16" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12">Real feedback from our happy partners.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 italic">“Fortynx transformed our business with a modern, secure website.”</p>
            <div className="mt-4 text-sm font-semibold text-gray-700">– A Satisfied Restaurant Owner</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 italic">“Highly recommend their cyber security services. Professional and responsive!”</p>
            <div className="mt-4 text-sm font-semibold text-gray-700">– Tech Startup CEO</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <p className="text-gray-800 italic">“Quick deployment and amazing support. Great team!”</p>
            <div className="mt-4 text-sm font-semibold text-gray-700">– Ecommerce Owner</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
