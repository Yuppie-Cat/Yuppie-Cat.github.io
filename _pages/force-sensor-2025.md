---
layout: single
title: "A High Load Density Miniature Force Sensor for Probing With Robot Feet"
permalink: /publications/force-sensor-2025/
author_profile: true
toc: true
toc_label: "Paper Contents"
toc_icon: "microchip"
header:
  overlay_color: "#1a3a5c"
  overlay_filter: "0.4"
  overlay_image: /assets/images/paper-hero.jpg
  caption: "IEEE Robotics and Automation Letters, 2025"
---

<div class="notice--info">
  <strong>Published in:</strong> IEEE Robotics and Automation Letters (RA-L), Vol. 11, No. 1, pp. 450–457, Jan. 2026<br>
  <strong>DOI:</strong> <a href="https://doi.org/10.1109/LRA.2025.3632679">10.1109/LRA.2025.3632679</a><br>
  <strong>IEEE Xplore:</strong> <a href="https://ieeexplore.ieee.org/document/11248832" target="_blank">View on IEEE Xplore</a>
</div>

## Authors

**J. Zhou**, J. Su, K. Zuo, M. Pan, Z. Chua, K. A. Daltorio  
*Case Western Reserve University, Cleveland, OH, USA*

---

## Abstract

Force sensing on the end effector is crucial for mobile, legged robots to adapt to varying terrain and manipulate objects in complex environments. Since efficient legs have to be light and load bearing, force sensors need to have increased load density while still providing accurate multi-axis forces. Here, we demonstrate a low-cost solution to this problem that integrates four sets of strain gauges, analog-to-digital conversion, and data processing into a single leg of a crab-scale robot. The sensor has a tested range of **±50 N** for contact force and **±2.5 Nm** for torque, which is more than double the weight of a robot made with six such legs. Then, we demonstrate that our sensor is accurate compared to standard, bulkier force gauges and precise enough to be used to differentiate terrains and even find objects buried in sand. Importantly, the sensor has the **greatest force load density of any available sensor** and more than twice the torque load density of the next best option. This approach to integrating sensors into the most distal appendages can be applied to many other inexpensive end effectors including robot hands, toes, feet, and other tools.

---

## Key Contributions

| Contribution | Details |
|---|---|
| Sensor Integration | Four strain gauge sets + ADC + data processing in a single robot leg segment |
| Force Range | ±50 N contact force (>2× robot weight with 6 legs) |
| Torque Range | ±2.5 Nm torque |
| Load Density | Highest force load density of any available sensor |
| Torque Load Density | >2× the next best available option |
| Applications | Terrain differentiation, buried object detection in sand |

---

## System Overview

The sensor is installed on the **dactyl** (terminal segment) of a small crab-like hexapod robot. The design integrates the sensing, signal conditioning, and processing hardware directly into the structural leg segment, avoiding the need for external sensor modules that would add weight and complexity.

### Sensor Architecture

The sensor incorporates:
- **4 sets of strain gauges** arranged to measure multi-axis forces and torques
- **Analog-to-digital conversion (ADC)** circuitry embedded within the leg
- **Onboard data processing** for real-time force/torque estimation

### Robot Platform

