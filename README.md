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
# ⚡ Quick Reference Card

## 🚀 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

## 📱 Access URLs

- **Local:** <http://localhost:3000>
- **Mobile:** http://YOUR_IP:3000 (find IP with `ifconfig`)

## 🔗 Important Links

- **Formspree:** <https://formspree.io> (Setup email form)
- **Vercel:** <https://vercel.com> (Easy deployment)
- **Netlify:** <https://netlify.com> (Alternative deployment)
- **Next.js Docs:** <https://nextjs.org>

## 📞 Contact Details (In Website)

- Phone: 8018335500, 9337933995
- WhatsApp: 918018335500
- Address: Daluastreet, Berhampur, Orissa – 760002

## 🎨 Key Files to Customize

- **Colors:** `styles/globals.css` (lines 4-10)
- **Formspree:** `pages/enquiry.tsx` (line 35)
- **Google Maps:** `pages/address.tsx` (line 13)
- **Business Hours:** `pages/address.tsx` & `pages/contact.tsx`

## 📄 Page Routes

- `/` - Home
- `/address` - Address & Map
- `/services` - Services
- `/contact` - Contact Info
- `/enquiry` - Enquiry Form
- `/thank-you` - Success Page

## 🛠️ Quick Fixes

**Port busy?**

```bash
lsof -ti:3000 | xargs kill -9
```

**Reinstall?**

```bash
rm -rf node_modules && npm install
```

**Clear cache?**

```bash
rm -rf .next
```

## ✅ Pre-Deploy Checklist

- [ ] Update Formspree form ID
- [ ] Test all forms
- [ ] Verify phone numbers work
- [ ] Test WhatsApp buttons
- [ ] Check mobile responsiveness
- [ ] Run `npm run build` successfully

---

# 🚀 SmartService Electronic Website - Setup & Deployment Guide

## ✅ Project Successfully Created

Your complete Next.js website for **SmartService Electronic PVT LTD** is ready!

---

## 📋 What's Been Created

### Pages (All Fully Functional)

- ✅ **Home** (`/`) - Hero section with service highlights
- ✅ **Address** (`/address`) - Shop location with Google Maps
- ✅ **Services** (`/services`) - Detailed service cards
- ✅ **Contact** (`/contact`) - Contact information with CTAs
- ✅ **Enquiry** (`/enquiry`) - Form with email & WhatsApp options
- ✅ **Thank You** (`/thank-you`) - Success confirmation page

### Components

- ✅ **Navbar** - Responsive navigation with mobile menu
- ✅ **Footer** - Professional footer with links
- ✅ **WhatsApp Button** - Floating button (bottom-right)
- ✅ **Layout** - Consistent wrapper for all pages

### Styling

- ✅ **Global CSS** - Professional electrical shop theme
- ✅ **Module CSS** - Scoped styles for each component/page
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Smooth Animations** - Hover effects and transitions

---

## 🎯 Current Status

✅ **Development server is RUNNING!**

- URL: <http://localhost:3000>
- Status: Ready to view

---

## 📱 How to Use

### 1️⃣ View the Website

Open your browser and go to:

```
http://localhost:3000
```

### 2️⃣ Navigate Through Pages

- Click on menu items: Home, Address, Services, Contact Us, Enquiry
- Test the WhatsApp floating button (bottom-right corner)
- Fill out the enquiry form
- Test all call-to-action buttons

### 3️⃣ Test Responsive Design

- Resize your browser window
- Open on mobile device by accessing your computer's IP address:
  - Find your IP: `ifconfig` (Mac) or `ipconfig` (Windows)
  - Access: `http://YOUR_IP:3000`

---

## 🔧 Important Configuration Steps

### Step 1: Setup Formspree (Email Integration)

1. **Create Account:**
   - Go to <https://formspree.io>
   - Sign up for FREE account
   - Create a new form

2. **Get Form ID:**
   - After creating form, copy your form ID (looks like: `abcd1234`)

3. **Update Code:**
   - Open: `/pages/enquiry.tsx`
   - Find line 35: `'https://formspree.io/f/your-form-id'`
   - Replace `your-form-id` with your actual form ID
   - Example: `'https://formspree.io/f/abcd1234'`

4. **Test:**
   - Go to <http://localhost:3000/enquiry>
   - Fill form and submit via email
   - Check your Formspree dashboard for submissions

### Step 2: Update Google Maps Location

1. **Get Your Coordinates:**
   - Go to Google Maps
   - Search for: "Daluastreet, Berhampur, Orissa"
   - Right-click your exact location → Click coordinates to copy
   - Example: `19.3150, 84.7944`

2. **Update Embed URL:**
   - Open: `/pages/address.tsx`
   - Find line 13: `mapEmbedUrl`
   - Update with your exact coordinates or use Google Maps embed generator

### Step 3: Customize Content (Optional)

**Update Business Hours:**

- File: `/pages/address.tsx` (lines 44-46)
- File: `/pages/contact.tsx` (lines 109-115)

**Update Contact Numbers:**

- Already set to: 8018335500, 9337933995
- If you need to change, search for these numbers across all files

**Change Colors:**

- File: `/styles/globals.css` (lines 4-10)
- Modify CSS variables for your brand colors

