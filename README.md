# brdx88.github.io

Personal website for Brian Cusuanto.

This project is evolving from a single-page portfolio into a multi-page personal website that supports:

- personal brand / homepage
- portfolio and case studies
- consultancy landing page
- contact entry point

## Current direction

- Default hosting target: Vercel
- Fallback hosting target: Netlify
- Custom domain will be used
- Analytics should be lightweight and dashboard-only
- Portfolio content should be preserved in substance during the redesign

## Planned site structure

```txt
/
  index.html
  portfolio/
    index.html
  consultancy/
    index.html
  contact/
    index.html
  assets/
  styles/
  scripts/
```

## Tech approach

- Static multi-page site
- HTML, CSS, JavaScript
- Framework-light by default unless a migration becomes clearly worth it

## Repo context files

Read these first before making major changes:

- `AGENTS.md`
- `PROJECT_BRIEF.md`
- `CONTENT.md`
- `STYLE_GUIDE.md`
- `DECISIONS.md`
- `TODO.md`

## Content and implementation rules

- Do not remove existing portfolio projects or experience entries without clear approval.
- Portfolio content may be reformatted and improved for readability, but should not be rewritten casually.
- Prefer maintainable, low-complexity solutions.
- Keep the design professional, modern, and credible.

## Next milestones

- Create multi-page structure
- Preserve and migrate portfolio content into a dedicated page
- Build homepage, consultancy page, and contact page
- Add responsive site navigation
- Add SEO improvements and lightweight analytics
