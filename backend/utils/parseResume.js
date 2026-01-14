const fs = require("fs");
const pdfParse = require("pdf-parse");

/**
 * ✅ Extract raw text from PDF resume
 */
exports.extractText = async (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const data = await (pdfParse.default ? pdfParse.default(buffer) : pdfParse(buffer));
    return data.text;
  } catch (err) {
    console.error("❌ Text extraction error:", err);
    return "";
  }
};

/**
 * ✅ Extract name, email, and phone using regex
 */
exports.extractDetails = (text) => {
  if (!text || text.trim().length === 0) {
    return {
      name: "Not Found",
      email: "Not Found",
      phone: "Not Found"
    };
  }

  // ✅ EMAIL EXTRACTION
  const emailMatch = text.match(
    /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/
  );

  // ✅ PHONE EXTRACTION (Indian format + international)
  const phonePatterns = [
    /(\+91[\s-]?)?[6-9]\d{9}\b/, // Indian: +91 9876543210 or 9876543210
    /\+?\d{1,3}[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}/ // International
  ];
  
  let phoneMatch = null;
  for (let pattern of phonePatterns) {
    phoneMatch = text.match(pattern);
    if (phoneMatch) break;
  }

  // ✅ NAME EXTRACTION
  const lines = text
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean);

  let name = "Not Found";
  
  // Look for name in first 5 lines
  for (let line of lines.slice(0, 5)) {
    // Skip if line contains email or phone
    if (line.includes('@') || /\d{10}/.test(line)) continue;
    
    // Check for typical name pattern: FirstName LastName
    if (/^[A-Z][a-z]+(\s[A-Z][a-z]+)+$/.test(line.trim())) {
      name = line.trim();
      break;
    }
    
    // Check for all caps name: JOHN DOE
    if (/^[A-Z\s]{5,50}$/.test(line.trim()) && line.trim().split(' ').length >= 2) {
      name = line.trim()
        .split(' ')
        .map(word => word.charAt(0) + word.slice(1).toLowerCase())
        .join(' ');
      break;
    }
  }

  // If still not found, take first non-empty line
  if (name === "Not Found" && lines.length > 0) {
    const firstLine = lines[0].trim();
    if (firstLine.length > 3 && firstLine.length < 50 && !firstLine.includes('@')) {
      name = firstLine;
    }
  }

  return {
    name: name || "Not Found",
    email: emailMatch ? emailMatch[0] : "Not Found",
    phone: phoneMatch ? phoneMatch[0].replace(/[\s-]/g, '') : "Not Found"
  };
};