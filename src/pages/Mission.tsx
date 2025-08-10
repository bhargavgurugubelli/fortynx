import React from "react";
import { ShieldCheck, Cpu, Globe, Users } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">


      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Our Mission
      </h1>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-gray-700 dark:text-gray-300 text-center">
        Fortynx is committed to delivering smart, secure, and scalable digital
        solutions that empower businesses worldwide to succeed with confidence.
      </p>

      {/* Key Mission Points with Icons */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        <div className="flex items-start space-x-4">
          <ShieldCheck className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Security First
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Prioritize robust cybersecurity to protect client assets and data.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Cpu className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Innovative Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Leverage cutting-edge tech to build scalable, efficient solutions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Globe className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Global Reach
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Support businesses worldwide with reliable digital infrastructure.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Users className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Customer Focus
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Deliver user-centric solutions that drive growth and satisfaction.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-gray-200">
        Leadership Messages
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Bhargav */}
        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className="italic text-gray-800 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            “At Fortynx, we believe in building smart and securing tight —
            delivering cutting-edge web solutions with unmatched protection.”
          </p>
          <p className="font-semibold text-xl text-gray-900 dark:text-white text-right">
            BhargavKrishna Gurugubelli
          </p>
        </div>

        {/* Pavan */}
        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className="italic text-gray-800 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            “We are committed to simplifying the digital world for businesses,
            ensuring secure, scalable, and high-performing web infrastructure.”
          </p>
          <p className="font-semibold text-xl text-gray-900 dark:text-white text-right">
            Pavan Dopa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
