import React from "react";
import fearlinkImg from "../assets/smart.png";
import tradesphereImg from "../assets/tradesphereglobal.png";
import smartImg from "../assets/future-product.png";
import selfmateImg from "../assets/selfmate.png";

const products = [
  {
    name: "FearLink",
    tagline: "World’s First AI-Powered Fear Detection Smartwatch ",
    description:
      "FearLink uses advanced biometric sensors and AI to detect fear and stress in real-time, enhancing personal safety and mental wellness.",
    features: [
      "Real-time emotional sensing",
      "Wearable & unobtrusive design",
      "Offline operation with AI edge processing",
      "Life-saving alerts & notifications",
    ],
    img: fearlinkImg,
    masked: true,
  },
  {
    name: "TradeSphere Global",
    tagline: "AI-Powered Global Trade Tariff Portal",
    description:
      "TradeSphere simplifies international trade compliance by providing accurate, up-to-date tariff information for UK, EU, and global markets.",
    features: [
      "Comprehensive HS code lookup",
      "Real-time tariff updates",
      "Preferential trade agreement eligibility checks",
      "Easy integration with business workflows",
    ],
    img: tradesphereImg,
  },
  {
    name: " EduLynx ERP",
    tagline: "Smart Solutions for Smart Schools",
    description:
      "EduLynx ERP is built to redefine school operations. Seamlessly integrating student, staff, and administrative modules with AI-driven intelligence, it empowers institutions to operate smarter, faster, and more efficiently.",
    features: [
      "Student & staff management",
      "Attendance and exam tracking",
      "Fee portal and finance management",
      "Library and resource management",
      "AI-powered insights and reporting",
      "AI-Powered Dashboards & Predictive Insights"
    ],
    img: smartImg,
  },
  {
    name: "SelfMate Digital Twin",
    tagline: "Your AI-Powered Daily Life Companion",
    description:
      "A digital twin of you — tracking mood, fear, wellness, routines, and patterns through AI. SelfMate's next evolution integrates seamlessly with wearables and apps to guide, protect, and optimize your lifestyle.",
    features: [
      "Real-time behavioral insights",
      "Emotion & fear recognition sync with smartwatch",
      "Daily routine optimization",
      "AI journaling, suggestions, and privacy-first control",
    ],
    img: selfmateImg,
  },
];

const Products = () => {
  return (
    <section className="bg-gradient-to-b from-blue-950 via-black to-blue-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">Our Visionary Products</h2>
        <p className="text-blue-200 max-w-3xl mx-auto text-lg">
          From safety and education to trade intelligence — KrisLynx builds AI-powered tools that transform lives.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 max-w-7xl mx-auto">
        {products.map(({ name, tagline, description, features, img, masked }) => (
          <div
            key={name}
            className="bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-2xl shadow-xl shadow-cyan-800/30 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={img}
              alt={`${name} product image`}
              className="w-36 h-36 object-contain mb-6 rounded-lg shadow-md"
            />
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-cyan-400 italic mb-4">{tagline}</p>

            <div
              className={`${
                masked ? "blur-md text-blue-700 cursor-not-allowed select-none" : "text-blue-200"
              } mb-6 text-sm`}
            >
              {description}
            </div>

            {!masked && (
              <ul className="list-disc list-inside text-blue-300 text-left text-sm space-y-1 max-w-xs mx-auto">
                {features.map((feat) => (
                  <li key={feat}>{feat}</li>
                ))}
              </ul>
            )}

            {masked && (
              <div className="text-xs text-cyan-600 mt-2 italic opacity-60">
                More info unlocking soon...
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-blue-300 text-sm">
          Stay tuned on our{" "}
          <a
            href="https://www.linkedin.com/company/krislynx"
            className="text-cyan-400 underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://instagram.com/rkls.groups"
            className="text-cyan-400 underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          and via{" "}
          <a
            href="https://wa.me/message/8074807875"
            className="text-cyan-400 underline hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Broadcast
          </a>{" "}
          for product drops, demo invites, and early access.
        </p>
      </div>
    </section>
  );
};

export default Products;
