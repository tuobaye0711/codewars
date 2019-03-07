// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

const upside = arr => arr.shift();
const rightside = arr => {
  const result = [];
  arr.forEach(i => result.push(i.pop()));
  return result;
};
const downside = arr => arr.pop().reverse();
const leftside = arr => {
  const result = [];
  arr.forEach(i => result.push(i.shift()));
  return result.reverse();
};

const snail = array => {
  const result = [];
  while (array.length) {
    result.push(...upside(array));
    if (!array.length) break;
    result.push(...rightside(array));
    if (!array.length) break;
    result.push(...downside(array));
    if (!array.length) break;
    result.push(...leftside(array));
  }
  return result;
};
