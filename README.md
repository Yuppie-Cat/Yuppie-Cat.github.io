# Tom Zhou — Academic Website

Personal academic website for Tom Zhou, PhD student in Robotics at Case Western Reserve University (CWRU).

Built with [Jekyll](https://jekyllrb.com/) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on GitHub Pages.

---

## Quick Start: Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in.
2. Create a new repository named exactly: `[your-github-username].github.io`
   - Example: if your username is `tomzhou`, name it `tomzhou.github.io`
3. Set it to **Public**.

### Step 2: Upload This Project

**Option A — Using GitHub Desktop (recommended for beginners):**
1. Download and install [GitHub Desktop](https://desktop.github.com/).
2. Clone your new repository to your computer.
3. Copy all files from this project into the cloned folder.
4. Commit and push.

**Option B — Using Git command line:**
```bash
cd path/to/this/project
git init
git add .
git commit -m "Initial commit: Jekyll academic website"
git branch -M main
git remote add origin https://github.com/[your-username]/[your-username].github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings** → **Pages** (in the left sidebar under "Code and automation").
3. Under **Source**, select **GitHub Actions**.
4. The site will build and deploy automatically. Visit `https://[your-username].github.io` in a few minutes.

---

## Customization Guide

### 1. Update `_config.yml`

Open `_config.yml` and replace the placeholder values:

```yaml
url: "https://[your-github-username].github.io"   # ← your actual URL
repository: "[username]/[username].github.io"       # ← your repo

author:
  links:
    - label: "Google Scholar"
      url: "https://scholar.google.com/citations?user=XXXXXXX"  # ← your Scholar URL
    - label: "GitHub"
      url: "https://github.com/[your-username]"
    - label: "LinkedIn"
      url: "https://linkedin.com/in/[your-profile]"
```

### 2. Replace Placeholder Images

All placeholder images are in `assets/images/`. Replace them with your actual files:

| File | Description |
|------|-------------|
| `avatar.jpg` | Your profile photo (square, ~300×300px) |
| `hero-bg.jpg` | Homepage hero background (wide, ~1600×600px) |
| `paper-hero.jpg` | Paper page header background |
| `paper-thumb.jpg` | Paper thumbnail for homepage feature row |
| `fig1-system-overview.jpg` | Paper Figure 1 |
| `fig2-sensor-design.jpg` | Paper Figure 2 |
| `fig3-load-density.jpg` | Paper Figure 3 |
| `fig4-terrain.jpg` | Paper Figure 4 |
| `video-thumbnail.jpg` | Video poster/thumbnail |

### 3. Add Your Supplementary Video

**Option A — Local video file:**
Replace `assets/videos/supplementary-video.mp4` with your actual video file.

**Option B — YouTube embed:**
In `_pages/force-sensor-2025.md`, find the `<video>` block and replace it with:
```html
<iframe width="100%" height="400" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameborder="0" allowfullscreen></iframe>
```

### 4. Update Personal Information

- **About page:** Edit `_pages/about.md` — fill in your undergraduate institution, degree, and news items.
- **Contact page:** Edit `_pages/contact.md` — replace `#` links with your actual profile URLs.
- **Publications page:** Edit `_pages/publications.md` — add conference papers and preprints.

### 5. Add More Papers

To add another paper, create a new file in `_pages/` following the same structure as `force-sensor-2025.md`, then add a link in `_pages/publications.md`.

---

## Local Development (Optional)

To preview the site locally before pushing:

```bash
# Install Ruby and Bundler first, then:
bundle install
bundle exec jekyll serve
# Open http://localhost:4000 in your browser
```

---

## Site Structure

```
.
├── _config.yml          # Main site configuration
├── _data/
│   └── navigation.yml   # Top navigation menu
├── _pages/
│   ├── about.md         # About page
│   ├── research.md      # Research overview
│   ├── publications.md  # Publications list
│   ├── contact.md       # Contact page
│   ├── force-sensor-2025.md  # Paper detail page
│   └── 404.md           # 404 error page
├── assets/
│   ├── css/main.scss    # Custom styles
│   ├── images/          # Images (replace placeholders)
│   └── videos/          # Video files
├── index.html           # Homepage
├── Gemfile              # Ruby dependencies
└── .github/workflows/
    └── pages.yml        # GitHub Actions deployment
```

---

## Theme Documentation

For full documentation on the Minimal Mistakes theme, visit:
[https://mmistakes.github.io/minimal-mistakes/docs/](https://mmistakes.github.io/minimal-mistakes/docs/)
