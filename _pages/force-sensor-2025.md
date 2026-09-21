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
<style>
@media (min-width: 48em) {
  .page__hero--overlay {
    background-size: cover, 100% auto;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
  }
}
</style>
  
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

## Research Background
To sense contact force with legs, unlike robot arms for manufacturing or surgery, the end effector sensors need to support weight and impacts due to locomotion, increasing the requirements for strength and load range. The resulting structural requirements generally increase the sensor’s size and mass, often causing it to exceed the limited installation space available on the robot, particularly in centimeter- and decimeter-scale robots. Meanwhile, the total cost of sensors and the weight and size of the sensor's accessories also limits the widespread application of multi-axis force sensors on legged robots. For most commercialized three-dimensional force sensors, their cost can be much higher than most of the other components of a legged robot, while the sensors are usually more fragile and face a higher risk of being damaged and replaced. In addition, the size and weight of the accessories, such as a data collector, impose minimum requirements in the size and load capacity of the robot, which also reduce the robot's effective payload and endurance.

To evaluate the load capacity of sensors with different form factors and sizes, a key metric that we propose is the ***load density***. For contact forces, the force load density (FLD) is defined as the fraction of the maximum force load versus the cross-sectional area, which is equal to the maximum z-axis pressure applied on the sensor. Because torques and moment are also important, the torque load density (TLD) is defined as the fraction of the maximum torque load versus the volume. These ratios are chosen so that both FLD and TLD have comparable units of stress. These load densities affect not only the leg size, but also the placement of the sensor and thus the design of the end effector. Relatively lower torque load density leads to many sensors being installed directly on the tips of the end effector to reduce the length of the lever arm, which leads to larger end effector sizes and more structure requirements for adaption, sealing, and protection. In contrast, a larger torque load density allows the sensor to be installed proximal to the joint, allowing larger or interchangeable end effectors to be installed on the sensor, which increases the modularity of the robot. In addition, if the robot foot is being used to probe wet, dirty, rough, cohesive, or hazardous environments, (e.g. as in amphibious or surf zones), putting the sensor closer to the joint may reduce the risk of sensor damage by avoiding direct contact with sand or stone. 


