function count(initialText,tokens) {
  let wordsArr = initialText.split(' ')
  let counter = 0
  for (let word of wordsArr) {
    if (word === tokens) {
      counter++
    }
  }
  return counter
}
module.exports = {count}