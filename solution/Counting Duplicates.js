const duplicateCount = text => {
    let existSet = new Set();
    let repeatSet = new Set();
    text.toLowerCase().split('').forEach(t => {
        if (existSet.has(t)){
            repeatSet.add(t)
        }else{
            existSet.add(t)
        }
    })
    return repeatSet.size
}