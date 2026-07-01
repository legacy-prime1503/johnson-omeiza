import React from "react";
import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export default function PersonalLogo({ className = "", iconClassName = "", size = "md", onClick }: LogoProps) {
  const dimensions = {
    sm: "w-12 h-12 sm:w-14 sm:h-14",
    md: "w-18 h-18 sm:w-22 sm:h-22",
    lg: "w-28 h-28 sm:w-36 sm:h-36",
  }[size];

  return (
    <motion.div
      id="personal-executive-logo"
      whileHover={{ 
        scale: 1.08,
        rotate: [0, -2, 2, 0],
        filter: "drop-shadow(0 0 12px rgba(243, 192, 107, 0.4))"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative flex items-center justify-center ${dimensions} ${className} ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Premium SVG Vector Monogram */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${iconClassName}`}
      >
        {/* Outer Premium Shield (Discretion & Credentials) */}
        <path
          d="M50 5 L85 22 V55 C85 75 70 90 50 95 C30 90 15 75 15 55 V22 L50 5Z"
          fill="url(#logoGoldGradientBg)"
          stroke="url(#logoGoldGradientBorder)"
          strokeWidth="3.5"
          className="opacity-30"
        />
        
        {/* "O" - Refined Thin Circle of Global Corporate Competence */}
        <circle
          cx="50"
          cy="50"
          r="26"
          stroke="url(#logoGoldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          className="opacity-95"
        />

        {/* Upward Executive Growth Summit / Peak Accent */}
        <path
          d="M50 20 L68 45 H32 L50 20Z"
          fill="url(#logoGoldGradient)"
          className="opacity-45"
        />

        {/* "J" - Flowing monogram curve */}
        <path
          d="M62 34 V52 C62 61 54 68 44 68 C35 68 29 61 29 54"
          stroke="url(#logoGoldGradient)"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Elite Anchor Pin for the J */}
        <circle
          cx="62"
          cy="32"
          r="5"
          fill="url(#logoGoldGradient)"
        />

        {/* Upward-pointing Chevron indicating rapid upward projection */}
        <path
          d="M38 78 L50 70 L62 78"
          stroke="url(#logoGoldGradient)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Luxury Gold Gradients */}
        <defs>
          <linearGradient id="logoGoldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F3C06B" />
            <stop offset="50%" stopColor="#FFE5A3" />
            <stop offset="100%" stopColor="#B89047" />
          </linearGradient>
          <linearGradient id="logoGoldGradientBorder" x1="15" y1="5" x2="85" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFE5A3" />
            <stop offset="100%" stopColor="#B89047" />
          </linearGradient>
          <linearGradient id="logoGoldGradientBg" x1="15" y1="5" x2="85" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A1D24" />
            <stop offset="100%" stopColor="#B89047" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
