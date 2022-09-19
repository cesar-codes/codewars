/* Number Pairs
https://www.codewars.com/kata/563b1f55a5f2079dc100008a
 In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/
function getLargerNumbers(a, b) {
    let newArray = []
    for (let i = 0; i < a.length; i++){
      a[i] > b[i] ? newArray.push(a[i]) : newArray.push(b[i])
    }
    return newArray
  }
  