# Launch Checklist

## Before deploy

- Review homepage copy for final wording
- Review consultancy copy for final positioning
- Confirm portfolio content is preserved as intended
- Confirm email and LinkedIn links are correct
- Confirm canonical domain is `https://www.brianic.com`

## Vercel setup

- Import the repository into Vercel
- Set production domain to `www.brianic.com`
- Redirect `brianic.com` to `www.brianic.com`
- Confirm HTTPS is active
- Confirm the correct primary domain is selected

## Analytics

- Enable Vercel Web Analytics in the dashboard
- Copy the generated static HTML analytics script
- Paste the script into all page heads
- Redeploy
- Verify page visits appear in the Vercel analytics dashboard

## SEO verification

- Confirm titles are correct on all pages
- Confirm meta descriptions are correct on all pages
- Confirm canonical tags resolve to the right URLs
- Confirm `robots.txt` is publicly accessible
- Confirm `sitemap.xml` is publicly accessible

## UX/UI QA

- Check desktop nav across all pages
- Check mobile menu toggle across all pages
- Check homepage CTA flow
- Check consultancy page readability and CTA flow
- Check contact page link usability
- Check portfolio page for layout consistency
- Confirm portfolio intro no longer feels visually duplicated
- Check scroll behavior on portfolio page
- Check footer links on all pages

## Functional verification

- Verify all internal links work
- Verify outbound links open correctly
- Verify mailto link works
- Verify no obvious console errors in the browser
- Verify relative paths resolve on production domain

## After launch

- Visit each page once on production
- Submit sitemap to Google Search Console later if desired
- Monitor analytics for first traffic
- Keep a short list of post-launch polish items
