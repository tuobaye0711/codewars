const narcissistic = value => {
    let arr = value.toString().split('').map(s => parseInt(s));
    let sum = 0;
    for (let i = 0; sum < value; i++) {
        sum = 0;
        arr.forEach(n => sum += Math.pow(n, i))
        if (sum === value) {
            return true
        }
    }
    return false
}