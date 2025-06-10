import React from "react";

const About = () => {
  return (
    
    <div className="bg-black text-blue-300 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            About KrisLynx
          </h1>
          <p className="text-lg md:text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed">
            We aren’t here to build just another tech company. We're here to build a shift. Since our start in 
            <span className="text-blue-300 font-semibold"> 2023</span>, KrisLynx has stood for fearless innovation — built on emotion, empathy, and edge-tech. 
            We're engineers, artists, hackers, and dreamers — working together to bring RKLS and our users into a future they deserve.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            🛠️ What We Do
          </h2>
          <p className="text-blue-200 leading-relaxed mb-4">
            At <span className="text-white font-bold">KrisLynx</span>, we build things that <i>feel</i>. Every line of code, every design — it’s made 
            to sense, respond, and evolve. We're not guessing the future. We're building it. And trust us — it’s personal.
          </p>
          <ul className="list-disc list-inside space-y-2 text-blue-100 pl-4">
  <li><strong className="text-white">FearLink™</strong>: The world's first AI fear-detection smartwatch — AI meets safety.</li>
  <li><strong className="text-white">TradeSphere Global</strong>: An AI trade portal redefining how the world does compliance.</li>
  <li><strong className="text-white">SelfMate</strong>: Our upcoming personal AI companion — helping you organize, grow, and evolve.</li>
  <li><strong className="text-white">SmartSchool Suite</strong>: A next-gen educational system blending academics, admin, and analytics — built for future-first institutions.</li>
  <li>Smart tools for governments and schools — systems that just work.</li>
  <li>AI, cloud, and edge-tech — stitched together for impact.</li>
</ul>

        </div>

        {/* Modern Office */}
        <div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            🏢 Modern Office. Human Core.
          </h2>
          <p className="text-blue-200 leading-relaxed">
            Our workspace isn’t about fancy furniture or cold glass walls. It’s about real people, raw thinking, and
            meaningful grind. We study behavior. We chase patterns. We don’t just want to impress the industry —
            we want to change it. Our tech? Built with heart. Our approach? Ruthlessly human.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20">
          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
            🌍 Our Vision
          </h2>
          <p className="text-blue-200 leading-relaxed">
            The world doesn’t need more apps. It needs understanding. At KrisLynx, we see a digital future 
            where <span className="text-white font-semibold">tech doesn’t just think</span>, it <span className="text-white font-semibold">feels</span>.
            From emotion-aware devices to global compliance systems, we build with empathy, design with fire, and scale with soul.
            This isn’t innovation for the sake of it — this is innovation that matters.
          </p>
        </div>

        {/* Core Values Section */}
<div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20 mt-20">
  <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">💡 Our Core Values</h2>
  <ul className="list-disc list-inside text-blue-200 space-y-4 pl-4 md:pl-6">
    <li>
      <span className="text-white font-semibold">Empathy First:</span> Technology must feel before it functions. We understand human emotion before building logic.
    </li>
    <li>
      <span className="text-white font-semibold">Human-Centric Innovation:</span> Every product we create solves a real problem — for real people.
    </li>
    <li>
      <span className="text-white font-semibold">Truth Over Trend:</span> We're not trend-chasers. We build solutions that outlive hype cycles.
    </li>
    <li>
      <span className="text-white font-semibold">Radical Ownership:</span> Every KrisLynx team member owns outcomes — not just tasks.
    </li>
  </ul>
</div>

        {/* Team Vision Section */}
<div className="text-center">
  <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-300 mb-12 drop-shadow">
    Voices of Leadership
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
    
    {/* Founder - Madhu Krishna */}
    <div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">Madhu Krishna</h3>
      <p className="text-blue-400 text-sm mb-2 italic">Founder & CEO</p>
      <p className="text-blue-200 text-base leading-relaxed">
        KrisLynx isn’t just a company I started — it’s the answer to a calling I felt deep inside. I wanted to build something that wasn’t limited to screens and codes, but something that felt alive… connected. Something that listens, feels, and responds to humans — not just inputs. The idea came during a time when I saw tech getting colder while people needed warmth. So, I thought, what if we could make technology emotionally intelligent? That’s how KrisLynx was born. My motto is simple — think human, build beyond. Everything else follows.
      </p>
    </div>

    {/* Tech Lead */}
    <div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">Muni Rangadu</h3>
      <p className="text-blue-400 text-sm mb-2 italic">Lead AI Engineer</p>
      <p className="text-blue-200 text-base leading-relaxed">
        When I first heard about KrisLynx, I wasn’t just curious — I was drawn in. It’s rare to find a space where logic and empathy can coexist in technology. But here, we don't just build AI to process data. We build it to understand emotion, instinct, reaction. It’s challenging, yes, but it’s also deeply rewarding. And for me, that’s what makes this team different — we’re not just writing code, we’re rewriting how tech feels.
      </p>
    </div>
    {/* Hardware Specialist - R&D */}
    <div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">Hitashri</h3>
      <p className="text-blue-400 text-sm mb-2 italic">Hardware & Embedded Systems Lead</p>
      <p className="text-blue-200 italic mb-3">
         
      </p>
      <p className="text-blue-200 text-base leading-relaxed">
        Most people see hardware as rigid — chips, wires, boards. But to me, it’s where emotion takes physical form. 
        At KrisLynx, we don’t just prototype devices. We engineer empathy. Every circuit we build, from smartwatch boards to edge sensors, is designed to react, respond, and protect. R&D here isn’t about deadlines — it’s about breakthroughs. And that’s why I’m here.
      </p>
    </div>

    {/* CHRO */}
    <div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">Sadhika</h3>
      <p className="text-blue-400 text-sm mb-2 italic">Chief Human Resources Officer</p>
      <p className="text-blue-200 italic mb-3">
        We trust the founder personally and professionally — his leadership shapes the KrisLynx culture we cherish, a culture deeply rooted in technology, innovation, and balanced growth.
      </p>
      <p className="text-blue-200 text-base leading-relaxed">
        People aren’t resources — they’re roots. My role at KrisLynx is to nurture the culture, not control it. 
        Here, we don’t recruit resumes — we onboard energy. Whether it’s balancing innovation with well-being, 
        or building trust across our teams, I believe emotional intelligence is our real superpower. Tech grows when people thrive — and I’m here to ensure both happen together.
      </p>
    </div>

    {/* Full-Stack Architect */}
    <div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
      <h3 className="text-2xl font-bold text-cyan-300 mb-2">Meghana</h3>
      <p className="text-blue-400 text-sm mb-2 italic">Full-Stack Architect</p>
      <p className="text-blue-200 text-base leading-relaxed">
        I’ve worked with many teams before, but KrisLynx hits different. There’s an obsession with purpose here — not just performance. We don’t ask “what tech can do,” we ask “what people really need.” Every system we build has a soul in it. That’s not exaggeration — it’s just our mindset. Whether it's a smartwatch or a tariff engine, we architect it like it matters… because to someone out there, it absolutely will.
      </p>
    </div>

    {/* Software Development Lead */}
<div className="bg-gradient-to-br from-blue-950 to-cyan-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition">
  <h3 className="text-2xl font-bold text-cyan-300 mb-2">Gopal Krishna</h3>
  <p className="text-blue-400 text-sm mb-2 italic">Software Development Lead</p>
  
  <p className="text-blue-200 text-base leading-relaxed">
    Leading the software team at KrisLynx means more than managing code — it’s about crafting experiences that matter. We combine precision engineering with human insight to create software that’s smart, intuitive, and built to evolve. Every challenge is an opportunity, and every solution pushes boundaries. This is where technology meets purpose.
  </p>
</div>


    

  </div>
</div>

{/* Global Presence Section */}
<div className="mt-20 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-6">🌐 Global Footprint</h2>
  <p className="text-blue-200 max-w-3xl mx-auto">
    Our technologies have already touched the UK, India, and the EU. From classrooms in Andhra Pradesh to boardrooms in London — we are building globally, thinking humanely.
  </p>

  

  {/* Optional Stats */}
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-cyan-300 font-medium">
    <div className="bg-blue-800/30 p-6 rounded-lg">🌍 3+ Countries Reached</div>
    <div className="bg-blue-800/30 p-6 rounded-lg">🧠 10,000+ R&D Hours</div>
    <div className="bg-blue-800/30 p-6 rounded-lg">🏢 50+ Institutions Engaged</div>
  </div>
</div>

<section id="milestones" className="bg-gray-950 py-20 px-6 lg:px-24 text-white">
  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
    RKLS Milestone Journey
  </h2>

  <div className="relative border-l-4 border-blue-500 pl-10 space-y-14">
    
    {/* 2019 – RKLS Foundation */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-400/50"></div>
      <h3 className="text-xl font-semibold">2019 – RKLS Groups Founded</h3>
      <p className="mt-2 text-gray-300">
        The seed of <span className="text-blue-400 font-medium">RKLS Groups</span> was planted — a vision to create a future-ready enterprise spanning IT, Education, Infrastructure, Fashion, Charity, and AI.
      </p>
    </div>

    {/* 2023 – SREEIS RKLS LLP */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-sky-500 rounded-full shadow-md shadow-sky-300/50"></div>
      <h3 className="text-xl font-semibold">2023 – SREEIS RKLS LLP</h3>
      <p className="mt-2 text-gray-300">
        The first formal leap. <span className="text-sky-400 font-medium">SREEIS RKLS LLP</span> was incorporated, marking the launch of digital transformation projects and international expansion ambitions.
      </p>
    </div>

    {/* 2023 – Yours Home Trust */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-rose-500 rounded-full shadow-md shadow-rose-300/50"></div>
      <h3 className="text-xl font-semibold">2023 – Yours Home Charitable Trust</h3>
      <p className="mt-2 text-gray-300">
        RKLS launched <span className="text-rose-300 font-medium">Yours Home</span> — a trust for orphans and the elderly. With a pledge to donate <span className="text-rose-400 font-bold">7%</span> of profits, it reflects our soul’s mission: <em>“Giving Back with Heart.”</em>
      </p>
    </div>

    {/* 2023 – SelfMate Foundation */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-purple-500 rounded-full shadow-md shadow-purple-400/50"></div>
      <h3 className="text-xl font-semibold">2023 – SelfMate AI Foundation</h3>
      <p className="mt-2 text-gray-300">
        Birth of a futuristic idea — <span className="text-purple-300 font-medium">SelfMate</span>. Focused on AI-based emotional wellness, this foundation would power next-gen wearables, including <span className="text-purple-400">FearLink</span>.
      </p>
    </div>

    {/* 2024 – SmartSchool Suite */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-md shadow-cyan-300/50"></div>
      <h3 className="text-xl font-semibold">2024 – SmartSchool Suite Launch</h3>
      <p className="mt-2 text-gray-300">
        Digitizing education with <span className="text-cyan-300 font-medium">SmartSchool Suite</span>, an end-to-end school & college dashboard offering smart attendance, fee analytics, exams, and live management — built for India's next-gen institutions.
      </p>
    </div>

    {/* 2024 – TradeSphere Global */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-amber-400 rounded-full shadow-md shadow-amber-300/50"></div>
      <h3 className="text-xl font-semibold">2024 – TradeSphere Global</h3>
      <p className="mt-2 text-gray-300">
        <span className="text-amber-300 font-medium">TradeSphere</span> becomes a powerful AI-driven UK & EU trade tariff portal. Adopted by businesses in London, it simplifies HS code lookup, duty rules, and origin documentation — all in one intelligent interface.
      </p>
    </div>

    {/* 2025 – FearLink &  KrisLynx */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-indigo-500 rounded-full shadow-md shadow-indigo-300/50"></div>
      <h3 className="text-xl font-semibold">2025 – FearLink &  KrisLynx</h3>
      <p className="mt-2 text-gray-300">
        <span className="text-indigo-300 font-medium">FearLink</span>, the AI that detects real fear via physiological signals, is deployed into wearable prototypes. RKLS also launches its dedicated tech company <span className="text-indigo-400 font-medium"> KrisLynx</span> with the tagline <em>"Igniting Tomorrow’s Solutions."</em>
      </p>
    </div>

    {/* 2026+ – RKLS Universe Vision */}
    <div className="relative">
      <div className="absolute -left-5 top-2 w-4 h-4 bg-lime-400 rounded-full shadow-md shadow-lime-300/50 animate-pulse"></div>
      <h3 className="text-xl font-semibold">2026 & Beyond – RKLS Universe</h3>
      <p className="mt-2 text-gray-300">
        RKLS steps into its boldest era — a complete business ecosystem of <span className="text-lime-300 font-medium">9+ Companies</span> in AI, Infra, Charity, Fashion, Education & more. 
        <br />
        The vision: <em>“Build Today What Tomorrow Will Rely On.”</em>
      </p>
    </div>

  </div>
  
</section>

 <div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20 mt-20 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-6">
    Join Our Journey
  </h2>
  <p className="text-blue-200 max-w-3xl mx-auto mb-6 leading-relaxed text-lg">
    At <span className="text-white font-bold">KrisLynx</span>, innovation and excellence aren’t just goals—they’re the foundation of everything we do. 
    As we expand our horizons across technology, education, and social impact, we’re always on the lookout for talented, passionate individuals 
    who share our vision of igniting tomorrow’s solutions.
  </p>
  <p className="text-blue-200 max-w-3xl mx-auto mb-6 leading-relaxed text-lg">
    If you’re ready to challenge yourself, contribute to cutting-edge projects, and grow within a dynamic, forward-thinking organization, 
    KrisLynx could be your next home. Together, we build the future.
  </p>
  <p className="text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
    Stay tuned to our <a href="https://www.linkedin.com/company/krislynx" target="_blank" rel="noopener noreferrer" className="underline text-cyan-300">LinkedIn</a>, <a href="https://www.instagram.com/rkls.groups" target="_blank" rel="noopener noreferrer" className="underline text-cyan-300">Instagram</a>, and WhatsApp broadcast channels for the latest updates on openings and company news.
  </p>
  
{/* Founder Spotlight - SEO Optimized */}
<div className="bg-blue-900/20 rounded-xl p-6 md:p-10 shadow-lg shadow-cyan-700/20 mt-20">
  <details className="group">
    <summary className="flex justify-between items-center cursor-pointer list-none">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">
         Founder & CEO: Madhu Krishna K
      </h2>
      <span className="transition-transform group-open:rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </summary>
    <div className="mt-6 flex flex-col md:flex-row gap-8 items-center">
      {/* Founder Image (SEO Optimized) */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img 
          src="/team/krishna.jpg" 
          alt="Madhu Krishna K - Founder & CEO of KrisLynx LLP" 
          className="rounded-xl shadow-lg shadow-cyan-500/30 w-full max-w-xs hover:scale-105 transition-transform"
          loading="lazy"
        />
      </div>
      {/* Founder Bio */}
      <div className="w-full md:w-2/3 space-y-4">
        <h3 className="text-2xl font-bold text-white">
          The Visionary Behind KrisLynx
        </h3>
        <p className="text-blue-200 leading-relaxed">
          <strong className="text-cyan-300">Madhu Krishna</strong> is the founder and driving force behind KrisLynx. With a background in AI, emotional computing, and ethical tech, he launched KrisLynx in 2023 to bridge the gap between cutting-edge innovation and human emotion. His philosophy—<em>"If tech can’t feel, it can’t truly serve"</em>—shapes every product the company builds.
        </p>
        <p className="text-blue-200 leading-relaxed">
          Before KrisLynx, Madhu led R&D projects in AI-driven behavioral analysis and edtech systems. Today, he oversees the company’s mission to create <strong className="text-white">emotionally intelligent technology</strong>, from FearLink’s fear-detection AI to TradeSphere’s global trade tools.
        </p>
        <div className="pt-2">
          <a 
            href="/contact" 
            className="inline-block bg-cyan-400 hover:bg-cyan-300 text-black font-medium px-6 py-2 rounded-lg transition"
          >
            Connect with Madhu
          </a>
        </div>
      </div>
    </div>
  </details>
</div>

{/* Structured Data for Google (Add to Page Script) */}
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Madhu Krishna",
    "jobTitle": "Founder & CEO",
    "url": "https://krislynx.com",
    "sameAs": [
      "https://www.linkedin.com/in/madhu-krishna-b143bb231/",
      
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "KrisLynx LLP"
    },
    "description": "Madhu Krishna is the founder and CEO of KrisLynx LLP, a tech company pioneering emotionally intelligent AI solutions like FearLink and TradeSphere Global.",
    "image": "/team/krishna.jpg"
  })}
</script>  
</div>

        {/* Call to Action */}
        <div className="text-center pt-10">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-300 to-blue-400 text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:brightness-110 transition transform hover:-translate-y-1"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
