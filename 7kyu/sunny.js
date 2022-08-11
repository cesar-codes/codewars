/* Sunny
https://www.codewars.com/kata/599c20626bd8795ce900001d
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
*/
const summy = stringOfInts => stringOfInts.split(' ').reduce((a,b) => a + +b, 0)
