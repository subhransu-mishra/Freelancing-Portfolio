import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience with real-time inventory and analytics. We engineered a scalable architecture that handles high traffic spikes during seasonal sales while maintaining sub-second load times.",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
    metrics: ["2.3x Revenue Growth", "65% Faster Loading", "99.9% Uptime"],
  },
  {
    title: "Healthcare App",
    description:
      "Patient management system with telehealth features and real-time scheduling. We focused on security, HIPAA compliance, and an intuitive user interface for both patients and healthcare providers.",
    tech: ["React Native", "TypeScript", "GraphQL", "AWS"],
    metrics: ["4.8 App Rating", "12k+ Users", "HIPAA Compliant"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization and reporting platform with ML insights. The dashboard processes millions of data points daily to provide actionable insights for enterprise executives.",
    tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
    metrics: ["500k+ Data Points", "Real-time ML", "Custom Reports"],
  },
  {
    title: "IoT Platform",
    description:
      "Industrial IoT monitoring and control system with predictive maintenance. This platform connects thousands of sensors across factory floors to minimize downtime and optimize production.",
    tech: ["Vue.js", "Node.js", "TimescaleDB", "MQTT"],
    metrics: ["45% Cost Reduction", "24/7 Monitoring", "99% Accuracy"],
  },
];

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <>
      <SEO
        title="Our Work - Featured Projects & Case Studies"
        description="Explore WebNexity's portfolio of successful web development, mobile app, and digital transformation projects."
        keywords={[
          "web development portfolio",
          "UI/UX case studies",
          "web design projects",
          "successful web applications",
          "digital transformation cases",
        ]}
        route="/works"
      />
      <div className="relative min-h-screen bg-[#0B0B0C] text-white overflow-hidden border-t border-neutral-800">
        
        {/* Hero Section */}
        <section className="relative container mx-auto px-4 pt-32 pb-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
              Selected <span className="text-[#14B8A6]">Works</span>
            </h1>
            <p className="text-lg text-neutral-400">
              A showcase of our most impactful digital solutions and case studies.
            </p>
          </motion.div>
        </section>

        {/* Project Slider Section */}
        <section className="relative container mx-auto px-4 py-12 pb-32 z-10">
          <div className="max-w-5xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 p-8 md:p-16 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent opacity-30"></div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <span className="text-neutral-500 font-mono tracking-widest uppercase text-xs mb-4 block">
                      Project 0{currentIndex + 1} / 0{projects.length}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-wide">
                      {activeProject.title}
                    </h2>
                    <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                      {activeProject.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="text-sm tracking-widest uppercase text-neutral-500 mb-4 font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 text-xs font-mono uppercase tracking-wider rounded border border-neutral-700/50 bg-neutral-800 text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <h4 className="text-sm tracking-widest uppercase text-neutral-500 mb-2 font-semibold md:hidden">Key Metrics</h4>
                    {activeProject.metrics.map((metric, i) => (
                      <div key={i} className="bg-neutral-800/50 border border-neutral-700/30 p-6 rounded-xl flex items-center gap-4 group hover:border-[#14B8A6]/30 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#14B8A6] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <p className="text-lg text-white font-medium">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={handlePrev}
                className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#14B8A6] transition-colors">
                  <FiArrowLeft className="w-5 h-5" />
                </div>
                <span className="text-sm tracking-widest uppercase font-medium hidden sm:block">Previous</span>
              </button>

              <button
                onClick={handleNext}
                className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
              >
                <span className="text-sm tracking-widest uppercase font-medium hidden sm:block">Next Project</span>
                <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#14B8A6] transition-colors">
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative container mx-auto px-4 pb-24 z-10">
          <div className="relative rounded-2xl bg-neutral-900/50 border border-neutral-800 p-12 text-center overflow-hidden">
            <h3 className="text-3xl font-bold mb-6 tracking-wide text-white">
              Ready to build something amazing?
            </h3>
            <p className="mb-10 text-neutral-400 max-w-xl mx-auto text-lg">
              Let's discuss your project and create something extraordinary together.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="shiny-button inline-flex items-center gap-2 px-8 py-4 rounded-full text-white tracking-widest uppercase text-sm font-medium transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
