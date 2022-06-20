/* This is odd
https://www.codewars.com/kata/554003323fd6af1c4200004e
Create a function that checks if a number is odd.

Expect negative and decimal numbers too. Remember... all negative numbers can also be either odd or even.

Decimal numbers always return false
*/
function isOdd(n) {
    n = Math.abs(n)
    let mod = n % 2 
    if (Number.isInteger(mod) === false) return false
    else return Math.round(n%2 === 0) ? false : true
  }
  