/* Sum of all arguments
https://www.codewars.com/kata/540c33513b6532cd58000259
Write a function that finds the sum of all its arguments.
*/
const sum = (...args) => [...args].reduce((a,b)=>a+b)
