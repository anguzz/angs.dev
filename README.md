# angs.dev

My personal site, built with plain HTML, CSS and a little JavaScript. It used to run on Svelte, but I'm too lazy to manage dependencies and frameworks, so now there's no framework, no build step and no dependencies.

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

