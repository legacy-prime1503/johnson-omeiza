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
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#C5A880]/30 text-stone-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 cursor-pointer select-none" 
            onClick={() => handleLinkClick("hero")}
          >
            <PersonalLogo size="md" />
            <div>
              <span className="font-sans font-extrabold text-lg tracking-tight bg-gradient-to-r from-[#1A1D24] to-[#C49B55] bg-clip-text text-transparent block">
                JOHNSON OMEIZA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#B89047] font-mono block -mt-1 font-bold">
                Executive Career Consultant
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick(item.id)}
                className="text-xs uppercase tracking-wider font-mono text-stone-600 hover:text-[#B89047] font-bold transition-colors duration-200 cursor-pointer relative"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Call to Action Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, translateY: -1, backgroundColor: "rgba(184, 144, 71, 0.05)" }}
              whileTap={{ scale: 0.96 }}
              href="mailto:johnsonomeiza.career.consultant@gmail.com"
              className="flex items-center gap-2 text-xs font-mono font-bold text-[#B89047] border border-[#B89047]/40 px-4 h-10 rounded hover:border-[#B89047] transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              Direct Email
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04, translateY: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleLinkClick("contact")}
              className="bg-[#1A1D24] hover:bg-[#2D313A] text-white border border-[#C5A880]/40 text-xs font-mono font-bold px-5 h-10 rounded transition-colors duration-200 shadow-sm cursor-pointer"
            >
              Book Strategy Session
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 p-2 rounded focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="lg:hidden bg-[#FAF8F5] border-t border-[#C5A880]/20 py-4 px-6 space-y-3 absolute left-0 right-0 top-20 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-left text-sm font-mono text-stone-600 hover:text-[#B89047] font-bold py-1 w-full cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <div className="border-t border-[#C5A880]/20 pt-4 mt-2 flex flex-col gap-3">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href="mailto:johnsonomeiza.career.consultant@gmail.com"
                className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#B89047] border border-[#B89047]/30 py-2.5 rounded hover:bg-[#B89047]/5"
              >
                <Mail className="w-4 h-4" />
                johnsonomeiza.career.consultant@gmail.com
              </motion.a>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => handleLinkClick("contact")}
                className="bg-[#1A1D24] hover:bg-[#2D313A] text-white text-xs font-mono font-bold py-2.5 rounded transition-colors text-center w-full cursor-pointer"
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
