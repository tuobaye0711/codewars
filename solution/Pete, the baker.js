const cakes = (recipe, available) => {
    let arr = [];
    for (let k in recipe) {
        let obj = {
            name: k,
            need: recipe[k]
        }
        arr.push(obj)
    }
    for (let k in available) {
        let obj = {
            name: k,
            have: available[k]
        }
        arr.map(a => {
            if (a.name === obj.name) {
                Object.assign(a, obj)
            }
        })
    }
    return Math.min.apply(null, arr.map(a => {
        if (!a.have) {
            return 0
        }
        return parseInt(a.have / a.need)
    }))
}