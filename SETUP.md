# Setup Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Profile Image**
   - Save your profile image to `public/images/profile.jpg` or `public/images/profile.png`
   - Recommended size: 800x800px or larger (square format works best)
   - The component will automatically detect and use it

3. **Add Your Resume**
   - Save your resume PDF to `public/resume.pdf`
   - The download button in the Hero section will work automatically

4. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for Production**
   ```bash
   npm run build
   ```

## Adding Your Profile Image

The profile image you provided will be automatically used once you place it in the correct location:

1. Copy your profile image file
2. Paste it into `portfolio-website/public/images/`
3. Rename it to `profile.jpg` (or `profile.png` if it's a PNG)
4. The website will automatically display it

If the image is not found, the component will show your initials "SK" as a fallback.

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero/Landing section
│   ├── About.tsx           # About Me section
│   ├── Experience.tsx     # Work experience section
│   ├── Projects.tsx        # Projects showcase
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

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary`: Main text color (currently black)
- `secondary`: Secondary text color (currently gray)
- `accent`: Accent color (currently blue)

### Content
- **Projects**: Edit `data/projects.ts`
- **Experience**: Edit `data/experience.ts`
- **About Section**: Edit `components/About.tsx`
- **Contact Info**: Edit `components/Contact.tsx`

## Next Steps

1. Add your profile image and resume
2. Review all content sections
3. Test the website locally
4. Deploy to Vercel (see DEPLOYMENT.md)

