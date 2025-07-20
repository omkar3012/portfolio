# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to various platforms.

## 🚀 Quick Deploy Options

### 1. Vercel (Recommended)
**Fastest and easiest deployment option**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm build settings

4. **Automatic deployments:** Push to GitHub and Vercel will auto-deploy

### 2. Netlify
**Great for static sites with form handling**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy options:**
   - **Drag & Drop:** Drag the `build` folder to Netlify
   - **Git Integration:** Connect your GitHub repo
   - **CLI:** Use `netlify-cli`

3. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `build`

### 3. GitHub Pages
**Free hosting for GitHub repositories**

1. **Add homepage to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio-website"
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

## 🔧 Pre-Deployment Checklist

### 1. Update Configuration Files
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update `robots.txt` with your actual domain
- [ ] Update `manifest.json` if needed
- [ ] Add your actual profile and project images to `public/images/`

### 2. Test Build
```bash
npm run build
```

### 3. Test Locally
```bash
npx serve -s build
```

## 🌐 Domain Configuration

### Custom Domain Setup
1. **Purchase domain** (Namecheap, GoDaddy, etc.)
2. **Configure DNS:**
   - **Vercel:** Add CNAME record pointing to your Vercel URL
   - **Netlify:** Add CNAME record pointing to your Netlify URL
   - **GitHub Pages:** Add CNAME file in your repository

### SSL Certificate
- **Vercel:** Automatic SSL
- **Netlify:** Automatic SSL
- **GitHub Pages:** Automatic SSL

## 📊 Performance Optimization

### 1. Image Optimization
- Use WebP format for images
- Compress images before adding to `public/images/`
- Consider using a CDN for images

### 2. Code Splitting
- Already implemented with React.lazy()
- Consider implementing route-based code splitting

### 3. Caching
- Static assets are cached for 1 year
- HTML files are cached appropriately

## 🔍 SEO Configuration

### 1. Meta Tags
- Already configured in `public/index.html`
- Update title, description, and keywords

### 2. Open Graph Tags
- Add Open Graph tags for social media sharing
- Test with Facebook Debugger and Twitter Card Validator

### 3. Analytics
- Add Google Analytics
- Add Google Search Console
- Submit sitemap to search engines

## 🛠️ Environment Variables

### Development
```bash
REACT_APP_GA_TRACKING_ID=your-ga-id
REACT_APP_CONTACT_EMAIL=your-email
```

### Production
Set environment variables in your deployment platform:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables

## 📱 PWA Features

### 1. Service Worker
- Add service worker for offline functionality
- Implement caching strategies

### 2. App Icons
- Add proper app icons in `public/`
- Update `manifest.json` with correct paths

## 🔒 Security Headers

Already configured in:
- `vercel.json` (for Vercel)
- `netlify.toml` (for Netlify)
- `public/_headers` (for Netlify)

## 📈 Monitoring

### 1. Performance Monitoring
- **Vercel Analytics:** Built-in performance monitoring
- **Google PageSpeed Insights:** Test performance
- **WebPageTest:** Detailed performance analysis

### 2. Error Monitoring
- **Sentry:** Error tracking
- **LogRocket:** Session replay and error tracking

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check for TypeScript errors: `npx tsc --noEmit`
   - Ensure all dependencies are installed: `npm install`

2. **Images Not Loading:**
   - Check file paths in `public/images/`
   - Ensure images are in the correct format

3. **Routing Issues:**
   - Ensure SPA routing is configured
   - Check redirect rules in deployment config

4. **Performance Issues:**
   - Optimize images
   - Check bundle size: `npm run build -- --stats`
   - Use Lighthouse for performance audit

## 📞 Support

For deployment issues:
- **Vercel:** [Vercel Documentation](https://vercel.com/docs)
- **Netlify:** [Netlify Documentation](https://docs.netlify.com)
- **GitHub Pages:** [GitHub Pages Documentation](https://pages.github.com)

---

**Happy Deploying! 🎉** 