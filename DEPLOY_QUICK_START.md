# Quick Start: Deploy to Netlify

## 🚀 Fastest Method (5 minutes)

### Option A: Via Netlify UI (Easiest)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Go to [app.netlify.com](https://app.netlify.com)** and sign in

3. **Click "Add new site" → "Import an existing project"**

4. **Select your Git provider** and choose your repository

5. **Configure build settings:**
   - Base directory: `FRONT-END` (if your repo has parent folders)
   - Build command: `npm run build`
   - Publish directory: `dist`

6. **Click "Deploy site"** ✅

### Option B: Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your frontend folder
cd FRONT-END

# Login to Netlify
netlify login

# Deploy
netlify init
netlify deploy --prod
```

### Option C: Drag & Drop (No Git needed)

```bash
cd FRONT-END
npm install
npm run build
```

Then drag the `FRONT-END/dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

## ⚙️ Important Settings

**If your Git repo root is NOT the FRONT-END folder:**
- Set **Base directory** to `FRONT-END` in Netlify UI
- Or deploy only the FRONT-END folder as a separate repo

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x or 20.x

## ✅ Pre-Deployment Test

Test your build locally first:
```bash
cd FRONT-END
npm install
npm run build
npm run preview
```

## 📝 Files Already Configured

✅ `netlify.toml` - Build configuration  
✅ `public/_redirects` - SPA routing support  
✅ `vite.config.js` - Build settings  

## 🆘 Need Help?

See `NETLIFY_DEPLOYMENT.md` for detailed instructions.

