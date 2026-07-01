import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Faqs() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5] text-stone-800 relative border-b border-[#C5A880]/30">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-extrabold">
            Information Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-stone-900">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Unveiling exact metrics behind Applicant Tracking Systems, revision timeline matrices, and customized coaching plans.
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#C5A880]/20 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Accordion Toggle Header */}
                <motion.button
                  whileHover={{ backgroundColor: "rgba(184, 144, 71, 0.02)" }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[#B89047] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold tracking-tight text-stone-900 leading-relaxed font-serif">
                      {faq.question}
                    </span>
                  </div>
                  <div className="relative w-5 h-5 shrink-0">
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="up"
                          initial={{ opacity: 0, rotate: -45 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronUp className="w-5 h-5 text-[#B89047]" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="down"
                          initial={{ opacity: 0, rotate: 45 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5 text-stone-400" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>

                {/* Answer body with smooth expansion height and opacity */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-[#C5A880]/15"
                    >
                      <div className="p-5 bg-[#FAF8F5]/80">
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
