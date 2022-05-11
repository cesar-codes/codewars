/* Odd or Even
https://www.codewars.com/kata/5949481f86420f59480000e7
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).


*/

function oddOrEven(array) {
    //enter code here
   if (array.length == 0) array.push(0)
   let r = array.reduce((a,b)=>a+b)
   return r % 2 == 0 ? 'even' : 'odd';
 }
 