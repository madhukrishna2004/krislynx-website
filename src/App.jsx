import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Questionnaire from "./pages/Questionnaire";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import TermsOfUse from "./pages/TermsOfUse";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/smart-questionnaire" element={<Questionnaire />} />
            <Route path="/Careers" element={<Careers />} />
            {/*<Route path="/privacy-policy" element={<PrivacyPolicy />} />*/}
             {/*<Route path="/terms-of-service" element={<TermsOfUse />} />*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
