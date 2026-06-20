import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMobile, FaCloud, FaPaintBrush } from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Building responsive, modern, and highly scalable web applications that drive business value.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      icon: FaMobile,
      title: "Mobile Apps",
      description: "Creating native and cross-platform mobile solutions.",
      span: "md:col-span-1",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Secure and resilient cloud infrastructure architecture.",
      span: "md:col-span-1",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Crafting intuitive, minimalist, and engaging user experiences.",
      span: "md:col-span-2",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0B0C]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Our Services
              </h2>
              <p className="text-lg text-neutral-400 max-w-xl">
                Architecting digital excellence through premium solutions and structured design.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`group relative bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-neutral-900 ${service.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 mb-12">
                <service.icon className="text-3xl text-neutral-400 mb-6 transition-colors duration-500 group-hover:text-white" />
                <h3 className="text-2xl font-bold text-white tracking-wide mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed transform transition-all duration-500 group-hover:text-neutral-300">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 flex items-center text-sm font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-[#14B8A6] transition-colors duration-500">
                <span className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Explore Service
                </span>
                <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
