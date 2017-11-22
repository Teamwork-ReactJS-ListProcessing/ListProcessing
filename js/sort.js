function sort(initialText,tokens) {
  let wordsArr = initialText.split(' ')
  wordsArr = wordsArr.sort()
  return wordsArr.join(' ')
}
module.exports = {sort}