# Satya Kamala Portfolio Website

A modern, minimalistic portfolio website showcasing technical profile, projects, and achievements. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Smooth animations and transitions using Framer Motion
- 📱 Fully responsive design for all devices
- 🎨 Clean, modern UI inspired by premium portfolio sites
- ⚡ Optimized performance with Next.js
- 🚀 Ready for Vercel deployment
- 🎯 Smooth scrolling and section navigation
- 💫 Interactive project modals
- 📧 Contact form with email integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Setup Instructions

### 1. Add Your Profile Image

Place your profile image in `public/images/`:
- Name it `profile.jpg` or `profile.png`
- Recommended size: 800x800px or larger (square format works best)
- The component will automatically use it

### 2. Add Your Resume

Place your resume PDF in `public/`:
- Name it `resume.pdf`
- The download button in the Hero section will work automatically

### 3. Customize Content

- **Projects**: Edit `data/projects.ts`
- **Experience**: Edit `data/experience.ts`
- **About Section**: Edit `components/About.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build
5. Click "Deploy"

Your site will be live at `your-project.vercel.app`

### Manual Deployment

```bash
npm install -g vercel
vercel
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero/Landing section
│   ├── About.tsx           # About Me section
│   ├── Experience.tsx      # Work experience section
│   ├── Projects.tsx        # Projects showcase with modals
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── Navigation.tsx      # Navigation bar
├── data/
│   ├── projects.ts         # Project data
│   └── experience.ts       # Experience data
├── public/
│   ├── images/
│   │   └── profile.jpg     # Your profile image (add this)
│   └── resume.pdf          # Your resume (add this)
└── package.json
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
- `primary`: Main text color (currently black)
- `secondary`: Secondary text color (currently gray)
- `accent`: Accent color (currently blue)

### Animations

All animations are handled by Framer Motion. You can customize them in individual component files.

## 📧 Contact Form

The contact form currently uses a mailto link. To set up a proper backend:

1. See [DEPLOYMENT.md](./DEPLOYMENT.md) for EmailJS or Formspree setup
2. Add environment variables to `.env.local`
3. Update `components/Contact.tsx` with your service

## ✅ Checklist Before Deployment

- [ ] Profile image added to `public/images/profile.jpg`
- [ ] Resume PDF added to `public/resume.pdf`
- [ ] All project links are correct
- [ ] All GitHub links work
- [ ] Contact information is updated
- [ ] Test on mobile, tablet, and desktop
- [ ] All animations work smoothly
- [ ] SEO metadata is correct

## 📄 License

MIT

## 👤 Author

**Satya Kamala Immidisetty**
- GitHub: [@satyakamala03](https://github.com/satyakamala03)
- LinkedIn: [isatyakamala](https://linkedin.com/in/isatyakamala)
- Email: isatyakamala@gmail.com

---

Built with ❤️ using Next.js and TypeScript