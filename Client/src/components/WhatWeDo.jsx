import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiSmartphone,
  FiGlobe,
  FiCode,
  FiDatabase,
  FiArrowRight,
} from "react-icons/fi";

const WhatWeDo = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user interfaces that enhance user experience and drive conversions. We prioritize user-centered design, meticulous wireframing, and interactive prototyping to ensure optimal usability.",
    },
    {
      icon: <FiGlobe />,
      title: "Website Development",
      description:
        "Building responsive and scalable websites using modern frameworks and best practices. From landing pages to complex web applications, we focus on performance, SEO, and accessible code architecture.",
    },
    {
      icon: <FiSmartphone />,
      title: "App Development",
      description:
        "Developing cross-platform mobile applications with native performance and seamless user experience. We build robust solutions that look and feel great on both iOS and Android devices.",
    },
    {
      icon: <FiDatabase />,
      title: "Hosting & Deployment",
      description:
        "Secure cloud hosting solutions and automated deployment pipelines for reliable application delivery. We manage the infrastructure so you can focus entirely on your business growth.",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen bg-[#0B0B0C] py-20 px-4 lg:px-0 border-t border-neutral-800" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 text-white tracking-wide">
            What We Do for You
          </h2>
          <p className="text-gray-400 text-xl">
            Crafting digital excellence through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group relative p-8 flex flex-col justify-between overflow-hidden bg-neutral-900/50 backdrop-blur-lg border border-neutral-800 transition-all duration-500 hover:border-[#14B8A6]/50 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative w-14 h-14 flex items-center justify-center bg-neutral-800 rounded-lg transition-transform duration-500 group-hover:scale-110">
                    <motion.div className="text-2xl text-[#14B8A6]">
                      {service.icon}
                    </motion.div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="flex items-center text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-[#14B8A6] transition-colors duration-500"
                >
                  <span className="transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                    Learn More
                  </span>
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-3 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    &rarr;
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            to="/services"
            className="shiny-button inline-flex items-center gap-2 px-8 py-3 rounded-full text-white tracking-widest uppercase text-sm font-medium transition-all duration-300"
          >
            <span>Explore Services</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
