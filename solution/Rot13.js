const rot13 = str => {
    const source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const target = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

    return str.split('').map(s => source.indexOf(s) === -1 ? s : target[source.indexOf(s)]).join('')
}