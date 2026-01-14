const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const { submitResume } = require("../controllers/resume.controller");

// ✅ Resume submission route
router.post(
  "/resume-analyze",
  upload.single("resume"),
  submitResume
);

module.exports = router;