const tribonacci = (signature, n) => {
    if (n <= 3) {
        return signature.slice(0, n)
    }
    let arr = signature;
    let i = 3;
    do {
        arr.push(arr[i - 3] + arr[i - 2] + arr[i - 1]);
        i++
    } while (arr.length < n)
    return arr
}