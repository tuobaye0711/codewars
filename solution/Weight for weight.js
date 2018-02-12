const orderWeight = string => string.trim() ? string.trim().split(/\s+/).map(s => [s.split('').map(n => parseInt(n)).reduce((a, b) => a + b), s]).sort((a, b) => {
    if (a[0] < b[0]) {
        return -1
    } else if (a[0] > b[0]) {
        return 1
    } else if (a[1] < b[1]) {
        return -1
    } else if (a[1] > b[1]) {
        return 1
    } else {
        return 0
    }
}).map(arr => arr[1]).join(' ') : ''