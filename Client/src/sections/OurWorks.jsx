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
    <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
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
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full"
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
