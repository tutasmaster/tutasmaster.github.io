---
title: "(C++) 3D Roguelike"
date: 2019-01-17T11:10:23+01:00
draft: true
toc: false
images:
preview: roguelike experiment turned into a fancy renderer
tags:
  - untagged
categories:
  - project
  - laptop
  - gamepad
---

Find it [here](https://github.com/tutasmaster/3d-roguelike).

This project consists in an ascii renderer of a 3d world in C++ and LIBTCOD.
The world is seen from a kind of cavalier prespective.

{{<image src="/roguelike/LIBTCODRoguelikeCpp_2019-01-15_22-22-40.png" style="max-height: 400px">}}
Early Iteration of the renderer.

{{<image src="/roguelike/LIBTCODRoguelikeCpp_2019-01-15_18-56-03.png" style="max-height: 400px">}}
Early version wtih harsh shadows.

{{<image src="/roguelike/LIBTCODRoguelikeCpp_qkIcGtdHDB.png" style="max-height: 400px">}}
After learning about gamma correction and tweaking values.

{{<image src="/roguelike/LIBTCODRoguelikeCpp_fE2rxmD8xC.png" style="max-height: 400px">}}
First person rendering system writen a year later.

## Current Features
  - Map generation using noise;
  - Entity system.
  - Map rendering