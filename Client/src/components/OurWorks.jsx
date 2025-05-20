import { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, 
  ChevronRight, 
  Globe, 
  Monitor, 
  Smartphone, 
  Clock, 
  Code,
  Lightbulb
} from 'lucide-react';

export default function OurWork() {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  
  const projects = [
    {
      id: 0,
      title: "SeaSand Properties",
      subtitle: "Real Estate Website",
      description: "A premium property listing platform featuring advanced search functionality, virtual tours, and a seamless booking system for property viewings.",
      image: "/api/placeholder/800/500",
      mobileImage: "/api/placeholder/400/800",
      color: "from-blue-500 to-cyan-400",
      services: ["UI/UX Design", "Web Development", "CMS Integration", "SEO Optimization"],
      features: [
        "Interactive property maps",
        "Virtual property tours",
        "Advanced filtering system",
        "Appointment scheduling",
        "Secure user accounts",
        "Agent dashboards"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS"],
      link: "#",
      year: "2024"
    },
    {
      id: 1,
      title: "Urban Bites",
      subtitle: "Bar & Cafe Platform",
      description: "A comprehensive digital solution featuring online menu browsing, table reservations, and a seamless food delivery system, enhancing the dining experience.",
      image: "/api/placeholder/800/500",
      mobileImage: "/api/placeholder/400/800",
      color: "from-amber-500 to-red-500",
      services: ["UI/UX Design", "Web & Mobile Development", "Payment Integration", "Order Management System"],
      features: [
        "Digital menu with filtering",
        "Real-time table booking",
        "Online ordering & delivery",
        "Loyalty program integration",
        "Customer reviews",
        "Event calendar"
      ],
      technologies: ["React Native", "Firebase", "Stripe", "NodeJS", "Google Services"],
      link: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "LearnSphere",
      subtitle: "Educational Institute Platform",
      description: "An innovative learning management system with course enrollment, live virtual classrooms, progress tracking, and comprehensive assessment tools.",
      image: "/api/placeholder/800/500",
      mobileImage: "/api/placeholder/400/800",
      color: "from-purple-500 to-indigo-500",
      services: ["UI/UX Design", "Web Development", "LMS Implementation", "Content Management"],
      features: [
        "Course enrollment system",
        "Live virtual classrooms",
        "Progress tracking dashboard",
        "Assessment & certification",
        "Discussion forums",
        "Resource library"
      ],
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AWS"],
      link: "#",
      year: "2024"
    }
  ];

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (cursorRef.current) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mousePosition.x - 20}px, ${mousePosition.y - 20}px, 0)`;
    }
  }, [mousePosition]);

  const handleProjectChange = (index) => {
    setActiveProject(index);
  };

  return (
    <div className="relative bg-gray-900 py-20 px-4 md:px-8 overflow-hidden" id='services'>
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className={`fixed w-12 h-12 rounded-full z-50 pointer-events-none flex items-center justify-center transition-all duration-150 ${
          isHovering ? 'opacity-100 scale-150 bg-white bg-opacity-20 backdrop-blur-sm' : 'opacity-0'
        }`}
      >
        <span className="text-white text-xs font-medium">View</span>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-gradient-to-r from-pink-600 to-red-600 opacity-10 blur-3xl rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio showcasing innovative digital solutions across diverse industries.
            Each project represents our commitment to excellence and client success.
          </p>
        </div>
        
        {/* Project tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectChange(index)}
              className={`px-5 py-3 rounded-full cursor-pointer transition-all duration-300 font-medium text-sm md:text-base ${
                activeProject === index 
                  ? `bg-gradient-to-r ${project.color} text-white shadow-lg` 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
        
        {/* Main project display */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Project details */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div 
              className={`h-full p-6 md:p-8 rounded-2xl transition-all duration-500 bg-gradient-to-br ${projects[activeProject].color} bg-opacity-10 backdrop-blur-sm`}
              style={{ background: `linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.95))` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${projects[activeProject].color}`}></div>
                <span className="text-gray-400 text-sm font-medium">{projects[activeProject].year}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{projects[activeProject].title}</h3>
              <p className="text-lg text-gray-300 mb-6">{projects[activeProject].subtitle}</p>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Code size={18} className={`text-gradient-${projects[activeProject].color.split(' ')[1]}`} />
                  Services Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].services.map((service, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-sm text-gray-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Lightbulb size={18} className={`text-gradient-${projects[activeProject].color.split(' ')[1]}`} />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {projects[activeProject].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${projects[activeProject].color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={projects[activeProject].link} 
                className="inline-flex items-center gap-2 font-medium text-white group"
              >
                <span>View Project</span>
                <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Right: Project visuals */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative h-full">
              {/* Desktop mockup */}
              <div 
                className="relative bg-gray-800 rounded-2xl p-4 shadow-2xl transition-all duration-500"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex items-center justify-start mb-3 pl-2">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden aspect-video">
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
              
              {/* Mobile mockup */}
              <div className="absolute -bottom-8 -right-4 md:right-8 w-1/3 max-w-xs">
                <div className="relative bg-gray-800 rounded-3xl p-2 shadow-2xl border-4 border-gray-700">
                  <div className="rounded-2xl overflow-hidden aspect-[9/16]">
                    <img 
                      src={projects[activeProject].mobileImage} 
                      alt={`${projects[activeProject].title} mobile view`}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-1 w-1/4 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Project stats */}
              <div className="absolute top-8 left-8 bg-gray-800 bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Globe size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">Fully Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">8 Weeks Delivery</span>
                </div>
              </div>
              
              {/* Device compatibility */}
              <div className="absolute -bottom-6 left-8 bg-gray-800 bg-opacity-80 backdrop-blur-sm py-2 px-4 rounded-full shadow-lg flex items-center gap-3">
                <Monitor size={16} className="text-gray-300" />
                <Smartphone size={16} className="text-gray-300" />
                <span className="text-gray-300 text-xs">Optimized for all devices</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project navigation dots */}
        <div className="flex justify-center mt-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleProjectChange(index)}
              className={`w-3 h-3 rounded-full mx-1.5 transition-all duration-300 ${
                activeProject === index 
                  ? `bg-gradient-to-r ${projects[index].color}` 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span>Start Your Project</span>
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
} 