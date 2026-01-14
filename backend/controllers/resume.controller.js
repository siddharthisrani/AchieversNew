const ResumeLead = require("../models/ResumeLead");
const { extractText, extractDetails } = require("../utils/parseResume");

exports.submitResume = async (req, res) => {
  try {
    // ✅ Validate file upload
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: "Resume file is required" 
      });
    }

    console.log("📄 Processing resume:", req.file.originalname);

    // ✅ Extract text from resume
    const text = await extractText(req.file.path);
    
    if (!text || text.trim().length < 50) {
      return res.status(400).json({
        success: false,
        message: "Could not extract text from resume. Please upload a valid PDF or DOCX file."
      });
    }

    // ✅ Extract contact details (name, email, phone)
    const details = extractDetails(text);
    
    console.log("✅ Extracted details:", details);

    // ✅ Parse score safely
    const safeScore = Number.isFinite(Number(req.body.score))
      ? Math.min(Math.max(Number(req.body.score), 0), 100)
      : 0;

    // ✅ Parse missing sections and courses
    const missing = req.body.missing 
      ? (typeof req.body.missing === 'string' ? JSON.parse(req.body.missing) : req.body.missing)
      : [];
    
    const courses = req.body.courses 
      ? (typeof req.body.courses === 'string' ? JSON.parse(req.body.courses) : req.body.courses)
      : [];

    // ✅ Save to MongoDB
    const resume = await ResumeLead.create({
      name: details.name,
      email: details.email,
      phone: details.phone,
      
      resumePath: req.file.path,
      resumeSizeKB: Math.round(req.file.size / 1024),
      originalFileName: req.file.originalname,
      
      score: safeScore,
      missing: missing,
      recommendedCourses: courses
    });

    console.log("💾 Saved to MongoDB:", resume._id);

    // ✅ Send success response
    res.json({
      success: true,
      message: "Resume analyzed successfully",
      data: {
        id: resume._id,
        name: resume.name,
        email: resume.email,
        phone: resume.phone,
        score: resume.score
      }
    });

  } catch (err) {
    console.error("❌ Resume submission error:", err);

    res.status(500).json({ 
      success: false,
      message: "Server error while processing resume"
    });
  }
};