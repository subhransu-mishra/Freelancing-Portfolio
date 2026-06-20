import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import RippleGrid from "./RippleGrid";
import "./../styles/Hero.css";

export default function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/services");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #0B0B0C 0%, #121214 50%, #0B0B0C 100%)",
      }}
      id="home"
    >
      {/* Background grid effect */}
      <RippleGrid
        enableRainbow={false}
        gridColor="#5227FF"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction
        mouseInteractionRadius={0.8}
        opacity={1}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={0.1}
        gridRotation={0}
      />

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
          For <span className="bg-white/20 px-2 py-1 rounded-md">3 years</span>{" "}
          we're bringing the best solutions to help businesses thrive in the
          digital era.
        </p>

        <motion.button
          onClick={handleGetStarted}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ animationDelay: "0.6s" }}
          className="shiny-button px-8 py-3.5 group inline-flex items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none"
        >
          <span className="relative z-10 inline-flex items-center gap-2 text-white text-sm tracking-widest uppercase">
            <span className="font-semibold text-white/90 group-hover:text-white transition-colors">Get Started</span>
            <FaRocket className="w-4 h-4 text-white/70 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </motion.button>
      </div>
    </div>
  );
}
