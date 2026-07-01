import React from "react";
import { ArrowRight, Sparkles, ShieldCheck, Award, Zap } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#FAF8F5] via-[#FDFBF9] to-[#FAF8F5] text-stone-800 pt-16 pb-24 overflow-hidden border-b border-[#C5A880]/30">
      {/* Visual Ambient Blur Spheres */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#C5A880]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Diagonal grid lines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,168,128,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#B89047]/10 border border-[#B89047]/20 px-3 py-1.5 rounded-full text-xs font-mono text-[#B89047] font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Certified Executive Career Architect
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight leading-[1.1] text-stone-900">
                Accelerate Your Next{" "}
                <span className="bg-gradient-to-r from-[#1A1D24] via-[#B89047] to-[#C49B55] bg-clip-text text-transparent">
                  Executive Milestone
                </span>
              </h1>
              <p className="text-[#B89047] text-xs sm:text-sm font-mono uppercase tracking-widest font-bold border-l-2 border-[#C5A880] pl-4">
                Certified Resume Writer | ATS Resume Expert | LinkedIn Optimization Specialist | Career Coach
              </p>
            </div>

            <p className="text-stone-600 text-lg max-w-2xl font-sans leading-relaxed">
              Helping Job Seekers Land More Interviews, Better Opportunities, and Higher-Paying Jobs with tailored, premium personal branding assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("ai-suite")}
                className="flex items-center justify-center gap-2 bg-[#1A1D24] hover:bg-[#2D313A] text-white text-sm font-bold h-12 px-8 rounded-lg transition-colors duration-200 shadow-md shadow-stone-800/10 cursor-pointer"
              >
                Scan Resume for Free
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, translateY: -2, backgroundColor: "rgba(184, 144, 71, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate("services")}
                className="flex items-center justify-center gap-2 border border-[#B89047]/40 text-stone-700 hover:text-stone-900 hover:border-[#B89047] text-sm font-mono h-12 px-6 rounded-lg bg-transparent transition-colors duration-200 font-bold cursor-pointer"
              >
                Explore Premium Services
              </motion.button>
            </div>

            {/* Certifications Row */}
            <div className="pt-6 border-t border-[#C5A880]/30 flex flex-wrap gap-6 items-center">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">Certified by:</span>
              <div className="flex items-center gap-2 text-stone-700 text-xs font-bold">
                <Award className="w-4 h-4 text-[#B89047]" />
                PARWCC Executive Board
              </div>
              <div className="flex items-center gap-2 text-stone-700 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-[#B89047]" />
                ATS Compliance Certified
              </div>
              <div className="flex items-center gap-2 text-stone-700 text-xs font-bold">
                <Zap className="w-4 h-4 text-[#B89047]" />
                98% Success Ratio
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Elegant luxury dashboard mock card representing resume design */}
            <div className="w-full max-w-md bg-white/90 rounded-2xl border border-[#C5A880]/25 p-6 shadow-xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none" />
              
              {/* Card Header resembling resume document review layout */}
              <div className="flex items-center justify-between border-b border-stone-150 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] font-mono text-[#B89047] uppercase tracking-wider bg-[#B89047]/10 px-2.5 py-1 rounded font-bold border border-[#B89047]/10">
                  ATS Parser Simulator v4.2
                </div>
              </div>

              {/* Simulated Resume Audit Block */}
              <div className="space-y-4">
                <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#C5A880]/20">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-mono text-stone-500 font-bold">Target Role Match</span>
                    <span className="text-xs font-bold text-[#B89047]">96.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#B89047] to-[#C5A880] rounded-full" style={{ width: "96.8%" }} />
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5]/80 rounded-lg space-y-2 border border-stone-100">
                  <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider font-bold block">Simulated Executive Summary</span>
                  <p className="text-xs text-stone-600 italic font-serif leading-relaxed">
                    "Delivering enterprise value matrices through 15+ years of digital modernization campaigns, leading global C-suite initiatives..."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#C5A880]/15">
                    <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">Impact Metrics</div>
                    <div className="text-lg font-sans font-extrabold text-stone-900 mt-1">+$42M ARR</div>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] rounded border border-[#C5A880]/15">
                    <div className="text-[10px] font-mono text-stone-400 uppercase font-bold">Turnaround Rate</div>
                    <div className="text-lg font-sans font-extrabold text-[#B89047] mt-1">98.7% Success</div>
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
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
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
              whileHover={{ y: -5, scale: 1.02, borderColor: "#B89047" }}
              className="bg-white/80 border border-[#C5A880]/20 p-5 rounded-xl text-center hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl font-serif font-extrabold text-[#B89047] transition-transform duration-200">{stat.value}</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wider font-mono mt-1 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
