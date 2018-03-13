const maxSequence = arr => {
    let sum = 0;
    let max = 0;
    let start = 0;
    let end = 0;
    arr.forEach((n, i) => {
        if (sum + n >= 0) {
            sum += n;
            end++
        } else {
            start = i + 1;
            end = i + 1;
            sum = 0;
        }
        if (max < sum) {
            max = sum;
        }
    })
    return max
}