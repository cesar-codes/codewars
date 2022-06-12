/* Exes and Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
function XO(str) {
    str = str.toLowerCase()
    let x = str.split('').filter(a => a=='x')
    let o = str.split('').filter(a => a=='o')
    return x.length == o.length
  }
  