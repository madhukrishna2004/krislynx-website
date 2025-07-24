import React from "react";

const services = [
  {
    title: "AI Strategy Consulting",
    desc: "Navigate AI adoption with precision—set clear goals, align teams, and manage risks to drive scalable transformation.",
    icon: "",
  },
  {
    title: "Embedded & Edge AI",
    desc: "Design ultra-efficient AI systems for wearables, IoT, and offline-critical applications—built for real-time impact.",
    icon: "",
  },
  {
    title: "Predictive Data Systems",
    desc: "Convert scattered data into foresight—leveraging statistical models and dashboards for strategic decisions.",
    icon: "",
  },
  {
    title: "Custom AI Model Design",
    desc: "Purpose-built models, trained from scratch on your data—optimized for accuracy, performance, and context.",
    icon: "",
  },
  {
    title: "AI System Integration",
    desc: "We connect AI seamlessly into your CRM, ERP, or cloud workflows—zero disruption, all intelligence.",
    icon: "",
  },
  {
    title: "Enterprise Automation",
    desc: "Boost efficiency through intelligent automation—AI bots, RPA, and agents working together.",
    icon: "",
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-black via-blue-950 to-blue-900 text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-4">
          Intelligent Services. Real Results.
        </h2>
        <p className="text-blue-300 max-w-3xl mx-auto">
          We architect AI that adapts to your world — from strategy to full-stack systems, built for the edge, enterprise, and everything in between.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-blue-800/20 to-blue-900/10 backdrop-blur-md rounded-xl p-6 shadow-md shadow-cyan-700/30 border border-blue-800/40 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">
              {service.title}
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm text-blue-400 italic">
          Our services adapt with you — schedule a discovery call, or follow us on{" "}
          <a href="https://www.linkedin.com/company/krislynx" className="underline text-cyan-400" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="https://instagram.com/krislynx" className="underline text-cyan-400" target="_blank" rel="noreferrer">
            Instagram
          </a>{" "}
          to stay ahead with AI you can trust.
        </p>
      </div>
    </section>
  );
}
