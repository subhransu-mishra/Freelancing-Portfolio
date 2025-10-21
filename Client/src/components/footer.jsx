import { useState } from 'react';
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
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoverLink, setHoverLink] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const mainLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our works', href: '#services' },
    { name: 'Process', href: '#ourprocess' },
    { name: 'About Us', href: '#about-us-section' },
    { name: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'DevOps', href: '#' },
  ];

  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-700 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-24 h-24 rounded-full bg-pink-600 opacity-10 blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800">
          {/* Logo and Brief */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">WebNexity</h2>
            </div>
            <p className="text-gray-400 mb-6">
              We craft digital experiences that delight users and drive business growth. Our passion for innovation fuels every project we undertake.
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
                      <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${hoverLink === `main-${idx}` ? 'w-full' : ''}`}></span>
                    </span>
                    <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
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
                      <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${hoverLink === `service-${idx}` ? 'w-full' : ''}`}></span>
                    </span>
                    <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-white mb-6 text-lg">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to get updates on our latest projects and insights.</p>
            
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-gray-800 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md p-2 text-white hover:opacity-90 transition-opacity duration-300"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div className="bg-green-900 bg-opacity-30 text-green-400 px-4 py-3 rounded-lg text-sm flex items-center justify-between">
                <span>Successfully subscribed!</span>
                <span>✓</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Contact Section */}
       
        
        {/* CTA Banner */}
        <div className="relative mt-12 mb-16 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-700 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
              <p className="text-gray-400">Let's collaborate and build something amazing together.</p>
            </div>
            <a 
              href="#" 
              className="group relative bg-gray-800 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">Get In Touch</span>
              <ArrowUpRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Webnexity. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 z-50 group shadow-lg"
        aria-label="Back to top"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}