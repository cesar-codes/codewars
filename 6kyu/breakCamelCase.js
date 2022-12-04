/* Break camelCase
https://www.codewars.com/kata/5208f99aee097e6552000148
Complete the solution so that the function will break up camel casing, using a space between words.
 */

// using map and no regex 
const solution = string => {
    return string.split('')
    // add a space before any upper cases and join
      .map(letter => letter === letter.toUpperCase() ? ` ${letter}` : letter)
      .join('')
  }


/* // using map and no regex 
const solution = string => {
    return string.split('')
    // add a space before any upper cases and join
      .map(letter => letter === letter.toUpperCase() ? ` ${letter}` : letter)
      .join('')
  }
 */
/* 
// using regex
function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
} */