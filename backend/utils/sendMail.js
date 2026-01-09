const nodemailer = require("nodemailer");

const sendMail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"DNDC" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html
    });

    console.log("✅ Email sent to:", to);

  } catch (error) {
    console.error("❌ sendMail error:", error);
    throw error;
  }
};

module.exports = sendMail;
