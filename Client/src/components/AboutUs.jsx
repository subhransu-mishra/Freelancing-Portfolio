import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiUsers,
  FiCheckCircle,
  FiTarget,
  FiCalendar,
  FiAward,
} from "react-icons/fi";

function AboutUs() {
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    clients: 0,
  });

  const targetCounts = {
    projects: 30,
    years: 5,
    clients: 25,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounters();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about-us-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const startCounters = () => {
    const duration = 2000; // 2 seconds
    const interval = 20; // update every 20ms
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;

      setCounts({
        projects: Math.min(
          Math.ceil((targetCounts.projects * step) / steps),
          targetCounts.projects
        ),
        years: Math.min(
          Math.ceil((targetCounts.years * step) / steps),
          targetCounts.years
        ),
        clients: Math.min(
          Math.ceil((targetCounts.clients * step) / steps),
          targetCounts.clients
        ),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
  };

  // Animation variants for Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // const services = [
  //   {
  //     icon: <FiCode className="w-8 h-8" />,
  //     title: "Web Development",
  //     description:
  //       "Cutting-edge websites with responsive design and seamless user experiences.",
  //   },
  //   {
  //     icon: <FiSmartphone className="w-8 h-8" />,
  //     title: "Mobile Applications",
  //     description:
  //       "Native and cross-platform apps that deliver exceptional performance.",
  //   },
  //   {
  //     icon: <FiServer className="w-8 h-8" />,
  //     title: "Backend Solutions",
  //     description:
  //       "Scalable, secure backend systems that power your digital transformation.",
  //   },
  //   {
  //     icon: <FiUsers className="w-8 h-8" />,
  //     title: "UI/UX Design",
  //     description:
  //       "Intuitive interfaces that captivate users and drive engagement.",
  //   },
  // ];

  return (
    <section
      id="about-us-section"
      className="bg-black relative overflow-hidden py-20 md:py-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        {/* Floating icons background */}
        <motion.div
          className="absolute top-20 left-10 opacity-5"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiCode className="w-24 h-24 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-5"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiServer className="w-32 h-32 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 opacity-5"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiSmartphone className="w-20 h-20 text-cyan-400" />
        </motion.div>

        {/* Gradient orbs */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Who We Are
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
            A dynamic tech agency of innovators, crafting cutting-edge digital
            solutions in the freelancing landscape.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Transforming Ideas into Digital Reality
            </h3>
            <p className="text-gray-300 mb-6">
              As newcomers to the freelancing industry, we bring fresh
              perspectives and innovative approaches to digital solutions. Our
              team specializes in end-to-end development of websites and
              applications, delivering comprehensive services that empower
              businesses to thrive in the digital landscape.
            </p>
            <p className="text-gray-300 mb-6">
              With a portfolio of over 30 successfully launched projects, our
              team has cultivated extensive knowledge and expertise in creating
              seamless digital experiences. We pride ourselves on our technical
              proficiency, creative problem-solving abilities, and unwavering
              commitment to client satisfaction.
            </p>

            <ul className="space-y-3">
              {[
                "Full-stack development expertise",
                "Responsive and user-centric design",
                "Scalable and secure architecture",
                "Continuous support and maintenance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FiCheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Projects Counter */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 border border-blue-500/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FiTarget className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-5xl font-bold text-white mb-2">
                {counts.projects
                  .toString()
                  .split("")
                  .map((digit, index) => (
                    <span
                      key={index}
                      className="counter-digit"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {digit}
                    </span>
                  ))}
                <span className="text-blue-400">+</span>
              </h4>
              <p className="text-gray-300">Completed Projects</p>
            </motion.div>

            {/* Years Counter */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FiCalendar className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-5xl font-bold text-white mb-2">
                {counts.years
                  .toString()
                  .split("")
                  .map((digit, index) => (
                    <span
                      key={index}
                      className="counter-digit"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {digit}
                    </span>
                  ))}
                <span className="text-purple-400">+</span>
              </h4>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>

            {/* Clients Counter */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm md:col-span-2"
            >
              <div className="bg-cyan-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FiAward className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-5xl font-bold text-white mb-2">
                {counts.clients
                  .toString()
                  .split("")
                  .map((digit, index) => (
                    <span
                      key={index}
                      className="counter-digit"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {digit}
                    </span>
                  ))}
                <span className="text-cyan-400">+</span>
              </h4>
              <p className="text-gray-300">Successful Clients</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        {/* <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white mb-12 text-center"
          >
            Our Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="bg-blue-500/10 group-hover:bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 text-blue-400 group-hover:text-blue-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-all duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-all duration-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/20 rounded-xl p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Partner with us to build innovative, scalable, and user-centric
              digital solutions that drive growth and engagement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/30"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
