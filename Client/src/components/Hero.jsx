import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaRocket,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
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
          "linear-gradient(145deg, rgb(0, 0, 0) 0%, rgb(22, 10, 39) 25%, rgb(27, 0, 51) 50%, rgb(0, 17, 33) 75%, rgb(0, 28, 42) 100%)",
      }}
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
      <div
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-30 blur-3xl animate-pulse"
        style={{
          background:
            "linear-gradient(225deg, rgba(147, 51, 234, 0.5) 0%, rgba(79, 70, 229, 0.5) 100%)",
        }}
      ></div>
      <div
        className="absolute -bottom-32 -left-32 w-[45rem] h-[45rem] rounded-full opacity-30 blur-3xl animate-pulse"
        style={{
          background:
            "linear-gradient(225deg, rgba(0, 108, 170, 0.5) 0%, rgba(0, 106, 166, 0.5) 50%, rgba(0, 191, 255, 0.5) 100%)",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full opacity-30 blur-3xl animate-pulse"
        style={{
          background:
            "linear-gradient(225deg, rgba(88, 28, 135, 0.5) 0%, rgba(37, 99, 235, 0.5) 100%)",
          animationDelay: "2s",
        }}
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
          For <span className="bg-white/20 px-2 py-1 rounded-md">3 years</span>{" "}
          we're bringing the best solutions to help businesses thrive in the
          digital era.
        </p>

        {/* Transparent premium button with gradient ring and hover glow */}
        <motion.button
          onClick={handleGetStarted}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{ animationDelay: "0.6s" }}
          className="relative group inline-flex items-center justify-center rounded-full p-[2px] cursor-pointer bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        >
          {/* Inner pill keeps background transparent */}
          <span className="relative inline-flex items-center gap-2 px-7 py-2 rounded-full bg-transparent text-white text-sm">
            <span className="font-medium tracking-wide">Get Started</span>
            <FaRocket className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          {/* Subtle hover sheen without filling background */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              WebkitMask:
                "radial-gradient(120px 120px at 30% 30%, #000 20%, transparent 60%)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04), rgba(255,255,255,0.12))",
            }}
          />
        </motion.button>
      </div>
    </div>
  );
}
