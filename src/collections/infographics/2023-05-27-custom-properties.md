---
title: Custom Properties—Part 1
description: Custom CSS properties na puwedeng gamitin sa maraming bagay
tags: ["CSS"]
templateEngineOverride: md,njk
author: teacherbuknoy
cover:
  folder: custom-properties
  filename: cover.png
  header: cover.png
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
downloads:
  - label: Cards
    link: https://cdn.antaresph.dev/downloads/custom-properties-1.zip
    details: 1.01 MB, ZIP file
  - label: Cheatsheet
    link: https://ik.imagekit.io/antaresphdev/infographics/custom-properties/custom-property.png
    cover: https://ik.imagekit.io/antaresphdev/tr:w-500/infographics/custom-properties/custom-property.png
    width: 1920
    height: 1080
    details: 4.38 MB, PNG file
related: null
---

## Syntax

### Declaration

<style>
  .code-diagram {
    border: var(--border);
    counter-reset: anchorcounter;
    display: grid;
    grid-template-areas: "var-name punctuation-colon . any-value punctuation-semicolon";
    grid-template-columns: auto min-content 1ch auto min-content;
    justify-content: start;
    padding: 1rem;
  }

  #code-var-name {
    color: hsl(var(--primary-700));
  }

  #code-any-value {
    color: hsl(var(--secondary-700));
  }

  .label-description::after,
  .anchor {
    align-items: center;
    align-self: center;
    aspect-ratio: 1/1;
    background-color: hsl(var(--d-secondary-500));
    border-radius: 100%;
    border: 2px solid hsl(var(--d-secondary-900));
    box-shadow: 0 4px 8px hsl(0 0 0 / 25%);
    color: hsl(var(--d-secondary-900));
    counter-increment: anchorcounter;
    display: flex;
    height: 1em;
    justify-content: center;
    justify-self: end;  
    transform: translateX(50%) translateY(-100%);
  }
  .label-description::after,
  .anchor::before {
    line-height: 1;
    content: counter(anchorcounter);
    font-size: 0.75rem;
  }

  .label-container {
    counter-reset: labelcounter;
  }

  .label-description {
    counter-increment: labelcounter;
    --padding: 1ch;
    grid-template-columns: min-content min-content auto;
    grid-template-rows: var(--padding) auto auto var(--padding);
    column-gap: 2ch;
    margin: 2em;
    display: grid;

    &::before {
      content: '';
      grid-area: 1/2/-1/3;
      border-right: var(--label-pointer-width, 1px) solid hsl(from currentColor h s l / 25%);
    }

    &::after {
      content: counter(labelcounter);
      grid-area: 2/1/3/2;
      height: 1.5rem;
      transform: none;
      box-shadow: none;
    }

    h4 {
      font-size: 1em;
      grid-area: 2/3/3/4;
      margin: 0;
    }

    ul {
      margin: 0;
    }

    .label-content {
      grid-area: 3/3/4/4;
    }
  }
</style>
<div class="code-diagram" id="syntax--declaration">
  <code id="code-var-name" style="grid-area: var-name">--var-name</code>
  <code style="grid-area: punctuation-colon">:</code>
  <code id="code-any-value" style="grid-area: any-value">red</code>
  <code style="grid-area: punctuation-semicolon">;</code>
  <a class="anchor" style="anchor-name: --var-name; grid-area: var-name" href="#description-var-name" id="label-var-name" aria-describedby="description-var-name" aria-labelledby="code-var-name"></a>
  <a class="anchor" style="anchor-name: --any-value; grid-area: any-value" href="#description-any-value" id="label-any-value" aria-describedby="description-any-value" aria-labelledby="code-any-value"></a>
</div>

<div class="label-container">
  <article class="label-description">
    <h4 class="label-title" id="description-var-name">
      <a href="#label-var-name">Pangalan ng variable</a>
    </h4>
    <div class="label-content">
      <ul>
        <li>Kailangang magsimula sa dalawang dash.</li>
        <li>Puwedeng may dash sa pagitan ng mga salita.</li>
        <li>Bawal magsimula sa number.</li>
      </ul>
    </div>
  </article>

  <article class="label-description">
    <h4 class="label-title" id="description-any-value">
      <a href="#label-any-value">Assignment ng value</a>
    </h4>
    <div class="label-content">
      <ul>
        <li>Puwede kahit anong value.</li>
        <li>String, number, color, length (px, em, rem, etc.), angle (deg, rad)</li>
      </ul>
    </div>
  </article>
