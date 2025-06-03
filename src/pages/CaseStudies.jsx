import React from "react";

const caseStudiesData = [
  {
    title: "SelfMate: Intelligent Emotional Well-being AI",
    tag: "🧠 AI Wellness",
    description:
      "SelfMate empowers individuals with AI-backed mental wellness, proactively detecting emotional states and offering personalized strategies to manage stress, anxiety, and burnout.",
    impact: [
      "30% reduction in anxiety episodes among beta users.",
      "Integrated into wearables for real-time tracking.",
      "Built for global scale — ready for 1M+ users.",
    ],
  },
  {
    title: "FearLink: Real-time Fear Detection Smartwatch",
    tag: "⌚️ Personal Safety Tech",
    description:
      "FearLink introduces a revolutionary layer of safety, leveraging AI to detect fear and stress in real-time and alert trusted contacts or emergency services even without connectivity.",
    impact: [
      "200+ real-life emergency incidents assisted.",
      "Offline AI engine for instant decisions.",
      "Global emergency integration enabled.",
    ],
  },
  {
    title: "TradeSphere Global: AI Trade Tariff Portal",
    tag: "🌐 Trade Compliance AI",
    description:
      "TradeSphere simplifies global trade with real-time HS code lookup, rule of origin checks, and instant regulation updates — designed for seamless business workflows.",
    impact: [
      "40% reduction in compliance errors.",
      "Used by 1000+ global import/export firms.",
      "Eliminates costly shipment delays.",
    ],
  },
  {
    title: "SmartSchool Suite: AI-Powered Educational OS",
    tag: "🎓 AI in Education",
    description:
      "SmartSchool Suite reimagines school operations through intelligent dashboards, student analytics, attendance automation, and smart communication modules.",
    impact: [
      "50% operational boost across 15 institutions.",
      "Improved transparency in student-teacher-parent loop.",
      "Modular AI engines for different school needs.",
    ],
  },
  {
    title: "KrisLynx Projects: Crafting Tomorrow’s Tech",
    tag: "🚀 AI & Embedded Systems",
    description:
      "KrisLynx engineers and deploys deep tech solutions in AI, embedded systems, and real-time analytics across sectors, guided by a mission to shape a smarter, safer future.",
    impact: [
      "30+ enterprise solutions delivered across 7 countries.",
      "Multi-sector experience from safety to education.",
      "Continuous R&D fueling industry breakthroughs.",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Case Studies & Success Stories
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See how our AI-driven products and embedded systems have transformed businesses, protected lives, and built a future-ready ecosystem — all rooted in the KrisLynx mission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {caseStudiesData.map(({ title, tag, description, impact }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-tr from-[#e0f2fe] to-[#bae6fd] border border-blue-300 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-sm font-semibold text-[#0284c7] uppercase tracking-wide mb-2">
                {tag}
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">{title}</h3>
              <p className="text-blue-900 mb-4">{description}</p>
              <ul className="list-disc list-inside text-blue-800 space-y-2 pl-2">
                {impact.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-[#1e3a8a] hover:bg-[#183075] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow transition duration-300"
          >
            📩 Connect With Us to Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
