const toCamelCase = str => {
    if(str.indexOf('-') > 0){
        return str.split('-').map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.substr(1)).join('')
    }else if (str.indexOf('_') > 0){
        return str.split('_').map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.substr(1)).join('')
    }else{
        return ''
    }
}