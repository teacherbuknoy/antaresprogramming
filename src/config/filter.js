const EleventyFetch = require('@11ty/eleventy-fetch')
const { JSDOM } = require('jsdom')

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
  }
}