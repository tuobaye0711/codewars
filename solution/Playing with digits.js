const digPow = (n, p) => {
    return n.toString().split('').map(s => parseInt(s)).reduce((sum, n, i) => sum += Math.pow(n, p + i), 0) % n === 0 ? n.toString().split('').map(s => parseInt(s)).reduce((sum, n, i) => sum += Math.pow(n, p + i), 0) / n : -1
}