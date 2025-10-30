import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {motion} from 'framer-motion';
import {
  FaRocket,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { number: "150+", label: "Projects" },
  { number: "50+", label: "Clients" },
  { number: "5", label: "Years" },
  { number: "99%", label: "Satisfaction" },
];

const processes = [
  {
    icon: FaLightbulb,
    title: "Discovery",
    desc: "We dig into user needs, analytics and business goals.",
  },
  {
    icon: FaCogs,
    title: "Strategy",
    desc: "Architecture, roadmaps and measurable KPIs.",
  },
  {
    icon: FaCode,
    title: "Build",
    desc: "High‑quality engineering, tests and CI/CD.",
  },
  {
    icon: FaRocket,
    title: "Scale",
    desc: "Monitoring, performance tuning and growth ops.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Expert Digital Solutions Team"
        description="Learn about WebNexity's expert team of developers, designers, and digital strategists. We bring years of experience in web development, UI/UX design, and cloud solutions."
        keywords={[
          "about webnexity",
          "digital agency team",
          "expert developers",
          "UI/UX designers",
          "web development team",
          "professional web agency",
          "tech consulting team",
          "digital transformation experts",
          "web solution providers",
          "cloud deployment specialists",
        ]}
        route="/about"
      />
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* subtle grid and glow */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 mix-blend-overlay"></div>
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-white/6"></div>
            ))}
          </div>
        </div>

        <section className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-sm tracking-wider text-white/50 mb-4">ABOUT</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              We design & build digital products that grow businesses
            </h1>
            <p className="mt-6 text-white/70 text-lg">
              An interdisciplinary team combining product strategy, design
              systems, and engineering to deliver meaningful results.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition">
                Work with us
              </a>
              <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white/60 hover:text-white transition">
                See our process
              </a>
            </div>
          </motion.div>
        </section>

        {/* Two-column feature area */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl p-6 border border-white/10 bg-gradient-to-br from-purple-700/10 to-blue-700/10 overflow-hidden">
                <div className="aspect-[4/3] rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 grid place-items-center">
                  <div className="text-center px-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg mb-4 flex items-center justify-center text-white text-2xl">
                      WN
                    </div>
                    <p className="text-white/80">
                      We marry product thinking with engineering rigor to ship
                      faster and iterate with confidence.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 text-white/70">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-cyan-400" />{" "}
                    <span>Cross-functional team</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fade}
              className="lg:col-span-7"
            >
              <h2 className="text-2xl font-bold mb-4">Our approach</h2>
              <p className="text-white/70 mb-6">
                We focus on outcomes: reduce time-to-market, increase engagement
                and build maintainable systems.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {processes.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/8 bg-white/3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center text-xl text-blue-300">
                        <p className="sr-only">{p.title}</p>
                        <p className="text-2xl">
                          {React.createElement(p.icon)}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{p.title}</h4>
                        <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-white/8 bg-white/3 text-center"
              >
                <div className="text-3xl font-bold text-white mb-1">
                  {s.number}
                </div>
                <div className="text-sm text-white/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16 relative z-10">
          <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold">
                  Ready to start your project?
                </h3>
                <p className="text-white/70 mt-1">
                  Talk with our team and get a tailored plan to move forward.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <a className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 text-black font-semibold">
                  Let’s talk
                </a>
                <a className="text-white/70">See pricing</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
