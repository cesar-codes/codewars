/* Tea for two
https://www.codewars.com/kata/555a7dc335d4c407af00006e
Tea for two!

Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t
*/

const tea42 = input => input.toString().replace(/[2]/g, 't')
