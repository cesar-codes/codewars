/* Find numbers which are divisible by a given number
https://www.codewars.com/kata/55edaba99da3a9c84000003b
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
 */
const divisibleBy = (numbers, divisor) => numbers.filter(elem => elem % divisor == 0)
