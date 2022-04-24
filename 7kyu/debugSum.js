/* Debug Sum of Digits of a Number
https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.
*/
const getSumOfDigits = integer => {
    integer = integer.toString().split('')
    return integer.reduce((a,b) => +a + +b, 0)
  }
  