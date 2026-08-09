# Harriet Nakwedde — site

Multi-page static site. No build step, no dependencies, no framework — plain
HTML/CSS/vanilla JS. Every page lives in its own folder as `index.html`
(e.g. `/about/index.html`) so it gets a clean URL (`/about`) on any static
host with zero configuration — Vercel, Netlify, GitHub Pages, or a plain web
server all serve a directory's `index.html` automatically.

```
/index.html            home
/about/index.html      Her Story + political journey timeline
/kayunga/index.html    the district
/parliament/index.html In Parliament
/priorities/index.html priorities
/news/index.html       news (empty state — see CONTENT.md)
/speeches/index.html   speeches & statements (empty state)
/contact/index.html    contact
/styles.css            shared design system
/reveal.js             shared scroll-reveal + nav behavior
/images/                photos
/CONTENT.md             source-of-truth reference for every fact on the site —
                        read this before editing copy or adding content
```

Nav and footer markup is duplicated across all 8 pages (there's no templating
layer). If you change nav links or footer copy, update all 8 files — see the
checklist at the bottom of `CONTENT.md`.

All asset references (`/styles.css`, `/images/...`, `/reveal.js`) are
root-relative on purpose, since pages live at different folder depths.

---

## Option A — Netlify (fastest, live in ~1 minute)

1. Go to **https://app.netlify.com/drop**
2. Drag the whole project folder (all pages, `styles.css`, `reveal.js`, `images/`) onto the page
3. Netlify gives you a live URL immediately, e.g. `random-name-123.netlify.app`
4. Optional: click "Site settings" → "Change site name" to get a cleaner URL,
   e.g. `nakwedde-mp.netlify.app`

No account required to get the link, but sign up (free) if you want the site to
persist long-term and be editable later.

---

## Option B — GitHub Pages (better if you're using Claude Code to keep iterating)

1. Create a new repo on GitHub, e.g. `nakwedde-mp-site`
2. Clone it locally:
   ```
   git clone https://github.com/YOUR-USERNAME/nakwedde-mp-site.git
   cd nakwedde-mp-site
   ```
3. Copy all site files into that folder
4. Push it:
   ```
   git add .
   git commit -m "Initial site"
   git push
   ```
5. On GitHub: **Settings → Pages → Source → Deploy from branch → main → / (root)**
6. Your site is live in a minute or two at:
   `https://YOUR-USERNAME.github.io/nakwedde-mp-site/`

---

## Continuing with Claude Code

Once the repo is cloned locally (Option B), open that folder in Claude Code and
you can keep iterating directly — editing copy, swapping photos, adjusting the
design — with every change pushed straight to GitHub Pages on your next `git push`.

If you go with Netlify instead, you can still connect it to the same GitHub repo
later (Netlify → "Import from Git") so pushes auto-deploy instead of manual drag-and-drop.
