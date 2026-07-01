import React from "react";
import { Briefcase, ArrowUp, Mail, Shield } from "lucide-react";
import PersonalLogo from "./PersonalLogo";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    onNavigate("hero");
  };

  return (
    <footer className="bg-[#FAF8F5] text-stone-500 py-16 border-t border-[#C5A880]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Closing statement */}
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <PersonalLogo size="sm" />
              <div>
                <span className="font-sans font-extrabold text-base tracking-tight text-stone-900 block">
                  JOHNSON OMEIZA
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#B89047] font-mono block -mt-1 font-bold">
                  Executive Career Consultant
                </span>
              </div>
            </div>

            {/* Closing Statement */}
            <p className="text-stone-700 text-sm leading-relaxed max-w-md italic font-serif">
              "Your dream job begins with a professionally crafted resume. Let's build your career success together."
            </p>

            <div className="flex gap-4 text-xs font-mono">
              <a
                href="mailto:johnsonomeiza.career.consultant@gmail.com"
                className="flex items-center gap-1.5 text-[#B89047] hover:text-[#B89047]/80 transition-colors font-bold"
              >
                <Mail className="w-4 h-4" />
                johnsonomeiza.career.consultant@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-stone-900 font-bold tracking-widest">
              Consulting Map
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-stone-600">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#B89047] transition-colors cursor-pointer">
                  Career Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#B89047] transition-colors cursor-pointer">
                  Services Provided
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("ai-suite")} className="hover:text-[#B89047] transition-colors cursor-pointer">
                  AI Career Tools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("portfolio")} className="hover:text-[#B89047] transition-colors cursor-pointer">
                  Portfolio Mockups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-stone-900 font-bold tracking-widest">
              Discretion & Trust
            </h4>
            <p className="text-[11px] leading-relaxed text-stone-500 font-sans">
              All executive briefings, current resumes, and personal brand campaigns are handled with the highest standard of corporate confidentiality and security compliance.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase text-[#B89047] font-bold">
              <Shield className="w-4 h-4" />
              <span>Confidentiality Guaranteed</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright details & back to top */}
        <div className="border-t border-stone-200 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-stone-400">
          <div>
            &copy; {currentYear} Johnson Omeiza Executive Career Consultant. All Rights Reserved.
          </div>
          <button
            onClick={handleBackToTop}
            className="flex items-center gap-2 hover:text-[#B89047] transition-colors focus:outline-none cursor-pointer font-bold"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 text-[#B89047]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
