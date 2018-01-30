const dblLinear = (n) => {
    let u = [1];
    let i = j = 0,
        y, z;
    while (u.length <= n) {
        y = 2 * u[i] + 1;
        z = 3 * u[j] + 1;
        if (y < z) {
            u.push(y);
            i++
        } else if (y > z) {
            u.push(z)
            j++
        } else {
            u.push(y);
            i++;
            j++;
        }
    }
    return u[u.length - 1]
}