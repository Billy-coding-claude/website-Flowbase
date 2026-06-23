# Flowbase — marketing website

A fast, multi-page marketing site for Flowbase (web design & content studio, NL).
Plain HTML, CSS, and JavaScript — **no build step, no dependencies**. Bilingual (NL/EN) with a light/dark theme.

## Folder structure
```
/                     site root — deploy this folder as-is
├── index.html        Home
├── services.html     Services
├── pricing.html      Pricing
├── about.html        About
├── contact.html      Contact
├── privacy.html      Privacy policy
├── terms.html        Terms
├── 404.html          Not-found page
├── robots.txt        crawler rules   (must stay at root)
├── sitemap.xml       sitemap         (must stay at root)
├── site.webmanifest  PWA manifest    (must stay at root)
├── assets/
│   ├── css/styles.css   Design system (colors, type, layout, animation)
│   ├── js/script.js     Nav, mobile menu, language (NL/EN), theme, scroll reveal, contact form
│   ├── img/             favicon.svg, og-image.svg
│   └── fonts/           (optional) self-hosted fonts — see assets/fonts/README.md
└── docs/               this README
```

> The HTML pages, `robots.txt`, `sitemap.xml`, and `site.webmanifest` must live at the root —
> moving them would change their public URLs. Everything else lives under `assets/`.

## Run locally
Serve the folder (don't just double-click the file — some features need a server):

```bash
# Python 3
python -m http.server 5173
# or Node
npx serve .
```
Then visit `http://localhost:5173`.

## Deploy
Drag the whole folder onto **Netlify** or **Vercel**, or push to GitHub and connect it.
It's fully static, so any host works — upload the folder as-is.

## Design system
- **Fonts:** Space Grotesk (headings) + Inter (body), loaded from Google Fonts.
  (To self-host instead, see `assets/fonts/README.md`.)
- **Colors:** edit the variables at the top of `assets/css/styles.css` under `:root`
  (`--accent`, `--ink`, `--paper`, …).
- **Copy / languages:** all text lives in the `I18N` object in `assets/js/script.js` (NL + EN).

## Before you launch
1. Connect the contact form to a real backend (Web3Forms / Formspree / Netlify Forms).
   It currently falls back to the visitor's email app (`mailto:`) — see `assets/js/script.js`.
2. Confirm the social links (Instagram / LinkedIn) in the page footers.
3. Add a real founder photo (About section placeholder).
4. Export `assets/img/og-image.svg` → `assets/img/og-image.jpg` (1200×630) for link previews.
5. Set the real domain in `og:url`, `sitemap.xml`, and `robots.txt`.
6. Double-check all prices and plan details.