---

## 🏗️ Build & Deploy

### Option 1: Static Export (Recommended)

**Build static website:**

```bash
npm run build
```

This creates an `out/` folder with your complete static website.

**Deploy to hosting:**

- **Netlify:** Drag & drop `out` folder
- **Vercel:** Connect GitHub repo or drag & drop
- **GitHub Pages:** Push `out` folder contents
- **Any host:** Upload `out` folder contents

### Option 2: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow prompts to deploy. Your site will be live in minutes!

---

## 🧪 Testing Checklist

Before deploying, test these features:

- [ ] All navigation links work
- [ ] Mobile menu opens/closes properly
- [ ] All pages load without errors
- [ ] Forms can be filled and submitted
- [ ] WhatsApp buttons open WhatsApp with pre-filled message
- [ ] Phone number links work on mobile
- [ ] Google Maps loads and shows location
- [ ] Website is responsive on mobile, tablet, desktop
- [ ] All images/icons display correctly
- [ ] Footer links work

---

## 📞 WhatsApp Integration Details

### Current Setup

- **Number:** 918018335500 (with country code)
- **Floating Button:** Bottom-right corner, always visible
- **Form Integration:** Sends enquiry details to WhatsApp
- **Contact Pages:** Multiple WhatsApp CTAs

### Pre-filled Messages

- **General:** "Hello! I would like to inquire about your services."
- **From Form:** Includes Subject and Problem Description
- **From Services:** Service-specific messages

---

## 🎨 Design Features

✅ **Color Scheme:**

- Primary: Electric Blue (#1e40af)
- Secondary: Amber/Yellow (#f59e0b) - electrical theme
- Accent: Green (#10b981)
- Professional and trustworthy appearance

✅ **Typography:**

- System fonts for fast loading
- Clear hierarchy
- Readable on all devices

✅ **Animations:**

- Smooth hover effects
- Card lift on hover
- Button transitions
- Floating animations for icons

✅ **Responsive:**

- Mobile-first design
- Breakpoints: 480px, 768px, 968px
- Touch-friendly buttons
- Readable text sizes

---

## 📁 File Structure Reference

```
SmartServiceElectric/
├── components/
│   ├── Layout.tsx          # Main wrapper with SEO
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── pages/
│   ├── index.tsx           # Home page
│   ├── address.tsx         # Address & map
│   ├── services.tsx        # Services listing
│   ├── contact.tsx         # Contact info
│   ├── enquiry.tsx         # Enquiry form
│   └── thank-you.tsx       # Success page
├── styles/
│   ├── globals.css         # Global styles & variables
│   └── *.module.css        # Component-specific styles
├── public/
│   └── favicon.ico         # Website icon
├── package.json            # Dependencies
├── next.config.js          # Next.js config (static export)
└── README.md               # Documentation
```

---

## 🆘 Troubleshooting

### Port Already in Use?

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found?

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build Errors?

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors?

- Check all imports are correct
- Ensure all required props are passed
- Run: `npm run lint` for details

---

## 🚀 Performance Tips

1. **Optimize Images:** Replace emoji icons with actual images/SVGs
2. **Add Loading States:** Implement skeleton loaders
3. **Lazy Loading:** Add for below-fold content
4. **Caching:** Configure in `next.config.js`
5. **Analytics:** Add Google Analytics or similar

---

## 🔐 Security Notes

1. **Form Protection:** Formspree includes spam protection
2. **Environment Variables:** Store API keys in `.env.local`
3. **HTTPS:** Always deploy with SSL certificate
4. **Input Validation:** Form has basic validation

---

## 📈 Next Steps (Optional Enhancements)

1. **Add Blog Section:** Share electrical tips and news
2. **Customer Reviews:** Add testimonials section
3. **Photo Gallery:** Showcase completed projects
4. **Online Booking:** Add appointment scheduling
5. **Live Chat:** Integrate Tawk.to or similar
6. **Multi-language:** Add Hindi/Odia language support
7. **Dark Mode:** Add theme toggle

---

## 📞 Support & Contact

**SmartService Electronic PVT LTD**

- 📍 Daluastreet, Berhampur, Orissa – 760002
- 📞 8018335500
- 📞 9337933995
- 💬 WhatsApp: 918018335500

---

## ✅ Deployment Checklist

Before going live:

- [ ] Update Formspree form ID
- [ ] Test all forms submit correctly
- [ ] Verify Google Maps shows correct location
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile devices
- [ ] Check all phone numbers and links
- [ ] Add real favicon in `/public/favicon.ico`
- [ ] Review all text content for accuracy
- [ ] Test WhatsApp links on mobile
- [ ] Run production build: `npm run build`
- [ ] Check for console errors
- [ ] Test website speed (Google PageSpeed Insights)

---

## 🎉 Congratulations

Your professional website is ready! The development server is currently running at:

**<http://localhost:3000>**

Open it in your browser to see your beautiful new website!

---

**Made with ❤️ for SmartService Electronic PVT LTD**

*For any technical questions, refer to the README.md or Next.js documentation at <https://nextjs.org>*


**Current Status:** ✅ Server Running at <http://localhost:3000>
**Built with ❤️ for SmartService Electronic PVT LTD**
