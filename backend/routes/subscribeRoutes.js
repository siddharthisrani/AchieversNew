// routes/subscribeRoutes.js
const express = require("express");
const sendMail = require("../utils/sendMail");

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    await sendMail({
      subject: "New Newsletter Subscriber",
      html: `<p>New subscriber: <b>${email}</b></p>`
    });

    res.json({ message: "Subscribed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Subscription failed" });
  }
});

module.exports = router;
