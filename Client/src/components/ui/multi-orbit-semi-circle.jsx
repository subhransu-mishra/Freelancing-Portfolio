import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", filter: "brightness(0) invert(1)" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", filter: "brightness(0) invert(1)" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", filter: "brightness(0) invert(1)" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Nginx", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", filter: "brightness(0) invert(1)" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Android", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
  { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "GraphQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Vercel", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", filter: "brightness(0) invert(1)" },
  { name: "Supabase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" }
];

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize, orbitIndex }) {
  // Start offset for the first orbit
  const startIndex = orbitIndex === 0 ? 0 : orbitIndex === 1 ? 6 : 14;

  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            w-[1000px] h-[1000px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.25),transparent_70%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]
            blur-3xl 
            -mt-40 
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        const tech = TECH_STACK[(startIndex + index) % TECH_STACK.length];
        
        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group"
            style={{
              left: `${centerX - x - iconSize / 2}px`, 
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + orbitIndex * 0.3, type: "spring" }}
            >
              <img
                src={tech.src}
                alt={tech.name}
                width={iconSize}
                height={iconSize}
                className="object-contain cursor-pointer transition-transform duration-300 hover:scale-125 hover:z-10 relative"
                style={{ minWidth: iconSize, minHeight: iconSize, filter: tech.filter || "drop-shadow(0 0 8px rgba(255,255,255,0.1))" }} 
              />
            </motion.div>

            {/* Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+12px)]" : "top-[calc(100%+12px)]"
              } hidden group-hover:block w-auto whitespace-nowrap rounded-lg bg-neutral-900 border border-neutral-700 px-3 py-1.5 text-xs text-white shadow-xl text-center backdrop-blur-sm transition-all z-50 pointer-events-none`}
            >
              {tech.name}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-neutral-900 border-neutral-700 ${
                  tooltipAbove ? "top-full -mt-[6px] border-b border-r" : "bottom-full -mb-[6px] border-t border-l"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
      
      {/* Orbit paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
         <path
           d={`M ${centerX - radius} ${centerY} A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}`}
           fill="none"
           stroke="rgba(255,255,255,0.05)"
           strokeWidth="1"
           strokeDasharray="4 4"
         />
      </svg>
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 1200, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.9, 800);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(28, baseWidth * 0.06)
      : size.width < 768
      ? Math.max(36, baseWidth * 0.07)
      : Math.max(48, baseWidth * 0.08);

  return (
    <section className="py-20 relative w-full overflow-hidden bg-[#0B0B0C] border-t border-neutral-800" id="integrations">
      <div className="container mx-auto px-4 relative flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-wide">
            Integrations & Technologies
          </h2>
          <p className="mb-16 max-w-2xl text-gray-400 text-lg md:text-xl mx-auto">
            We use industry-standard tools to build scalable, high-performance solutions tailored to your business needs.
          </p>
        </motion.div>

        <div
          className="relative mt-4"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.25} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} orbitIndex={0} />
          <SemiCircleOrbit radius={baseWidth * 0.40} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} orbitIndex={1} />
          <SemiCircleOrbit radius={baseWidth * 0.55} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} orbitIndex={2} />
        </div>
      </div>
    </section>
  );
}
