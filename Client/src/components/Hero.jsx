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
  void motion;

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

      {/* Navbar moved to global Layout */}

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
