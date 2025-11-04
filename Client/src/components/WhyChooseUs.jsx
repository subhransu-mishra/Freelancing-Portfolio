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
      color: "from-purple-500 to-blue-500",
      gradient: "from-purple-900/50 to-blue-900/50",
      borderColor: "border-purple-500/20",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      bgGradient: "bg-gradient-to-br from-purple-900/50 to-blue-900/50",
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: "Future-Proof Tech",
      description: "Scalable architectures that grow with your business",
      color: "from-green-500 to-cyan-500",
      gradient: "from-green-900/50 to-cyan-900/50",
      borderColor: "border-green-500/20",
      iconBg: "bg-green-500/20",
      iconColor: "text-green-400",
      bgGradient: "bg-gradient-to-br from-green-900/50 to-cyan-900/50",
    },
    {
      icon: <FiCreditCard className="w-6 h-6" />,
      title: "Transparent Pricing",
      description: "Competitive rates with no hidden costs",
      color: "from-amber-500 to-orange-500",
      gradient: "from-amber-900/50 to-orange-900/50",
      borderColor: "border-amber-500/20",
      iconBg: "bg-amber-500/20",
      iconColor: "text-amber-400",
      bgGradient: "bg-gradient-to-br from-amber-900/50 to-orange-900/50",
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: "Quick Delivery",
      description: "Agile development process ensuring timely delivery",
      color: "from-rose-500 to-pink-500",
      gradient: "from-rose-900/50 to-pink-900/50",
      borderColor: "border-rose-500/20",
      iconBg: "bg-rose-500/20",
      iconColor: "text-rose-400",
      bgGradient: "bg-gradient-to-br from-rose-900/50 to-pink-900/50",
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "Seasoned developers with 10+ years average experience",
      color: "from-indigo-500 to-blue-500",
      gradient: "from-indigo-900/50 to-blue-900/50",
      borderColor: "border-indigo-500/20",
      iconBg: "bg-indigo-500/20",
      iconColor: "text-indigo-400",
      bgGradient: "bg-gradient-to-br from-indigo-900/50 to-blue-900/50",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing protocols for flawless performance",
      color: "from-emerald-500 to-teal-500",
      gradient: "from-emerald-900/50 to-teal-900/50",
      borderColor: "border-emerald-500/20",
      iconBg: "bg-emerald-500/20",
      iconColor: "text-emerald-400",
      bgGradient: "bg-gradient-to-br from-emerald-900/50 to-teal-900/50",
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
    <section className="relative py-20 px-4 lg:px-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
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

      {/* Glowing orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer px-8 py-3.5 hover:bg-black bg-gradient-to-r from-[#006CAA]/40 via-[#581C87]/40 to-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,108,170,0.35)]  rounded-xl font-bold text-white shadow-lg shadow-purple-500/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
