// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortArray = array => {
  let oddArray = array.filter((num, i) => i % 2 === 1);
  const evenArray = array.filter((num, i) => i % 2 === 0);
  oddArray.
  oddArray = oddArray.sort((a, b) => {
    if (a !== 0) {
      return a - b;
    }
  });
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      result.push(oddArray[i / 2]);
    } else {
      result.push(evenArray[(i - 1) / 2]);
    }
  }
  return result;
};
