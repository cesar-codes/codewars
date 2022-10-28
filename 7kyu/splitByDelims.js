/* Split string by multiple delimiters
https://www.codewars.com/kata/575690ee34a34efb37001796
Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

Example:

multipleSplit('Hi, how are you?', [' ']) => ['Hi,', 'how', 'are', 'you?']
multipleSplit('1+2-3', ['+', '-']) => ['1', '2', '3']
List of delimiters is optional and can be empty, so take that into account.

Important note: Result cannot contain empty string.
 */
const multipleSplit = (string, d=[]) => {
    // check if the str or delimeter are empty => return string
    if ( string && d.length === 0) return [string]
    // else return the string split by each delimeter
    return string.split('')
    // return non delim values or ' '
    .map( val => !d.includes(val) ? val : ' ')
    // replace double spaces w/ single spaces
    .join('').replace(/\s{2}/g, ' ')
    .split(' ')
    .filter(val => val.length)
  