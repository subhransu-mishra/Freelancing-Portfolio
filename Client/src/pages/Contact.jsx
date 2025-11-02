import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaClock,
  FaChevronDown,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of web development services including custom website design, e-commerce solutions, web applications, mobile-responsive development, and ongoing maintenance and support.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while more complex web applications can take 2-3 months or more. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process includes discovery, planning, design, development, testing, and deployment phases. We maintain clear communication throughout and provide regular updates on progress.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally after launch.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 pt-12 text-center text-white"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Let's discuss your next big project
        </motion.p>
      </motion.div>

      {/* Contact Information and Form Section */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-8 text-white"
          >
            <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <FaEnvelope className="text-2xl text-purple-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">techwebnexity@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <FaPhone className="text-2xl text-purple-400" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+91 9853779652</p>
                  <p className="text-gray-300">+91 7008207704</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4"
              >
                <FaClock className="text-2xl " />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-300">24/7</p>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-purple-400 hover:text-purple-300"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-purple-400 hover:text-purple-300"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-purple-400 hover:text-purple-300"
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-lg rounded-lg p-8"
          >
            <h2 className="text-3xl font-semibold mb-6 text-white">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-3xl font-semibold mb-8 text-white text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden"
              initial={false}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:text-purple-400 transition-colors duration-300"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
