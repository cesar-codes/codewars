/* Formatting decimal places #0
https://www.codewars.com/kata/5641a03210e973055a00000d
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests
*/

const twoDecimalPlaces = n => +(n.toFixed(2))
