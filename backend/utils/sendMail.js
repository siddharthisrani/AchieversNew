const nodemailer = require("nodemailer");

const sendMail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "smtp.gmail.com",
      port: 587,              
      secure: false, 
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
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
