import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCookieBite, FaCheck, FaTimes } from "react-icons/fa";

const COOKIE_CONSENT_KEY = 'webnexity_cookie_consent';

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        const timer = setTimeout(() => setOpen(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
    }
  }, []);

  const handleChoice = (choice) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    } catch (e) {
      console.error('Error saving cookie preference:', e);
    }
    setOpen(false);
  };

  // Don't render anything during SSR or if not mounted yet
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 z-50 w-96 max-w-[calc(100%-2rem)]"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                    <FaCookieBite className="text-blue-600" />
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">We value your privacy</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                  </p>
                  <div className="mt-3 flex space-x-3">
                    <button
                      onClick={() => handleChoice("accepted")}
                      className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleChoice("rejected")}
                      className="px-4 cursor-pointer py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Reject
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="ml-4 cursor-pointer text-gray-400 hover:text-gray-500"
                  aria-label="Close"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
