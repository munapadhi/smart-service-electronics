# Deployment Fix for Custom Domain

## Issue Fixed

✅ Removed GitHub Pages base path that was causing navigation and CSS issues
✅ Added `.nojekyll` file for proper Next.js static export handling
✅ Added `CNAME` file with your custom domain
✅ Added `trailingSlash: true` for better routing

## How to Deploy to Custom Domain

### Step 1: Build the Project

```bash
npm run build
```

This will create an `out/` folder with your static website.

### Step 2: Deploy to GitHub Pages

**Option A: Manual Deployment**

1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Make sure custom domain is set to: `smartserviceelectronics.com`
4. Commit and push the new changes:

   ```bash
   git add .
   git commit -m "Fix navigation and CSS for custom domain"
   git push origin main
   ```

**Option B: Automated with gh-pages branch**

```bash
# Install gh-pages if not already installed
npm install -D gh-pages

# Build and deploy
npm run build
npx gh-pages -d out
```

### Step 3: Verify DNS Settings

Make sure your domain DNS is configured correctly:

**For root domain (smartserviceelectronics.com):**

- Add these A records:

  ```
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153
  ```

**For www subdomain (<www.smartserviceelectronics.com>):**

- Add CNAME record pointing to: `munapadhi.github.io`

### Step 4: Wait for Propagation

- DNS changes can take 24-48 hours to propagate
- GitHub Pages SSL certificate generation may take a few minutes

## Important Notes

1. **Always rebuild after configuration changes:**

   ```bash
   npm run build
   ```

2. **The `CNAME` file must be in the `public/` folder** so it gets copied to the `out/` folder during build

3. **For GitHub Pages without custom domain**, uncomment this line in `next.config.js`:

   ```javascript
   // basePath: '/smart-service-electronics',
   ```

4. **Clear browser cache** after deployment to see changes immediately

## Testing Locally

Test the build locally before deploying:

```bash
# Build the project
npm run build

# Serve the out folder (install serve if needed)
npx serve out

# Or use Python
cd out && python -m http.server 8000
```

Then visit: <http://localhost:8000> (or :3000 with serve)

## Troubleshooting

### CSS Not Loading

- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser console for errors
- Verify `_next/static/` folder exists in deployed files

### 404 Errors on Navigation

- Ensure `.nojekyll` file is present in root of deployed site
- Verify `trailingSlash: true` is in next.config.js
- Check GitHub Pages settings show custom domain correctly

### Domain Not Working

- Verify DNS records are correct
- Wait for DNS propagation (check with: <https://dnschecker.org>)
- Enable "Enforce HTTPS" in GitHub Pages settings (after SSL cert is ready)

## Current Configuration

Your site is now configured for:

- ✅ Custom domain: `smartserviceelectronics.com`
- ✅ Proper CSS and asset loading
- ✅ Working navigation between pages
- ✅ Clean URLs without base path

## Quick Deployment Commands

```bash
# 1. Build the project
npm run build

# 2. Commit changes
git add .
git commit -m "Deploy to custom domain"

# 3. Push to GitHub
git push origin main

# 4. (Optional) Deploy out folder directly
npx gh-pages -d out
```

---

**Your website should now work perfectly at:**

- <https://smartserviceelectronics.com>
- <https://www.smartserviceelectronics.com> (if configured)

All navigation links will work correctly and CSS will load properly! 🎉
