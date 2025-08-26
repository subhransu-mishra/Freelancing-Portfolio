import { motion } from "framer-motion";
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
        "Creating intuitive and engaging user interfaces that enhance user experience and drive conversions.",
    },
    {
      icon: <FiGlobe />,
      title: "Website Development",
      description:
        "Building responsive and scalable websites using modern frameworks and best practices.",
    },
    {
      icon: <FiSmartphone />,
      title: "App Development",
      description:
        "Developing cross-platform mobile applications with native performance and seamless user experience.",
    },
    {
      icon: <FiDatabase />,
      title: "Hosting & Deployment",
      description:
        "Secure cloud hosting solutions and automated deployment pipelines for reliable application delivery.",
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
    <section className="min-h-screen bg-black py-20 px-4 lg:px-0" id="services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
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
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl text-white"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 animate-spin-slow -z-10" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                  Learn More <FiArrowRight className="text-lg" />
                </button>
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
          <button className="px-8 cursor-pointer py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-bold text-white hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/30">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
