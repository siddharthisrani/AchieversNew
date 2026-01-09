const nodemailer = require("nodemailer");

const sendMail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"DNDC" <${process.env.EMAIL}>`,
      to,
      subject,
      html
    });

    console.log("✅ Email sent to:", to);
  } catch (error) {
    console.error("❌ sendMail error:", error.message);
    throw error;
  }
};

module.exports = sendMail;
