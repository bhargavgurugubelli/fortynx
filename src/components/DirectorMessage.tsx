

const DirectorMessage = () => {
  return (
    <section className="py-10 px-4 bg-white text-center">
      <h3 className="text-2xl font-bold mb-6">Words from Our Directors</h3>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Bhargav's Message */}
        <div className="p-6 border rounded-xl shadow-sm">
          <p className="text-gray-700 mb-4">
            "At Fortynx, we believe in building smart and securing tight —
            delivering cutting-edge web solutions with unmatched protection."
          </p>
          <p className="text-gray-800 font-semibold">BhargavKrishna Gurugubelli</p>
          <p className="text-sm text-blue-600">Specialization: Web Development</p>
        </div>

        {/* Pavan's Message */}
        <div className="p-6 border rounded-xl shadow-sm">
          <p className="text-gray-700 mb-4">
            "We are committed to simplifying the digital world for businesses,
            ensuring secure, scalable, and high-performing web infrastructure."
          </p>
          <p className="text-gray-800 font-semibold">PavanKumar Dopa</p>
          <p className="text-sm text-green-600">Specialization: Cybersecurity</p>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
