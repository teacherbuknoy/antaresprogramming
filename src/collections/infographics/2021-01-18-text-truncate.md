---
title: Truncate text
description: Putulin ang isang line ng text kapag nag-overflow na ito at lagyan ng ellipsis sa dulo.
slug: text-truncate
tags:
  - CSS
templateEngineOverride: md,njk
author: teacherbuknoy
cover:
  folder: text-truncate
  filename: cover.png
  header: cover.png
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
downloads:
  - label: Cards
    link: https://cdn.antaresph.dev/downloads/text-truncate.zip
    details: 1.51 MB, ZIP file
  - label: Cheatsheet
    link: https://ik.imagekit.io/antaresphdev/infographics/text-truncate/text-truncate.png
    cover: https://ik.imagekit.io/antaresphdev/tr:w-500/infographics/text-truncate/text-truncate.png
    width: 1920
    height: 1080
    details: 819 KB, PNG file
related:
  - feature-queries
resources:
  - https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
  - https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
  - https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
---
{% from "meta/utils.njk" import baseline, baselineWithSupport, browserSupport %}

<style>
  .one-line {
    outline: 2px dashed red;
    outline-offset: 5px;
  }

  .d-flex:has(.baseline) {
    display: grid;
    gap: 0;

    h2, h3, h4, h5, h6 {
      margin-block-end: 0;
    }

    .baseline {
      padding-inline:0 ;
      padding-block-start: 0;
    }
  }
</style>

Gamit ang ilang lines of code sa CSS, puwedeng putulin ang isang paragraph para maging isang line lang at lagyan ng ellipsis sa dulo nito.

Halimbawa, sa code samples na ito:

<div class="code-sample">

```html
<p class="one-line">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui vero assumenda facilis maiores laudantium, quis dolor quia mollitia itaque? Error totam hic repudiandae ratione, adipisci quam dolore accusantium architecto?</p>
```

<div class="code-result  padding-block--l">
<p class="one-line margin--none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui vero assumenda facilis maiores laudantium, quis dolor quia mollitia itaque? Error totam hic repudiandae ratione, adipisci quam dolore accusantium architecto?</p>
</div>

</div>

<div class="d-flex">

## white-space: nowrap

{% set support = "wide-support" %}
<div class="baseline">
  <div class="browsers">
    <div class="support-indicator">
      {{ browserSupport(brand = 'chrome', level = support, keys = browsers) | cleanNewLines | safe -}}
      {{ browserSupport(brand = 'edge', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'firefox', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'safari', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
  </div>
</div>

</div>


Ini-indicate ng `white-space` property kung paano dapat i-handle ng browser ang white spaces (e.g. space, tab, `<br>`, new line) sa isang element.

Kapag naka-set ito to `nowrap`, hindi nito hahayaang mag-wrap ang text papunta sa new line kapag wala nang available space.

<div class="code-sample">

```css
.one-line {
  white-space: nowrap;
}
```

<div class="code-result padding-block--l">
<p style="white-space: nowrap;" class="one-line margin--none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui vero assumenda facilis maiores laudantium, quis dolor quia mollitia itaque? Error totam hic repudiandae ratione, adipisci quam dolore accusantium architecto?</p>
</div>

</div>







<div class="d-flex">

## overflow: hidden

{% set support = "wide-support" %}
<div class="baseline">
  <div class="browsers">
    <div class="support-indicator">
      {{ browserSupport(brand = 'chrome', level = support, keys = browsers) | cleanNewLines | safe -}}
      {{ browserSupport(brand = 'edge', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'firefox', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'safari', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
  </div>
</div>

</div>

Ini-indicate ng `overflow` kung ano ang mangyayari kapag lumampas ang content sa container nito. Kapag `hidden` ang value, itatago ng browser ang lahat ng content na nag-overflow sa element.

<div class="code-sample">

```css
.one-line {
  white-space: nowrap;
  overflow: hidden
}
```

<div class="code-result padding-block--l">
<p style="white-space: nowrap; overflow: hidden;" class="one-line margin--none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui vero assumenda facilis maiores laudantium, quis dolor quia mollitia itaque? Error totam hic repudiandae ratione, adipisci quam dolore accusantium architecto?</p>
</div>

</div>







<div class="d-flex">

## text-overflow: ellipsis

{% set support = "wide-support" %}
<div class="baseline">
  <div class="browsers">
    <div class="support-indicator">
      {{ browserSupport(brand = 'chrome', level = support, keys = browsers) | cleanNewLines | safe -}}
      {{ browserSupport(brand = 'edge', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'firefox', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
    <div class="support-indicator">
      {{ browserSupport(brand = 'safari', level = support, keys = browsers) | cleanNewLines | safe -}}
    </div>
  </div>
</div>

</div>

Ini-indicate ng `text-overflow` property kung paano ipapakita na may nag-overflow na content. Kapag `ellipsis` ang value nito, maglalagay ang browser ng ellipsis (“…”).

<div class="code-sample">

```css
.one-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

<div class="code-result padding-block--l">
<p style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" class="one-line margin--none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius qui vero assumenda facilis maiores laudantium, quis dolor quia mollitia itaque? Error totam hic repudiandae ratione, adipisci quam dolore accusantium architecto?</p>
</div>

</div>