import { ServiceItem, FeatureItem, ProcessStep, Testimonial, PortfolioSample, FAQItem, IndustryItem, SkillItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "job-search-strategy",
    title: "Job Search Strategy",
    description: "A tailored blueprint featuring targeted outreach techniques, hidden market access, and advanced navigation strategies to accelerate your placement rate.",
    iconName: "Compass"
  },
  {
    id: "ats-resume-writing",
    title: "ATS Resume Writing",
    description: "Engineering high-impact, keyword-dense resumes tailored specifically to breeze through modern Applicant Tracking Systems.",
    iconName: "FileCheck"
  },
  {
    id: "executive-resume-writing",
    title: "Executive Resume Writing",
    description: "High-caliber, elite branding documents written specifically for Director, VP, and C-Suite leaders to capture major achievements.",
    iconName: "Briefcase"
  },
  {
    id: "cv-writing",
    title: "Academic & Medical CVs",
    description: "Comprehensive Curricula Vitae highlighting publications, research, clinical achievements, and academic excellence.",
    iconName: "Award"
  },
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    description: "SEO-charged LinkedIn profiles written to turn passive recruiter views into active outbound inquiries and networking leads.",
    iconName: "Linkedin"
  },
  {
    id: "cover-letter-writing",
    title: "Cover Letter Writing",
    description: "Persuasive narrative letters connecting your past impact directly with the target employer's most burning problems.",
    iconName: "FileText"
  },
  {
    id: "executive-biography",
    title: "Executive Biography",
    description: "A sophisticated one-page career story designed for board submissions, speaking engagements, and press kits.",
    iconName: "UserCheck"
  },
  {
    id: "career-coaching",
    title: "Career Coaching",
    description: "One-on-one professional strategic guidance focused on identifying career path blockages, mindset shifts, and negotiation tips.",
    iconName: "Target"
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    description: "Interactive mock interviews, behavior-response framing (STAR method), and customized strategic scripts to build executive confidence.",
    iconName: "MessageSquare"
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    description: "Cohesive multi-platform career narrative development establishing you as a thought leader and domain expert in your niche.",
    iconName: "Sparkles"
  },
  {
    id: "federal-resume",
    title: "Federal Resume Writing",
    description: "Highly detailed resumes compliant with strict USAJOBS standards, highlighting exact GS series competencies.",
    iconName: "Shield"
  },
  {
    id: "graduate-resume",
    title: "Graduate Resume Writing",
    description: "Transitioning classroom projects, academic honors, and internships into highly marketable career assets for early-career professionals.",
    iconName: "GraduationCap"
  },
  {
    id: "resume-review",
    title: "Expert Resume Review",
    description: "A forensic analysis of your current resume's readability, visual hierarchy, keywords, and structural shortfalls.",
    iconName: "Search"
  },
  {
    id: "resume-refresh",
    title: "Resume Refresh",
    description: "Updating your existing resume with your latest role and accomplishments while modernizing the layout and formatting.",
    iconName: "RefreshCw"
  },
  {
    id: "thank-you-letter",
    title: "Thank-You & Follow-Up Strategy",
    description: "Post-interview follow-up letters crafted to reinforce value, handle latent objections, and leave a lasting impression.",
    iconName: "Heart"
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: "ats-optimized",
    title: "ATS-Engineered Layouts",
    description: "No text-boxes, multi-columns, or complex graphics that confuse ATS parsers. 100% clean, parsable styling.",
    iconName: "Cpu"
  },
  {
    id: "recruiter-standards",
    title: "HR & Recruiter Certified",
    description: "Documents constructed to excel in the critical 6-second initial human scan while highlighting core impact.",
    iconName: "Eye"
  },
  {
    id: "industry-specific",
    title: "Industry-Specific Alignment",
    description: "Using the precise jargon, metrics, and indicators relevant to your distinct target sector.",
    iconName: "TrendingUp"
  },
  {
    id: "keyword-opt",
    title: "SEO Keyword Targeting",
    description: "Deep keyword analysis matching your files with real recruiter queries and active job descriptions.",
    iconName: "SearchCode"
  },
  {
    id: "personalized",
    title: "1-on-1 Personalized Service",
    description: "No generic questionnaires or automated template mills. Real executive-level focus on your custom career story.",
    iconName: "User"
  },
  {
    id: "fast-delivery",
    title: "Guaranteed Fast Turnaround",
    description: "Prompt delivery schedules keeping your active applications moving without missing a single closing date.",
    iconName: "Zap"
  },
  {
    id: "revisions",
    title: "Unlimited Iterative Revisions",
    description: "A collaborative review partnership until you are 100% confident and satisfied with the final copy.",
    iconName: "CheckCircle"
  },
  {
    id: "global-clients",
    title: "Global Client Expertise",
    description: "Successfully helping candidates in the US, Europe, Middle East, Asia, and Africa navigate global job markets.",
    iconName: "Globe"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Strategic Consultation",
    description: "We dive deep into your target roles, career blockers, and professional trajectory during a 1-on-1 strategy call."
  },
  {
    step: 2,
    title: "Information Gathering",
    description: "Secure and frictionless collection of your past histories, target job listings, and key project narratives."
  },
  {
    step: 3,
    title: "Career & Competency Analysis",
    description: "We audit your target market requirements to isolate specific skills and performance metrics that recruit managers demand."
  },
  {
    step: 4,
    title: "Premium Resume Writing",
    description: "Crafting a bespoke, executive-level resume designed to focus purely on business value, major achievements, and scale."
  },
  {
    step: 5,
    title: "ATS Optimization & Testing",
    description: "Subjecting the draft resume through leading Applicant Tracking System simulators to guarantee a top-tier keyword match."
  },
  {
    step: 6,
    title: "Collaborative Client Review",
    description: "We present the initial deliverables and engage in precise, collaborative editing to polish the phrasing to absolute perfection."
  },
  {
    step: 7,
    title: "Final Package Delivery",
    description: "We supply your completed executive resume, clean cover letter, and optimized LinkedIn content in fully editable and PDF formats."
  },
  {
    step: 8,
    title: "Ongoing Job Search Support",
    description: "Providing follow-up guidance, hidden job-market strategy tips, and negotiation resources as you launch your campaign."
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { name: "Information Technology", iconName: "Laptop" },
  { name: "Healthcare & Biotech", iconName: "Activity" },
  { name: "Finance & Investment", iconName: "BarChart" },
  { name: "Engineering & Tech", iconName: "Cpu" },
  { name: "Sales & Account Management", iconName: "TrendingUp" },
  { name: "Marketing & Growth", iconName: "Megaphone" },
  { name: "Human Resources", iconName: "Users" },
  { name: "Construction & Infrastructure", iconName: "Hammer" },
  { name: "Advanced Manufacturing", iconName: "Settings" },
  { name: "Government & Defense", iconName: "ShieldCheck" },
  { name: "Education & Academia", iconName: "GraduationCap" },
  { name: "Oil, Gas & Energy", iconName: "Flame" },
  { name: "Logistics & Supply Chain", iconName: "Truck" },
  { name: "Hospitality & Leisure", iconName: "Map" },
  { name: "Aviation & Aerospace", iconName: "Plane" },
  { name: "Customer Experience", iconName: "Headphones" },
  { name: "Retail & E-commerce", iconName: "ShoppingBag" },
  { name: "Telecommunications", iconName: "Radio" }
];

