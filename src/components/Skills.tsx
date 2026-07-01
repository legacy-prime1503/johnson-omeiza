import React from "react";
import { SKILLS } from "../data";
import { Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#07090E] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F3C06B]/4 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-extrabold">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Professional Skill & Capability Matrices
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            Meticulously rated skill index measuring professional competencies against international PARWCC benchmarks.
          </p>
        </div>

        {/* Skills List with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILLS.map((skill, idx) => {
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -2, borderColor: "#F3C06B" }}
                className="space-y-2 bg-[#111625]/90 border border-[#F3C06B]/15 p-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#F3C06B]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#F3C06B]">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Bar Container */}
                <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-[#B89047] to-[#F3C06B] rounded-full"
                  />
                </div>
                
                <div className="flex justify-between text-[10px] text-stone-400 font-mono uppercase tracking-wider font-bold">
                  <span>Novice</span>
                  <span>Competent</span>
                  <span className="text-[#F3C06B]">{skill.category} Master</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
