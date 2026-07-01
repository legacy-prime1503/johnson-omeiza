import React, { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#FAF8F5] text-stone-800 relative border-b border-[#C5A880]/30">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(197,168,128,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-extrabold">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-stone-900">
            Client Success Testimonials
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Read positive feedback from high-ranking professionals who secured interviews and doubled their competitive conversion metrics.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto bg-white border border-[#C5A880]/20 p-8 sm:p-12 rounded-2xl relative shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B89047]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <Quote className="w-12 h-12 text-[#C5A880]/15 absolute top-6 left-6" />

          {/* Feedback Body */}
          <div className="space-y-6 relative z-10">
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B89047] text-[#B89047]" />
              ))}
            </div>

            {/* Quote content */}
            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-serif italic">
              "{current.feedback}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1A1D24] flex items-center justify-center font-sans font-bold text-white text-sm shrink-0 shadow-inner">
                {current.avatarLetter}
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900 tracking-tight">{current.name}</h4>
                <p className="text-xs text-stone-500 font-sans mt-0.5">
                  {current.role} &mdash; <span className="text-[#B89047] font-bold">{current.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-stone-150 mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex ? "bg-[#B89047] w-6" : "bg-stone-200 hover:bg-stone-300"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg border border-stone-250 bg-white hover:border-[#B89047] hover:bg-[#FAF8F5] flex items-center justify-center text-stone-600 hover:text-[#B89047] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg border border-stone-250 bg-white hover:border-[#B89047] hover:bg-[#FAF8F5] flex items-center justify-center text-stone-600 hover:text-[#B89047] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
