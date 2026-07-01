import React, { useState } from "react";
import { Mail, Phone, Linkedin, MessageSquare, Check, Sparkles, Send, Award, FileText, Video } from "lucide-react";

export default function Contact() {
  const [bookingStatus, setBookingStatus] = useState<"open" | "full">("open");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    currentRole: "",
    targetRole: "",
    serviceNeeded: "job-search-strategy",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormState({
      name: "",
      email: "",
      currentRole: "",
      targetRole: "",
      serviceNeeded: "job-search-strategy",
      message: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] text-stone-800 relative border-b border-[#C5A880]/30">
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-[#C5A880]/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#B89047] font-extrabold">
            Direct Connection
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold tracking-tight text-stone-900">
            Secure Your Executive Assessment
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Reach out directly or book your initial strategic consultation below. Your career breakthrough starts here.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Consultant Profile Details */}
            <div className="bg-white border border-[#C5A880]/25 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#B89047]/10 to-transparent rounded-bl-full" />
              
              <div className="space-y-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 tracking-tight">Johnson Omeiza</h3>
                    <p className="text-xs font-mono uppercase tracking-widest text-[#B89047] mt-1.5 font-bold">
                      Executive Career Consultant & Writer
                    </p>
                  </div>

                  {/* Micro Pulsating indicator */}
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0 border text-[9px] font-mono font-bold uppercase tracking-widest ${
                    bookingStatus === "open"
                      ? "bg-emerald-550/10 border-emerald-500/20 text-emerald-600"
                      : "bg-rose-550/10 border-rose-500/20 text-rose-600"
                  }`}>
                    <span className="relative flex h-1.5 w-1.5">
                      {bookingStatus === "open" ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </>
                      ) : (
                        <>
                          <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-50"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                        </>
                      )}
                    </span>
                    <span>{bookingStatus === "open" ? "Open" : "Full"}</span>
                  </div>
                </div>

                <div className="border-t border-stone-150 pt-6 space-y-4">
                  {/* Dedicated Email Section */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2.5 bg-[#FAF8F5] border border-stone-200/80 rounded-lg text-[#B89047] group-hover:bg-[#B89047]/10 transition-colors shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider block">
                        Dedicated Client Email
                      </span>
                      <a
                        href="mailto:johnsonomeiza.career.consultant@gmail.com"
                        className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#B89047] transition-colors break-all"
                      >
                        johnsonomeiza.career.consultant@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Microsoft Teams Meeting */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2.5 bg-[#FAF8F5] border border-stone-200/80 rounded-lg text-[#B89047] group-hover:bg-[#B89047]/10 transition-colors shrink-0">
                      <Video className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider block">
                        Microsoft Teams meeting
                      </span>
                      <a
                        href="https://teams.live.com/l/invite/FEANuHT8oj8fPWWIA?v=g1"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#B89047] transition-colors"
                      >
                        Join Johnson Omeiza on Teams
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Profile */}
                  <div className="flex items-start gap-3.5 group">
                    <div className="p-2.5 bg-[#FAF8F5] border border-stone-200/80 rounded-lg text-[#B89047] group-hover:bg-[#B89047]/10 transition-colors shrink-0">
                      <Linkedin className="w-4.5 h-4.5" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider block">
                        Professional Platform
                      </span>
                      <a
                        href="https://linkedin.com/in/johnson-omeiza"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs sm:text-sm font-semibold text-stone-900 hover:text-[#B89047] transition-colors"
                      >
                        linkedin.com/in/johnson-omeiza
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-150 pt-6">
                  <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider block mb-2">
                    Also Featured on Freelance Registries:
                  </span>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold uppercase">
                    <span className="px-3 py-1.5 bg-[#FAF8F5] border border-stone-200 rounded text-stone-500">
                      Upwork Professional
                    </span>
                    <span className="px-3 py-1.5 bg-[#FAF8F5] border border-stone-200 rounded text-stone-500">
                      Fiverr Pro Specialist
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Calendar Intake Status Widget */}
            <div className="bg-white border border-[#C5A880]/20 p-5 rounded-2xl space-y-3.5 shadow-md">
              <div className="flex justify-between items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider font-bold">
                  Live Strategy Intake Status
                </span>
                
                {/* Status Toggle buttons */}
                <div className="flex bg-[#FAF8F5] p-0.5 rounded-lg border border-stone-200 shrink-0">
                  <button
                    type="button"
                    onClick={() => setBookingStatus("open")}
                    className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                      bookingStatus === "open"
                        ? "bg-emerald-500/10 text-emerald-600 font-bold border border-emerald-500/20 shadow-inner"
                        : "text-stone-400 hover:text-stone-600"
                    }`}
                  >
                    Open
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingStatus("full")}
                    className={`px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded transition-all cursor-pointer ${
                      bookingStatus === "full"
                        ? "bg-rose-500/10 text-rose-600 font-bold border border-rose-500/20 shadow-inner"
                        : "text-stone-400 hover:text-stone-600"
                    }`}
                  >
                    Full
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-[#FAF8F5] p-3 rounded-xl border border-stone-150">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  {bookingStatus === "open" ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </>
                  ) : (
                    <>
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-50"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                    </>
                  )}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 tracking-tight">
                    {bookingStatus === "open" ? "Intakes Currently Active" : "Cohort Fully Booked"}
                  </h4>
                  <p className="text-[10px] text-stone-500 mt-0.5 leading-relaxed font-sans">
                    {bookingStatus === "open"
                      ? "Direct calendar bookings are active for premium packages this week. Only 3 slots remain."
                      : "The current project cohort is at maximum capacity. Submitting a request registers you on the high-priority waitlist."}
                  </p>
                </div>
              </div>
            </div>

            {/* Micro value badge */}
            <div className="p-5 bg-white rounded-2xl border border-[#C5A880]/20 flex gap-4 items-center shadow-sm">
              <Award className="w-10 h-10 text-[#B89047] shrink-0" />
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#B89047] font-bold">100% Satisfaction</h4>
                <p className="text-[10px] text-stone-500 leading-relaxed mt-0.5">
                  I stand behind the quality of my writing. Revisions are continuous until your target metrics are achieved.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Interactive Form Column */}
          <div className="lg:col-span-7 bg-white border border-[#C5A880]/20 p-6 sm:p-8 rounded-2xl min-h-[460px] flex flex-col justify-center shadow-lg">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. David Alao"
                      className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#B89047]/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. d.alao@email.com"
                      className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#B89047]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                      Current Role
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.currentRole}
                      onChange={(e) => setFormState({ ...formState, currentRole: e.target.value })}
                      placeholder="e.g. Director of Finance"
                      className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#B89047]/60 transition-colors"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                      Target Role / Goal
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.targetRole}
                      onChange={(e) => setFormState({ ...formState, targetRole: e.target.value })}
                      placeholder="e.g. CFO / Board Seat"
                      className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#B89047]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                    Service of Interest
                  </label>
                  <select
                    value={formState.serviceNeeded}
                    onChange={(e) => setFormState({ ...formState, serviceNeeded: e.target.value })}
                    className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded px-4 h-11 text-xs focus:outline-none focus:border-[#B89047]/60 transition-colors"
                  >
                    <option value="job-search-strategy">Job Search Strategy (Highly Requested)</option>
                    <option value="ats-resume">ATS Resume Writing</option>
                    <option value="exec-resume">Executive Resume Writing</option>
                    <option value="linkedin">LinkedIn Optimization</option>
                    <option value="coaching">1-on-1 Career Coaching</option>
                    <option value="full-package">Executive Brand Campaign Package (All Assets)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
                    Career Goals & Past Accomplishments
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly tell me about your career goals or specific challenges..."
                    className="w-full bg-[#FAF8F5] text-stone-900 border border-stone-200 rounded p-4 text-xs font-sans focus:outline-none focus:border-[#B89047]/60 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1A1D24] text-white hover:bg-[#2D313A] text-xs font-bold h-11 rounded transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer animate-none"
                >
                  {loading ? (
                    <>
                      <FileText className="w-4 h-4 animate-spin" />
                      Submitting Proposal...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Book Strategy Intake
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* Success message card */
              <div className="text-center space-y-6 max-w-md mx-auto p-4">
                <div className="w-16 h-16 bg-[#B89047]/15 border border-[#B89047]/40 rounded-full flex items-center justify-center mx-auto text-[#B89047]">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-serif font-bold text-stone-900 tracking-tight">Booking Request Logged!</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-sans">
                    Thank you, <strong className="text-stone-900 font-bold">{formState.name}</strong>. Your executive strategic briefing dossier has been securely compiled. 
                  </p>
                  <p className="text-xs text-[#B89047] font-sans font-bold">
                    Johnson Omeiza will coordinate a calendar link or respond directly to <strong className="text-stone-900 font-extrabold">{formState.email}</strong> within 12 business hours.
                  </p>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-[#1A1D24] hover:bg-[#2D313A] text-white rounded text-xs font-mono transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
