import React from "react";

const Disclaimer: React.FC = () => {
  return (
    <div className="px-6">
      <div className="max-w-4xl mx-auto py-12 flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-2">Disclaimer</h1>

        <p>
          The content on this website is for general informational purposes only. We do our best to ensure accuracy, but we make no warranties about completeness, reliability, or suitability of the information.
        </p>

        <p>
          This site may contain links to third-party websites. We are not responsible for their content, policies, or practices.
        </p>

        <p>
          Use this site at your own risk. We are not liable for any losses or damages arising from its use.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: August 1, 2025
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
