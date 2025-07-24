import React from "react";

const openRoles = [
  {
    title: "Frontend Developer – React.js",
    location: "Remote | India/UK",
    type: "Full-Time",
    description:
      "Build high-performance UI for AI-powered platforms like TradeSphere and SelfMate. Strong React, Tailwind, and UX sense required.",
  },
  {
    title: "AI Engineer – Computer Vision",
    location: "On-site | Kurnool R&D",
    type: "Full-Time",
    description:
      "Join our FearLink R&D to design real-time fear detection systems. Experience with TensorFlow, PyTorch & wearable data preferred.",
  },
  {
    title: "Marketing Lead",
    location: "Hybrid | Hyderabad / London",
    type: "Full-Time",
    description:
      "Drive go-to-market strategy for our AI products globally. Work across regions, build presence, lead growth.",
  },
];

const Careers = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white py-20 px-6 md:px-16 min-h-screen">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-300 mb-4">Careers at KrisLynx</h1>
        <p className="text-blue-200 text-lg md:text-xl">
          Join us in building AI-powered solutions that ignite tomorrow’s breakthroughs.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Why KrisLynx?</h2>
          <ul className="list-disc list-inside text-blue-300 space-y-2">
            <li>Global-first product company based in India & UK</li>
            <li>Fast-paced, impact-driven, AI-powered culture</li>
            <li>Freedom to innovate, learn, and lead your lane</li>
            <li>Work with cutting-edge tools on real-world problems</li>
            <li>Collaborative, transparent, founder-driven environment</li>
          </ul>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
            alt="KrisLynx LLP Careers"
            className="rounded-xl shadow-lg shadow-cyan-700/30"
          />
        </div>
      </div>

      {/* Open Roles */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-cyan-300 text-center mb-10">Open Positions</h2>
        <div className="space-y-8">
          {openRoles.map((role, index) => (
            <div
              key={index}
              className="border border-cyan-700 rounded-xl p-6 bg-black/40 hover:bg-black/60 transition"
            >
              <h3 className="text-xl font-semibold text-white">{role.title}</h3>
              <p className="text-sm text-blue-400 mb-2">
                {role.location} • {role.type}
              </p>
              <p className="text-blue-200 mb-4">{role.description}</p>
              <a
                href="mailto:careerskrislynx@gmail.com"
                className="inline-block mt-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm rounded transition shadow shadow-cyan-800"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Perks & Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6 text-blue-300 text-sm">
          <div className="bg-black/30 p-6 rounded-xl"> Learning budget & AI certifications</div>
          <div className="bg-black/30 p-6 rounded-xl"> Global exposure & remote opportunities</div>
          <div className="bg-black/30 p-6 rounded-xl"> Rapid career growth in fast-paced teams</div>
          <div className="bg-black/30 p-6 rounded-xl"> Mental health & wellness support</div>
          <div className="bg-black/30 p-6 rounded-xl"> Flexible leave & hybrid work setup</div>
          <div className="bg-black/30 p-6 rounded-xl"> Direct access to founders</div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-xl text-blue-200 mb-2">
          Not seeing your role? We still want to hear from you.
        </h3>
        <a
          href="mailto:careerskrislynx@gmail.com"
          className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition shadow shadow-cyan-800"
        >
          Send Your Resume
        </a>
      </div>
    </section>
  );
};

export default Careers;
