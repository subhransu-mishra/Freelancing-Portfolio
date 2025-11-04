import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaCheck, FaTimes } from "react-icons/fa";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookieConsent");
      if (!stored) {
        const t = setTimeout(() => setOpen(true), 500);
        return () => clearTimeout(t);
      }
    } catch (_) {
      setOpen(true);
    }
  }, []);

  const handleChoice = (choice) => {
    try {
      localStorage.setItem("cookieConsent", choice);
    } catch (_) {
      // ignore storage issues
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: 40, y: 40, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
          className="fixed bottom-5 right-5 z-50 w-[22rem] max-w-[92vw]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="relative rounded-2xl border border-white/15 bg-black/70 backdrop-blur-md shadow-xl">
            {/* Accent ring */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />

            <div className="relative p-5">
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <FaCookieBite className="text-yellow-300" />
                </div>
                <div className="text-sm text-white/80">
                  <h3 className="text-white font-semibold mb-1">We use cookies</h3>
                  <p>
                    We use cookies to enhance your experience, analyze traffic, and serve content.
                    You can accept or reject. See our
                    <a href="#privacy" className="text-blue-300 hover:text-blue-200 ml-1 underline decoration-blue-500/60">Privacy Policy</a>.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 justify-end">
                <button
                  onClick={() => handleChoice("rejected")}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white/85 border border-white/25 hover:border-white/50 bg-transparent transition-colors"
                >
                  <FaTimes className="h-3.5 w-3.5" />
                  Reject
                </button>
                <button
                  onClick={() => handleChoice("accepted")}
                  className="relative cursor-pointer inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold text-black bg-white hover:bg-amber-50 shadow-lg shadow-blue-500/20 transition-colors"
                >
                  <FaCheck className="h-3.5 w-3.5" />
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
