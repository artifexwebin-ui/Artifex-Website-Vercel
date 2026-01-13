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
app.use(cors());
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

app.post('/send-email', async (req, res) => {
    const { name, email, subject, message, projectType, otherProjectType } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    try {
        // 1. Send Notification to Admin (You)
        const adminMailOptions = {
            from: `"${name}" <${email}>`, // Shows sender's name
            to: process.env.EMAIL_USER,    // You receive this
            subject: `New Inquiry: ${subject || "No Subject"}`,
            html: getAdminNotificationTemplate({ name, email, subject, message, projectType, otherProjectType }),
            replyTo: email
        };

        // 2. Send Auto-Reply to User
        const userMailOptions = {
            from: `"Artifex Studio" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `We received your message! 🚀`,
            html: getAutoReplyTemplate(name)
        };

        // 3. Respond IMMEDIATELY to frontend (Optimistic success)
        res.status(200).json({ success: true, message: 'Message received, processing in background' });

        // 4. Send Emails in Background
        try {
            await Promise.all([
                transporter.sendMail(adminMailOptions),
                transporter.sendMail(userMailOptions)
            ]);
            console.log(`Email processed successfully for: ${email}`);
        } catch (bgError) {
            console.error('Background Email Error:', bgError);
        }
    } catch (error) {
        console.error('Error processing request:', error);
        if (!res.headersSent) {
            res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
