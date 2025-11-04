# EmailJS Setup Guide

To enable email functionality in the contact form, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Get Your Public Key

1. Log in to your EmailJS dashboard
2. Go to **Account** → **General**
3. Copy your **Public Key** (also called User ID)

## Step 3: Add an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. After connecting, copy the **Service ID**

## Step 4: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**
```
Contact from {{from_name}}
```

**Content:**
```
You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save the template and copy the **Template ID**

## Step 5: Configure Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add these variables with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## Step 6: Restart Your Development Server

After adding the environment variables:

```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (isatyakamala@gmail.com) for the message

## Troubleshooting

- **"Public Key is invalid"**: Make sure you copied the Public Key from Account → General, not from the service or template
- **Email not received**: Check your spam folder and verify the email service is properly connected
- **Form still opens mailto**: Make sure your `.env.local` file is in the project root and you've restarted the dev server

## Note

If EmailJS is not configured, the form will automatically fall back to opening your email client with a pre-filled message. This is a temporary solution until EmailJS is set up.

