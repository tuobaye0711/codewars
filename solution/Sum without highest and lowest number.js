const sumArray = array => {
    if (!array) {
        return 0
    }
    let s = 0;
    array.sort((a, b) => a - b).forEach((a, i) => {
        if (i !== array.length - 1 && i !== 0) {
            s += a;
        }
    })
    return s;
}