# brianic.com

Personal portfolio of Brian Cusuanto — Data Engineer. Static site, no build step: plain HTML, CSS and vanilla JavaScript.

## Files

- `index.html` — single page (hero, about, experience, projects, skills, contact)
- `style.css` — design tokens, layout, light/dark theme
- `script.js` — theme toggle, mobile nav, scroll-spy, reveal-on-scroll
- `CNAME` — custom domain (`brianic.com`); required for GitHub Pages
- `ref/` — source material (resume, notes); not part of the published site

## Local preview

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Deploy

Served by GitHub Pages from the default branch of `brdx88/brdx88.github.io`. Keep `CNAME` at the repository root and leave **Settings → Pages → Enforce HTTPS** enabled.
