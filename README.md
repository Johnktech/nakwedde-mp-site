# Harriet Nakwedde — site

Single-file site: `index.html`. No build step, no dependencies — it's plain HTML/CSS
with photos embedded directly in the file, so it works anywhere you drop it.

---

## Option A — Netlify (fastest, live in ~1 minute)

1. Go to **https://app.netlify.com/drop**
2. Drag the whole folder (or just `index.html`) onto the page
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
3. Copy `index.html` into that folder
4. Push it:
   ```
   git add index.html
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
