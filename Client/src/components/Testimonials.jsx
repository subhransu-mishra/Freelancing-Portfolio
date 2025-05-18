"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export const Testimonials = ({ testimonials = [], autoplay = false }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) {
      setActive(0);
    }
  }, [testimonials]);

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay && testimonials.length > 0) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <FaQuoteLeft className="text-4xl text-purple-500/20 mb-6" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {testimonials[active].quote}
                  </motion.p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {testimonials[active].name}
                      </h3>
                      <p className="text-purple-400 font-medium">
                        {testimonials[active].designation}
                      </p>
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={handlePrev}
                        className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        <IconArrowLeft className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:-translate-x-1" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        <IconArrowRight className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
