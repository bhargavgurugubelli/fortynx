

const CTA = () => {
  return (
    <section className="bg-blue-50 py-16 px-4" id="cta">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-blue-700 mb-8">
          Join hundreds of businesses growing smart and staying secure with Fortynx.
        </p>
        <a
          href="/signup"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
