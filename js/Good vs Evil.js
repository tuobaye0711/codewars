function goodVsEvil(good, evil) {
    const config = {
        good: {
            Hobbits: 1,
            Men: 2,
            Elves: 3,
            Dwarves: 3,
            Eagles: 4,
            Wizards: 10
        },
        evil: {
            Orcs: 1,
            Men: 2,
            Wargs: 2,
            Goblins: 2,
            Uruk: 3,
            Trolls: 5,
            Wizards: 10
        }
    };

    let good_arr = good.split(' ');
    let evil_arr = evil.split(' ');

    function getValues(obj) {
        let value_arr = [];
        for (let i in obj) {
            value_arr.push(obj[i])
        }
        return value_arr
    }

    let good_sum = getValues(config.good).reduce(function (sum, value, index) {
            return sum + value * parseInt(good_arr[index])
        }) + good_arr[0] * 1 - 1;
    let evil_sum = getValues(config.evil).reduce(function (sum, value, index) {
            return sum + value * parseInt(evil_arr[index])
        }) + evil_arr[0] * 1 - 1;

    let result = good_sum - evil_sum;

    return result > 0 ? "Battle Result: Good triumphs over Evil" :
        result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
            "Battle Result: No victor on this battle field";
}