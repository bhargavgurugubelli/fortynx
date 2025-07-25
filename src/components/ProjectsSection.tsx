import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1: Billing SaaS Website */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/assets/images/project1.png" 
              alt="Billing SaaS Website" 
              className="w-full h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">
              Billing SaaS Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              A powerful platform for small shops to generate invoices, manage kitchen orders, and send automated WhatsApp updates.
            </p>
          </div>

          {/* Project 2: Vegicart E-commerce */}
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/assets/images/project2.png" 
              alt="Vegicart E-commerce Website" 
              className="w-full h-48 object-contain mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">
              Vegicart – E-commerce Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              A clean and responsive online store for buying fresh vegetables and fruits. Features real-time cart, product filters, order tracking, and mobile-first design.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
