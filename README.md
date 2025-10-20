# Samuel Kamanga - Creative Developer Portfolio

A visually stunning, interactive portfolio website showcasing creative development and FlutterFlow expertise. Built with HTML, CSS, and JavaScript featuring smooth animations, glassmorphism effects, and modern UI/UX design.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready%20to%20Deploy-brightgreen)

## ✨ Features

- **Smooth Scrolling**: Buttery-smooth navigation powered by Lenis
- **GSAP Animations**: Scroll-triggered reveals, entrance effects, and micro-interactions
- **Glassmorphism Design**: Modern glass-effect cards and components
- **3D Tilt Effects**: Interactive project cards and images using Vanilla Tilt
- **Custom Cursor Glow**: Gradient cursor trail that follows mouse movement
- **Animated Gradient Canvas**: Dynamic background in hero section
- **Image Lightbox**: GLightbox integration for creative showcase
- **Functional Contact Form**: FormSpree integration for message handling
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, reduced motion support, mobile optimizations

## 🎨 Design System

**Color Palette:**
- Background: `#0E0E10` (rich dark)
- Accent: `#5D5FEF` (vibrant violet)
- Secondary: `#00C6FF` (electric blue)
- Text: `#EAEAEA` (soft white)
- Gradient: `linear-gradient(135deg, #5D5FEF, #00C6FF)`

**Typography:**
- Headings: Poppins (bold, uppercase)
- Body: Inter
- Alternative: Space Grotesk

## 📁 Project Structure

```
samuel's-portfolio/
├── index.html              # Main HTML structure
├── style.css               # Complete styling with glassmorphism
├── script.js               # JavaScript animations and interactivity
├── README.md               # This file
├── samuels images/         # Profile images
│   ├── Screenshot 2025-09-24 225055.png (Hero)
│   └── Screenshot 2025-09-24 225124.png (About)
├── portfolio work/         # Featured project screenshots
│   ├── ukuuhr/
│   ├── DIgitalRadicalz/
│   └── Optimum/
└── morework/               # Creative showcase images (12 screenshots)
```

## 🚀 Quick Start

### 1. Setup Contact Form

The contact form uses FormSpree for handling submissions. To activate it:

1. Go to [FormSpree.io](https://formspree.io/) and create a free account
2. Create a new form and get your form endpoint
3. In `index.html`, replace `YOUR_FORM_ID` with your actual FormSpree form ID:

```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Example:
```html
<form id="contact-form" class="contact-form" action="https://formspree.io/f/xpwzeyzr" method="POST">
```

### 2. Update Email Address

Update the email link in the social icons section:

```html
<a href="mailto:samuel@impeldown.dev" class="social-icon" aria-label="Email">
```

Replace `samuel@impeldown.dev` with your actual email address.

### 3. Open in Browser

Simply open `index.html` in a modern web browser. All libraries are loaded via CDN, so no build process is required!

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Create account at [Netlify.com](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site is live!

### Option 2: Vercel

1. Create account at [Vercel.com](https://vercel.com/)
2. Import your project
3. Deploy with one click

### Option 3: GitHub Pages

1. Create a new GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```
3. Enable GitHub Pages in repository settings
4. Select main branch and root folder

### Option 4: Traditional Hosting

Upload all files to your web hosting via FTP/SFTP. Make sure:
- All files maintain their folder structure
- `index.html` is in the root directory
- File permissions are set correctly (644 for files, 755 for folders)

## 📚 Libraries Used

All libraries are loaded via CDN (no installation required):

- **GSAP 3.12.5** - Professional-grade animation
- **ScrollTrigger** - Scroll-based animations
- **Lenis 1.0.29** - Smooth scrolling
- **Vanilla Tilt 1.8.1** - 3D tilt effects
- **GLightbox** - Image lightbox

**Fonts:**
- Poppins (Google Fonts)
- Inter (Google Fonts)
- Space Grotesk (Google Fonts)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Change Colors

Edit CSS custom properties in `style.css`:

```css
:root {
    --bg-dark: #0E0E10;
    --accent: #5D5FEF;
    --secondary: #00C6FF;
    --text: #EAEAEA;
}
```

### Update Content

All content is in `index.html`. Simply find the section you want to edit and update the text.

### Add/Remove Projects

In the Featured Projects section of `index.html`, duplicate or remove `.project-card` elements:

```html
<div class="project-card" data-tilt data-tilt-max="5" data-tilt-glare data-tilt-max-glare="0.3">
    <!-- Project content -->
</div>
```

### Adjust Animation Speed

In `script.js`, modify GSAP durations and Lenis settings:

```javascript
const lenis = new Lenis({
    duration: 1.2, // Adjust for slower/faster scrolling
    // ...
});
```

## 📱 Mobile Optimization

The portfolio automatically:
- Disables cursor glow on touch devices
- Reduces animation complexity on mobile
- Adjusts layout for smaller screens
- Optimizes performance with lazy loading

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for icon links
- Keyboard navigation support
- Focus visible states
- Reduced motion support for users who prefer it

## 📝 To-Do After Deployment

- [ ] Set up FormSpree and update form action URL
- [ ] Update email address in contact section
- [ ] Test form submissions
- [ ] Verify all project links work
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Add favicon and meta tags for social sharing
- [ ] Test on multiple devices and browsers

## 🐛 Troubleshooting

**Form not working?**
- Make sure you've updated the FormSpree form ID
- Check browser console for errors
- Verify FormSpree account is active

**Animations not smooth?**
- Check if browser supports required features
- Disable browser extensions that might interfere
- Try on a different device/browser

**Images not loading?**
- Verify file paths are correct
- Check folder names match exactly (case-sensitive)
- Ensure images are in the correct folders

## 📄 License

This portfolio is personal and proprietary. Feel free to use it as inspiration for your own projects, but please don't copy it directly.

## 🤝 Contact

**Samuel Kamanga**
- Portfolio: [samuel.impeldown.dev](https://samuel.impeldown.dev)
- GitHub: [@Samuel04-png](https://github.com/Samuel04-png)
- Email: samuel@impeldown.dev

---

**Built with creativity, precision, and passion** ✦
*Designed to inspire, crafted to impress*

