import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  Globe,
  CheckCircle,
  X,
} from "lucide-react";

export const LetsTalk = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      // Reset form after success animation
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "techwebnexity@gmail.com",
      link: "mailto:techwebnexity@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9853779652",
      link: "tel:+919853779652",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhubaneswar, India ",
      link: "#",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Sat: 9AM-9PM PST",
      link: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0B0B0C] text-white relative overflow-hidden"
    >
      {/* Background Effects Removed */}

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-5xl font-bold mb-6 text-white tracking-wide"
            variants={itemVariants}
          >
            Let's Talk
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to bring your digital vision to life? We're here to help you
            build cutting-edge websites and applications that drive results.
          </motion.p>
          <motion.div
            className="flex items-center justify-center mt-8 space-x-2"
            variants={itemVariants}
          >
            <Globe className="text-blue-400" size={20} />
            <span className="text-gray-400">Available worldwide</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h3
              className="text-3xl font-semibold mb-8"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={() =>
                    info.link !== "#" && window.open(info.link, "_blank")
                  }
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-neutral-800 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={24} className="text-[#14B8A6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200 mb-1">
                        {info.label}
                      </h4>
                      <p className="text-gray-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 mt-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <h4 className="text-2xl font-semibold mb-4 text-[#14B8A6]">
                Why Choose Us?
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Expert team of developers & designers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Modern tech stack & best practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>24/7 support & maintenance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Fast delivery & competitive pricing</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
            variants={formVariants}
          >
            <motion.h3
              className="text-3xl font-semibold mb-8"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="grid sm:grid-cols-2 gap-6"
                  variants={itemVariants}
                >
                  <div className="relative">
                    <User
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-3 text-gray-400"
                      size={20}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                </motion.div>

                <motion.div className="relative" variants={itemVariants}>
                  <MessageSquare
                    className="absolute left-3 top-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                  />
                </motion.div>

                <motion.div className="relative" variants={itemVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    className="w-full p-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shiny-button group text-white font-semibold py-4 px-8 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-[#14B8A6] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ) : (
                    <span className="relative z-10 flex items-center space-x-2 text-sm tracking-widest uppercase">
                      <Send size={18} />
                      <span>Send Message</span>
                    </span>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                variants={successVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={40} className="text-white" />
                </motion.div>
                <h4 className="text-2xl font-semibold text-green-400 mb-4">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <motion.button
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  <X size={20} />
                  <span>Send Another Message</span>
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LetsTalk;
