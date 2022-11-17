/* The average length
https://www.codewars.com/kata/5a430359e1ce0e35540000b1
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1
*/

function averageLength(arr) { 
    //figure out the average length of each elem and round it
    let aver = Math.round(arr.map(e => e.length).reduce((a,b) => a + b) / arr.length)
    // return an array with the first string of each elem repeated xaver times
    return arr.map(e => e[0].repeat(aver))
  }