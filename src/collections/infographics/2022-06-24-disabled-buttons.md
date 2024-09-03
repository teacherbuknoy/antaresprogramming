---
title: Huwag i-disable ang buttons!
description: Mas accessible na way para pigilan ang actions ng mga user.
slug: disabled-buttons
tags: ["Accessibility"]
templateEngineOverride: md,njk
author: teacherbuknoy
cover:
  folder: disabled-butttons
  filename: cover.png
  header: cover.png
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
downloads:
  - label: Cheatsheet
    link: https://ik.imagekit.io/antaresphdev/infographics/disabled-butttons/disabled-buttons.png
    cover: https://ik.imagekit.io/antaresphdev/tr:w-600/infographics/disabled-butttons/disabled-buttons.png
    width: 1920
    height: 1080
    details: 14.5 MB, PNG file
  - label: Cheatsheet (English)
    link: https://ik.imagekit.io/antaresphdev/infographics/disabled-butttons/disabled-buttons-en.png
    cover: https://ik.imagekit.io/antaresphdev/tr:w-600/infographics/disabled-butttons/disabled-buttons-en.png
    width: 1920
    height: 1080
    details: 14.5 MB, PNG file
related:
  - hindi-lang-para-sa-mga-may-kapansanan-ang-accessibility
---

Kapag dini-disable natin ang mga buttons…

<ul class="list--error">
  <li>Hindi malalaman ng user kung bakit disabled ang button.</li>
  <li>Hindi maa-access ng keyboard (via <kbd>Tab</kbd> key) ang button kasi hindi na ito focusable.</li>
  <li>Mababa ang contrast nito by default. Mahihirapan ang ilang users na makita ito.</li>
</ul>

<div class="code-sample">

```html
<button>Button</button>
<button disabled>Disabled Button</button>
```

<div class="code-result padding--xl">
  <div style="margin-inline: auto; text-align: center">
    <button>Button</button>
    <button disabled>Disabled Button</button>
  </div>
</div>

</div>

## Mas okay na way

<ul class="list--success">
  <li>Instead na gamitin ang <code>disabled</code> attribute, gamitin ang <code>aria-disabled</code>. Ima-mark nito as disabled ang button, pero ikaw ang maglalagay ng functionality at styling para magmukhang disabled ang button.</li>
  <li>Siguruhing puwede pa ring ma-focus ang button gamit ang keyboard. <strong>Huwag</strong> tanggalin ang focus ring kung hindi mo ito papalitan ng sarili mong styling.</li>
</ul>

<div class="code-sample">

```html
<button aria-disabled="true">Button</button>
```

<div class="code-result padding--xl">
  <div style="margin-inline: auto; text-align: center">
    <button aria-disabled="true">Button</button>
  </div>
</div>

</div>

<figure class="image">
  <img src="https://ik.imagekit.io/antaresphdev/infographics/disabled-butttons/aria-disabled-result.png" alt="Ang Accessibility tab sa Firefox DevTools na nagpapakita na may state na 'unavailable' ang isang button na may aria-disabled='true'">
  <figcaption>
    Kapag naka-set ang <code>aria-disabled</code> attribute ng isang button to <code>true</code>, hindi ito visually magmumukhang disabled, pero marked ito bilang unavailable sa mga assistive technology.
  </figcaption>
</figure>

<ul class="list--success">
  <li>Kung kaya, magbigay ng hint sa user kung bakit hindi pa puwedeng i-perform ang action.</li>
</ul>

<div class="code-sample">

```html
<button aria-disabled="true" aria-describedby="disabled-hint">Disabled Button</button>
<p id="disabled-hint">Hindi pa puwedeng i-click ang button. Kailangan munang magbayad.</p>
```

<div class="code-result padding--xl">
  <div style="margin-inline: auto; text-align: center">
    <button aria-disabled="true" aria-describedby="disabled-hint">Disabled Button</button>
    <p style="all: initial; color: inherit; display: block;
    margin-inline: auto; width: var(--content-width);" id="disabled-hint">Hindi pa puwedeng i-click ang button. Kailangan munang magbayad.</p>
  </div>
</div>

</div>

<figure class="image">
  <img src="https://ik.imagekit.io/antaresphdev/infographics/disabled-butttons/aria-describedby.png" alt="Ang Accessibility tab sa Firefox DevTools na nagpapakita na napunta sa description ng button ang content ng paragraph.">
  <figcaption>
    Gamit ang <code>aria-describedby</code> attribute, puwede nating i-connect sa button ang paragraph na <code>#disabled-hint</code>. Magbibigay ito ng additional information sa mga gumagamit ng assistive technologies kung bakit naka-disabled ang button at kung ano ang puwedeng gawin para makapagpatuloy.
  </figcaption>
</figure>

Sa JavaScript, puwedeng i-check ang value ng `aria-disabled` attribute para malaman kung tutuloy ba dapat ang action kapag nakipag-interact ang user sa button:


<div class="code-sample">

```javascript
const shouldContinue = button.getAttribute('aria-disabled') === 'true'
if(shouldContinue) {
  // Ituloy ang action ng user
} else {
  // Magpakita ng hint (e.g. tooltip, modal) na nagpapaliwanag kung 
  // bakit hindi pa puwedeng ituloy ng user ang action na ito at kung 
  // ano ang puwedeng gawin para ma-enable ang button.
}
```

</div>