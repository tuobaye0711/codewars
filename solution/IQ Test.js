function iqTest(numbers){
    let arr = numbers.split(' ');
    if (arr.length === 1){
        return 1
    }else {
        let mapping_arr = arr.map(function (a) {
            return Math.abs(a - arr[0])%2
        });
        let sum = mapping_arr.reduce(function (a, b) {
            return a+b
        });
        return (sum === 1)?(mapping_arr.indexOf(1)+1):(mapping_arr.indexOf(0)+1)
    }
}