# 🌐 Next.js + shadcn/ui + TypeScript + Theme Switcher Demo

This is a comprehensive **Next.js 14** project using **TypeScript**, **shadcn/ui**, **TailwindCSS**, and **Lucide React icons**, showcasing all available components with **runtime theme switching** (5 different themes) using **hexadecimal color codes**.

## ✨ Features

- 🎨 **5 Beautiful Themes** with runtime switching using hex colors
- 🧩 **50+ shadcn/ui Components** - Complete component library showcase
- 🔥 **Next.js 14** with App Router and TypeScript
- 📱 **Fully responsive** design for all devices
- ♿ **Accessible** components following WCAG guidelines
- 📁 Clean, scalable, and industry-standard folder structure
- 🎨 **Hex-only color system** - no HSL values for easier customization
- ⚡ **Performance optimized** with React.memo and selective re-rendering
- 🚀 **Production ready** with Vercel deployment support

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com) - Beautiful component library
- [Lucide React](https://lucide.dev) - Modern icon library
- [Radix UI](https://www.radix-ui.com) - Unstyled, accessible components
- **Theme persistence** via localStorage and React Context
- **Hex color system** for easy color customization

---

## 🚀 Getting Started

### Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/nextjs-shadcn-theme-demo.git
cd nextjs-shadcn-theme-demo
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build:production
npm start
```

### Performance Analysis

```bash
npm run analyze
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **One-click deployment:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/nextjs-shadcn-theme-demo)

2. **Manual deployment:**

```bash
npm i -g vercel
vercel
vercel --prod
```

3. **Environment Variables on Vercel:**

Set these in your Vercel dashboard:

```env
NEXTAUTH_SECRET=your-production-secret-here
NEXTAUTH_URL=https://your-app-name.vercel.app
```

### Deploy to Other Platforms

```bash
npm run build
```

The application uses:

- **SQLite in-memory database** (no external DB required)
- **File-based data storage** for demo purposes
- **Static optimization** where possible

## ⚡ Performance Optimizations

This project includes several performance optimizations:

### Component-Level Optimizations

- **React.memo()** for preventing unnecessary re-renders
- **useCallback()** for stable function references
- **useMemo()** for expensive calculations
- **Selective rendering** - only changed table rows re-render

### Bundle Optimizations

- **Code splitting** with dynamic imports
- **Tree shaking** for unused code elimination
- **Optimized package imports** for common libraries
- **Webpack bundle analysis** available via `npm run analyze`

### Runtime Optimizations

- **Efficient state management** with minimal re-renders
- **Debounced search** and filtering
- **Pagination** for large data sets
- **Lazy loading** for non-critical components

## 🎨 Available Themes (Hex Colors)

Switch between the following themes using the theme selector in the header:

- 🌞 **Light** - Clean, bright interface
  - Background: `#ffffff`, Foreground: `#0a0a0a`
  - Primary: `#171717`, Secondary: `#f5f5f5`
- 🌚 **Dark** - Modern dark mode with high contrast
  - Background: `#0a0a0a`, Foreground: `#fafafa`
  - Primary: `#fafafa`, Secondary: `#262626`
- 💚 **Emerald** - Nature-inspired theme with green accents
  - Background: `#ffffff`, Primary: `#10b981`
  - Accent: `#dcfce7`, Border: `#bbf7d0`
- 🌹 **Rose** - Elegant theme with pink/red accents
  - Background: `#ffffff`, Primary: `#e11d48`
  - Accent: `#fecdd3`, Border: `#fda4af`
- ☁️ **Sky** - Fresh theme with blue accents
  - Background: `#ffffff`, Primary: `#0284c7`
  - Accent: `#bae6fd`, Border: `#7dd3fc`

All themes use **CSS custom properties** with hex values and provide smooth transitions between theme changes.

---

## 🎨 Color System

The application uses a comprehensive hex-based color system:

### Primary Colors

```css
--primary: #171717; /* Main brand color */
--primary-foreground: #fafafa; /* Text on primary */
```

### Background Colors

```css
--background: #ffffff; /* Main background */
--foreground: #0a0a0a; /* Main text color */
--card: #ffffff; /* Card backgrounds */
--card-foreground: #0a0a0a; /* Card text */
```

### Interactive Colors

```css
--border: #e5e5e5; /* Border color */
--input: #e5e5e5; /* Input borders */
--ring: #0a0a0a; /* Focus rings */
--destructive: #ef4444; /* Error/danger color */
```

### Chart Colors

```css
--chart-1: #f97316; /* Orange */
--chart-2: #06b6d4; /* Cyan */
--chart-3: #1e40af; /* Blue */
--chart-4: #eab308; /* Yellow */
--chart-5: #f59e0b; /* Amber */
```

---

## 🧩 Component Showcase

The application demonstrates all major shadcn/ui components including:

### **Form Components**

- Input fields (text, email, password)
- Textarea for multi-line input
- Select dropdowns with search
- Checkboxes and radio buttons
- Toggle switches
- Sliders and range inputs

### **Navigation & Layout**

- Tabs with multiple panels
- Accordion for collapsible content
- Breadcrumb navigation
- Pagination controls
- Separators and dividers

### **Feedback & Status**

- Progress bars and loading states
- Alert messages (info, warning, error)
- Toast notifications
- Badges and status indicators
- Skeleton loading placeholders

### **Overlays & Modals**

- Dialog modals
- Sheet/drawer components
- Popover tooltips
- Context menus
- Hover cards

### **Data Display**

- Cards with headers and content
- Tables with sorting
- Calendar and date picker
- Charts and data visualization
- Avatar components

### **Interactive Elements**

- Buttons (all variants and sizes)
- Icon buttons with Lucide icons
- Dropdown menus
- Command palette
- Search and filtering

---

## 📦 Project Structure

```
/app                 # Next.js App Router
  /globals.css       # Global styles and theme variables (hex colors)
  /layout.tsx        # Root layout with theme provider
  /page.tsx          # Main showcase page
/components          # React components
  /ui/               # shadcn/ui components
  /ComponentShowcase.tsx  # Main component demo
  /ThemeToggle.tsx   # Theme switching component
/contexts            # React contexts
  /ThemeContext.tsx  # Theme management
/lib                 # Utilities
  /utils.ts          # shadcn/ui utility functions
/components.json     # shadcn/ui configuration
/tailwind.config.ts  # Tailwind config with hex color system
```

---

## 🎯 Key Features Explained

### **Hex Color System**

- All colors defined using hexadecimal values for easy customization
- CSS custom properties for dynamic theming
- No HSL values - pure hex for simplicity
- Easy to modify and understand color values

### **Theme System**

- React Context for theme state management
- localStorage persistence across sessions
- Smooth transitions between theme changes
- Support for 5 distinct color schemes

### **Component Architecture**

- Modular design with single responsibility
- TypeScript for type safety
- Accessible by default with Radix UI primitives
- Consistent API across all components
- Responsive design patterns

### **Performance**

- Static generation with Next.js
- Optimized bundle size
- Lazy loading for better performance
- Efficient re-renders with React

---

## 🔤 Icons

This project uses [Lucide React](https://lucide.dev) for all icons:

```tsx
import { Heart, Share, MessageCircle } from 'lucide-react';

<Heart className="w-4 h-4" />
<Share className="w-4 h-4" />
<MessageCircle className="w-4 h-4" />
```

---

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px - Stack layout, touch-optimized
- **Tablet**: 768px - 1024px - Grid layout, optimized spacing
- **Desktop**: > 1024px - Multi-column layout, hover states

---

## ♿ Accessibility

All components follow accessibility best practices:

- **Keyboard navigation** support
- **Screen reader** compatibility
- **Focus management** and visual indicators
- **ARIA attributes** for assistive technologies
- **Color contrast** meeting WCAG guidelines
- **Semantic HTML** structure

---

## 🎨 Customizing Colors

To customize the theme colors, edit the CSS custom properties in `/styles/globals.css`:

```css
:root {
  --background: #ffffff; /* Change background color */
  --foreground: #0a0a0a; /* Change text color */
  --primary: #171717; /* Change primary brand color */
  /* ... other colors */
}
```

All colors use hex values for easy modification and understanding.

---

## 📜 License

MIT License - feel free to use this project as a starting point for your own applications.

---

## 💡 Future Enhancements

- [ ] Add dark/light theme animations
- [ ] Add layout variants (sidebar, tabbed, etc.)
- [ ] Add form validation examples with react-hook-form
- [ ] Add data table with advanced features
- [ ] Add chart components with recharts
- [ ] Add authentication UI examples
- [ ] Add e-commerce component patterns
- [ ] Add color picker for custom hex themes

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📧 Support

If you have any questions or need help with the project, please open an issue on GitHub or reach out to the community.
