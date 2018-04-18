const findNb = m => {
    let sum = 0,
        count = 1;
    do {
        sum += Math.pow(count, 3)
        if (sum === m) return count;
        count++
    } while (sum < m)
    return -1
}