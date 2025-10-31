import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import CookieConsent from "./CookieConsent";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen text-white relative">
      {/* Navbar overlaid on top of page content */}
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* Global cookie consent modal */}
      <CookieConsent />
    </div>
  );
}
