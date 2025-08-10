import React from "react";
import { Rocket, Eye, Globe, Lock } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white">
        Our Vision
      </h1>

      <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-12 text-center text-gray-700 dark:text-gray-300">
        To be a global leader in tech innovation and cybersecurity, trusted by
        enterprises of all sizes, delivering reliable and cutting-edge solutions
        that protect and empower.
      </p>

      {/* Vision Key Points with Icons */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-start space-x-4">
          <Rocket className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Innovation Driven
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Continuously pioneer new technologies to solve tomorrow’s challenges.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Eye className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Transparency & Trust
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Build strong relationships with clients through openness and integrity.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Globe className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Global Impact
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Expand our reach to empower businesses worldwide with trusted tech solutions.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Lock className="w-8 h-8 text-orange-500 mt-1" />
          <div>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Uncompromising Security
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Deliver resilient cybersecurity measures that safeguard client data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
