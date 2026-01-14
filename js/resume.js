// ✅ STANDALONE Resume Analyzer - No dependencies on main.js
console.log("✅ Resume.js loading...");

// Prevent any interference from other scripts
(function() {
  'use strict';

  document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM loaded, initializing resume analyzer...");

    const fileInput = document.getElementById("resume-file");
    const analyzeBtn = document.getElementById("analyze-resume-btn");
    const fileNameEl = document.getElementById("file-name");
    const loadingEl = document.getElementById("loading");

    if (!fileInput || !analyzeBtn || !fileNameEl || !loadingEl) {
      console.error("❌ Required elements not found!");
      return;
    }

    /* 1️⃣ Resume Analysis Rules */
    function analyzeResumeRules(file) {
      let score = 85;
      let missing = [];
      let courses = [];

      const name = file.name.toLowerCase();

      if (!name.includes("resume") && !name.includes("cv")) {
        score -= 5;
        missing.push("File should be named 'resume' or 'cv'");
      }

      if (!name.includes("project")) {
        score -= 15;
        missing.push("Projects section likely missing");
        courses.push("MERN Stack Development");
      }

      if (!name.includes("github")) {
        score -= 10;
        missing.push("GitHub profile link missing");
        courses.push("Git & GitHub Mastery");
      }

      if (file.size > 2 * 1024 * 1024) {
        score -= 5;
        missing.push("Resume file too large (should be under 2MB)");
      }

      if (file.size < 50 * 1024) {
        score -= 10;
        missing.push("Resume seems too short");
      }

      if (score < 70) {
        courses.push("Resume Building Workshop");
        courses.push("LinkedIn Profile Optimization");
      }

      if (score >= 70 && score < 85) {
        courses.push("Interview Preparation");
      }

      return {
        score: Math.max(score, 40),
        missing: missing.length > 0 ? missing : ["Great! No major issues found"],
        courses: courses.length > 0 ? courses : ["Career Advancement Course"]
      };
    }

    /* 2️⃣ Show filename when file is selected */
    fileInput.addEventListener("change", () => {
      console.log("📁 File selected");
      if (fileInput.files.length) {
        const f = fileInput.files[0];
        const sizeKB = Math.round(f.size / 1024);
        fileNameEl.textContent = `📄 ${f.name} (${sizeKB} KB)`;
        fileNameEl.style.color = "#3b82f6";
      } else {
        fileNameEl.textContent = "";
      }
    });

    /* 3️⃣ Analyze Button Click Handler */
    analyzeBtn.onclick = async function(e) {
      // CRITICAL: Prevent ALL default behaviors
      if (e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }

      console.log("🔍 Analyze button clicked");

      // Validation
      if (!fileInput.files.length) {
        showLocalToast("⚠️ Please upload your resume first", "error");
        return false;
      }

      const file = fileInput.files[0];
      console.log("📄 File:", file.name, file.type);

      // File type validation
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];

      if (!validTypes.includes(file.type)) {
        showLocalToast("❌ Please upload PDF or DOC file only", "error");
        return false;
      }

      // Analyze resume
      const result = analyzeResumeRules(file);
      console.log("📊 Analysis result:", result);

      // Show loading
      loadingEl.classList.remove("hidden");
      analyzeBtn.disabled = true;
      analyzeBtn.textContent = "Analyzing...";

      // Prepare form data
      const formData = new FormData();
      formData.append("resume", file);
      formData.append("score", result.score);
      formData.append("missing", JSON.stringify(result.missing));
      formData.append("courses", JSON.stringify(result.courses));

      try {
        console.log("📤 Sending to backend...");
        
        const res = await fetch("https://dndc.onrender.com/api/resume-analyze", {
          method: "POST",
          body: formData
        });

        const data = await res.json();
        console.log("📥 Backend response:", data);

        if (res.ok && data.success) {
          console.log("✅ Saved to MongoDB successfully");
          showLocalToast("✅ Resume analyzed & saved!", "success");
        } else {
          console.error("❌ Backend error:", data);
          showLocalToast("⚠️ Analysis complete (save failed)", "error");
        }
      } catch (err) {
        console.error("⚠️ Backend connection error:", err);
        showLocalToast("⚠️ Showing results (server offline)", "error");
      }

      // Hide loading
      loadingEl.classList.add("hidden");
      analyzeBtn.disabled = false;
      analyzeBtn.textContent = "Analyze Resume";

      // Show result modal
      console.log("🎯 Opening result modal...");
      showResumeResult(result);

      return false;
    };

    console.log("✅ Event listeners attached");
  });

  /* 4️⃣ Show Result Modal */
  function showResumeResult(result) {
    console.log("🎭 showResumeResult called");
    
    const modal = document.getElementById("resume-result");
    
    if (!modal) {
      console.error("❌ Modal element #resume-result not found!");
      alert("Error: Modal not found in HTML");
      return;
    }

    console.log("✅ Modal element found");

    // Force display
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("active");
      console.log("✅ Modal activated with 'active' class");
    }, 50);

    // Animate score
    const scoreEl = document.getElementById("score-value");
    if (scoreEl) {
      animateScore(scoreEl, result.score);
    } else {
      console.error("❌ #score-value not found!");
    }

    // Set score color
    const scoreCircle = document.querySelector(".score-circle");
    if (scoreCircle) {
      if (result.score >= 80) {
        scoreCircle.style.background = "conic-gradient(#22c55e 0%, #3b82f6 75%, #1e293b 0)";
      } else if (result.score >= 60) {
        scoreCircle.style.background = "conic-gradient(#f59e0b 0%, #3b82f6 75%, #1e293b 0)";
      } else {
        scoreCircle.style.background = "conic-gradient(#ef4444 0%, #3b82f6 75%, #1e293b 0)";
      }
    }

    // Missing sections
    const cards = document.querySelector(".result-cards");
    if (cards) {
      cards.innerHTML = "";
      if (result.missing[0].includes("No major issues")) {
        cards.innerHTML = `<div class="result-card success">✔ Resume looks excellent!</div>`;
      } else {
        result.missing.forEach(item => {
          cards.innerHTML += `<div class="result-card error">✘ ${item}</div>`;
        });
      }
    }

    // Recommended courses
    const list = document.getElementById("course-list");
    if (list) {
      list.innerHTML = "";
      result.courses.forEach(c => {
        list.innerHTML += `<li>🎓 ${c}</li>`;
      });
    }

    console.log("✅ Modal content populated");
  }

  /* 5️⃣ Close Modal */
  window.closeResumeResult = function() {
    console.log("❌ Closing modal");
    const modal = document.getElementById("resume-result");
    if (modal) {
      modal.classList.remove("active");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  };

  /* 6️⃣ Score Animation */
  function animateScore(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.round(current);
    }, 20);
  }

  /* 7️⃣ Local Toast Notifications (Independent from main.js) */
  function showLocalToast(message, type = "success") {
    console.log(`🍞 Toast: ${message}`);
    
    const toast = document.createElement("div");
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "success" ? "#22c55e" : "#ef4444"};
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 10001;
      font-weight: 600;
      animation: slideInToastLocal 0.3s ease;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = "slideOutToastLocal 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* 8️⃣ CSS Animations */
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideInToastLocal {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutToastLocal {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(400px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

})();

console.log("✅ Resume.js fully loaded");