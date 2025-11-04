# Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Step 1: Install Dependencies (2 minutes)
```bash
cd portfolio-website
npm install
```

### Step 2: Add Your Assets (2 minutes)

**Add Your Profile Image:**
1. Copy your profile image file
2. Paste it into `portfolio-website/public/images/`
3. Rename it to `profile.jpg` (or keep it as `.png` if it's a PNG file)

**Add Your Resume:**
1. Copy your resume PDF file
2. Paste it into `portfolio-website/public/`
3. Make sure it's named `resume.pdf`

### Step 3: Test Locally (1 minute)
```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio!

### Step 4: Deploy to Vercel (Optional)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Deploy on Vercel:
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

That's it! Your portfolio is live! 🎉

## 🔧 Troubleshooting

**Image not showing?**
- Make sure the file is named exactly `profile.jpg` or `profile.png`
- Check that it's in `public/images/` directory
- The component will show "SK" initials if the image isn't found

**Resume not downloading?**
- Make sure the file is named exactly `resume.pdf`
- Check that it's in the `public/` directory (not in a subfolder)

**Styles look broken?**
- Run `npm install` again to ensure all dependencies are installed
- Clear your browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📝 Next Steps

- Customize colors in `tailwind.config.js`
- Update project descriptions in `data/projects.ts`
- Add more projects or experiences
- Set up EmailJS for the contact form (see DEPLOYMENT.md)

## 🆘 Need Help?

Check the full documentation:
- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [SETUP.md](./SETUP.md) - Detailed setup instructions
