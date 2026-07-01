import React from "react";
import { User, Check, Shield, Sparkles, Compass } from "lucide-react";

export default function AboutMe() {
  const highlights = [
    { title: "ATS-Compliant Resumes", desc: "Crafting optimized content that score in the 95th percentile on Applicant Tracking Systems." },
    { title: "Executive Resume Design", desc: "Synthesizing massive business scale and leadership achievements for VP and C-Suite candidates." },
    { title: "LinkedIn SEO & Branding", desc: "Converting passive profiles into searchable personal assets that draw executive search recruiters." },
    { title: "Interview Prep Coaching", desc: "Developing persuasive conversational structures following executive hiring metrics." },
    { title: "Job Search Strategy Maps", desc: "Creating proactive campaigns targeting the unadvertised, hidden executive job market." },
    { title: "Confidentiality & Compliance", desc: "Maintaining absolute discretion and ironclad confidentiality for current executive clients." }
  ];

  const features = [
    "Passion for candidate success",
    "Achievement-focused metrics",
    "SEO keyword optimization",
    "Meticulous attention to detail",
    "Fast turnaround times",
    "Client-focused approach"
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0D14] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-[#F3C06B]/4 rounded-full blur-[80px] pointer-events-none -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* About Left Visual Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Luxury Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F3C06B]/20 via-transparent to-[#B89047]/20 rounded-2xl border border-[#F3C06B]/30 -m-3 pointer-events-none" />
              
              {/* Mock Consultant Profile Card */}
              <div className="bg-gradient-to-br from-[#121727] to-[#0A0D14] p-8 rounded-xl border border-[#F3C06B]/20 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#F3C06B]/5 rounded-full blur-2xl" />
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#07090E] to-[#F3C06B] p-1 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#07090E] flex items-center justify-center">
                      <User className="w-12 h-12 text-[#F3C06B]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-black text-white tracking-tight">Johnson Omeiza</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] mt-1.5 font-bold">Lead Executive Career Architect</p>
                  </div>
                  
                  <div className="border-t border-[#F3C06B]/10 w-full pt-4 text-left space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400 font-mono font-bold">Expertise:</span>
                      <span className="text-[#F3C06B] font-bold font-mono">Executive & C-Suite</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400 font-mono font-bold">Affiliation:</span>
                      <span className="text-stone-200 font-bold font-mono">PARWCC Board Member</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-stone-400 font-mono font-bold">Experience:</span>
                      <span className="text-stone-200 font-bold font-mono">10+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Badges */}
            <div className="p-4 bg-[#111625]/80 rounded-xl border border-[#F3C06B]/15 flex gap-4 items-center shadow-lg">
              <Shield className="w-10 h-10 text-[#F3C06B] shrink-0" />
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3C06B] font-bold">Confidentiality Assured</h4>
                <p className="text-[11px] text-stone-300 mt-0.5 leading-relaxed">Absolute privacy standards protecting your current position and professional records.</p>
              </div>
            </div>
          </div>

          {/* About Right Context */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#F3C06B] font-extrabold block">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                Designing Career Campaigns That Command Attention
              </h2>
              <p className="text-stone-300 leading-relaxed font-sans text-base">
                I am <strong className="text-[#F3C06B] font-extrabold">Johnson Omeiza</strong>, a certified executive resume expert, career strategist, and branding consultant. Over the past decade, I have dedicated my career to dissecting recruitment metrics, studying Applicant Tracking System parsing technologies, and perfecting executive storytelling. I help candidates pivot from being simple candidates to highly coveted executive talents.
              </p>
            </div>

            {/* Dynamic bullet grids */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-bold text-stone-200">
                  <div className="bg-[#F3C06B]/15 p-1 rounded-full text-[#F3C06B]">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  {f}
                </div>
              ))}
            </div>

            {/* Competency boxes */}
            <div className="grid sm:grid-cols-2 gap-4 border-t border-[#F3C06B]/15 pt-6">
              {highlights.slice(0, 4).map((item, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3C06B] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3C06B]" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
