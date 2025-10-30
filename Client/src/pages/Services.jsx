import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { FaReact, FaNodeJs, FaCloud, FaMobileAlt } from "react-icons/fa";
import {
  SiFigma,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFlutter,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10 mr-2 mb-2">
    {children}
  </span>
);

export default function Services() {
  void motion;
  return (
    <Layout>
      <SEO
        title="Professional Web Development & Design Services"
        description="Comprehensive web development, mobile app development, UI/UX design, and cloud deployment services. From concept to deployment, we deliver cutting-edge digital solutions."
        keywords={[
          "web development services",
          "mobile app development",
          "UI/UX design services",
          "cloud deployment solutions",
          "full stack development",
          "react development services",
          "node.js development",
          "custom web applications",
          "responsive web design",
          "website optimization",
          "cloud hosting services",
          "web maintenance services",
          "enterprise web solutions",
          "e-commerce development",
          "progressive web apps",
        ]}
        route="/services"
      />
      {/* Page background */}
      <div className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -top-10 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />
        </div>

        {/* Hero */}
        <section className="relative container mx-auto px-4 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm tracking-widest text-white/50 mb-4">
              WHAT WE DO
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Premium Engineering, End‑to‑End
            </h1>
            <p className="mt-6 text-white/70 max-w-2xl mx-auto">
              Strategy, design, engineering and deployments built for modern
              startups and scale‑ups.
            </p>
          </motion.div>

          {/* Section index */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { id: "uiux", label: "UI/UX Solutions" },
              { id: "web", label: "Website Development" },
              { id: "apps", label: "Application Development" },
              { id: "deploy", label: "Deployments" },
            ].map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/30 transition"
              >
                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition" />
                <span className="relative">{s.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* UI/UX Solutions */}
        <section id="uiux" className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="aspect-[4/3] rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 grid grid-cols-6 grid-rows-4 gap-1 p-3">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-white/10 bg-white/5"
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-white/70">
                  <SiFigma className="text-pink-400" />
                  <span>
                    Wireframes • Flows • Prototypes • Component Libraries
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                UI/UX Solutions
              </h2>
              <p className="mt-4 text-white/70">
                We design experiences that convert. From discovery to
                high‑fidelity interfaces, our process is grounded in research
                and validated through rapid prototyping in Figma.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Research & Discovery",
                    desc: "Stakeholder interviews, analytics review, competitive audits, personas.",
                  },
                  {
                    title: "User Flows & IA",
                    desc: "Task flows, sitemaps, and information architecture for clarity.",
                  },
                  {
                    title: "Wireframes",
                    desc: "Low‑ to mid‑fidelity explorations to align stakeholders fast.",
                  },
                  {
                    title: "Design Systems",
                    desc: "Tokens, components, and documentation for scalable delivery.",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Pill>Figma</Pill>
                <Pill>Prototyping</Pill>
                <Pill>Usability Testing</Pill>
                <Pill>Design Tokens</Pill>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Website Development — MERN */}
        <section id="web" className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Content */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Website Development
              </h2>
              <p className="mt-4 text-white/70">
                We build blazing‑fast, SEO‑ready websites and web apps on the
                MERN stack. Our approach balances developer velocity with
                long‑term maintainability.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Frontend",
                    desc: "React/Next.js with Tailwind for rapid UI and accessibility‑first components.",
                  },
                  {
                    title: "Backend APIs",
                    desc: "Node.js + Express with clean architecture and data validation.",
                  },
                  {
                    title: "Databases",
                    desc: "MongoDB with aggregation pipelines, indexes, and Atlas best practices.",
                  },
                  {
                    title: "Performance",
                    desc: "SSR/SSG, image optimization, caching, and Core Web Vitals focus.",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-white/80">
                <FaReact className="text-cyan-400" /> React • <SiNextdotjs />{" "}
                Next.js • <FaNodeJs className="text-green-500" /> Node.js •{" "}
                <SiExpress /> Express •{" "}
                <SiMongodb className="text-emerald-400" /> MongoDB
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div {...fadeInUp} className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="aspect-[16/10] rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 w-full p-4">
                    <div className="h-28 rounded-lg bg-white/5 border border-white/10" />
                    <div className="h-28 rounded-lg bg-white/5 border border-white/10" />
                    <div className="h-28 rounded-lg bg-white/5 border border-white/10" />
                    <div className="col-span-3 h-14 rounded-lg bg-white/5 border border-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Development — React Native & Flutter */}
        <section id="apps" className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-500/20 blur-2xl" />
                <div className="aspect-[1/1] rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <FaMobileAlt className="text-white/40 text-6xl" />
                </div>
                <div className="mt-4 flex items-center gap-3 text-white/80">
                  <FaReact className="text-cyan-400" /> React Native •{" "}
                  <SiFlutter className="text-sky-400" /> Flutter
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              {...fadeInUp}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Application Development
              </h2>
              <p className="mt-4 text-white/70">
                Cross‑platform apps with native performance. We help you choose
                the right approach (React Native or Flutter) based on team
                skills, ecosystem, and product roadmap.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Architecture",
                    desc: "Modular, testable code with state management (Redux, Zustand, Bloc).",
                  },
                  {
                    title: "Native Integrations",
                    desc: "Push notifications, deep links, sensors, payments, and more.",
                  },
                  {
                    title: "Offline‑first",
                    desc: "Caching, sync strategies, and resilient UX for unstable networks.",
                  },
                  {
                    title: "Release Management",
                    desc: "App Store/Play Store pipelines, versioning, and crash monitoring.",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Pill>React Native</Pill>
                <Pill>Flutter</Pill>
                <Pill>TypeScript</Pill>
                <Pill>REST/GraphQL</Pill>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Deployments — Vercel, Render, Netlify */}
        <section id="deploy" className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Content */}
            <motion.div {...fadeInUp} className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Deployments
              </h2>
              <p className="mt-4 text-white/70">
                Zero‑downtime, globally distributed deployments with modern
                platforms. We design CI/CD workflows and infrastructure that
                scale as you grow.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Vercel",
                    desc: "Best‑in‑class for Next.js/React. Edge network, image/CDN, previews.",
                  },
                  {
                    title: "Render",
                    desc: "Web services, background workers, CRON, managed Postgres, custom domains.",
                  },
                  {
                    title: "Netlify",
                    desc: "Jamstack sites, serverless functions, forms, and instant rollbacks.",
                  },
                  {
                    title: "CI/CD",
                    desc: "GitHub Actions pipelines, env management, secrets, and testing gates.",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.03]"
                  >
                    <p className="font-semibold text-white">{f.title}</p>
                    <p className="text-sm text-white/70 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-white/80">
                <SiVercel /> Vercel • <SiRender /> Render • <SiNetlify />{" "}
                Netlify • <FaCloud className="text-sky-400" /> Cloud
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div {...fadeInUp} className="lg:col-span-5">
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-slate-500/10 to-purple-500/10 p-6 overflow-hidden">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-slate-500/20 blur-2xl" />
                <div className="aspect-[16/10] rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 grid place-items-center">
                  <div className="flex items-center gap-5 text-white/70">
                    <SiVercel className="text-white" />
                    <SiRender className="text-indigo-300" />
                    <SiNetlify className="text-emerald-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative container mx-auto px-4 pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
            <div className="absolute -top-16 -right-10 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-pink-500/30 blur-3xl" />
            <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Have a project in mind?
                </h3>
                <p className="mt-2 text-white/70 max-w-xl">
                  We’ll help you shape the roadmap, validate the approach, and
                  deliver reliably from idea to production.
                </p>
              </div>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white"
              >
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition" />
                <span className="relative">Let’s talk</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
