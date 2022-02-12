/* Unlimited Sum
https://www.codewars.com/kata/536c738e49aa8b663b000301
Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers
*/
const sum = (...args) => args.filter(a => Number.isInteger(a)).reduce((a,b)=> a+b)
