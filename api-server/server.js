const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Contact form endpoint - GET request handler (for testing/info)
app.get('/api/contact', (req, res) => {
  res.status(405).json({ 
    error: 'Method not allowed. This endpoint only accepts POST requests.',
    info: 'Send a POST request with JSON body containing: name, email, company (optional), message'
  });
});

// Contact form endpoint - POST request handler
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if SendGrid is configured
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not set');
      return res.status(500).json({ 
        error: 'Email service is not configured. Please contact the administrator.' 
      });
    }

    // Get recipient email from environment variable or use a default
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.SENDGRID_FROM_EMAIL;

    if (!recipientEmail) {
      console.error('RECIPIENT_EMAIL is not set');
      return res.status(500).json({ 
        error: 'Recipient email is not configured. Please contact the administrator.' 
      });
    }

    // Prepare email content
    const emailContent = {
      to: recipientEmail,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@rinneaiable.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
New contact form submission from RINNE AIABLE website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Message:
${message}
      `.trim(),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    };

    // Send email via SendGrid
    await sgMail.send(emailContent);

    res.status(200).json({ 
      success: true, 
      message: 'Thank you for your interest! We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Handle SendGrid specific errors
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
      return res.status(500).json({ 
        error: 'Failed to send email. Please try again later.' 
      });
    }

    res.status(500).json({ 
      error: 'An error occurred while processing your request.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
