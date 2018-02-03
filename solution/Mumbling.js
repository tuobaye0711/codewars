const accum = s => {
    let arr1 = s.split('');
    let arr2 = arr1.map((a, index) => {
        let s = '',
            i = 0;
        do {
            s ? s += a.toLowerCase() : s += a.toUpperCase();
            i++;
        } while (s.length < index + 1)
        return s
    })
    return arr2.join('-')
}