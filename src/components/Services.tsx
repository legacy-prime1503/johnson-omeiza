import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { SERVICES } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "core" | "writing" | "coaching">("all");

  const categoryMapping: Record<string, "core" | "writing" | "coaching"> = {
    "job-search-strategy": "core",
    "ats-resume-writing": "core",
    "executive-resume-writing": "core",
    "linkedin-optimization": "core",
    "career-coaching": "coaching",
    "interview-preparation": "coaching",
    "personal-branding": "coaching",
    "cv-writing": "writing",
    "cover-letter-writing": "writing",
    "executive-biography": "writing",
    "federal-resume": "writing",
    "graduate-resume": "writing",
    "resume-review": "writing",
    "resume-refresh": "writing",
    "thank-you-letter": "writing",
  };

  const filteredServices = SERVICES.filter((s) => {
    if (selectedCategory === "all") return true;
    return categoryMapping[s.id] === selectedCategory;
  });

  // Safe Lucide icon renderer
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.FileText;
    return <IconComponent className="w-6 h-6 text-[#F3C06B]" />;
  };

  return (
    <section id="services" className="py-24 bg-[#07090E] text-stone-100 relative border-b border-[#F3C06B]/20 overflow-hidden">
      {/* Background design accents */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(243,192,107,0.05)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F3C06B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#B89047]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-bold bg-[#F3C06B]/10 px-4 py-2 rounded-full border border-[#F3C06B]/25 shadow-sm">
            Expert Offerings
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Comprehensive Suite of <span className="bg-gradient-to-r from-[#FFE5A3] via-[#F3C06B] to-[#B89047] bg-clip-text text-transparent">Elite Career Services</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            From deep-dive hidden market job search strategies to precision resume engineering and high-end executive coaching.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {[
            { id: "all", label: "All 15 Services" },
            { id: "core", label: "Strategic & Core" },
            { id: "writing", label: "Resume & CV Writing" },
            { id: "coaching", label: "Coaching & Brand" },
          ].map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-mono border rounded-lg transition-all duration-300 relative overflow-hidden cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-[#B89047] to-[#F3C06B] text-[#07090E] border-transparent font-extrabold shadow-md shadow-[#F3C06B]/20"
                  : "bg-[#111625]/80 text-stone-300 border-[#F3C06B]/20 hover:text-[#F3C06B] hover:border-[#F3C06B] hover:bg-[#161B2E]"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Services Bento/Grid Layout */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const isHighlight = service.id === "job-search-strategy";
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25) }}
                  whileHover={{ 
                    y: -6, 
                    borderColor: isHighlight ? "rgba(243, 192, 107, 0.8)" : "rgba(243, 192, 107, 0.45)",
                    boxShadow: "0 15px 30px -10px rgba(243, 192, 107, 0.25)"
                  }}
                  key={service.id}
                  className={`group p-6 rounded-xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                    isHighlight
                      ? "bg-gradient-to-b from-[#161D2E] to-[#111524] border-[#F3C06B]/50 shadow-lg shadow-[#F3C06B]/10"
                      : "bg-[#111625]/90 border-[#F3C06B]/15 shadow-sm"
                  }`}
                >
                  {/* Subtle hover gradient light */}
                  <div className="absolute -inset-px bg-gradient-to-br from-[#F3C06B]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Visual Highlights for prominent service */}
                  {isHighlight && (
                    <div className="absolute top-0 right-0 bg-[#F3C06B] text-[#07090E] font-mono text-[9px] uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-bl">
                      Featured Strategy
                    </div>
                  )}

                  <div className="space-y-4 relative z-10">
                    <div className={`p-3 rounded-lg w-fit transition-transform group-hover:scale-105 duration-300 ${isHighlight ? "bg-[#F3C06B]/15 border border-[#F3C06B]/25" : "bg-[#07090E] border border-[#F3C06B]/15"}`}>
                      {renderIcon(service.iconName)}
                    </div>

                    <div className="space-y-2">
                      <h3 className={`text-lg font-serif font-black tracking-tight ${isHighlight ? "text-[#F3C06B]" : "text-white group-hover:text-[#F3C06B] transition-colors"}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-stone-300 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F3C06B]/10 mt-6 flex justify-between items-center text-[11px] relative z-10">
                    <span className="font-mono text-stone-400 uppercase font-bold">Service Plan</span>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onNavigate("contact")}
                      className="text-[#F3C06B] hover:text-[#FFE5A3] font-mono uppercase tracking-wider font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Inquire Now <span className="text-xs group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated Services Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-[#111625] to-[#0D121F] border border-[#F3C06B]/30 p-8 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F3C06B]/2 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 text-center lg:text-left relative z-10">
            <h3 className="text-xl font-serif font-black text-white tracking-tight">Need a custom, bespoke service bundle?</h3>
            <p className="text-xs text-stone-300 max-w-xl leading-relaxed">
              I routinely construct customized career campaigns combining Resume Writing, LinkedIn SEO, Job Search Strategy, and mock interview preparations at special premium rates.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10">
            <motion.a
              whileHover={{ scale: 1.03, translateY: -1, backgroundColor: "rgba(243, 192, 107, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              href="mailto:johnsonomeiza.career.consultant@gmail.com"
              className="bg-transparent border border-[#F3C06B]/30 text-[#F3C06B] hover:border-[#F3C06B]/60 text-xs font-mono py-3.5 px-6 rounded-lg text-center transition-colors duration-300 font-bold"
            >
              Email Consultant Directly
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03, translateY: -1, boxShadow: "0 0 15px rgba(243, 192, 107, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate("contact")}
              className="bg-gradient-to-r from-[#B89047] to-[#F3C06B] text-[#07090E] text-xs font-mono font-extrabold py-3.5 px-6 rounded-lg transition-colors duration-200 text-center shadow-md cursor-pointer"
            >
              Get Custom Proposal
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
