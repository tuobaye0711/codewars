var number = function (busStops) {
    let x = 0;
    busStops.forEach(a => x = x + a[0] - a[1]);
    return x
}