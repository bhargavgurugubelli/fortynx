import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-14 text-center text-gray-800 dark:text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1: Billing SaaS Website */}
         <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-transparent 
  hover:border-orange-500 hover:shadow-lg 
  active:border-orange-500 active:shadow-lg 
  transition-all duration-300 cursor-pointer">
            <img
              src="/assets/images/project1.png"
              alt="Billing SaaS Website"
              className="w-full h-48 object-contain mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
              Billing SaaS Platform
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              A modern billing solution tailored for small businesses to generate invoices, manage kitchen workflows, and send real-time WhatsApp order updates — all from a unified dashboard.
            </p>
          </div>

          {/* Project 2: Vegicart E-commerce */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-transparent hover:border-orange-500 hover:shadow-lg transform transition-all duration-300">
            <img
              src="/assets/images/project2.png"
              alt="Vegicart E-commerce Website"
              className="w-full h-48 object-contain mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-3">
              Vegicart – E-commerce Platform
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              A seamless e-commerce experience for purchasing fresh vegetables and fruits. Includes intuitive product filters, real-time cart updates, and mobile-first responsive design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
