---
layout: single
author_profile: true

feature_row:
  - image_path: /assets/images/paper-thumb.jpg
    alt: "Force Sensor"
    title: "DacSeMo"
    excerpt: "A miniature force sensor module for robot feet with high load density, enabling terrain differentiation and buried object detection."
    url: "/publications/force-sensor-2025/"
    btn_label: "Read More"
    btn_class: "btn--primary"

  - image_path: /assets/images/research-thumb.jpg
    alt: "Research Overview"
    title: "Research Overview"
    excerpt: "Exploring how legged robots can sense and adapt to complex environments using novel force sensing technologies integrated directly into robot appendages."
    url: "/research/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
---

<style>
/* Prevent long words and links from overflowing */
.page__content p,
.page__content li {
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}

/* Projects section title */
.projects-title {
  margin-top: 1.5em;
  margin-bottom: 1em;
  font-size: 2rem;
  font-weight: 700;
}

/* Display project cards using a three-column grid */
.projects-grid .feature__wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  align-items: stretch;
  margin-bottom: 2rem;
}

/* Override the default Minimal Mistakes feature-row layout */
.projects-grid .feature__item {
  float: none !important;
  clear: none !important;
  width: auto !important;
  margin: 0 !important;
  display: flex;
  flex-direction: column;
}

/* Make the contents of each card fill the available height */
.projects-grid .feature__item .archive__item {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Keep project images consistent */
.projects-grid .feature__item .archive__item-teaser img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

/* Tablet: two projects per row */
@media screen and (max-width: 900px) {
  .projects-grid .feature__wrapper {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile: one project per row */
@media screen and (max-width: 600px) {
  .projects-grid .feature__wrapper {
    grid-template-columns: 1fr;
  }

  .projects-title {
    font-size: 1.75rem;
  }
}
</style>

## Welcome to my website!

---

### About me:

I am currently a PostDoc researcher in CrabLab at [Case Western Reserve University (CWRU)](https://case.edu), working under the supervision of [Prof. Kathryn Daltorio](https://engineering.case.edu/emae/faculty/kathryn-daltorio). My research focuses on legged robots, human-robot interaction, terrain adaptation, and robotic manipulation.

---

### Research Interests:

My research interests include force sensing, legged robot, human-robot interaction, robotic manipulation, and bio-inspired robot design.

---

### Publications:

- [A High Load Density Miniature Force Sensor for Probing With Robot Feet](/publications/force-sensor-2025/)  
  **J. Zhou**, J. Su, K. Zuo, M. Pan, Z. Chua and K. A. Daltorio, "A High Load Density Miniature Force Sensor for Probing With Robot Feet," in *IEEE Robotics and Automation Letters*, vol. 11, no. 1, pp. 450-457, Jan. 2026, doi: [10.1109/LRA.2025.3632679](https://doi.org/10.1109/LRA.2025.3632679).  
  *Published in [IEEE Robotics and Automation Letters (RA-L)](/publications/force-sensor-2025/)*

---

<h2 class="projects-title">My Projects</h2>

<div class="projects-grid">
  {% include feature_row %}
</div>
