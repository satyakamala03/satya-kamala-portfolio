# Deployment Guide

## Adding Your Profile Image

1. Place your profile image in the `public/images/` directory
2. Name it `profile.jpg` or `profile.png`
3. The image should be a square (recommended: 800x800px or larger)
4. The component will automatically use it, or fall back to initials if the image is not found

## Adding Your Resume

1. Place your resume PDF in the `public/` directory
2. Name it `resume.pdf`
3. The download link in the Hero section will automatically work

## Setting Up Email Contact Form (Optional)

The contact form currently uses a mailto link. To set up a proper form backend:

### Option 1: EmailJS (Recommended)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key, Service ID, and Template ID
5. Create a `.env.local` file:

```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

6. Update `components/Contact.tsx` to use EmailJS

### Option 2: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Update the form submission in `components/Contact.tsx`

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Environment Variables

If you set up EmailJS or other services, add your environment variables in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Post-Deployment Checklist

- [ ] Profile image is displaying correctly
- [ ] Resume PDF downloads correctly
- [ ] All navigation links work
- [ ] Project modals open correctly
- [ ] GitHub links open in new tabs
- [ ] Contact form works (or mailto link works)
- [ ] Site is responsive on mobile, tablet, and desktop
- [ ] Animations are smooth
- [ ] Meta tags are correct (SEO)

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Performance Optimization

- Images are automatically optimized by Next.js
- Consider adding more specific image sizes for better performance
- Use `next/image` for all images to benefit from automatic optimization

