function rollright(initialText,tokens) {
  let wordsArr = initialText.split(' ')
  let elementToRoll = wordsArr.pop()
  return elementToRoll + ' ' +  wordsArr.join(' ')
}
module.exports = {rollright}