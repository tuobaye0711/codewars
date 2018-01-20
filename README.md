#codewars

***

1.(6kyu) Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]

solution:

    var uniqueInOrder=function(iterable){
      if ((typeof(iterable) === 'string') || (typeof(iterable) === 'number')){
          var arr = (iterable+'').split('')
      }else {
          var arr = iterable
      }

      if (arr.length === 0){
          return []
      }else {
          var unique_arr = []
          for (let i=0; i<arr.length-1; i++){
              if (arr[i] !== arr[i+1]){
                  unique_arr.push(arr[i])
              }
          }
          unique_arr.push(arr[arr.length-1])
          return unique_arr
      }
    }

2.(7kyu) Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

    Input: 21445 Output: 54421
    Input: 145263 Output: 654321
    Input: 1254859723 Output: 9875543221

solution:

    function descendingOrder(n){
      return parseInt((n+'').split('').sort().reverse().join(''))
    }

3.(7kyu) You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

    runBF("test\0") should return "es"
    runBF("testing\0") should return "t"
    runBF("middle\0") should return "dd"
    runBF("A\0") should return "A"

solution:

    function getMiddle(s)
    {
      if (s.length%2 === 0){
        return (s.charAt(s.length/2-1)+s.charAt(s.length/2))
    }else {
        return (s.charAt((s.length-1)/2))
      }
    }

4.(6kyu) In this kata, you must create a digital root function.

A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

Here's how it works (Ruby example given):

    digital_root(16)
    => 1 + 6
    => 7

    digital_root(942)
    => 9 + 4 + 2
    => 15 ...
    => 1 + 5
    => 6

    digital_root(132189)
    => 1 + 3 + 2 + 1 + 8 + 9
    => 24 ...
    => 2 + 4
    => 6

    digital_root(493193)
    => 4 + 9 + 3 + 1 + 9 + 3
    => 29 ...
    => 2 + 9
    => 11 ...
    => 1 + 1
    => 2

solution:

    function digital_root(n) {
        if (n < 10){
            return n
        }else {
            return arguments.callee((n+'').split('').reduce(function (a,b) {
                return parseInt(a) + parseInt(b)
            }))
        }
    }

5.(6kyu) Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1:

    a1 = ["arp", "live", "strong"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns ["arp", "live", "strong"]

#Example 2:

    a1 = ["tarp", "mice", "bull"]
    a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
    returns []

solution:

    function inArray(array1,array2){
       let arr=[];
       array1.forEach(function (a1) {
           array2.some(function (a2) {
               if (a2.search(a1) > -1){
                   if (!arr.includes(a1)){
                       arr.push(a1);
                       return true
                   }
               }
           })
       });
        return arr.sort()
    }

6.(6kyu) Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

    iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
    iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

solution:

    function iqTest(numbers){
        let arr = numbers.split(' ');
        if (arr.length === 1){
            return 1
        }else {
            let mapping_arr = arr.map(function (a) {
                return Math.abs(a - arr[0])%2
            });
            let sum = mapping_arr.reduce(function (a, b) {
                return a+b
            });
            return (sum === 1)?(mapping_arr.indexOf(1)+1):(mapping_arr.indexOf(0)+1)
        }
    }

7.(6kyu) You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

solution:

    function isValidWalk(walk) {
        if (walk.length !== 10){
            return false
        }else {
            let walk_count ={
                n: 0,
                s: 0,
                e: 0,
                w: 0
            };
            walk.forEach(function (dir) {
                switch (dir){
                    case 'n':
                        walk_count.n++;
                        break;
                    case 's':
                        walk_count.s++;
                        break;
                    case 'e':
                        walk_count.e++;
                        break;
                    case 'w':
                        walk_count.w++;
                        break;
                }
            });
            return walk_count.n === walk_count.s && walk_count.e === walk_count.w
        }
    }

8.(6kyu) Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples

Valid arrays

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If we change the first number to something else, comp may not return true anymore:

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

    a = [121, 144, 19, 161, 19, 144, 19, 11]
    b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks

a or b might be [] (all languages except R, Shell). a or b might be nil or null or None (except in Haskell, Elixir, C++, Rust, R, Shell).
If a or b are nil (or null or None), the problem doesn't make sense so return false.
If a or b are empty the result is evident by itself.

solution:

    function comp(array1, array2){
        if (!array1 || !array2){
            return false
        }
        if (array1.length === 0 && array2.length === 0){
            return true
        }else if (array1.length !== array2.length){
            return false
        }else {
            let sorted_array1 = array1.sort(function (a, b) {
                return a < b
            });
            let sorted_array2 = array2.sort(function (a, b) {
                return a < b
            });
            return sorted_array1.every(function (a1, index) {
                return a1*a1 === sorted_array2[index]
            })
        }
    }