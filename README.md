# SmartService Electronic PVT LTD - Website

A modern, responsive, and professional website for **SmartService Electronic PVT LTD**, an electrical and electronics service shop in Berhampur, Orissa.

## 🌟 Features

- ✅ **Static Next.js Website** - Fast, SEO-friendly, and optimized
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Modern UI Design** - Clean and professional appearance
- 📧 **Contact Form** - Formspree integration for email submissions
- 💬 **WhatsApp Integration** - Floating button and direct messaging
- 🗺️ **Google Maps** - Embedded location map
- ⚡ **Fast Loading** - Optimized performance
- 🔍 **SEO Optimized** - Meta tags and semantic HTML

## 📄 Pages

1. **Home** - Hero section with service highlights
2. **Address** - Shop location with Google Maps
3. **Services** - Detailed service cards (AC Service, CCTV Installation, etc.)
4. **Contact Us** - Contact numbers with call-to-action buttons
5. **Enquiry** - Form with email and WhatsApp submission options
6. **Thank You** - Success page after form submission

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Navigate to project directory:**

   ```bash
   cd SmartServiceElectric
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Formspree Setup

To enable email submissions in the enquiry form:

1. Go to [https://formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `/pages/enquiry.tsx`
4. Replace `'your-form-id'` in line 35 with your actual Formspree form ID:

   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

## 🏗️ Build for Production

### Static Export (Recommended)

Generate a static website that can be hosted anywhere:

```bash
npm run build
```

This creates an `out/` folder with your static website. You can deploy this folder to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Start Production Server

```bash
npm start
```

## 📂 Project Structure

```
SmartServiceElectric/
├── components/          # Reusable React components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation bar
│   ├── Footer.tsx       # Footer component
│   └── WhatsAppButton.tsx # Floating WhatsApp button
├── pages/               # Next.js pages
│   ├── index.tsx        # Home page
│   ├── address.tsx      # Address page
│   ├── services.tsx     # Services page
│   ├── contact.tsx      # Contact page
│   ├── enquiry.tsx      # Enquiry form
│   ├── thank-you.tsx    # Success page
│   ├── _app.tsx         # App wrapper
│   └── _document.tsx    # Document wrapper
├── styles/              # CSS modules and global styles
│   ├── globals.css      # Global styles
│   ├── Home.module.css
│   ├── Navbar.module.css
│   └── ...
├── public/              # Static assets
├── package.json         # Dependencies
├── next.config.js       # Next.js configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Colors

Edit CSS variables in `/styles/globals.css`:

```css
:root {
  --primary-color: #1e40af;    /* Main blue */
  --secondary-color: #f59e0b;  /* Amber/Yellow */
  --accent-color: #10b981;     /* Green */
  --dark-color: #1f2937;       /* Dark gray */
  --text-color: #374151;       /* Text gray */
}
```

### Contact Information

Update phone numbers and WhatsApp links throughout the site:

- `/components/Footer.tsx`
- `/components/WhatsAppButton.tsx`
- `/pages/contact.tsx`
- `/pages/enquiry.tsx`

### Business Hours

Update in `/pages/address.tsx` and `/pages/contact.tsx`

### Google Maps Location

Update the map embed URL in `/pages/address.tsx` with your exact location coordinates.

## 📱 WhatsApp Integration

The website includes:

- **Floating button** (bottom-right corner) - Links to WhatsApp chat
- **Form submission** - Send enquiry details via WhatsApp
- **Contact buttons** - Direct WhatsApp links

WhatsApp number: **918018335500**

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Formspree** - Form handling
- **React Hooks** - State management

## 📊 SEO Features

- Meta tags for all pages
- Semantic HTML structure
- Open Graph tags for social sharing
- Optimized page titles and descriptions
- Fast loading times
- Mobile-friendly design

## 🌐 Deployment Options

### Netlify

```bash
npm run build
# Upload the 'out' folder to Netlify
```

### Vercel

```bash
vercel deploy
```

### GitHub Pages

```bash
npm run build
# Push the 'out' folder to gh-pages branch
```

## 📞 Contact Information

**SmartService Electronic PVT LTD**

- 📍 Daluastreet, Berhampur, Orissa – 760002
- 📞 8018335500
- 📞 9337933995
- 💬 WhatsApp: 918018335500

## 📄 License

© 2026 SmartService Electronic PVT LTD. All rights reserved.

## 🛠️ Support

For technical issues or questions about the website, please contact the development team or refer to the Next.js documentation at [nextjs.org](https://nextjs.org).

---

**Built with ❤️ for SmartService Electronic PVT LTD**
