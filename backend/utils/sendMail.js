const nodemailer = require("nodemailer");
const emailTemplate = require("./emailTemplate");

const sendMail = async ({ title, message, details }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"DNDC Website" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: title,
    html: emailTemplate({ title, message, details })
  });
};

module.exports = sendMail;
