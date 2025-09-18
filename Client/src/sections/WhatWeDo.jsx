import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaCloud, FaPaintBrush } from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Building responsive and modern web applications",
    },
    {
      icon: FaMobile,
      title: "Mobile Apps",
      description: "Creating native and cross-platform mobile solutions",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-lg text-white/80">
            Delivering excellence across digital solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center"
            >
              <service.icon className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