export const SKILLS: SkillItem[] = [
  { name: "Resume & CV Writing", level: 98, category: "Writing" },
  { name: "ATS Parser Optimization", level: 96, category: "Tech" },
  { name: "Executive Personal Branding", level: 95, category: "Strategy" },
  { name: "LinkedIn SEO & Profile Design", level: 97, category: "Tech" },
  { name: "Job Search Strategy & Hidden Market", level: 99, category: "Strategy" },
  { name: "SEO Keyword Research & Modeling", level: 94, category: "Tech" },
  { name: "Interview Response Matrix (STAR)", level: 93, category: "Coaching" },
  { name: "Salary Negotiation Coaching", level: 91, category: "Coaching" },
  { name: "Narrative Content Architecture", level: 95, category: "Writing" },
  { name: "Executive Biography Writing", level: 94, category: "Writing" },
  { name: "Federal USAJOBS Compliance", level: 90, category: "Tech" },
  { name: "Proofreading & Editing", level: 99, category: "Writing" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Senior Director of Engineering",
    company: "Vanguard Tech Partners",
    feedback: "Johnson completely transformed my static resume. Within two weeks of uploading my newly optimized resume and LinkedIn profile, I was contacted by three Tier-1 recruiters. Ultimately secured an offer that was 35% higher than my previous salary!",
    rating: 5,
    avatarLetter: "S"
  },
  {
    id: "test-2",
    name: "David Alao",
    role: "Chief Financial Officer",
    company: "Apex Global Capital",
    feedback: "The hidden market job search strategy session was a masterclass. Johnson didn't just give me a document; he gave me a tactical outreach framework. His executive resume write-up perfectly captured the scale of the multi-million dollar portfolios I managed.",
    rating: 5,
    avatarLetter: "D"
  },
  {
    id: "test-3",
    name: "Marcus Thorne",
    role: "Global Head of HR",
    company: "Prism Group International",
    feedback: "As an HR leader, I have very strict standards for resumes. Johnson's writing surpassed them all. His ATS optimization strategy is flawlessly aligned with modern corporate recruitment practices. I highly recommend him to any leader aiming for the C-Suite.",
    rating: 5,
    avatarLetter: "M"
  },
  {
    id: "test-4",
    name: "Dr. Elena Rostova",
    role: "Vice President of Clinical Affairs",
    company: "OmniHealth Diagnostics",
    feedback: "My previous academic CV was 12 pages of dry text. Johnson compiled it into a highly elegant, impact-focused CV and executive biography. His interview prep built absolute confidence for my board panel presentation.",
    rating: 5,
    avatarLetter: "E"
  },
  {
    id: "test-5",
    name: "Liam O'Connor",
    role: "Lead Software Architect",
    company: "NextGen Software Corp",
    feedback: "An absolute professional. His attention to detail, keyword optimization, and turn-around time are unmatched. The interview prep strategies he coached me on helped me structure STAR responses that blew the hiring managers away.",
    rating: 5,
    avatarLetter: "L"
  }
];

