/* Array Power
https://www.codewars.com/kata/596e5b0fdba3fa5fa7000026
 You are given an array called arr.

TASK: Your job is to return a multidimensonal array with arr in it using arrow functions. The length of the array you are returning depends on the length of arr.

EXAMPLES:

[1,2,3] --> [[1,2,3],[1,2,3],[1,2,3]]

['a','b'] --> [['a','b'],['a','b']]

[1,2,3,4,5] --> [[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]]

And BTW. Your code needs to be less than 35 characters long.

Good Luck!*/
arrayPower=arr=>Array(arr.length).fill(arr)
