import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import "./../styles/Hero.css";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 overflow-hidden"
      id="home"
    >
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Glowing orbs effect */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Dynamic Island Navbar */}
      <div className="fixed top-5 left-0 right-0 z-50 flex justify-center">
        <motion.div
          className={`dynamic-island always-expanded ${
            scrolled ? "scrolled" : ""
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="dynamic-island-content">
            {/* Logo and Menu Items */}
            <div className="flex items-center justify-between w-full px-4 sm:px-8">
              {/* Increased left padding for mobile */}
              <div className="flex items-center pl-4 sm:pl-2 mobile-logo">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-2 text-lg font-bold text-white">
                  WebNexity
                </span>
              </div>

              {/* Desktop Links - Always visible */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink title="About us" active />
                <NavLink title="Services" />
                <NavLink title="Our Works" />
              </div>

              {/* Desktop Action Button - Always visible */}
              <div className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer relative group bg-transparent border-2 border-blue-500/50 hover:border-blue-500 text-white px-6 py-1.5 rounded-full text-sm transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">Let's Chat</span>
                    <FaRocket className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </motion.button>
              </div>

              {/* Mobile Menu Button - Added right padding */}
              <button
                className="md:hidden text-white z-50 relative pr-2 sm:pr-0 mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span
                    className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-0.5"
                        : "-translate-y-1"
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`block w-5 h-0.5 bg-white transform transition-all duration-300 ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-0.5"
                        : "translate-y-1"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/80 backdrop-blur-lg transition-all duration-500 ease-in-out z-40 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <NavLink title="About us" active />
          <NavLink title="Services" />
          <NavLink title="Our Works" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group bg-transparent border-2 border-blue-500/50 hover:border-blue-500 text-white px-8 py-3 rounded-full text-sm transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <span className="mr-2">Let's Chat</span>
              <FaRocket className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </motion.button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-32 min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 animate-fadeIn">
          <span className="inline-block transform transition-all hover:scale-105 duration-300">
            Digitalizing
          </span>
          <br />
          <span className="inline-block transform transition-all hover:scale-105 duration-300 delay-100">
            Business Around
          </span>
          <br />
          <span className="inline-block transform transition-all hover:scale-105 duration-300 delay-200">
            The World
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-12 animate-fadeIn"
          style={{ animationDelay: "0.3s" }}
        >
          For <span className="bg-white/20 px-2 py-1 rounded-md">5 years</span>{" "}
          we're bringing first class apps to our clients
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center transition-all duration-300 animate-fadeIn shadow-lg shadow-purple-500/30"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="mr-2">Get Started</span>
          <FaRocket className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </div>
  );
}

// NavLink component
function NavLink({ title, active }) {
  return (
    <a
      href="#"
      className={`text-white text-lg font-medium transition-all duration-300 relative group ${
        active ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
          active ? "w-full" : ""
        }`}
      ></span>
    </a>
  );
}
