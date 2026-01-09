const emailTemplate = ({ title, message, details = [] }) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #0f172a;
        font-family: Arial, sans-serif;
        color: #e5e7eb;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #020617;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #1e293b;
      }
      .header {
        padding: 20px;
        text-align: center;
        background: linear-gradient(135deg, #3b82f6, #06b6d4);
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
        color: #ffffff;
      }
      .content {
        padding: 24px;
      }
      .content p {
        font-size: 15px;
        line-height: 1.6;
        color: #cbd5f5;
      }
      .card {
        background: #020617;
        border: 1px solid #1e293b;
        border-radius: 10px;
        padding: 16px;
        margin-top: 16px;
      }
      .row {
        margin-bottom: 10px;
        font-size: 14px;
      }
      .label {
        color: #60a5fa;
        font-weight: bold;
      }
      .footer {
        text-align: center;
        padding: 14px;
        font-size: 12px;
        color: #94a3b8;
        border-top: 1px solid #1e293b;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>${title}</h1>
      </div>
      <div class="content">
        <p>${message}</p>

        ${details.length ? `
        <div class="card">
          ${details.map(d => `
            <div class="row">
              <span class="label">${d.label}:</span> ${d.value}
            </div>
          `).join("")}
        </div>` : ""}
      </div>

      <div class="footer">
        © ${new Date().getFullYear()} DNDC – Data & Development Center
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = emailTemplate;
