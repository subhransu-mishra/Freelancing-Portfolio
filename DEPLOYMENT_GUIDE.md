# Deployment Guide - Fixing SPA Routing Issues

## Problem

When directly accessing routes like `/about` or `/services` on a live server, you get a 404 error. This happens because the server tries to find a file at that path instead of serving `index.html`.

## Solutions Implemented

### 1. For Render.com (Current Deployment)

**Created `render.yaml` at project root:**

- Configures Render to rewrite all routes to `/index.html`
- Ensures SPA routing works correctly

**Deployment Steps on Render.com:**

1. Go to your Render dashboard
2. Select your web service
3. Go to Settings → Redirects/Rewrites
4. Add rewrite rule: Source: `/*` → Destination: `/index.html`
5. Or use the `render.yaml` file (automatically detected)

### 2. Fallback Solutions

**Created `_redirects` file in `/public`:**

- Works with Netlify, Render, and similar platforms
- Automatically included in build output

**Created `404.html` in `/public`:**

- Catches 404 errors and redirects to index.html
- Preserves the route in sessionStorage

**Created `.htaccess` in `/public`:**

- For Apache servers
- Rewrites all requests to index.html

**Created `vercel.json` in `/public`:**

- For Vercel deployments
- Configures proper route rewrites

### 3. Client-Side Handling

**Updated `index.html`:**

- Added script to handle redirects from 404.html
- Restores the original route after redirect

## How It Works

1. User visits `webnexity.com/about`
2. Server doesn't find `/about` file
3. Server serves `index.html` (via rewrite rules)
4. React Router takes over and renders the About page

## Deployment Checklist

✅ Build the project: `npm run build`
✅ Ensure `dist` folder contains all public files
✅ Configure server redirects (Render.com settings or render.yaml)
✅ Deploy and test all routes
✅ Test direct URL access: `/about`, `/services`, `/works`

## Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

Then try accessing:

- http://localhost:4173/
- http://localhost:4173/about
- http://localhost:4173/services
- http://localhost:4173/works

All routes should work without 404 errors.

## Platform-Specific Configuration

### Render.com

Use `render.yaml` or add rewrite rule in dashboard

### Netlify

Use `_redirects` file (already created)

### Vercel

Use `vercel.json` (already created)

### Apache

Use `.htaccess` (already created)

### Express Server

Add this to your server:

```javascript
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
```

## Files Created

- `render.yaml` - Render.com configuration
- `public/_redirects` - Universal redirect file
- `public/404.html` - Fallback 404 handler
- `public/.htaccess` - Apache configuration
- `public/vercel.json` - Vercel configuration
- Updated `index.html` - Client-side redirect handling

## Important Notes

⚠️ After deploying, clear browser cache and test
⚠️ Some platforms auto-detect configuration files
⚠️ Check your platform's documentation for specific setup

## Support

If issues persist:

1. Check server logs
2. Verify build output includes all files
3. Test with browser DevTools Network tab
4. Ensure server is configured to serve SPA
