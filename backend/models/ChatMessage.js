// models/ChatMessage.js
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  message: String,
  sender: { type: String, enum: ["user", "bot"] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ChatMessage", chatSchema);
