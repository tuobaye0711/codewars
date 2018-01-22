function scramble(str1, str2) {
    let arr = str2.split('').sort();
    let sorted_str1 = str1.split('').sort().join();

    return arr.every(function (a) {
        let i = sorted_str1.indexOf(a);
        if (i > -1){
            sorted_str1 = sorted_str1.substring(i+1, sorted_str1.length);
            return true
        }else {
            return false
        }
    })
}
