function digital_root(n) {
    if (n < 10){
        return n
    }else {
        arguments.callee((n+'').split('').reduce(function (a,b) {
            return parseInt(a) + parseInt(b)
        }))
    }
}
