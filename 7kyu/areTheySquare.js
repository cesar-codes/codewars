/* Are they square?
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false

isSquare([]) --> undefined
is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> None
 */

const isSquare = arr => arr.length ? arr.every(num => Math.sqrt(num) % 1 === 0 ): undefined


/* var isSquare = function(arr){
    console.log(arr)
    if (arr.length < 1) return undefined
    return arr.every(a => Math.sqrt(a) % 1 === 0)
  } */