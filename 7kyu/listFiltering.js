/* List filtering
https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

*/
const filter_list = l => l.filter(a => Number.isInteger(a))
