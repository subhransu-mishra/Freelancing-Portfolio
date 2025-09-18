import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobile, FaCloud } from "react-icons/fa";

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Modern, responsive websites using the latest technologies",
    },
    {
      icon: FaMobile,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: FaServer,
      title: "Backend Services",
      description: "Scalable and secure server-side solutions",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment services",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <service.icon className="text-4xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-white/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
