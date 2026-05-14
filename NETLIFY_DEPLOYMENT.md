# Netlify Deployment Guide

This guide will help you deploy your React application to Netlify.

## 📋 Prerequisites

1. A Netlify account (sign up at [netlify.com](https://www.netlify.com))
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
3. Node.js and npm installed locally (for testing builds)

## 🚀 Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended for First Time)

1. **Prepare Your Repository**
   - Make sure your code is pushed to GitHub, GitLab, or Bitbucket
   - Ensure `netlify.toml` and `public/_redirects` are committed

2. **Log in to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in with your Git provider

3. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and authorize Netlify
   - Choose your repository

4. **Configure Build Settings**
   - **Base directory**: `FRONT-END` (if your repo has both frontend and backend)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Netlify should auto-detect these from `netlify.toml`

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete
   - Your site will be live at a random Netlify URL

6. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Navigate to Frontend Directory**
   ```bash
   cd FRONT-END
   ```

3. **Login to Netlify**
   ```bash
   netlify login
   ```

4. **Initialize Site**
   ```bash
   netlify init
   ```
   - Follow the prompts to link your site
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name

5. **Deploy**
   ```bash
   netlify deploy --prod
   ```

   For draft deployments (not live):
   ```bash
   netlify deploy
   ```

### Method 3: Deploy via Drag & Drop

1. **Build Your Project Locally**
   ```bash
   cd FRONT-END
   npm install
   npm run build
   ```

2. **Drag & Drop**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `FRONT-END/dist` folder to the deploy area
   - Your site will be live immediately

## ⚙️ Configuration Files

### netlify.toml
Already configured in your project:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
```

### public/_redirects
Already configured for SPA routing:
```
/*    /index.html   200
```

## 🔧 Build Settings (If Not Auto-Detected)

If Netlify doesn't auto-detect your settings, manually configure:

- **Base directory**: `FRONT-END`
- **Build command**: `npm run build`
- **Publish directory**: `FRONT-END/dist`
- **Node version**: 18.x or 20.x (set in Netlify UI → Site settings → Build & deploy → Environment)

## 🌍 Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Site settings → Environment variables
2. Add variables (e.g., `VITE_API_BASE_URL`)
3. Redeploy your site

**Note**: For Vite apps, environment variables must be prefixed with `VITE_` to be accessible in the browser.

## 📝 Pre-Deployment Checklist

- [ ] Test build locally: `npm run build`
- [ ] Verify `dist` folder is generated correctly
- [ ] Check that all images and assets load correctly
- [ ] Test all routes work (SPA routing)
- [ ] Ensure `netlify.toml` is in the repository
- [ ] Ensure `public/_redirects` is in the repository
- [ ] Push all changes to Git repository

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Test build locally: `npm run build`
- Verify Node version (should be 18.x or 20.x)
- Check for missing dependencies in `package.json`

### 404 Errors on Routes
- Verify `public/_redirects` file exists
- Check `netlify.toml` redirects configuration
- Ensure file is in the `public` folder (not `src`)

### Assets Not Loading
- Check asset paths are relative (not absolute)
- Verify `vite.config.js` build settings
- Check browser console for 404 errors

### Base Directory Issues
- If your repo has both frontend and backend:
  - Set base directory to `FRONT-END` in Netlify settings
  - Or use `netlify.toml` with `base = "FRONT-END"`

## 🔄 Continuous Deployment

Once connected to Git:
- Every push to main/master branch = automatic production deploy
- Pull requests = preview deployments
- Configure branch settings in Site settings → Build & deploy → Continuous Deployment

## 📊 Post-Deployment

1. **Test Your Live Site**
   - Check all pages load correctly
   - Test video playback
   - Verify responsive design
   - Test on different browsers

2. **Performance**
   - Check Netlify Analytics (if enabled)
   - Use Lighthouse for performance audit
   - Optimize images if needed

3. **Custom Domain**
   - Add domain in Site settings
   - Configure DNS records
   - Enable HTTPS (automatic with Netlify)

## 🎉 Success!

Your site should now be live on Netlify! Share your Netlify URL or custom domain.

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify CLI](https://cli.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)

- [Vite deplyoymenr ]

