// routes/chatRoutes.js
const express = require("express");
const ChatMessage = require("../models/ChatMessage");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  // Save user message
  await ChatMessage.create({
    message,
    sender: "user"
  });

  // Always same reply
  const reply = `
Sure 😊

📞 Call Us: +91 7000073787

Opening WhatsApp for you now...
`;

  res.json({ 
    reply,
    whatsapp: "https://wa.me/917000073787?text=Hi%20DNDC%2C%20I%20want%20free%20counseling%20for%20your%20courses."
  });
});

module.exports = router;
