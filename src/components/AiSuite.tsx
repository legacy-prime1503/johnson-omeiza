import React, { useState } from "react";
import { Sparkles, Shield, Compass, FileText, CheckCircle, RefreshCw, AlertCircle, Copy, Cpu, Eye } from "lucide-react";

interface CritiqueResult {
  atsScore: number;
  keyFindings: string[];
  formattingTips: string[];
  suggestedKeywords: string[];
  executiveSummary: string;
}

interface StrategyResult {
  phases: {
    title: string;
    actionSteps: string[];
  }[];
  tacticalTip: string;
}

export default function AiSuite() {
  const [activeTab, setActiveTab] = useState<"ats" | "strategy">("ats");

  // ATS Tool States
  const [resumeText, setResumeText] = useState("");
  const [targetRole, setTargetRole] = useState("Senior Product Manager");
  const [critiqueResult, setCritiqueResult] = useState<CritiqueResult | null>(null);
  const [atsLoading, setAtsLoading] = useState(false);
  const [atsError, setAtsError] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);

  // Strategy Tool States
  const [targetIndustry, setTargetIndustry] = useState("Information Technology");
  const [strategyRole, setStrategyRole] = useState("Chief Technology Officer");
  const [strategyResult, setStrategyResult] = useState<StrategyResult | null>(null);
  const [strategyLoading, setStrategyLoading] = useState(false);
  const [strategyError, setStrategyError] = useState("");

  const [copiedKeyword, setCopiedKeyword] = useState<string | null>(null);

  const sampleResumes: Record<string, string> = {
    "Alex Mercer": `ALEX MERCER, PMP
alex.mercer@email.com | (555) 019-2834
Targeting: Senior Product Manager

Professional Summary:
Responsible for product development. Doing agile and Scrum for years. Good at launching features and scaling systems. Managed budget and was a great leader.

Experience:
PRODUCT MANAGER - DevSprint Solutions
2018 - 2022
- Managed development of 3 systems.
- Talked to customers and fixed bugs.
- Worked with developers.`,
    "Jane Doe": `JANE DOE, PHR
j.doe@email.com | (555) 887-1234
Targeting: VP of Human Resources

Executive Summary:
Dynamic Human Resources professional with expertise in leading recruitment. Good at team building, handling employee relations, and sorting out compliance issues.

Work History:
Director of HR - TalentCorp Global (2021-Present)
- Led HR department.
- Overlooked benefits packages.
- Handled recruitment.`
  };

  const handleLoadSample = (key: string) => {
    setResumeText(sampleResumes[key]);
  };

  // Simulated loading step transitions
  const runAtsLoadingSequence = () => {
    const steps = [
      "Accessing ATS parsability criteria...",
      "Analyzing keyword frequencies & weighting...",
      "Sieving for metric-driven quantitative results...",
      "Formulating Johnson Omeiza's Career Recommendation..."
    ];
    setLoadingStep(0);
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);
    return interval;
  };

  const handleScanResume = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim()) {
      setAtsError("Please enter or paste your resume text to perform an ATS scan.");
      return;
    }
    setAtsError("");
    setAtsLoading(true);
    setCritiqueResult(null);

    const interval = runAtsLoadingSequence();

    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText, targetRole }),
      });

      if (!response.ok) {
        throw new Error("Unable to analyze resume. Please try again.");
      }

      const data = await response.json();
      setCritiqueResult(data);
    } catch (err: any) {
      setAtsError(err.message || "An unexpected error occurred during analysis.");
    } finally {
      clearInterval(interval);
      setAtsLoading(false);
    }
  };

  const handleGenerateStrategy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!strategyRole.trim()) {
      setStrategyError("Please enter your target executive job title.");
      return;
    }
    setStrategyError("");
    setStrategyLoading(true);
    setStrategyResult(null);

    try {
      const response = await fetch("/api/generate-strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetRole: strategyRole, targetIndustry }),
      });

      if (!response.ok) {
        throw new Error("Unable to build strategy roadmap. Please try again.");
      }

      const data = await response.json();
      setStrategyResult(data);
    } catch (err: any) {
      setStrategyError(err.message || "An unexpected error occurred during strategy compilation.");
    } finally {
      setStrategyLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKeyword(text);
    setTimeout(() => setCopiedKeyword(null), 2000);
  };

  const loadingMessages = [
    "Accessing ATS parsability criteria...",
    "Analyzing keyword frequencies & weighting...",
    "Sieving for metric-driven quantitative results...",
    "Formulating Johnson Omeiza's Career Recommendation..."
  ];

  return (
    <section id="ai-suite" className="py-24 bg-[#0A0D14] text-stone-300 relative border-b border-[#F3C06B]/20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(243,192,107,0.05)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F3C06B]/10 border border-[#F3C06B]/25 px-4 py-2 rounded-full text-xs font-mono text-[#F3C06B] font-extrabold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
            Proprietary AI Career Suite
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
            Evaluate Your Resume & Strategy Instantly
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto font-sans">
            Experience our advanced talent scanning and search-strategy algorithms powered by Gemini. Receive executive career consulting insights in seconds.
          </p>
        </div>

        {/* AI Suite Selector Tabs */}
        <div className="max-w-md mx-auto grid grid-cols-2 p-1.5 bg-[#111625]/90 border border-[#F3C06B]/25 rounded-xl mb-12 shadow-md">
          <button
            onClick={() => setActiveTab("ats")}
            className={`py-2.5 rounded-lg text-xs uppercase tracking-wider font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "ats"
                ? "bg-[#F3C06B] text-[#07090E] shadow-lg shadow-[#F3C06B]/15 font-extrabold"
                : "text-stone-400 hover:text-[#F3C06B]"
            }`}
          >
            <Cpu className="w-4 h-4" />
            ATS Resume Scanner
          </button>
          <button
            onClick={() => setActiveTab("strategy")}
            className={`py-2.5 rounded-lg text-xs uppercase tracking-wider font-mono font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "strategy"
                ? "bg-[#F3C06B] text-[#07090E] shadow-lg shadow-[#F3C06B]/15 font-extrabold"
                : "text-stone-400 hover:text-[#F3C06B]"
            }`}
          >
            <Compass className="w-4 h-4" />
            Job Search Strategist
          </button>
        </div>

        {/* TOOL 1: ATS RESUME SCANNER */}
        {activeTab === "ats" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#111625] to-[#0B0E17] border border-[#F3C06B]/25 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl">
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-black text-white tracking-tight flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#F3C06B]" />
                  Resume Metric Evaluator
                </h3>
                <p className="text-xs text-stone-300">
                  Enter your target role and paste your text below to trace compliance shortfalls.
                </p>
              </div>

              {/* Sample loader */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider font-bold">Load Sample Resume:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleLoadSample("Alex Mercer")}
                    className="px-3 py-1.5 bg-[#1A1D24] text-stone-300 hover:text-[#F3C06B] rounded border border-[#F3C06B]/15 hover:border-[#F3C06B] text-[10px] font-mono transition-colors font-bold cursor-pointer"
                  >
                    Product Manager Sample
                  </button>
                  <button
                    onClick={() => handleLoadSample("Jane Doe")}
                    className="px-3 py-1.5 bg-[#1A1D24] text-stone-300 hover:text-[#F3C06B] rounded border border-[#F3C06B]/15 hover:border-[#F3C06B] text-[10px] font-mono transition-colors font-bold cursor-pointer"
                  >
                    VP HR Sample
                  </button>
                </div>
              </div>

              <form onSubmit={handleScanResume} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#F3C06B] font-bold block">
                    Target Executive Role
                  </label>
                  <input
                    type="text"
                    required
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g. Senior Software Director, VP Sales"
                    className="w-full bg-[#07090E] text-stone-100 border border-[#F3C06B]/20 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#F3C06B] transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#F3C06B] font-bold block">
                    Resume Text Content
                  </label>
                  <textarea
                    required
                    rows={10}
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                    placeholder="Paste the raw text of your current resume draft here..."
                    className="w-full bg-[#07090E] text-stone-100 border border-[#F3C06B]/20 rounded p-4 text-xs font-sans focus:outline-none focus:border-[#F3C06B] transition-colors resize-y leading-relaxed"
                  />
                </div>

                {atsError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded text-xs flex gap-2 items-center">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{atsError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={atsLoading}
                  className="w-full bg-gradient-to-r from-[#B89047] to-[#F3C06B] hover:from-[#F3C06B] hover:to-[#B89047] text-[#07090E] text-xs font-black h-11 rounded hover:brightness-110 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {atsLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Performing Audit...
                    </>
                  ) : (
                    <>
                      <Cpu className="w-4 h-4" />
                      Scan ATS Score
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Output Results Column */}
            <div className="lg:col-span-7 bg-[#111625]/90 border border-[#F3C06B]/15 p-6 sm:p-8 rounded-2xl min-h-[500px] flex flex-col justify-center shadow-xl">
              
              {/* Idle Placeholder */}
              {!atsLoading && !critiqueResult && (
                <div className="text-center space-y-4 max-w-sm mx-auto">
                  <div className="bg-[#07090E] w-14 h-14 rounded-full flex items-center justify-center mx-auto border border-[#F3C06B]/25 shadow-md">
                    <Shield className="w-6 h-6 text-[#F3C06B]" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-white">Awaiting Resume Inputs</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    Once submitted, our parser algorithms evaluate metric-driven language, formatting compatibility, and core keyword weights to highlight critical ATS shortfalls.
                  </p>
                </div>
              )}

              {/* Loading State Animation */}
              {atsLoading && (
                <div className="text-center space-y-6 max-w-sm mx-auto">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-[#111625]" />
                    <div className="absolute inset-0 rounded-full border-2 border-t-[#F3C06B] animate-spin" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-mono text-stone-200 uppercase tracking-widest font-bold">Johnson's Career AI</h4>
                    <p className="text-xs text-[#F3C06B] font-mono font-bold animate-pulse">{loadingMessages[loadingStep]}</p>
                  </div>
                </div>
              )}

              {/* Complete Result Card */}
              {!atsLoading && critiqueResult && (
                <div className="space-y-6">
                  {/* Result Header & Score Gauge */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-[#F3C06B]/10 pb-5">
                    <div className="space-y-1.5 text-center sm:text-left">
                      <span className="text-[10px] font-mono uppercase text-[#F3C06B] tracking-widest font-extrabold">
                        Analysis Complete
                      </span>
                      <h4 className="text-xl font-serif font-black text-white tracking-tight">
                        Target Role: {targetRole}
                      </h4>
                    </div>
                    
                    {/* Score Circle */}
                    <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" className="stroke-[#07090E] fill-none" strokeWidth="8" />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          className="stroke-[#F3C06B] fill-none"
                          strokeWidth="8"
                          strokeDasharray={251.2}
                          strokeDashoffset={251.2 - (251.2 * critiqueResult.atsScore) / 100}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-2xl font-serif font-black text-white leading-none">
                          {critiqueResult.atsScore}
                        </span>
                        <span className="text-[8px] font-mono text-stone-300 uppercase tracking-wider mt-0.5 font-bold">
                          ATS Score
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Johnson Omeiza's Career Critique Summary */}
                  <div className="p-4 bg-[#07090E] rounded-xl border border-[#F3C06B]/25 space-y-2 shadow-md">
                    <span className="text-[9px] font-mono text-[#F3C06B] uppercase tracking-widest font-extrabold block">
                      Consultant's Diagnostic
                    </span>
                    <p className="text-xs text-stone-200 italic leading-relaxed font-serif">
                      "{critiqueResult.executiveSummary}"
                    </p>
                  </div>

                  {/* Key Findings List */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono uppercase text-[#F3C06B] tracking-wider font-bold">
                      Critical Audit Findings
                    </h5>
                    <ul className="grid sm:grid-cols-1 gap-3">
                      {critiqueResult.keyFindings.map((finding, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-stone-300 font-sans leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#F3C06B] shrink-0 mt-0.5" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suggested Keywords tags */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-mono uppercase text-[#F3C06B] tracking-wider font-bold flex items-center justify-between">
                      <span>Highly Recommended Keywords</span>
                      <span className="text-[9px] text-stone-400 lowercase normal-case italic font-normal">
                        click keyword to copy
                      </span>
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {critiqueResult.suggestedKeywords.map((kw, idx) => (
                        <button
                          key={idx}
                          onClick={() => copyToClipboard(kw)}
                          className="px-3 py-1.5 bg-[#07090E] hover:bg-[#F3C06B]/15 border border-[#F3C06B]/20 text-stone-200 hover:text-[#F3C06B] hover:border-[#F3C06B] rounded text-[10px] font-mono transition-colors flex items-center gap-1.5 font-bold shadow-md cursor-pointer"
                        >
                          {copiedKeyword === kw ? "Copied!" : kw}
                          <Copy className="w-3 h-3 text-stone-400" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Formatting visual tips */}
                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-mono uppercase text-[#F3C06B] tracking-wider font-bold">
                      formatting & parser adjustments
                    </h5>
                    <ul className="space-y-2">
                      {critiqueResult.formattingTips.map((tip, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-stone-300 font-sans italic">
                          <Eye className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center pt-4 border-t border-[#F3C06B]/10">
                    <p className="text-[10px] text-stone-400">
                      *Disclaimer: This is an AI-simulated parsability check matching PARWCC executive standards.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* TOOL 2: JOB SEARCH STRATEGY BUILDER */}
        {activeTab === "strategy" && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Input form */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#111625] to-[#0B0E17] border border-[#F3C06B]/25 p-6 sm:p-8 rounded-2xl space-y-6 shadow-2xl">
              <div className="space-y-1">
                <h3 className="text-lg font-serif font-black text-white tracking-tight flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#F3C06B]" />
                  Job Campaign Strategist
                </h3>
                <p className="text-xs text-stone-300">
                  Compile a 3-phase high-leverage outreach blueprint customized for your sector.
                </p>
              </div>

              <form onSubmit={handleGenerateStrategy} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#F3C06B] font-bold block">
                    Target Industry
                  </label>
                  <select
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value)}
                    className="w-full bg-[#07090E] text-stone-100 border border-[#F3C06B]/20 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#F3C06B] transition-colors"
                  >
                    <option value="Information Technology">Information Technology</option>
                    <option value="Healthcare & Biotech">Healthcare & Biotech</option>
                    <option value="Finance & Investment">Finance & Investment</option>
                    <option value="Engineering & Tech">Engineering & Tech</option>
                    <option value="Sales & Growth">Sales & Growth</option>
                    <option value="Marketing & Brand">Marketing & Brand</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Advanced Manufacturing">Advanced Manufacturing</option>
                    <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-[#F3C06B] font-bold block">
                    Target Job Title
                  </label>
                  <input
                    type="text"
                    required
                    value={strategyRole}
                    onChange={(e) => setStrategyRole(e.target.value)}
                    placeholder="e.g. Chief Financial Officer, VP of Marketing"
                    className="w-full bg-[#07090E] text-stone-100 border border-[#F3C06B]/20 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#F3C06B] transition-colors"
                  />
                </div>

                {strategyError && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded text-xs flex gap-2 items-center">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{strategyError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={strategyLoading}
                  className="w-full bg-gradient-to-r from-[#B89047] to-[#F3C06B] hover:from-[#F3C06B] hover:to-[#B89047] text-[#07090E] text-xs font-black h-11 rounded hover:brightness-110 transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {strategyLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Designing Roadmap...
                    </>
                  ) : (
                    <>
                      <Compass className="w-4 h-4" />
                      Build Custom Strategy
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Results output */}
            <div className="lg:col-span-7 bg-[#111625]/90 border border-[#F3C06B]/15 p-6 sm:p-8 rounded-2xl min-h-[500px] flex flex-col justify-center shadow-xl">
              
              {!strategyLoading && !strategyResult && (
                <div className="text-center space-y-4 max-w-sm mx-auto">
                  <div className="bg-[#07090E] w-14 h-14 rounded-full flex items-center justify-center mx-auto border border-[#F3C06B]/25 shadow-md">
                    <Compass className="w-6 h-6 text-[#F3C06B]" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-white">Campaign Timeline Builder</h4>
                  <p className="text-xs text-stone-300 leading-relaxed font-sans">
                    Constructs an actionable roadmap optimized to target hidden roles, direct networking thresholds, and negotiate salary baselines in your industry.
                  </p>
                </div>
              )}

              {strategyLoading && (
                <div className="text-center space-y-6 max-w-sm mx-auto">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-[#111625]" />
                    <div className="absolute inset-0 rounded-full border-2 border-t-[#F3C06B] animate-spin" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-mono text-stone-200 uppercase tracking-widest font-bold">Johnson's Campaign AI</h4>
                    <p className="text-xs text-[#F3C06B] font-mono font-bold animate-pulse">Assembling custom hidden-market target matrices...</p>
                  </div>
                </div>
              )}

              {!strategyLoading && strategyResult && (
                <div className="space-y-6">
                  <div className="border-b border-[#F3C06B]/10 pb-5">
                    <span className="text-[10px] font-mono uppercase text-[#F3C06B] tracking-widest font-extrabold">
                      Strategic Campaign Strategy
                    </span>
                    <h4 className="text-xl font-serif font-black text-white tracking-tight mt-1">
                      {strategyRole} &mdash; {targetIndustry}
                    </h4>
                  </div>

                  {/* Phases */}
                  <div className="space-y-6">
                    {strategyResult.phases.map((phase, idx) => (
                      <div key={idx} className="relative pl-6 border-l-2 border-[#F3C06B]/20 group">
                        {/* Bullet point indicator */}
                        <div className="absolute -left-[6px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#F3C06B] border-2 border-[#111625]" />
                        
                        <div className="space-y-2">
                          <h5 className="text-xs font-mono uppercase tracking-wider text-[#F3C06B] font-bold">
                            {phase.title}
                          </h5>
                          <ul className="space-y-2">
                            {phase.actionSteps.map((step, sIdx) => (
                              <li key={sIdx} className="flex gap-2 text-xs text-stone-300 font-sans leading-relaxed">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct tactical advice */}
                  <div className="p-4 bg-[#07090E] rounded-xl border border-[#F3C06B]/25 mt-6 shadow-md">
                    <span className="text-[10px] font-mono text-[#F3C06B] uppercase tracking-widest font-extrabold block mb-1">
                      Johnson Omeiza's Campaign Tip
                    </span>
                    <p className="text-xs text-stone-200 leading-relaxed italic font-serif">
                      "{strategyResult.tacticalTip}"
                    </p>
                  </div>

                  <div className="text-center pt-4 border-t border-[#F3C06B]/10">
                    <p className="text-[10px] text-stone-400">
                      *Note: Leverage this timeline checklist sequentially to secure competitive recruitment conversion values.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
