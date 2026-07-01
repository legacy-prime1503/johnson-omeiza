import React from "react";
import * as LucideIcons from "lucide-react";
import { INDUSTRIES } from "../data";

export default function Industries() {
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Building2;
    return <IconComponent className="w-5 h-5 text-[#B89047] group-hover:text-[#B89047] transition-colors" />;
  };

  return (
    <section id="industries" className="py-24 bg-white text-stone-800 relative border-b border-[#C5A880]/30">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-extrabold">
            Versatile Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-stone-900">
            Industries Successfully Served
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Structuring professional resumes and placement roadmaps tailored for corporate metrics across 18 major industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="group bg-[#FAF8F5] border border-[#C5A880]/20 p-5 rounded-xl hover:border-[#B89047] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center space-y-3"
            >
              <div className="p-3 bg-white border border-[#C5A880]/10 rounded-lg group-hover:scale-105 transition-transform duration-200 shadow-sm">
                {renderIcon(ind.iconName)}
              </div>
              <span className="text-xs font-bold text-stone-800 group-hover:text-[#B89047] transition-colors font-sans">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
