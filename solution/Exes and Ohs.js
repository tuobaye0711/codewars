const XO = str => {
    let count = 0;
    str.split('').forEach(element => {
        if (element.toLowerCase() === 'x') {
            count++
        } else if (element.toLowerCase() === 'o') {
            count--
        }
    })
    return count === 0 ? true : false
}