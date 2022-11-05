/* Dashatize it
 https://www.codewars.com/kata/58223370aef9fc03fd000071
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
const dashatize = num => isNaN(num) ? 'NaN' : num.toString().match(/[13579]|[02468]+/g).join('-')
