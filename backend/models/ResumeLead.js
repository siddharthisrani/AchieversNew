const mongoose = require("mongoose");

const resumeLeadSchema = new mongoose.Schema(
  {
    // ✅ Extracted contact details from resume
    name: {
      type: String,
      required: true,
      trim: true,
      default: "Not Found"
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      default: "Not Found"
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      default: "Not Found"
    },

    // ✅ Resume analysis data
    score: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    missing: [String],
    recommendedCourses: [String],

    // ✅ File metadata
    resumePath: String,
    resumeSizeKB: Number,
    originalFileName: String
  },
  { 
    timestamps: true // Automatically adds createdAt and updatedAt
  }
);

// ✅ Index for faster queries on email and phone
resumeLeadSchema.index({ email: 1 });
resumeLeadSchema.index({ phone: 1 });

module.exports = mongoose.model("ResumeLead", resumeLeadSchema);