const repeatStr = (n, s) => {
    let rs = '';
    do {
        rs += s;
        n--;
    } while (n > 0)
    return rs
}