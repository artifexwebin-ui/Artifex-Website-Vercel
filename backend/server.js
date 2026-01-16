const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const { getAutoReplyTemplate, getAdminNotificationTemplate } = require('./emailTemplates');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://artifex-web.vercel.app',
    'https://artifex-website-frontend.vercel.app',
    'https://www.artifexweb.in',
    'https://artifexweb.in'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            // If you want to allow all Vercel preview deployments, you can check if origin ends with .vercel.app
            if (origin.endsWith('.vercel.app')) {
                return callback(null, true);
            }
            var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
}));
app.use(bodyParser.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use 'smtp.gmail.com'
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('Artifex Backend is Running');
});

// Silence favicon warnings in logs
app.get(['/favicon.ico', '/favicon.png'], (req, res) => res.status(204).end());

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message, projectType, otherProjectType } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // 1. Send Notification to Admin (You)
        const adminMailOptions = {
            from: `"${name} (via Artifex Website)" <${process.env.EMAIL_USER}>`, // Recommended by Gmail SMTP
            to: process.env.EMAIL_USER,    // You receive this
            subject: `New Inquiry: ${subject || "No Subject"}`,
            html: getAdminNotificationTemplate({ name, email, subject, message, projectType, otherProjectType }),
            replyTo: email
        };

        // 2. Send Auto-Reply to User
        const userMailOptions = {
            from: `"Artifex Web" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We received your message! 🚀`,
            html: getAutoReplyTemplate(name)
        };

        // 3. Send Emails and WAIT for completion (Required for Serverless/Vercel)
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        console.log(`Emails sent successfully for: ${email}`);

        // 4. Respond ONLY after emails are confirmed sent
        res.status(200).json({ success: true, message: 'Message received and emails sent successfully' });

    } catch (error) {
        console.error('Email Error:', error);
        if (!res.headersSent) {
            res.status(500).json({
                success: false,
                message: 'Failed to send email. Please check server logs.',
                error: error.message
            });
        }
    }
});

// Export for Vercel
module.exports = app;

// Start server only if run directly (development)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}
