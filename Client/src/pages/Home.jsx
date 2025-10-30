import React from "react";
import SEO from "../components/SEO";
import HeroSection from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import OurProcess from "../components/OurProcess";
import { LetsTalk } from "../components/LetsTalk";
import Layout from "../components/Layout";
import OurWork from "../components/OurWorks";

const Home = () => {
  const testimonialsData = [
    {
      name: "Seasand Properties",
      designation: "Seasand Properties",
      quote:
        "Working with this team was transformative for our business. Their innovative approach to web development and attention to detail resulted in a platform that exceeded our expectations. The seamless user experience they created has significantly improved our customer engagement.",
    },
    {
      name: "Michael Chen",
      designation: "Product Manager, InnovateX",
      quote:
        "The team's expertise in mobile app development is outstanding. They delivered a cross-platform solution that performs flawlessly on both iOS and Android. Their proactive communication and agile development approach made the entire process smooth and efficient.",
    },
    {
      name: "Emily Rodriguez",
      designation: "Founder, Creative Solutions",
      quote:
        "Their UI/UX design work has completely transformed our digital presence. The attention to user experience and modern design principles they applied has resulted in a 40% increase in user engagement. Their team's creativity and technical expertise are truly remarkable.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Premium Web Development & Design Agency"
        description="WebNexity - Your trusted partner for professional web development, mobile apps, UI/UX design, and cloud deployments. Transform your digital presence with our expert team."
        keywords={[
          "web development",
          "mobile app development",
          "UI/UX design",
          "cloud deployment",
          "react development",
          "node.js development",
          "professional web design",
          "responsive websites",
          "website development company",
          "custom web applications",
          "digital solutions provider",
          "web development agency",
          "frontend development",
          "backend development",
          "full stack development",
        ]}
        route="/"
      />
      <HeroSection />
      <AboutUs />
      <WhatWeDo />
      <WhyChooseUs />
      <OurWork />
      <Testimonials testimonials={testimonialsData} autoplay={true} />
      <OurProcess />
      <LetsTalk />
    </Layout>
  );
};

export default Home;
