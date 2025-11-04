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
          <h2 className="text-5xl font-bold mb-4 text-white bg-gradient-to-r from-[#006CAA] via-[#581C87] to-[#2563EB] bg-clip-text">
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
              className="group relative p-6 rounded-xl bg-black/20 backdrop-blur-lg border border-white/5 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-[#006CAA]/20 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#006CAA]/20 via-[#581C87]/20 to-[#2563EB]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-r from-[#006CAA] via-[#581C87] to-[#2563EB] rounded-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="text-3xl text-white"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#006CAA] via-[#581C87] to-[#2563EB] rounded-lg opacity-0 group-hover:opacity-100 animate-spin-slow -z-10" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-full p-[2px] cursor-pointer bg-gradient-to-r from-[#006CAA]/40 via-[#581C87]/40 to-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,108,170,0.35)] text-white font-medium"
                >
                  Learn More <FiArrowRight className="text-lg" />
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
            className="relative group inline-flex items-center justify-center rounded-full p-[2px] cursor-pointer bg-gradient-to-r from-[#006CAA]/40 via-[#581C87]/40 to-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,108,170,0.35)]"
          >
            <span className="relative inline-flex items-center gap-2 px-7 py-2 rounded-full bg-gradient-to-r from-[#006CAA]/40 via-[#581C87]/40 to-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,108,170,0.35)]">
              <span className="font-medium tracking-wide">
                Explore Services
              </span>
              <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
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
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
