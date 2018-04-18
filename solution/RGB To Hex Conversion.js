const decimalToHexadecimal = n => {
    if (n < 0) {
        return '00'
    } else if (n > 255) {
        return 'FF'
    } else {
        return n.toString(16).length < 2 ? '0' + n.toString(16).toUpperCase() : n.toString(16).toUpperCase()
    }
}
const rgb = (r, g, b) => decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b)