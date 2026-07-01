import React from "react";
import { PROCESS_STEPS } from "../data";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function MyProcess() {
  return (
    <section id="process" className="py-24 bg-white text-stone-800 relative border-b border-[#C5A880]/30 overflow-hidden">
      {/* Dynamic atmospheric ambient lighting */}
      <div className="absolute top-1/2 left-0 right-0 h-[450px] bg-[#C5A880]/4 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-10 left-10 w-44 h-44 bg-[#B89047]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#B89047] font-extrabold bg-[#B89047]/10 px-3.5 py-1.5 rounded-full border border-[#B89047]/20">
            Execution Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold tracking-tight text-stone-900 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1D24] via-[#B89047] to-[#C49B55]">Collaborative Process</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Eight highly structured phases designed to transition your experience into an interview-magnet profile.
          </p>
        </motion.div>

        {/* Process Timeline Grid */}
        <div className="relative ml-4 md:ml-6 max-w-4xl mx-auto pb-4">
          
          {/* Vertical Connecting Line with scroll scale animation */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b from-[#B89047] via-stone-200 to-stone-300"
          />

          {PROCESS_STEPS.map((step, idx) => {
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-8 md:pl-12 group mb-12 last:mb-0"
              >
                
                {/* Number bullet with hover animation */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="absolute -left-[18px] top-0.5 w-9 h-9 rounded-full bg-white border-2 border-[#B89047]/60 flex items-center justify-center text-xs font-mono font-bold text-[#B89047] group-hover:border-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-white transition-all duration-300 shadow-sm z-10 cursor-default"
                >
                  {step.step}
                </motion.div>

                {/* Animated content card */}
                <motion.div 
                  whileHover={{ 
                    x: 6,
                    borderColor: "rgba(184, 144, 71, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 1)"
                  }}
                  className="bg-[#FAF8F5] border border-[#C5A880]/20 p-6 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3">
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-[#B89047] transition-colors font-sans">
                      {step.title}
                    </h3>
                    <span className="inline-block text-[10px] font-mono text-[#B89047] bg-[#B89047]/5 px-2 py-0.5 rounded border border-[#B89047]/20 uppercase tracking-widest font-bold">
                      Stage 0{step.step}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </motion.div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

