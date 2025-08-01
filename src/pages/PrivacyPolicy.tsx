import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="px-6">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          We respect your privacy and are committed to protecting the personal information you share with us. This policy explains what data we collect, why we collect it, how we use it, and the choices you have.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect information you provide directly (e.g., name, email, phone number), data from your interactions with our site (e.g., pages viewed, actions taken), and technical data (e.g., IP address, browser type, device information).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your information is used to deliver and improve our services, process transactions, communicate with you (including order updates via WhatsApp/SMS/email), personalize your experience, and prevent fraud or abuse.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Cookies & Tracking</h2>
        <p className="mb-4">
          We use cookies and similar tracking technologies to understand usage patterns, remember preferences, and support features. You can control cookie preferences via your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing & Disclosure</h2>
        <p className="mb-4">
          We do not sell your personal data. We may share information with trusted service providers who help operate the site or deliver services (e.g., payment processors, messaging APIs) under confidentiality obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable security measures to protect your data, but no system is completely foolproof. You play a role too—keep your credentials safe.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Your Rights</h2>
        <p className="mb-4">
          Depending on your location, you may have rights to access, correct, delete, or export your data. Contact us if you want to exercise those rights.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. When changes are significant, we’ll notify you via the site or email.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: August 1, 2025
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
