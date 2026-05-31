# BEES Export - Modern B2B Catalog

Welcome to the BEES Export modern web application! This project has been completely rebuilt from a legacy WordPress architecture into a lightning-fast, fully responsive **React Single Page Application (SPA)** powered by Vite.

## 🏢 Website Identity

- **Website Name**: BEES Export
- **Domain**: www.bees.org.in
- **Industry**: Export / Import (Agricultural Products, Spices, Handicrafts)
- **Type**: B2B Export Business Catalog
- **Business Model**: Showcases premium Indian products for international buyers with a streamlined enquiry/quote system. This is a B2B catalog, not a direct-to-consumer e-commerce store.

---

## 🚀 Tech Stack

This project leverages modern frontend technologies for optimal performance, SEO, and maintainability:

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS (Global Design System with CSS Variables)
- **Icons**: React Icons (Feather / FontAwesome)

---

## ✨ Key Features

- **Blazing Fast Performance**: Zero page-reload routing using React Router.
- **Next-Level Professional Design**: Premium aesthetic featuring glassmorphism, smooth scroll-reveal animations, dynamic counting stats, and immersive page transitions.
- **Fully Responsive (RWD)**: Mobile-first fluid typography and responsive grid layouts ensuring a flawless experience from 320px mobile screens up to 2560px ultra-wide monitors.
- **B2B Inquiry System**: Dedicated enquiry and contact forms designed for bulk trade requests.
- **SEO Optimized**: Dynamic page titles and semantic HTML structures.
- **Accessibility**: Enforced minimum touch targets (44px) and high-contrast readable layouts.

---

## 📁 Project Structure

```
bees-react/
├── index.html              # Main HTML entry point (Viewport & Meta configured)
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite bundler configuration
├── src/
│   ├── main.jsx            # React application mount point
│   ├── App.jsx             # Root component and Route definitions
│   ├── styles/
│   │   └── global.css      # Core Design System, Variables, Animations, and RWD
│   ├── components/         # Reusable UI components
│   │   ├── Header.jsx      # Sticky navigation & Mobile menu overlay
│   │   ├── Footer.jsx      # Global footer
│   │   ├── CategoryCard.jsx# Product category display
│   │   ├── PageBanner.jsx  # Breadcrumb header for internal pages
│   │   ├── ScrollToTop.jsx # Route change scroll reset
│   │   ├── RevealOnScroll.jsx # IntersectionObserver animation wrapper
│   │   ├── CountUp.jsx     # Animated number counter
│   │   └── WhatsAppButton.jsx # Floating chat CTA
│   ├── pages/              # Route level components
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # Company profile & APEDA certification
│   │   ├── CategoryPage.jsx# Specific category listing
│   │   ├── Products.jsx    # Full catalog grid
│   │   ├── Contact.jsx     # Contact info & Map
│   │   ├── Enquiry.jsx     # Trade request form
│   │   └── NotFound.jsx    # Premium 404 error page
│   └── data/               # Static data sources
│       ├── categories.js   # Product catalog database
│       └── faq.js          # Frequently asked questions
```

---

## 🛠️ Local Development

To run this project locally on your machine:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v16 or higher recommended).

### 2. Install Dependencies
Navigate to the project directory and run:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### 4. Build for Production
To generate a highly optimized production build:
```bash
npm run build
```
The compiled assets will be output to the `dist/` directory, ready to be deployed to any static hosting provider (Vercel, Netlify, AWS S3, cPanel).

---

## 📞 Contact Details

- **Email**: info@bees.org.in
- **Phone**: +91 94727 92999
- **Location**: New Delhi, India 

*Registered APEDA Exporter.*
