import React from "react";

const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border animate-pulse space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
        <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-600" />
      </div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full" />
      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6" />
    </div>
  );
};

export default ServiceCardSkeleton;
