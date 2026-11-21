# angs.dev

My personal site. Plain HTML, CSS and a little JavaScript. No framework, no build step, no dependencies.

## Files

```text
index.html    Home: bio, socials, experience
links.html    Cool Links (tag filter + search)
music.html    Music Journal (search)
style.css     All styles, light/dark via CSS variables
main.js       Theme toggle, list search/filter, footer year
vercel.json   Clean URLs (/links -> links.html)
bio.png, favicon.*
```

## Editing

- **Bio / socials / experience:** edit `index.html` directly.
- **Add a link:** copy an `<li>` in `links.html`. The `data-tag` attribute decides which filter button it shows under; new tags get a button automatically.
- **Add a concert:** copy an `<li>` in `music.html`.

Filters are shareable: `/links?tag=Security`, `/links?q=usb`.

## Run locally

```sh
npx serve .        # or just double-click index.html (all paths are relative)
# or: python3 -m http.server
```

## Deploy

Vercel: set Framework Preset to **Other**, with no build command and the output directory set to the repo root. `vercel.json` handles clean URLs.
GitHub Pages / Netlify / Cloudflare Pages also work as-is; all of them serve `links.html` at `/links`.
