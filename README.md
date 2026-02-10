# Tevuna Agency Website

A modern, futuristic website for Tevuna - a tech solution agency specializing in web development, mobile apps, and tech solutions.

## 🚀 Features

- 🎨 **Bold Futuristic Design** - Completely redesigned with a modern, tech-forward aesthetic
- ⚡ **Next.js 14** - Built with the latest Next.js and React
- 🎭 **Framer Motion** - Smooth, spring-based animations throughout
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 📱 **Fully Responsive** - Optimized for all devices
- 🌈 **Dynamic Animations** - Slide-in, scale, rotate, and spring physics animations
- 🎯 **Modern Typography** - Inter and JetBrains Mono fonts
- 💫 **Mesh Gradients & Grid Patterns** - Unique background effects
- 📧 **Contact Form** - Interactive contact form with validation
- 🔗 **WhatsApp Integration** - Floating WhatsApp button for quick contact

## 🎨 Design Highlights

### Theme
- **Color Scheme**: Dark theme with neon cyan/blue and purple/magenta accents
- **Typography**: Inter (body) and JetBrains Mono (tech elements)
- **Backgrounds**: Mesh gradients, grid patterns, and geometric shapes
- **Animations**: Spring physics, elastic effects, slide-in from multiple directions
- **Transitions**: Smooth spring-based transitions with custom easing

### Key Differences from Previous Design
- **Theme**: Changed from elegant dark to bold futuristic
- **Fonts**: Replaced Space Grotesk/DM Serif Display/Poppins with Inter/JetBrains Mono
- **Animations**: Spring physics instead of simple fade/scale
- **Backgrounds**: Mesh gradients and grid patterns instead of radial gradients
- **Color Palette**: Bright neon accents instead of subtle gradients
- **Layout**: More geometric and structured approach

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

The built files will be in the `.next` directory.

## 📁 Project Structure

```
tevuna/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css          # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Services.tsx        # Services section
│   ├── Gallery.tsx         # Gallery section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── WhatsAppFloat.tsx   # Floating WhatsApp button
├── src/
│   └── assets/             # Images and assets
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎯 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📝 Pages

- **Home** (`/`) - Hero, About, Projects, Services, Gallery, and Contact sections

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- `primary` - Main brand color (cyan/blue)
- `accent` - Accent color (purple/magenta)
- `dark` - Dark theme colors

### Animations
Modify animation variants in components using Framer Motion's animation props.

### Fonts
Change fonts in `app/layout.tsx` and update `tailwind.config.js`.

## 📄 License

© 2024 Tevuna. All rights reserved.
