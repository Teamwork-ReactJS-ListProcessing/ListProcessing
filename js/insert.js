function insert(initialText, token, index){
    
    let text = initialText.slice(0,index) + token + initialText.slice(index);

    return text
}

module.exports = { insert }


