const countBits = n => n.toString(2).split('').map(s => parseInt(s)).reduce((acc, cur, index) => {
    if (index === 1){
        if (acc === 1){
            acc = 1
        }else{
            acc = 0
        }
    }
    if (cur === 1){
        return ++acc
    }else{
        return acc
    }
})