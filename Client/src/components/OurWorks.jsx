import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 0,
      title: "Seasand Properties",
      description: "A premium property listing platform featuring advanced search functionality, virtual tours, and a seamless booking system for property viewings. We engineered a robust CMS integration and scalable architecture.",
      features: [
        "Interactive property maps",
        "Virtual property tours",
        "Advanced filtering system",
        "Appointment scheduling"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Vercel"],
    },
    {
      id: 1,
      title: "Urban Bites",
      description: "A comprehensive digital solution featuring online menu browsing, table reservations, and a seamless food delivery system, enhancing the dining experience for a modern bar and cafe.",
      features: [
        "Digital menu with filtering",
        "Real-time table booking",
        "Online ordering & delivery",
        "Loyalty program integration"
      ],
      technologies: ["React Native", "Firebase", "Stripe", "NodeJS"],
    },
    {
      id: 2,
      title: "LearnSphere",
      description: "An innovative learning management system with course enrollment, live virtual classrooms, progress tracking, and comprehensive assessment tools.",
      features: [
        "Course enrollment system",
        "Live virtual classrooms",
        "Progress tracking dashboard",
        "Assessment & certification"
      ],
      technologies: ["React", "Django", "PostgreSQL", "WebRTC"],
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[currentIndex];

  return (
    <div className="relative bg-[#0B0B0C] py-24 px-4 md:px-8 overflow-hidden border-t border-neutral-800" id='our-work'>
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-wide">Selected <span className="text-[#14B8A6]">Works</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio showcasing innovative digital solutions across diverse industries.
            Each project represents our commitment to excellence and client success.
          </p>
        </div>
        
        {/* Project Slider Section */}
        <div className="relative">
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
                  <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-wide">
                    {activeProject.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed mb-8 text-lg">
                    {activeProject.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm tracking-widest uppercase text-neutral-500 mb-4 font-semibold">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, i) => (
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
                  <h4 className="text-sm tracking-widest uppercase text-neutral-500 mb-2 font-semibold">Key Features</h4>
                  {activeProject.features.map((feature, i) => (
                    <div key={i} className="bg-neutral-800/50 border border-neutral-700/30 p-5 rounded-xl flex items-center gap-4 group hover:border-[#14B8A6]/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#14B8A6] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <p className="text-base text-white font-medium">{feature}</p>
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
              className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#14B8A6] transition-colors">
                <FiArrowLeft className="w-5 h-5" />
              </div>
              <span className="text-sm tracking-widest uppercase font-medium hidden sm:block">Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm tracking-widest uppercase font-medium hidden sm:block">Next Project</span>
              <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:border-[#14B8A6] transition-colors">
                <FiArrowRight className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link to="/works">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shiny-button px-8 py-3.5 rounded-full font-medium text-white text-sm tracking-widest uppercase transition-all duration-300"
            >
              View All Works
            </motion.button>
          </Link>
        </div>
        
      </div>
    </div>
  );
}