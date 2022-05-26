/* True for Any
https://www.codewars.com/kata/54598e89cbae2ac001001135
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
*/
const any = (arr, fun) => arr.some(fun)
