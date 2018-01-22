var uniqueInOrder=function(iterable){
    if ((typeof(iterable) === 'string') || (typeof(iterable) === 'number')){
        var arr = (iterable+'').split('')
    }else {
        var arr = iterable
    }

    if (arr.length === 0){
        return []
    }else {
        var unique_arr = [];
        for (let i=0; i<arr.length-1; i++){
            if (arr[i] !== arr[i+1]){
                unique_arr.push(arr[i])
            }
        }
        unique_arr.push(arr[arr.length-1]);
        return unique_arr
    }
}