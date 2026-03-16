# angs.dev

My personal site/portfolio

## Stack

- SvelteKit
- Svelte 4
- Vite 5
- Tailwind CSS


## Project Structure

```text
src/
  lib/
    components/     Shared UI like navigation, footer, and bio
    data/           Content collections for links, music, and posts
    info.js         Site metadata, bio text, and social links
  routes/
    +page.svelte    Homepage
    links/          Cool Links page
    music/          Music Journal page
static/
  bio.png
  favicon.ico
  favicon.png
```

## Content Editing

Most site content is stored in simple JavaScript files:

- Update personal info, bio, and social links in `src/lib/info.js`
- Edit homepage experience cards in `src/routes/+page.svelte`
- Manage bookmarks in `src/lib/data/links.js`
- Manage concert notes in `src/lib/data/music.js`

