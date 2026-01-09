// routes/chatRoutes.js
const express = require("express");
const ChatMessage = require("../models/ChatMessage");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  await ChatMessage.create({
    message,
    sender: "user"
  });

  res.json({
    reply: "Thanks! Our counselor will contact you shortly."
  });
});

module.exports = router;
