// (5kyu) The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

// https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/train/javascript

const perimeter = n => {
  if (n <= 1) {
    return 4 * (n + 1);
  }
  let result = 8;
  let count = 1;
  let cur = 2;
  let prev = 1;
  do {
    result += 4 * cur;
    temp = cur;
    cur += prev;
    prev = temp;
    count++;
  } while (count < n);
  return result;
};
