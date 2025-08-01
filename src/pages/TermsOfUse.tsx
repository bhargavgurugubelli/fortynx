import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="px-6">
      <div className="max-w-4xl mx-auto py-12 flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>

        <p>
          By accessing or using our platform, you agree to be bound by these Terms of Use. Please read them carefully. If you do not agree, do not use the service.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Acceptance of Terms</h2>
        <p>
          These terms constitute a binding agreement between you and us. We may update them occasionally; continued use after changes implies acceptance.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. User Responsibilities</h2>
        <p>
          You agree to use the service lawfully, provide accurate information, and keep credentials secure. Unauthorized access or misuse is prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-6">3. Account & Authentication</h2>
        <p>
          Accounts are personal. You are responsible for all activity under your account. Notify us immediately if you suspect unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold mt-6">4. Payments & Billing</h2>
        <p>
          Payment terms are governed by the selected plan. Fees may be non-refundable unless otherwise stated. You authorize us to charge methods on file.
        </p>

        <h2 className="text-2xl font-semibold mt-6">5. Limitations of Liability</h2>
        <p>
          We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid in the preceding period.
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Termination</h2>
        <p>
          We may suspend or terminate access for violations or at our discretion. You may cancel your account per the cancellation policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the jurisdiction where our company is registered, without regard to conflict of laws principles.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: August 1, 2025
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
