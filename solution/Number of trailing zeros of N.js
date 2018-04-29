const createArray = (n) => {
    let arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

const zeros = (n) => {
    let arr = createArray(n);
    let count = 0;
    arr.forEach(num => {
        if (num % 10 === 0){
            while (num % 10 === 0) {
                num = parseInt(num / 10);
                count++
            }
        }
        if (num % 10 === 5){
            while (num % 10 === 5) {
                num = parseInt(num / 5);
                count++
            }
        }
    })
    return count
}
