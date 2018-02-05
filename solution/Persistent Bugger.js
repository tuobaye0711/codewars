const multiplySelf = num => num.toString().split('').reduce((a, b) => a * b)

const persistence = num => {
    if (num < 10) {
        return 0
    }
    let n = num;
    let count = 0;
    do {
        n = multiplySelf(n);
        count++;
    } while (n > 9)
    return count
}