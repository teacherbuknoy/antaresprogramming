module.exports = {
  pages: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/pages/*.html",
      "src/collections/pages/*.njk",
      "src/collections/pages/*.md",
    ])
  },

  articles: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/articles/*.html",
      "src/collections/articles/*.njk",
      "src/collections/articles/*.md",
    ])
  },

  videos: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/videos/*.html",
      "src/collections/videos/*.njk",
      "src/collections/videos/*.md",
    ]).filter(video => video.data.type === 'full')
  },

  shorts: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/videos/*.html",
      "src/collections/videos/*.njk",
      "src/collections/videos/*.md",
    ]).filter(video => video.data.type === 'short')
  },

  labs: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/labs/*.html",
      "src/collections/labs/*.njk",
      "src/collections/labs/*.md",
    ])
  },

  infographics: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/infographics/*.html",
      "src/collections/infographics/*.njk",
      "src/collections/infographics/*.md",
    ])
  },

  resources: function (collections) {
    return collections.getFilteredByGlob([
      "src/collections/resources/*.html",
      "src/collections/resources/*.njk",
      "src/collections/resources/*.md",
    ])
  },
  everything: (collections) => collections.getFilteredByGlob([
    "src/collections/infographics/*.html",
    "src/collections/infographics/*.njk",
    "src/collections/infographics/*.md",
    "src/collections/videos/*.html",
    "src/collections/videos/*.njk",
    "src/collections/videos/*.md",
    "src/collections/articles/*.html",
    "src/collections/articles/*.njk",
    "src/collections/articles/*.md",
  ])
}