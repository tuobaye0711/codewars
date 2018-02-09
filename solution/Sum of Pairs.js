// 这个方法可以实现功能，但是在数组长度巨大的情况下处理效率低下
const sum_pairs_1 = (ints, s) => {
    for (let i = 1; i < ints.length; i++) {
        for (let j = 0; j < i; j++) {
            if (ints[i] + ints[j] === s) {
                return [ints[j], ints[i]]
            }
        }
    }
    return undefined
}

// 使用可迭代对象对数组进行去重
const sum_pairs_2 = (ints, s) => {
    let deduplicate_ints = Array.from(new Set(ints));
    for (let i = 1; i < deduplicate_ints.length; i++) {
        for (let j = 0; j < i; j++) {
            if (deduplicate_ints[i] + deduplicate_ints[j] === s) {
                return [deduplicate_ints[j], deduplicate_ints[i]]
            }
        }
    }
    return undefined
}

// 同一个元素保存两个，再多的再去重
const sum_pairs_3 = (ints, s) => {
    if (ints.filter(int => int === s / 2).length > 1) {
        return [s / 2, s / 2]
    }
    let deduplicate_ints = Array.from(new Set(ints));
    for (let i = 1; i < deduplicate_ints.length; i++) {
        for (let j = 0; j < i; j++) {
            if (deduplicate_ints[i] + deduplicate_ints[j] === s) {
                return [deduplicate_ints[j], deduplicate_ints[i]]
            }
        }
    }
    return undefined
}

// 同一个元素保存两个，再多的再去重

// 查询数字num在数组arr中的个数
const number_in_array_4 = (arr, num) => arr.filter(i => i === num).length;

const sum_pairs = (ints, s) => {
    let dealed_ints = ints.filter(int => number_in_array(ints, int) === 1 || number_in_array(ints, int) === 2)
    for (let i = 1; i < dealed_ints.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dealed_ints[i] + dealed_ints[j] === s) {
                return [dealed_ints[j], dealed_ints[i]]
            }
        }
    }
    return undefined
}

// 还是得回到Set的老路上来
const sum_pairs = (ints, s) => {
    let int_set = new Set([ints[0]]);
    for (let i = 1; i < ints.length; i++) {
        if (int_set.has(s - ints[i])) {
            return [s - ints[i], ints[i]]
        }
        int_set.add(ints[i])
    }
    return undefined
}