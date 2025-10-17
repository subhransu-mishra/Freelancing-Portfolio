import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import {
  FaRocket,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  // reference to satisfy static analyzers that don't detect JSX usage
  void motion;

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  const processes = [
    {
      icon: FaLightbulb,
      title: "Discovery",
      description: "Understanding your vision and requirements",
    },
    {
      icon: FaCogs,
      title: "Planning",
      description: "Crafting the perfect strategy and architecture",
    },
    {
      icon: FaCode,
      title: "Development",
      description: "Building with cutting-edge technologies",
    },
    {
      icon: FaRocket,
      title: "Launch",
      description: "Deploying and scaling your solution",
    },
  ];

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="w-full h-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Crafting Digital Excellence
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We're not just another tech company. We're your partner in digital
              transformation, bringing innovative solutions to life.
            </p>
          </motion.div>

          {/* Who We Are Section */}
          <motion.section {...fadeInUp} className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Who We Are
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-white/80">
                  To empower businesses with cutting-edge digital solutions that
                  drive growth, innovation, and success in the modern digital
                  landscape.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-white/80">
                  To be the leading force in digital transformation, setting new
                  standards for excellence and innovation in the tech industry.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* How We Work Section */}
          <motion.section {...fadeInUp} className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              How We Work
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processes.map((process, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <process.icon className="text-4xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-white/80 text-sm">{process.description}</p>
                  {index < processes.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-blue-500/50"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section {...fadeInUp} className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section {...fadeInUp} className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FaRocket,
                  title: "Fast Delivery",
                  description: "Quick turnaround without compromising quality",
                },
                {
                  icon: FaUsers,
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience",
                },
                {
                  icon: FaCheckCircle,
                  title: "Quality Assured",
                  description: "Rigorous testing and perfect execution",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
                >
                  <feature.icon className="text-4xl text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
