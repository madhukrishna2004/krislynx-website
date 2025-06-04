import React from "react";
import { Link } from "react-router-dom";
import KrisLynxImg from "../assets/KrisLynx.png";


const Home = () => {
  return (
    <div className="bg-black text-blue-400 font-sans">

      {/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
  >
    <source src="/videos/krislynx-tech-bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6 bg-black/50 backdrop-blur-sm">
    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md">
      Igniting Tomorrow’s Solutions with AI, Innovation & Trust
    </h1>
    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 tracking-wide">
       KrisLynx combines next-gen product innovation with service expertise to transform industries.
    </p>

    <Link
      to="/smart-questionnaire"
      className="inline-block bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:brightness-110 transition transform hover:-translate-y-1"
    >
      Start Your Journey
    </Link>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-5" />
</section>



      {/* Company Image Section */}
      <section className="bg-black py-20 flex justify-center items-center border-t border-b border-blue-700">
  <img
    src={KrisLynxImg}
    alt="KrisLynx Company"
    className="max-w-3xl w-full h-auto rounded-xl shadow-xl object-contain"
  />
</section>



      {/* Enhanced About Section */}
<section className="py-24 bg-gradient-to-t from-blue-950 via-black to-black text-blue-300">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight text-blue-100 drop-shadow-lg">
      Who We Are
    </h2>

    <div className="grid md:grid-cols-2 gap-12 text-left">
      {/* Container 1: Intro */}
      <div className="bg-blue-900/20 rounded-xl p-8 shadow-inner border border-blue-800 hover:shadow-blue-500 transition">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">Rooted in Innovation</h3>
        <p className="leading-relaxed tracking-wide">
          <strong> KrisLynx</strong> is a next-generation tech powerhouse under RKLS, leading innovation in both <strong>AI-based products</strong> and <strong>service-oriented platforms</strong>.
        </p>
      </div>

      {/* Container 2: Capabilities */}
      <div className="bg-blue-900/20 rounded-xl p-8 shadow-inner border border-blue-800 hover:shadow-blue-500 transition">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">AI + Hardware Synergy</h3>
        <p className="leading-relaxed tracking-wide">
          From intelligent <strong>AI platforms</strong> to embedded <strong>smart hardware</strong>, we design and deploy technologies that disrupt industries and deliver real-world impact.
        </p>
      </div>

      {/* Container 3: Vision & Mission */}
      <div className="bg-blue-900/20 rounded-xl p-8 shadow-inner border border-blue-800 hover:shadow-blue-500 transition">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">A Vision Beyond Code</h3>
        <p className="leading-relaxed tracking-wide">
          As a bold extension of the <strong>RKLS legacy</strong>, we are committed to engineering scalable, future-ready ecosystems that empower businesses, institutions, and societies.
        </p>
      </div>

      {/* Container 4: Identity */}
      <div className="bg-blue-900/20 rounded-xl p-8 shadow-inner border border-blue-800 hover:shadow-blue-500 transition">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">Not Just Builders. Innovators.</h3>
        <p className="leading-relaxed tracking-wide">
          We are the creators of <strong>FearLink™</strong>, <strong>TradeSphere Global</strong>, and the upcoming <strong>SelfMate</strong> ecosystem. We don't follow trends — <em>we create them.</em>
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Services/Highlights */}
<section className="py-24 bg-gradient-to-t from-blue-900 via-black to-black text-blue-400">
  <div className="max-w-7xl mx-auto px-6">
    <h3 className="text-3xl font-extrabold text-center mb-14 tracking-wide drop-shadow-md">What We Offer</h3>
    <div className="grid md:grid-cols-3 gap-12">
      {/* FearLink Card */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11h6"></path>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">FearLink™</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          World’s first intelligent fear-detection wearable for safety, wellness, and emergency alerts.
        </p>
      </div>

      {/* TradeSphere Card */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16"></path>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 4l4 4-4 4"></path>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">TradeSphere Global</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          AI-powered tariff portal for UK, EU & Global trade compliance — simplified and scalable.
        </p>
      </div>

      {/* AI Product & Services + SelfMate Card */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path>
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">AI Product & Service Based Softwares + SelfMate</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          Development and integration of AI product-based and service-based software solutions, including our innovative <strong>SelfMate</strong> platform for next-gen intelligent experiences.
        </p>
      </div>

      {/* New Card 4 */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          {/* Replace with your icon */}
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">Consulting & Strategy</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          Expert guidance on digital transformation, AI adoption, and tech strategy tailored for your business growth.
        </p>
      </div>

      {/* New Card 5 */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          {/* Replace with your icon */}
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="16" height="16" x="4" y="4" stroke="currentColor" strokeWidth="1.5" rx="2" ry="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M8 16h8M8 8h8" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">Enterprise Software Solutions</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          Custom-built software tailored to enterprise needs, boosting efficiency, security, and scalability.
        </p>
      </div>

      {/* New Card 6 */}
      <div className="bg-blue-900 shadow-lg rounded-2xl p-8 text-center hover:shadow-blue-400 transition transform hover:-translate-y-1">
        <div className="mb-4 flex justify-center">
          {/* Replace with your icon */}
          <svg
            className="w-14 h-14 text-blue-300 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-blue-300 mb-3">Cloud & DevOps</h4>
        <p className="text-blue-200 text-sm leading-relaxed">
          Cloud infrastructure setup, continuous integration, and deployment to accelerate your development lifecycle.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Testimonials */}
<section className="bg-black py-20">
  <div className="max-w-6xl mx-auto px-6 text-center text-blue-400">
    <h3 className="text-3xl font-extrabold mb-12 tracking-wide drop-shadow-md">
      What Our Clients Say
    </h3>
    <div className="space-y-12 max-w-4xl mx-auto">
      <div>
        <blockquote className="italic text-blue-300 text-lg leading-relaxed">
          “TradeSphere Global made cross-border compliance effortless. It's the one platform we trust for global tariff intelligence.”
        </blockquote>
        <cite className="block mt-3 font-semibold text-blue-200">— ITC Inc.</cite>
      </div>

      <div>
        <blockquote className="italic text-blue-300 text-lg leading-relaxed">
          “It’s exciting to see innovations like TradeSphere Global come forth. How can we enhance collaboration in trade further? <span className='text-cyan-400'></span>”
        </blockquote>
        <cite className="block mt-3 font-semibold text-blue-200">— International Trade Council</cite>
      </div>
      <div>
        <blockquote className="italic text-blue-300 text-lg leading-relaxed">
          “KrisLynx revolutionized our digital operations. Their AI-driven solutions are not just futuristic—they’re grounded, scalable, and built for impact.”
        </blockquote>
        <cite className="block mt-3 font-semibold text-blue-200"></cite>
      </div>

      

    </div>
  </div>
</section>

      {/* CTA Strip */}
      <section className="bg-black py-12 text-center text-blue-400 border-t border-blue-700">
        <h4 className="text-2xl font-semibold mb-4 tracking-wide drop-shadow-md">Have a Vision? Let’s Build It Together.</h4>
        <Link
          to="/contact"
          className="inline-block bg-blue-400 text-black font-semibold px-10 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition transform hover:-translate-y-1"
        >
          Contact KrisLynx
        </Link>
      </section>

    </div>
  );
};

export default Home;
