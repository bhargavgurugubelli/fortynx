import React from "react";

const ServiceDetailSkeleton: React.FC = () => {
  return (
    <div className="px-6 pt-20 max-w-6xl mx-auto animate-pulse space-y-6">
      {/* Breadcrumb Placeholder */}
      <div className="h-4 w-40 bg-gray-200 rounded" />

      <div className="flex flex-col md:flex-row-reverse items-start gap-8">
        {/* Right Image Column */}
        <div className="md:w-1/2 w-full space-y-4">
          <div className="w-full h-64 bg-gray-300 rounded-xl" />
          <div className="h-10 w-1/2 bg-gray-300 rounded-full mx-auto" />
        </div>

        {/* Left Text Column */}
        <div className="md:w-1/2 w-full space-y-4">
          <div className="h-8 bg-gray-300 w-3/4 rounded" />
          <div className="h-4 bg-gray-200 w-full rounded" />
          <div className="h-4 bg-gray-200 w-5/6 rounded" />
          <div className="h-4 bg-gray-200 w-2/3 rounded" />

          {/* Feature blocks */}
          <div className="mt-6 space-y-2">
            <div className="h-6 bg-gray-300 w-1/3 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="h-20 bg-gray-200 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailSkeleton;
