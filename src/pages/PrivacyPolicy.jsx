import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-black to-blue-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-8">Privacy Policy</h1>
        <p className="text-blue-200 mb-10">
          Effective Date: June 1, 2025
        </p>

        {/* Intro */}
        <p className="text-blue-200 mb-6">
           KrisLynx (“we,” “our,” or “us”) is committed to protecting your privacy. This policy explains how we collect, use, share, and protect your personal information when you use our websites, apps, and AI-powered platforms such as FearLink, TradeSphere Global, SmartSchool Suite, and SelfMate.
        </p>

        {/* Sections */}
        <div className="space-y-8 text-blue-300 text-sm leading-relaxed">
          {/* What We Collect */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal details like name, email, phone when you contact us or apply for careers</li>
              <li>Usage data including IP address, device info, pages visited, interactions</li>
              <li>Health & biometric data (only with explicit consent in products like FearLink)</li>
              <li>Location data for geo-aware services if you enable them</li>
            </ul>
          </div>

          {/* How We Use */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">2. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your messages or job applications</li>
              <li>To improve our services, user experience, and product security</li>
              <li>To personalize AI-based experiences (e.g. SmartSchool insights, FearLink alerts)</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">3. Sharing of Information</h2>
            <p>
              We never sell your personal data. We may share your information only:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>With trusted service providers under strict confidentiality</li>
              <li>With law enforcement or regulators if required legally</li>
              <li>Across our KrisLynx group companies as needed for operations</li>
            </ul>
          </div>

          {/* Data Rights */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">4. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access, correct, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Request a copy of your data (data portability)</li>
              <li>Object to certain data uses like marketing</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, email us at{" "}
              <a href="mailto:privacy@krislynx.com" className="text-cyan-400 underline">
                privacy@krislynx.com
              </a>
              .
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">5. Data Security</h2>
            <p>
              We use industry-standard security practices, including encryption, secure storage, and access controls to safeguard your data. AI models are designed with privacy in mind — edge processing and anonymization are used wherever possible.
            </p>
          </div>

          {/* Retention */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">6. Data Retention</h2>
            <p>
              We retain your data only as long as necessary for the purposes outlined in this policy, or as required by law. When no longer needed, your data is securely deleted.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">7. Cookies & Tracking</h2>
            <p>
              We use cookies to analyze usage, personalize experiences, and improve functionality. You can control cookie preferences in your browser.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. When we do, the updated version will be posted here with the effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions about this policy or your data, contact our Privacy Office at:{" "}
              <a href="mailto:privacy@krislynx.com" className="text-cyan-400 underline">
                privacy@krislynx.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-center text-blue-400">
           KrisLynx © {new Date().getFullYear()} — All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
