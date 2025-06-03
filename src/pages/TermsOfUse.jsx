import React from "react";

const TermsOfUse = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-black to-blue-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-8">Terms of Use</h1>
        <p className="text-blue-200 mb-10">
          Last Updated: June 1, 2025
        </p>

        <div className="space-y-8 text-blue-300 text-sm leading-relaxed">
          {/* Acceptance */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using KrisLynx websites, products, apps, or services including FearLink, TradeSphere, SelfMate, or SmartSchool Suite, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use our platforms.
            </p>
          </div>

          {/* Use of Services */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">2. Use of Our Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>You must be at least 13 years of age to use most of our services unless otherwise stated.</li>
              <li>Do not misuse our services, attempt unauthorized access, or harm any other users or systems.</li>
              <li>Use of AI insights is at your discretion. KrisLynx does not guarantee absolute outcomes based on predictions or alerts.</li>
            </ul>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">3. Intellectual Property</h2>
            <p>
              All content, logos, trademarks, code, and designs are the exclusive intellectual property of KrisLynx LLP. You may not copy, reuse, or distribute without written permission.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">4. Third-Party Services</h2>
            <p>
              Some services may integrate or link to third-party platforms. We are not responsible for the content, data practices, or reliability of those third-party services.
            </p>
          </div>

          {/* Disclaimers */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">5. Disclaimers</h2>
            <p>
              Our services are provided “as is” and “as available.” We do not guarantee that services will always be error-free, uninterrupted, or suitable for every purpose.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p>
              KrisLynx LLP shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use our platforms, including any loss of data, income, or reputation.
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">7. User Responsibilities</h2>
            <p>
              You are responsible for ensuring that your use of our services complies with all applicable laws, rules, and regulations in your country or region.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to any user at our discretion for violations of these terms or misuse of services.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be resolved under the jurisdiction of Kurnool, Andhra Pradesh, or the appropriate High Court, unless otherwise agreed.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              For questions or concerns about these terms, please contact{" "}
              <a href="mailto:legal@krislynx.com" className="text-cyan-400 underline">
                legal@krislynx.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-center text-blue-400">
          KrisLynx LLP © {new Date().getFullYear()} — All Rights Reserved
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
