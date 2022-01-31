/* CSV representation of array
https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
Create a function that returns the CSV representation of a two-dimensional numeric array.
 */

const toCsvText = array => array.map( a => a.join(',') ).join('\n') 

//const toCsvText = array => array.join('\n')
