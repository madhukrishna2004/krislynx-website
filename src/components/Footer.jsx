import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-950 via-blue-900 to-blue-800 text-blue-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Company Intro */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-100"> KrisLynx</h3>
          <p className="text-sm text-blue-300">
            Igniting Tomorrow’s Solutions — your AI/IT innovation partner. 
            We engineer meaningful solutions powered by intelligence, insight & integrity.
          </p>
          <p className="mt-3 text-xs text-blue-400">Powered by RKLS Groups</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-blue-200">Explore</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-50 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-50 transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-50 transition">About</Link></li>
            <li><Link to="/Careers" className="hover:text-blue-50 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-blue-200">Products</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a 
                href="https://trade-sphereglobal.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-50 transition"
              >
                TradeSphere Global
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-50 transition"
              >
                AI Insights
              </a>
            </li>
            {/* Add more product links here */}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-blue-200">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/smart-questionnaire" className="hover:text-blue-50 transition">Smart Questionnaire</Link></li>
            <li><Link to="/contact" className="hover:text-blue-50 transition">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-blue-50 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-blue-50 transition">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact & Vision */}
        <div>
  <h4 className="text-sm font-semibold mb-3 text-blue-200">Get in Touch</h4>
  <p className="text-sm">
    <a
      href="mailto:connectkrislynx@gmail.com"
      className="text-cyan-400 hover:underline"
    >
      connect@krislynx.com
    </a>
  </p>
  <p className="text-sm">Kurnool, Andhra Pradesh, India</p>
  <p className="text-sm mt-2">
    <a
      href="https://www.linkedin.com/company/krislynx" // update this if your actual page is different
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-300 hover:underline"
    >
      Follow us on LinkedIn
    </a>
  </p>
  <p className="text-xs text-blue-400 italic mt-2">
    Building trust globally, delivering locally.
  </p>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-blue-700 pt-4 px-6 text-center text-xs text-blue-400 flex flex-col md:flex-row justify-between items-center gap-2">
        <div>
          © {new Date().getFullYear()}  KrisLynx. All rights reserved.
        </div>
        <div className="flex gap-4">
          <span>SSL Secure</span>
          <span>ISO Compliant</span>
          <span>AI-Ready</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
