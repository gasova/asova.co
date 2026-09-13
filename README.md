# asova.co — personal blog

A blog-first personal site built with [Eleventy](https://www.11ty.dev/), writing posts in
plain Markdown. No database, no CMS — just files.

## Structure

```
src/
  _includes/
    base.njk      ← shared page shell (header, footer, nav)
    post.njk       ← layout used by every blog post
  posts/           ← your posts, one Markdown file each
  css/styles.css
  js/script.js
  index.njk        ← homepage, lists all posts
  about.md         ← About page
  tags.njk         ← generates one page per tag
  tags-index.njk   ← /tags/ overview page
  feed.njk         ← RSS feed at /feed.xml
```

## Writing a new post

Create a new file in `src/posts/`, e.g. `src/posts/my-new-post.md`:

```markdown
---
layout: post.njk
title: My New Post
description: A one-sentence summary shown in the post list and RSS feed.
date: 2026-09-13
tags:
  - posts
  - whatever-topic
---
Write your post in normal Markdown here.

## Headings, lists, code blocks, links — all work as expected.
```

Keep `posts` in the `tags` list (it's how the homepage finds your posts) and add any other
tags you want it filed under. Posts are sorted by `date`, newest first.

## Local development

```bash
npm install
npm run serve
```

This starts a local server (usually `http://localhost:8080`) that rebuilds as you edit files.

## Before you publish

1. Update the placeholder email/GitHub/LinkedIn links in `src/_includes/base.njk` and `src/about.md`.
2. Replace the sample posts in `src/posts/` with your own writing (or keep them as a starting point).
3. Update `https://asova.co` references in `src/feed.njk` if you use a different domain.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the
site with Eleventy and deploys it automatically on every push to `main`.

1. Push this repo to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Initial blog"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**. That's it — the workflow will run on the next push and publish the site.

3. Your site will be live at `https://<your-username>.github.io/<your-repo>/` after the first
   successful run (check the **Actions** tab for progress).

4. To use your own domain (asova.co):
   - In **Settings → Pages**, enter `asova.co` under **Custom domain**.
   - At your DNS provider, add an `A` record for the apex domain (`asova.co`) pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optionally add a `CNAME` record for `www` pointing to `<your-username>.github.io`.
   - Once DNS propagates, check **Enforce HTTPS** in the Pages settings.

Every time you add a post and push to `main`, the site rebuilds and redeploys automatically —
no manual build step needed.
