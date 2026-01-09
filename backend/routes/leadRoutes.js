// routes/leadRoutes.js
const express = require("express");
const Lead = require("../models/Lead");
const router = express.Router();

router.post("/lead", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields required" });
  }

  const lead = await Lead.create({ name, email, phone });
  res.status(201).json({ message: "Lead saved", lead });
});

module.exports = router;
