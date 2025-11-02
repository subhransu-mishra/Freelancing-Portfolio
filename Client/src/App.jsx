import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import LogoLoader from "./components/LogoLoader";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time of 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LogoLoader onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
