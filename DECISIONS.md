# Decisions

This file records important project decisions so implementation stays aligned over time.

## Hosting

- Default hosting target: Vercel
- Fallback hosting target: Netlify
- Custom domain will be used

## Architecture

- Site architecture: static multi-page site
- Planned pages:
  - Home
  - Portfolio
  - Consultancy
  - Contact
- Prefer simple static implementation before considering frameworks

## Analytics

- Use lightweight analytics
- Analytics should be dashboard-only
- No visible public visitor counter for v1

## Portfolio rules

- The existing portfolio page content must be preserved in substance
- Experience entries should stay
- Project entries should stay
- Allowed changes:
  - encoding fixes
  - layout improvements
  - readability improvements
  - responsive improvements
  - navigation and structure improvements
- Avoid rewriting portfolio content unless explicitly requested later

## Positioning

- Brian's consultancy/service positioning combines:
  - data engineering
  - data analytics
  - automation services

## Target clients

- startup
- SME
- corporate
- banking
- UMKM

## Primary CTAs

- Hire Me
- Book a Consultation

## Navigation goals

- Homepage should link clearly to portfolio
- Homepage should link clearly to consultancy
- Homepage should link clearly to contact
- Navigation should work well on desktop and mobile

## Implementation principles

- Keep GitHub Pages compatibility optional, but not required
- Optimize for maintainability and clarity
- Preserve technical credibility
- Improve business clarity without turning the site into a generic landing page
