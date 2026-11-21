// Theme toggle. The initial theme is set by the inline script in <head> (avoids a flash).
const root = document.documentElement;
document.querySelector('.theme-btn')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try {
    // Only store an override when it differs from the OS setting.
    const sys = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    next === sys ? localStorage.removeItem('theme') : localStorage.setItem('theme', next);
  } catch {}
});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch {}
  if (!saved) root.dataset.theme = e.matches ? 'dark' : 'light';
});

// List pages (links, music): search + optional tag filter. Works off the static HTML,
// so no-JS visitors still see everything. Tag buttons only appear if items have data-tag.
const list = document.querySelector('[data-filter]');
if (list) {
  const items = [...list.children];
  const search = document.getElementById('q');
  const count = document.getElementById('count');
  const empty = document.getElementById('empty');
  const tagBox = document.getElementById('tags'); // may be absent

  const tags = ['All', ...new Set(items.map((li) => li.dataset.tag).filter(Boolean))];
  if (tags.length > 1) tagBox.innerHTML = tags.map((t) => `<button type="button" data-tag="${t}">${t}</button>`).join('');

  const params = new URLSearchParams(location.search);
  let active = tags.includes(params.get('tag')) ? params.get('tag') : 'All';
  search.value = params.get('q') || '';

  function render() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    for (const li of items) {
      const ok = (active === 'All' || li.dataset.tag === active) && (!q || li.textContent.toLowerCase().includes(q));
      li.hidden = !ok;
      if (ok) shown++;
    }
    for (const b of tagBox?.children || []) b.setAttribute('aria-pressed', b.dataset.tag === active);
    count.textContent = `${shown} of ${items.length}`;
    empty.hidden = shown > 0;

    // Keep the URL shareable, e.g. /links?tag=Security
    const p = new URLSearchParams();
    if (active !== 'All') p.set('tag', active);
    if (q) p.set('q', q);
    history.replaceState(null, '', p.size ? `?${p}` : location.pathname);
  }

  tagBox?.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (b) { active = b.dataset.tag; render(); }
  });
  search.addEventListener('input', render);
  render();
}

document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
