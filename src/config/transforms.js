const prettier = require('prettier')
const path = require('path')

module.exports = {
  prettier: (content, outputPath) => {
    if (outputPath.includes('/assets/'))
      return content

    const extname = path.extname(outputPath)
    switch (extname) {
      case '.json':
        return JSON.stringify(JSON.parse(content), null, 2)
      case '.html':
        const parser = extname.replace(/^./, "")
        return prettier.format(content, { parser, singleAttributePerLine: false, printWidth: 100 })
      default:
        return content
    }
  },
  'focusableCodeSnippets': function(content, outputPath) {
    const extname = path.extname(outputPath)
    if (extname === '.html') {
      return content.replaceAll(/<pre\s*class="language/gm, '<pre tabindex="0" class="language')
    }

    return content
  }
}