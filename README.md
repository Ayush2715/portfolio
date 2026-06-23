# Ayush Singh — Portfolio

A single-page portfolio site built with plain HTML, CSS, and JavaScript
(no build step, no dependencies). Free to host on GitHub Pages.

## Files

```
index.html      → page content
style.css       → all styling
script.js       → mobile nav + KPI count-up animation
assets/Ayush_Singh_Resume.pdf  → downloadable resume (linked from the nav)
```

## Deploy for free on GitHub Pages

1. Create a new repository on GitHub named exactly:
   `<your-github-username>.github.io`
   (Use `ayush2715.github.io` to match the GitHub link already on the site.)
2. Upload these files to the root of that repository (or push via git):
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/ayush2715/ayush2715.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set the source branch to `main`
   and folder to `/ (root)`, then save.
4. Your site will be live in a minute or two at:
   `https://ayush2715.github.io`

## Updating content later

- Resume content lives directly in `index.html` — edit text inside the
  relevant `<section>` (about, experience, projects, skills, education,
  leadership, contact).
- Colors, fonts, and spacing are controlled by CSS variables at the top of
  `style.css` under `:root`.
- To swap the downloadable resume, replace
  `assets/Ayush_Singh_Resume.pdf` with a new PDF of the same filename.

## Alternative free hosts

If you'd rather not use GitHub Pages, drag-and-drop the whole folder onto
[Netlify Drop](https://app.netlify.com/drop) or deploy via
[Vercel](https://vercel.com) — both have generous free tiers for static
sites like this one.
