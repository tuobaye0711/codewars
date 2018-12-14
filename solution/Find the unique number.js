// (6kyu) There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = arr => {
	console.log("​arr", arr)
  const newArr = arr.sort();
  if(newArr[0]===newArr[1]){
    return newArr.reverse()[0]
  }else{
    return newArr[0]
  }
};
