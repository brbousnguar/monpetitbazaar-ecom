# Contact Form — EmailJS Setup

The contact form sends emails directly from the browser via [EmailJS](https://www.emailjs.com/) (no backend needed).

## Setup

1. Create a free account at emailjs.com
2. Add an email service (Gmail, Outlook, etc.) → note your **Service ID**
3. Create a template using these variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` → note your **Template ID**
4. Find your **Public Key** under Account → General
5. Copy `.env.example` to `.env` and fill in:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

6. Restart the dev server (`npm run dev`)

## Fallback

If EmailJS is not configured, the form opens the user's default email client with fields pre-filled.

## Notes

- EmailJS public keys are safe to use in frontend code
- Free tier: 200 emails/month
