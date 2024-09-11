---
title: Idiomatic text tag
description: Para saan na ginagamit ang &lt;i> tag ngayon?
slug: idiomatic-text
tags:
  - html
templateEngineOverride: md,njk
author: teacherbuknoy
cover:
  folder: idiomatic-text
  filename: "idiomatic-text 1.png"
  header: "idiomatic-text 1.png"
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
downloads:
  - label: Cards
    link: https://antaresphdev.b-cdn.net/downloads/idiomatic-text.zip
    details: 1.31 MB, ZIP file
related:
  - i-em-strong-b
resources:
  - https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
---

## Hindi para sa italic text

Hindi na natin ginagamit ang `<i>` tag para gawing italic ang text. Sa HTML5, may semantic meaning na ang tag na ito; hindi na lang ito ginagamit para ibahin ang styling ng text.

<figure class="quote">
  <blockquote>
    
    The `<i>` element represents a span of text in an *alternate voice or mood*, or otherwise offset from the normal prose in a manner indicating a *different quality of text*, such as a taxonomic designation, a technical term, an idiomatic phrase from another language, transliteration, a thought, or a ship name in Western texts.
  
  </blockquote>
  <figcaption>
    <cite><a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-i-element">HTML Living Standard</a></cite>, emphasis ours
  </figcaption>
</figure>

Nagiging italic pa rin ang text sa loob ng `<i></i>` tags para sa karamihan ng browsers by default. Pero this time, may dahilan na kung bakit. At higit sa lahat, puwedeng-puwede itong baguhin gamit ang CSS.

## Examples

Ang mga susunod ay mga halimbawa kung saan puwedeng gamitin ang `<i></i>` tag para sa semantic meaning nito.

<ul class="list--success">
  <li>
    <b>Text na sarcastic ang tono.</b>
    <pre><code>Wow. Ang <mark>&lt;i>ganda&lt;/i></mark>.</code></pre>
    <pre><code>Ang <mark>&lt;i>aga&lt;/i></mark> mo ha? ’Di ba alas-singko ang usapan natin?</code></pre>
  </li>
  <li>
    <b>Mga salitang hiram mula sa ibang wika.</b> Kapag hiram mula sa ibang wika ang salita, maglagay din ng <code>lang</code> attribute para i-indicate kung saang wika ito galing.
    <pre><code><mark>&lt;i lang="la"></mark>Et cetera&lt;/i> (Latin)</code></pre>
    <pre><code><mark>&lt;i lang="fr"></mark>Nous pardonneras-tu ô chère mère?&lt;/i> (French)</code></pre>
  </li>
  <li>
    <b>Mga scientific name ayon sa taxonomy.</b>
    <pre><code><mark>&lt;i>Homo Sapiens&lt;/i></mark> (Tao)</code></pre>
    <pre><code><mark>&lt;i>Canis Familiaris&lt;/i></mark> (Aso)</code></pre>
  </li>
  <li>
    <b>Mga jargon o technical terms.</b>
    <pre><code><mark>&lt;i>Document Object Model&lt;/i></mark> (isang concept mula sa mga browser)</code></pre>
    <pre><code><mark>&lt;i>Application Programming Interface&lt;/i></mark> (<abbr>API</abbr>)</code></pre>
  </li>
  <li>
    <b>Kapag kausap ng isang tauhan ang sarili niya sa isip niya.</b>
    <pre><code>&lt;p>Kinabahan si Marina nang mapagtanto niya ang bigat ng kaniyang sinabi. <mark>&lt;i>Na-offend kaya siya sa sinabi ko? Paano ko kaya siya haharapin kapag nagkita na kami bukas?&lt;/i></mark>&lt;/p></code></pre>
  </li>
</ul>

## Alternatives

Sa ilang kaso, baka hindi `<i>` ang kailangan mo. Pansinin ang susunod na mga halimbawa.

<ul class="list">
  <li>
    <b>Kung magbabago ang tono ng boses <em>as emphasis</em> kapag binasa ito</b>, gamitin ang <code>&lt;em></code> para i-emphasize ang text.
    <pre><code>Bakit ba, eh <mark>&lt;em>ayaw ko&lt;/em></mark> nga?</code></pre>
  </li>
  <li>
    <b>Kung importante at/o urgent ang text</b>, gamitin ang <code>&lt;strong></code> tag.
    <pre><code><mark>&lt;strong>Warning&lt;/strong></mark>: Deleting an item is irreversible. Continue?</code></pre>
  </li>
  <li>
    <b>Kung nasa same paragraph ang definition ng isang technical term</b>, gamitin ang <code>&lt;dfn></code> tag at i-define ang term sa parehong paragraph.
    <pre><code>&lt;p>Ang <mark>&lt;strong>animation&lt;/strong></mark> ay isang technique sa filmmaking kung saan mina-manipulate ang mga larawan para maging palabas.</code>&lt;/p></pre>
  </li>
  <li>
    <b>Kung for styling lang ang pagiging italic ng text</b>, Gumamit ng <code>&lt;span></code> o <code>&lt;div></code> tag at i-style ito gamit ang css.
    <pre><code><mark>&lt;span class="text-italic">Italic text&lt;/span></mark></code></pre>
  </li>
</ul>