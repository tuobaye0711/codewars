const validParentheses = parens => {
    do {
        if (parens.replace(/\(\)/g, '') === parens) {
            return false
        } else {
            parens = parens.replace(/\(\)/g, '')
        }
    }
    while (parens !== '')
    return true
}