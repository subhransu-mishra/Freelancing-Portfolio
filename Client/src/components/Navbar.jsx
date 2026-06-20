import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import "../styles/Hero.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
            <div className="flex items-center justify-between w-full px-4 sm:px-8 gap-4">
              <Link
                to="/"
                className="flex items-center pl-4 sm:pl-2 mobile-logo gap-3"
              >
                <img src="/webnexity_logo.png" alt="WebNexity Logo" className="h-10 w-auto rounded object-contain" />
                <span className="text-lg font-bold text-white tracking-wide">
                  WebNexity
                </span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/about" title="About us" />
                <NavLink to="/services" title="Services" />
                <NavLink to="/works" title="How we works" />
              </div>

              {/* Desktop Action Button */}
              <div className="hidden md:block">
                <Link to="https://wa.me/919853779652?text=Hi%20WebNexity%2C%20I%27d%20like%20to%20discuss%20a%20project.">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="shiny-button group text-white px-6 py-2 transition-all duration-300 flex items-center"
                  >
                    <span className="relative z-10 flex items-center text-sm font-medium tracking-wide">
                      <span className="mr-2">Let's Build</span>
                      <FaRocket className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
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
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-md transition-all duration-500 ease-in-out z-40 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <NavLink
            to="/about"
            title="About us"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            to="/services"
            title="Services"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            to="/works"
            title="How we works"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shiny-button group text-white px-8 py-3 transition-all duration-300 flex items-center"
          >
            <span className="relative z-10 flex items-center text-sm font-medium tracking-wide">
              <span className="mr-2">Let's Build</span>
              <FaRocket className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </div>
      </div>
    </>
  );
}

function NavLink({ to, title, onClick }) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `text-white text-lg font-medium transition-all duration-300 relative group ${
          isActive ? "text-white" : "text-white/70 hover:text-white"
        }`
      }
    >
      {title}
        <span
          className={({ isActive }) =>
            `absolute bottom-0 left-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 group-hover:w-full ${
              isActive ? "w-full" : ""
            }`
          }
        ></span>
    </RouterNavLink>
  );
}
