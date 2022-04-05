/* Fake Binary
https://www.codewars.com/kata/57eae65a4321032ce000002d
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
    x = x.split('')
    let r = x.map(a => a < 5 ? a = 0 : a = 1, 0 )
  return r.join('');
}