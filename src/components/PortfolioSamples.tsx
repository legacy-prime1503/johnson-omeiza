import React, { useState } from "react";
import { FileText, Eye, CheckCircle, Download, ExternalLink, Award } from "lucide-react";
import { motion } from "motion/react";

interface SampleItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  templateType: "resume" | "letter" | "social" | "bio";
  content: React.ReactNode;
}

export default function PortfolioSamples() {
  const [activeTab, setActiveTab] = useState("exec");

  const samples: SampleItem[] = [
    {
      id: "exec",
      title: "Chief Executive Officer (C-Suite)",
      category: "Executive Resume",
      description: "A metric-driven corporate leadership resume centered on market capitalization, mergers (M&A), and large-scale digital turnarounds.",
      tags: ["C-Suite", "Board Advisory", "Strategic M&A"],
      templateType: "resume",
      content: (
        <div className="p-8 font-serif text-slate-800 bg-white border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          {/* Document Header */}
          <div className="text-center border-b-2 border-slate-900 pb-3 mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">Victoria Sterling, MBA</h1>
            <p className="text-[9px] text-slate-500 font-sans mt-1">Chicago, IL | (555) 432-1098 | v.sterling@email.com | linkedin.com/in/victoria-sterling-ceo</p>
            <p className="text-xs font-semibold text-[#D4AF37] tracking-widest uppercase mt-1.5 font-sans">
              Chief Executive Officer — Global Logistics & Turnarounds
            </p>
          </div>

          {/* Vision */}
          <div className="mb-4">
            <h2 className="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Vision Statement</h2>
            <p className="text-slate-600">
              Distinguished Chief Executive Officer with 20+ years of high-stakes leadership driving exponential revenue expansion, mergers and acquisitions (M&A), and large-scale digital turnarounds within competitive global markets. Recognized for turning around underperforming multi-million dollar business portfolios, deploying lean enterprise efficiency architectures, and building high-performance leadership teams that bolster shareholder value.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="mb-4">
            <h2 className="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Milestones & Metric Matrix</h2>
            <div className="grid grid-cols-2 gap-3 font-sans">
              <div className="p-2.5 bg-slate-50 border-l-2 border-[#D4AF37]">
                <div className="text-xs font-bold text-slate-900">$240M M&A Transactions</div>
                <p className="text-[10px] text-slate-500 mt-0.5">Directed 4 global corporate mergers, completing full technological integration inside 90 days.</p>
              </div>
              <div className="p-2.5 bg-slate-50 border-l-2 border-[#D4AF37]">
                <div className="text-xs font-bold text-slate-900">42% Operational Containment</div>
                <p className="text-[10px] text-slate-500 mt-0.5">Optimized supply chain logistic routing, producing annual recursive savings of $18M.</p>
              </div>
            </div>
          </div>

          {/* Career */}
          <div>
            <h2 className="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-2">Selected Professional Timeline</h2>
            
            <div className="mb-3">
              <div className="flex justify-between font-bold text-slate-900 font-sans">
                <span>CHIEF EXECUTIVE OFFICER | Apex Global Holdings</span>
                <span>2019 - Present</span>
              </div>
              <p className="italic text-slate-500 text-[10px] font-sans mb-1">Global logistics leader with $540M in operating capital and 3,500+ staff.</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li>Secured <strong className="text-slate-900">112% year-over-year revenue escalation</strong> across 3 regional branches.</li>
                <li>Spearheaded a modernization roadmap that integrated predictive IoT diagnostics, improving transit uptime to <strong className="text-slate-900">99.8%</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "modern",
      title: "Senior Product Manager (SaaS & Tech)",
      category: "Modern Resume",
      description: "Clean, ATS-friendly modern resume highlighting rapid promotions, software lifecycle strategy, and engineering collaboration.",
      tags: ["SaaS & AI", "ATS-Friendly", "Agile / Scrum"],
      templateType: "resume",
      content: (
        <div className="p-8 font-sans text-slate-800 bg-white border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          <div className="text-center border-b pb-3 mb-4">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">Alex Mercer, PMP</h1>
            <p className="text-[9px] text-slate-500 mt-1">San Francisco, CA | (555) 019-2834 | alex.mercer@email.com | linkedin.com/in/alex-mercer-pm</p>
            <p className="text-xs font-semibold text-slate-700 tracking-wider uppercase mt-1">Senior Product Manager — SaaS & AI Products</p>
          </div>

          <div className="mb-4">
            <h2 className="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Summary</h2>
            <p className="text-slate-600">
              Dynamic and outcomes-driven Senior Product Manager with 8+ years of experience leading cross-functional teams to design, launch, and scale high-growth Enterprise B2B SaaS and machine-learning platforms. Adept at driving product lifecycle strategy from zero-to-one, aligning roadmap initiatives with corporate growth targets, and optimizing API integrations.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Core Competencies</h2>
            <div className="grid grid-cols-3 gap-y-1 gap-x-2 text-slate-600 font-medium">
              <div>• Product Lifecycle (PLG)</div>
              <div>• Technical API Architecture</div>
              <div>• User Journey Mapping</div>
              <div>• ATS-Compliant Metrics</div>
              <div>• Agile/Scrum Leadership</div>
              <div>• Predictive Analytics Models</div>
            </div>
          </div>

          <div>
            <h2 className="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-2">Professional Experience</h2>
            <div>
              <div className="flex justify-between font-bold text-slate-900">
                <span>SENIOR PRODUCT MANAGER | CloudFlow Systems</span>
                <span>2022 - Present</span>
              </div>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                <li>Engineered and deployed a custom predictive analytics suite, boosting customer onboarding velocities by <strong>34%</strong>.</li>
                <li>Directed global team of 18 engineers and 3 designers, releasing 14 feature updates with zero system disruption.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "federal",
      title: "Senior Defense Specialist (USAJOBS)",
      category: "Federal Resume",
      description: "Highly structured, comprehensive multi-page resume format engineered for strict USAJOBS compliance and GS series metrics.",
      tags: ["GS-14/15 Series", "Government Compliance", "Defense Systems"],
      templateType: "resume",
      content: (
        <div className="p-8 font-sans text-slate-800 bg-white border border-slate-200 text-[10px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          <div className="border-b pb-3 mb-4">
            <h1 className="text-lg font-bold text-slate-900 uppercase">COLONEL ROBERT CHEN (RET.)</h1>
            <p className="text-[9px] text-slate-500 mt-0.5">Arlington, VA | (555) 789-3421 | r.chen@email.com | US Citizen | Active Top Secret (TS/SCI)</p>
            <p className="text-[10px] font-bold text-slate-700 tracking-wider uppercase mt-1">TARGET OCCUPATION: Senior Logistics Management Specialist (GS-0346-15)</p>
          </div>

          <div className="mb-4 bg-slate-50 p-2.5 rounded border">
            <h2 className="font-bold text-slate-900 uppercase tracking-wider mb-1">FEDERAL EXPERIENCE OVERVIEW:</h2>
            <p className="text-slate-600">
              30+ years of dedicated service in the United States Army managing strategic logistics, defense supply chain security, and multi-theater tactical support operations. Highly skilled in coordinating with federal agencies (DOD, FEMA, DHS), executing massive procurement budgets ($150M+), and leading diverse military and civilian organizations.
            </p>
          </div>

          <div className="space-y-3">
            <div className="border-b pb-1 font-bold text-slate-900 flex justify-between uppercase">
              <span>Position: Chief of Logistic Operations (GS-15 Equivalent)</span>
              <span>06/2018 - Present</span>
            </div>
            <p className="text-[9px] font-mono text-slate-500">Department of the Army, Pentagon | Hours per week: 50 | Salary: $165,000 | Supervisor: Gen. James Carter</p>
            <p className="text-slate-700 font-medium">DUTIES & RESPONSIBILITIES:</p>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>Direct military supply chain networks spanning 4 continents, managing asset inventory values exceeding $1.2B with zero inventory discrepancy.</li>
              <li>Coordinate civilian-military relief logistics pipelines during 4 major hurricanes, successfully delivering 240 tons of supplies under schedule constraints.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "graduate",
      title: "Graduate Engineer",
      category: "Graduate Resume",
      description: "Early-career resume format highlighting internship honors, capstone engineering projects, and technical skills.",
      tags: ["STEM Projects", "Engineering", "Internship Honors"],
      templateType: "resume",
      content: (
        <div className="p-8 font-sans text-slate-800 bg-white border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          <div className="text-center border-b pb-3 mb-4">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">Emily Vance</h1>
            <p className="text-[9px] text-slate-500 mt-1">Boston, MA | (555) 321-9876 | emily.vance@email.com | github.com/emily-vance</p>
            <p className="text-xs font-semibold text-slate-700 tracking-wider uppercase mt-1">Graduate Robotics Engineer</p>
          </div>

          <div className="mb-4">
            <h2 className="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Education</h2>
            <div className="flex justify-between font-bold text-slate-900">
              <span>B.S. IN MECHANICAL ENGINEERING | Boston University</span>
              <span>GPA: 3.92/4.0</span>
            </div>
            <p className="text-slate-600 italic">Honors: Magna Cum Laude, Tau Beta Pi Engineering Honor Society</p>
          </div>

          <div className="mb-4">
            <h2 className="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Academic Capstone Project</h2>
            <div className="space-y-1">
              <p className="font-bold text-slate-900">Autonomous Warehouse Navigation Drone (Team Lead)</p>
              <p className="text-slate-600">
                Engineered an autonomous quadcopter utilizing LiDAR sensors and computer vision algorithms to map and navigate indoor warehouse corridors with sub-centimeter path resolution accuracy.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "letter",
      title: "Executive Director Cover Letter",
      category: "Cover Letter",
      description: "A highly persuasive cover letter constructed to secure direct value matches with Board search committees.",
      tags: ["Strategic Narrative", "Direct Pitch", "Objection Handling"],
      templateType: "letter",
      content: (
        <div className="p-8 font-sans text-slate-800 bg-white border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          <div className="mb-4">
            <p className="font-bold">Victoria Sterling, MBA</p>
            <p className="text-slate-500 text-[9px]">Chicago, IL | v.sterling@email.com</p>
          </div>
          <p className="mb-3">July 1, 2026</p>
          <p className="mb-3"><strong>Attn: Executive Search Committee</strong><br />Apex Global Capital</p>
          <p className="mb-3 font-bold">RE: Chief Executive Officer Position (Ref: #CEO-2026)</p>
          <p className="mb-3">Dear Members of the Board,</p>
          <p className="mb-3">
            I have spent the last two decades leading large-scale corporate turnarounds and driving organic revenue expansion in highly saturated global markets. When reviewing Apex Global Capital's strategic vision for 2027, I was excited to see a distinct focus on supply chain digitization and aggressive M&A—challenges that precisely align with my core execution strengths.
          </p>
          <p className="mb-3">
            In my most recent role as CEO of Apex Global Holdings, I took over a stagnating enterprise and transformed it into a highly profitable sector leader inside 18 months. By integrating predictive IoT logistics networks and restructuring underperforming assets, my team achieved a <strong>112% YoY revenue growth</strong> and cut overhead waste by <strong>42% ($18M in savings)</strong>.
          </p>
          <p className="mb-4">Sincerely,<br /><br /><strong>Victoria Sterling, MBA</strong></p>
        </div>
      )
    },
    {
      id: "social",
      title: "LinkedIn Profile Blueprint",
      category: "LinkedIn Profile",
      description: "SEO keyword optimization matrix for LinkedIn Headlines, summaries, and experience sections.",
      tags: ["LinkedIn SEO", "Headline Blueprint", "Recruiter Magnet"],
      templateType: "social",
      content: (
        <div className="p-8 font-sans text-slate-800 bg-slate-50 border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          {/* Simulated LinkedIn Cover */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-900 h-24 rounded-t-xl relative overflow-hidden mb-8 border-b">
            <div className="absolute bottom-2 left-6 bg-white p-1 rounded-full border">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center font-bold text-indigo-900 text-lg">VS</div>
            </div>
          </div>

          <div className="px-4 space-y-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Victoria Sterling, MBA</h3>
              <p className="text-xs text-indigo-700 font-semibold mt-0.5">
                Chief Executive Officer (CEO) | B2B SaaS Turnaround Architect | Global M&A Advisor | $250M ARR Impact Metric Leader
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">Chicago, Illinois, United States | 500+ connections</p>
            </div>

            <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold text-slate-900">About Section (SEO Optimized)</h4>
              <p className="text-slate-600 leading-relaxed font-sans">
                As a global Chief Executive Officer, I specialize in transforming stagnant B2B SaaS and technical logistics operations into high-yield industry market leaders. Across my 20-year career trajectory, I have maintained a strict focus on maximizing enterprise valuations, securing accretive M&A transitions, and aligning cross-functional teams behind clear, metric-driven product roadmaps.
              </p>
              <p className="text-slate-500 font-semibold mt-2">
                Specialties: executive leadership, SaaS turnaround strategy, M&A integration, logistics operations, scaling sales pipelines, $100M+ P&L management, stakeholder negotiation, boards relationship modeling.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "bio",
      title: "Executive Biography Outline",
      category: "Executive Biography",
      description: "A sophisticated narrative biography suited for corporate press kits, speaking engagements, and advisory boards.",
      tags: ["Press Kits", "Board Submissions", "Corporate Story"],
      templateType: "bio",
      content: (
        <div className="p-8 font-serif text-slate-800 bg-white border border-slate-200 text-[11px] leading-relaxed max-w-3xl mx-auto shadow-2xl rounded">
          <div className="text-center pb-4 mb-4 border-b">
            <h1 className="text-xl font-bold tracking-tight text-slate-900 uppercase">Executive Biography</h1>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest font-sans font-bold mt-1">Victoria Sterling, MBA</p>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-slate-600">
              Victoria Sterling is a globally recognized Chief Executive Officer and operations turnaround architect who has spent over two decades engineering exponential growth for high-stakes B2B SaaS and logistics companies. With a strategic approach combining metric-driven accountability with progressive technological implementation, she is a trusted advisor to private equity boards and enterprise search committees.
            </p>
            <p className="text-slate-600">
              Prior to her tenure as Chief Executive Officer of Apex Global Holdings, Ms. Sterling led strategic transformations at several high-growth tech firms, including a $240M M&A project that achieved full vertical integration within 90 days. She is an alumnus of the University of Chicago Booth School of Business, where she completed her MBA in Finance and Strategic Management.
            </p>
          </div>
        </div>
      )
    }
  ];

  const currentSample = samples.find((s) => s.id === activeTab) || samples[0];

  return (
    <section id="portfolio" className="py-24 bg-[#07090E] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#F3C06B]/4 rounded-full blur-[110px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F3C06B] font-extrabold">
            Work Samples
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
            Premium Document Portfolio Mockups
          </h2>
          <p className="text-stone-300 text-sm sm:text-base font-sans">
            Review live visual previews of real formats engineered for top-tier corporate, technical, and government applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selector Column */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold block mb-3">
              Select Document Template:
            </span>
            {samples.map((sample) => (
              <motion.button
                key={sample.id}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(sample.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  activeTab === sample.id
                    ? "bg-[#F3C06B] border-transparent text-[#07090E] shadow-lg shadow-[#F3C06B]/15"
                    : "bg-[#111625]/90 border-[#F3C06B]/15 text-stone-300 hover:border-[#F3C06B] hover:bg-[#161D2E] hover:text-[#F3C06B]"
                }`}
              >
                <div className="space-y-1">
                  <div className={`text-xs font-mono uppercase tracking-wider font-extrabold ${activeTab === sample.id ? 'text-[#07090E]/85' : 'text-[#F3C06B]'}`}>
                    {sample.category}
                  </div>
                  <div className={`text-sm font-bold tracking-tight font-sans ${activeTab === sample.id ? 'text-[#07090E]' : 'text-white'}`}>
                    {sample.title}
                  </div>
                </div>
                <Eye className={`w-4 h-4 shrink-0 ${activeTab === sample.id ? 'text-[#07090E]' : 'text-stone-400'}`} />
              </motion.button>
            ))}
          </div>

          {/* Interactive Live Preview Panel */}
          <div className="lg:col-span-8 bg-[#111625]/95 border border-[#F3C06B]/20 p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F3C06B]/5 to-transparent rounded-bl-full pointer-events-none" />
            
            {/* Preview Panel Top */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#F3C06B]/15 pb-4 mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#F3C06B] tracking-widest font-extrabold block">
                  Interactive Live Viewer
                </span>
                <h3 className="text-lg font-serif font-black text-white tracking-tight">
                  {currentSample.title} ({currentSample.category})
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {currentSample.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[#07090E] border border-[#F3C06B]/20 text-[#F3C06B] font-mono text-[9px] uppercase tracking-wider rounded font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Sheet Frame */}
            <div className="overflow-x-auto overflow-y-auto max-h-[500px] border border-[#F3C06B]/15 rounded-xl p-1 bg-[#07090E] mb-6">
              {currentSample.content}
            </div>

            {/* Actions Bottom Bar */}
            <div className="pt-5 border-t border-[#F3C06B]/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-stone-400">
                <Award className="w-4 h-4 text-[#F3C06B]" />
                <span>100% compliant with standard Applicant Tracking Systems.</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.03, translateY: -1 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:johnsonomeiza.career.consultant@gmail.com"
                className="flex items-center gap-2 bg-gradient-to-r from-[#B89047] to-[#F3C06B] text-[#07090E] hover:brightness-110 px-5 py-2.5 rounded font-sans font-bold transition-all shadow-md cursor-pointer"
              >
                Request Custom Format <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
