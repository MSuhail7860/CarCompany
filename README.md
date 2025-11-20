# Apex Motors - Premium Car Company Website

A stunning, multi-page car company website featuring scroll-based animations, parallax effects, and a premium dark theme design.

## 🚀 Features

- **Scroll-Based Hero Animation**: Car moves and transforms as you scroll
- **Smooth Scrolling**: Buttery smooth scrolling using Lenis
- **Parallax Effects**: Multi-layered parallax galleries
- **6 Pages**: Home, Models, Model Details, Innovation, About, Contact
- **Premium Dark Theme**: Electric blue, platinum silver, and amber gold accents
- **Fully Responsive**: Optimized for all devices
- **Framer Motion Animations**: Smooth, professional animations throughout
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary**: Electric Blue (#00d4ff)
- **Secondary**: Platinum Silver (#c0c0c0)
- **Accent**: Amber Gold (#ffb800)
- **Background**: Deep Black (#0a0a0a)

### Typography
- **Headings**: Orbitron (futuristic, automotive feel)
- **Body**: Inter (clean, modern readability)

## 📁 Project Structure

```
CarCompany/
├── public/
│   └── cars/              # Car images (placeholders included)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx # Responsive navigation with mobile menu
│   │   ├── Footer.jsx     # Multi-column footer
│   │   ├── CarCard.jsx    # Reusable car display card
│   │   └── SpecCard.jsx   # Specification display component
│   ├── pages/
│   │   ├── Home.jsx       # Hero with scroll animation
│   │   ├── Models.jsx     # Gallery with filters & parallax
│   │   ├── ModelDetail.jsx# Individual car details
│   │   ├── Innovation.jsx # Technology showcase
│   │   ├── About.jsx      # Company story
│   │   └── Contact.jsx    # Contact form & locations
│   ├── data/
│   │   └── cars.js        # Car model data
│   ├── hooks/
│   │   └── useSmoothScroll.js # Lenis smooth scroll hook
│   ├── App.jsx            # Main app with routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & design system
├── index.html
├── package.json
└── vite.config.js
```

## 🖼️ Adding Real Car Images

The website currently uses SVG placeholders. To add real car images:

1. Replace files in `public/cars/` with high-quality car photography:
   - `hero-car.png` - Main hero section car
   - `gt-r.png` - GT-R Sports model
   - `phantom.png` - Phantom Luxury sedan
   - `volt.png` - Volt Electric model
   - `titan.png` - Titan SUV
   - `viper.png` - Viper Hypercar
   - `cruiser.png` - Cruiser Convertible
   - `detail-1.png`, `detail-2.png`, `detail-3.png` - Detail shots

2. Recommended image specifications:
   - Format: PNG or WebP with transparency
   - Resolution: 1920x1080 or higher
   - Aspect ratio: 16:9 or 3:2
   - Professional automotive photography style
   - Dark or transparent backgrounds

## 🎯 Key Pages

### Home (`/`)
- Scroll-based hero with animated car
- Featured models showcase
- Innovation highlights
- Company statistics

### Models (`/models`)
- Category filtering
- Animated grid layout
- Parallax gallery section

### Model Detail (`/model/:id`)
- Large hero image
- Complete specifications
- Premium features list
- Available colors
- Related models

### Innovation (`/innovation`)
- Technology showcase cards
- Innovation timeline
- Feature descriptions

### About (`/about`)
- Company story
- Core values
- Awards & achievements

### Contact (`/contact`)
- Contact form with validation
- Contact information cards
- Multiple location listings

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **React Router** - Routing
- **Framer Motion** - Animations
- **Lenis** - Smooth scrolling
- **Lucide React** - Icons

## 🎨 Customization

### Changing Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #00d4ff;
  --color-secondary: #c0c0c0;
  --color-accent: #ffb800;
}
```

### Adding New Models
Edit `src/data/cars.js` and add new car objects with specifications.

### Modifying Animations
Adjust Framer Motion parameters in component files or modify the smooth scroll settings in `src/hooks/useSmoothScroll.js`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to fork and customize for your own projects!

---

**Built with ❤️ using React, Vite, and Framer Motion**
# CarCompany
