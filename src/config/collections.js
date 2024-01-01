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
  }
}