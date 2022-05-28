/* Remove First and Last Character Part Two
https://www.codewars.com/kata/570597e258b58f6edc00230d
You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
*/
const array = arr => arr.split(",").slice(1,-1).join(" ") || null;
