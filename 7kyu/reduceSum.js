/* Use reduce() to calculate the sum of the values in an array
https://www.codewars.com/kata/532b4057484b0e58e8000766
Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.
*/
const sum = array => array.reduce((sum, num)=> sum+num, 0);
