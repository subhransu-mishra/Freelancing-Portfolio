import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Works = () => {
  void motion;
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online shopping experience with real-time inventory",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
    },
    {
      title: "Healthcare App",
      description: "Patient management system with telehealth features",
      tech: ["React Native", "Firebase", "WebRTC"],
      image: "/project2.jpg",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics and reporting platform",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      image: "/project3.jpg",
    },
    {
      title: "Social Network",
      description: "Community platform with real-time messaging",
      tech: ["Next.js", "GraphQL", "AWS"],
      image: "/project4.jpg",
    },
  ];

  return (
    <Layout>
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="w-full h-full grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Works
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Showcasing our best projects and digital solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
              >
                <div className="relative h-48 bg-black/50">
                  {/* Project image would go here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Works;
