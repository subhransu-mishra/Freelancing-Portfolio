import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LogoLoader({ onLoadingComplete }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onAnimationComplete={onLoadingComplete}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
          exit={{
            opacity: 0,
            scale: 1.2,
            transition: {
              duration: 0.5,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
          className="relative flex flex-col items-center"
        >
          {/* Logo SVG */}
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            className="text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.2,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          >
            <motion.path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                transition: {
                  pathLength: { duration: 1, ease: "easeInOut" },
                  opacity: { duration: 0.2 },
                },
              }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.1, 0.3],
                transition: {
                  duration: 1,
                  delay: 0.8,
                  ease: "easeInOut",
                },
              }}
              className="fill-blue-500/30"
            />
          </motion.svg>

          {/* Text */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
            className="mt-4 text-2xl font-bold text-white"
          >
            WebNexity
          </motion.span>
        </motion.div>

        {/* Background blur circles */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1.5,
              transition: {
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl transform animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl transform animate-pulse delay-300" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-3xl transform animate-pulse delay-700" />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
