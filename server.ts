import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini API Client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== "MY_GEMINI_API_KEY" && key.trim() !== "") {
      try {
        aiClient = new GoogleGenAI({
          apiKey: key,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build",
            },
          },
        });
        console.log("Successfully initialized Gemini Client");
      } catch (err) {
        console.error("Failed to initialize Gemini Client, falling back to mock data:", err);
        aiClient = null;
      }
    } else {
      console.warn("GEMINI_API_KEY not configured or has placeholder value. Using simulated executive advisor responses.");
    }
  }
  return aiClient;
}

// Endpoint 1: ATS Resume Critic
app.post("/api/analyze-resume", async (req, res) => {
  const { resumeText, targetRole } = req.body;

  if (!resumeText || !targetRole) {
    return res.status(400).json({ error: "Missing resumeText or targetRole parameter." });
  }

  const ai = getGeminiClient();

  if (ai) {
    try {
      console.log(`Analyzing resume for role: ${targetRole} via Gemini...`);
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Analyze the following resume text for a candidate targeting the role of "${targetRole}". Provide a rigorous ATS assessment.
        
        Resume Text:
        """
        ${resumeText}
        """
        
        Format your response strictly as a JSON object matching this schema:
        {
          "atsScore": number (between 40 and 100),
          "keyFindings": string[] (3-4 points evaluating impact-driven language, metrics, and achievements),
          "formattingTips": string[] (2-3 concrete tips on visual formatting, bullet point structure),
          "suggestedKeywords": string[] (5-6 specific industry keywords or technical terms missing or needed),
          "executiveSummary": string (3-sentence summary of overall career branding strategy as Johnson Omeiza)
        }`,
        config: {
          responseMimeType: "application/json",
          systemInstruction: "You are Johnson Omeiza, an elite certified executive career writer and professional resume optimization specialist. Be highly insightful, professional, and encouraging."
        }
      });

      const responseText = response.text;
      if (responseText) {
        try {
          const parsedResult = JSON.parse(responseText);
          return res.json(parsedResult);
        } catch (parseErr) {
          console.error("JSON parsing of Gemini response failed:", parseErr, "Response text was:", responseText);
        }
      }
    } catch (apiErr) {
      console.error("Gemini API call failed, falling back to rich simulation:", apiErr);
    }
  }

  // Graceful High-Fidelity Simulation Fallback (in case of missing API Key or API error)
  console.log("Generating high-fidelity simulated critique...");
  const simulatedScore = Math.floor(Math.random() * 15) + 72; // 72 to 86
  const responseMock = {
    atsScore: simulatedScore,
    keyFindings: [
      `Your resume showcases direct expertise in the ${targetRole} domain, but lacks quantitative metrics to prove business scale.`,
      "The summary section contains some passive language (e.g., 'responsible for') rather than active verb structures.",
      "Bullet points under professional experience could be optimized using the STAR method (Situation, Task, Action, Result)."
    ],
    formattingTips: [
      "Remove double columns or text boxes to guarantee full parsability in legacy ATS systems.",
      "Ensure all date ranges follow a uniform format, such as 'MM/YYYY - MM/YYYY' or 'Month YYYY - Present'."
    ],
    suggestedKeywords: [
      "Process Optimization",
      "Strategic Roadmap Alignment",
      "Key Performance Indicators (KPIs)",
      "Cross-Functional Leadership",
      "Stakeholder Management"
    ],
    executiveSummary: `Hello, I'm Johnson Omeiza. Your profile shows solid foundational experience for a target role as a ${targetRole}, but we need to elevate your value narrative. By infusing high-impact metrics and re-anchoring your bullet points to emphasize business scale, we can easily increase your conversion rates with global recruiters.`
  };

  return res.json(responseMock);
});

// Endpoint 2: Custom Job Search Strategy Builder
app.post("/api/generate-strategy", async (req, res) => {
  const { targetRole, targetIndustry } = req.body;

  if (!targetRole || !targetIndustry) {
    return res.status(400).json({ error: "Missing targetRole or targetIndustry parameter." });
  }

  const ai = getGeminiClient();

  if (ai) {
    try {
      console.log(`Generating job search strategy for ${targetRole} in ${targetIndustry} via Gemini...`);
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `Build a highly tactical, custom job search strategy campaign timeline for an executive targeting a "${targetRole}" role in the "${targetIndustry}" sector.
        
        Format your response strictly as a JSON object matching this schema:
        {
          "phases": [
            {
              "title": "Phase 1: Brand & Asset Positioning",
              "actionSteps": string[] (3 concrete action items)
            },
            {
              "title": "Phase 2: Hidden Market Penetration",
              "actionSteps": string[] (3 concrete action items)
            },
            {
              "title": "Phase 3: Interview & Offer Matrix",
              "actionSteps": string[] (3 concrete action items)
            }
          ],
          "tacticalTip": string (1 premium high-impact advice on networking or interview prep from Johnson Omeiza)
        }`,
        config: {
          responseMimeType: "application/json",
          systemInstruction: "You are Johnson Omeiza, an elite career architect who helps candidates secure high-paying placements. Focus on active, high-leverage outreach rather than passive applications."
        }
      });

      const responseText = response.text;
      if (responseText) {
        try {
          const parsedResult = JSON.parse(responseText);
          return res.json(parsedResult);
        } catch (parseErr) {
          console.error("JSON parsing of Gemini strategy response failed:", parseErr, "Response text was:", responseText);
        }
      }
    } catch (apiErr) {
      console.error("Gemini API strategy call failed, falling back to rich simulation:", apiErr);
    }
  }

  // Simulated Fallback for strategy
  const fallbackStrategy = {
    phases: [
      {
        title: "Phase 1: Narrative Calibration & Asset Design",
        actionSteps: [
          `Audit current executive credentials against modern ${targetIndustry} competitor matrices.`,
          "Restructure resume into a single-column, metric-driven layout highlighting quantifiable dollar-scale or percentage improvements.",
          "Inject critical search keywords into your LinkedIn profile headline, about section, and experience sections to rank for recruiter outbound queries."
        ]
      },
      {
        title: "Phase 2: Hidden Market Access & Direct Outreach",
        actionSteps: [
          `Identify 15 target organizations in the ${targetIndustry} space that fit your criteria, and map out their department heads.`,
          "Initiate values-focused networking outreach to directors and VP leaders, bypassing HR entirely to build rapport.",
          "Curate professional, insights-driven commentary on LinkedIn to position yourself as an active leader in the field."
        ]
      },
      {
        title: "Phase 3: STAR Preparation & Negotiation Calibration",
        actionSteps: [
          "Format your top 6 professional achievements into highly structured STAR stories (Situation, Task, Action, Result).",
          "Practice articulating your unique value proposition to address pain-points typical for the target company.",
          "Establish high-caliber salary negotiation parameters to preserve your true market value."
        ]
      }
    ],
    tacticalTip: `Always remember: Over 80% of executive-level openings are in the 'hidden job market' and never advertised. Networking and positioning yourself directly to decision-makers is your highest-leverage job search tactic.`
  };

  return res.json(fallbackStrategy);
});

// Vite & Static Asset Handling Middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
