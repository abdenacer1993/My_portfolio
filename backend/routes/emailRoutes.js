const express = require("express");
const router = express.Router();
const { sendEmail } = require("../services/emailService"); // Import email service

// POST route for sending email
router.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    // Call email service to send the email
    await sendEmail({ name, email, phone, subject, message });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

module.exports = router;
