const SibApiV3Sdk = require("sib-api-v3-sdk");

// Configure Brevo client
const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const sendMail = async ({ to, subject, html }) => {
  try {
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    const emailData = {
      sender: {
        name: "DNDC",
        email: process.env.EMAIL_FROM
      },
      to: [{ email: to }],
      subject,
      htmlContent: html
    };

    const response = await apiInstance.sendTransacEmail(emailData);
    console.log("✅ Brevo email sent:", response.messageId);

  } catch (error) {
    console.error("❌ Brevo sendMail error:", error);
    throw error;
  }
};

module.exports = sendMail;
