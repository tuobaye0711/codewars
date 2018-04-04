const validBraces = braces => {
    let left = '([{';
    let right = ')]}';
    let tmp = [];
    let bracesArr = braces.split('');

    let dual = str => {
        switch (str) {
            case ')':
                return '('
            case ']':
                return '['
            case '}':
                return '{'
            default:
                return str;
        }
    }

    bracesArr.every(b => {
        if (left.indexOf(b) !== -1) {
            tmp.push(b);
            return true
        } else if (right.indexOf(b) !== -1) {
            return tmp.pop() === dual(b) ? true : tmp.push(b) === tmp
        }
    })

    return tmp.length === 0 ? true : false
}