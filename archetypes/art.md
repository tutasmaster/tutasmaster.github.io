---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
toc: false
images:
tags:
  - untagged
categories:
  - art
featuredImage: {{ lower .Name | title }}.png
---

