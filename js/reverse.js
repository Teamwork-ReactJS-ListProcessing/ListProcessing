function reverse(text){
    text = text.split(' ')
    
    let newStr = '';
    for(let i = text.length-1; i >= 0; i--){
        newStr= newStr + ' ' + text[i]
        
    }
    return newStr
}

module.export = { reverse }





