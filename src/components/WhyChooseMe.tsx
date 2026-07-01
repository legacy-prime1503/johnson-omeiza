import React from "react";
import * as LucideIcons from "lucide-react";

export default function WhyChooseMe() {
  const values = [
    {
      title: "ATS Optimized",
      description: "Resumes explicitly structured and coded to index flawlessly inside Taleo, Workday, and Greenhouse parsers.",
      icon: "Cpu"
    },
    {
      title: "HR & Recruiter Standards",
      description: "Crafted through the lens of seasoned corporate talent acquisition managers to survive the initial 6-second scan.",
      icon: "Eye"
    },
    {
      title: "Industry-Specific Alignment",
      description: "Using precise terminology, operational indicators, and metrics native to your targeted business sector.",
      icon: "TrendingUp"
    },
    {
      title: "Keyword SEO Optimization",
      description: "Deep content indexing against active competitive job postings to match high recruiter queries.",
      icon: "SearchCode"
    },
    {
      title: "Personalized 1-on-1 Focus",
      description: "Bespoke interview intakes directly with Johnson Omeiza. No outsource sub-contracting or automatic generators.",
      icon: "User"
    },
    {
      title: "Fast Delivery",
      description: "Guaranteed turnaround times ensuring you never miss critical application deadlines or corporate openings.",
      icon: "Zap"
    },
    {
      title: "Unlimited Revisions",
      description: "A secure, client-centric collaboration with 30 days of free adjustments until you feel 100% confident.",
      icon: "CheckCircle"
    },
    {
      title: "100% Professional Layouts",
      description: "Clean, elegant layouts tailored for high-profile visual presentation. Suitable for PDF, web, or high-end print.",
      icon: "Award"
    },
    {
      title: "High Interview Success focus",
      description: "Specifically engineered as lead generators to double your callback percentages and land executive interviews.",
      icon: "Target"
    },
    {
      title: "Global Client Expertise",
      description: "Expertly aligning candidates' career trajectories with localized expectations across US, EMEA, and APAC markets.",
      icon: "Globe"
    },
    {
      title: "Excellent Customer Support",
      description: "Direct, supportive, and highly responsive communication from initial consultation to final delivery updates.",
      icon: "Heart"
    }
  ];

  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Check;
    return <IconComponent className="w-5 h-5 text-[#F3C06B]" />;
  };

  return (
    <section id="why-choose-me" className="py-24 bg-[#0A0D14] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,192,107,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(243,192,107,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-extrabold">
            The Competitive Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Why Executive Leaders Trust My Advisory
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            We don't write generic, bulleted chronologies. We engineer high-yield career marketing campaigns.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#111625]/90 border border-[#F3C06B]/15 p-6 rounded-xl hover:border-[#F3C06B]/80 hover:bg-[#161D2E] hover:shadow-lg hover:shadow-[#F3C06B]/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="p-2.5 bg-[#07090E] rounded-lg w-fit border border-[#F3C06B]/15 group-hover:scale-105 transition-transform duration-250">
                  {renderIcon(v.icon)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#F3C06B] uppercase tracking-wider font-mono">
                    {v.title}
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    {v.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
