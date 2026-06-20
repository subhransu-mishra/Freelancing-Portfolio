import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Send,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoverLink, setHoverLink] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const mainLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our works", href: "#services" },
    { name: "Process", href: "#ourprocess" },
    { name: "About Us", href: "#about-us-section" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "UI/UX Design", href: "#" },
    { name: "Cloud Solutions", href: "#" },
    { name: "DevOps", href: "#" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/webnexity_tech?igsh=d3hqbnRlZm5wdjhz",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:techwebnexity@gmail.com",
    },
    { name: "Call Us", icon: <Phone size={20} />, href: "tel:+919853779652" },
  ];

  return (
    <footer className="relative bg-[#0B0B0C] text-neutral-400 pt-24 overflow-hidden border-t border-neutral-800">
      {/* Animated Background Elements removed */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
          {/* Logo and Brief */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img src="/webnexity_logo.png" alt="WebNexity Logo" className="h-12 w-auto rounded object-contain" />
              <h2 className="text-2xl font-bold text-white tracking-wide">
                WebNexity
              </h2>
            </div>
            <p className="text-gray-400 mb-6">
              We craft digital experiences that delight users and drive business
              growth. Our passion for innovation fuels every project we
              undertake.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:text-white group"
                  aria-label={social.name}
                >
                  <span className="group-hover:rotate-12 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setHoverLink(`main-${idx}`)}
                    onMouseLeave={() => setHoverLink(null)}
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                      <span
                        className={`absolute left-0 bottom-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 ${
                          hoverLink === `main-${idx}` ? "w-full" : ""
                        }`}
                      ></span>
                    </span>
                    <ChevronRight
                      size={16}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    onMouseEnter={() => setHoverLink(`service-${idx}`)}
                    onMouseLeave={() => setHoverLink(null)}
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                        {link.name}
                      </span>
                      <span
                        className={`absolute left-0 bottom-0 w-0 h-0.5 bg-[#14B8A6] transition-all duration-300 ${
                          hoverLink === `service-${idx}` ? "w-full" : ""
                        }`}
                      ></span>
                    </span>
                    <ChevronRight
                      size={16}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}

        {/* CTA Banner */}
        <div className="relative mt-12 mb-16 rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.02] to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Ready to start your project?
              </h3>
              <p className="text-gray-400">
                Let's collaborate and build something amazing together.
              </p>
            </div>
            <Link
              to="/contact"
              className="shiny-button group relative px-8 py-3 rounded-full font-medium flex items-center space-x-2 overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 text-white text-sm tracking-widest uppercase">Get In Touch</span>
              <ArrowUpRight
                size={18}
                className="relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Webnexity. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 z-50 group shadow-lg hover:bg-neutral-800"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </a>
    </footer>
  );
}
