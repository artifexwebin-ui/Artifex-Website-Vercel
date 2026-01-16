const getBaseStyles = () => `
  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background-color: #050510;
    color: #e2e8f0;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #0f1123;
    border: 1px solid #1e293b;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  }
  .header {
    background: linear-gradient(135deg, #0a0a1a 0%, #1a1f3d 100%);
    padding: 30px;
    text-align: center;
    border-bottom: 2px solid #3b82f6;
  }
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    border: 3px solid #3b82f6;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  .content {
    padding: 30px;
  }
  .h1 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }
  .text {
    color: #94a3b8;
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .highlight {
    color: #3b82f6;
    font-weight: 600;
  }
  .footer {
    padding: 20px;
    text-align: center;
    border-top: 1px solid #1e293b;
    background-color: #0a0a1a;
    font-size: 12px;
    color: #64748b;
  }
  .btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #3b82f6;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    margin-top: 20px;
  }
  .field-label {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 1px;
    color: #64748b;
    margin-bottom: 5px;
    display: block;
  }
  .field-value {
    background-color: #1e293b;
    padding: 12px;
    border-radius: 8px;
    color: #e2e8f0;
    margin-bottom: 15px;
    border: 1px solid #334155;
  }
`;

const getAutoReplyTemplate = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>${getBaseStyles()}</style>
</head>
<body>
  <div class="container">
    <div class="header">
       <!-- Replaced with a placeholder if direct CID is tricky without attachment, but styling mimics it -->
       <div style="font-size: 32px; font-weight: bold; color: #fff; text-shadow: 0 0 10px #3b82f6;">A</div>
       <div style="font-size: 20px; font-weight: 600; color: #e2e8f0; margin-top: 10px;">Artifex Web</div>
    </div>
    <div class="content">
      <h1 class="h1">Message Received, Captain! 🚀</h1>
      <p class="text">Hi <span class="highlight">${name}</span>,</p>
      <p class="text">
        This is an automated confirmation that your signal has reached our base. 
        Our team of specialists is currently analyzing your request and preparing a launch trajectory.
      </p>
      <p class="text">
        We typically respond within <strong>24 hours</strong>. While you wait, feel free to explore our galaxy of services.
      </p>
      
      <div style="text-align: center; margin-top: 30px;">
        <a href="https://yourwebsite.com" class="btn">Return to Base</a>
      </div>
    </div>
    <div class="footer">
      &copy; 2026 Artifex Web. All systems nominal.<br>
      Crafted with precision in the digital cosmos.
    </div>
  </div>
</body>
</html>
`;

const getAdminNotificationTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <style>${getBaseStyles()}</style>
</head>
<body>
  <div class="container">
    <div class="header">
       <div style="font-size: 24px; font-weight: bold; color: #3b82f6;">New Inquiry</div>
    </div>
    <div class="content">
      <h1 class="h1">Incoming Transmission 📡</h1>
      
      <span class="field-label">Sender Name</span>
      <div class="field-value">${data.name}</div>
      
      <span class="field-label">Email Frequency</span>
      <div class="field-value">${data.email}</div>
      
      <span class="field-label">Subject</span>
      <div class="field-value">${data.subject || "No Subject"}</div>

      <span class="field-label">Project Type</span>
      <div class="field-value">${data.projectType} ${data.otherProjectType ? `(${data.otherProjectType})` : ''}</div>
      
      <span class="field-label">Message Payload</span>
      <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
    </div>
    <div class="footer">
      Sent from Artifex Website Contact Form
    </div>
  </div>
</body>
</html>
`;

module.exports = { getAutoReplyTemplate, getAdminNotificationTemplate };
