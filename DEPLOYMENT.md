# Deployment Guide - Erotica Website

## Production Build Ready ✅

Your `dist` folder is now ready for deployment with:
- Optimized React build
- Proper SPA routing redirects
- Security headers
- Cache optimization

## Hosting Options

### 1. Netlify (Recommended)
```bash
# Option A: Drag & drop the dist folder to netlify.com
# Option B: Connect GitHub repo
# Option C: Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### 2. Vercel
```bash
npm install -g vercel
cd dist
vercel --prod
```

### 3. Apache Server
- Upload dist folder contents to your web root
- .htaccess file included for proper routing

### 4. Nginx
Add this to your nginx config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Files Included in dist/
- `index.html` - Main HTML file
- `assets/` - Optimized CSS, JS, and images
- `_redirects` - Netlify/SPA routing rules
- `.htaccess` - Apache server configuration
- `images/` & `videos/` - Static media assets

## Security Features
- XSS Protection
- Frame Options (DENY)
- Content Type Options
- Referrer Policy
- Permissions Policy

## Performance Features
- Asset caching (1 year)
- Gzip compression
- Optimized bundle size

Your website is ready to deploy! 🚀