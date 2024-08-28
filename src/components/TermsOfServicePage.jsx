// src/components/TermsOfServicePage.jsx

const TermsOfServicePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <section className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our platform. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By using our platform, you agree to our terms of service. If you do not agree, you should not use our services.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">2. User Responsibilities</h2>
          <p className="text-gray-700 mb-4">
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Prohibited Activities</h2>
          <p className="text-gray-700 mb-4">
            You agree not to engage in any activities that violate any laws or regulations, or that disrupt the platform's operation.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            Our platform is provided "as is," and we disclaim all warranties to the extent permitted by law. We are not liable for any damages arising from your use of the platform.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to Terms</h2>
          <p className="text-gray-700 mb-4">
            We may update these terms from time to time. Users will be notified of any significant changes.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about these terms, please contact us at: support@stockmarket.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