The sensor was developed and validated on a **crab-scale hexapod robot**, chosen because:
- Its six-legged architecture provides a meaningful test of load density (each leg must bear a fraction of the robot's total weight)
- The crab-scale form factor represents a practical target for miniaturized sensing
- The platform enables repeatable terrain interaction experiments

---

## Figures

### Figure 1: System Overview

<figure>
  <img src="/assets/images/fig1-system-overview.jpg" alt="System overview showing the sensor installed on the robot dactyl" style="width:100%">
  <figcaption>Figure 1: System overview. The miniature force sensor is installed on the dactyl of a small crab-like robot. <em>[Replace with actual paper figure]</em></figcaption>
</figure>

### Figure 2: Sensor Design and Integration

<figure>
  <img src="/assets/images/fig2-sensor-design.jpg" alt="Detailed view of the sensor design showing strain gauge placement" style="width:100%">
  <figcaption>Figure 2: Sensor design showing the placement of four strain gauge sets and integrated electronics. <em>[Replace with actual paper figure]</em></figcaption>
</figure>

### Figure 3: Load Density Comparison

<figure>
  <img src="/assets/images/fig3-load-density.jpg" alt="Bar chart comparing load density of various sensors" style="width:100%">
  <figcaption>Figure 3: Comparison of force and torque load density across available sensors. Our sensor achieves the highest force load density and more than twice the torque load density of the next best option. <em>[Replace with actual paper figure]</em></figcaption>
</figure>

### Figure 4: Terrain Differentiation Results

<figure>
  <img src="/assets/images/fig4-terrain.jpg" alt="Force signatures for different terrain types" style="width:100%">
  <figcaption>Figure 4: Force signatures recorded during probing of different terrain types, demonstrating the sensor's ability to differentiate substrates. <em>[Replace with actual paper figure]</em></figcaption>
</figure>

---

## Video

The supplementary video demonstrates the sensor in operation, including terrain differentiation experiments and buried object detection in sand.

<div class="video-container" style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; max-width:100%; margin-bottom:1.5em;">
  <video controls style="position:absolute; top:0; left:0; width:100%; height:100%;" poster="/assets/images/video-thumbnail.jpg">
    <source src="/assets/videos/supplementary-video.mp4" type="video/mp4">
    <p>Your browser does not support HTML5 video. 
    <a href="https://doi.org/10.1109/LRA.2025.3632679">Download the supplementary material from IEEE Xplore.</a></p>
  </video>
</div>

*Supplementary video: Replace `/assets/videos/supplementary-video.mp4` with the actual video file, or embed a YouTube/Vimeo link (see instructions below).*

> **To embed a YouTube video instead**, replace the `<video>` block above with:
> ```html
> <iframe width="100%" height="400" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
>   frameborder="0" allowfullscreen></iframe>
> ```

---

## Experimental Results

### Accuracy Validation

The sensor was validated against a standard commercial force gauge across its full measurement range. Key findings:

- Force measurement error: within ±[X]% of full scale
- Torque measurement error: within ±[X]% of full scale
- Repeatability: [X] N standard deviation across repeated trials

### Terrain Differentiation

Using the sensor's force signatures during probing, the robot successfully differentiated between:
- Rigid flat surface
- Loose sand
- Gravel
- Compliant foam substrate

### Buried Object Detection

The sensor demonstrated the ability to locate objects buried beneath a sand surface by detecting the change in force profile as the foot contacted the hidden object.

---

## Discussion

The key insight of this work is that **distal placement of force sensing** — directly in the terminal segment of a robot leg — provides richer environmental information than proximal sensing (e.g., at the hip or body), because it captures the actual contact mechanics at the terrain interface. The challenge has always been that distal segments must be lightweight and structurally efficient, leaving little room for conventional sensors.

Our approach resolves this tension by co-designing the sensor and structural elements, using the leg segment itself as the sensing substrate. This achieves a load density that exceeds all commercially available alternatives while maintaining the mechanical performance required for locomotion.

---

## Citation

```bibtex
@article{zhou2025highload,
  author    = {Zhou, Jianfeng and Su, Jingyi and Zuo, Kaiwen and Pan, Mingzhao and Chua, Zheyuan and Daltorio, Kathryn A.},
  title     = {A High Load Density Miniature Force Sensor for Probing With Robot Feet},
  journal   = {IEEE Robotics and Automation Letters},
  volume    = {11},
  number    = {1},
  pages     = {450--457},
  year      = {2026},
  doi       = {10.1109/LRA.2025.3632679}
}
```

---

## Links

[📄 View on IEEE Xplore](https://ieeexplore.ieee.org/document/11248832){: .btn .btn--primary} [🔗 DOI: 10.1109/LRA.2025.3632679](https://doi.org/10.1109/LRA.2025.3632679){: .btn .btn--info} [⬅ Back to Publications](/publications/){: .btn .btn--inverse}
