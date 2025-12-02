# Portfolio Website

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/atiqu555q)

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features smooth animations, dark mode support, and a fully data-driven architecture for easy customization.

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **🌙 Dark Mode** - Default dark theme with light mode toggle
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Performance Optimized** - Built with Next.js 16 and React 19 for optimal performance
- **🎭 Smooth Animations** - Powered by Framer Motion for engaging interactions
- **📊 Data-Driven** - All content managed through a single `data.ts` file
- **🔧 Highly Customizable** - Easy to modify sections, visibility, and content
- **♿ Accessible** - Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.6
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.23.25
- **Icons:** Lucide React 0.469.0
- **Language:** TypeScript 5
- **Fonts:** Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme setup
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and theme variables
├── components/
│   └── portfolio/
│       ├── data.ts         # 🎯 All portfolio data (edit this!)
│       ├── PortfolioApp.tsx # Main app component
│       ├── Navigation.tsx   # Header navigation
│       ├── Hero.tsx        # Hero section
│       ├── Projects.tsx    # Projects showcase
│       ├── Experience.tsx  # Work experience timeline
│       ├── Skills.tsx      # Technical skills
│       ├── Footer.tsx      # Footer with contact info
│       ├── FixedAvatar.tsx # Floating avatar
│       ├── BackToTopButton.tsx
│       ├── SectionHeader.tsx
│       └── Typewriter.tsx
└── public/                # Static assets (images, PDFs)
```

## ⚙️ Configuration

All portfolio content is managed through `components/portfolio/data.ts`. This file contains:

### Personal Information
- Name, title, tagline
- Email, social links (LinkedIn, GitHub, Upwork, Buy Me a Coffee)
- Resume/CV URL
- Professional summary
- Avatar image URL

### Sections Configuration
Each section has a `visible` property to show/hide:
- Hero section
- Projects section
- Experience section
- Skills section
- Footer section

### Navigation Links
Configure navigation menu items with visibility control.

### Example Configuration

```typescript
export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other info
  },
  sections: {
    projects: {
      visible: true,  // Set to false to hide
      id: "projects",
      number: "02",
      title: "Key Projects Showcase",
    },
    // ... other sections
  },
};
```

## 🎨 Customization

### Changing Colors

Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --background: #f3f4f6; /* Light mode background */
  --foreground: #020617; /* Light mode text */
}

[data-theme="dark"] {
  --background: #0a0a0a; /* Dark mode background */
  --foreground: #e5e7eb; /* Dark mode text */
}
```

### Adding/Removing Sections

1. Update `data.ts` with your section data
2. Set `visible: false` to hide any section
3. Navigation links automatically update based on section visibility

### Modifying Animations

Animation configurations are in individual component files. Adjust Framer Motion props to customize:

- `initial` - Starting animation state
- `whileInView` - Animation when element enters viewport
- `whileHover` - Hover animations
- `transition` - Animation timing and easing

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Run with Docker

You can also run the app in a Docker container:

```bash
# Build the image
docker build -t portfolio-app .

# Run the container
docker run -p 3000:3000 portfolio-app
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Other Deployment Options

- **Netlify:** Connect your GitHub repo and deploy
- **AWS Amplify:** Follow Next.js deployment guide
- **Docker:** Build a containerized version using the provided `Dockerfile`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Features in Detail

### Interactive Project Cards
- Hover effects with scale and lift animations
- Entire card is clickable when project has a link
- Animated tags with hover interactions
- Glow effects and gradient backgrounds

### Enhanced Timeline
- Visible magenta/pink timeline line
- Animated timeline dots with glow effects
- Smooth scroll animations
- Interactive hover states

### Theme System
- Default dark mode
- Smooth theme transitions
- Persistent theme preference (localStorage)
- System preference detection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized images and assets

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Fonts by [Geist](https://vercel.com/font)

---

**Made with ❤️ using Next.js and React**
