// 判断数字是否为回文，回文返回true，非回文返回数字的逆序值
const isPalindromic = n => n.toString().split('').reverse().join('') * 1 === n ? true : n.toString().split('').reverse().join('') * 1;

const palindromeChainLength = n => {
    let num = n;
    let count = 0;
    if (isPalindromic(num) === true) {
        return 0
    }
    do {
        num = num + isPalindromic(num);
        count++
    } while (isPalindromic(num) !== true)
    return count
}