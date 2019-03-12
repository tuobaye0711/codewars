// Instructions
// Output
// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

/**
 * @description: 这种方法解决不了大数问题
 * @param {type}
 */
// const sumStrings =  (...args) => args.map(i => parseInt(i)).reduce((a,b) => a+b).toString()

const sumStrings = (a, b) => {
  let ac = 0;
  const arrA = a
    .split("")
    .map(i => i * 1)
    .reverse();
  const arrB = b
    .split("")
    .map(i => i * 1)
    .reverse();
  const calc = (arrayA, arrayB) => {
    let i = 0;
    let len = Math.max(arrayA.length, arrayB.length);
    let sum = [];
    for (let i = 0; i < len; i++) {
      if (!arrayA[i]) arrayA[i] = 0;
      if (!arrayB[i]) arrayB[i] = 0;
      sum[i] =
        arrayA[i] + arrayB[i] + ac > 9
          ? (arrayA[i] + arrayB[i] + ac).toString().split("")[1]
          : (arrayA[i] + arrayB[i] + ac).toString();
      ac = arrayA[i] + arrayB[i] + ac > 9 ? 1 : 0;
    }
    if (ac > 0) sum.push("1");
    if (sum[sum.length-1] === '0') sum.pop();
    return sum.reverse().join("");
  };
  return calc(arrA, arrB);
};
