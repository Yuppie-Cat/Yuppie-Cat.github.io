---
layout: single
title: "Research"
permalink: /research/
author_profile: true
toc: true
toc_label: "Research Topics"
toc_icon: "robot"
---

My research focuses on developing sensing technologies and control strategies that allow legged robots to navigate and interact with complex, unstructured environments. The central theme across my projects is **distal force sensing** — embedding force and torque measurement capability directly into the most peripheral parts of a robot's body, such as its feet and toes.

---

## Force Sensing for Legged Robots

Legged robots operating in natural environments must constantly adapt to unpredictable terrain — loose sand, buried obstacles, varying substrate stiffness. Traditional approaches rely on cameras or external sensors, but these are susceptible to occlusion and environmental noise. My work explores how **integrated foot-end force sensors** can provide reliable, real-time proprioceptive feedback that complements or replaces exteroceptive sensing.

### Key Challenges

- **Load density**: Robot legs must be lightweight and structurally efficient. Conventional force sensors are too heavy or bulky for distal placement.
- **Multi-axis measurement**: Terrain interaction involves forces and torques in multiple directions simultaneously.
- **Low cost and scalability**: Sensors must be manufacturable at low cost to be practical for multi-legged platforms.

### Our Approach

We integrate **strain gauge arrays**, analog-to-digital conversion circuits, and onboard data processing directly into the dactyl (terminal segment) of a crab-scale hexapod robot leg. This approach achieves the highest force load density of any commercially available sensor while maintaining multi-axis measurement capability.

---

## Terrain Differentiation and Object Detection

Beyond simple force measurement, our sensors enable higher-level environmental perception. By analyzing the force signatures produced during leg contact with different substrates, the robot can:

- Classify terrain type (e.g., rigid floor vs. sand vs. gravel)
- Detect objects buried beneath the surface
- Adapt gait and foot placement in real time

This capability is particularly relevant for **search-and-rescue robotics**, **planetary exploration**, and **subsea inspection** — environments where visual sensing is limited or unavailable.

---

## Broader Applications

The sensor integration approach developed in this work is not limited to robot feet. The same design principles can be applied to:

- **Robot hands and fingers** for dexterous manipulation
- **Prosthetic limbs** requiring tactile feedback
- **Medical devices** needing compact, high-sensitivity force measurement
- **Inspection tools** for confined or hazardous environments

---

## Collaborators

This research is conducted in collaboration with the [Biologically Inspired Robotics Lab](https://engineering.case.edu/emae/research/biologically-inspired-robotics) at CWRU, led by **Prof. Kathryn Daltorio**, and in collaboration with co-authors J. Su, K. Zuo, M. Pan, and Z. Chua.
