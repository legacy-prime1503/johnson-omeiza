import React, { useState } from "react";
import { Briefcase, Menu, X, Mail } from "lucide-react";
import PersonalLogo from "./PersonalLogo";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "AI Career Tools", id: "ai-suite" },
    { label: "My Process", id: "process" },
    { label: "Industries", id: "industries" },
    { label: "Portfolio", id: "portfolio" },
    { label: "FAQ", id: "faq" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#07090E]/95 backdrop-blur-md border-b border-[#F3C06B]/20 text-stone-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          
          {/* Logo Brand */}
          <motion.div 
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-4 cursor-pointer select-none" 
            onClick={() => handleLinkClick("hero")}
          >
            <PersonalLogo size="md" />
            <div>
              <span className="font-sans font-black text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-[#FFE5A3] via-[#F3C06B] to-[#B89047] bg-clip-text text-transparent block">
                JOHNSON OMEIZA
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#F3C06B] font-mono block -mt-0.5 font-bold">
                Executive Career Consultant
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick(item.id)}
                className="text-xs uppercase tracking-wider font-mono text-stone-300 hover:text-[#F3C06B] font-bold transition-colors duration-200 cursor-pointer relative"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Call to Action Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, translateY: -1, backgroundColor: "rgba(243, 192, 107, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:johnsonomeiza.career.consultant@gmail.com"
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#F3C06B] border border-[#F3C06B]/40 px-5 h-11 rounded hover:border-[#F3C06B] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Direct Email
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, translateY: -1, boxShadow: "0 0 15px rgba(243, 192, 107, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLinkClick("contact")}
              className="bg-gradient-to-r from-[#B89047] to-[#F3C06B] hover:from-[#F3C06B] hover:to-[#B89047] text-[#07090E] font-mono font-extrabold text-xs px-6 h-11 rounded transition-colors duration-200 shadow-md cursor-pointer"
            >
              Book Strategy Session
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-white p-2 rounded focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#07090E] border-t border-[#F3C06B]/20 py-6 px-6 space-y-4 absolute left-0 right-0 top-22 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-sm font-mono text-stone-300 hover:text-[#F3C06B] font-bold py-1 w-full cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="border-t border-[#F3C06B]/20 pt-6 mt-4 flex flex-col gap-3">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="mailto:johnsonomeiza.career.consultant@gmail.com"
                className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#F3C06B] border border-[#F3C06B]/30 py-3 rounded hover:bg-[#F3C06B]/10"
              >
                <Mail className="w-4 h-4" />
                johnsonomeiza.career.consultant@gmail.com
              </motion.a>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick("contact")}
                className="bg-gradient-to-r from-[#B89047] to-[#F3C06B] text-[#07090E] text-xs font-mono font-extrabold py-3 rounded transition-colors text-center w-full cursor-pointer"
              >
                Book Strategy Session
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
