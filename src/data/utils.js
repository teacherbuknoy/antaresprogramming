module.exports = {
  jsonify: jsonString => JSON.parse(jsonString),
  getEmbedCode: str => {
    const substr = str.split('/')
    return substr[substr.length - 1]
  }
}