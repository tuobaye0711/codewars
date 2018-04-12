const list = names => {
    let arr = names.map(e => e.name);
    let str = arr.join(', ');
    let number = arr.length;
    return number > 1 ? str.replace(/(.*), /, '$1 & ') : str
}