import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus({ success: false, message: "Full name is required." });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ success: false, message: "Please enter a valid email." });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ success: false, message: "Please enter your message." });
      return;
    }

    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          success: true,
          message: "Thank you for reaching out! We'll contact you soon.",
        });
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-2xl shadow-xl shadow-cyan-800/30 p-8 md:p-12">
        <h2 className="text-4xl font-bold text-cyan-300 text-center mb-4">Contact KrisLynx</h2>
        <p className="text-blue-200 text-center mb-8 text-sm md:text-base">
          Whether you're across the street or across the globe, let's connect and build intelligent futures together.
        </p>

        {status && (
          <div
            className={`mb-6 p-4 rounded-lg text-sm ${
              status.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          <div>
            <label htmlFor="fullName" className="block font-semibold text-blue-200 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-black/40 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-blue-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-blue-200 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-black/40 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-blue-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold text-blue-200 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-black/40 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-blue-400 text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-blue-200 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can collaborate or assist you..."
              className="w-full px-4 py-3 bg-black/40 border border-cyan-700 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-blue-400 text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-cyan-500/40"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-16 text-blue-300 text-sm">
        Operating from India to the Global — powering global AI.{" "}
        <a
          href="https://www.linkedin.com/company/krislynx"
          className="text-cyan-400 underline hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with us
        </a>{" "}
        to ignite the next solution.
      </div>
    </section>
  );
};

export default Contact;
