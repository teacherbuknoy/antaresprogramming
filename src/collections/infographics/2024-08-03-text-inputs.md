---
title: Mobile Text Inputs
description: Mga tricks para maging mas usable ang mga text input sa mobile browsers.
tags:
  - HTML
templateEngineOverride: md,njk
author: teacherbuknoy
cover:
  folder: baseline
  filename: cover.png
  header: cover.png
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
downloads:
  - label: Infographics
    link: https://ik.imagekit.io/antaresphdev/infographics/baseline/baseline.zip
    details: 1.86 MB, ZIP file
  - label: Cheatsheet
    link: https://ik.imagekit.io/antaresphdev/infographics/baseline/baseline.png
    cover: https://ik.imagekit.io/antaresphdev/tr:w-500/infographics/baseline/baseline.png
    width: 1920
    height: 1080
    details: 469.4 KB, PNG file
related:
  - feature-queries
eleventyExcludeFromCollections: true
---
{% from "meta/utils.njk" import baseline, baselineWithSupport, browserSupport %}

{% set object %}
{% call baselineWithSupport(level = 'available', classes = "tinted margin-block--xl", year = null) %}
  {% set support = "wide-support" %}
  <div class="support-indicator">
    {{ browserSupport(brand = 'chrome', level = support, keys = browsers) | cleanNewLines | safe }}
    {{ browserSupport(brand = 'edge', level = support, keys = browsers) | cleanNewLines | safe }}
  </div>
  <div class="support-indicator">
    {{ browserSupport(brand = 'firefox', level = support, keys = browsers) | cleanNewLines | safe }}
  </div>
  <div class="support-indicator">
    {{ browserSupport(brand = 'safari', level = support, keys = browsers) | cleanNewLines | safe }}
  </div>
  {% endcall %}
{% endset %}
{{ object | cleanNewLines | safe }}



