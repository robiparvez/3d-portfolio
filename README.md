# Interactive 3D Portfolio Website

![Three.js](https://img.shields.io/badge/-Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/-GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Overview

A modern, performance-optimized portfolio website featuring interactive 3D scenes, smooth scroll animations, and responsive design. Built with React 19, Three.js, and GSAP to showcase projects with stunning visual effects while maintaining optimal load times and user experience.

## Tech Stack

- **Framework:** React 19
- **3D Graphics:** Three.js, React Three Fiber, Drei
- **Animations:** GSAP
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## Features

- **Interactive 3D Models** - Realistic lighting, shadows, and animated reveal effects
- **Scroll-Based Animations** - GSAP-powered smooth transitions and interactions
- **Responsive Design** - Optimized 3D experience across desktop, tablet, and mobile devices
- **Performance Optimized** - Code splitting, lazy loading, and service worker caching
- **Contact Integration** - EmailJS-powered contact form
- **Modern Architecture** - Error boundaries, Suspense, and React 19 best practices

## Performance Optimizations

This project implements several optimizations for improved load times and smooth 3D rendering.

### Key Optimizations

- **Image Compression:** 73% reduction using Sharp (8MB savings)
- **Code Splitting:** Lazy loading for major sections with React.lazy()
- **3D Model Optimization:** Material memoization and viewport-based lazy loading
- **Bundle Optimization:** Terser minification, manual chunk splitting, tree shaking
- **Caching Strategy:** Service worker with cache-first approach for static assets
- **Responsive 3D:** Adaptive particle counts (20-100) based on device type

### Performance Metrics

| Metric                 | Before | After  | Improvement |
| :--------------------- | :----- | :----- | :---------- |
| Initial Bundle Size    | ~2.8MB | ~2.6MB | -8%         |
| Image Assets           | ~9MB   | ~1MB   | -89%        |
| Initial Load Time      | 3-5s   | 2-3s   | -20-40%     |
| Time to Interactive    | 4-6s   | 3-4s   | -15-25%     |

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

Clone the repository:

```bash
git clone https://github.com/robiparvez/3d-portfolio.git
cd 3d-portfolio
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials from [EmailJS](https://www.emailjs.com/).

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the application.

### Build for Production

```bash
npm run build
npm run preview
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is open source and available under the [MIT License](LICENSE).
