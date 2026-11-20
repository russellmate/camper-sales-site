# JR Camper Conversions

The website for JR Camper Conversions, a workshop in Buxton, Derbyshire, that converts Customers' panel vans into camper vans to order.

The domain language (Conversion, Upgrade, Build, Stage, Customer, Enquiry, Quote) is defined in [CONTEXT.md](./CONTEXT.md). Use those words in code and copy.

Built with [Astro](https://astro.build), plain CSS and a little JavaScript. Hosted on Netlify, with Enquiries handled by Netlify Forms.

## Working on the site

You need Node 22.

```sh
npm install
npm run dev       # local site at http://localhost:4321
npm run build     # type-check, build to dist/, then check every internal link
npm run preview   # serve the built site
```

`npm run build` is also what Netlify runs, so a broken link or a Build with missing alt text fails the deploy instead of going live.

## Adding a Build

1. Create a folder in `src/content/builds/`, named after the van (e.g. `blue-transit-custom`).
2. Put the photos in it, with lowercase hyphenated names (`front-before.jpg`, not `Front before.jpg`). Full-size originals are fine: Astro makes the small, compressed versions.
3. Copy `index.md` from an existing Build and fill it in. Each Stage needs a title, a description and at least one photo, and every photo needs alt text.

The new Build appears on the Builds page and gets its own page automatically.

## Business details

Phone, email and address live in `src/site.ts` and are used everywhere. Change them there.

`SITE_IS_DRAFT` in the same file keeps search engines away while the copy is still a placeholder. Set it to `false` at launch.

## Netlify setup (one-off)

1. In Netlify, choose **Add new project → Import an existing project** and pick this GitHub repo. The build settings come from `netlify.toml`.
2. Under **Project configuration → Forms**, enable **form detection**, then redeploy.
3. Under **Forms → Form notifications**, add an email notification for the `enquiry` form to `jrcampervans@gmail.com`.
4. Send a test Enquiry from the live Netlify URL and check that it arrives.

Netlify's free plan has 300 credits a month, and each production deploy uses 15. Work on branches and merge to `main` in batches. If the credits run out, the site pauses and stops receiving Enquiries.

## Review copy on GitHub Pages

While the rebuild is on a `rebuild/...` branch, every push publishes a review copy to
https://russellmate.github.io/camper-sales-site/ (see `.github/workflows/review-copy.yml`).
It is built with a `/camper-sales-site/` base path, and its Enquiry form is switched off,
because Enquiries need Netlify. Pages must be set to deploy from the `gh-pages` branch.

Internal links must go through `url()` from `src/url.ts` so they work on both hosts.

## Going live checklist

- [ ] JR has approved all copy, and the "Draft" notes are gone
- [ ] `SITE_IS_DRAFT` set to `false`
- [ ] Enquiry notifications reach JR's inbox
- [ ] Repo renamed to `jr-camper-conversions`
- [ ] GitHub Pages switched off (Settings → Pages)
- [ ] Netlify project moved to an account JR owns, before a domain is bought