export const PORTFOLIO_SAMPLES: PortfolioSample[] = [
  {
    id: "modern-resume",
    title: "Senior Product Manager",
    category: "Modern Resume",
    description: "Highly focused, metric-driven modern resume showing a rapid path from technical contributor to product lead.",
    tags: ["Product Management", "SaaS", "ATS-Friendly"],
    content: `
      <div class="p-6 font-sans text-slate-800 bg-white shadow-lg border border-slate-200 text-xs leading-relaxed max-w-4xl mx-auto rounded">
        <!-- HEADER -->
        <div class="text-center border-b pb-4 mb-4">
          <h1 class="text-xl font-bold tracking-tight text-slate-900 uppercase">Alex Mercer, PMP</h1>
          <p class="text-[10px] text-slate-500 mt-1">San Francisco, CA | (555) 019-2834 | alex.mercer@email.com | linkedin.com/in/alex-mercer-pm</p>
          <p class="text-[11px] font-semibold text-amber-600 tracking-wider uppercase mt-2">Senior Product Manager — SaaS & AI Products</p>
        </div>

        <!-- PROFILE SUMMARY -->
        <div class="mb-4">
          <h2 class="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Summary</h2>
          <p class="text-slate-600">Dynamic and outcomes-driven Senior Product Manager with 8+ years of experience leading cross-functional teams to design, launch, and scale high-growth Enterprise B2B SaaS and machine-learning platforms. Adept at driving product lifecycle strategy from zero-to-one, aligning roadmap initiatives with corporate growth targets, and optimizing API integrations. Spearheaded digital transformations that increased active user retention by 42% and added $14M in recurring revenue.</p>
        </div>

        <!-- CORE COMPETENCIES -->
        <div class="mb-4">
          <h2 class="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Core Competencies</h2>
          <div class="grid grid-cols-3 gap-y-1 gap-x-2 text-slate-600 font-medium">
            <div>• Product Lifecycle (PLG)</div>
            <div>• Technical API Architecture</div>
            <div>• User Journey Mapping</div>
            <div>• ATS-Compliant Metrics</div>
            <div>• Agile/Scrum Leadership</div>
            <div>• Predictive Analytics Models</div>
            <div>• Competitive SEO Intelligence</div>
            <div>• Multi-million Budget Management</div>
            <div>• C-Suite Executive Advisory</div>
          </div>
        </div>

        <!-- PROFESSIONAL EXPERIENCE -->
        <div>
          <h2 class="text-[11px] font-bold text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-2">Professional Experience</h2>
          
          <div class="mb-3">
            <div class="flex justify-between font-bold text-slate-900">
              <span>SENIOR PRODUCT MANAGER | CloudFlow Systems</span>
              <span>2022 - Present</span>
            </div>
            <p class="italic text-slate-500 text-[10px] mb-1">Leading AI-driven analytics workflows for over 1.2M enterprise clients globally.</p>
            <ul class="list-disc pl-4 space-y-1 text-slate-600">
              <li>Engineered and deployed a custom predictive analytics suite, boosting customer onboarding velocities by <strong class="text-slate-900">34%</strong>.</li>
              <li>Directed global team of 18 engineers and 3 designers, releasing 14 feature updates with zero system disruption.</li>
              <li>Utilized structured user testing matrices to optimize high-volume conversions, adding <strong class="text-slate-900">$4.2M ARR</strong>.</li>
            </ul>
          </div>

          <div>
            <div class="flex justify-between font-bold text-slate-900">
              <span>PRODUCT MANAGER | DevSprint Solutions</span>
              <span>2018 - 2022</span>
            </div>
            <p class="italic text-slate-500 text-[10px] mb-1">Mid-sized agile agency delivering bespoke workflow software systems.</p>
            <ul class="list-disc pl-4 space-y-1 text-slate-600">
              <li>Successfully managed lifecycle strategy of 3 core products, increasing quarterly retention coefficients by <strong class="text-slate-900">18.5%</strong>.</li>
              <li>Collaborated with customer success to isolate product bugs, slashing support tickets by <strong class="text-slate-900">30%</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "executive-resume",
    title: "Chief Executive Officer (CEO)",
    category: "Executive Resume",
    description: "Gold-standard executive resume designed for board presentations, focusing on market growth, fiscal stewardship, and M&A.",
    tags: ["C-Suite", "Board Advisory", "M&A Strategy"],
    content: `
      <div class="p-6 font-serif text-slate-800 bg-white shadow-lg border border-slate-200 text-xs leading-relaxed max-w-4xl mx-auto rounded">
        <!-- HEADER -->
        <div class="text-center border-b-2 border-slate-900 pb-4 mb-4">
          <h1 class="text-2xl font-bold tracking-tight text-slate-900 uppercase">Victoria Sterling, MBA</h1>
          <p class="text-[10px] text-slate-500 font-sans mt-1">Chicago, IL | (555) 432-1098 | v.sterling@email.com | linkedin.com/in/victoria-sterling-ceo</p>
          <p class="text-xs font-semibold text-amber-600 tracking-widest uppercase mt-2">Chief Executive Officer — Global Operations & Turnarounds</p>
        </div>

        <!-- PROFILE -->
        <div class="mb-4">
          <h2 class="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Vision</h2>
          <p class="text-slate-600">Distinguished Chief Executive Officer with 20+ years of high-stakes leadership driving exponential revenue expansion, mergers and acquisitions (M&A), and large-scale digital turnarounds within competitive global markets. Recognized for turning around stagnating multi-million dollar portfolios, deploying enterprise efficiency methodologies, and building high-performance executive cultures that drive shareholder value.</p>
        </div>

        <!-- BOARD OF DIRECTORS VALUE MATRICES -->
        <div class="mb-4">
          <h2 class="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-1.5">Executive Accomplishment Highlights</h2>
          <div class="grid grid-cols-2 gap-3">
            <div class="p-2 bg-slate-50 border-l-2 border-amber-500">
              <div class="text-sm font-bold text-slate-900">$240M M&A Portfolio</div>
              <p class="text-[10px] text-slate-600 mt-0.5">Directed 4 global corporate mergers, achieving full technological integration inside 90 days.</p>
            </div>
            <div class="p-2 bg-slate-50 border-l-2 border-amber-500">
              <div class="text-sm font-bold text-slate-900">42% Cost Containment</div>
              <p class="text-[10px] text-slate-600 mt-0.5">Optimized global logistics supply chain systems, generating annual savings of $18M.</p>
            </div>
          </div>
        </div>

        <!-- EXP -->
        <div>
          <h2 class="text-[11px] font-bold font-sans text-slate-900 border-b pb-0.5 uppercase tracking-wider mb-2">Selected Career History</h2>
          
          <div class="mb-3">
            <div class="flex justify-between font-bold text-slate-900 font-sans">
              <span>CHIEF EXECUTIVE OFFICER | Apex Global Holdings</span>
              <span>2019 - Present</span>
            </div>
            <p class="italic text-slate-500 text-[10px] mb-1">Global logistics leader with $540M in operating capital and 3,500+ staff.</p>
            <ul class="list-disc pl-4 space-y-1 text-slate-600">
              <li>Secured <strong class="text-slate-900">112% year-over-year revenue escalation</strong> across 3 regional branches.</li>
              <li>Spearheaded a modernization roadmap that integrated predictive IoT diagnostics, improving transit uptime to <strong class="text-slate-900">99.8%</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "cover-letter",
    title: "Executive Director Cover Letter",
    category: "Cover Letter",
    description: "Highly persuasive cover letter designed to establish instant value connection with Board search committees.",
    tags: ["Cover Letter", "Executive Pitch", "Storytelling"],
    content: `
      <div class="p-6 font-sans text-slate-800 bg-white shadow-lg border border-slate-200 text-xs leading-relaxed max-w-4xl mx-auto rounded">
        <div class="mb-4">
          <p class="font-bold">Victoria Sterling, MBA</p>
          <p class="text-slate-500">Chicago, IL | v.sterling@email.com</p>
        </div>
        <p class="mb-4">July 1, 2026</p>
        <p class="mb-4"><strong>Attn: Executive Search Committee</strong><br>Apex Global Capital</p>
        <p class="mb-3 font-bold">RE: Chief Executive Officer Position (Ref: #CEO-2026)</p>
        <p class="mb-3">Dear Members of the Board,</p>
        <p class="mb-3">I have spent the last two decades leading large-scale corporate turnarounds and driving organic revenue expansion in highly saturated global markets. When reviewing Apex Global Capital's strategic vision for 2027, I was excited to see a distinct focus on supply chain digitization and aggressive M&A—challenges that precisely align with my core execution strengths.</p>
        <p class="mb-3">In my most recent role as CEO of Apex Global Holdings, I took over a stagnating enterprise and transformed it into a highly profitable sector leader inside 18 months. By integrating predictive IoT logistics networks and restructuring underperforming assets, my team achieved a <strong>112% YoY revenue growth</strong> and cut overhead waste by <strong>42% ($18M in savings)</strong>.</p>
        <p class="mb-3">I would welcome the opportunity to discuss how I can bring this same standard of high-impact leadership to help Apex Global Capital secure its next chapter of expansion.</p>
        <p class="mb-4">Sincerely,<br><br><strong>Victoria Sterling, MBA</strong></p>
      </div>
    `
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is an ATS (Applicant Tracking System), and why does it matter?",
    answer: "An Applicant Tracking System is a software program used by 99% of Fortune 500 companies to parse, scan, filter, and score resumes before a human recruiter ever sees them. If your resume lacks the exact keyword structures, proper headings, and clean layout patterns, it will likely be automatically filtered out regardless of your qualifications. Our resumes are meticulously engineered to score 95%+ in ATS algorithms."
  },
  {
    id: "faq-2",
    question: "What is your typical turnaround time for resume packages?",
    answer: "Our standard turnaround time is 5 to 7 business days from the moment we receive your filled questionnaire and past history during the gathering phase. If you require urgent delivery, we offer an expedited 24-48 hour turnaround service for an additional priority fee."
  },
  {
    id: "faq-3",
    question: "Do you offer unlimited revisions?",
    answer: "Yes, absolutely! We establish a collaborative partnership. We provide 30 days of unlimited iterative revisions from the date you receive your initial draft. We will work closely with you until your executive resume, CV, or LinkedIn bio matches your precise satisfaction and voice."
  },
  {
    id: "faq-4",
    question: "What makes your 'Job Search Strategy' service different?",
    answer: "Unlike typical resume writers who just hand you a document, we design a complete career campaign. We teach you how to access the 'hidden job market'—the 80% of executive jobs that are never publicly advertised. You get a direct plan for networking outreach, recruiter mapping, and automated application tracking."
  },
  {
    id: "faq-5",
    question: "How does the LinkedIn Profile Optimization process work?",
    answer: "Recruiters use a special search tool called LinkedIn Recruiter. We rewrite your Profile Header, About/Summary, and Experience sections with precise SEO keywords, making sure you rank at the absolute top of their search results for your skills and target job titles. We also supply an optimized background image template and tips to boost your social reach."
  }
];
