const DirectorMessage = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h3 className="text-3xl font-bold mb-10 text-gray-900">Words from Our Directors</h3>

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
    </section>
  );
};

export default DirectorMessage;
