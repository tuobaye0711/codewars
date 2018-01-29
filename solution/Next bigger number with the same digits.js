// 判断数字序列是否为降序排列
const isDesc = n => {
    let arr = (n + '').split('').map(a => parseInt(a));
    return arr.every((a, i) => {
        if (i < arr.length - 1) {
            return a >= arr[i + 1] ? true : false
        } else {
            return true
        }
    })
}

// 截取数字的后x位数对应字符串
const sliceNumber = (n, x) => (n + '').substr((n + '').length - x);

// 主函数
const nextBigger = n => {
    console.log(n)
    let len = (n + '').length;
    if (len <= 1) {
        return -1
    }

    let marked_index, sliced_number, remained_number;
    for (let i = 1; i <= len; i++) {
        if (!isDesc(sliceNumber(n, i))) {
            marked_index = i;
            sliced_str = sliceNumber(n, i - 1);
            remained_str = ((n - sliced_str) * (Math.pow(10, -1 * (i - 1)))).toString();
            break;
        }
        if (i === len) {
            return -1
        }
    }
    let marked_str = (n + '').split('')[len - marked_index];
    let asc_array = sliced_str.split('').sort();
    let change_number
    asc_array.some((n, i) => {
        if (n > parseInt(marked_str)) {
            change_number = n;
            asc_array.splice(i, 1, parseInt(marked_str))
            return true
        }
    })
    let new_str = asc_array.join('');

    return parseInt(remained_str.substr(0, remained_str.length - 1) + change_number.toString() + new_str)
}