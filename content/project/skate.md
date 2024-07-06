---
title: "(GODOT) Woop Skate"
date: 2024-07-06T23:16:44+01:00
draft: true
toc: false
images:
preview: Recreation of Tony Hawk physics using raycasts.
tags:
  - untagged
categories:
  - project
  - brush
  - laptop
  - gamepad
---

Get it [here](https://tutasmaster.itch.io/woop-skateboard)!\
Find the source code [here](https://github.com/tutasmaster/skateboard)!

Tony hawk physics inspired system, made with the intention of learning how to implement similar game mechanics.

Relies mostly on raycasts for handling collision and physics resolution. This project was made as an exercise in making a character controller and achieving arcade physics.

## Features (some might only exist in git)
- Tricks:
  - Ollies
  - Flips
  - Grinds
  - Manuals
  - Extensions to Manuals and Grinds
  - Wallplants
  - Spine Transfers
  - Acid Drops
- Vert Gameplay
- Scoring
- Balance Meter
- Debug menu for modifying/saving all of the physics constants

## Character States

The character is built of the following states:
- Grounded
  - Bailing
  - Manual
- Airborne
- Grinding
- Vert 

The vert state is special because instead of moving in 3d, the player can only move in 2d plane that is defined as a curved surface above the quarter pipe. 



{{<image src="/skate.png" position="center">}}