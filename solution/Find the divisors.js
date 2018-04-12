const divisors = integer => {
    let arr = [];
    let i = 2;
    do {
        if (integer % i === 0) {
            arr.push(i)
        }
    } while (++i < integer)
    return arr.length === 0 ? `${integer} is prime` : arr
}