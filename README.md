# 🚀 Developer Portfolio

An award-winning developer portfolio with a futuristic glassmorphism design. Built with pure HTML, CSS, and JavaScript — no frameworks, no build step.

![Dark Luxury Theme](https://img.shields.io/badge/theme-dark%20luxury-030014?style=flat-square)
![Glassmorphism](https://img.shields.io/badge/design-glassmorphism-6c63ff?style=flat-square)
![Responsive](https://img.shields.io/badge/responsive-yes-00d4ff?style=flat-square)

## ✨ Features

- **Glassmorphism Design** — Frosted glass cards with `backdrop-filter`, soft reflections, and ambient glow
- **Particle System** — Interactive canvas-based particles with mouse attraction
- **3D Card Tilt** — Perspective-based tilt on hover with cursor-following glow
- **Typing Effect** — Dynamic rotating phrases in the hero section
- **Scroll Animations** — IntersectionObserver-powered reveal effects
- **Animated Skill Bars** — Gradient fill bars that animate on scroll
- **Counter Animation** — Smooth number counting with easing
- **Ambient Orbs** — Floating blurred gradient circles
- **Cursor Glow** — Radial gradient follows cursor on desktop
- **Smart Navigation** — Auto-hide on scroll, glassmorphism backdrop, active tracking
- **Fully Responsive** — Mobile-first design with breakpoints at 1024px, 768px, 480px
- **Accessible** — ARIA labels, semantic HTML, `prefers-reduced-motion` support
- **Config-Driven** — Edit one file (`config.js`) to personalize everything

## 🗂️ Structure

```
Portfolio/
├── index.html      # HTML shell (dynamic content injected by JS)
├── styles.css      # Core design system (2,400+ lines)
├── bridge.css      # Layout & component styles
├── config.js       # ⭐ YOUR DATA — edit this to personalize
├── script.js       # Rendering engine + animations
├── .gitignore
└── README.md
```

## ⚙️ Configuration

All personal content lives in **`config.js`**. Open it and edit:

| Setting | Location |
|---------|----------|
| Site name & logo | `CONFIG.site.logo` |
| Page title & SEO | `CONFIG.site.title`, `.description` |
| Your name | `CONFIG.hero.name` |
| Typing phrases | `CONFIG.hero.typingPhrases` |
| Hero stats | `CONFIG.hero.stats` |
| About me | `CONFIG.about` |
| Skills & levels | `CONFIG.skills` |
| Projects | `CONFIG.projects` |
| Education | `CONFIG.education` |
| Certifications | `CONFIG.certifications` |
| Work experience | `CONFIG.experience` |
| Email & location | `CONFIG.contact` |
| Social links | `CONFIG.socials` |
| Footer text | `CONFIG.site.footerTagline` |

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Edit `config.js`** with your personal info

3. **Open locally** — just open `index.html` in your browser, or use a local server:
   ```bash
   npx serve
   ```

4. **Deploy** — works on any static host:
   - **GitHub Pages** — push to `main`, enable Pages in repo settings
   - **Vercel** — import repo, zero config
   - **Netlify** — drag & drop the folder

## 🎨 Design Inspiration

Apple Vision Pro · Tesla UI · Figma · Linear · Vercel

## 📄 License

MIT — free to use and modify.
