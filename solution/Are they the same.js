function comp(array1, array2){
    if (!array1 || !array2){
        return false
    }
    if (array1.length === 0 && array2.length === 0){
        return true
    }else if (array1.length !== array2.length){
        return false
    }else {
        let sorted_array1 = array1.sort(function (a, b) {
            return a < b
        });
        let sorted_array2 = array2.sort(function (a, b) {
            return a < b
        });
        return sorted_array1.every(function (a1, index) {
            return a1*a1 === sorted_array2[index]
        })
    }
}