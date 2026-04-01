# Deployment

## Default target

- Primary hosting: Vercel
- Fallback hosting: Netlify
- Production domain: `www.brianic.com`
- Redirect domain: `brianic.com` -> `www.brianic.com`

## Vercel setup notes

### 1. Import the repository

- Create a new Vercel project from this repository.
- Because this is a static multi-page site, no framework preset is required.

### 2. Build settings

Recommended defaults for this repo:

- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty
- Install Command: leave empty

This site is plain HTML/CSS/JS, so Vercel can serve it directly.

### 3. Domain setup

- Add `brianic.com` and `www.brianic.com` in the Vercel project domain settings.
- Update your DNS records at your domain registrar to point to Vercel.
- Set `www.brianic.com` as the primary production domain.
- Redirect apex `brianic.com` to `www.brianic.com`.

### 4. Web Analytics

This repo already includes the `window.va` bootstrap script and placeholders in page `<head>` sections.

After enabling Web Analytics in the Vercel dashboard:

1. Open the project in Vercel
2. Enable Web Analytics
3. Copy the generated script tag for static HTML
4. Paste that script tag into:
   - `index.html`
   - `portfolio/index.html`
   - `consultancy/index.html`
   - `contact/index.html`

Reference:

- https://vercel.com/docs/analytics
- https://vercel.com/docs/analytics/quickstart

### 5. Production verification

After deployment, verify:

- homepage loads correctly
- `portfolio/` loads correctly
- `consultancy/` loads correctly
- `contact/` loads correctly
- custom domain resolves correctly
- no broken relative asset paths
- mobile menu works
- portfolio section navigation still works
- analytics appears in Vercel dashboard after traffic arrives

## Netlify fallback

If Vercel is not used:

- publish directory should be the repo root
- no build command is needed
- custom domain and HTTPS should be configured in Netlify dashboard
- analytics would need a separate setup path
