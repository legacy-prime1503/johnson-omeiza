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
    <section id="testimonials" className="py-24 bg-[#07090E] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(243,192,107,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-extrabold">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Client Success Testimonials
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            Read positive feedback from high-ranking professionals who secured interviews and doubled their competitive conversion metrics.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto bg-[#111625]/95 border border-[#F3C06B]/20 p-8 sm:p-12 rounded-2xl relative shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#F3C06B]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          <Quote className="w-12 h-12 text-[#F3C06B]/10 absolute top-6 left-6" />

          {/* Feedback Body */}
          <div className="space-y-6 relative z-10">
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F3C06B] text-[#F3C06B]" />
              ))}
            </div>

            {/* Quote content */}
            <p className="text-base sm:text-lg text-white leading-relaxed font-serif font-semibold italic">
              "{current.feedback}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#07090E] border border-[#F3C06B]/25 flex items-center justify-center font-sans font-bold text-[#F3C06B] text-sm shrink-0 shadow-inner">
                {current.avatarLetter}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight font-serif">{current.name}</h4>
                <p className="text-xs text-stone-400 font-sans mt-0.5">
                  {current.role} &mdash; <span className="text-[#F3C06B] font-bold">{current.company}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-[#F3C06B]/15 mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex ? "bg-[#F3C06B] w-6" : "bg-stone-700 hover:bg-stone-600"
                  }`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-lg border border-[#F3C06B]/25 bg-[#07090E] hover:border-[#F3C06B] hover:bg-[#161D2E] flex items-center justify-center text-[#F3C06B] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-lg border border-[#F3C06B]/25 bg-[#07090E] hover:border-[#F3C06B] hover:bg-[#161D2E] flex items-center justify-center text-[#F3C06B] transition-colors cursor-pointer"
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
