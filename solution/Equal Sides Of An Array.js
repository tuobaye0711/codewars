const findEvenIndex = arr => {
    let sum = 0,
        sum_left = 0,
        sum_right = 0,
        index;
    sum = arr.reduce((a, b) => a + b);
    for (let i = 0; i < arr.length; i++) {
        if (i < 1) {
            sum_left = 0;
            sum_right = sum - arr[i];
        } else {
            sum_left += arr[i - 1];
            sum_right -= arr[i]
        }
        if (sum_left === sum_right) {
            index = i
        }
    }
    return index || -1
}