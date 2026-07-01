import React from "react";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}

export default function PersonalLogo({ className = "", iconClassName = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: "w-10 h-10 sm:w-11 sm:h-11",
    md: "w-14 h-14 sm:w-16 sm:h-16",
    lg: "w-20 h-20 sm:w-24 sm:h-24",
  }[size];

  return (
    <div id="personal-executive-logo" className={`relative flex items-center justify-center ${dimensions} ${className}`}>
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
          strokeWidth="2.5"
          className="opacity-20"
        />
        
        {/* "O" - Refined Thin Circle of Global Corporate Competence */}
        <circle
          cx="50"
          cy="50"
          r="26"
          stroke="url(#logoGoldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          className="opacity-95"
        />

        {/* Upward Executive Growth Summit / Peak Accent */}
        <path
          d="M50 20 L68 45 H32 L50 20Z"
          fill="url(#logoGoldGradient)"
          className="opacity-35"
        />

        {/* "J" - Flowing monogram curve */}
        <path
          d="M62 34 V52 C62 61 54 68 44 68 C35 68 29 61 29 54"
          stroke="url(#logoGoldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Elite Anchor Pin for the J */}
        <circle
          cx="62"
          cy="32"
          r="4"
          fill="url(#logoGoldGradient)"
        />

        {/* Upward-pointing Chevron indicating rapid upward projection */}
        <path
          d="M38 78 L50 70 L62 78"
          stroke="url(#logoGoldGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Luxury Gold Gradients */}
        <defs>
          <linearGradient id="logoGoldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C5A880" />
            <stop offset="50%" stopColor="#E2C9A1" />
            <stop offset="100%" stopColor="#B89047" />
          </linearGradient>
          <linearGradient id="logoGoldGradientBorder" x1="15" y1="5" x2="85" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#E2C9A1" />
            <stop offset="100%" stopColor="#B89047" />
          </linearGradient>
          <linearGradient id="logoGoldGradientBg" x1="15" y1="5" x2="85" y2="95" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FAF8F5" />
            <stop offset="100%" stopColor="#C5A880" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
