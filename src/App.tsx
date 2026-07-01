import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import AiSuite from "./components/AiSuite";
import WhyChooseMe from "./components/WhyChooseMe";
import MyProcess from "./components/MyProcess";
import Industries from "./components/Industries";
import Skills from "./components/Skills";
import PortfolioSamples from "./components/PortfolioSamples";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-stone-100 antialiased selection:bg-[#F3C06B]/30 selection:text-[#F3C06B]">
      {/* Premium Header */}
      <Header onNavigate={handleNavigate} />

      <main className="space-y-0">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Me Section */}
        <AboutMe />

        {/* Services Section */}
        <Services onNavigate={handleNavigate} />

        {/* Interactive AI Tools Suite (ATS scanner & Strategist) */}
        <AiSuite />

        {/* Why Choose Me Section */}
        <WhyChooseMe />

        {/* My Process Timeline */}
        <MyProcess />

        {/* Industries Served */}
        <Industries />

        {/* Skill capability matrices */}
        <Skills />

        {/* Document Portfolio Mockups */}
        <PortfolioSamples />

        {/* Client Success Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faqs />

        {/* Consultation Booking & Contact */}
        <Contact />
      </main>

      {/* Corporate Brand Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
