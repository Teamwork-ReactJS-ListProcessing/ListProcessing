function rollleft(initialText,tokens) {
    let wordsArr = initialText.split(' ')
    let elementToRoll = wordsArr.shift()
    return wordsArr.join(' ') + ' ' + elementToRoll  
  }
  module.exports = {rollleft}