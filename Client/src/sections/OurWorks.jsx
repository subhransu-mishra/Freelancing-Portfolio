import React from "react";
import { motion } from "framer-motion";

const OurWorks = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial transactions",
      tech: ["React Native", "Firebase"],
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system",
      tech: ["Vue.js", "Python", "PostgreSQL"],
    },
  ];

  return (
    <section className="py-24 bg-[#121214]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Works
          </h2>
          <p className="text-lg text-white/80">Some of our featured projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-neutral-900/50 border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-neutral-900"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-8">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700/50 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
