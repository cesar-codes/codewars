/* Flatten
https://www.codewars.com/kata/5250a89b1625e5decd000413
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
*/
const flatten = array => [].concat.apply([], array) //concat.apply will flatten it
