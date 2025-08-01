// src/pages/Blog.tsx
import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="pt-24 px-6 min-h-full bg-white">
      <div className="max-w-4xl mx-auto text-center pb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to the QuickBill Blog</h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover how QuickBill is transforming restaurant operations with smart billing, instant WhatsApp updates, and seamless kitchen workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose QuickBill?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🔄 Instant billing system for restaurants and food outlets</li>
              <li>📤 Automatic WhatsApp order updates sent to customers</li>
              <li>👨‍🍳 Kitchen-friendly dashboard to update food status</li>
              <li>📱 Mobile-first UI for smooth user experience</li>
              <li>📊 Sales tracking and invoice history</li>
              <li>🎁 5-day free trial to explore all features</li>
            </ul>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden ml-12">
            <img
              src="/assets/images/quickbill blog.png"
              alt="QuickBill Blog Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
