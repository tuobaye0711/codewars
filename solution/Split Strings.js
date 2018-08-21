// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const solution = str => {
  if (str.length % 2 === 1) {
    str += "_";
  }
  let result = [];
  for (let i = 0; i < str.length - 1; i += 2) {
    result.push(str.substring(i, i + 2));
  }
  return result;
};
