const EleventyFetch = require('@11ty/eleventy-fetch')
const { JSDOM } = require('jsdom')
const parse = require("node-html-parser").parse

module.exports = {
  markdown: function (value) {
    let markdown = require('markdown-it')({ html: true })

    let rendered = markdown.render(value)

    if (value.includes('\n'))
      return rendered

    const document = new JSDOM(rendered).window.document
    const p = document.querySelector('p')

    return p.innerHTML
  },

  icon: function (value) {
    return `<svg class="feather" aria-hidden="true"><use href="/assets/images/feather-sprite.svg#${value}" /></svg>`
  },

  humanReadableDate: function (value) {
    let formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' })
    return formatter.format(value)
  },

  machineReadableDate: function (value) {
    return new Date(value).toISOString()
  },

  year: function (value) {
    return new Date().getFullYear()
  },

  keys: obj => Object.keys(obj),

  values: obj => Object.values(obj),

  limit: (array, limit) => array.slice(0, limit),

  selectVideoType: (entries, type) => entries.filter(entry => entry.data.type === type),

  seo: async url => {
    const endpoint = new URL('https://api.microlink.io/')
    endpoint.searchParams.append('url', url)
    endpoint.searchParams.append('palette', true)
    endpoint.searchParams.append('audio', true)
    endpoint.searchParams.append('video', true)
    endpoint.searchParams.append('iframe', true)

    return await EleventyFetch(endpoint.toString(), { duration: '1d', type: 'json' })
  },
  metatags: {
    isAsync: true,
    function: async function (url) {
      console.log('[METATAGS]', url)
      try {
        const html = await EleventyFetch(url, { duration: '0s', type: 'text' })
        const document = parse(html)
        const rawMeta = {}
        rawMeta.title = document.querySelector('title')?.innerText;

        const metaTags = [...document.querySelectorAll('meta')]
        metaTags.forEach(meta => {
          if (meta.hasAttribute('name')) {
            rawMeta[meta.getAttribute('name')] = meta.getAttribute('content')
          }

          if (meta.hasAttribute('property')) {
            rawMeta[meta.getAttribute('property')] = meta.getAttribute('content')
          }
        })

        metadata = {
          title: rawMeta.title ? rawMeta.title : null,
          description: rawMeta.description
            ? rawMeta.description
            : rawMeta['og:description']
              ? rawMeta['og:description']
              : rawMeta['twitter:description']
                ? rawMeta['twitter:description']
                : null,
          url,
          image: rawMeta['og:image']
            ? rawMeta['og:image']
            : rawMeta['twitter:image']
              ? rawMeta['twitter:image']
              : null,
          themeColor: rawMeta['theme-color']
        }

        return metadata
      } catch (e) {
        console.error('[ERROR]', e)
        return { url, title: '', description: null }
      }
    }
  },
  toDate: str => new Date(Date.parse(str)),
  getPostBySlug: (posts, slug) => {
    const post = posts.find(page => {
      return page.url.indexOf(`/${slug}/`) !== -1
    })
    return post
  },
  cleanNewLines: str => str.replaceAll(/(\n[\r]*[\s]*){2,}/gm, '\n')
}