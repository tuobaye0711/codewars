const longestConsec = (strarr, k) => {
    let len = strarr.length;
    if (len === 0 || k > len || k <= 0) {
        return ""
    }

    let arr = [];
    for (let i=0;i<len-k+1;i++){
        let count = 0;
        for(let j=0;j<k;j++){
            count += strarr[i+j].length
        }
        arr.push(count)
    }

    let max = Math.max(...arr);
    let index = arr.indexOf(max);

    let str='';
    for (let i=index;i<index+k;i++){
        str += strarr[i]
    }

    return str
}