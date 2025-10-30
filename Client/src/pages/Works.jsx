import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  FaFigma,
  FaCode,
  FaRocket,
  FaTools,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaChartLine,
  FaBrain,
  FaFlask,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

const processSteps = [
  {
    icon: FaBrain,
    title: "Discovery & Strategy",
    description: "Deep dive into business goals and user needs",
    tasks: ["User Research", "Competitive Analysis", "Project Roadmap"],
    color: "from-blue-400 to-indigo-400",
  },
  {
    icon: FaFigma,
    title: "Design & Prototype",
    description: "Convert ideas into visual interfaces",
    tasks: ["UI/UX Design", "Wireframing", "Interactive Prototypes"],
    color: "from-purple-400 to-pink-400",
  },
  {
    icon: FaCode,
    title: "Development",
    description: "Engineering with modern tech stack",
    tasks: ["Frontend/Backend", "Testing", "Code Reviews"],
    color: "from-emerald-400 to-teal-400",
  },
  {
    icon: FaRocket,
    title: "Launch & Scale",
    description: "Deploy and monitor performance",
    tasks: ["CI/CD", "Analytics", "Optimization"],
    color: "from-orange-400 to-red-400",
  },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience with real-time inventory and analytics",
    tech: ["Next.js", "Node.js", "MongoDB"],
    metrics: ["2.3x Revenue Growth", "65% Faster Loading", "99.9% Uptime"],
    category: "web",
    image: "/project1.jpg",
  },
  {
    title: "Healthcare App",
    description:
      "Patient management system with telehealth features and real-time scheduling",
    tech: ["React Native", "TypeScript", "GraphQL"],
    metrics: ["4.8 App Rating", "12k+ Users", "HIPAA Compliant"],
    category: "mobile",
    image: "/project2.jpg",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization and reporting platform with ML insights",
    tech: ["React", "Python", "TensorFlow"],
    metrics: ["500k+ Data Points", "Real-time ML", "Custom Reports"],
    category: "web",
    image: "/project3.jpg",
  },
  {
    title: "IoT Platform",
    description:
      "Industrial IoT monitoring and control system with predictive maintenance",
    tech: ["Vue.js", "Node.js", "TimescaleDB"],
    metrics: ["45% Cost Reduction", "24/7 Monitoring", "99% Accuracy"],
    category: "web",
    image: "/project4.jpg",
  },
];

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeStep, setActiveStep] = useState(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      <SEO
        title="Our Work - Featured Projects & Case Studies"
        description="Explore WebNexity's portfolio of successful web development, mobile app, and digital transformation projects. See how we help businesses achieve their digital goals."
        keywords={[
          "web development portfolio",
          "mobile app portfolio",
          "UI/UX case studies",
          "web design projects",
          "successful web applications",
          "digital transformation cases",
          "react development projects",
          "node.js applications",
          "cloud deployment examples",
          "web development case studies",
          "enterprise solutions",
          "digital project showcase",
          "web development results",
          "client success stories",
          "development process",
        ]}
        route="/works"
      />
      <div className="relative min-h-screen bg-black text-white">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-[0.15]">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10"></div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative container mx-auto px-4 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How We Build
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Digital Excellence
              </span>
            </h1>
            <p className="text-lg text-white/70">
              From concept to deployment, we follow a proven process to deliver
              exceptional results
            </p>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Process Steps */}
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setActiveStep(index)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="relative"
                >
                  <div
                    className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                      activeStep === index ? "scale-[1.02] bg-white/10" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                      >
                        <step.icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/70 mt-1">{step.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {step.tasks.map((task, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-white/70"
                            >
                              {task}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[1.5rem] top-[4.5rem] h-[2rem] w-px bg-gradient-to-b from-white/20 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Interactive Preview */}
            <div className="lg:sticky lg:top-8 h-[30rem]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-6 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl"></div>

                <div className="relative h-full rounded-xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)] overflow-hidden">
                    <div className="space-y-4">
                      <div className="h-24 rounded-lg bg-white/5 animate-pulse"></div>
                      <div className="h-32 rounded-lg bg-white/5 animate-pulse delay-75"></div>
                      <div className="h-40 rounded-lg bg-white/5 animate-pulse delay-150"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-40 rounded-lg bg-white/5 animate-pulse delay-100"></div>
                      <div className="h-24 rounded-lg bg-white/5 animate-pulse delay-200"></div>
                      <div className="h-32 rounded-lg bg-white/5 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="relative container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
            <p className="mt-4 text-white/70">
              Explore our successful project deliveries
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["all", "web", "mobile"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-all ${
                    selectedCategory === category
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-white/10 hover:border-white/20 text-white/70 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center p-2 rounded-lg bg-white/5"
                        >
                          <p className="text-sm text-white/90">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="relative container mx-auto px-4 pb-20">
          <div className="relative rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-blue-500/30 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl"></div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to build something amazing?
                </h3>
                <p className="mt-2 text-white/70">
                  Let's discuss your project and create something extraordinary
                  together.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                >
                  Start a Project
                </a>
                <a
                  href="#process"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
