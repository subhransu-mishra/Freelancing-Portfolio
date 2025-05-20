import { useState } from "react";
import { Compass, Code, TestTube, CheckCircle, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "UI/UX Design",
      icon: <Compass />,
      description:
        "We create intuitive and engaging experiences through thoughtful research, wireframing, and prototyping that prioritize your users' needs.",
      features: [
        "User Research",
        "Wireframing",
        "Interactive Prototypes",
        "Visual Design",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 1,
      title: "Website Build",
      icon: <Code />,
      description:
        "Our development team transforms designs into clean, efficient, and scalable code that brings your vision to life.",
      features: [
        "Frontend Development",
        "Backend Integration",
        "Responsive Design",
        "Performance Optimization",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 2,
      title: "Testing",
      icon: <TestTube />,
      description:
        "Rigorous quality assurance across devices and platforms ensures your website functions flawlessly in every scenario.",
      features: [
        "Cross-browser Testing",
        "Mobile Responsiveness",
        "Performance Benchmarks",
        "User Testing",
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 3,
      title: "Final Output",
      icon: <CheckCircle />,
      description:
        "We refine and polish every detail before delivering a complete solution that exceeds expectations.",
      features: [
        "Final Review",
        "Content Integration",
        "Client Approval",
        "Pre-launch Checklist",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "Deployment",
      icon: <Rocket />,
      description:
        "Your website goes live with ongoing support to ensure continued success in the digital landscape.",
      features: [
        "Server Configuration",
        "Domain Setup",
        "Performance Monitoring",
        "Maintenance Support",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 md:px-8" id="ourprocess">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We follow a streamlined approach to deliver exceptional digital
            experiences that drive results.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2">
            <motion.div
              className={`h-full bg-gradient-to-r ${steps[activeStep].color}`}
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="flex justify-between relative">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                className="relative z-10 flex flex-col items-center"
                onMouseEnter={() => setActiveStep(step.id)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.id <= activeStep
                      ? `bg-gradient-to-r ${step.color} text-white`
                      : "bg-gray-800 text-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                <h3 className="mt-4 font-semibold text-center">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="lg:hidden flex overflow-x-auto snap-x scrollbar-hide border-b border-gray-700 mb-6">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`px-4 py-3 cursor-pointer whitespace-nowrap font-medium text-sm snap-start ${
                  activeStep === step.id
                    ? "text-white border-b-2 border-purple-500"
                    : "text-gray-400"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.title}
              </motion.button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            <motion.div
              className="flex items-start gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white"
              >
                {steps[activeStep].icon}
              </motion.div>
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-400">{steps[activeStep].description}</p>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {steps[activeStep].features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-700 bg-opacity-30 p-4 rounded-lg flex items-center gap-3 hover:bg-opacity-50 transition-all duration-300"
                >
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`}
                  ></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-between items-center bg-gray-800 px-6 py-4 border-t border-gray-700">
            <motion.button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`px-4 cursor-pointer py-2 rounded-lg transition-all ${
                activeStep === 0
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: activeStep === 0 ? 1 : 1.05 }}
              whileTap={{ scale: activeStep === 0 ? 1 : 0.95 }}
            >
              Previous
            </motion.button>

            <div className="flex space-x-1">
              {steps.map((step) => (
                <motion.button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`h-2 cursor-pointer rounded-full transition-all ${
                    activeStep === step.id
                      ? `bg-gradient-to-r ${step.color} w-6`
                      : "bg-gray-600 w-2"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={() =>
                setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
              }
              disabled={activeStep === steps.length - 1}
              className={`px-4 cursor-pointer py-2 rounded-lg transition-all ${
                activeStep === steps.length - 1
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:bg-gray-700"
              }`}
              whileHover={{ scale: activeStep === steps.length - 1 ? 1 : 1.05 }}
              whileTap={{ scale: activeStep === steps.length - 1 ? 1 : 0.95 }}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
