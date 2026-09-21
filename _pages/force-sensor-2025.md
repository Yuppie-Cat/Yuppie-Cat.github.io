---
layout: single
title: "A High Load Density Miniature Force Sensor for Probing With Robot Feet"
permalink: /project/DacSeMo/
author_profile: true
toc: false
toc_label: "Paper Contents"
toc_icon: "microchip"
header:
  overlay_color: "#fafafa"
  overlay_filter: "0.15"
  overlay_image: /assets/images/DacSeMo/Robot&Dactyl1.png
  caption: "Published in IEEE RAL"
---

<div class="notice--info publication-info">
  <strong>Published in:</strong> IEEE Robotics and Automation Letters (RA-L), Vol. 11, No. 1, pp. 450–457, Jan. 2026<br>
  <strong>DOI:</strong> 10.1109/LRA.2025.3632679<br>
  <a href="https://ieeexplore.ieee.org/document/11248832"
     target="_blank"
     rel="noopener noreferrer">
    Open Access on IEEE Xplore
  </a>
</div>

<style>
.publication-info {
  font-size: 1.1em !important;
  line-height: 1.7;
}
</style>

---
# DacSeMo
**Dac**tyl **Se**nsing **Mo**dule
![Sensor on Robot]({{ '/assets/images/DacSeMo/Robot&Dactyl1.png' | relative_url }})

## Research Background

To sensorize our small hexapod robot, we propose some requirements on the force sensor.

|Our Requirenment | Existing Sensors|
|--------|------|
| Strong| Low torque range | 
| Small Size | Too big for desired range | 
| Onboard Data Processing | Most need additional data collector and power supply| 
| Cheap | More expensive than the robot | 


## Load Density
To evaluate the load capacity of sensors with different form factors and sizes, a key metric that we propose is the ***load density***. 

Force load density:
$$
FLD = \frac{F_{max}}{A}
$$

Torque load density:
$$
TLD =\frac{T_{max}}{V}
$$

These ratios are chosen so that both FLD and TLD have comparable units of stress(MPa). These load densities affect not only the leg size, but also the placement of the sensor and thus the design of the end effector. Relatively lower torque load density leads to many sensors being installed directly on the tips of the end effector to reduce the length of the lever arm, which leads to larger end effector sizes and more structure requirements for adaption, sealing, and protection. In contrast, a larger torque load density allows the sensor to be installed proximal to the joint, allowing larger or interchangeable end effectors to be installed on the sensor, which increases the modularity of the robot. In addition, if the robot foot is being used to probe wet, dirty, rough, cohesive, or hazardous environments, (e.g. as in amphibious or surf zones), putting the sensor closer to the joint may reduce the risk of sensor damage by avoiding direct contact with sand or stone. 

<figure style="text-align: center;">
  <img
    src="{{ '/assets/images/DacSeMo/load_density.jpg' | relative_url }}"
    alt="Force and torque load density comparison"
    style="width: 60%; height: auto;">
  <figcaption>
    Force and torque load density comparison.
  </figcaption>
</figure>


## Sensor Design and Installation

<video controls playsinline preload="metadata" width="100%">
  <source
    src="{{ '/assets/videos/DacSeMo/installation.mp4' | relative_url }}"
    type="video/mp4">
  Your browser does not support the HTML5 video element.
</video>

## Sensing Mechanism

<video controls playsinline preload="metadata" width="100%">
  <source
    src="{{ '/assets/videos/DacSeMo/Sensing Mechanism.mp4' | relative_url }}"
    type="video/mp4">
  Your browser does not support the HTML5 video element.
</video>

## Simple Structure with Smaller Size
![traditional sensors]({{ '/assets/images/DacSeMo/traditional.jpg' | relative_url }})
Comparing to traditional cross-beam type or column type 3D F/T sneosrs, which use only 1 pair of strain gauges for shear-load meashuring, our DacSeMo uses all 4 strain gauges. This mechanism make DacSeMo need less surfaces and beam structure for measuring, leading to easier manufacturing and installation.

<figure style="text-align: center;">
  <img
    src="{{ '/assets/images/DacSeMo/smaller_size.jpg' | relative_url }}"
    alt="smaller"
    style="width: 50%; height: auto;">
  <figcaption>
    The installation of strain gauges also make DacSeMo available for smaller size: as long as the width($$W$$) is larger than 2 times of strain gauges width ($$W_{SG}$$) and the length of the straight slot ($$L_{SS}$$) is larger than the length of grid ($$L_{grid}$$).
  </figcaption>
</figure>




