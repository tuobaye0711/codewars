const findOutlier = integers => {
    let arr = integers.map(int => Math.abs(int) % 2 === 0 ? 0 : 1);
    sum = arr.reduce((a, b) => a + b);
    return sum === 1 ? integers[arr.indexOf(1)] : integers[arr.indexOf(0)]
}