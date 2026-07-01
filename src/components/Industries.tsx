import React from "react";
import * as LucideIcons from "lucide-react";
import { INDUSTRIES } from "../data";

export default function Industries() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Building2;
    return <IconComponent className="w-5 h-5 text-[#F3C06B] group-hover:text-[#F3C06B] transition-colors" />;
  };

  return (
    <section id="industries" className="py-24 bg-[#07090E] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(243,192,107,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-extrabold">
            Versatile Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Industries Successfully Served
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            Structuring professional resumes and placement roadmaps tailored for corporate metrics across 18 major industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="group bg-[#111625]/90 border border-[#F3C06B]/15 p-5 rounded-xl hover:border-[#F3C06B]/80 hover:bg-[#161D2E] hover:shadow-lg hover:shadow-[#F3C06B]/5 transition-all duration-300 flex flex-col items-center text-center space-y-3"
            >
              <div className="p-3 bg-[#07090E] border border-[#F3C06B]/10 rounded-lg group-hover:scale-105 transition-transform duration-200 shadow-sm">
                {renderIcon(ind.iconName)}
              </div>
              <span className="text-xs font-bold text-stone-300 group-hover:text-[#F3C06B] transition-colors font-sans">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
