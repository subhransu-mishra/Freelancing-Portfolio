import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCreditCard,
  FiSettings,
  FiCode,
  FiServer,
  FiDatabase,
} from "react-icons/fi";
import { Link } from "react-router-dom";
// Floating icon component
const FloatingIcon = ({ icon: Icon, delay, duration, x, y, style }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      y: [0, y, 0],
      x: [0, x, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    className="absolute text-white/20 text-4xl"
    style={style}
  >
    <Icon />
  </motion.div>
);

const WhyChooseUs = () => {
  const strengths = [
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "Tailored Solutions",
      description:
        "Custom-built software designed specifically for your business needs",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Expert Team",
      description:
        "Dedicated professionals with deep expertise in modern digital technologies",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Agile Process",
      description:
        "Iterative development approach ensuring rapid delivery and adaptability",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing protocols to deliver robust and bug-free applications",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Timely Delivery",
      description:
        "Commitment to meeting deadlines without compromising on product quality",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description:
        "Utilizing the latest frameworks and tools for scalable architecture",
      color: "from-neutral-700 to-neutral-600",
      borderColor: "border-neutral-800",
      iconBg: "bg-neutral-800",
      iconColor: "text-[#14B8A6]",
      bgGradient: "bg-neutral-900/50",
    },
  ];

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative py-20 px-4 lg:px-0 bg-[#0B0B0C] overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 ">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      <FloatingIcon
        icon={FiCode}
        delay={0}
        duration={8}
        x={20}
        y={-50}
        style={{ top: "15%", left: "5%" }}
      />
      <FloatingIcon
        icon={FiServer}
        delay={1}
        duration={7}
        x={-30}
        y={-40}
        style={{ top: "25%", right: "10%" }}
      />
      <FloatingIcon
        icon={FiDatabase}
        delay={2}
        duration={9}
        x={25}
        y={-30}
        style={{ top: "45%", left: "15%" }}
      />
      <FloatingIcon
        icon={FiCode}
        delay={3}
        duration={8}
        x={-20}
        y={-35}
        style={{ top: "65%", right: "20%" }}
      />
      <FloatingIcon
        icon={FiServer}
        delay={4}
        duration={7}
        x={15}
        y={-45}
        style={{ top: "35%", left: "30%" }}
      />

      {/* Glowing orbs removed */}

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us?</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Delivering exceptional value through technology excellence and
            client-centric approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className={`group p-8 rounded-xl backdrop-blur-sm border ${item.borderColor} transition-all duration-300 hover:border-opacity-50 hover:shadow-lg ${item.bgGradient}`}
            >
              <div className="flex items-start mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-3 rounded-lg ${item.iconBg} ${item.iconColor} shadow-lg`}
                >
                  {item.icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {item.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shiny-button group px-8 py-3 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 text-white font-medium text-sm tracking-widest uppercase">Start Your Project</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
