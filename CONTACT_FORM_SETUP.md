# Contact Form Setup Guide

The contact form is now configured to send emails to **contact@monpetitbazaar.com** using EmailJS.

## Two Options for Email Sending

### Option 1: EmailJS (Recommended - Free & Easy)

EmailJS allows you to send emails directly from the browser without a backend server.

#### Setup Steps:

1. **Create a free account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Add an Email Service:**
   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account
   - Note down your **Service ID**

3. **Create an Email Template:**
   - Go to "Email Templates" 
   - Click "Create New Template"
   - Use this template structure:
   
   ```
   Subject: Nouveau message de {{name}} - {{subject}}
   
   From: {{name}} ({{email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Cet email a été envoyé depuis le formulaire de contact de Mon Petit Bazaar.
   ```
   
   - The template variables should be:
     - `{{name}}` - from name field
     - `{{email}}` - from email field  
     - `{{subject}}` - from subject field
     - `{{message}}` - from message field
   
   - Set the "To Email" field to: **contact@monpetitbazaar.com**
   - Note down your **Template ID**

4. **Get your Public Key:**
   - Go to "Account" → "General"
   - Find your **Public Key** (also called API Key)

5. **Update your .env file:**
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

6. **Rebuild and restart your app:**
   ```bash
   npm run build
   npm run dev
   ```

### Option 2: Mailto Fallback (Already Configured)

If you don't configure EmailJS, the form will automatically use a **mailto:** link fallback. This will:
- Open the user's default email client (Gmail, Outlook, Apple Mail, etc.)
- Pre-fill the recipient, subject, and message
- Let the user send the email from their own email client

**No configuration needed** - this works out of the box!

## Testing

1. **With EmailJS configured:**
   - Fill out the contact form
   - Click "Envoyer le message"
   - You should see a success message
   - Check your inbox at contact@monpetitbazaar.com

2. **Without EmailJS (mailto fallback):**
   - Fill out the contact form  
   - Click "Envoyer le message"
   - Your default email client will open
   - The email will be pre-filled and ready to send

## Security Notes

- The `.env` file is git-ignored by default (never commit it!)
- EmailJS public keys are safe to use in frontend code
- EmailJS free tier includes 200 emails/month
- For production, consider upgrading to a paid plan if needed

## Troubleshooting

**"Nothing happens when I click submit"**
- Check browser console for errors
- Verify your .env variables are set correctly
- Make sure you rebuilt the app after changing .env

**"Email client opens but I want EmailJS"**
- This means EmailJS is not configured
- Follow Option 1 setup steps above

**"I get an error message"**
- Check EmailJS dashboard for error logs
- Verify your Service ID, Template ID, and Public Key are correct
- Ensure the template variables match the form field names

## Alternative: Backend Email Service

If you prefer a backend solution, you can:
1. Create an API endpoint (Node.js/Express)
2. Use Nodemailer, SendGrid, or similar
3. Update the form to POST to your API instead of using EmailJS

Let me know if you need help with this approach!
