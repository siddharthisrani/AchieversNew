import mongoose, { Schema, models, model } from "mongoose";

const LeadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: "",
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    course: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
    },

    inquiryType: {
      type: String,
      required: true,
      trim: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Useful for searching latest leads
LeadSchema.index({ createdAt: -1 });

const Lead = models.Lead || model("Lead", LeadSchema);

export default Lead;