import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#07090E] via-[#0D111A] to-[#07090E] text-stone-100 pt-20 pb-28 overflow-hidden border-b border-[#F3C06B]/20">
      {/* Visual Ambient Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#F3C06B]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-90 h-90 bg-[#B89047]/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Diagonal grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,192,107,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(243,192,107,0.05)_1px,transparent_1px)] bg-[size:45px_45px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#F3C06B]/10 border border-[#F3C06B]/25 px-4 py-2 rounded-full text-xs font-mono text-[#F3C06B] font-extrabold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              Certified Executive Career Architect
            </div>
 
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight leading-[1.1] text-white">
                Accelerate Your Next{" "}
                <span className="bg-gradient-to-r from-[#FFE5A3] via-[#F3C06B] to-[#B89047] bg-clip-text text-transparent">
                  Executive Milestone
                </span>
              </h1>
              <p className="text-[#F3C06B] text-xs sm:text-sm font-mono uppercase tracking-widest font-extrabold border-l-2 border-[#F3C06B] pl-4">
                Certified Resume Writer | ATS Resume Expert | LinkedIn Optimization Specialist | Career Coach
              </p>
            </div>
 
            <p className="text-stone-300 text-lg sm:text-xl max-w-2xl font-sans leading-relaxed">
              Helping Job Seekers Land More Interviews, Better Opportunities, and Higher-Paying Jobs with tailored, premium personal branding assets.
            </p>
 
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 0 20px rgba(243, 192, 107, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("ai-suite")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#B89047] to-[#F3C06B] hover:from-[#F3C06B] hover:to-[#B89047] text-[#07090E] text-sm font-black h-13 px-8 rounded-lg transition-all duration-300 shadow-lg cursor-pointer"
              >
                Scan Resume for Free
                <ArrowRight className="w-4 h-4 text-[#07090E]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, translateY: -2, backgroundColor: "rgba(243, 192, 107, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("services")}
                className="flex items-center justify-center gap-2 border border-[#F3C06B]/50 text-[#F3C06B] hover:text-white hover:border-[#F3C06B] text-sm font-mono h-13 px-6 rounded-lg bg-transparent transition-all duration-200 font-bold cursor-pointer"
              >
                Explore Premium Services
              </motion.button>
            </div>
 
            {/* Certifications Row */}
            <div className="pt-6 border-t border-[#F3C06B]/25 flex flex-wrap gap-6 items-center">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Certified by:</span>
              <div className="flex items-center gap-2 text-stone-200 text-xs font-bold bg-[#111625] px-3 py-1.5 rounded-lg border border-[#F3C06B]/10">
                <Award className="w-4 h-4 text-[#F3C06B]" />
                PARWCC Executive Board
              </div>
              <div className="flex items-center gap-2 text-stone-200 text-xs font-bold bg-[#111625] px-3 py-1.5 rounded-lg border border-[#F3C06B]/10">
                <ShieldCheck className="w-4 h-4 text-[#F3C06B]" />
                ATS Compliance Certified
              </div>
              <div className="flex items-center gap-2 text-stone-200 text-xs font-bold bg-[#111625] px-3 py-1.5 rounded-lg border border-[#F3C06B]/10">
                <Zap className="w-4 h-4 text-[#F3C06B]" />
                98% Success Ratio
              </div>
            </div>
          </div>
 
          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elegant luxury dashboard mock card representing resume design */}
            <div className="w-full max-w-md bg-gradient-to-b from-[#111625]/95 to-[#0B0E17]/95 rounded-2xl border border-[#F3C06B]/25 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F3C06B]/10 to-transparent rounded-bl-full pointer-events-none" />
              
              {/* Card Header resembling resume document review layout */}
              <div className="flex items-center justify-between border-b border-[#F3C06B]/10 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
                </div>
                <div className="text-[10px] font-mono text-[#F3C06B] uppercase tracking-wider bg-[#F3C06B]/10 px-3 py-1.5 rounded-full font-bold border border-[#F3C06B]/20">
                  ATS Parser Simulator v4.2
                </div>
              </div>
 
              {/* Simulated Resume Audit Block */}
              <div className="space-y-4">
                <div className="p-4 bg-[#07090E] rounded-lg border border-[#F3C06B]/15">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-mono text-stone-300 font-bold">Target Role Match</span>
                    <span className="text-xs font-bold text-[#F3C06B] drop-shadow-[0_0_4px_rgba(243,192,107,0.3)]">96.8%</span>
                  </div>
                  <div className="h-2 w-full bg-[#111625] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#B89047] to-[#F3C06B] rounded-full" style={{ width: "96.8%" }} />
                  </div>
                </div>
 
                <div className="p-3 bg-[#07090E]/60 rounded-lg space-y-2 border border-[#F3C06B]/10">
                  <span className="text-[10px] font-mono uppercase text-[#F3C06B] tracking-wider font-bold block">Simulated Executive Summary</span>
                  <p className="text-xs text-stone-300 italic font-serif leading-relaxed">
                    "Delivering enterprise value matrices through 15+ years of digital modernization campaigns, leading global C-suite initiatives..."
                  </p>
                </div>
 
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#07090E] rounded border border-[#F3C06B]/15">
                    <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">Impact Metrics</div>
                    <div className="text-lg font-sans font-extrabold text-white mt-1">+$42M ARR</div>
                  </div>
                  <div className="p-3 bg-[#07090E] rounded border border-[#F3C06B]/15">
                    <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">Turnaround Rate</div>
                    <div className="text-lg font-sans font-extrabold text-[#F3C06B] mt-1">98.7% Success</div>
                  </div>
                </div>
 
                <div className="text-center pt-2">
                  <span className="text-[10px] text-stone-400 font-mono italic">
                    "Documents tailored for elite, competitive placement metrics."
                  </span>
                </div>
              </div>
            </div>
          </div>
 
        </div>
 
        {/* Client Success Metrics Row (Statistic Cards) */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {[
            { value: "500+", label: "Resumes Written" },
            { value: "95%", label: "Client Satisfaction" },
            { value: "Global", label: "Clients Served" },
            { value: "ATS", label: "Friendly Formats" },
            { value: "Fast", label: "Turnaround Rate" },
            { value: "Elite", label: "Interview Generators" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ 
                y: -6, 
                scale: 1.04, 
                borderColor: "#F3C06B",
                backgroundColor: "rgba(17, 22, 37, 0.9)",
                boxShadow: "0 10px 25px -5px rgba(243, 192, 107, 0.15)"
              }}
              className="bg-[#111625]/60 border border-[#F3C06B]/20 p-5 rounded-xl text-center transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl font-serif font-black text-[#F3C06B] transition-transform duration-200">{stat.value}</div>
              <div className="text-[11px] text-stone-300 uppercase tracking-wider font-mono mt-1 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
