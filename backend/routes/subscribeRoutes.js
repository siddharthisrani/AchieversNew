const express = require("express");
const router = express.Router();
const sendMail = require("../utils/sendMail");

router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email required" });
    }

    // 1️⃣ EMAIL TO USER
    await sendMail({
      to: email,
      subject: "Welcome to DNDC 🚀",
      html: `
        <h2>Welcome to DNDC!</h2>
        <p>Thanks for subscribing. You’ll now receive updates on:</p>
        <ul>
          <li>🚀 Courses</li>
          <li>💼 Placements</li>
          <li>📚 Free resources</li>
        </ul>
        <p>– DNDC Team</p>
      `
    });

    // 2️⃣ EMAIL TO ADMIN
    await sendMail({
      to: process.env.EMAIL,
      subject: "New Newsletter Subscriber 🎉",
      html: `<p>New subscriber email: <b>${email}</b></p>`
    });

    res.json({ message: "Subscribed successfully" });

  } catch (err) {
    console.error("❌ Subscribe route error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
