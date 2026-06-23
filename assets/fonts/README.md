# Self-hosting the fonts (Fraunces + Inter)

Right now the site loads fonts from **Google Fonts** (the `<link>` in `index.html`'s `<head>`).
Self-hosting makes the first paint a bit faster and removes Google receiving your visitors'
IP addresses (which the privacy page currently has to disclose).

I couldn't download the font binaries in this environment, so this is a 5-minute manual step.

## Steps

1. Go to **https://gwfh.mranftl.com** (google-webfonts-helper).
2. Search **Fraunces** → select weights **400, 500, 600** + the *italic* 500 → download → put the
   `.woff2` files in this `assets/fonts/` folder.
3. Search **Inter** → select weights **400, 500, 600, 700** → download → drop the `.woff2` files here too.
4. In each page's `<head>`, **delete** the three Google Fonts lines (the two `preconnect`s and the
   `fonts.googleapis.com` stylesheet `<link>`).
5. Add this near the top of `assets/css/styles.css` (adjust filenames to match what you downloaded):

```css
/* Fraunces */
@font-face{font-family:'Fraunces';font-style:normal;font-weight:400 600;font-display:swap;
  src:url('../fonts/fraunces-latin-variable.woff2') format('woff2');}
@font-face{font-family:'Fraunces';font-style:italic;font-weight:500;font-display:swap;
  src:url('../fonts/fraunces-italic.woff2') format('woff2');}
/* Inter */
@font-face{font-family:'Inter';font-style:normal;font-weight:400 700;font-display:swap;
  src:url('../fonts/inter-latin-variable.woff2') format('woff2');}
```

6. Optionally add a preload for the two most-used files in `<head>` for an extra speed bump:

```html
<link rel="preload" href="assets/fonts/inter-latin-variable.woff2" as="font" type="font/woff2" crossorigin>
```

That's it — the `--font-display`/`--font-body` variables already reference `'Fraunces'` and
`'Inter'`, so once the `@font-face` rules exist the site uses your local copies automatically.
```
