import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/KrisLynx ll;p.png"; // Adjust path if needed

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="KrisLynx Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-blue-400">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/products" className="hover:text-blue-300 transition">Products</Link>
          <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
          <Link to="/smart-questionnaire" className="hover:text-blue-300 transition">Connect</Link>
          
          <Link to="/Careers" className="hover:text-blue-300 transition">Careers</Link>
        </nav>

        {/* CTA Button matching navbar bg and text color */}
        <Link
          to="/contact"
          className="ml-4 bg-black text-blue-400 px-5 py-2 rounded hover:bg-gray-900 hover:text-blue-300 text-sm transition hidden md:inline-block border border-blue-400"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