</div>

### Usage

<style>
  #syntax--usage {
    grid-template-columns: auto min-content 1ch auto auto auto min-content;
    grid-template-areas:
      "selector selector selector selector selector selector selector"
      "cssproperty punctuation-colon . varfunc varfuncval varfuncclose punctuation-semicolon"
      "lastrow lastrow lastrow lastrow lastrow lastrow lastrow";
  }
</style>
<div class="code-diagram" id="syntax--usage">
  <code style="grid-area: selector"><span class="token selector">.element</span> <span>{</span></code>
  <code id="code-property" style="grid-area: cssproperty; margin-inline-start: 2ch;"><span class="token attr-name">color</span></code>
  <code style="grid-area: punctuation-colon"> :</code>
  <code id="code-varfunc" style="grid-area: varfunc;"><span class="token function">var(</span></code>
  <code id="code-varfuncval" style="grid-area: varfuncval;"><span class="token attr-value">--var-name</span></code>
  <code id="code-varfuncclose" style="grid-area: varfuncclose;"><span class="token function">)</span></code>
  <code style="grid-area: punctuation-semicolon"> ;</code>
  <code style="grid-area: lastrow">}</code>
  <a class="anchor" style="anchor-name: --property; grid-area: cssproperty" href="#description-property" id="label-property" aria-describedby="description-property" aria-labelledby="code-property"></a>
  <a class="anchor" style="anchor-name: --varfunc; grid-area: varfunc" href="#description-varfunc" id="label-varfunc" aria-describedby="description-varfunc" aria-labelledby="code-varfunc"></a>
  <a class="anchor" style="anchor-name: --varfuncval; grid-area: varfuncval" href="#description-varfuncval" id="label-varfuncval" aria-describedby="description-varfuncval" aria-labelledby="code-varfuncval"></a>
</div>

<div class="label-container">
  <article class="label-description">
    <h4 class="label-title" id="description-property">
      <a href="#label-property">CSS Property</a>
    </h4>
    <div class="label-content">
      <p>Puwedeng gamitin sa kahit anong CSS property ang mga dinecalre mong variable.</p>
    </div>
  </article>
  <article class="label-description">
    <h4 class="label-title" id="description-varfunc">
      <a href="#label-varfunc"><code>var()</code></a>
    </h4>
    <div class="label-content">
      <p>CSS function na kukuha ng value ng variable.</p>
    </div>
  </article>
  <article class="label-description">
    <h4 class="label-title" id="description-varfuncval">
      <a href="#label-varfuncval">Pangalan ng variable/custom property</a>
    </h4>
    <div class="label-content">
      <p>Ang CSS variable na dineclare mo at nilagyan ng value.</p>
    </div>
  </article>
</div>

<div class="code-sample">

```css
.element {
  --fg-color: red;
  color: var(--fg-color);
}
```

<div class="code-result">
  <p style="--fg-color:red; color:var(--fg-color);">.element</p>
</div>

</div>

### As a color component

Dahil puwedeng mag-store ng kahit anong value ang mga custom property, puwede tayong mag-store ng numerical value na gagamitin natin bilang color component.

Sa example na ito, ginamit natin ang `hsl()` function para bigyan ng white background ang mga `.element`, pero gumamit tayo ng `--opacity` para sa opacity ng kulay.

<div class="code-sample">

```css
.element {
  --opacity: 50%;
  background-color: hsl(0deg 100% 100% / var(--opacity));
}
```

<div class="code-result">
  <p style="--opacity: 50%; background-color: hsl(0deg 100% 100% / var(--opacity));aspect-ratio: 1/1;width: min-content;margin: auto;padding: 1rem;display: flex;align-items: center;color: black;">.element</p>
</div>

</div>