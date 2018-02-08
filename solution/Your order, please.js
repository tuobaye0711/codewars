const order = words => {
    if (words === '') {
        return ''
    }
    let arr = [];
    words.split(' ').forEach(str => {
        arr[str.match(/[1-9]/) - 1] = str
    })
    return arr.join(' ')
}